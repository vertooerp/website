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
    icon: 'shopping-cart',
    metaTitle: 'ERP für Handel & E-Commerce – VertooERP',
    metaDescription:
      'Modulares ERP für Online- und stationären Handel: Warenwirtschaft, Lager, Dropshipping, Webshop und Marktpreis-Check – self-gehostet, DSGVO-konform.',
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
          icon: 'package-x',
          title: 'Bestände driften auseinander',
          description:
            'Shopware sagt 12 Stück, das Lager hat noch 7, eBay verkauft schon den 13. Verkanal-Synchronisation kostet täglich Nerven.',
        },
        {
          icon: 'tag',
          title: 'Preise manuell pflegen',
          description:
            'Idealo, Amazon, eBay, billiger.de — jede Plattform eigene Pflege. Margen rutschen weg, ohne dass jemand es bemerkt.',
        },
        {
          icon: 'refresh-cw',
          title: 'Dropshipping-Anbieter wechseln',
          description:
            'BigBuy heute, DropXL morgen, ein neuer Lieferant nächsten Monat. Jede Integration ist ein eigener Datei-Mapping-Workshop.',
        },
        {
          icon: 'package-search',
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
          icon: 'package',
          name: 'Warenwirtschaft',
          description:
            'Einheitlicher Produktkatalog (ein Produkt pro EAN, beliebig viele Lieferanten dahinter). Auftragsabwicklung, Versand-Tracking über 5 Carrier, Bundles / Stücklisten.',
        },
        {
          icon: 'warehouse',
          name: 'Lagerverwaltung',
          description:
            'Mehrere Lager, Zone-/Gang-/Regal-/Fach-Hierarchie, Umlagerungen, vollständiges Bewegungs-Audit, Inventur mit Soll-/Ist-Vergleich.',
        },
        {
          icon: 'truck',
          name: 'Dropshipping',
          description:
            'BigBuy, DropXL, JTL-Wawi und Shopware 6 in einer Oberfläche. Stock-Sync alle 15 Minuten, automatische Order-Weiterleitung.',
        },
        {
          icon: 'search-check',
          name: 'Marktpreis-Check',
          description:
            'EAN-Bulk-Check über idealo, Amazon, eBay, billiger.de und Google Shopping. Max-EK pro Plattform, Ampel-Logik, automatischer Quellen-Fallback.',
        },
        {
          icon: 'store',
          name: 'Webshop',
          description:
            'Whitelabel-Kundenshop unter eigener Domain. Bestand, Preise und Bonuspunkte automatisch synchron. Stripe, PayPal und Mollie integriert.',
        },
        {
          icon: 'gift',
          name: 'Bonuspunkte',
          description:
            'Tier-System (Bronze/Silber/Gold), automatische Gutschrift bei Bestellung, Gutschein-Generator und Shopware-Plugin für die Punkte-Anzeige im Checkout.',
        },
        {
          icon: 'receipt-text',
          name: 'Buchhaltung',
          description:
            'DATEV-Export, XRechnung/ZUGFeRD, SKR03-Kontenrahmen, 3-stufiges Mahnwesen, Bankabgleich. Steuerberater-tauglich aus der Box.',
        },
        {
          icon: 'chart-column',
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

  // ────────────────────────────────────────────────────────────
  {
    slug: 'dienstleister',
    name: 'Dienstleister & Agenturen',
    icon: 'briefcase',
    metaTitle: 'ERP für Dienstleister & Agenturen – VertooERP',
    metaDescription:
      'Modulares ERP für Agenturen und Dienstleister: Zeiterfassung, Projekte, Aufgaben, Buchhaltung, CRM und Team-Chat – self-gehostet, DSGVO-konform.',
    hero: {
      eyebrow: 'Für Dienstleister & Agenturen',
      headline: 'Von der erfassten Stunde zur bezahlten Rechnung',
      subhead:
        'Zeiterfassung, Projekte, Buchhaltung und Teamkommunikation in einer Plattform. Schluss mit Excel-Timesheets, vergessenen Stunden und Rechnungen, die wochenlang liegen bleiben.',
      primaryCta: { label: 'Demo anfragen', href: '/#kontakt' },
      secondaryCta: { label: 'Alle Module ansehen', href: '/#module' },
    },
    painpoints: {
      intro: 'Klingt vertraut?',
      items: [
        {
          icon: 'clock',
          title: 'Stunden gehen verloren',
          description:
            'Zeit wird auf Zetteln, in Kalendern und im Kopf erfasst — am Monatsende fehlen abrechenbare Stunden und damit bares Geld.',
        },
        {
          icon: 'folder-kanban',
          title: 'Projekte ohne Überblick',
          description:
            'Wer macht was bis wann? Aufgaben verteilen sich über Mail, Chat und Notizzettel. Deadlines rutschen, niemand hat den Gesamtstand.',
        },
        {
          icon: 'receipt-text',
          title: 'Rechnungen bleiben liegen',
          description:
            'Erfasste Leistungen landen nicht automatisch auf der Rechnung. Abrechnung ist Fleißarbeit am Quartalsende statt ein Klick.',
        },
        {
          icon: 'book-open',
          title: 'Wissen steckt in Köpfen',
          description:
            'Prozesse, Vorlagen und Kunden-Know-how sind nicht dokumentiert. Geht jemand, geht das Wissen mit.',
        },
      ],
    },
    modules: {
      intro: 'Diese Module bilden den Dienstleistungs-Alltag von der Erfassung bis zur Auswertung ab.',
      items: [
        {
          icon: 'clock',
          name: 'Zeiterfassung & Urlaub',
          description:
            'Stempeluhr, projektbezogene Zeiten, Urlaubs- und Abwesenheitsverwaltung, Überstundenkonto — mobil und am Desktop.',
        },
        {
          icon: 'list-checks',
          name: 'Aufgaben & Projekte',
          description:
            'Kanban, Liste und Kalender mit Subtasks, Zuständigkeiten, @Mentions, Watchers und vollständigem Aktivitäts-Feed.',
        },
        {
          icon: 'receipt-text',
          name: 'Buchhaltung',
          description:
            'Angebote, Rechnungen und Gutschriften mit Leistungszeitraum, offene Posten, GuV/BWA, DATEV-Export und XRechnung/ZUGFeRD.',
        },
        {
          icon: 'users',
          name: 'CRM',
          description:
            'Kunden- und Kontakthistorie über alle Module — Angebote, Projekte, Rechnungen und Kommunikation auf einen Blick.',
        },
        {
          icon: 'message-square',
          name: 'Nachrichten',
          description:
            'Interne DMs, Gruppen und Kanäle mit Reaktionen, Antworten und Dateianhängen — projektbezogene Kommunikation ohne Tool-Wechsel.',
        },
        {
          icon: 'book-open',
          name: 'Wissensdatenbank',
          description:
            'Prozesse, Vorlagen und Onboarding-Wissen als durchsuchbare Markdown-Artikel mit Kategorien und Veröffentlichungs-Workflow.',
        },
        {
          icon: 'wallet',
          name: 'Kostenmanagement',
          description:
            'Fixkosten, Gehälter und SaaS-Abos im Blick — mit Verträgen, Kündigungsfristen und Monats-/Jahresübersicht.',
        },
        {
          icon: 'chart-column',
          name: 'Reporting & Analytics',
          description:
            'Auslastung, abgerechnete vs. erfasste Stunden und Projekt-Margen im Live-Dashboard statt in der Excel-Pivot.',
        },
      ],
    },
    workflow: {
      intro: 'So läuft ein Mandat von der Anfrage bis zur Auswertung:',
      steps: [
        {
          number: '01',
          title: 'Kunde & Projekt anlegen',
          description:
            'Neuer Kunde im CRM, Projekt mit Budget und Aufgabenstruktur aufgesetzt — alles an einem Ort verknüpft.',
          module: 'CRM · Aufgaben & Projekte',
        },
        {
          number: '02',
          title: 'Team arbeitet & erfasst Zeit',
          description:
            'Aufgaben auf dem Kanban-Board, Zeiten projektbezogen erfasst. Jede Stunde ist einem Projekt und Kunden zugeordnet.',
          module: 'Aufgaben · Zeiterfassung',
        },
        {
          number: '03',
          title: 'Leistungen abrechnen',
          description:
            'Erfasste Stunden fließen in die Rechnung — mit Leistungszeitraum und korrektem Zahlungsziel aus den Kundenstammdaten.',
          module: 'Zeiterfassung · Buchhaltung',
        },
        {
          number: '04',
          title: 'Offene Posten verfolgen',
          description:
            'Rechnung im OP-Lauf, Zahlungserinnerungen automatisch, DATEV-Export für den Steuerberater am Monatsende.',
          module: 'Buchhaltung',
        },
        {
          number: '05',
          title: 'Auslastung auswerten',
          description:
            'Welches Projekt war profitabel, wer ist über- oder unterausgelastet? Sofort im Reporting sichtbar.',
          module: 'Reporting & Analytics',
        },
      ],
    },
    faq: [
      {
        q: 'Können Mitarbeitende Zeiten mobil erfassen?',
        a: 'Ja. VertooERP ist eine PWA und lässt sich wie eine native App auf Smartphone und Tablet installieren. Zeiten, Aufgaben und Abwesenheiten lassen sich unterwegs erfassen – ohne App-Store, mit Web-Push-Benachrichtigungen.',
      },
      {
        q: 'Lassen sich erfasste Stunden direkt abrechnen?',
        a: 'Projektbezogen erfasste Zeiten lassen sich in der Buchhaltung zu Rechnungspositionen zusammenführen – mit Leistungszeitraum und dem in den Kundenstammdaten hinterlegten Zahlungsziel. Das spart die manuelle Übertragung aus separaten Timesheets.',
      },
      {
        q: 'Gibt es eine Rechte-/Rollensteuerung für Freelancer und Festangestellte?',
        a: 'Ja. Über das 4-stufige Rollensystem (Super-Admin, Modul-Admin, Teamleiter, Mitarbeiter) und pro Nutzer konfigurierbare Modul-Zugriffe sehen externe Freelancer nur die für sie freigegebenen Projekte und Funktionen.',
      },
      {
        q: 'Können wir mehrere Standorte oder Tochtergesellschaften verwalten?',
        a: 'Ja. Multi-Standort und Multi-Mandant sind in allen Tarifen enthalten. Über den Standort-Switcher werden Team, Kosten und Daten je Standort gefiltert; mehrere Firmen lassen sich getrennt führen.',
      },
      {
        q: 'Ist die Buchhaltung steuerberater-tauglich?',
        a: 'Ja. DATEV-Export, SKR03-Kontenrahmen, USt-Voranmeldung, GoBD-konforme unveränderbare Belege und XRechnung/ZUGFeRD sind eingebaut. Ihr Steuerberater erhält die Daten im gewohnten Format.',
      },
      {
        q: 'Wie schnell ist eine Agentur startklar?',
        a: 'Die Lizenz ist sofort aktiv. Eine produktive Einführung mit Stammdaten, Projektstruktur und Schulung dauert bei einem 5–20-Personen-Team typischerweise 2–4 Wochen – Zeiterfassung und Aufgaben lassen sich oft schon in der ersten Woche nutzen.',
      },
    ],
    cta: {
      headline: 'Zeigen Sie uns Ihr Projektgeschäft.',
      text:
        'In 30 Minuten zeigen wir den Weg von der erfassten Stunde zur Rechnung an Ihrem konkreten Setup.',
      primary: { label: 'Demo anfragen', href: '/#kontakt' },
    },
  },

  // ────────────────────────────────────────────────────────────
  {
    slug: 'produktion',
    name: 'Produktion & Logistik',
    icon: 'factory',
    metaTitle: 'ERP für Produktion & Logistik – VertooERP',
    metaDescription:
      'Modulares ERP für Produktion und Logistik: Warenwirtschaft, Lagerverwaltung mit Zonen, Wareneingang, Versand und Inventur – self-gehostet, DSGVO-konform.',
    hero: {
      eyebrow: 'Für Produktion & Logistik',
      headline: 'Material, Lager und Versand – lückenlos nachvollziehbar',
      subhead:
        'Von Wareneingang über Lagerführung bis Versand: ein durchgängiger, auditierbarer Warenfluss. Schluss mit Bestandslücken, Suchzeiten im Lager und Nachschub, der zu spät kommt.',
      primaryCta: { label: 'Demo anfragen', href: '/#kontakt' },
      secondaryCta: { label: 'Alle Module ansehen', href: '/#module' },
    },
    painpoints: {
      intro: 'Klingt vertraut?',
      items: [
        {
          icon: 'package-x',
          title: 'Bestand stimmt nie',
          description:
            'Soll und Ist klaffen auseinander. Niemand traut den Zahlen, also wird sicherheitshalber doppelt bestellt oder gezählt.',
        },
        {
          icon: 'warehouse',
          title: 'Suchen statt finden',
          description:
            'Ware liegt „irgendwo". Ohne klare Lagerplatz-Struktur kostet jede Kommissionierung Minuten, die sich übers Jahr summieren.',
        },
        {
          icon: 'truck',
          title: 'Wareneingang als Engpass',
          description:
            'Lieferungen werden auf Zuruf eingebucht, Mengen stimmen nicht, Reklamationen lassen sich später nicht rekonstruieren.',
        },
        {
          icon: 'trending-down',
          title: 'Nachschub zu spät',
          description:
            'Mindestbestände sind nicht hinterlegt. Engpässe fallen erst auf, wenn die Produktion oder der Versand schon steht.',
        },
      ],
    },
    modules: {
      intro: 'Diese Module bilden den physischen Warenfluss vollständig und auditierbar ab.',
      items: [
        {
          icon: 'package',
          name: 'Warenwirtschaft',
          description:
            'Einheitlicher Produktkatalog (ein Eintrag pro EAN), Stammdaten, Bestandsführung mit Audit-Trail, Barcode-Scanner, Bundles und Stücklisten (BOM).',
        },
        {
          icon: 'warehouse',
          name: 'Lagerverwaltung',
          description:
            'Mehrere Lager mit Zone-/Gang-/Regal-/Fach-Hierarchie, Produkt-Lagerplatz-Zuordnung, Umlagerungen und Füllstand-Ampel.',
        },
        {
          icon: 'truck',
          name: 'Wareneingang',
          description:
            'Strukturierter Wareneingang (Draft → Booked → Cancelled), optional mit Bestellbezug, Mengenprüfung und Storno mit Rückbuchung.',
        },
        {
          icon: 'clipboard-check',
          name: 'Inventur',
          description:
            'Standortbasierte Zählung mit Soll-/Ist-Vergleich und automatischer Korrekturbuchung — keine Excel-Zähllisten mehr.',
        },
        {
          icon: 'send',
          name: 'Versand',
          description:
            'Carrier-Tracking für DHL, DPD, GLS, Hermes und UPS, Versandetiketten und automatische Tracking-Links an den Empfänger.',
        },
        {
          icon: 'shopping-cart',
          name: 'Einkauf',
          description:
            'Bestellungen mit Nummernkreis, Lieferantenverwaltung und Mindestbestand-Warnungen, damit Nachschub rechtzeitig ausgelöst wird.',
        },
        {
          icon: 'clipboard-list',
          name: 'Betriebsmittel',
          description:
            'Anforderungs-Workflow für Verbrauchsmaterial und Werkzeug, IT-Inventar mit Mitarbeiter-Zuordnung und Buchungshistorie.',
        },
        {
          icon: 'chart-column',
          name: 'Reporting & Analytics',
          description:
            'Bestandswert, Top-Kategorien, Low-Stock-Alerts und Durchsatz-Kennzahlen im Live-Dashboard statt im monatlichen Export.',
        },
      ],
    },
    workflow: {
      intro: 'So läuft Ware vom Eingang bis zur Inventur:',
      steps: [
        {
          number: '01',
          title: 'Wareneingang erfassen',
          description:
            'Lieferung gegen Bestellung geprüft, Mengen erfasst, eingebucht. Bestand steigt automatisch, alles im Audit-Trail.',
          module: 'Wareneingang · WaWi',
        },
        {
          number: '02',
          title: 'Einlagern auf Lagerplatz',
          description:
            'Ware wird konkreten Zonen/Fächern zugeordnet. Jeder weiß, wo was liegt — Kommissionierung wird schnell und fehlerarm.',
          module: 'Lagerverwaltung',
        },
        {
          number: '03',
          title: 'Kommissionieren & produzieren',
          description:
            'Aufträge ziehen Bestand ab, Stücklisten lösen Komponenten auf. Mindestbestand-Warnung löst Nachbestellung aus.',
          module: 'WaWi · Einkauf',
        },
        {
          number: '04',
          title: 'Versenden & tracken',
          description:
            'Versandetikett über den passenden Carrier, Tracking-Link automatisch an den Empfänger, Bestand final gebucht.',
          module: 'Versand',
        },
        {
          number: '05',
          title: 'Inventur & Auswertung',
          description:
            'Standortbasierte Zählung mit automatischer Korrektur, Bestandswert und Durchsatz sofort im Reporting.',
          module: 'Inventur · Reporting',
        },
      ],
    },
    faq: [
      {
        q: 'Unterstützt VertooERP Barcode-Scanner?',
        a: 'Ja. Bestandsbewegungen, Wareneingang und Inventur lassen sich per Barcode-Scanner erfassen. Da VertooERP als PWA auf Mobilgeräten läuft, kann auch die Kamera eines Smartphones oder Tablets als Scanner genutzt werden.',
      },
      {
        q: 'Können wir mehrere Lager und Standorte abbilden?',
        a: 'Ja. Die Lagerverwaltung unterstützt mehrere Lagerhäuser mit einer Zone-/Gang-/Regal-/Fach-Baumstruktur, Umlagerungen zwischen Zonen und standortbasierte Inventur. Multi-Standort ist in allen Tarifen enthalten.',
      },
      {
        q: 'Gibt es Stücklisten / Fertigungsauflösung?',
        a: 'Ja. Bundles bzw. Stücklisten (BOM) sind in der Warenwirtschaft abgebildet. Bei Auftragsbestätigung können Komponenten automatisch aufgelöst und vom Bestand abgezogen werden.',
      },
      {
        q: 'Wie funktioniert die Mindestbestand-Warnung?',
        a: 'Pro Artikel lässt sich ein Mindestbestand hinterlegen. Unterschreitungen erscheinen als Low-Stock-Alert im Dashboard und in der Bestandsübersicht, sodass Nachbestellungen über das Einkaufsmodul rechtzeitig ausgelöst werden.',
      },
      {
        q: 'Ist jede Bestandsbewegung nachvollziehbar?',
        a: 'Ja. Zugänge, Abgänge, Umlagerungen und Inventur-Korrekturen werden mit Audit-Trail protokolliert (wer, wann, was). Das erfüllt Nachvollziehbarkeits- und GoBD-Anforderungen für bestandsgeführte Artikel.',
      },
      {
        q: 'Lässt sich VertooERP an Maschinen oder bestehende Systeme anbinden?',
        a: 'Über das Webhook-Modul (Events wie product.stock_changed, order.created) und die REST-API lassen sich externe Systeme anbinden. Kundenspezifische Schnittstellen sind als separat buchbare Einführungsleistung möglich.',
      },
    ],
    cta: {
      headline: 'Zeigen Sie uns Ihren Warenfluss.',
      text:
        'In 30 Minuten zeigen wir den Weg vom Wareneingang bis zur Inventur an Ihrem konkreten Setup.',
      primary: { label: 'Demo anfragen', href: '/#kontakt' },
    },
  },

  // ────────────────────────────────────────────────────────────
  {
    slug: 'handwerk',
    name: 'Handwerk & Bau',
    icon: 'wrench',
    metaTitle: 'ERP für Handwerk & Bau – VertooERP',
    metaDescription:
      'Modulares ERP für Handwerk und Bau: mobile Zeiterfassung, Betriebsmittel, Fuhrpark, Kostenkontrolle pro Auftrag und Buchhaltung – self-gehostet, DSGVO-konform.',
    hero: {
      eyebrow: 'Für Handwerk & Bau',
      headline: 'Den Betrieb im Griff – auch von der Baustelle aus',
      subhead:
        'Mobile Zeiterfassung, Werkzeug- und Materialverwaltung, Fuhrpark und Kostenkontrolle pro Auftrag. Schluss mit Stundenzetteln, verschwundenem Werkzeug und Projekten, deren Marge erst am Ende sichtbar wird.',
      primaryCta: { label: 'Demo anfragen', href: '/#kontakt' },
      secondaryCta: { label: 'Alle Module ansehen', href: '/#module' },
    },
    painpoints: {
      intro: 'Klingt vertraut?',
      items: [
        {
          icon: 'clock',
          title: 'Stunden auf Zetteln',
          description:
            'Arbeitszeiten werden auf der Baustelle notiert und im Büro abgetippt — fehleranfällig, spät und schwer einer Baustelle zuzuordnen.',
        },
        {
          icon: 'package-search',
          title: 'Werkzeug & Material verschwinden',
          description:
            'Welche Maschine ist auf welcher Baustelle? Was ist noch im Lager? Ohne Inventar wird doppelt gekauft und trotzdem gesucht.',
        },
        {
          icon: 'car',
          title: 'Fuhrpark ohne Übersicht',
          description:
            'Fahrzeuge, Termine, Kosten — verteilt auf Köpfe und Ordner. Wartung und TÜV fallen erst auf, wenn es zu spät ist.',
        },
        {
          icon: 'wallet',
          title: 'Marge erst am Ende sichtbar',
          description:
            'Material, Stunden und Fahrtkosten laufen ungebündelt. Ob ein Auftrag profitabel war, zeigt sich erst bei der Schlussrechnung.',
        },
      ],
    },
    modules: {
      intro: 'Diese Module bringen Büro und Baustelle zusammen — auf jedem Gerät.',
      items: [
        {
          icon: 'clock',
          name: 'Mobile Zeiterfassung',
          description:
            'Stempeluhr und Abwesenheiten direkt auf dem Smartphone (PWA). Zeiten lassen sich Aufträgen zuordnen — ohne Zettel und Abtippen.',
        },
        {
          icon: 'clipboard-list',
          name: 'Betriebsmittel & Werkzeug',
          description:
            'Geräte-Inventar mit Mitarbeiter-Zuordnung und Seriennummer, Verbrauchsmaterial mit Mindestbestand und Anforderungs-Workflow.',
        },
        {
          icon: 'car',
          name: 'Fuhrpark',
          description:
            'Fahrzeugverwaltung als Teil des Kostenmoduls — Fahrzeuge, zugeordnete Kosten und Stammdaten an einem Ort statt im Ordner.',
        },
        {
          icon: 'wallet',
          name: 'Kostenmanagement',
          description:
            'Fixkosten, Gehälter, Fuhrpark und SaaS-Abos im Überblick, mit Monats- und Jahressicht — Grundlage für saubere Kalkulation.',
        },
        {
          icon: 'list-checks',
          name: 'Aufgaben & Projekte',
          description:
            'Baustellen und Aufträge als Projekte mit Aufgaben, Zuständigkeiten und Terminen — auf dem Board oder im Kalender.',
        },
        {
          icon: 'receipt-text',
          name: 'Buchhaltung',
          description:
            'Angebote, Rechnungen und Gutschriften mit GoBD-konformen Belegen, DATEV-Export, XRechnung/ZUGFeRD und 3-stufigem Mahnwesen.',
        },
        {
          icon: 'message-square',
          name: 'Nachrichten',
          description:
            'Direkte Kommunikation zwischen Büro und Team auf der Baustelle — DMs, Gruppen und Kanäle mit Dateianhängen.',
        },
        {
          icon: 'users',
          name: 'CRM',
          description:
            'Kunden- und Auftragshistorie an einem Ort — von der Anfrage über das Angebot bis zur Schlussrechnung nachvollziehbar.',
        },
      ],
    },
    workflow: {
      intro: 'So läuft ein Auftrag von der Annahme bis zur Schlussrechnung:',
      steps: [
        {
          number: '01',
          title: 'Auftrag & Angebot',
          description:
            'Kunde im CRM, Angebot in der Buchhaltung erstellt. Bei Zuschlag wird daraus ein Auftrag mit Aufgaben und Terminen.',
          module: 'CRM · Buchhaltung · Aufgaben',
        },
        {
          number: '02',
          title: 'Werkzeug & Material zuordnen',
          description:
            'Benötigtes Werkzeug und Material wird der Baustelle zugewiesen, Verbrauch gebucht, Nachschub bei Mindestbestand angefordert.',
          module: 'Betriebsmittel',
        },
        {
          number: '03',
          title: 'Zeit auf der Baustelle erfassen',
          description:
            'Das Team stempelt mobil und ordnet Stunden dem Auftrag zu — inklusive Fahrtzeiten, direkt auf dem Smartphone.',
          module: 'Mobile Zeiterfassung',
        },
        {
          number: '04',
          title: 'Kosten bündeln',
          description:
            'Stunden, Material und Fuhrpark-Kosten laufen auf dem Auftrag zusammen — die Marge ist sichtbar, bevor die Rechnung rausgeht.',
          module: 'Kostenmanagement',
        },
        {
          number: '05',
          title: 'Abrechnen & auswerten',
          description:
            'Schlussrechnung GoBD-konform erstellt, in den OP-Lauf gestellt, DATEV-Export für den Steuerberater. Auftrag ausgewertet.',
          module: 'Buchhaltung · Reporting',
        },
      ],
    },
    faq: [
      {
        q: 'Funktioniert die Zeiterfassung auch ohne Internet auf der Baustelle?',
        a: 'VertooERP ist eine installierbare PWA. Die Oberfläche und zuletzt geladene Daten bleiben bei kurzen Verbindungsabbrüchen nutzbar; Erfassungen werden synchronisiert, sobald wieder Verbindung besteht. Für eine durchgehende Offline-Erfassung empfehlen wir eine Vorab-Prüfung anhand Ihres konkreten Baustellen-Szenarios.',
      },
      {
        q: 'Können wir Werkzeug und Maschinen einzelnen Mitarbeitern zuordnen?',
        a: 'Ja. Das IT-/Geräte-Inventar im Betriebsmittel-Modul erfasst jedes Gerät mit Seriennummer und einer Zuordnung zum Mitarbeiter (assigned_to). So ist jederzeit klar, wer welches Gerät hat.',
      },
      {
        q: 'Lassen sich Kosten pro Auftrag oder Baustelle auswerten?',
        a: 'Stunden, Materialverbrauch und Kosten lassen sich über Projekte/Aufträge bündeln. In Kombination mit dem Kosten- und Reporting-Modul wird die Marge je Auftrag sichtbar. Eine tiefe Bau-Nachkalkulation (z.B. nach Gewerken) richten wir bei Bedarf als Einführungsleistung ein.',
      },
      {
        q: 'Gibt es Aufmaß- oder GAEB-Funktionen?',
        a: 'Ehrliche Antwort: VertooERP ist ein modulares ERP, keine spezialisierte Bau-Aufmaß-Software. Aufmaß und GAEB-Schnittstellen sind nicht eingebaut. Stärken liegen in Zeit, Betriebsmitteln, Kosten und Buchhaltung — oft ergänzend zu einer Aufmaß-Lösung. Für ergänzende Nutzung gewähren wir reduzierte Konditionen.',
      },
      {
        q: 'Ist die Rechnungsstellung GoBD-konform?',
        a: 'Ja. Belege sind unveränderbar mit Audit-Trail, dazu DATEV-Export, SKR03, XRechnung/ZUGFeRD und 3-stufiges Mahnwesen. Damit ist die Abrechnung prüfungssicher und steuerberater-tauglich.',
      },
      {
        q: 'Wie viele Mitarbeiter lohnt sich das?',
        a: 'Ab etwa 3–5 Mitarbeitenden mit Baustellen-Einsatz wird der Nutzen sichtbar — vor allem durch die mobile Zeiterfassung und die Werkzeug-/Materialübersicht. Der Starter-Tarif deckt bis zu 3 Module und 3 Seats ab und lässt sich jederzeit erweitern.',
      },
    ],
    cta: {
      headline: 'Zeigen Sie uns Ihren Betrieb.',
      text:
        'In 30 Minuten zeigen wir, wie Büro und Baustelle in VertooERP zusammenkommen — an Ihrem konkreten Setup.',
      primary: { label: 'Demo anfragen', href: '/#kontakt' },
    },
  },
];

export function getBrancheBySlug(slug: string): Branche | undefined {
  return branchen.find((b) => b.slug === slug);
}
