/**
 * Branchen-spezifische Inhalte für /branchen/[slug]-Seiten.
 *
 * Eine neue Branche hinzufügen: nur ein neues Objekt im branchen-Array
 * ergänzen. Die Route /branchen/[slug].astro generiert die Seite
 * automatisch via getStaticPaths.
 */

export interface Branche {
  slug: string;
  /** Kurzer Anzeige-Name, z.B. für Footer/Nav */
  name: string;
  /** Icon-Emoji für Übersichtsseiten */
  icon: string;
  /** SEO <title> — möglichst <60 Zeichen */
  metaTitle: string;
  /** SEO meta description — 130–160 Zeichen */
  metaDescription: string;
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  painpoints: {
    intro: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  modules: {
    intro: string;
    items: Array<{ icon: string; name: string; description: string }>;
  };
  workflow: {
    intro: string;
    steps: Array<{ number: string; title: string; description: string; module: string }>;
  };
  faq: Array<{ q: string; a: string }>;
  cta: {
    headline: string;
    text: string;
    primary: { label: string; href: string };
  };
}

export const branchen: Branche[] = [
  {
    slug: 'handel',
    name: 'Handel & E-Commerce',
    icon: '🛒',
    metaTitle: 'ERP für Handel & E-Commerce – VertooERP',
    metaDescription:
      'Modulares ERP für Online- und stationären Handel: Warenwirtschaft, Lager, Dropshipping, Webshop, Bonuspunkte und Marktpreis-Check. Self-Hosting, DSGVO- und GoBD-konform.',
    hero: {
      eyebrow: 'Für Handel & E-Commerce',
      headline: 'ERP für den Handel — von Wareneingang bis Kundenbindung',
      subhead:
        'Eine Plattform für Warenwirtschaft, Lager, Dropshipping, Webshop und Buchhaltung. Kein Excel mehr zwischen Shopware, Amazon und Lieferanten — alle Daten in einem System.',
      primaryCta: { label: 'Demo anfragen', href: '/#kontakt' },
      secondaryCta: { label: 'Alle Module ansehen', href: '/#module' },
    },
    painpoints: {
      intro: 'Klingt vertraut?',
      items: [
        {
          icon: '📊',
          title: 'Bestände driften auseinander',
          description:
            'Shopware sagt 12 Stück, das Lager hat noch 7, eBay verkauft schon den 13. Verkanal-Synchronisation kostet täglich Nerven.',
        },
        {
          icon: '💸',
          title: 'Preise manuell pflegen',
          description:
            'Idealo, Amazon, eBay, billiger.de — jede Plattform eigene Pflege. Margen rutschen weg, ohne dass jemand es bemerkt.',
        },
        {
          icon: '🔄',
          title: 'Dropshipping-Anbieter wechseln',
          description:
            'BigBuy heute, DropXL morgen, ein neuer Lieferant nächsten Monat. Jede Integration ist ein eigener Datei-Mapping-Workshop.',
        },
        {
          icon: '🧾',
          title: 'Bestell-Status für Kunden',
          description:
            '"Wo bleibt meine Bestellung?" — drei Tools öffnen, manuell zusammenklicken. Kundenkommunikation wird zur Sucharbeit.',
        },
      ],
    },
    modules: {
      intro: 'Diese Module decken den klassischen Handelsbetrieb komplett ab — einzeln oder kombiniert.',
      items: [
        {
          icon: '📦',
          name: 'Warenwirtschaft',
          description:
            'PDSIN-Katalog (ein Produkt pro EAN, beliebig viele Lieferanten dahinter). Auftragsabwicklung, Versand-Tracking über 5 Carrier, Bundles / Stücklisten.',
        },
        {
          icon: '🏭',
          name: 'Lagerverwaltung',
          description:
            'Mehrere Lager, Zone-/Gang-/Regal-/Fach-Hierarchie, Umlagerungen, vollständiges Bewegungs-Audit, Inventur mit Soll-/Ist-Vergleich.',
        },
        {
          icon: '🚚',
          name: 'Dropshipping',
          description:
            'BigBuy, DropXL, JTL-Wawi und Shopware 6 in einer Oberfläche. Stock-Sync alle 15 Minuten, automatische Order-Weiterleitung.',
        },
        {
          icon: '🛒',
          name: 'Marktpreis-Check',
          description:
            'EAN-Bulk-Check über idealo, Amazon, eBay, billiger.de und Google Shopping. Max-EK pro Plattform, Ampel-Logik, automatischer Quellen-Fallback.',
        },
        {
          icon: '🌐',
          name: 'Webshop',
          description:
            'Whitelabel-Kundenshop unter eigener Domain. Bestand, Preise und Bonuspunkte automatisch synchron. Stripe, PayPal und Mollie integriert.',
        },
        {
          icon: '🎁',
          name: 'Bonuspunkte',
          description:
            'Tier-System (Bronze/Silber/Gold), automatische Gutschrift bei Bestellung, Gutschein-Generator und Shopware-Plugin für die Punkte-Anzeige im Checkout.',
        },
        {
          icon: '🧾',
          name: 'Buchhaltung',
          description:
            'DATEV-Export, XRechnung/ZUGFeRD, SKR03-Kontenrahmen, 3-stufiges Mahnwesen, Bankabgleich. Steuerberater-tauglich aus der Box.',
        },
        {
          icon: '📊',
          name: 'Reporting',
          description:
            'Live-Dashboard mit Umsatz-Trend, Bestandswert, Top-10-Kategorien, DS-Performance und Low-Stock-Alerts. Aggregierte Queries, kein Excel-Export nötig.',
        },
      ],
    },
    workflow: {
      intro: 'So sieht ein Bestell-Lebenszyklus in VertooERP aus:',
      steps: [
        {
          number: '01',
          title: 'Kunde bestellt im Webshop',
          description:
            'Bestand wird live aus der Warenwirtschaft gezogen — keine Doppelverkäufe. Bonuspunkte werden im Checkout angezeigt.',
          module: 'Webshop · WaWi · Bonuspunkte',
        },
        {
          number: '02',
          title: 'Auftrag landet in der WaWi',
          description:
            'Lager-Artikel werden kommissioniert. Bei Dropshipping-Artikeln geht die Bestellung automatisch an den Lieferanten raus.',
          module: 'WaWi · Lager · Dropshipping',
        },
        {
          number: '03',
          title: 'Versand und Tracking',
          description:
            'Versandetikett über den passenden Carrier (DHL/DPD/GLS/Hermes/UPS) erstellt, Tracking-Link automatisch an den Kunden.',
          module: 'WaWi · Versand',
        },
        {
          number: '04',
          title: 'Rechnung und Buchung',
          description:
            'Rechnung XRechnung-konform erstellt, in den OP-Lauf gestellt, Bonuspunkte gutgeschrieben. DATEV-Export läuft monatlich automatisch.',
          module: 'Buchhaltung · Bonuspunkte',
        },
        {
          number: '05',
          title: 'Auswertung im Reporting',
          description:
            'Marge, Retourenquote und Kundenwert für diesen Auftrag — sofort im Dashboard sichtbar, ohne CSV-Export.',
          module: 'Reporting & Analytics',
        },
      ],
    },
    faq: [
      {
        q: 'Welche Shopsysteme werden unterstützt?',
        a: 'Shopware 6 ist nativ integriert (OAuth2, Produkt-/Bestandssync, Bestellimport). Daneben gibt es API- und Webhook-Schnittstellen, über die wir Shopify, WooCommerce und JTL-Shop anbinden können. Eine Migration laufender Daten aus diesen Systemen ist möglich.',
      },
      {
        q: 'Wie funktioniert Dropshipping konkret?',
        a: 'Drei Anbindungstypen sind eingebaut: BigBuy (Bearer-Token-API mit Taxonomien und CDN-Bildern), DropXL (Basic Auth, paginierte Produkte und Order-API) und JTL-Wawi (Bearer-Token, Items und SalesOrders mit konfigurierbarer Kundennummer). Bestand wird alle 15 Minuten synchronisiert, Bestellungen werden bei Auftragsbestätigung automatisch beim passenden Lieferanten ausgelöst.',
      },
      {
        q: 'Können wir bestehende Daten aus JTL oder Plentymarkets übernehmen?',
        a: 'Ja. Wir importieren Produkte, Kunden, Lieferanten und offene Aufträge typischerweise über CSV-/Excel-Exporte und führen einmalig ein Mapping durch. Bei größeren Migrationen schreiben wir einen kundenspezifischen Importer — das gehört zu den separat buchbaren Einführungsleistungen, nicht zur Lizenz.',
      },
      {
        q: 'Was passiert, wenn wir parallel noch JTL-Wawi nutzen?',
        a: 'Das ist ein häufiger Übergangs-Fall. VertooERP unterstützt JTL als Dropshipping-Quelle (Items + SalesOrders) und kann ergänzend zu eurem bestehenden System laufen. Für diese ergänzende Nutzung gewähren wir reduzierte Konditionen — sprechen Sie uns einfach an.',
      },
      {
        q: 'Wie lange dauert die Einführung typischerweise?',
        a: 'Reine Lizenz-Aktivierung: sofort. Eine produktive Einführung mit Stammdaten-Import, Schnittstellen-Setup und Schulung dauert bei einem klassischen 5–20-Personen-Handelsbetrieb erfahrungsgemäß 4–8 Wochen, je nach Anzahl der zu integrierenden Quellsysteme.',
      },
      {
        q: 'Gibt es eine Mindestgröße, ab der sich VertooERP rechnet?',
        a: 'Der Starter-Tarif richtet sich an Teams ab 3 Personen mit 1–3 Kernmodulen (z.B. WaWi + Buchhaltung). Sehr kleine Einzelunternehmen ohne Lager-/Versandprozesse sind in der Regel mit einer schlanken Buchhaltungslösung besser bedient. Ab ca. 5 Personen mit Lager und mehreren Verkaufskanälen wird der Mehrwert sichtbar.',
      },
    ],
    cta: {
      headline: 'Lassen Sie uns über Ihren Shop sprechen.',
      text:
        'In 30 Minuten zeigen wir Ihnen den Bestell-Lebenszyklus an Ihrem konkreten Setup — inklusive Schnittstellen-Check.',
      primary: { label: 'Demo anfragen', href: '/#kontakt' },
    },
  },
];

export function getBrancheBySlug(slug: string): Branche | undefined {
  return branchen.find((b) => b.slug === slug);
}
