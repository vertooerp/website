/**
 * Vergleichs-/Alternativen-Landingpages (/alternativen/[slug]).
 * "VertooERP als Alternative zu <Wettbewerber>". Faire, sachliche Positionierung
 * (§6 UWG) – Wettbewerber-Aussagen bewusst knapp und neutral gehalten.
 * WICHTIG: Wettbewerber-Fakten vor jeder Änderung gegenprüfen.
 */

export interface AltReason { icon: string; title: string; description: string }
export interface AltDiff { icon: string; name: string; description: string }

export interface Alternative {
  slug: string;
  competitor: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; headline: string; subhead: string };
  intro: string;
  reasons: { intro: string; items: AltReason[] };
  differentiators: { intro: string; items: AltDiff[] };
  fairness: string;
  faq: { q: string; a: string }[];
  cta: { headline: string; text: string };
}

export const alternatives: Alternative[] = [
  {
    "slug": "jtl-wawi",
    "competitor": "JTL-Wawi",
    "metaTitle": "Alternative zu JTL-Wawi – VertooERP",
    "metaDescription": "VertooERP ist die modulare, selbst gehostete ERP-Alternative zu JTL-Wawi: Warenwirtschaft, Buchhaltung und mehr im Browser und mobil. Jetzt vergleichen.",
    "hero": {
      "eyebrow": "Alternative zu JTL-Wawi",
      "headline": "VertooERP – das modulare ERP als Alternative zu JTL-Wawi",
      "subhead": "Warenwirtschaft ist nur der Anfang: VertooERP verbindet Lager, Buchhaltung, CRM und mehr in einem integrierten System – selbst gehostet, im Browser und mobil."
    },
    "intro": "JTL-Wawi ist eine in Deutschland weit verbreitete Warenwirtschaft, die vor allem im Onlinehandel eingesetzt wird. Diese Seite zeigt, wie sich VertooERP als integrierte, modulare Alternative unterscheidet – und für welche Anforderungen welches System besser passt.",
    "reasons": {
      "intro": "Wer über eine ERP-Alternative nachdenkt, tut das meist aus konkreten Gründen. Diese drei tauchen bei wachsenden mittelständischen Unternehmen besonders häufig auf:",
      "items": [
        {
          "icon": "puzzle",
          "title": "Mehr als reine Warenwirtschaft",
          "description": "Sobald Buchhaltung, Lager, Zeiterfassung und CRM zusammenspielen sollen, wächst der Wunsch nach einem integrierten System statt vieler Einzellösungen und Schnittstellen."
        },
        {
          "icon": "server",
          "title": "Datenhoheit und Betriebsmodell",
          "description": "Manche Unternehmen möchten selbst entscheiden, wo ihre Daten liegen, und ihr ERP auf eigener Infrastruktur betreiben – ohne an ein bestimmtes Cloud-Modell gebunden zu sein."
        },
        {
          "icon": "smartphone",
          "title": "Zugriff im Browser und mobil",
          "description": "Teams arbeiten heute standortübergreifend und unterwegs. Der Wunsch nach ortsunabhängigem Zugriff ohne lokale Installation ist ein häufiger Auslöser für den Wechsel."
        }
      ]
    },
    "differentiators": {
      "intro": "Diese Stärken bringt VertooERP als integriertes, modulares All-in-One-ERP mit:",
      "items": [
        {
          "icon": "puzzle",
          "name": "Modularer Aufbau",
          "description": "Über 20 Module – von Warenwirtschaft über Buchhaltung und Lager bis CRM und KI-Assistent – lassen sich frei kombinieren. Sie zahlen nur genutzte Module, ab 350 €/Monat."
        },
        {
          "icon": "server",
          "name": "Self-Hosting mit voller Datenhoheit",
          "description": "VertooERP wird als Lizenz selbst gehostet bzw. on-premises betrieben. Volle Kontrolle über Ihre Daten, kein Cloud-Zwang."
        },
        {
          "icon": "smartphone",
          "name": "Web-App und mobil",
          "description": "VertooERP läuft im Browser und als PWA mobil – ortsunabhängiger Zugriff für Teams an mehreren Standorten, ohne lokale Installation."
        },
        {
          "icon": "shield",
          "name": "DSGVO- und GoBD-konform",
          "description": "Rechtssicher aufgestellt mit DATEV-Export sowie XRechnung und ZUGFeRD für den elektronischen Rechnungsverkehr."
        },
        {
          "icon": "building-2",
          "name": "Multi-Mandant und Multi-Standort",
          "description": "Mehrere Mandanten und Standorte in einem System – in Deutschland entwickelt, mit lokalem KI-Assistenten über Ollama."
        }
      ]
    },
    "fairness": "JTL-Wawi ist etabliert und für den Onlinehandel eine solide, bewährte Wahl. Ob VertooERP die bessere Option ist, hängt davon ab, wie viele Bereiche über die reine Warenwirtschaft hinaus in einem integrierten System zusammenlaufen sollen.",
    "faq": [
      {
        "q": "Ist VertooERP eine echte Alternative zu JTL-Wawi?",
        "a": "VertooERP deckt Warenwirtschaft als eines von über 20 Modulen ab und verbindet sie mit Buchhaltung, Lager, CRM und weiteren Bereichen. Wenn Sie ein integriertes ERP statt einer fokussierten Warenwirtschaft suchen, ist VertooERP eine passende Alternative."
      },
      {
        "q": "Kann ich VertooERP selbst hosten?",
        "a": "Ja. VertooERP wird als Lizenzmodell selbst gehostet bzw. on-premises betrieben. Sie behalten die volle Datenhoheit und sind nicht an ein Cloud-Modell gebunden."
      },
      {
        "q": "Läuft VertooERP im Browser und mobil?",
        "a": "Ja. VertooERP ist als Web-App und als mobile PWA nutzbar, sodass Ihr Team standortübergreifend und unterwegs ohne lokale Installation darauf zugreifen kann."
      }
    ],
    "cta": {
      "headline": "VertooERP als Alternative kennenlernen",
      "text": "Sehen Sie im Gespräch, wie sich Warenwirtschaft, Buchhaltung und Ihre weiteren Bereiche in einem modularen ERP bündeln lassen."
    }
  },
  {
    "slug": "xentral",
    "competitor": "Xentral",
    "metaTitle": "Alternative zu Xentral – VertooERP",
    "metaDescription": "VertooERP als Alternative zu Xentral: selbst gehostetes, modulares ERP aus Deutschland mit voller Datenhoheit. DSGVO- und GoBD-konform.",
    "hero": {
      "eyebrow": "VertooERP als Alternative zu Xentral",
      "headline": "Das ERP, das im eigenen Haus bleibt",
      "subhead": "VertooERP ist die selbst gehostete, modulare Alternative zu Xentral – volle Datenhoheit, nur genutzte Module zahlen, entwickelt in Deutschland."
    },
    "intro": "Wer ein ERP für Auftrag, Lager und Buchhaltung sucht, stößt schnell auf Xentral. VertooERP verfolgt einen anderen Ansatz: Sie hosten die Software selbst, kombinieren nur die Module, die Sie wirklich brauchen, und behalten Ihre Daten vollständig im eigenen Haus. Diese Seite zeigt, worin sich VertooERP unterscheidet – sachlich und ohne die Leistung von Xentral kleinzureden.",
    "reasons": {
      "intro": "Drei Gründe, warum kleine und mittlere Unternehmen VertooERP als Alternative zu Xentral in Betracht ziehen:",
      "items": [
        {
          "icon": "server",
          "title": "Selbst gehostet statt Cloud-Zwang",
          "description": "VertooERP läuft On-Premises oder in Ihrer eigenen Infrastruktur. Sie entscheiden, wo Ihre Daten liegen – kein zwingender Umzug in eine fremde Cloud."
        },
        {
          "icon": "puzzle",
          "title": "Modular und nutzungsgerecht",
          "description": "Mehr als 20 Module lassen sich frei kombinieren. Sie zahlen nur für die tatsächlich genutzten Bausteine, ab 350 € pro Monat."
        },
        {
          "icon": "shield",
          "title": "Datenhoheit und Compliance",
          "description": "DSGVO- und GoBD-konform, mit DATEV-Export sowie XRechnung und ZUGFeRD. Ihre Geschäftsdaten bleiben unter Ihrer Kontrolle."
        }
      ]
    },
    "differentiators": {
      "intro": "Die wichtigsten Unterschiede von VertooERP im Überblick:",
      "items": [
        {
          "icon": "database",
          "name": "Volle Datenhoheit",
          "description": "Durch Self-Hosting bleiben alle Daten im eigenen Haus. Sie bestimmen Speicherort, Zugriffe und Backups selbst."
        },
        {
          "icon": "layers",
          "name": "20+ kombinierbare Module",
          "description": "Warenwirtschaft, Buchhaltung, Lager, Zeiterfassung, CRM, Aufgaben und mehr – frei zusammenstellbar für Ihren Bedarf."
        },
        {
          "icon": "badge-euro",
          "name": "Zahlen nach Nutzung",
          "description": "Kein Rundum-Paket, das Sie nur zur Hälfte nutzen. Aktive Module bestimmen die Kosten, ab 350 € pro Monat."
        },
        {
          "icon": "building-2",
          "name": "Multi-Mandant & Multi-Standort",
          "description": "Mehrere Mandanten und Standorte in einer Installation abbilden – als Web-App und mobil per PWA nutzbar."
        },
        {
          "icon": "lock",
          "name": "Lokaler KI-Assistent",
          "description": "Ein KI-Assistent auf Basis von Ollama läuft lokal in Ihrer Umgebung, ohne dass Daten das Haus verlassen müssen."
        }
      ]
    },
    "fairness": "Xentral ist ein etabliertes ERP aus Deutschland für E-Commerce und kleine bis mittlere Unternehmen, das Prozesse vom Auftrag bis zum Versand bündelt – eine bewährte Lösung für viele Betriebe. VertooERP ist keine Kritik daran, sondern ein anderer Weg für Unternehmen, die Wert auf Self-Hosting, volle Datenhoheit und modulare Abrechnung legen.",
    "faq": [
      {
        "q": "Ist VertooERP eine echte Alternative zu Xentral?",
        "a": "Ja. Beide Systeme decken zentrale ERP-Prozesse für kleine und mittlere Unternehmen ab. VertooERP setzt zusätzlich auf Self-Hosting, volle Datenhoheit und eine modulare Abrechnung, bei der nur genutzte Module zählen."
      },
      {
        "q": "Kann ich VertooERP auf eigenen Servern betreiben?",
        "a": "Ja. VertooERP ist als Self-Hosting- beziehungsweise On-Premises-Lizenz konzipiert. Sie betreiben die Software in Ihrer eigenen Infrastruktur und behalten die volle Kontrolle über Ihre Daten."
      },
      {
        "q": "Ist VertooERP DSGVO- und GoBD-konform?",
        "a": "Ja. VertooERP ist DSGVO- und GoBD-konform und unterstützt DATEV-Export sowie XRechnung und ZUGFeRD für die revisionssichere Buchhaltung und E-Rechnung."
      }
    ],
    "cta": {
      "headline": "VertooERP als Alternative zu Xentral kennenlernen",
      "text": "Sehen Sie sich an, wie selbst gehostetes, modulares ERP mit voller Datenhoheit für Ihr Unternehmen funktioniert – unverbindlich und aus Deutschland."
    }
  },
  {
    "slug": "weclapp",
    "competitor": "weclapp",
    "metaTitle": "Alternative zu weclapp – VertooERP",
    "metaDescription": "VertooERP als Alternative zu weclapp: modulares ERP zum Self-Hosting mit voller Datenhoheit. DSGVO- und GoBD-konform, in Deutschland entwickelt.",
    "hero": {
      "eyebrow": "Alternative zu weclapp",
      "headline": "Ein ERP, das in Ihrem eigenen Haus bleibt",
      "subhead": "VertooERP ist ein modulares ERP für den deutschen Mittelstand, das Sie selbst hosten können – Ihre Daten bleiben auf Ihrer eigenen oder gemieteten Infrastruktur."
    },
    "intro": "Wenn Sie VertooERP mit weclapp vergleichen, geht es meist um eine einzige, grundlegende Frage: Wo sollen Ihre Unternehmensdaten liegen? weclapp ist ein Cloud-ERP aus Deutschland für kleine und mittlere Unternehmen. VertooERP verfolgt einen anderen Ansatz und stellt das Self-Hosting in den Mittelpunkt – Sie behalten die volle Kontrolle über Ihre Daten und Ihre Infrastruktur.",
    "reasons": {
      "intro": "Drei Gründe, warum mittelständische Unternehmen VertooERP als Alternative in Betracht ziehen:",
      "items": [
        {
          "icon": "server",
          "title": "Self-Hosting statt Cloud-Zwang",
          "description": "VertooERP läuft auf Ihrer eigenen oder gemieteten Infrastruktur. Ihre Daten bleiben im eigenen Haus – ohne Bindung an einen bestimmten Cloud-Anbieter."
        },
        {
          "icon": "layers",
          "title": "Modular und bedarfsgerecht",
          "description": "Über 20 Module – von Warenwirtschaft über Buchhaltung bis CRM und KI-Assistent – lassen sich frei kombinieren. Sie zahlen nur die Module, die Sie wirklich nutzen (ab 350 €/Monat)."
        },
        {
          "icon": "shield",
          "title": "Konform und anschlussfähig",
          "description": "DSGVO- und GoBD-konform mit DATEV-Export sowie XRechnung und ZUGFeRD – entwickelt in Deutschland für die Anforderungen des hiesigen Mittelstands."
        }
      ]
    },
    "differentiators": {
      "intro": "Die zentralen Unterschiede von VertooERP im Überblick:",
      "items": [
        {
          "icon": "database",
          "name": "Volle Datenhoheit",
          "description": "Als Lizenzmodell zum Self-Hosting oder On-Premises betrieben behalten Sie die vollständige Hoheit über Ihre Daten und deren Speicherort."
        },
        {
          "icon": "boxes",
          "name": "20+ Module modular kombinierbar",
          "description": "Warenwirtschaft, Buchhaltung, Lager, Zeiterfassung, CRM, Aufgaben und mehr – flexibel zusammenstellbar, sodass Sie nur genutzte Module bezahlen."
        },
        {
          "icon": "building-2",
          "name": "Multi-Mandant und Multi-Standort",
          "description": "Mehrere Mandanten und Standorte lassen sich in einer Installation abbilden – geeignet für Unternehmensgruppen und wachsende Strukturen."
        },
        {
          "icon": "smartphone",
          "name": "Web-App und mobil per PWA",
          "description": "VertooERP nutzen Sie im Browser und mobil als Progressive Web App – ortsunabhängig, ohne separate App-Installation."
        },
        {
          "icon": "lock",
          "name": "Lokaler KI-Assistent über Ollama",
          "description": "Der KI-Assistent läuft lokal über Ollama, sodass auch KI-Funktionen innerhalb Ihrer eigenen Infrastruktur bleiben können."
        }
      ]
    },
    "fairness": "weclapp ist ein etabliertes Cloud-ERP aus Deutschland, und für viele Teams ist ein reiner Cloud-Betrieb genau richtig – wartungsarm, überall verfügbar und schnell startklar. VertooERP richtet sich an Unternehmen, die aus Compliance-, Souveränitäts- oder Richtliniengründen bewusst auf On-Premises und volle Datenhoheit setzen.",
    "faq": [
      {
        "q": "Worin unterscheidet sich VertooERP von weclapp?",
        "a": "weclapp ist ein Cloud-ERP aus Deutschland für kleine und mittlere Unternehmen. VertooERP setzt auf Self-Hosting: Sie betreiben es auf Ihrer eigenen oder gemieteten Infrastruktur und behalten so die volle Datenhoheit."
      },
      {
        "q": "Kann ich VertooERP wirklich selbst hosten?",
        "a": "Ja. Self-Hosting beziehungsweise On-Premises ist das Lizenzmodell von VertooERP. Ihre Daten bleiben im eigenen Haus, es gibt keinen Cloud-Zwang und keine Bindung an einen einzelnen Anbieter."
      },
      {
        "q": "Ist VertooERP DSGVO- und GoBD-konform?",
        "a": "Ja. VertooERP ist DSGVO- und GoBD-konform, bietet DATEV-Export sowie XRechnung und ZUGFeRD und wird in Deutschland entwickelt."
      }
    ],
    "cta": {
      "headline": "VertooERP als Alternative zu weclapp kennenlernen",
      "text": "Sehen Sie sich an, wie modulares Self-Hosting mit voller Datenhoheit für Ihr Unternehmen aussehen kann – wir zeigen Ihnen VertooERP gern im Detail."
    }
  },
  {
    "slug": "odoo",
    "competitor": "Odoo",
    "metaTitle": "Alternative zu Odoo – VertooERP",
    "metaDescription": "VertooERP als Alternative zu Odoo: modulares, self-gehostetes ERP mit DSGVO, GoBD, DATEV und XRechnung – auf den deutschen Mittelstand zugeschnitten.",
    "hero": {
      "eyebrow": "Alternative zu Odoo",
      "headline": "VertooERP: das ERP für den deutschen Mittelstand",
      "subhead": "Ein modulares, self-gehostetes ERP, das mit DSGVO, GoBD, DATEV und XRechnung von Anfang an auf den deutschen Markt zugeschnitten ist."
    },
    "intro": "Sie vergleichen ERP-Systeme und Odoo steht auf Ihrer Liste? Eine gute Wahl für den Überblick. Odoo ist eine modulare, international verbreitete Open-Source-ERP-Suite mit einem sehr breiten App-Angebot. VertooERP setzt einen anderen Schwerpunkt: statt maximaler Breite den klaren Fokus auf die Anforderungen kleiner und mittlerer Unternehmen in Deutschland – mit voller Datenhoheit und ohne Cloud-Zwang.",
    "reasons": {
      "intro": "Drei Gründe, warum Unternehmen im deutschen Mittelstand VertooERP als Alternative zu Odoo prüfen:",
      "items": [
        {
          "icon": "flag",
          "title": "Auf den deutschen Markt zugeschnitten",
          "description": "DSGVO- und GoBD-Konformität, DATEV-Export sowie XRechnung und ZUGFeRD sind fester Bestandteil – nicht erst über Zusatzkonfiguration nachzurüsten."
        },
        {
          "icon": "server",
          "title": "Volle Datenhoheit durch Self-Hosting",
          "description": "VertooERP läuft on-premises in Ihrer eigenen Umgebung. Ihre Daten bleiben bei Ihnen, ohne Cloud-Zwang und mit voller Kontrolle über den Betrieb."
        },
        {
          "icon": "target",
          "title": "Fokus statt Funktionsfülle",
          "description": "20+ Module lassen sich modular kombinieren – Sie zahlen nur die genutzten Module und starten ohne unnötige Komplexität für Ihren Alltag."
        }
      ]
    },
    "differentiators": {
      "intro": "Wo VertooERP eigene Akzente setzt:",
      "items": [
        {
          "icon": "layers",
          "name": "Modular und fair abgerechnet",
          "description": "Warenwirtschaft, Buchhaltung, Lager, Zeiterfassung, CRM, Aufgaben, KI-Assistent und mehr – frei kombinierbar ab 350 €/Monat, es zahlen nur genutzte Module."
        },
        {
          "icon": "badge-euro",
          "name": "Deutsche Standards inklusive",
          "description": "DATEV-Export, XRechnung und ZUGFeRD sowie DSGVO- und GoBD-Konformität sind direkt eingebaut und für den deutschen Rechnungs- und Buchhaltungsalltag ausgelegt."
        },
        {
          "icon": "building-2",
          "name": "Multi-Mandant und Multi-Standort",
          "description": "Mehrere Mandanten und Standorte lassen sich zentral verwalten – als Web-App und mobil per PWA von überall nutzbar."
        },
        {
          "icon": "shield",
          "name": "Lokaler KI-Assistent",
          "description": "Der KI-Assistent läuft lokal über Ollama. So bleiben auch KI-gestützte Auswertungen in Ihrer eigenen Infrastruktur."
        },
        {
          "icon": "flag",
          "name": "Entwickelt in Deutschland",
          "description": "VertooERP wird in Deutschland entwickelt, mit deutschsprachigem Support und einem Verständnis für die Anforderungen des hiesigen Mittelstands."
        }
      ]
    },
    "fairness": "Odoo ist ein starkes, ausgereiftes System mit einem riesigen Ökosystem und einer beeindruckenden Bandbreite an Apps – für viele international aufgestellte Unternehmen genau richtig. VertooERP tritt nicht als Ersatz für diese Breite an, sondern als fokussierte Alternative für Unternehmen, die vor allem den deutschen Markt bedienen.",
    "faq": [
      {
        "q": "Ist VertooERP eine echte Alternative zu Odoo?",
        "a": "Ja, für kleine und mittlere Unternehmen in Deutschland. Wo Odoo mit einem sehr breiten App-Angebot punktet, konzentriert sich VertooERP auf die Anforderungen des deutschen Mittelstands: DSGVO, GoBD, DATEV, XRechnung und ZUGFeRD sind ab Werk dabei."
      },
      {
        "q": "Kann ich VertooERP selbst hosten?",
        "a": "Ja. Self-Hosting beziehungsweise On-Premises ist das Lizenzmodell von VertooERP. Sie behalten die volle Datenhoheit und sind nicht an eine Cloud gebunden."
      },
      {
        "q": "Muss ich alle Module bezahlen?",
        "a": "Nein. VertooERP ist modular aufgebaut, Sie kombinieren aus 20+ Modulen nur das, was Sie brauchen, und zahlen nur die genutzten Module – ab 350 €/Monat."
      }
    ],
    "cta": {
      "headline": "VertooERP im Vergleich zu Odoo kennenlernen",
      "text": "Sehen Sie, wie ein self-gehostetes, modulares ERP mit deutschen Standards zu Ihrem Unternehmen passt. Wir zeigen es Ihnen unverbindlich."
    }
  }
];

export function getAlternativeBySlug(slug: string): Alternative | undefined {
  return alternatives.find((a) => a.slug === slug);
}
