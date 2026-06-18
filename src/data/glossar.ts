/**
 * Glossar-Begriffe für /glossar.
 * Dient als GEO-Content (klare, zitierbare Definitionen) und als
 * DefinedTermSet-JSON-LD.
 *
 * Definitionen bewusst neutral/faktisch gehalten – generische
 * Definitionen werden von Suchmaschinen und KI-Antworten häufiger
 * zitiert als werbliche Texte.
 */

export interface GlossarTerm {
  term: string;
  /** kurzer Slug für den Anchor */
  slug: string;
  definition: string;
}

export const glossar: GlossarTerm[] = [
  {
    term: 'Audit-Trail',
    slug: 'audit-trail',
    definition:
      'Ein Audit-Trail ist die lückenlose, unveränderbare Protokollierung von Änderungen an Datensätzen – wer hat wann was geändert. In der Buchhaltung ist er Voraussetzung für die GoBD-Konformität.',
  },
  {
    term: 'CRM (Customer Relationship Management)',
    slug: 'crm',
    definition:
      'CRM bezeichnet die systematische Verwaltung von Kundenbeziehungen – Kontaktdaten, Kommunikationshistorie, Angebote und Aufträge an einem Ort. Ziel ist ein vollständiger Blick auf jeden Kunden über alle Abteilungen hinweg.',
  },
  {
    term: 'DATEV-Export',
    slug: 'datev-export',
    definition:
      'Der DATEV-Export stellt Buchhaltungsdaten in einem Format bereit, das der Steuerberater direkt in die DATEV-Software importieren kann. Er ist in Deutschland der De-facto-Standard für die Übergabe von Finanzdaten an die Steuerberatung.',
  },
  {
    term: 'Dropshipping',
    slug: 'dropshipping',
    definition:
      'Dropshipping ist ein Handelsmodell, bei dem der Händler Ware nicht selbst lagert, sondern Bestellungen an einen Lieferanten weiterleitet, der direkt an den Endkunden versendet. Erfordert eine enge Synchronisation von Beständen und Bestellungen zwischen Händler- und Lieferantensystem.',
  },
  {
    term: 'DSGVO',
    slug: 'dsgvo',
    definition:
      'Die Datenschutz-Grundverordnung (DSGVO) ist die EU-weite Verordnung zum Schutz personenbezogener Daten. Sie regelt unter anderem Rechtsgrundlagen der Verarbeitung, Betroffenenrechte (Auskunft, Löschung) und Pflichten wie den Auftragsverarbeitungsvertrag (AVV).',
  },
  {
    term: 'EAN / GTIN',
    slug: 'ean',
    definition:
      'Die EAN (European Article Number, heute GTIN) ist eine weltweit eindeutige Artikelnummer, kodiert im Barcode. Sie dient als eindeutiger Schlüssel, um ein Produkt über verschiedene Systeme und Verkaufskanäle hinweg zuzuordnen.',
  },
  {
    term: 'ERP (Enterprise Resource Planning)',
    slug: 'erp',
    definition:
      'Ein ERP-System ist eine Software, die die zentralen Geschäftsprozesse eines Unternehmens – etwa Warenwirtschaft, Buchhaltung, Einkauf, Personal und Vertrieb – in einer gemeinsamen Datenbasis zusammenführt. Statt isolierter Insellösungen arbeiten alle Bereiche auf denselben Daten.',
  },
  {
    term: 'GoBD',
    slug: 'gobd',
    definition:
      'Die GoBD sind die „Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff". Sie regeln, wie steuerlich relevante Daten digital erfasst, unveränderbar gespeichert und aufbewahrt werden müssen.',
  },
  {
    term: 'Keycloak',
    slug: 'keycloak',
    definition:
      'Keycloak ist eine quelloffene Lösung für Identitäts- und Zugriffsverwaltung. Sie ermöglicht Single Sign-On (SSO), sodass sich Mitarbeitende mit einem zentralen Firmen-Account bei mehreren Anwendungen anmelden können.',
  },
  {
    term: 'Multi-Mandant (Mandantenfähigkeit)',
    slug: 'multi-mandant',
    definition:
      'Mandantenfähigkeit bedeutet, dass mehrere rechtlich getrennte Einheiten – etwa Tochtergesellschaften einer Gruppe – in einem System verwaltet werden, ihre Daten aber sauber voneinander getrennt bleiben.',
  },
  {
    term: 'Multi-Standort',
    slug: 'multi-standort',
    definition:
      'Multi-Standort beschreibt die Fähigkeit eines Systems, ein Unternehmen mit mehreren Standorten (Filialen, Lager) abzubilden. Daten gehören derselben Firma, lassen sich aber je Standort filtern und steuern.',
  },
  {
    term: 'On-Premises',
    slug: 'on-premises',
    definition:
      'On-Premises bezeichnet den Betrieb einer Software auf eigener Infrastruktur des Nutzers statt in der Cloud des Anbieters. Synonym wird häufig „Self-Hosting" verwendet. Vorteil ist die volle Kontrolle über die eigenen Daten.',
  },
  {
    term: 'PWA (Progressive Web App)',
    slug: 'pwa',
    definition:
      'Eine Progressive Web App ist eine Website, die sich wie eine native App verhält: Sie lässt sich auf dem Gerät installieren, funktioniert auf allen Plattformen und kommt ohne App-Store aus. Updates erfolgen automatisch über das Web.',
  },
  {
    term: 'SaaS (Software as a Service)',
    slug: 'saas',
    definition:
      'SaaS ist ein Bereitstellungsmodell, bei dem Software als Dienst aus der Cloud des Anbieters genutzt und meist nutzungsbasiert abgerechnet wird. Gegenmodell ist die Lizenzsoftware, die der Kunde selbst betreibt (On-Premises).',
  },
  {
    term: 'Self-Hosting',
    slug: 'self-hosting',
    definition:
      'Self-Hosting bedeutet, dass ein Unternehmen eine Software auf eigener oder selbst angemieteter Infrastruktur betreibt, statt sie aus der Cloud eines Anbieters zu beziehen. Die Daten verbleiben vollständig im Verantwortungsbereich des Unternehmens.',
  },
  {
    term: 'SKR03',
    slug: 'skr03',
    definition:
      'Der SKR03 ist ein in Deutschland weit verbreiteter Standardkontenrahmen, der Buchhaltungskonten nach dem Prozessgliederungsprinzip ordnet. Er bildet die Grundlage für eine strukturierte, prüfungssichere Finanzbuchhaltung.',
  },
  {
    term: 'SSO (Single Sign-On)',
    slug: 'sso',
    definition:
      'Single Sign-On erlaubt es, sich einmal anzumelden und damit Zugriff auf mehrere Anwendungen zu erhalten, ohne sich erneut einloggen zu müssen. Das erhöht Komfort und Sicherheit, da weniger Passwörter verwaltet werden.',
  },
  {
    term: 'Stückliste (BOM)',
    slug: 'stueckliste',
    definition:
      'Eine Stückliste (Bill of Materials, BOM) listet alle Komponenten auf, aus denen ein Produkt oder Bündel besteht. Bei einem Verkauf können die enthaltenen Einzelteile automatisch vom Bestand abgezogen werden.',
  },
  {
    term: 'Warenwirtschaft (WaWi)',
    slug: 'warenwirtschaft',
    definition:
      'Ein Warenwirtschaftssystem steuert den Waren- und Materialfluss eines Unternehmens – von Einkauf und Lagerhaltung über Bestandsführung bis zu Auftragsabwicklung und Versand. Es bildet das Rückgrat des Handels- und Logistikbetriebs.',
  },
  {
    term: 'XRechnung / ZUGFeRD',
    slug: 'xrechnung-zugferd',
    definition:
      'XRechnung und ZUGFeRD sind Formate für elektronische Rechnungen in Deutschland. XRechnung ist ein rein strukturiertes XML-Format, ZUGFeRD ein Hybrid aus PDF und eingebettetem XML. Seit 2025 müssen inländische B2B-Unternehmen E-Rechnungen empfangen können.',
  },
];
