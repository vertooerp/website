/**
 * Allgemeine FAQ für die Startseite.
 *
 * Doppelter Zweck:
 *  1. Anzeige als Accordion (FAQ.astro)
 *  2. FAQPage-JSON-LD (index.astro) für Rich-Results und GEO/AI-Search
 *
 * Antworten sind bewusst als eigenständige, zitierbare Aussagen
 * formuliert (Definitions-Stil), weil generative Suchmaschinen
 * (Google AI Overviews, Gemini, Perplexity) solche klaren Q&A-Paare
 * überdurchschnittlich oft wörtlich zitieren.
 */

export interface FaqItem {
  q: string;
  /** Plain-Text-Antwort (auch für JSON-LD verwendet) */
  a: string;
  /** Optionale Autoritäts-Quellen, unter der Antwort als Links gerendert */
  sources?: { label: string; url: string }[];
}

export const faq: FaqItem[] = [
  {
    q: 'Was ist VertooERP?',
    a: 'VertooERP ist eine modulare ERP-Plattform für kleine und mittlere Unternehmen. Sie bündelt über 20 Module – darunter Warenwirtschaft, Lagerverwaltung, Buchhaltung, Zeiterfassung, Aufgaben, CRM und einen KI-Assistenten – in einer einzigen Anwendung. VertooERP wird als Lizenz vertrieben und vom Kunden selbst gehostet (Self-Hosting / On-Premises). Entwickelt wird die Plattform von der tap & type UG in Luckenwalde, Brandenburg.',
  },
  {
    q: 'Welche Module bietet VertooERP?',
    a: 'VertooERP umfasst über 20 Module in fünf Bereichen: Commerce & Handel (Warenwirtschaft, Lagerverwaltung, Dropshipping, E-Commerce/Preischeck, Webshop, Shopanbindung, Bonuspunkte), Finanzen (Buchhaltung, Kostenmanagement, Personal), Team & Zusammenarbeit (Aufgaben & Projekte, Nachrichten, Kundenkommunikation, Postfach, Kalender, Dateien, Notizen, Wissensdatenbank, Zeiterfassung, Betriebsmittel, Fuhrpark), CRM & Analytics (CRM, Reporting, KI-Assistent) sowie Plattform (Webhooks, Compliance/DSGVO). Jedes Modul ist einzeln aktivierbar.',
  },
  {
    q: 'Was kostet VertooERP?',
    a: 'VertooERP wird in drei Stufen pro Monat abgerechnet (zzgl. MwSt.): Starter ab 350 € (bis 3 Module, 3 Seats inklusive), Business ab 800 € (bis 12 Module, 10 Seats) und Enterprise ab 1.400 € (alle 20+ Module, 20 Seats). Weitere Seats sind je Stufe zubuchbar. Die Mindestlaufzeit beträgt 12 Monate; Hosting, Einrichtung, Wartung und Support sind separat buchbar.',
  },
  {
    q: 'Wird VertooERP in der Cloud oder selbst gehostet?',
    a: 'VertooERP wird selbst gehostet (Self-Hosting / On-Premises). Kunden betreiben die Software auf eigener oder gemieteter Infrastruktur und behalten die volle Kontrolle über ihre Daten. Es gibt keinen Cloud-Zwang – personenbezogene Daten verlassen die Infrastruktur des Kunden nicht.',
  },
  {
    q: 'Ist VertooERP DSGVO- und GoBD-konform?',
    a: 'Ja. VertooERP ist auf DSGVO-Konformität ausgelegt und bietet GoBD-konforme, unveränderbare Audit-Trails für Rechnungen und Finanzdaten, einen DATEV-Export sowie XRechnung/ZUGFeRD. Durch das Self-Hosting-Modell bleiben personenbezogene Daten vollständig beim Kunden, der datenschutzrechtlich Verantwortlicher ist.',
    sources: [
      { label: 'GoBD (IHK-Ratgeber)', url: 'https://www.ihk-muenchen.de/ratgeber/steuern/finanzverwaltung/grundsaetze-elektronische-buchfuehrung-gobd/' },
      { label: 'DSGVO im Volltext', url: 'https://dsgvo-gesetz.de/' },
    ],
  },
  {
    q: 'Für wen eignet sich VertooERP?',
    a: 'VertooERP richtet sich an kleine und mittlere Unternehmen ab etwa 3 bis 5 Mitarbeitenden. Typische Branchen sind Handel & E-Commerce, Dienstleister & Agenturen, Produktion & Logistik sowie Handwerk & Bau. Durch den modularen Aufbau lässt sich die Plattform an den jeweiligen Bedarf anpassen.',
  },
  {
    q: 'Was unterscheidet VertooERP von Cloud-ERP-Anbietern?',
    a: 'Der zentrale Unterschied ist das Self-Hosting-Modell. Während die meisten ERP-Anbieter ihre Software als SaaS aus der Cloud bereitstellen, wird VertooERP als Lizenz vertrieben und vom Kunden selbst betrieben. Das bedeutet volle Datenhoheit, keine dauerhafte Abhängigkeit von einer Anbieter-Cloud und planbare Lizenzkosten statt nutzungsbasierter Cloud-Gebühren.',
  },
  {
    q: 'Kann VertooERP ergänzend zu einem bestehenden System genutzt werden?',
    a: 'Ja. VertooERP kann ergänzend zu einem bereits führenden System wie JTL-Wawi, SAP oder DATEV eingesetzt werden – zum Beispiel mit nur einzelnen Modulen. Für diese ergänzende Nutzung gewährt die tap & type UG reduzierte Konditionen.',
  },
  {
    q: 'Wie aufwändig ist der Umstieg auf VertooERP?',
    a: 'Die Lizenz ist sofort aktiv. Bestehende Daten wie Produkte, Kunden und Lieferanten werden in der Regel per CSV- oder Excel-Import übernommen. Eine produktive Einführung mit Stammdaten, Schnittstellen und Schulung dauert je nach Umfang typischerweise zwei bis acht Wochen. Der modulare Aufbau erlaubt einen schrittweisen Start mit den wichtigsten Modulen, statt alles auf einmal umzustellen.',
  },
  {
    q: 'Was passiert, wenn unser Unternehmen wächst?',
    a: 'VertooERP wächst modular mit: Sie aktivieren weitere Module und Seats nach Bedarf, ohne Systemwechsel. Multi-Standort und Multi-Mandant sind in allen Tarifen enthalten, sodass sich auch mehrere Standorte oder Tochtergesellschaften abbilden lassen.',
  },
  {
    q: 'Können wir VertooERP vor der Entscheidung ansehen?',
    a: 'Ja. In einer persönlichen Demo zeigen wir die Plattform an Ihrem konkreten Anwendungsfall – von der Warenwirtschaft bis zur Buchhaltung. Für einen tieferen Eindruck lässt sich ein Pilotbetrieb mit einem Teilbereich oder Standort vereinbaren.',
  },
];
