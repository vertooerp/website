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
  },,
  {
    "term": "Wareneingang",
    "slug": "wareneingang",
    "definition": "Der Wareneingang ist die Erfassung und Prüfung eingehender Lieferungen im Lager. Bestände werden dabei bucherisch erhöht, idealerweise mit Bezug zur Bestellung und nachvollziehbarem Status."
  },
  {
    "term": "Kommissionierung",
    "slug": "kommissionierung",
    "definition": "Kommissionierung bezeichnet das Zusammenstellen der Artikel eines Auftrags aus dem Lagerbestand für den anschließenden Versand. Gute ERP-Systeme führen dabei effizient durch Lagerzonen und -plätze."
  },
  {
    "term": "Inventur",
    "slug": "inventur",
    "definition": "Die Inventur ist die mengen- und wertmäßige Erfassung des tatsächlichen Bestands zu einem Stichtag. Sie gleicht Buchbestand und Ist-Bestand ab und ist Grundlage für den Jahresabschluss."
  },
  {
    "term": "Fulfillment",
    "slug": "fulfillment",
    "definition": "Fulfillment umfasst alle Schritte nach der Bestellung – Kommissionierung, Verpackung, Versand und Retourenabwicklung. Im Handel entscheidet es maßgeblich über Lieferzeit und Kundenzufriedenheit."
  },
  {
    "term": "Multichannel",
    "slug": "multichannel",
    "definition": "Multichannel bezeichnet den Verkauf über mehrere Kanäle gleichzeitig, etwa eigenen Shop, Marktplätze und stationären Handel. Zentrale Herausforderung ist, Bestände und Preise über alle Kanäle synchron zu halten."
  },
  {
    "term": "Meldebestand",
    "slug": "meldebestand",
    "definition": "Der Meldebestand (Mindestbestand) ist die Bestandsmenge, bei deren Unterschreitung eine Nachbestellung ausgelöst werden sollte. Er verhindert Fehlbestände, ohne unnötig Kapital im Lager zu binden."
  },
  {
    "term": "Skonto",
    "slug": "skonto",
    "definition": "Skonto ist ein prozentualer Abzug vom Rechnungsbetrag, den ein Lieferant für schnelle Zahlung innerhalb einer bestimmten Frist gewährt. In der Buchhaltung wird Skonto gesondert erfasst."
  },
  {
    "term": "Offene Posten (OP)",
    "slug": "offene-posten",
    "definition": "Offene Posten (OP) sind Rechnungen, die noch nicht ausgeglichen sind – auf der Debitoren- (Kunden) oder Kreditorenseite (Lieferanten). Die OP-Liste zeigt, welche Beträge noch offen sind."
  },
  {
    "term": "BWA",
    "slug": "bwa",
    "definition": "Die betriebswirtschaftliche Auswertung (BWA) stellt Erträge und Aufwendungen eines Zeitraums gegenüber und zeigt das vorläufige Ergebnis. Sie dient der laufenden Steuerung, ersetzt aber keinen Jahresabschluss."
  },
  {
    "term": "Mahnwesen",
    "slug": "mahnwesen",
    "definition": "Das Mahnwesen umfasst den strukturierten Prozess, überfällige Rechnungen anzumahnen – oft in mehreren Stufen. Ein ERP kann Mahnungen anhand offener Posten automatisiert vorschlagen."
  },
  {
    "term": "Seat",
    "slug": "seat",
    "definition": "Ein Seat ist eine Nutzerlizenz, also der Zugang für eine Person zum System. Viele ERP-Tarife enthalten eine bestimmte Zahl an Seats, weitere Nutzer werden separat berechnet."
  },
  {
    "term": "API",
    "slug": "api",
    "definition": "Eine API (Programmierschnittstelle) erlaubt es Systemen, strukturiert Daten auszutauschen und Funktionen aufzurufen. Über APIs lässt sich ein ERP mit Shops, Versanddienstleistern oder anderer Software verbinden."
  },
  {
    "term": "Webhook",
    "slug": "webhook",
    "definition": "Ein Webhook benachrichtigt ein externes System automatisch, sobald ein bestimmtes Ereignis eintritt – etwa eine neue Bestellung. Anders als beim regelmäßigen Abfragen (Polling) werden Daten ereignisgesteuert übertragen."
  },
  {
    "term": "E-Rechnung",
    "slug": "e-rechnung",
    "definition": "Eine E-Rechnung ist eine strukturierte elektronische Rechnung in einem maschinenlesbaren Format – nicht bloß ein PDF-Bild. Verbreitete Formate im deutschen Raum sind XRechnung und ZUGFeRD."
  },
  {
    "term": "Umsatzsteuer-Voranmeldung",
    "slug": "ust-voranmeldung",
    "definition": "Mit der Umsatzsteuer-Voranmeldung melden Unternehmen dem Finanzamt regelmäßig die vereinnahmte und gezahlte Umsatzsteuer. Die Zahllast ergibt sich aus der Differenz von Umsatzsteuer und Vorsteuer."
  },
  {
    "term": "Cloud-ERP",
    "slug": "cloud-erp",
    "definition": "Ein Cloud-ERP wird von einem Anbieter betrieben und über das Internet als Dienst genutzt (SaaS). Gegenmodell ist das Self-Hosting bzw. On-Premises, bei dem der Kunde die Software selbst betreibt."
  },
  {
    "term": "Digitale Souveränität",
    "slug": "digitale-souveraenitaet",
    "definition": "Digitale Souveränität bezeichnet die Fähigkeit eines Unternehmens (oder Staates), über eigene Daten, Systeme und digitale Abhängigkeiten selbst zu bestimmen. Bausteine sind unter anderem Datenhoheit, offene Standards und Exportformate sowie Wahlfreiheit beim Betriebsmodell – etwa Self-Hosting statt Cloud-Zwang."
  },
  {
    "term": "Digitale Resilienz",
    "slug": "digitale-resilienz",
    "definition": "Digitale Resilienz ist die Fähigkeit eines Unternehmens, den Betrieb auch bei digitalen Störungen aufrechtzuerhalten – etwa bei Ausfällen, Anbieterwechseln oder veränderten Vertragsbedingungen. Dazu gehören beherrschte Abhängigkeiten, Backups unter eigener Kontrolle und erprobte Exit-Strategien."
  },
  {
    "term": "Vendor Lock-in",
    "slug": "vendor-lock-in",
    "definition": "Vendor Lock-in beschreibt die Abhängigkeit von einem Anbieter, die einen Wechsel teuer oder praktisch unmöglich macht – etwa durch proprietäre Formate oder fehlende Exporte. Offene Standards und Exportformate (z. B. CSV, DATEV-Format, XRechnung) reduzieren dieses Risiko."
  },
  {
    "term": "NIS2",
    "slug": "nis2",
    "definition": "NIS2 ist eine EU-Richtlinie zur Netzwerk- und Informationssicherheit, die Cybersicherheits- und Meldepflichten auf deutlich mehr Unternehmen und Sektoren ausweitet als ihr Vorgänger. Ob und wie ein Unternehmen betroffen ist, hängt von Sektor und Größe ab – maßgeblich ist die jeweilige nationale Umsetzung."
  }
];
