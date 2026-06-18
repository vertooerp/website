/**
 * POST /api/contact — Kontaktformular-Handler
 *
 * Nimmt das Formular von Contact.astro entgegen, validiert,
 * und versendet eine E-Mail via Resend an kontakt@tapandtype.de.
 *
 * Env-Vars (als verschlüsselte Secrets in CF Pages Settings):
 *   RESEND_API_KEY    — Resend API Key (Pflicht)
 *   CONTACT_TO        — Empfänger (Default: kontakt@tapandtype.de)
 *   CONTACT_FROM      — Absender (Default: "VertooERP Kontakt <onboarding@resend.dev>")
 *
 * Schutz:
 *   - Honeypot-Feld (name="website") — Bots füllen es aus, Menschen nicht
 *   - Minimal-Validierung (E-Mail-Format, Vorname)
 *   - Cloudflare Edge übernimmt DDoS / Rate-Limiting
 */

const DEFAULT_TO = 'kontakt@tapandtype.de';
const DEFAULT_FROM = 'VertooERP Kontakt <onboarding@resend.dev>';

export async function onRequestPost({ request, env }) {
  // Body parsen (akzeptiert sowohl Form-Data als auch JSON)
  let data;
  const contentType = request.headers.get('content-type') || '';

  try {
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const fd = await request.formData();
      data = Object.fromEntries(fd);
    }
  } catch {
    return jsonResponse({ error: 'Anfrage konnte nicht gelesen werden.' }, 400);
  }

  // Honeypot — wenn ausgefüllt, ist es ein Bot. Wir tun so, als sei alles OK.
  if (data.website && String(data.website).trim() !== '') {
    return jsonResponse({ ok: true });
  }

  // Validation
  const vorname = String(data.vorname || '').trim();
  const nachname = String(data.nachname || '').trim();
  const email = String(data.email || '').trim();
  const firma = String(data.firma || '').trim();
  const nachricht = String(data.nachricht || '').trim();

  if (!vorname) {
    return jsonResponse({ error: 'Bitte geben Sie Ihren Vornamen an.' }, 400);
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }, 400);
  }

  if (!env.RESEND_API_KEY) {
    console.error('contact: RESEND_API_KEY fehlt');
    return jsonResponse({ error: 'Server-Konfiguration unvollständig.' }, 500);
  }

  const fullName = [vorname, nachname].filter(Boolean).join(' ');
  const subject = `Neue Anfrage von ${fullName}${firma ? ` (${firma})` : ''}`;
  const text = [
    'Neue Kontaktanfrage über vertoo.de:',
    '',
    `Name:        ${fullName}`,
    `E-Mail:      ${email}`,
    `Unternehmen: ${firma || '—'}`,
    '',
    'Nachricht:',
    nachricht || '(keine)',
  ].join('\n');

  const resendBody = {
    from: env.CONTACT_FROM || DEFAULT_FROM,
    to: [env.CONTACT_TO || DEFAULT_TO],
    reply_to: email,
    subject,
    text,
  };

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resendBody),
  });

  if (!resp.ok) {
    const err = await resp.text();
    console.error('Resend Fehler:', resp.status, err);
    return jsonResponse({ error: 'E-Mail-Versand fehlgeschlagen. Bitte später erneut versuchen.' }, 502);
  }

  return jsonResponse({ ok: true });
}

// Methods außer POST → 405
export async function onRequest({ request }) {
  if (request.method === 'POST') return; // wird von onRequestPost gehandhabt
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { 'Allow': 'POST' },
  });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
