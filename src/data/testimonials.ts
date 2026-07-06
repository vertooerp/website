/**
 * Social Proof (Kundenstimmen + Logos).
 *
 * WICHTIG: Beide Arrays sind absichtlich LEER. Die SocialProof-Sektion
 * rendert erst, wenn hier ECHTE Referenzen eingetragen werden – so geht
 * kein erfundener Social Proof live.
 *
 * Zum Aktivieren: echte Einträge ergänzen (Kunde muss der Nennung
 * zugestimmt haben). Logos als Bilddatei in /public/logos/ ablegen.
 *
 * Beispiel-Testimonial (auskommentiert):
 * {
 *   quote: 'Seit dem Umstieg auf VertooERP führen wir Bestand und Buchhaltung in einem System – das spart uns täglich Zeit.',
 *   author: 'Vorname Nachname',
 *   role: 'Geschäftsführung, Muster GmbH',
 * }
 * Beispiel-Logo:
 * { name: 'Muster GmbH', src: '/logos/muster.svg', url: 'https://muster.de' }
 */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CustomerLogo {
  name: string;
  src: string;
  url?: string;
}

export const testimonials: Testimonial[] = [];

export const customerLogos: CustomerLogo[] = [];
