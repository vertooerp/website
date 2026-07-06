/**
 * UI-Übersetzungen (wiederkehrende Interface-Strings: Navigation, Footer,
 * gemeinsame Buttons). Größere Content-Blöcke (Module, FAQ, Branchen,
 * Glossar, Blog) werden separat pro Sprache gepflegt.
 *
 * Neue Sprache hinzufügen: Eintrag in `languages` + Block in `ui` ergänzen
 * und `astro.config.mjs` (i18n.locales) erweitern.
 */

export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export const defaultLang = 'de';

export type Lang = keyof typeof languages;

export const ui = {
  de: {
    'nav.module': 'Module',
    'nav.how': "So funktioniert's",
    'nav.pricing': 'Preise',
    'nav.industries': 'Branchen',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.login': 'Anmelden',
    'cta.demo': 'Demo anfragen',
    'cta.modules': 'Module entdecken',

    'footer.tagline': 'Die modulare ERP-Plattform für moderne Unternehmen.',
    'footer.product': 'Produkt',
    'footer.company': 'Unternehmen',
    'footer.security': 'Sicherheit & Compliance',
    'footer.glossary': 'Glossar',
    'footer.imprint': 'Impressum',
    'footer.accessibility': 'Barrierefreiheit',
    'footer.privacy': 'Datenschutz',
    'footer.trust.selfhosting': 'Self-Hosting / On-Premises',
    'footer.trust.dsgvo': 'DSGVO-konform',
    'footer.trust.gobd': 'GoBD-konform',
    'footer.developed': 'Entwickelt für',
    'footer.developed.in': 'in Brandenburg',
    'footer.rights': 'Alle Rechte vorbehalten.',

    'a11y.theme': 'Farbschema wechseln',
    'a11y.menu.open': 'Menü öffnen',
    'a11y.menu.close': 'Menü schließen',
    'a11y.lang': 'Sprache wechseln',
    'a11y.skip': 'Zum Hauptinhalt springen',
  },
  en: {
    'nav.module': 'Modules',
    'nav.how': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.industries': 'Industries',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Sign in',
    'cta.demo': 'Request a demo',
    'cta.modules': 'Explore modules',

    'footer.tagline': 'The modular ERP platform for modern companies.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.security': 'Security & Compliance',
    'footer.glossary': 'Glossary',
    'footer.imprint': 'Imprint',
    'footer.accessibility': 'Accessibility',
    'footer.privacy': 'Privacy',
    'footer.trust.selfhosting': 'Self-hosting / On-premises',
    'footer.trust.dsgvo': 'GDPR-compliant',
    'footer.trust.gobd': 'GoBD-compliant',
    'footer.developed': 'Built for',
    'footer.developed.in': 'in Brandenburg, Germany',
    'footer.rights': 'All rights reserved.',

    'a11y.theme': 'Switch colour scheme',
    'a11y.menu.open': 'Open menu',
    'a11y.menu.close': 'Close menu',
    'a11y.lang': 'Switch language',
    'a11y.skip': 'Skip to main content',
  },
} as const;
