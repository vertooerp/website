---
title: "Multichannel-Bestände synchron halten: Shopware, Amazon & eBay"
description: "Überverkäufe und Bestandschaos im Multichannel-Handel vermeiden: Warum eine zentrale Warenwirtschaft der Schlüssel ist und wie automatische…"
pubDate: 2026-06-18
author: "VertooERP"
tags: ["Warenwirtschaft", "Multichannel", "Dropshipping", "E-Commerce"]
---

Wer über mehrere Kanäle verkauft – eigener Shop, Amazon, eBay, vielleicht noch ein Marktplatz mehr – kennt das Problem: Der Bestand stimmt nie überall gleichzeitig. Dieser Artikel erklärt, warum das passiert und wie eine zentrale Warenwirtschaft es löst.

## Warum Bestände auseinanderdriften

Jeder Verkaufskanal führt seinen eigenen Bestandszähler. Verkauft sich ein Artikel auf Amazon, weiß eBay zunächst nichts davon. Ohne Synchronisation entstehen zwei teure Fehler:

- **Überverkäufe:** Ein Artikel wird mehrfach verkauft, obwohl er nur einmal vorrätig ist – mit Stornos, verärgerten Kunden und schlechten Bewertungen als Folge.
- **Künstliche Knappheit:** Aus Vorsicht werden Puffer gepflegt, sodass verkaufbare Ware ungenutzt liegen bleibt.

Manuelles Nachpflegen über mehrere Backends ist fehleranfällig und skaliert nicht.

## Die Lösung: eine zentrale Bestandsquelle

Der Schlüssel ist eine **zentrale Warenwirtschaft** als „Single Source of Truth". Alle Kanäle ziehen ihren Bestand aus demselben System, und jede Bestandsänderung – egal über welchen Kanal – wird zentral gebucht.

Konkret bedeutet das:

1. **Ein Produktkatalog** für alle Kanäle, idealerweise ein Eintrag pro Artikel (z. B. pro EAN), unabhängig davon, über wie viele Lieferanten er bezogen wird.
2. **Automatische Synchronisation** der Bestände in kurzen Intervallen statt manueller Pflege.
3. **Zentrale Auftragsabwicklung**, sodass jeder Verkauf sofort den Gesamtbestand reduziert.

## Dropshipping zusätzlich einbinden

Wird ein Teil des Sortiments per Dropshipping abgewickelt, kommt eine weitere Bestandsquelle hinzu: die Lieferanten. Auch deren Verfügbarkeiten müssen regelmäßig abgeglichen werden, damit kein nicht-lieferbarer Artikel verkauft wird.

[VertooERP](/branchen/handel) bildet beides in einem System ab: Die Warenwirtschaft nutzt einen einheitlichen Produktkatalog (ein Produkt pro EAN, beliebig viele Lieferanten dahinter), und das Dropshipping-Modul synchronisiert Bestände von BigBuy, DropXL und JTL-Wawi alle 15 Minuten. Die Shopware-6-Integration hält den eigenen Shop automatisch auf Stand.

## Worauf Sie achten sollten

- **Sync-Intervall:** Je kürzer, desto geringer das Überverkaufs-Risiko. 15-Minuten-Takt ist ein guter Richtwert.
- **Eindeutige Artikelzuordnung:** Ohne saubere EAN-/SKU-Struktur läuft jede Synchronisation ins Leere.
- **Fehler-Handling:** Was passiert, wenn ein Lieferant nicht antwortet? Ein gutes System fällt auf die nächste Quelle zurück, statt den Artikel falsch als verfügbar zu melden.

## Fazit

Bestandschaos im Multichannel-Handel ist kein Schicksal, sondern eine Folge fehlender Zentralisierung. Eine Warenwirtschaft als zentrale Bestandsquelle mit automatischer Synchronisation über alle Kanäle – inklusive Dropshipping-Lieferanten – beseitigt Überverkäufe und macht Puffer überflüssig. Achten Sie auf kurze Sync-Intervalle, saubere Artikelzuordnung und robustes Fehler-Handling.
