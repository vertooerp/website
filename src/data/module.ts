/**
 * Modul-Landingpages (/module/[slug]).
 * Keyword-fokussierte Seiten pro Kernmodul für organische Suche + GEO.
 * Inhalt via Multi-Agent-Workflow generiert + adversarial faktengeprüft (2026-06-18).
 * Neue Seite: Objekt im module-Array ergänzen.
 */

export interface ModulPain {
  icon: string;
  title: string;
  description: string;
}

export interface ModulFeature {
  icon: string;
  name: string;
  description: string;
}

export interface Modul {
  slug: string;
  name: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; headline: string; subhead: string };
  intro: string;
  painpoints: { intro: string; items: ModulPain[] };
  features: { intro: string; items: ModulFeature[] };
  faq: { q: string; a: string }[];
  cta: { headline: string; text: string };
}

export const module: Modul[] = [
  {
    "slug": "warenwirtschaft",
    "name": "Warenwirtschaft",
    "icon": "package",
    "metaTitle": "Warenwirtschaft Software für den Handel – VertooERP",
    "metaDescription": "Warenwirtschaft Software von VertooERP: ein Produkt pro EAN, Multi-Supplier, Bestandsführung mit Audit-Trail, Wareneingang, Aufträge, Versand-Tracking und Retouren.",
    "hero": {
      "eyebrow": "Modul: Warenwirtschaft",
      "headline": "Warenwirtschaft Software mit einem Produktkatalog für alle Lieferanten",
      "subhead": "Ein Eintrag pro EAN, mehrere Lieferanten, durchgängige Bestandsführung mit Audit-Trail – vom Wareneingang über Kommissionierung bis zum Versand mit Carrier-Tracking."
    },
    "intro": "Warenwirtschaft bezeichnet die Erfassung und Steuerung aller Waren­bewegungen eines Unternehmens – von der Beschaffung über die Lagerung und Bestandsführung bis zu Auftrag und Versand. Eine Warenwirtschaft Software bildet diese Prozesse in einem System ab, sodass Stammdaten, Bestände und Belege an einer Stelle geführt werden. VertooERP setzt dabei auf einen einheitlichen Produktkatalog: Jedes Produkt existiert genau einmal pro EAN und kann mehreren Lieferanten zugeordnet werden. So bleiben Bestände, Ein- und Verkaufspreise sowie Bewegungen konsistent, auch wenn dasselbe Produkt über verschiedene Bezugsquellen läuft.",
    "painpoints": {
      "intro": "Diese Situationen kennen Sie vielleicht",
      "items": [
        {
          "icon": "package-search",
          "title": "Ein Produkt, mehrere Datensätze",
          "description": "Dasselbe Produkt liegt je Lieferant mehrfach im System. Bestände und Preise weichen voneinander ab, und niemand weiß, welcher Datensatz stimmt."
        },
        {
          "icon": "history",
          "title": "Bestandsbewegungen ohne Nachweis",
          "description": "Zu- und Abgänge werden nur teilweise dokumentiert. Bei Differenzen lässt sich nicht nachvollziehen, wann und durch wen ein Bestand verändert wurde."
        },
        {
          "icon": "package-x",
          "title": "Ware fehlt trotz gemeldetem Bestand",
          "description": "Aufträge werden bestätigt, obwohl der tatsächliche Bestand nicht ausreicht. Ohne Mindestbestand-Warnung wird eine Nachbestellung zu spät ausgelöst."
        },
        {
          "icon": "truck",
          "title": "Versandstatus verteilt auf viele Portale",
          "description": "Sendungsnummern liegen in den Oberflächen der einzelnen Carrier. Zum Status einer Lieferung müssen mehrere Systeme geöffnet werden."
        }
      ]
    },
    "features": {
      "intro": "Die folgenden Funktionen bilden den Warenfluss von der Stammdatenpflege bis zur Retoure in einem System ab.",
      "items": [
        {
          "icon": "package",
          "name": "Einheitlicher Produktkatalog",
          "description": "Ein Produkt pro EAN, verknüpfbar mit mehreren Lieferanten (Multi-Supplier). So bleiben Bestand, Preise und Bewegungen je Artikel eindeutig."
        },
        {
          "icon": "database",
          "name": "Stammdaten",
          "description": "Kategorien, Lieferanten und Produkte mit SKU, EAN, Ein- und Verkaufspreis, Mehrwertsteuersatz, Gewicht, Maßen und Lagerplatz an einer Stelle gepflegt."
        },
        {
          "icon": "boxes",
          "name": "Bestandsführung",
          "description": "Zugang, Abgang und Inventur mit vollständigem Audit-Trail, Excel-Import/Export, Barcode-Scanner, Mindestbestand-Warnung und Multi-Standort-Verwaltung."
        },
        {
          "icon": "clipboard-check",
          "name": "Wareneingang",
          "description": "Erfassung im Status Draft, Booked und Cancelled – optional mit Bezug zu einer Bestellung. Fehlbuchungen lassen sich per Storno korrigieren."
        },
        {
          "icon": "shopping-cart",
          "name": "Einkauf",
          "description": "Bestellungen an Lieferanten mit eigenem Nummernkreis. Wareneingänge lassen sich direkt auf die passende Bestellung beziehen."
        },
        {
          "icon": "list-checks",
          "name": "Aufträge und Kommissionierung",
          "description": "Aufträge durchlaufen die Status draft, confirmed, processing, shipped und delivered. Bei der Kommissionierung wird der Bestand automatisch abgebucht."
        },
        {
          "icon": "send",
          "name": "Versand und Retouren",
          "description": "Carrier-Tracking über DHL, DPD, GLS, Hermes und UPS am Auftrag hinterlegt. Rücksendungen werden als Retouren erfasst und im Bestandsfluss berücksichtigt."
        },
        {
          "icon": "chart-column",
          "name": "Bundles und KPI-Dashboard",
          "description": "Zusammengesetzte Artikel als Bundle beziehungsweise Stückliste (BOM) führen. Ein Dashboard mit 10 KPI-Cards bündelt zentrale Kennzahlen."
        }
      ]
    },
    "faq": [
      {
        "q": "Was bedeutet \"ein Produkt pro EAN\" in der Warenwirtschaft Software?",
        "a": "Jedes Produkt existiert im Katalog genau einmal, identifiziert über seine EAN. Dieser eine Eintrag kann mehreren Lieferanten zugeordnet werden (Multi-Supplier). So gibt es keine doppelten Datensätze desselben Artikels, und Bestand, Preise sowie Bewegungen bleiben je Produkt eindeutig."
      },
      {
        "q": "Wie werden Bestandsbewegungen dokumentiert?",
        "a": "Zugang, Abgang und Inventur werden mit einem vollständigen Audit-Trail erfasst. Jede Bewegung ist nachvollziehbar, sodass sich bei Differenzen rekonstruieren lässt, wann ein Bestand verändert wurde. Ergänzend stehen Excel-Import und -Export sowie eine Erfassung per Barcode-Scanner zur Verfügung."
      },
      {
        "q": "Unterstützt das Modul mehrere Standorte?",
        "a": "Ja. Die Bestandsführung ist Multi-Standort-fähig, sodass Bestände getrennt je Standort geführt werden. Eine Mindestbestand-Warnung weist auf Artikel hin, deren Bestand einen definierten Schwellenwert unterschreitet."
      },
      {
        "q": "Welche Versanddienstleister werden für das Tracking unterstützt?",
        "a": "Das Versand-Modul unterstützt Carrier-Tracking für DHL, DPD, GLS, Hermes und UPS. Die Sendungsverfolgung ist direkt am jeweiligen Auftrag hinterlegt."
      },
      {
        "q": "Welche Status durchläuft ein Auftrag?",
        "a": "Ein Auftrag durchläuft die Status draft, confirmed, processing, shipped und delivered. Bei der Kommissionierung wird der zugehörige Bestand automatisch abgebucht."
      },
      {
        "q": "Lassen sich zusammengesetzte Artikel abbilden?",
        "a": "Ja. Über Bundles beziehungsweise Stücklisten (BOM) können mehrere Komponenten zu einer Verkaufseinheit zusammengefasst werden. So wird ein aus mehreren Produkten bestehender Artikel als ein Eintrag geführt."
      }
    ],
    "cta": {
      "headline": "Warenwirtschaft in einem System kennenlernen",
      "text": "Sehen Sie in einer Demo, wie VertooERP Produktkatalog, Bestandsführung, Aufträge und Versand mit einem Produkt pro EAN in einem System zusammenführt."
    }
  },
  {
    "slug": "buchhaltung",
    "name": "Buchhaltung",
    "icon": "receipt-text",
    "metaTitle": "Buchhaltungssoftware für KMU – VertooERP",
    "metaDescription": "Buchhaltungssoftware für KMU: Belege, offene Posten, Kassenbuch, GuV/BWA, DATEV-Export, USt-Voranmeldung und Mahnwesen – GoBD-konform im Buchhaltungsmodul von VertooERP.",
    "hero": {
      "eyebrow": "Modul: Buchhaltung",
      "headline": "Buchhaltungssoftware für KMU – integriert in Ihr ERP",
      "subhead": "Von der Rechnung über offene Posten und Kassenbuch bis zu GuV/BWA und DATEV-Export: Das Buchhaltungsmodul bildet Ihre laufende Buchhaltung GoBD-konform in einer Anwendung ab."
    },
    "intro": "Buchhaltung bezeichnet die systematische, lückenlose Aufzeichnung aller Geschäftsvorfälle eines Unternehmens in Belegen und Konten. Für kleine und mittlere Unternehmen bildet eine Buchhaltungssoftware KMU diese Vorgänge digital ab – von der Belegerstellung über offene Posten und Kassenbuch bis zur Auswertung als GuV oder BWA. Das Buchhaltungsmodul von VertooERP arbeitet mit dem Kontenrahmen SKR03, exportiert nach DATEV und ist GoBD-konform ausgelegt, sodass Belege unveränderbar gespeichert und Änderungen im Audit-Trail protokolliert werden.",
    "painpoints": {
      "intro": "Klingt vertraut?",
      "items": [
        {
          "icon": "receipt-text",
          "title": "Belege in mehreren Werkzeugen",
          "description": "Rechnungen im Textprogramm, offene Posten in Excel, Kassenbelege im Ordner – ohne durchgängige Belegnummer und ohne Verbindung zur Kundenakte."
        },
        {
          "icon": "clock",
          "title": "Offene Posten unklar",
          "description": "Welche Rechnung ist überfällig, welche fast fällig? Ohne aktuelle OP-Liste mit Altersstruktur fehlt der Überblick über ausstehende Zahlungen."
        },
        {
          "icon": "send",
          "title": "Zahlungserinnerungen von Hand",
          "description": "Fällige Rechnungen nachzuhalten und einzeln anzuschreiben kostet Zeit – und wird im Tagesgeschäft leicht vergessen oder doppelt versendet."
        },
        {
          "icon": "shield-check",
          "title": "Zweifel an der GoBD-Konformität",
          "description": "Sind Belege unveränderbar? Ist jede Änderung nachvollziehbar? Ohne Audit-Trail und unveränderbare Belege bleibt Unsicherheit gegenüber dem Finanzamt."
        }
      ]
    },
    "features": {
      "intro": "Das Buchhaltungsmodul deckt die laufende Buchhaltung kleiner und mittlerer Unternehmen in einer Anwendung ab – von der Belegerstellung bis zur Auswertung und zum Export an Steuerberater oder Finanzamt.",
      "items": [
        {
          "icon": "receipt-text",
          "name": "Belege",
          "description": "Rechnungen, Angebote, Gutschriften und Stornierungen mit Leistungszeitraum. Die Beleg-Nummer wird dynamisch vergeben, das Fälligkeitsdatum ergibt sich aus dem Zahlungsziel des Kunden."
        },
        {
          "icon": "list-checks",
          "name": "Offene Posten (OP-Liste)",
          "description": "Alle unbezahlten Belege in einer Liste mit Altersstruktur (Aging-Buckets). Überfällige Posten sind farblich hervorgehoben, sodass der Handlungsbedarf sofort erkennbar ist."
        },
        {
          "icon": "wallet",
          "name": "Kassenbuch",
          "description": "Bareinnahmen und Barausgaben mit laufendem Saldo. Ein Monatsfilter grenzt die Einträge auf den gewünschten Zeitraum ein."
        },
        {
          "icon": "chart-column",
          "name": "GuV / BWA",
          "description": "Monatsübersicht der Erträge und Aufwendungen als Balkendiagramm mit den zentralen Kennzahlen – für einen schnellen Blick auf die wirtschaftliche Lage."
        },
        {
          "icon": "calculator",
          "name": "Kontierung SKR03",
          "description": "Belege werden auf den Kontenrahmen SKR03 mit 47 Konten kontiert. Das schafft die Grundlage für einen sauberen DATEV-Export an den Steuerberater."
        },
        {
          "icon": "bell",
          "name": "Zahlungserinnerungen",
          "description": "Fällige Rechnungen lösen automatische Erinnerungs-E-Mails aus. Ein Cooldown von 7 Tagen verhindert, dass ein Kunde mehrfach in kurzer Folge angeschrieben wird."
        },
        {
          "icon": "download",
          "name": "DATEV-Export & USt-Voranmeldung",
          "description": "Buchungsdaten lassen sich nach DATEV exportieren; ergänzt um die Umsatzsteuer-Voranmeldung – zur Übergabe an Steuerberater und Finanzamt."
        },
        {
          "icon": "lock",
          "name": "GoBD-konform",
          "description": "Belege werden unveränderbar gespeichert, jede Änderung wird im Audit-Trail protokolliert. Mit XRechnung, ZUGFeRD, Bankabgleich und dreistufigem Mahnwesen deckt das Modul die formalen Anforderungen ab."
        }
      ]
    },
    "faq": [
      {
        "q": "Was ist eine Buchhaltungssoftware für KMU?",
        "a": "Eine Buchhaltungssoftware für KMU ist eine Anwendung, mit der kleine und mittlere Unternehmen ihre laufende Buchhaltung digital führen – also Belege erstellen, offene Posten verwalten, das Kassenbuch führen und Auswertungen wie GuV oder BWA erzeugen. Im Buchhaltungsmodul von VertooERP sind diese Funktionen zusammen mit Kontierung nach SKR03 und DATEV-Export in einer Software gebündelt."
      },
      {
        "q": "Ist das Buchhaltungsmodul GoBD-konform?",
        "a": "Das Buchhaltungsmodul ist GoBD-konform ausgelegt: Belege werden unveränderbar gespeichert, und jede Änderung wird in einem Audit-Trail protokolliert. Ergänzt wird dies durch eine durchgehende Beleg-Nummerierung sowie den DATEV-Export. Die vollständige GoBD-Konformität hängt zusätzlich von den betrieblichen Prozessen ab und ersetzt keine steuerliche Beratung."
      },
      {
        "q": "Unterstützt VertooERP DATEV und die Umsatzsteuer-Voranmeldung?",
        "a": "Ja. Buchungsdaten lassen sich nach DATEV exportieren und an den Steuerberater übergeben. Die Umsatzsteuer-Voranmeldung ist als Funktion verfügbar. Für die Kontierung nutzt das Modul den Kontenrahmen SKR03 mit 47 Konten."
      },
      {
        "q": "Welche Belegarten kann ich erstellen?",
        "a": "Das Modul erstellt Rechnungen, Angebote, Gutschriften und Stornierungen jeweils mit Leistungszeitraum. Die Beleg-Nummer wird dynamisch vergeben, und das Fälligkeitsdatum ergibt sich automatisch aus dem hinterlegten Zahlungsziel des Kunden."
      },
      {
        "q": "Wie behalte ich offene Rechnungen im Blick?",
        "a": "Die OP-Liste zeigt alle offenen Posten mit Altersstruktur (Aging-Buckets), wobei überfällige Beträge farblich hervorgehoben sind. Für fällige Rechnungen versendet das System automatische Zahlungserinnerungen mit einem Cooldown von 7 Tagen; darüber hinaus steht ein dreistufiges Mahnwesen zur Verfügung."
      },
      {
        "q": "Unterstützt das Modul E-Rechnungen wie XRechnung und ZUGFeRD?",
        "a": "Ja. Das Buchhaltungsmodul unterstützt die E-Rechnungsformate XRechnung und ZUGFeRD, die im B2B-Bereich zunehmend verpflichtend sind. Zusätzlich stehen ein Bankabgleich zur Zuordnung von Zahlungen sowie der DATEV-Export bereit."
      }
    ],
    "cta": {
      "headline": "Buchhaltung und ERP in einer Anwendung",
      "text": "Das Buchhaltungsmodul ist Teil von VertooERP und lässt sich einzeln aktivieren. Sehen Sie sich an, wie Belege, offene Posten, Kassenbuch und DATEV-Export in Ihrem Unternehmen zusammenspielen."
    }
  },
  {
    "slug": "lagerverwaltung",
    "name": "Lagerverwaltung",
    "icon": "warehouse",
    "metaTitle": "Lagerverwaltung Software für Ihr ERP – VertooERP",
    "metaDescription": "Lagerverwaltung Software mit Lagerplatz-Struktur, Umlagerungen, Inventur und Bewegungs-Audit-Log. Eigenständiges Modul für Multi-Standort-Betrieb in VertooERP.",
    "hero": {
      "eyebrow": "Modul: Lagerverwaltung",
      "headline": "Lagerverwaltung Software – jeder Artikel auf seinem Platz",
      "subhead": "Bilden Sie Ihre Lagerhäuser bis auf Zone, Gang, Regal und Fach ab, buchen Sie Umlagerungen und gleichen Sie per Inventur Soll und Ist ab. Jede Bewegung wird protokolliert – über beliebig viele Standorte hinweg."
    },
    "intro": "Lagerverwaltung bezeichnet die systematische Erfassung und Steuerung aller Bestände und Warenbewegungen innerhalb eines oder mehrerer Lagerstandorte. Eine Lagerverwaltung Software bildet dazu die physische Struktur des Lagers digital ab, ordnet Produkte konkreten Lagerplätzen zu und protokolliert jede Ein- und Auslagerung nachvollziehbar. Das Lagerverwaltungs-Modul von VertooERP ist ein eigenständiges Modul, das Lagerorte als Baumstruktur von Zone über Gang und Regal bis zum einzelnen Fach verwaltet und den gesamten Bestand über mehrere Standorte hinweg konsistent hält.",
    "painpoints": {
      "intro": "Klingt vertraut?",
      "items": [
        {
          "icon": "package-search",
          "title": "Niemand weiß, wo die Ware liegt",
          "description": "Der Bestand stimmt zwar auf dem Papier, aber im Lager sucht das Team den Artikel gangweise ab. Ohne feste Lagerplätze kostet jede Kommissionierung Zeit."
        },
        {
          "icon": "refresh-cw",
          "title": "Umlagerungen laufen an der Software vorbei",
          "description": "Ware wird zwischen Zonen verschoben, aber im System nicht nachgezogen. Der gebuchte Bestand und der tatsächliche Lagerort driften auseinander."
        },
        {
          "icon": "clipboard-list",
          "title": "Inventur bleibt eine Zettelwirtschaft",
          "description": "Gezählt wird auf Papier, Differenzen werden manuell nachgetragen. Was korrigiert wurde und warum, lässt sich später nicht mehr belegen."
        },
        {
          "icon": "boxes",
          "title": "Kein Überblick über die Auslastung",
          "description": "Ob eine Zone voll ist oder Platz frei bleibt, sieht man erst beim Betreten der Halle – nicht auf einen Blick im System."
        }
      ]
    },
    "features": {
      "intro": "Das Lagerverwaltungs-Modul deckt den gesamten Weg der Ware im Lager ab – von der Struktur über die Buchung bis zur Kontrolle:",
      "items": [
        {
          "icon": "warehouse",
          "name": "Lagerorte als Baumstruktur",
          "description": "Bilden Sie Ihre Lagerhäuser hierarchisch ab: Zone, Gang, Regal und Fach in einer selbstreferenzierenden Struktur. So entspricht jeder Lagerplatz genau seinem physischen Ort."
        },
        {
          "icon": "map-pin",
          "name": "Produkte auf Lagerplätze zuordnen",
          "description": "Weisen Sie jedem Produkt einen oder mehrere Lagerplätze mit Menge zu. Ein Primär-Toggle legt den Hauptlagerplatz fest, an dem der Artikel bevorzugt geführt wird."
        },
        {
          "icon": "route",
          "name": "Umlagerungen mit Statusverlauf",
          "description": "Verschieben Sie Ware zwischen Zonen und begleiten Sie den Vorgang vom Entwurf über die Bestätigung bis zum Abschluss. Nicht benötigte Umlagerungen lassen sich stornieren."
        },
        {
          "icon": "history",
          "name": "Bewegungen als Audit-Log",
          "description": "Jede Einlagerung, Auslagerung, Umlagerung und Inventurbuchung wird lückenlos protokolliert. So bleibt jede Bestandsänderung nachvollziehbar und belegbar."
        },
        {
          "icon": "clipboard-check",
          "name": "Inventur mit Soll-Ist-Vergleich",
          "description": "Zählen Sie standortbasiert und stellen Sie den gezählten Ist-Bestand dem Soll gegenüber. Aus den Differenzen erzeugt das Modul automatisch die passende Korrekturbuchung."
        },
        {
          "icon": "chart-column",
          "name": "Übersicht mit Füllstand-Ampel",
          "description": "KPI-Cards fassen die wichtigsten Kennzahlen zusammen. Ein Ampel-Balken je Zone zeigt den Füllstand auf einen Blick – von reichlich Platz bis nahezu voll."
        },
        {
          "icon": "building-2",
          "name": "Multi-Standort",
          "description": "Verwalten Sie mehrere Lagerstandorte in einem System. Bestände, Bewegungen und Inventuren bleiben je Standort getrennt und zugleich zentral einsehbar."
        }
      ]
    },
    "faq": [
      {
        "q": "Was ist eine Lagerverwaltung Software?",
        "a": "Eine Lagerverwaltung Software erfasst und steuert Bestände und Warenbewegungen innerhalb eines Lagers. Sie bildet die physische Lagerstruktur digital ab, ordnet Produkte konkreten Lagerplätzen zu und protokolliert jede Ein- und Auslagerung. In VertooERP ist die Lagerverwaltung ein eigenständiges Modul mit Lagerplatz-Struktur, Umlagerungen, Inventur und Bewegungs-Audit-Log."
      },
      {
        "q": "Wie detailliert lässt sich das Lager abbilden?",
        "a": "Lagerorte werden als selbstreferenzierende Baumstruktur geführt: Zone, Gang, Regal und Fach. Dadurch entspricht jeder Lagerplatz genau seinem physischen Ort, und Produkte lassen sich exakt auf einzelne Fächer zuordnen."
      },
      {
        "q": "Wie funktioniert eine Umlagerung?",
        "a": "Eine Umlagerung verschiebt Ware zwischen Zonen und durchläuft dabei die Status Entwurf, Bestätigt und Abgeschlossen. Nicht benötigte Umlagerungen können storniert werden. Jeder Schritt wird als Bewegung im Audit-Log festgehalten."
      },
      {
        "q": "Wie läuft die Inventur ab?",
        "a": "Die Inventur erfolgt standortbasiert: Der gezählte Ist-Bestand wird dem Soll-Bestand gegenübergestellt. Aus den festgestellten Differenzen erzeugt das Modul automatisch eine Korrekturbuchung, sodass der Systembestand wieder mit dem tatsächlichen Lagerbestand übereinstimmt."
      },
      {
        "q": "Unterstützt das Modul mehrere Standorte?",
        "a": "Ja. Die Lagerverwaltung ist auf Multi-Standort-Betrieb ausgelegt. Bestände, Bewegungen und Inventuren werden je Standort getrennt geführt und lassen sich zugleich zentral einsehen."
      },
      {
        "q": "Welche Bewegungen werden protokolliert?",
        "a": "Das Bewegungs-Audit-Log erfasst Einlagerungen, Auslagerungen, Umlagerungen und Inventurbuchungen. Jede Bestandsänderung ist damit lückenlos nachvollziehbar und belegbar."
      }
    ],
    "cta": {
      "headline": "Bringen Sie Struktur in Ihr Lager",
      "text": "Sehen Sie sich in einer Demo an, wie Sie mit der Lagerverwaltung Software von VertooERP Lagerplätze abbilden, Umlagerungen buchen und Inventuren mit automatischer Korrekturbuchung durchführen – über alle Standorte hinweg."
    }
  },
  {
    "slug": "dropshipping",
    "name": "Dropshipping",
    "icon": "truck",
    "metaTitle": "Dropshipping Software für Händler – VertooERP",
    "metaDescription": "Dropshipping Software von VertooERP: Lieferanten per FTP/CSV oder API anbinden, Bestände alle 15 Minuten synchronisieren und Bestellungen automatisch weiterleiten.",
    "hero": {
      "eyebrow": "Modul: Dropshipping",
      "headline": "Dropshipping Software: Lieferanten, Bestände und Bestellungen in einem System",
      "subhead": "Binden Sie Dropshipping-Lieferanten per FTP/CSV oder REST-API an, halten Sie Bestände automatisch aktuell und leiten Sie Bestellungen direkt weiter – ohne manuelle Pflege zwischen Shop und Lieferant."
    },
    "intro": "Dropshipping ist ein Handelsmodell, bei dem der Händler die Ware nicht selbst lagert, sondern Bestellungen an einen Lieferanten weiterleitet, der direkt an den Endkunden versendet. Das erfordert eine enge Synchronisation von Beständen und Bestellungen zwischen Händler- und Lieferantensystem. Das Dropshipping-Modul von VertooERP ist eine Middleware, die genau diese Synchronisation übernimmt: Es importiert Produkte und Bestände von angebundenen Lieferanten, hält sie über einen Scheduler aktuell und leitet eingehende Bestellungen automatisiert an den passenden Lieferanten weiter. Als Dropshipping Software verbindet es Lieferanten-Feeds, Lieferanten-APIs und Ihren Shop in einem durchgängigen Ablauf.",
    "painpoints": {
      "intro": "Klingt vertraut?",
      "items": [
        {
          "icon": "refresh-cw",
          "title": "Bestände laufen auseinander",
          "description": "Ohne automatische Synchronisation verkaufen Sie Artikel, die der Lieferant längst nicht mehr vorrätig hat – und pflegen Bestände manuell aus verschiedenen Quellen nach."
        },
        {
          "icon": "webhook",
          "title": "Jeder Lieferant spricht anders",
          "description": "Der eine liefert einen CSV-Feed per FTP, der nächste bietet eine REST-API. Ohne einheitliche Anbindung wird jede neue Lieferantenquelle zum Sonderprojekt."
        },
        {
          "icon": "send",
          "title": "Bestellungen von Hand weiterleiten",
          "description": "Eingehende Bestellungen müssen manuell an den richtigen Lieferanten übertragen werden – fehleranfällig, zeitraubend und schlecht nachvollziehbar."
        },
        {
          "icon": "search-check",
          "title": "Keine Nachvollziehbarkeit beim Import",
          "description": "Wenn Preise oder Bestände plötzlich falsch sind, fehlt der Nachweis, welcher Import wann welche Daten geliefert hat."
        }
      ]
    },
    "features": {
      "intro": "Das Dropshipping-Modul bündelt Lieferantenanbindung, Produktimport, Bestandssync und Bestellabwicklung in einer Middleware. Alle Funktionen basieren auf konfigurierbaren Lieferanten – von der Datenquelle bis zur Preisberechnung.",
      "items": [
        {
          "icon": "users",
          "name": "Lieferanten zentral verwalten",
          "description": "Legen Sie Lieferanten mit FTP- oder API-Konfiguration, CSV-Format, Feld-Mapping und Preisberechnung an. Passwörter und API-Keys werden verschlüsselt gespeichert."
        },
        {
          "icon": "webhook",
          "name": "Drei API-Typen out of the box",
          "description": "Angebunden werden BigBuy (Bearer Token, Taxonomien, Varianten, CDN-Bilder), DropXL (Basic Auth, paginierte Products, Order-API) und JTL-Wawi (Bearer Token, Items, SalesOrders)."
        },
        {
          "icon": "download",
          "name": "Automatisierter Produktimport",
          "description": "Produkte werden per FTP/CSV oder REST-API importiert. Das Feld-Mapping überführt die Lieferantendaten in Ihre Struktur, die Preisberechnung setzt Ihre Aufschläge automatisch um."
        },
        {
          "icon": "refresh-cw",
          "name": "Bestandssync alle 15 Minuten",
          "description": "Ein Scheduler gleicht die Bestände aller angebundenen API-Typen alle 15 Minuten ab, sodass Verfügbarkeiten in Shop und ERP aktuell bleiben."
        },
        {
          "icon": "clipboard-list",
          "name": "Bestellungen mit Status-Workflow",
          "description": "Bestellungen durchlaufen einen definierten Status-Workflow, werden auf den passenden Lieferanten optimiert und über dessen Order-API übermittelt."
        },
        {
          "icon": "truck",
          "name": "Endkunden-Versand über JTL-Wawi",
          "description": "Für JTL-Wawi werden SalesOrders mit konfigurierbarer Kundennummer und Endkunden-Versandadresse erzeugt, sodass der Lieferant direkt an Ihren Kunden versendet."
        },
        {
          "icon": "store",
          "name": "Shopware-6-Integration",
          "description": "Über OAuth2 werden Produkte und Bestände mit Shopware 6 synchronisiert – auch als Batch-Sync für größere Sortimente."
        },
        {
          "icon": "history",
          "name": "Import-Logs als Audit-Trail",
          "description": "Jeder Import wird protokolliert. Die Import-Logs bilden einen Audit-Trail, mit dem sich nachvollziehen lässt, welche Daten wann übernommen wurden."
        }
      ]
    },
    "faq": [
      {
        "q": "Was ist eine Dropshipping-Middleware?",
        "a": "Eine Dropshipping-Middleware ist eine Softwareschicht zwischen Ihrem Shop bzw. ERP und den Lieferantensystemen. Sie importiert Produkte und Bestände von den Lieferanten, hält sie synchron und leitet eingehende Bestellungen an den jeweiligen Lieferanten weiter. Das Dropshipping-Modul von VertooERP übernimmt genau diese Vermittlungsrolle."
      },
      {
        "q": "Welche Lieferanten-APIs unterstützt VertooERP im Dropshipping?",
        "a": "Das Modul unterstützt drei API-Typen: BigBuy (Authentifizierung per Bearer Token, mit Taxonomien, Varianten und CDN-Bildern), DropXL (Basic Auth, paginierte Produktabfrage und Order-API) sowie JTL-Wawi (Bearer Token, Items und SalesOrders). Ergänzend lassen sich Lieferanten per FTP/CSV-Feed anbinden."
      },
      {
        "q": "Wie oft werden die Bestände synchronisiert?",
        "a": "Ein Scheduler führt die Bestandssynchronisation alle 15 Minuten für alle angebundenen API-Typen aus. Dadurch spiegeln die Verfügbarkeiten in Ihrem System den aktuellen Lagerbestand der Lieferanten wider, ohne dass Sie manuell nachpflegen müssen."
      },
      {
        "q": "Wie werden Lieferanten mit CSV-Feed statt API angebunden?",
        "a": "Für Lieferanten ohne API konfigurieren Sie eine FTP-Verbindung samt CSV-Format und Feld-Mapping. Der automatisierte Import überführt die Feed-Daten in Ihre Produktstruktur; über die Preisberechnung werden Ihre Aufschläge angewendet. Zugangsdaten werden verschlüsselt gespeichert."
      },
      {
        "q": "Kann VertooERP JTL-Wawi als Dropshipping-Quelle nutzen?",
        "a": "Ja. VertooERP bindet JTL-Wawi über Bearer Token an, liest Items und legt SalesOrders mit konfigurierbarer Kundennummer und Endkunden-Versandadresse an. So kann JTL-Wawi als Dropshipping-Quelle dienen und ergänzend zu einem bestehenden System laufen."
      },
      {
        "q": "Lässt sich das Dropshipping-Modul mit Shopware verbinden?",
        "a": "Ja. Das Modul integriert Shopware 6 über OAuth2 und synchronisiert Produkte und Bestände, auch als Batch-Sync für umfangreiche Sortimente. So werden importierte Dropshipping-Artikel und ihre Verfügbarkeiten in Ihren Shopware-Shop übertragen."
      }
    ],
    "cta": {
      "headline": "Dropshipping-Prozesse automatisieren",
      "text": "Sehen Sie im Gespräch, wie das Dropshipping-Modul Ihre Lieferanten anbindet, Bestände alle 15 Minuten synchron hält und Bestellungen automatisch weiterleitet. Wir zeigen Ihnen die Anbindung an BigBuy, DropXL, JTL-Wawi und Shopware 6 an Ihrem Anwendungsfall."
    }
  },
  {
    "slug": "zeiterfassung",
    "name": "Zeiterfassung & Urlaub",
    "icon": "clock",
    "metaTitle": "Zeiterfassung Software für Teams – VertooERP",
    "metaDescription": "Zeiterfassung Software mit Stempeluhr, Urlaubsverwaltung, Krankmeldungen und Team-Genehmigung. Mobil nutzbar als PWA – Teil von VertooERP.",
    "hero": {
      "eyebrow": "Modul: Zeiterfassung & Urlaub",
      "headline": "Zeiterfassung Software mit Urlaubsverwaltung für Ihr Team",
      "subhead": "Arbeitszeiten per Stempeluhr erfassen, Urlaub und Abwesenheiten verwalten, Anträge im Team genehmigen – in einer Anwendung, auch mobil."
    },
    "intro": "Zeiterfassung & Urlaub ist das HR-Modul von VertooERP zur Erfassung von Arbeitszeiten und zur Verwaltung von Abwesenheiten. Als Zeiterfassung Software bündelt es eine digitale Stempeluhr, die Urlaubsverwaltung, Krankmeldungen und weitere Abwesenheitsarten in einem gemeinsamen Team-Kontext. Teamleiter genehmigen Anträge, Mitarbeitende sehen ihre Zeiten und Ansprüche. Das Modul ist als installierbare PWA auch mobil nutzbar.",
    "painpoints": {
      "intro": "Klingt vertraut?",
      "items": [
        {
          "icon": "clock",
          "title": "Arbeitszeiten in Zetteln und Tabellen",
          "description": "Kommt- und Geht-Zeiten werden auf Papier oder in verstreuten Excel-Dateien festgehalten und lassen sich nur mit Aufwand nachvollziehen."
        },
        {
          "icon": "calendar",
          "title": "Urlaub per E-Mail beantragt",
          "description": "Urlaubsanträge laufen über Mail und Zuruf. Wer wann frei hat und wie viele Tage noch offen sind, muss jedes Mal einzeln nachgerechnet werden."
        },
        {
          "icon": "file-text",
          "title": "Krankmeldungen und AU im Nachgang",
          "description": "Eine Krankmeldung kommt kurzfristig, die AU-Bescheinigung folgt später. Ohne festen Prozess geht die Nachreichung leicht unter."
        },
        {
          "icon": "users",
          "title": "Kein Überblick über das Team",
          "description": "Teamleiter haben keine gemeinsame Sicht auf Anwesenheit und offene Anträge und müssen für jede Freigabe erst Informationen zusammensuchen."
        }
      ]
    },
    "features": {
      "intro": "Diese Funktionen bietet das Modul Zeiterfassung & Urlaub:",
      "items": [
        {
          "icon": "alarm-clock",
          "name": "Stempeluhr",
          "description": "Mitarbeitende erfassen ihre Arbeitszeiten digital per Stempeluhr – Kommen und Gehen werden direkt im System festgehalten."
        },
        {
          "icon": "calendar",
          "name": "Urlaubsverwaltung",
          "description": "Urlaubsanträge werden im System gestellt und verwaltet. Ansprüche und genehmigte Tage sind zentral hinterlegt."
        },
        {
          "icon": "clipboard-list",
          "name": "Abwesenheiten",
          "description": "Neben Urlaub lassen sich weitere Abwesenheitsarten abbilden, sodass alle Fehlzeiten an einem Ort erfasst werden."
        },
        {
          "icon": "file-text",
          "name": "Krankmeldung mit AU-Nachreichung",
          "description": "Eine Krankmeldung kann vorläufig erfasst und die AU-Bescheinigung anschließend nachgereicht werden."
        },
        {
          "icon": "refresh-cw",
          "name": "Urlaubsübertrag mit Verfall-Stichtag",
          "description": "Nicht genommener Urlaub wird ins Folgejahr übertragen. Der Verfall-Stichtag ist konfigurierbar."
        },
        {
          "icon": "history",
          "name": "Überstundenabbau",
          "description": "Überstundenabbau ist als eigene Abwesenheitsart abgebildet und wird wie andere Abwesenheiten beantragt und dokumentiert."
        },
        {
          "icon": "check-check",
          "name": "Team-Genehmigung",
          "description": "Teamleiter erhalten eine Team-Übersicht und genehmigen Abwesenheitsanträge ihrer Mitarbeitenden."
        },
        {
          "icon": "smartphone",
          "name": "Mobil als PWA",
          "description": "Das Modul ist als installierbare PWA mobil nutzbar. Web-Push-Benachrichtigungen sind möglich."
        }
      ]
    },
    "faq": [
      {
        "q": "Was ist die Zeiterfassung Software von VertooERP?",
        "a": "Die Zeiterfassung Software von VertooERP ist das HR-Modul \"Zeiterfassung & Urlaub\". Sie umfasst eine digitale Stempeluhr zur Erfassung der Arbeitszeiten sowie die Verwaltung von Urlaub, Abwesenheiten und Krankmeldungen. Anträge werden im Team gestellt und von Teamleitern genehmigt."
      },
      {
        "q": "Wie funktioniert die Stempeluhr?",
        "a": "Mitarbeitende erfassen ihre Arbeitszeiten digital per Stempeluhr, indem sie Kommen und Gehen im System festhalten. Da das Modul auch als mobile PWA nutzbar ist, kann die Zeiterfassung ebenfalls mobil erfolgen."
      },
      {
        "q": "Wie werden Urlaub und Abwesenheiten verwaltet?",
        "a": "Urlaub und weitere Abwesenheiten werden zentral im Modul beantragt und verwaltet. Teamleiter sehen die Anträge in einer Team-Übersicht und genehmigen sie. Nicht genommener Urlaub kann mit einem konfigurierbaren Verfall-Stichtag ins Folgejahr übertragen werden."
      },
      {
        "q": "Wie funktioniert die Krankmeldung mit AU-Nachreichung?",
        "a": "Eine Krankmeldung kann zunächst vorläufig erfasst werden. Die Arbeitsunfähigkeitsbescheinigung (AU) wird anschließend nachgereicht und der Krankmeldung zugeordnet, sodass der Nachweis dokumentiert bleibt."
      },
      {
        "q": "Lässt sich Überstundenabbau abbilden?",
        "a": "Ja. Überstundenabbau ist als eigene Abwesenheitsart hinterlegt. Er wird wie andere Abwesenheiten beantragt, genehmigt und dokumentiert."
      },
      {
        "q": "Ist die Zeiterfassung mobil nutzbar?",
        "a": "Ja. Das Modul ist als installierbare PWA (Progressive Web App) auch auf mobilen Geräten nutzbar. Zusätzlich sind Web-Push-Benachrichtigungen möglich, etwa zu Anträgen und Genehmigungen."
      }
    ],
    "cta": {
      "headline": "Zeiterfassung und Urlaub zentral verwalten",
      "text": "Erfassen Sie Arbeitszeiten, Urlaub und Abwesenheiten im Team – als Modul von VertooERP, auch mobil als PWA."
    }
  },
  {
    "slug": "crm",
    "name": "CRM",
    "icon": "users",
    "metaTitle": "CRM Software Mittelstand: Modul im ERP – VertooERP",
    "metaDescription": "Integriertes CRM im ERP: Kunden- und Kontaktverwaltung mit Historie über Buchhaltung, Warenwirtschaft, Aufträge und Nachrichten. CRM Software für den Mittelstand.",
    "hero": {
      "eyebrow": "Modul: CRM",
      "headline": "CRM Software für den Mittelstand — Kundendaten und Historie an einem Ort",
      "subhead": "Kunden- und Kontaktverwaltung, die direkt mit Buchhaltung, Warenwirtschaft, Aufträgen und Nachrichten verbunden ist. Ein Kundenblatt statt fünf getrennter Listen."
    },
    "intro": "CRM (Customer Relationship Management) bezeichnet die zentrale Verwaltung von Kunden- und Kontaktdaten samt der zugehörigen Vorgänge. Das CRM-Modul von VertooERP ist ein integriertes CRM innerhalb des ERP: Kunden, Kontakte und ihre Historie liegen an einer Stelle und sind modulübergreifend mit Buchhaltung, Warenwirtschaft, Aufträgen und Kommunikation verbunden. Als CRM Software für den Mittelstand ersetzt es keine spezialisierte Vertriebs-Pipeline, sondern gibt Ihnen zu jedem Kunden den vollständigen betrieblichen Verlauf auf einen Blick.",
    "painpoints": {
      "intro": "Klingt vertraut?",
      "items": [
        {
          "icon": "search-check",
          "title": "Kundendaten in mehreren Systemen",
          "description": "Adresse in der Buchhaltung, Aufträge in der Warenwirtschaft, der letzte Mailverlauf im Postfach. Für ein vollständiges Bild klicken sich Mitarbeitende durch drei Tools."
        },
        {
          "icon": "history",
          "title": "Keine durchgängige Historie",
          "description": "Wer hat wann was bestellt, welche Rechnung ist offen, worüber wurde zuletzt gesprochen? Ohne gemeinsame Historie beginnt jede Rückfrage mit einer Suche."
        },
        {
          "icon": "wallet",
          "title": "Zahlungsziele nicht griffbereit",
          "description": "Das vereinbarte Zahlungsziel steht auf einem alten Angebot oder im Kopf einer Person. Bei der Rechnungsstellung wird es geraten oder neu nachgefragt."
        }
      ]
    },
    "features": {
      "intro": "Das CRM-Modul bündelt die Stammdaten und macht sie über alle Module hinweg nutzbar. Diese Funktionen sind enthalten:",
      "items": [
        {
          "icon": "users",
          "name": "Kunden- und Kontaktverwaltung",
          "description": "Zentrale Verwaltung von Kunden und ihren Ansprechpartnern. Alle Stammdaten liegen an einer Stelle und stehen jedem Modul zur Verfügung."
        },
        {
          "icon": "history",
          "name": "Modulübergreifende Kundenhistorie",
          "description": "Die Historie eines Kunden zieht sich über alle Module: Buchhaltung, Warenwirtschaft, Aufträge und Kommunikation sind zu jedem Kunden auf einen Blick sichtbar."
        },
        {
          "icon": "receipt-text",
          "name": "Verbunden mit der Buchhaltung",
          "description": "Rechnungen und offene Posten des Kunden sind direkt am Kundenblatt sichtbar. Sie sehen den Zahlungsstatus, ohne in ein separates System zu wechseln."
        },
        {
          "icon": "package",
          "name": "Verbunden mit Warenwirtschaft und Aufträgen",
          "description": "Aufträge aus der Warenwirtschaft sind dem Kunden zugeordnet. Was bestellt, was geliefert wurde, steht im selben Kontext wie die Kontaktdaten."
        },
        {
          "icon": "message-square",
          "name": "Verbunden mit Nachrichten",
          "description": "Die Kommunikation mit dem Kunden ist an den Datensatz angebunden. Der Nachrichtenverlauf ergänzt die Historie und muss nicht separat gesucht werden."
        },
        {
          "icon": "clock",
          "name": "Kunden mit Zahlungsziel",
          "description": "Hinterlegen Sie je Kunde das vereinbarte Zahlungsziel. Es steht bei der weiteren Verarbeitung bereit, statt bei jeder Rechnung neu nachgeschlagen zu werden."
        }
      ]
    },
    "faq": [
      {
        "q": "Ist das ein vollwertiges Vertriebs-CRM mit Pipeline und Forecast?",
        "a": "Nein. Das CRM-Modul ist ein integriertes CRM innerhalb des ERP und konzentriert sich auf Kunden- und Kontaktverwaltung mit modulübergreifender Historie. Eine spezialisierte Vertriebs-Pipeline mit Opportunity-Stufen oder Umsatz-Forecast gehört bewusst nicht zum Funktionsumfang."
      },
      {
        "q": "Was bedeutet modulübergreifende Kundenhistorie konkret?",
        "a": "Zu jedem Kunden sehen Sie an einer Stelle die Vorgänge aus mehreren Modulen: Rechnungen und offene Posten aus der Buchhaltung, Aufträge aus der Warenwirtschaft sowie die Kommunikation aus den Nachrichten. Sie müssen die Informationen nicht aus getrennten Systemen zusammentragen."
      },
      {
        "q": "Kann ich pro Kunde ein Zahlungsziel hinterlegen?",
        "a": "Ja. Kunden lassen sich mit einem individuellen Zahlungsziel anlegen. Dieses steht in den angebundenen Modulen bereit, sodass es bei der weiteren Verarbeitung nicht jedes Mal neu bestimmt werden muss."
      },
      {
        "q": "Mit welchen Modulen ist das CRM verbunden?",
        "a": "Das CRM ist mit der Buchhaltung (Rechnungen und offene Posten), der Warenwirtschaft (Aufträge) und den Nachrichten integriert. Kunden- und Kontaktdaten sind dadurch nicht in ein einzelnes Modul eingesperrt, sondern durchgängig nutzbar."
      },
      {
        "q": "Für wen eignet sich das CRM-Modul?",
        "a": "Es richtet sich an mittelständische Betriebe, die ihre Kunden- und Kontaktdaten zentral führen und die betriebliche Historie an einem Ort haben wollen. Wer stattdessen einen dedizierten Vertriebsprozess mit Pipeline-Management sucht, sollte prüfen, ob ein spezialisiertes Vertriebs-CRM besser passt."
      }
    ],
    "cta": {
      "headline": "Sehen Sie Ihre Kunden im Zusammenhang.",
      "text": "In 30 Minuten zeigen wir am Kundenblatt, wie Buchhaltung, Aufträge und Kommunikation zu einem Kunden zusammenlaufen — an einem Beispiel aus Ihrem Betrieb."
    }
  },
  {
    "slug": "aufgaben-projekte",
    "name": "Aufgaben & Projekte",
    "icon": "list-checks",
    "metaTitle": "Projektmanagement Software KMU – VertooERP",
    "metaDescription": "Projektmanagement Software für KMU: Aufgaben mit Kanban, Liste und Kalender, Prioritäten, Subtasks, Checklisten, Kommentare und Projekte – integriert in VertooERP.",
    "hero": {
      "eyebrow": "Modul: Aufgaben & Projekte",
      "headline": "Projektmanagement Software für KMU – Aufgaben und Projekte in einem System",
      "subhead": "Aufgaben als Kanban-Board, Liste oder Kalender verwalten, Projekte eigenständig führen und Notizen teilen. Ohne separates Tool, direkt in VertooERP."
    },
    "intro": "Aufgaben & Projekte ist das Modul in VertooERP zur Organisation von Aufgaben, Projekten und Notizen. Als Projektmanagement Software für KMU bündelt es die Aufgabenverwaltung mit Kanban-Board, Listen- und Kalender-Ansicht, eigenständige Projekte mit optionaler Aufgaben-Zuordnung sowie persönliche und geteilte Notizen. Aufgaben lassen sich mit Prioritäten, Fälligkeitsdaten, Checklisten, Subtasks und Dateianhängen versehen und im Team über Kommentare und @Mentions abstimmen.",
    "painpoints": {
      "intro": "Klingt vertraut?",
      "items": [
        {
          "icon": "layers",
          "title": "Aufgaben in vielen Tools verstreut",
          "description": "To-dos liegen in E-Mails, Chat-Nachrichten und einem separaten Task-Tool. Niemand hat den vollständigen Überblick, was offen ist und bei wem es liegt."
        },
        {
          "icon": "history",
          "title": "Unklar, wer was geändert hat",
          "description": "Fälligkeit verschoben, Zuständigkeit gewechselt, Kommentar bearbeitet – ohne nachvollziehbare Historie bleibt offen, wann und durch wen etwas passiert ist."
        },
        {
          "icon": "bell",
          "title": "Wichtige Aufgaben gehen unter",
          "description": "Ohne gezielte Benachrichtigung erfährt niemand, wenn er einer Aufgabe zugewiesen oder in einem Kommentar erwähnt wird. Rückfragen bleiben liegen."
        },
        {
          "icon": "folder-kanban",
          "title": "Projekte ohne festen Rahmen",
          "description": "Zusammengehörige Aufgaben lassen sich nicht bündeln. Ein Projekt existiert nur als lose Sammlung von Einträgen in verschiedenen Listen."
        }
      ]
    },
    "features": {
      "intro": "Aufgabenverwaltung, Projekte und Notizen mit den Funktionen, die im Team-Alltag zählen.",
      "items": [
        {
          "icon": "folder-kanban",
          "name": "Kanban, Liste und Kalender",
          "description": "Aufgaben in drei Ansichten arbeiten: Kanban-Board für den Status, Listenansicht für den Überblick und Kalender-Ansicht entlang der Fälligkeitsdaten."
        },
        {
          "icon": "list-checks",
          "name": "Prioritäten, Checklisten und Subtasks",
          "description": "Aufgaben mit Priorität und Fälligkeitsdatum versehen, in Subtasks unterteilen und mit Checklisten in einzelne Schritte gliedern."
        },
        {
          "icon": "message-square",
          "name": "Kommentare mit Historie",
          "description": "Kommentare lassen sich bearbeiten und löschen; jede Änderung wird in einer Änderungshistorie festgehalten. Über @Mention-Benachrichtigungen werden Beteiligte gezielt einbezogen."
        },
        {
          "icon": "history",
          "name": "Aktivitäts-Feed und Zuordnungs-Historie",
          "description": "Ein Aktivitäts-Feed dokumentiert jede Änderung an einer Aufgabe. Die Zuordnungs-Historie zeigt nachvollziehbar, wem die Aufgabe wann zugewiesen war."
        },
        {
          "icon": "users",
          "name": "Beobachten und Zuweisen",
          "description": "Als Watcher Aufgaben beobachten, ohne verantwortlich zu sein. Tabs Meine, Erstellt, Unzugewiesen und Alle filtern die Aufgaben nach Beteiligung."
        },
        {
          "icon": "file-text",
          "name": "Detail-Ansicht und Dateianhänge",
          "description": "Die Detail-Ansicht öffnet read-only und wechselt bei Bedarf in den Edit-Modus. Dateien lassen sich direkt an der Aufgabe anhängen."
        },
        {
          "icon": "folder-kanban",
          "name": "Eigenständige Projekte",
          "description": "Projekte bestehen unabhängig und können Aufgaben optional zugeordnet bekommen. So bündeln sie zusammengehörige Arbeit in einem festen Rahmen."
        },
        {
          "icon": "book-open",
          "name": "Persönliche und geteilte Notizen",
          "description": "Notizen als persönlichen Merkzettel führen oder im Team teilen – für Informationen, die zu keiner einzelnen Aufgabe gehören."
        }
      ]
    },
    "faq": [
      {
        "q": "Welche Ansichten gibt es für Aufgaben?",
        "a": "Aufgaben lassen sich in drei Ansichten bearbeiten: als Kanban-Board, als Listenansicht und als Kalender-Ansicht. Die Kalender-Ansicht ordnet Aufgaben entlang ihrer Fälligkeitsdaten an. Zusätzlich filtern die Tabs Meine, Erstellt, Unzugewiesen und Alle nach Beteiligung."
      },
      {
        "q": "Wie behalte ich Änderungen an einer Aufgabe im Blick?",
        "a": "Jede Aufgabe hat einen Aktivitäts-Feed, der Änderungen dokumentiert. Kommentare lassen sich bearbeiten und löschen, wobei jede Änderung in einer Änderungshistorie festgehalten wird. Die Zuordnungs-Historie zeigt außerdem, wem die Aufgabe wann zugewiesen war."
      },
      {
        "q": "Wie werden Beteiligte benachrichtigt?",
        "a": "Über @Mention-Benachrichtigungen lassen sich Kolleginnen und Kollegen in Kommentaren gezielt einbeziehen. Zusätzlich kann man Aufgaben als Watcher beobachten, um über Änderungen informiert zu bleiben, ohne selbst zuständig zu sein."
      },
      {
        "q": "Wie hängen Aufgaben und Projekte zusammen?",
        "a": "Projekte sind in VertooERP eigenständig und existieren unabhängig von einzelnen Aufgaben. Aufgaben können einem Projekt optional zugeordnet werden. So lassen sich zusammengehörige Aufgaben in einem Projekt bündeln, ohne dass eine Zuordnung zwingend ist."
      },
      {
        "q": "Kann ich Aufgaben strukturieren und gliedern?",
        "a": "Ja. Aufgaben lassen sich mit Prioritäten und Fälligkeitsdaten versehen, in Subtasks unterteilen und über Checklisten in einzelne Schritte gliedern. Dateien können direkt an eine Aufgabe angehängt werden."
      },
      {
        "q": "Gibt es Tastenkürzel für die Aufgabenverwaltung?",
        "a": "Ja. Mit dem Tastenkürzel N lässt sich eine neue Aufgabe anlegen. Die Detail-Ansicht öffnet zunächst read-only und wechselt bei Bedarf in den Edit-Modus, um versehentliche Änderungen zu vermeiden."
      }
    ],
    "cta": {
      "headline": "Aufgaben & Projekte in VertooERP kennenlernen",
      "text": "Sehen Sie in einer Demo, wie Ihr Team Aufgaben mit Kanban, Liste und Kalender organisiert und Projekte im ERP führt."
    }
  },
  {
    "slug": "kostenmanagement",
    "name": "Kostenmanagement",
    "icon": "wallet",
    "metaTitle": "Kostenmanagement Software für KMU – VertooERP",
    "metaDescription": "Kostenmanagement Software für KMU: Fixkosten, Gehälter, Fuhrpark und SaaS-Abos zentral erfassen – mit Monats- und Jahresübersicht im Kostenmodul von VertooERP.",
    "hero": {
      "eyebrow": "Modul: Kostenmanagement",
      "headline": "Kostenmanagement Software – alle Fixkosten in einer Übersicht",
      "subhead": "Erfassen Sie Gehälter, Miete, Fuhrpark und SaaS-Abonnements an einem Ort. Monats- und Jahresübersicht statt verstreuter Tabellen und vergessener Verträge."
    },
    "intro": "Kostenmanagement bezeichnet die systematische Erfassung, Übersicht und Kontrolle der laufenden Kosten eines Unternehmens. Eine Kostenmanagement Software bündelt wiederkehrende Fixkosten – etwa Gehälter, Miete und Software-Abonnements – in einer zentralen Ansicht und macht sie als Monats- und Jahressumme sichtbar. Das VertooERP-Modul Kostenmanagement erfasst diese Kostenblöcke strukturiert nach Bereichen wie Personal, Fuhrpark und Software, sodass Sie jederzeit wissen, welche fixen Ausgaben monatlich anfallen. Sensible Bereiche wie die Personalkosten sind dabei ausschließlich für Kosten-Admins zugänglich.",
    "painpoints": {
      "intro": "Klingt vertraut?",
      "items": [
        {
          "icon": "receipt-text",
          "title": "Fixkosten verteilt auf viele Tabellen",
          "description": "Gehälter in der einen Datei, Miete in der nächsten, SaaS-Abos irgendwo im Postfach. Eine verlässliche Gesamtsumme pro Monat gibt es nicht."
        },
        {
          "icon": "alarm-clock",
          "title": "Kündigungsfristen verpasst",
          "description": "Ein SaaS-Vertrag verlängert sich automatisch, weil die Frist niemand im Blick hatte. Kosten laufen weiter, obwohl das Tool längst ungenutzt ist."
        },
        {
          "icon": "lock",
          "title": "Gehaltsdaten ohne klare Zugriffsregeln",
          "description": "Personalkosten liegen in offenen Dateien. Wer Zugriff hat und wer nicht, ist nicht sauber geregelt – ein Problem bei sensiblen Daten."
        },
        {
          "icon": "search-check",
          "title": "Keine Jahressicht auf die Fixkosten",
          "description": "Monatlich fällt es kaum auf, aufs Jahr gerechnet summiert es sich. Ohne Jahresübersicht fehlt die Grundlage für Budget und Planung."
        }
      ]
    },
    "features": {
      "intro": "Das Modul gliedert die laufenden Kosten in klar getrennte Bereiche – von der allgemeinen Fixkostenübersicht bis zur detaillierten Verwaltung von Personal, Fuhrpark und Software.",
      "items": [
        {
          "icon": "chart-column",
          "name": "Fixkosten-Übersicht",
          "description": "Erfassen Sie monatliche Fixkosten wie Gehälter, SaaS und Miete zentral. Alle Positionen fließen in eine Monats- und Jahresübersicht zusammen."
        },
        {
          "icon": "calendar",
          "name": "Monats- und Jahressicht",
          "description": "Sehen Sie die Summe Ihrer Fixkosten pro Monat und aufs Jahr hochgerechnet. So wird sichtbar, was langfristig tatsächlich anfällt."
        },
        {
          "icon": "users",
          "name": "Personalverwaltung",
          "description": "Verwalten Sie Gehälter, Arbeitsverträge, Gehaltsänderungen und Kündigungen. Der Bereich ist ausschließlich für Kosten-Admins zugänglich."
        },
        {
          "icon": "lock",
          "name": "Zugriff nur für Kosten-Admins",
          "description": "Sensible Personalkosten sind auf Kosten-Admins beschränkt. Gehalts- und Vertragsdaten bleiben so einem definierten Personenkreis vorbehalten."
        },
        {
          "icon": "car",
          "name": "Fuhrpark",
          "description": "Verwalten Sie Ihre Fahrzeuge zentral im Fuhrpark-Bereich und führen Sie den Bestand an Firmenfahrzeugen an einer Stelle zusammen."
        },
        {
          "icon": "credit-card",
          "name": "Software- und SaaS-Abos",
          "description": "Erfassen Sie Abonnements mit Name, Anbieter, URL, Kosten, Abrechnungszyklus, Vertrag, Kündigungsfrist, Seats und Status – der volle Überblick über Ihre SaaS-Ausgaben."
        },
        {
          "icon": "file-text",
          "name": "Verträge und Fristen im Blick",
          "description": "Zu jedem SaaS-Abo hinterlegen Sie Vertrag und Kündigungsfrist. So sind Vertragslaufzeit und Kündigungsfrist je Abo dokumentiert und jederzeit einsehbar."
        },
        {
          "icon": "banknote",
          "name": "Kosten nach Bereichen gegliedert",
          "description": "Personal, Fuhrpark und Software sind sauber getrennte Bereiche. Das macht die Herkunft jeder Kostenposition nachvollziehbar."
        }
      ]
    },
    "faq": [
      {
        "q": "Was ist eine Kostenmanagement Software?",
        "a": "Eine Kostenmanagement Software erfasst die laufenden Kosten eines Unternehmens zentral und stellt sie übersichtlich dar. Im VertooERP-Modul Kostenmanagement werden monatliche Fixkosten wie Gehälter, Miete und SaaS-Abonnements strukturiert erfasst und als Monats- und Jahresübersicht dargestellt."
      },
      {
        "q": "Welche Kostenarten kann ich im Modul erfassen?",
        "a": "Sie erfassen wiederkehrende Fixkosten wie Gehälter, Miete und SaaS-Abonnements in einer Übersicht. Zusätzlich gibt es eigene Bereiche für Personal, Fuhrpark und Software, in denen die jeweiligen Kosten detailliert verwaltet werden."
      },
      {
        "q": "Wer hat Zugriff auf die Personal- und Gehaltsdaten?",
        "a": "Der Personalbereich mit Gehaltsverwaltung, Arbeitsverträgen, Gehaltsänderungen und Kündigungen ist ausschließlich für Kosten-Admins zugänglich. Sensible Personaldaten bleiben so einem definierten Personenkreis vorbehalten."
      },
      {
        "q": "Wie behalte ich Kündigungsfristen bei SaaS-Abos im Blick?",
        "a": "Im Software-Bereich hinterlegen Sie zu jedem SaaS-Abonnement Angaben wie Anbieter, Kosten, Abrechnungszyklus, Vertrag, Kündigungsfrist, Seats und Status. So sind Vertragslaufzeiten und Fristen an einer Stelle dokumentiert."
      },
      {
        "q": "Sehe ich meine Fixkosten pro Monat und pro Jahr?",
        "a": "Ja. Die erfassten Fixkosten fließen in eine Monats- und Jahresübersicht zusammen. So sehen Sie sowohl die monatliche Belastung als auch die auf das Jahr hochgerechnete Summe Ihrer laufenden Kosten."
      },
      {
        "q": "Kann ich auch meinen Fuhrpark im Kostenmanagement verwalten?",
        "a": "Ja. Der Fuhrpark-Bereich dient der zentralen Verwaltung Ihrer Fahrzeuge und führt den Bestand an Firmenfahrzeugen an einer Stelle zusammen."
      }
    ],
    "cta": {
      "headline": "Fixkosten zentral im Blick behalten",
      "text": "Sehen Sie sich das Modul Kostenmanagement in einer Demo an – von der Fixkosten-Übersicht über Personal und Fuhrpark bis zu SaaS-Verträgen und Kündigungsfristen."
    }
  }
];

export function getModulBySlug(slug: string): Modul | undefined {
  return module.find((m) => m.slug === slug);
}
