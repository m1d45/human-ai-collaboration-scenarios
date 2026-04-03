/** locales/de.js — Deutsch */
window.LOCALES = window.LOCALES || {};
window.LOCALES.de = {

  meta: {
    title: '32 Szenarien — Eine Klassifikation der Zusammenarbeit zwischen Mensch und KI'
  },

  ui: {
    eyebrow: 'AI LAB · HSE School of Design · Vadim Bulgakov',
    title: {
      line1: '32 Szenarien der Zusammenarbeit',
      line2: 'zwischen Mensch und KI',
      line3: ' in den kreativen Industrien'
    },
    questionnaire: {
      intro_label: 'Finden Sie Ihr Szenario',
      intro_text: 'Beantworten Sie 5 Fragen zu Ihrer Aufgabe — das System ermittelt die passenden Szenarien.',
      q1: {
        label: 'Ist das eine Umsetzungsaufgabe?',
        research: 'Nein',
        impl:     'Ja'
      },
      q2: {
        label: 'Erfordert diese Aufgabe spezielles Wissen oder berufliche Erfahrung?',
        low:  'Nein',
        high: 'Ja'
      },
      q3: {
        label: 'Muss diese Aufgabe schnell erledigt werden?',
        low:  'Nein',
        high: 'Ja'
      },
      q4: {
        label: 'Ist es Ihnen wichtig, diese Aufgabe selbst auszuführen?',
        low:  'Nein',
        high: 'Ja'
      },
      q5: {
        label: 'Kann ein Fehler in dieser Aufgabe teuer werden?',
        low:  'Nein',
        high: 'Ja'
      },
      showing:  'Angezeigt ',
      of_total: ' von 32',
      reset:    'Zurücksetzen',
      apply:    'Anwenden'
    },
    modes: { aug: 'Augmentation', coop: 'Kooperation', auto: 'Automatisierung' },
    stages: { research: 'Exploration', impl: 'Umsetzung' },
    search: { placeholder: 'Suche nach Titel, Beschreibung, Beispielen…' },
    empty_state: 'Keine Szenarien entsprechen den ausgewählten Antworten',
    card: {
      human_role: 'Rolle des Menschen',
      ai_role:    'Rolle der KI',
      expand:     'Mehr',
      collapse:   'Weniger'
    },
    modal: {
      close:              'Schließen',
      logic:              'Begründung der Moduswahl',
      risk_correct:       'Risiken bei richtiger Anwendung',
      risk_wrong:         'Risiken bei falscher Anwendung',
      risk_correct_label: 'Richtiger Modus',
      risk_wrong_label:   'Falscher Modus',
      examples:           'Beispiele für Aufgaben',
      related:            'Verwandte Szenarien'
    }
  },

  attr_chips: {
    expertise: { low: 'E−', high: 'E+' },
    speed: { low: 'G−', high: 'G+' },
    motivation: { low: 'M−', high: 'M+' },
    cost: { low: 'K−', high: 'K+' }
  },

  codes: {
    a: {
      1:  'Erk · E− · G− · M− · K−', 2:  'Erk · E− · G− · M− · K+',
      3:  'Erk · E− · G− · M+ · K−', 4:  'Erk · E− · G− · M+ · K+',
      5:  'Erk · E− · G+ · M− · K−', 6:  'Erk · E− · G+ · M− · K+',
      7:  'Erk · E− · G+ · M+ · K−', 8:  'Erk · E− · G+ · M+ · K+',
      9:  'Erk · E+ · G− · M− · K−', 10: 'Erk · E+ · G− · M− · K+',
      11: 'Erk · E+ · G− · M+ · K−', 12: 'Erk · E+ · G− · M+ · K+',
      13: 'Erk · E+ · G+ · M− · K−', 14: 'Erk · E+ · G+ · M− · K+',
      15: 'Erk · E+ · G+ · M+ · K−', 16: 'Erk · E+ · G+ · M+ · K+',
      17: 'Umz · E− · G− · M− · K−', 18: 'Umz · E− · G− · M− · K+',
      19: 'Umz · E− · G− · M+ · K−', 20: 'Umz · E− · G− · M+ · K+',
      21: 'Umz · E− · G+ · M− · K−', 22: 'Umz · E− · G+ · M− · K+',
      23: 'Umz · E− · G+ · M+ · K−', 24: 'Umz · E− · G+ · M+ · K+',
      25: 'Umz · E+ · G− · M− · K−', 26: 'Umz · E+ · G− · M− · K+',
      27: 'Umz · E+ · G− · M+ · K−', 28: 'Umz · E+ · G− · M+ · K+',
      29: 'Umz · E+ · G+ · M− · K−', 30: 'Umz · E+ · G+ · M− · K+',
      31: 'Umz · E+ · G+ · M+ · K−', 32: 'Umz · E+ · G+ · M+ · K+'
    }
  },

  scenarios: {
    1: {
      title: 'Blinde Exploration',
      human_role: 'Stellt die Aufgabe und erhält das endgültige Ergebnis. Formuliert die Anfrage, setzt die Suchparameter und prüft das Ergebnis bei Bedarf.',
      ai_role: 'Führt eine breite Recherche, Aggregation und erste Strukturierung durch. Erstellt Zusammenfassungen, Referenzsammlungen und thematische Übersichten.',
      logic: 'Geringe Motivation bedeutet, dass die menschliche Präsenz im Prozess keinen zusätzlichen Wert schafft. Geringe Expertise und geringe Risiken machen dies zu einem idealen Delegationsszenario.',
      risk_correct: 'Verlust projektspezifischer Nuancen — die KI hat keinen Zugang zum impliziten Kontext.',
      risk_wrong: 'Ergebnisse werden ohne Überprüfung ihrer Genauigkeit verwendet; Halluzinationen der KI werden als Fakten behandelt.',
      examples: ['Erste Referenzsuche für eine unbekannte ästhetische Richtung', 'Trendüberblick in einer Nische für ein vorläufiges Briefing', 'Aufbau eines Terminologie-Glossars für ein neues Themenfeld'],
      related: ['С-02', 'С-03', 'С-09']
    },
    2: {
      title: 'Exploration mit Sicherheitsnetz',
      human_role: 'Architekt des Prozesses und Auditor des Ergebnisses. Definiert Parameter, Abnahmekriterien und führt die abschließende Prüfung vor der Nutzung durch.',
      ai_role: 'Führt die Recherche autonom innerhalb der gesetzten Parameter aus. Erstellt strukturierte Ergebnisse und markiert Unsicherheiten sowie potenzielle Lücken.',
      logic: 'Das Profil ist mit Szenario 1 identisch, mit einer Ausnahme: Die Fehlerkosten sind hoch. Automatisierung bleibt sinnvoll, benötigt aber eine zusätzliche Kontrollschicht.',
      risk_correct: 'Illusion der Vollständigkeit — die KI weiß nicht, was sie nicht weiß; kritische Lücken können unbemerkt bleiben.',
      risk_wrong: 'Die abschließende Prüfung wird unter Zeitdruck ausgelassen; ein sicherer Ton wird mit Genauigkeit verwechselt.',
      examples: ['Analyse des Wettbewerbsumfelds für eine strategische Kundenpräsentation', 'Vorläufiger Marktaudit vor einem Investoren-Pitch', 'Sammlung regulatorischer Rahmenbedingungen für ein Projekt in einer regulierten Branche'],
      related: ['С-01', 'С-04', 'С-10']
    },
    3: {
      title: 'Gemeinsame Sinnbildung',
      human_role: 'Aktiver Teil des Dialogs: gibt die Richtung vor, reagiert auf Vorschläge der KI und bringt eigene Erfahrung und Intuition ein.',
      ai_role: 'Gesprächspartner und Generator von Alternativen. Schlägt nicht offensichtliche Richtungen vor, stellt klärende Fragen und erweitert das Feld über das Erwartbare hinaus.',
      logic: 'Hohe Motivation ist hier der entscheidende Schalter. Auch bei geringer formaler Expertise muss die Person im Prozess bleiben — das Ergebnis soll eine persönliche Perspektive spiegeln und nicht einen gemittelten Modell-Output.',
      risk_correct: 'Echo-Kammer-Effekt — das Modell passt sich zu stark an die Sprache der Person an und liefert keine wirklich unerwarteten Richtungen mehr.',
      risk_wrong: 'Wechsel in einen simplen Augmentationsmodus („gib mir einfach ein paar Optionen“) — damit geht der lebendige Dialog verloren, der diesen Modus wertvoll macht.',
      examples: ['Erkundung einer visuellen Sprache für das neue persönliche Projekt eines jungen Designers', 'Suche nach einem konzeptionellen Rahmen für ein nicht-kommerzielles Kunstprojekt', 'Gemeinsame Exploration eines Nischenthemas aus dem Kulturbereich für ein zukünftiges Skript'],
      related: ['С-01', 'С-04', 'С-07']
    },
    4: {
      title: 'Vorsichtiger Dialog',
      human_role: 'Führende Person mit erhöhter kritischer Wachsamkeit. Hohe Risiken erfordern, dass jede wichtige Erkenntnis vor ihrer Nutzung überprüft wird.',
      ai_role: 'Partner zur Erweiterung des Denkraums, der mit hoher Transparenz arbeitet: markiert Sicherheitsgrade, macht Widersprüche sichtbar und bietet alternative Deutungen an.',
      logic: 'Hohe Motivation verlangt Kooperation. Die hohen Fehlerkosten machen diesen Modus strenger — Iterationen dienen nicht nur der Ideenfindung, sondern auch der Überprüfung.',
      risk_correct: 'Der Prozess verlangsamt sich durch zu gründliche Kontrolle jedes einzelnen Schritts.',
      risk_wrong: 'Unter Druck wird zur Automatisierung gewechselt — genau dort geht die Kontrolle verloren, wo sie am wichtigsten wäre.',
      examples: ['Recherche für eine Repositionierungsstrategie einer großen Marke ohne Branchenexpertise', 'Konzeptionelle Grundlage für ein Bildungsprogramm, das öffentlich verteidigt werden soll', 'Erste Recherche für ein dokumentarisches Projekt mit hoher öffentlicher Relevanz'],
      related: ['С-03', 'С-12']
    },
    5: {
      title: 'Schnelle Exploration',
      human_role: 'Formuliert die Anfrage und konsumiert das Ergebnis. Stellt den Auftrag und erhält strukturierte Ausgaben.',
      ai_role: 'Hochgeschwindigkeits-Aggregator für Informationen. Arbeitet schnell und mit großer Breite. Vorrang haben Geschwindigkeit und Vollständigkeit, nicht die Präzision jedes einzelnen Elements.',
      logic: 'Hohe Geschwindigkeit und geringe Motivation weisen klar in Richtung Automatisierung. Die Person braucht schnell ein Resultat, ohne in den Prozess einzusteigen.',
      risk_correct: 'Oberflächlichkeit — bei schneller Sammlung können wichtige Nuancen verloren gehen.',
      risk_wrong: 'Schnelle Ergebnisse werden dort eingesetzt, wo eigentlich Tiefe erforderlich wäre.',
      examples: ['Schnelle Referenzsuche vor einem Kundenbriefing', 'Zusammenstellung einer Liste potenzieller Anbieter für eine Produktionsaufgabe', 'Überblick über aktuelle Veröffentlichungen für eine einleitende Präsentationsfolie'],
      related: ['С-01', 'С-06', 'С-07']
    },
    6: {
      title: 'Dringende Exploration mit hohen Risiken',
      human_role: 'Schneller Prüfer des Outputs. Für eine tiefe Beteiligung fehlt die Zeit, aber die Verantwortung für das Ergebnis bleibt bestehen.',
      ai_role: 'Arbeitet mit maximaler Geschwindigkeit, priorisiert verlässliche Quellen und markiert Unsicherheiten sowie zentrale Lücken ausdrücklich.',
      logic: 'Geschwindigkeit und hohe Risiken stehen hier in Spannung zueinander. Geringe Motivation spricht gegen aktive Beteiligung, aber hohe Fehlerkosten machen eine abschließende Überprüfung unverzichtbar.',
      risk_correct: 'Zeitdruck senkt die Qualität der Prüfung — die Validierungsebene muss gegen das Argument „dafür haben wir keine Zeit“ geschützt werden.',
      risk_wrong: 'Vollständige Automatisierung ohne Validierung — ein teurer Fehler in einem dringenden und hochriskanten Kontext.',
      examples: ['Dringende Datensammlung vor einer Krisen-PR-Sitzung', 'Schnelle Faktenprüfung für einen hochrangigen Pitch', 'Dringende Wettbewerbsanalyse vor Verhandlungen'],
      related: ['С-05', 'С-08']
    },
    7: {
      title: 'Sprint mit einem Partner',
      human_role: 'Aktiver Teilnehmer eines schnellen Iterationsprozesses. Reagiert auf Vorschläge der KI, streicht Unpassendes und hält den strategischen Fokus auch bei hohem Tempo.',
      ai_role: 'Reaktiver Generator in Echtzeit. Liefert schnell Optionen und passt die Richtung an menschliches Feedback an.',
      logic: 'Hohe Motivation verlangt menschliche Präsenz im Loop — trotz des Tempos. Kooperation wird hier zu einem schnellen Dialog, in dem die Person den Vektor vorgibt.',
      risk_correct: 'Die Ergebnisse bleiben oberflächlich — schnelle Kooperation erzeugt Breite, aber nicht Tiefe.',
      risk_wrong: 'Wechsel in reine Automatisierung „weil keine Zeit da ist“ — die authoriale Stimme geht verloren.',
      examples: ['Brainstorming konzeptioneller Richtungen für ein neues Briefing in einem einzigen Arbeitsblock', 'Schnelle Suche nach narrativen Winkeln für einen redaktionellen Beitrag unter Deadline', 'Erzeugung mehrerer visueller Richtungen für schnelles Testen'],
      related: ['С-03', 'С-08', 'С-15']
    },
    8: {
      title: 'Dringender Dialog',
      human_role: 'Führt unter Druck. Bewahrt einen kritischen Blick bei hohem Tempo und hohen Risiken.',
      ai_role: 'Arbeitet im Modus dringender Unterstützung: generiert schnell Richtungen und markiert Sicherheitseinschätzungen transparent.',
      logic: 'Geschwindigkeit und hohe Risiken würden in Richtung Automatisierung drängen, doch die Motivation blockiert diesen Schritt. Der Modus beruht auf kurzen Iterationen und expliziter Verifikation.',
      risk_correct: 'Unter Stress ist es leicht, überzeugende Antworten der KI ohne Prüfung zu akzeptieren.',
      risk_wrong: 'Jeder Wechsel in Richtung Automatisierung kann hier zu einem kostspieligen Fehler werden.',
      examples: ['Express-Recherche vor einem wichtigen Treffen mit einem potenziellen Partner', 'Dringende Suche nach einem konzeptionellen Ansatz für eine Krisenkampagne', 'Schnelle Suche nach Referenzfällen, um eine unkonventionelle Entscheidung gegenüber einem Kunden zu begründen'],
      related: ['С-07', 'С-04', 'С-16']
    },
    9: {
      title: 'Expertenüberblick',
      human_role: 'Experte als Navigator: definiert hochspezifische Suchparameter. Bewertet die Ergebnisse mit geschärftem Blick und erkennt, was die KI übersehen haben könnte.',
      ai_role: 'Erweitert die Abdeckung: verarbeitet große Materialmengen schneller als ein Experte allein, strukturiert und aggregiert.',
      logic: 'Hohe Expertise ist für Qualität notwendig — die KI erweitert, ersetzt aber nicht. Geringe Motivation bedeutet, dass der Experte nicht selbst in den Suchprozess eintauchen möchte.',
      risk_correct: 'Der Experte kann die Ordnung des Materials durch die KI mit echter Interpretation verwechseln.',
      risk_wrong: 'Die Verifikationsstufe wird übersprungen, weil der Experte „das Thema ohnehin kennt“.',
      examples: ['Sammlung wissenschaftlicher Literatur zu einem spezialisierten Thema für ein Forschungsprojekt', 'Audit bestehender Lösungen in einem engen technischen Feld für Forschung und Entwicklung', 'Aufbau eines erweiterten Glossars für eine professionelle Disziplin'],
      related: ['С-01', 'С-10', 'С-11']
    },
    10: {
      title: 'Expertenaudit',
      human_role: 'Experte mit erhöhter Verantwortung. Definiert strenge Qualitätskriterien und überprüft die Richtigkeit — Fehler sind teuer.',
      ai_role: 'Strukturierter Assistent mit expliziten Unsicherheitsmarkierungen. Priorisiert die Zuverlässigkeit von Quellen und kennzeichnet widersprüchliche Daten.',
      logic: 'Hohe Expertise und hohe Risiken führen zu einer Augmentation mit erhöhtem Kontrollniveau. Die Motivation ist niedrig, aber die Verantwortung für das Endergebnis ist vollständig.',
      risk_correct: 'Übermäßige Vorsicht kann die Arbeit verlangsamen.',
      risk_wrong: 'Wechsel in Kooperation, wenn die Zeit knapp wird — und damit weniger Kontrolle bei gleichzeitig hohen Risiken.',
      examples: ['Recherche zum regulatorischen Umfeld für die Einführung eines neuen Medienprodukts', 'Analyse technischer Dokumentation für ein großes Produktionsprojekt', 'Wissenschaftliche Recherche für eine Veröffentlichung in einem peer-reviewten Journal'],
      related: ['С-09', 'С-14']
    },
    11: {
      title: 'Tiefgehende Recherche mit Präsenz',
      human_role: 'Forschende Person mit einer authorialen Position. Nimmt Informationen nicht nur auf, sondern bildet eine eigene Sichtweise. Die KI erweitert das Feld, die Richtung bestimmt der Mensch.',
      ai_role: 'Intellektueller Erweiterer: schlägt unerwartete Verbindungen, angrenzende Themen und alternative Perspektiven vor.',
      logic: 'Augmentation hält die Person in der Rolle des Autors; die KI wird zu einer intellektuellen Lupe. Bei hoher Expertise bringt gerichtete Nutzung oft mehr als ein offener iterativer Dialog.',
      risk_correct: 'Die KI kann so viele unerwartete Verbindungen vorschlagen, dass der Fokus der Recherche verloren geht.',
      risk_wrong: 'Wechsel in Kooperation — die authoriale Position wird geschwächt.',
      examples: ['Konzeptionelle Recherche für das persönliche Kunstprojekt eines erfahrenen Autors', 'Wissenschaftliche Recherche in einer benachbarten Disziplin', 'Entwicklung eines theoretischen Rahmens für einen neuen Kurs'],
      related: ['С-09', 'С-12', 'С-15']
    },
    12: {
      title: 'Abgewogene Recherche',
      human_role: 'Verantwortlicher Autor: verbindet Expertise, Beteiligung und Bewusstsein für hohe Risiken. Jede Schlussfolgerung wird geprüft, jede Richtung sorgfältig abgewogen.',
      ai_role: 'Präziser Assistent: markiert Unsicherheit, liefert Quellen und vermeidet Synthesen dort, wo Daten widersprüchlich sind.',
      logic: 'Hier konzentrieren sich alle verantwortungsbezogenen Parameter maximal, ohne Zeitdruck. Augmentation ist in diesem Fall die professionellste Konfiguration mit vollständiger Kontrolle.',
      risk_correct: 'Perfektionismus kann den Fortschritt verlangsamen.',
      risk_wrong: 'Erschöpfung kann in Automatisierung umschlagen und genau dort zu Kontrollverlust führen, wo Kontrolle am wichtigsten wäre.',
      examples: ['Forschungsgrundlage für eine Dissertation oder eine öffentliche wissenschaftliche Arbeit', 'Strategische Analyse für ein großes kulturelles oder wirtschaftliches Projekt', 'Konzeptionelle Basis für eine Designentscheidung, die öffentlich verteidigt wird'],
      related: ['С-11', 'С-10', 'С-16']
    },
    13: {
      title: 'Experten-Sprint',
      human_role: 'Experte im Schnellscan-Modus. Formuliert präzise Anfragen, bewertet die Relevanz der Ergebnisse rasch und arbeitet weiter.',
      ai_role: 'Hochgeschwindigkeits-Aggregator mit Priorisierung nach Expertenkriterien.',
      logic: 'Hohe Expertise, hohe Geschwindigkeit und geringe Motivation machen dies zu einem klassischen Augmentationsszenario. Die KI beschleunigt die Arbeit des Experten, ersetzt ihn aber nicht.',
      risk_correct: 'Geschwindigkeit verringert Tiefe — der Experte kann eine wichtige Nuance übersehen, die von der KI nicht markiert wurde.',
      risk_wrong: 'Wechsel in Automatisierung — der Experte hört auf zu prüfen und verlässt sich zunehmend auf Intuition.',
      examples: ['Schneller Expertenüberblick über Wettbewerber vor einem Pitch', 'Dringende Suche nach Präzedenzfällen für professionelle Argumentation', 'Express-Audit bestehender Lösungen für ein technisches Briefing'],
      related: ['С-09', 'С-14', 'С-15']
    },
    14: {
      title: 'Dringendes Expertenaudit',
      human_role: 'Experte unter Druck und mit hoher Verantwortung. Definiert präzise Kriterien und validiert zentrale Ergebnisse schnell.',
      ai_role: 'Maximal effizienter Assistent unter Einschränkungen: priorisiert Zuverlässigkeit und markiert Unsicherheit.',
      logic: 'Hohe Risiken bei hohem Tempo. Augmentation bleibt notwendig, weil Expertise weiterhin unverzichtbar ist. Weniger Iterationen, mehr Fokus auf der finalen Validierungsebene.',
      risk_correct: 'Falsches Gefühl ausreichender Sicherheit — „wir haben geprüft, die KI hat geholfen, also passt es schon“.',
      risk_wrong: 'Die Validierungsebene wird aus Gründen der Geschwindigkeit ausgelassen.',
      examples: ['Dringende Expertenanalyse vor dem Abschluss einer strategischen Partnerschaft', 'Sofortige Überprüfung der Faktenbasis für eine hochrangige öffentliche Rede', 'Schnelles Research-Audit vor der Veröffentlichung von Inhalten mit hoher Reichweite'],
      related: ['С-13', 'С-16']
    },
    15: {
      title: 'Expertenkooperation',
      human_role: 'Experte im Modus aktiver Ko-Autorschaft. Stellt komplexe Fragen und bewertet unerwartete Vorschläge der KI aus einer Expertenposition heraus.',
      ai_role: 'Gleichwertiger Denkpartner: macht Verbindungen sichtbar, die dem Experten aufgrund der „Tunnelperspektive“ seiner Spezialisierung entgehen könnten.',
      logic: 'Hohe Motivation und hohe Expertise ergeben keine Augmentation mehr. Kooperation schafft hier Synergie zwischen Expertenurteil und nicht offensichtlichen KI-Vorschlägen.',
      risk_correct: 'Der Experte kann beginnen, das Modell zu „unterrichten“, statt mit ihm zu arbeiten — dadurch geht Tempo verloren.',
      risk_wrong: 'Rückwechsel in Augmentation — genau das geht verloren, weshalb Kooperation gewählt wurde.',
      examples: ['Schnelle Konzeptentwicklung für einen Wettbewerb mit starker authorialer Stimme', 'Brainstorming eines Expertenteams mit der KI als „drittem Teilnehmer“', 'Express-Entwicklung mehrerer starker konzeptioneller Richtungen zum Vergleich'],
      related: ['С-11', 'С-07', 'С-16']
    },
    16: {
      title: 'Experten-Krisendialog',
      human_role: 'Experte unter maximalem Druck. Hohe Motivation, hohe Expertise und hohe Risiken verlangen permanente kritische Wachsamkeit.',
      ai_role: 'Schneller, transparenter, präziser Partner. Schlägt Optionen mit expliziter Sicherheitsmarkierung vor und hilft, das Denken unter Druck zu strukturieren.',
      logic: 'Alle Parameter stehen auf Maximum. Kooperation wird unvermeidbar: Motivation und Expertise blockieren Automatisierung, die Risiken verbieten die Übergabe von Initiative an die KI.',
      risk_correct: 'Kognitive Überlastung — zu viel eingehende Information bei hohem Tempo und hoher Verantwortung.',
      risk_wrong: 'Jede Verringerung des Kontrollniveaus kann zu einem schwerwiegenden Fehler werden.',
      examples: ['Dringende konzeptionelle Recherche für ein Krisenbriefing mit einem Top-Kunden', 'Express-Entwicklung einer Position zu einer sensiblen öffentlichen Frage mit sofortiger Veröffentlichung', 'Dringende analytische Arbeit für einen Wettbewerb oder eine Ausschreibung mit hohem Risiko'],
      related: ['С-15', 'С-08', 'С-32']
    },
    17: {
      title: 'Fließband',
      human_role: 'Systemarchitekt: konfiguriert Parameter, legt Templates fest, definiert Qualitätskriterien und überprüft regelmäßig Stichproben.',
      ai_role: 'Produktionsausführer: erledigt Aufgaben nach den vorgegebenen Parametern, hält gleichbleibende Qualität und skaliert die Produktion.',
      logic: 'Ein klassisches Szenario reiner Automatisierung. Keiner der Parameter verlangt hier eine dauerhafte menschliche Präsenz im Produktionszyklus.',
      risk_correct: 'Qualitätsdrift — ohne regelmäßige Audits entfernt sich das System schrittweise vom Standard.',
      risk_wrong: 'Start ohne klare Vorlage — die Automatisierung einer schlecht definierten Aufgabe skaliert Mittelmäßigkeit.',
      examples: ['Massengenerierung von Produktbeschreibungen für einen E-Commerce-Katalog', 'Automatische Erstellung standardisierter Social-Media-Posts aus einem Content-Plan', 'Batch-Anpassung visueller Materialien an Standardformate'],
      related: ['С-18', 'С-19', 'С-25']
    },
    18: {
      title: 'Überwachtes Fließband',
      human_role: 'Produktionsauditor: überprüft regelmäßig Stichproben der Ergebnisse und justiert das System bei Abweichungen nach.',
      ai_role: 'Produktionssystem mit erweiterten Metriken: protokolliert Abweichungen und markiert Einheiten mit geringer Sicherheit zur priorisierten Prüfung.',
      logic: 'Das Profil entspricht Szenario 17, aber hohe Fehlerkosten verlangen strukturierte Aufsicht. Die ökonomische Logik der Automatisierung bleibt erhalten, es kommt jedoch eine Audit-Schicht hinzu.',
      risk_correct: 'Der Auditor kann einen systemischen Fehler übersehen, wenn nur Stichproben geprüft werden.',
      risk_wrong: 'Aufsicht wird unter Druck von Volumen oder Fristen reduziert.',
      examples: ['Produktion rechtlich relevanter Dokumente auf Basis von Vorlagen', 'Massive Lokalisierung für Märkte mit reputationsbezogenen Risiken', 'Automatisierte Erstellung von Finanzberichten in vorgeschriebenem Format'],
      related: ['С-17', 'С-21']
    },
    19: {
      title: 'Authoriale Produktion',
      human_role: 'Autor im Prozess: Die KI macht seine Präsenz produktiver. Der Mensch steuert, redigiert und trifft authoriale Entscheidungen.',
      ai_role: 'Produktionsbeschleuniger: reduziert den Aufwand für technisch einfache Operationen und schlägt Optionen zur Auswahl durch den Autor vor.',
      logic: 'Hohe Motivation bedeutet, dass der Wert des Ergebnisses von menschlicher Autorschaft abhängt. Augmentation macht die Produktion flüssiger und hält die Person zugleich in der Rolle des Autors.',
      risk_correct: 'Die authoriale Stimme kann unter dem Einfluss der KI-Vorschläge allmählich geglättet werden.',
      risk_wrong: 'Wechsel in Kooperation oder Automatisierung — Verlust authorialer Kontrolle.',
      examples: ['Persönlicher Blog mit KI-Assistent für Redaktion und Strukturierung', 'Content-Produktion für die persönliche Marke eines Junior-Spezialisten', 'Erstellung illustrativer Materialien für ein nicht-kommerzielles Projekt'],
      related: ['С-17', 'С-20', 'С-23']
    },
    20: {
      title: 'Verantwortliche authoriale Produktion',
      human_role: 'Verantwortlicher Autor: Hohe Motivation und hohe Risiken führen zu maximaler Kontrolle. Jedes Element durchläuft eine menschliche Entscheidung.',
      ai_role: 'Sorgfältiger Assistent: übernimmt technische Operationen, bietet Optionen an und markiert Unsicherheit ausdrücklich.',
      logic: 'Augmentation ist der einzige Modus, der hier die richtige Balance bietet: Produktivität der KI plus menschliche authoriale Verantwortung.',
      risk_correct: 'Perfektionismus kann die Produktion verlangsamen.',
      risk_wrong: 'Der Wechsel in Automatisierung aus Erschöpfung führt genau dort zu Kontrollverlust, wo er am kritischsten ist.',
      examples: ['Produktion öffentlicher Inhalte, die den Ruf des Autors prägen', 'Erstellung von Lehrmaterialien unter eigenem Namen für ein breites Publikum', 'Produktion von Brand Content mit hohen Anforderungen an Tonalität und Stimme'],
      related: ['С-19', 'С-24']
    },
    21: {
      title: 'Schnelles Fließband',
      human_role: 'Startet den Prozess und erhält das Ergebnis. Minimale Beteiligung am Produktionszyklus.',
      ai_role: 'Hochgeschwindigkeits-Produktionseinheit. Vorrang haben Volumen und Geschwindigkeit innerhalb der vorgegebenen Parameter.',
      logic: 'Geschwindigkeit in Kombination mit niedrigen Werten in allen anderen Attributen ergibt das reinste Automatisierungsszenario.',
      risk_correct: 'Geschwindigkeit verdeckt systemische Fehler, bis sie skaliert werden.',
      risk_wrong: 'Einsatz dieses Modus bei Aufgaben, die auch nur minimale Expertise erfordern.',
      examples: ['Automatische Generierung kurzer Veranstaltungsbeschreibungen für einen Aggregator', 'Batch-Produktion von Werbetexten für A/B-Tests', 'Massenzuweisung von Tags und Metadaten für ein Medienarchiv'],
      related: ['С-17', 'С-22', 'С-23']
    },
    22: {
      title: 'Überwachtes schnelles Fließband',
      human_role: 'Schneller Auditor: hohes Tempo verkürzt die Prüfzeit, hohe Risiken machen diese Prüfung dennoch zwingend.',
      ai_role: 'Hochgeschwindigkeits-Produktionssystem mit integrierten Risikoindikatoren: markiert nicht standardisierte Fälle automatisch für priorisierte Überprüfung.',
      logic: 'Dies ist die schärfste Spannung innerhalb automatisierter Szenarien: Geschwindigkeit und hohe Risiken zugleich. Die Lösung liegt in intelligenter Aufsicht, die sich auf riskante Einheiten statt auf das gesamte Volumen konzentriert.',
      risk_correct: 'Das Risikomarkierungssystem selbst kann Fehler machen.',
      risk_wrong: 'Aufsicht wird zu einem formalen Ritual statt zu echter Kontrolle.',
      examples: ['Massive Lokalisierung rechtlich relevanter Inhalte unter engem Zeitrahmen', 'Dringende Produktion offizieller Krisenkommunikation aus Templates', 'Hochgeschwindigkeitsproduktion von Medieninhalten in einer regulierten Branche'],
      related: ['С-21', 'С-18']
    },
    23: {
      title: 'Dringende authoriale Produktion',
      human_role: 'Aktiver Autor in hohem Tempo: bewahrt die authoriale Stimme und reagiert schnell auf Vorschläge der KI.',
      ai_role: 'Reaktiver Produktionspartner: generiert rasch Optionen und passt sich der vom Autor gesetzten Richtung an.',
      logic: 'Kooperation ist der einzige Modus, der zugleich Geschwindigkeit und authoriale Kontrolle ermöglicht.',
      risk_correct: 'Unter Zeitdruck kann sich die authoriale Stimme in kooperativen Prozessen schneller glätten, als es auffällt.',
      risk_wrong: 'Wechsel in Automatisierung „weil keine Zeit da ist“.',
      examples: ['Dringende Veröffentlichung eines authorialen Beitrags unter Deadline', 'Schnelle Produktion von Inhalten für einen Livestream oder einen dringenden Newsletter', 'Express-Entwicklung einer visuellen Lösung für einen dringenden Post'],
      related: ['С-19', 'С-24', 'С-31']
    },
    24: {
      title: 'Dringende verantwortliche Autorschaft',
      human_role: 'Verantwortlicher Autor unter maximalem Druck: Geschwindigkeit mindert die Qualitätsanforderungen nicht, und hohe Risiken verlangen authoriale Präsenz.',
      ai_role: 'Schneller Präzisionspartner: hält das Tempo und sorgt für Transparenz in Bezug auf Sicherheitsgrade.',
      logic: 'Maximale Spannung in authorialen Umsetzungsszenarien. Ein Produktionstandem mit maximaler gegenseitiger Transparenz.',
      risk_correct: 'Überlastung — zu viele Entscheidungen pro Zeiteinheit unter hoher Verantwortung.',
      risk_wrong: 'Jede Schwächung authorialer Kontrolle kann ein teurer Fehler werden.',
      examples: ['Dringende Krisenkommunikation im Namen einer Führungsperson', 'Notfallmäßige Veröffentlichung einer bedeutenden authorialen Erklärung', 'Dringende Überarbeitung reichweitenstarker Inhalte vor der Ausstrahlung'],
      related: ['С-23', 'С-20', 'С-32']
    },
    25: {
      title: 'Expertenproduktion',
      human_role: 'Experte im Produktionsmodus: setzt spezialisiertes Wissen ein, ohne Zeit mit technisch einfachen Operationen verbringen zu wollen.',
      ai_role: 'Produktionsbeschleuniger für den Experten: übernimmt Routinearbeit und schlägt Standardlösungen für typische Elemente vor.',
      logic: 'Hohe Expertise blockiert Automatisierung, weil weiterhin Expertenurteil nötig ist; geringe Motivation blockiert Kooperation, weil kein Wunsch nach iterativem Dialog besteht.',
      risk_correct: 'Die KI kann nach und nach mehr übernehmen, als sie sollte, und damit die Expertise „verkümmern“ lassen.',
      risk_wrong: 'Wechsel in Kooperation — Expertenzeit wird in Iterationen gebunden, die auch instrumental lösbar wären.',
      examples: ['Produktion spezialisierter Inhalte durch einen erfahrenen Autor mit KI-Unterstützung', 'Erstellung technischer Dokumentation mit KI-automatisierten Template-Abschnitten', 'Entwicklung professioneller Designlösungen bei gleichzeitiger Beschleunigung von Routinetätigkeiten durch KI'],
      related: ['С-17', 'С-26', 'С-27']
    },
    26: {
      title: 'Präzisionsproduktion',
      human_role: 'Experte mit voller Verantwortung für das Ergebnis. Arbeitet methodisch und überprüft jedes kritische Element.',
      ai_role: 'Präziser Produktionsassistent mit Vorrang für Zuverlässigkeit: markiert nicht standardisierte Fälle und gewährleistet die Nachvollziehbarkeit von Entscheidungen.',
      logic: 'Ein klassisches Profil verantwortlicher Expertenproduktion. Entscheidend sind hier Präzision und Kontrolle, nicht Geschwindigkeit oder Dialog.',
      risk_correct: 'Übermäßige Abhängigkeit vom KI-Assistenten kann die Wachsamkeit des Experten schwächen.',
      risk_wrong: 'Wechsel in Automatisierung bei hohen Risiken — eine fatale Scheineinsparung.',
      examples: ['Finale Designentwicklung für die Herstellung eines physischen Produkts', 'Vorbereitung professioneller Dokumentation für eine Regulierungsbehörde', 'Produktion der Archiv- oder öffentlichen Version eines bedeutenden Projekts'],
      related: ['С-25', 'С-30']
    },
    27: {
      title: 'Authoriale Expertenproduktion',
      human_role: 'Meister im Prozess: ein Experte, für den persönliche Präsenz in jeder Entscheidung wichtig ist. Die KI verstärkt, ersetzt aber nicht.',
      ai_role: 'Intellektuelles Werkzeug in der Hand des Meisters: erweitert Fähigkeiten, ohne in den authorialen Prozess einzugreifen.',
      logic: 'Hohe Expertise und hohe Motivation ohne Zeitdruck ergeben das ideale Profil für tiefe Augmentation. Der Experte sucht Verstärkung, nicht Dialog.',
      risk_correct: 'Die KI schafft die Versuchung, „nur diesen einen Schritt“ auszulagern — und damit beginnt schleichender Kontrollverlust.',
      risk_wrong: 'Wechsel in Kooperation — der Experte gibt Initiative dort ab, wo er führen sollte.',
      examples: ['Produktion authorialer Inhalte durch einen erfahrenen Journalisten oder Schriftsteller', 'Schaffung eines komplexen Designobjekts mit KI-Unterstützung für technische Operationen', 'Entwicklung eines Bildungskurses mit KI-Hilfe für Strukturierung'],
      related: ['С-25', 'С-28', 'С-31']
    },
    28: {
      title: 'Verantwortliche Meisterschaft',
      human_role: 'Meister mit maximaler Verantwortung: Jede Entscheidung wird abgewogen, jedes Element geprüft. Der höchste Produktionsstandard.',
      ai_role: 'Disziplinierter Assistent: präzise, transparent und niemals über den delegierten Rahmen hinaus tätig.',
      logic: 'Dies ist Augmentation in ihrer anspruchsvollsten Form: Der Experte kontrolliert jede Entscheidung vollständig, und hohe Risiken machen diese Kontrolle zwingend.',
      risk_correct: 'Gefahr des Over-Engineering — ein übermäßig hoher Kontrollstandard für einzelne Operationen mit niedrigerem Einzelrisiko.',
      risk_wrong: 'Jede Reduktion expertischer Kontrolle unter hohen Risiken.',
      examples: ['Produktion eines Flaggschiffprodukts, das den Ruf eines Studios bestimmt', 'Endversion eines öffentlichen Projekts unter starker medialer Aufmerksamkeit', 'Verantwortliche kreative Arbeit unter dem Namen eines bekannten Autors'],
      related: ['С-27', 'С-12', 'С-32']
    },
    29: {
      title: 'Expertenbeschleunigung',
      human_role: 'Experte im Hochleistungsmodus: setzt spezialisiertes Wissen schnell und ohne unnötige Iterationen ein.',
      ai_role: 'Produktionsbeschleuniger: automatisiert alles, was kein Expertenurteil erfordert.',
      logic: 'Hohe Expertise, hohe Geschwindigkeit und geringe Motivation ergeben das effizienteste Augmentationsszenario.',
      risk_correct: 'Geschwindigkeit reduziert Tiefe — der Experte spart möglicherweise an Überprüfung, wo sie weiterhin nötig wäre.',
      risk_wrong: 'Wechsel in Automatisierung nach der Logik: „Die KI erledigt das schon.“',
      examples: ['Dringende Produktion technisch komplexer Inhalte durch einen erfahrenen Autor', 'Express-Entwicklung einer komplexen Designlösung unter harter Deadline', 'Schnelle Vorbereitung expertischen Materials zur Veröffentlichung'],
      related: ['С-25', 'С-30', 'С-31']
    },
    30: {
      title: 'Dringende Präzisionsproduktion',
      human_role: 'Experte unter doppeltem Druck von Geschwindigkeit und hohen Risiken. Richtet seine Aufmerksamkeit auf die kritischsten Kontrollpunkte.',
      ai_role: 'Maximal effizienter Produktionsassistent: arbeitet schnell und priorisiert jene Elemente, die menschliche Prüfung am dringendsten benötigen.',
      logic: 'Das angespannteste Augmentationsszenario in der Umsetzungsphase. Beschleunigte Expertenkontrolle bedeutet: Der Mensch prüft das Richtige, nicht alles.',
      risk_correct: 'Das System zur Priorisierung kritischer Punkte kann selbst irren.',
      risk_wrong: 'Wechsel in Automatisierung unter Druck — Verlust expertischer Kontrolle genau in dem Moment, in dem sie am nötigsten ist.',
      examples: ['Dringende Finalisierung eines Projekts mit hohem Risiko vor der Übergabe an den Kunden', 'Notfallmäßige Vorbereitung rechtlich oder reputationsbezogen sensibler Materialien', 'Dringende Umsetzung einer komplexen technischen Lösung unter unmittelbarer Frist'],
      related: ['С-29', 'С-26']
    },
    31: {
      title: 'Kooperative Expertenproduktion',
      human_role: 'Autor-Experte im aktiven Tandemmodus. Arbeitet mit der KI als Partner bei jeder bedeutenden Entscheidung zusammen.',
      ai_role: 'Aktiver Produktionspartner: erzeugt Optionen, passt sich Expertenfeedback an und beschleunigt Iterationen.',
      logic: 'Hohe Motivation und hohe Expertise verlangen aktive authoriale Präsenz im Produktionsprozess — das ist Kooperation. Hohes Tempo macht langsame Augmentation unpraktisch.',
      risk_correct: 'Schnelle kooperative Produktion kann die authoriale Stimme glätten.',
      risk_wrong: 'Wechsel in Automatisierung „weil es ja funktioniert“ — und damit ein unmerklicher Verlust von Autorschaft.',
      examples: ['Dringende Produktion bedeutender authorialer Inhalte', 'Schnelle Entwicklung einer komplexen kreativen Lösung mit authorialer Stimme', 'Hochgeschwindigkeits-Iterationen an einem Designsystem bei starker Team-Beteiligung'],
      related: ['С-27', 'С-15', 'С-32']
    },
    32: {
      title: 'Meister unter Druck',
      human_role: 'Autor-Experte mit maximaler Verantwortung unter extremem Druck. Alle Parameter stehen auf dem Höchstwert. Kooperation ist hier keine Option, sondern Notwendigkeit.',
      ai_role: 'Partner auf höchstem Vertrauensniveau: schnell, transparent, professionell diszipliniert. Übernimmt keine Initiative ohne ausdrückliche Aufforderung.',
      logic: 'Das Spiegelbild von Szenario 1 in der Matrix. Das anspruchsvollste aller 32 Szenarien: Kooperation unter maximalem Druck und maximaler Verantwortung.',
      risk_correct: 'Wenn extreme Anspannung zum Normalzustand wird — das Syndrom „immer im Modus 32“ kann zu professionellem Burnout führen.',
      risk_wrong: 'Kontrolle wird unter Druck gerade in dem Moment reduziert, in dem sie am dringendsten gebraucht wird.',
      examples: ['Dringende Finalisierung eines Flaggschiffprojekts unter dem Namen eines führenden Spezialisten', 'Kreative Krisenarbeit auf hohem Niveau mit unmittelbaren Folgen', 'Produktion bedeutenden authorialen Materials in Echtzeit für eine Live-Ausstrahlung'],
      related: ['С-31', 'С-28', 'С-16']
    }
  }
};