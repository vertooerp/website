---
title: "DSGVO-konformes ERP: Worauf KMU bei der Auswahl achten müssen"
description: "Ein ERP verarbeitet Kunden-, Mitarbeiter- und Finanzdaten – also reichlich Personenbezug. Welche Datenschutz-Kriterien bei der Software-Auswahl wirklich…"
pubDate: 2026-06-18
author: "VertooERP"
tags: ["DSGVO", "Datenschutz", "ERP-Auswahl", "Self-Hosting"]
---

Ein ERP ist die Datendrehscheibe eines Unternehmens: Kundenkontakte, Personalakten, Gehälter, Rechnungen. Damit ist es auch eine zentrale Stelle für den Datenschutz. Wer ein System auswählt, sollte die DSGVO-relevanten Kriterien von Anfang an mitdenken – dieser Artikel zeigt welche. Er ersetzt keine Rechtsberatung.

## Warum das ERP datenschutzrechtlich heikel ist

In einem ERP laufen besonders viele **personenbezogene Daten** zusammen – teils auch besonders schützenswerte (z. B. Gesundheitsdaten bei Krankmeldungen). Das macht Sicherheit (Art. 32 DSGVO) und klare Verantwortlichkeiten zur Pflicht, nicht zur Kür.

## Die zentralen Auswahl-Kriterien

### 1. Wo liegen die Daten?

Die wichtigste Frage zuerst. Bei Cloud-ERPs verarbeitet der Anbieter Ihre Daten – Sie brauchen einen **Auftragsverarbeitungsvertrag (AVV)** nach Art. 28 DSGVO, und bei Anbietern mit US-Bezug greifen Themen wie Standardvertragsklauseln und Drittlandübermittlung.

Beim **Self-Hosting** entfällt dieser Komplex weitgehend: Sie betreiben die Software selbst und bleiben alleiniger Verantwortlicher. Die Daten verlassen Ihre Infrastruktur nicht. Mehr dazu in unserem Artikel [Self-Hosting vs. Cloud-ERP](/blog/self-hosting-vs-cloud-erp).

### 2. Rollen- und Rechtekonzept

Nicht jeder darf alles sehen. Achten Sie auf ein granulares Berechtigungssystem, das den Zugriff auf personenbezogene Daten auf das Notwendige beschränkt (Need-to-know-Prinzip). Gehaltsdaten etwa sollten nur einem klar abgegrenzten Kreis zugänglich sein.

### 3. Sichere Authentifizierung

Moderne Systeme setzen auf **session-basierte Authentifizierung mit httpOnly-Cookies** statt Tokens im Browser-Speicher, idealerweise ergänzt um Single Sign-On (SSO). Das reduziert Angriffsflächen.

### 4. Auskunfts- und Löschfähigkeit

Betroffene haben Rechte (Auskunft, Löschung). Ihr ERP sollte personenbezogene Daten exportieren und – wo zulässig – löschen können, ohne dass Sie die Datenbank manuell durchsuchen müssen.

### 5. Nachvollziehbarkeit

Ein Audit-Trail (wer hat wann was geändert) hilft nicht nur bei der GoBD, sondern auch beim Nachweis datenschutzkonformer Verarbeitung.

## Checkliste für die Auswahl

| Kriterium | Frage |
|---|---|
| Datenstandort | Self-Hosting möglich? AVV nötig? |
| Berechtigungen | Granular pro Nutzer/Modul? |
| Authentifizierung | httpOnly-Sessions, SSO? |
| Betroffenenrechte | Datenexport & Löschung eingebaut? |
| Audit-Trail | Änderungen protokolliert? |

## Wie VertooERP das umsetzt

[VertooERP](/) ist auf DSGVO-Konformität ausgelegt: Self-Hosting (volle Datenhoheit), ein vierstufiges Rollensystem mit modulgenauen Rechten, session-basierte Authentifizierung mit optionalem Keycloak-SSO, eine DSGVO-Datenauskunft sowie unveränderbare Audit-Trails. Da Sie selbst hosten, bleiben Sie alleiniger Verantwortlicher.

## Fazit

DSGVO-Konformität beim ERP ist kein einzelnes Feature, sondern ein Zusammenspiel aus Datenstandort, Rechtekonzept, sicherer Authentifizierung und Betroffenenrechten. Self-Hosting vereinfacht die rechtliche Lage erheblich, weil keine Auftragsverarbeitung durch Dritte nötig ist. Prüfen Sie die Kriterien anhand der Checkliste – und ziehen Sie für den konkreten Fall Ihren Datenschutzbeauftragten hinzu.
