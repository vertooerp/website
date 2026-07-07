import { ui, defaultLang, type Lang } from './ui';

/** Sprache aus der URL ableiten (/en/... → 'en', sonst Default 'de'). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Übersetzungsfunktion für eine Sprache (Fallback: Default-Sprache, dann Key). */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key] ?? key;
  };
}

/* -------------------------------------------------------------------------- */
/*  Lokalisierte URLs                                                          */
/*  DE ist die kanonische Sprache (Pfade ohne Präfix). Für EN werden Pfad-     */
/*  Segmente UND Slugs übersetzt, damit englische URLs englisch sind          */
/*  (z. B. /branchen/handel → /en/industries/retail). Rechtstexte bleiben      */
/*  bewusst deutsch-slugged (noindex, kein SEO-Wert).                          */
/* -------------------------------------------------------------------------- */

// Top-Segment DE → EN
const SEG_EN: Record<string, string> = {
  branchen: 'industries',
  module: 'modules',
  glossar: 'glossary',
  alternativen: 'alternatives',
};
const SEG_DE: Record<string, string> = Object.fromEntries(Object.entries(SEG_EN).map(([d, e]) => [e, d]));

type SlugKind = 'branchen' | 'module' | 'blog';

// Slug DE → EN je Sammlung
const SLUG_EN: Record<SlugKind, Record<string, string>> = {
  branchen: {
    handel: 'retail',
    dienstleister: 'service-providers',
    produktion: 'manufacturing',
    handwerk: 'trades',
  },
  module: {
    warenwirtschaft: 'inventory-management',
    buchhaltung: 'accounting',
    lagerverwaltung: 'warehouse-management',
    dropshipping: 'dropshipping',
    zeiterfassung: 'time-tracking',
    crm: 'crm',
    'aufgaben-projekte': 'tasks-projects',
    kostenmanagement: 'cost-management',
    'webshop': 'web-shop',
    'ki-assistent': 'ai-assistant',
    'reporting': 'reporting-analytics',
    'preischeck': 'price-check',
    'bonuspunkte': 'loyalty-points',
    'wissensdatenbank': 'knowledge-base',
  },
  blog: {
    'self-hosting-vs-cloud-erp': 'self-hosting-vs-cloud-erp',
    'gobd-konforme-buchhaltung-kmu': 'gobd-compliant-accounting-smes',
    'e-rechnungspflicht-2025-kmu': 'mandatory-e-invoicing-2025-smes',
    'vom-excel-chaos-zum-erp': 'from-excel-chaos-to-erp',
    'multichannel-bestaende-synchron-halten': 'sync-multichannel-inventory',
    'dsgvo-konformes-erp-auswahl': 'gdpr-compliant-erp-selection',
    'multi-standort-multi-mandant-erp': 'multi-location-multi-tenant-erp',
    'bonusprogramme-kleine-shops': 'loyalty-programs-small-shops',
    'ki-im-erp-lokaler-assistent': 'ai-in-erp-local-assistant',
    'erp-einfuehrung-projektplan': 'erp-implementation-project-plan',
  },
};
const SLUG_DE: Record<SlugKind, Record<string, string>> = {
  branchen: invert(SLUG_EN.branchen),
  module: invert(SLUG_EN.module),
  blog: invert(SLUG_EN.blog),
};
function invert(m: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(m).map(([k, v]) => [v, k]));
}

const kindOf = (seg: string): SlugKind | null =>
  seg === 'branchen' || seg === 'module' || seg === 'blog' ? seg : null;

/** Kanonischen DE-Pfad → EN-Pfad (ohne /en-Präfix) übersetzen. */
function deToEn(base: string): string {
  const parts = base.split('/').filter(Boolean);
  if (parts.length === 0) return '/';
  const [seg, slug, ...rest] = parts;
  const enSeg = SEG_EN[seg] ?? seg;
  const kind = kindOf(seg);
  const enSlug = kind && slug !== undefined ? (SLUG_EN[kind][slug] ?? slug) : slug;
  return '/' + [enSeg, ...(slug !== undefined ? [enSlug] : []), ...rest].join('/');
}

/** EN-Pfad (ohne /en-Präfix) → kanonischen DE-Pfad zurückübersetzen. */
function enToDe(base: string): string {
  const parts = base.split('/').filter(Boolean);
  if (parts.length === 0) return '/';
  const [seg, slug, ...rest] = parts;
  const deSeg = SEG_DE[seg] ?? seg;
  const kind = kindOf(deSeg);
  const deSlug = kind && slug !== undefined ? (SLUG_DE[kind][slug] ?? slug) : slug;
  return '/' + [deSeg, ...(slug !== undefined ? [deSlug] : []), ...rest].join('/');
}

/**
 * Einen (kanonischen, deutschen) internen Pfad für die Zielsprache bauen.
 * DE: unverändert. EN: Segmente/Slugs übersetzt + /en-Präfix.
 * Hash-Anker (#kontakt) bleiben unangetastet.
 * z. B. localizePath('/branchen/handel', 'en') → '/en/industries/retail'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  const hi = clean.indexOf('#');
  const base = hi < 0 ? clean : clean.slice(0, hi);
  const hash = hi < 0 ? '' : clean.slice(hi);
  const en = deToEn(base);
  const prefixed = en === '/' ? (hash ? '/en/' : '/en') : `/en${en}`;
  return prefixed + hash;
}

/**
 * Aktuellen Pfad auf den kanonischen DE-Pfad zurückführen (für Sprachumschalter
 * und hreflang). Übersetzt EN-Segmente/Slugs zurück.
 * z. B. '/en/industries/retail' → '/branchen/handel', '/blog/x' → '/blog/x'
 */
export function stripLangFromPath(pathname: string): string {
  const [, maybeLang, ...rest] = pathname.split('/');
  if (maybeLang in ui && maybeLang !== defaultLang) {
    return enToDe('/' + rest.join('/'));
  }
  return pathname;
}

/** EN-Slug für einen kanonischen DE-Slug einer Sammlung (für getStaticPaths). */
export function localizedSlug(kind: SlugKind, deSlug: string): string {
  return SLUG_EN[kind][deSlug] ?? deSlug;
}

/**
 * true, wenn die Seite in beiden Sprachen existiert. Wird vom Sprachumschalter
 * genutzt, damit er auf reinen DE-Seiten (Konto, Signup, 404) nicht auf eine
 * nicht existierende /en-Route zeigt. Muster beziehen sich auf den KANONISCHEN
 * (deutschen) Pfad ohne Sprach-Präfix.
 */
export function isTranslated(pathname: string): boolean {
  const canonical = stripLangFromPath(pathname).replace(/\/+$/, '') || '/';
  if (canonical === '/') return true;
  return [
    /^\/branchen(\/[^/]+)?$/,
    /^\/module(\/[^/]+)?$/,
    /^\/alternativen(\/[^/]+)?$/,
    /^\/glossar$/,
    /^\/blog(\/.+)?$/,
    /^\/(impressum|datenschutz|barrierefreiheit)$/,
  ].some((re) => re.test(canonical));
}
