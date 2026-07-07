---
title: "KI im ERP: Was ein lokaler Assistent wirklich kann"
description: "KI-Funktionen sind in jeder Software-Demo. Aber was bringt ein KI-Assistent im ERP konkret – und warum ist ein lokal betriebenes Modell für datensensible…"
pubDate: 2026-06-18
author: "VertooERP"
tags: ["KI", "Ollama", "ERP", "Datenschutz"]
---

Kaum eine Software kommt heute ohne „KI" aus. Im ERP-Kontext ist die Frage aber konkret: Was bringt ein KI-Assistent im Tagesgeschäft wirklich – und wohin gehen dabei die Daten? Dieser Artikel trennt Nutzen von Marketing.

## Wo KI im ERP konkret hilft

Ein KI-Assistent im ERP ist kein Selbstzweck. Sinnvoll wird er bei konkreten, wiederkehrenden Aufgaben:

- **Datenfragen in natürlicher Sprache:** „Wie viele Artikel der Kategorie X sind unter Mindestbestand?" – statt selbst Filter zu bauen.
- **Produktbeschreibungen erstellen:** SEO-taugliche Texte für viele Artikel auf einmal, statt jeden manuell zu schreiben.
- **Zusammenfassungen:** lange Vorgänge oder Dokumente auf das Wesentliche eindampfen.

Der Mehrwert entsteht dort, wo KI **Routine abnimmt**, nicht dort, wo sie Entscheidungen treffen soll.

## Cloud-KI vs. lokales Modell

Die meisten KI-Funktionen schicken Daten an externe Dienste (OpenAI, Google & Co.). Für ein ERP mit Kunden-, Bestell- und Finanzdaten ist das heikel: Diese Daten verlassen das Haus und landen bei einem Dritten.

Die Alternative ist ein **lokal betriebenes Sprachmodell** – etwa über [Ollama](https://ollama.com), das LLMs auf eigener Hardware ausführt.

| | Cloud-KI | Lokales Modell |
|---|---|---|
| Datenstandort | Externer Anbieter | Eigene Infrastruktur |
| Datenschutz | AVV/Drittland nötig | Daten bleiben im Haus |
| Laufende Kosten | Pro Anfrage/Token | Eigene Hardware |
| Modell-Kontrolle | Anbieterabhängig | Frei wählbar |

Für datensensible Unternehmen ist das lokale Modell oft die sauberere Wahl: Die ERP-Daten, die der Assistent als Kontext nutzt, verlassen die eigene Umgebung nicht.

## Realistische Erwartungen

Ehrlich bleiben lohnt sich: Ein lokales Modell auf normaler Hardware ist nicht so leistungsstark wie die größten Cloud-Modelle. Für die typischen ERP-Aufgaben – strukturierte Datenfragen, Textgenerierung, Zusammenfassungen – reicht es aber gut aus. Wer hochkomplexe Reasoning-Aufgaben erwartet, sollte die Erwartungen kalibrieren.

## Wie VertooERP das umsetzt

Das KI-Modul von [VertooERP](/) nutzt ein **lokales LLM via Ollama**. Der Assistent beantwortet Fragen zu ERP-Daten mit Kontext (Produkte, Bestellungen, Lieferanten) und erstellt SEO-optimierte Produktbeschreibungen – einzeln oder als Bulk. Da das Modell lokal läuft, bleiben die genutzten Daten in Ihrer Infrastruktur. Modell und Endpunkt sind über die App-Einstellungen konfigurierbar.

## Fazit

KI im ERP ist dann wertvoll, wenn sie konkrete Routinearbeit abnimmt – nicht als Buzzword. Für Unternehmen, denen Datenschutz wichtig ist, ist ein lokal betriebenes Modell die konsequente Wahl: Der Nutzen der KI ohne den Preis, sensible Daten aus der Hand zu geben. Wichtig ist, die Leistungsfähigkeit realistisch einzuordnen und KI dort einzusetzen, wo sie Zeit spart.
