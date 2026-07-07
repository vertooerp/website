---
title: "XRechnung & ZUGFeRD: E-Rechnungen richtig erstellen"
description: "Was unterscheidet XRechnung von ZUGFeRD? Wie erstellt man E-Rechnungen korrekt? Der praktische Leitfaden zu Formaten, Daten und ERP-Unterstützung."
pubDate: 2026-07-07
author: "VertooERP"
tags: ["E-Rechnung","XRechnung","ZUGFeRD","Buchhaltung","ERP"]
lang: de
---

Eine E-Rechnung ist keine PDF-Datei, die man ausdrucken und abheften kann – sie ist ein strukturierter Datensatz, den Software direkt weiterverarbeitet. Genau hier stiften die Begriffe XRechnung und ZUGFeRD oft Verwirrung. Dieser Leitfaden erklärt praxisnah, worin sich die beiden Formate unterscheiden, welche Daten strukturiert vorliegen müssen und wie ein ERP-System beim Erstellen, Prüfen und Versenden hilft.

## Was ist eine E-Rechnung überhaupt?

Eine echte E-Rechnung ist eine Rechnung, deren Inhalte in einem strukturierten, maschinenlesbaren Format vorliegen. Das klassische PDF – im Grunde ein digitales Abbild eines Papierdokuments – zählt ausdrücklich **nicht** dazu, auch wenn es per E-Mail verschickt wird. Der Unterschied: Ein Mensch kann ein PDF lesen, eine Maschine muss die Zahlen jedoch mühsam "herauslesen". Bei einer E-Rechnung liegen Rechnungsnummer, Betrag, Steuersätze und Zahlungsdaten dagegen als eindeutig ausgezeichnete Felder vor. Die empfangende Software kann sie ohne manuelle Erfassung direkt verbuchen.

Maßgeblich ist dabei die europäische Norm EN 16931, die ein einheitliches semantisches Datenmodell für elektronische Rechnungen definiert. XRechnung und ZUGFeRD sind zwei in Deutschland verbreitete Ausprägungen dieser Norm.

## XRechnung vs. ZUGFeRD: Wo liegt der Unterschied?

Beide Formate erfüllen die europäische Norm, gehen aber technisch unterschiedliche Wege.

### XRechnung – reines XML

Die XRechnung ist ein rein strukturiertes Format: Die gesamte Rechnung besteht aus einer XML-Datei. Für Menschen ist diese Datei ohne passende Anzeigesoftware kaum lesbar, für Maschinen dafür ideal. XRechnung ist der etablierte Standard im Austausch mit öffentlichen Auftraggebern (B2G, Business-to-Government) – Behörden in Deutschland akzeptieren dieses Format zuverlässig.

### ZUGFeRD – das hybride Format

ZUGFeRD (Zentraler User Guide des Forums elektronische Rechnung Deutschland) ist ein **hybrides** Format. Es kombiniert beide Welten: Sichtbar ist ein ganz normales PDF, in das zusätzlich eine strukturierte XML-Datei eingebettet ist. Menschen sehen und lesen also die gewohnte PDF-Ansicht, während Software gleichzeitig die eingebetteten Daten automatisch auswerten kann.

Deshalb ist ZUGFeRD im **B2B-Bereich** (Business-to-Business) oft praktisch: Der Empfänger kann die Rechnung wie gewohnt am Bildschirm ansehen, unabhängig davon, ob sein System die Daten schon automatisch verarbeitet. So funktioniert der Versand auch dann, wenn nicht jeder Geschäftspartner vollständig automatisiert arbeitet.

## Welche Daten müssen strukturiert vorliegen?

Damit eine E-Rechnung normkonform ist, müssen die zentralen Rechnungsangaben als eindeutige Datenfelder vorhanden sein – nicht nur als Text im Layout. Dazu gehören typischerweise:

- **Rechnungssteller und Rechnungsempfänger** mit Anschrift und Identifikationsdaten
- **Rechnungsnummer und Rechnungsdatum**
- **Leistungspositionen** mit Menge, Einzelpreis und Beschreibung
- **Steuersätze und Steuerbeträge**, aufgeschlüsselt nach Steuersatz
- **Gesamtbeträge** (netto, Steuer, brutto)
- **Zahlungsbedingungen und Bankverbindung**

Bei Rechnungen an öffentliche Auftraggeber wird zusätzlich häufig eine Leitweg-Identifikationsnummer verlangt, über die die Rechnung der richtigen Behördenstelle zugeordnet wird.

## Wie hilft ein ERP-System beim Erstellen?

Die strukturierten Formate von Hand zu erzeugen wäre fehleranfällig und aufwendig. In der Praxis übernimmt das die Software. Ein ERP-System bringt hier drei Vorteile zusammen:

1. **Erstellen:** Die Rechnungsdaten liegen im System ohnehin strukturiert vor. Beim Ausstellen wird daraus automatisch das gewünschte Format – XRechnung oder ZUGFeRD – generiert, ohne dass man XML von Hand schreiben muss.
2. **Prüfen (Validierung):** Vor dem Versand kann geprüft werden, ob alle pflichtigen Felder korrekt gefüllt sind und die Datei der Norm entspricht. Das reduziert Rückläufer, etwa von Behörden.
3. **Versenden und Archivieren:** Die fertige E-Rechnung wird über den passenden Kanal übermittelt und revisionssicher abgelegt.

Modulare ERP-Systeme decken das im Rechnungswesen ab. In VertooERP unterstützt beispielsweise das Buchhaltungsmodul sowohl XRechnung als auch ZUGFeRD, sodass beide Formate aus denselben Rechnungsdaten erzeugt werden können.

## XRechnung oder ZUGFeRD – was sollte man wählen?

Eine pauschale Antwort gibt es nicht, aber eine gute Faustregel:

- **Öffentliche Auftraggeber (B2G):** XRechnung ist hier der sichere Standard.
- **Geschäftskunden (B2B):** ZUGFeRD ist oft komfortabel, weil das eingebettete PDF für Menschen sofort lesbar bleibt.

Entscheidend ist, was der Empfänger verarbeiten kann. Im Zweifel lohnt sich eine kurze Abstimmung mit dem Geschäftspartner – oder ein System, das beide Formate beherrscht und flexibel ausgibt.

## Fazit

Der Kern ist einfach: Eine E-Rechnung ist ein strukturierter Datensatz, kein Bild einer Rechnung. XRechnung liefert reines XML und ist im Behördenverkehr etabliert; ZUGFeRD kombiniert PDF und XML und ist im B2B praktisch. Wer die Rechnungsdaten sauber im System pflegt, kann beide Formate weitgehend automatisch erstellen, validieren und versenden.

---

*Dieser Beitrag bietet allgemeine Informationen und stellt keine Rechts- oder Steuerberatung dar. Für Ihren konkreten Fall wenden Sie sich bitte an Ihren Steuerberater oder eine fachkundige Stelle.*
