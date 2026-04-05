/** locales/fr.js — Français */
window.LOCALES = window.LOCALES || {};
window.LOCALES.fr = {

  meta: {
    title: '32 scénarios — Une classification de la collaboration humain-IA'
  },

  ui: {
    eyebrow: 'AI LAB · HSE School of Design · Vadim Bulgakov',
    title: {
      line1: '32 scénarios de collaboration',
      line2: 'entre humains et IA',
      line3: ' dans les industries créatives'
    },
    questionnaire: {
      intro_label: 'Trouvez votre scénario',
      intro_text: 'Répondez à 5 questions sur votre tâche — le système identifiera les scénarios correspondants.',
      q1: {
        label: 'S’agit-il d’une tâche de mise en œuvre ?',
        research: 'Non',
        impl:     'Oui'
      },
      q2: {
        label: 'Cette tâche exige-t-elle des connaissances spécialisées ou une expérience professionnelle ?',
        low:  'Non',
        high: 'Oui'
      },
      q3: {
        label: 'Cette tâche doit-elle être réalisée rapidement ?',
        low:  'Non',
        high: 'Oui'
      },
      q4: {
        label: 'Est-il important pour vous d’effectuer vous-même cette tâche ?',
        low:  'Non',
        high: 'Oui'
      },
      q5: {
        label: 'Une erreur dans cette tâche peut-elle coûter cher ?',
        low:  'Non',
        high: 'Oui'
      },
      showing:  'Affichage de ',
      of_total: ' sur 32',
      reset:    'Réinitialiser',
      apply:    'Appliquer'
    },
    modes: { aug: 'Augmentation', coop: 'Coopération', auto: 'Automatisation' },
    stages: { research: 'Exploration', impl: 'Réalisation' },
    search: { placeholder: 'Rechercher par titre, description, exemples…' },
    empty_state: 'Aucun scénario ne correspond aux réponses sélectionnées',
    card: {
      human_role: 'Rôle de l’humain',
      ai_role:    'Rôle de l’IA',
      expand:     'Plus',
      collapse:   'Moins'
    },
    modal: {
      close:              'Fermer',
      logic:              'Justification du choix du mode',
      risk_correct:       'Risques en cas d’application correcte',
      risk_wrong:         'Risques en cas d’application incorrecte',
      risk_correct_label: 'Mode correct',
      risk_wrong_label:   'Mode incorrect',
      examples:           'Exemples de tâches',
      related:            'Scénarios connexes'
    },
    graph: {
      page_title:   'Carte des scénarios',
      back:         '← Tous les scénarios',
      hint:         'Glisser · Défiler pour zoomer · Cliquer pour explorer',
      mode_filter:  'Mode :',
      stage_filter: 'Étape :',
      map_link:     'Carte des scénarios →'
    }
  },

  attr_chips: {
    expertise: { low: 'E−', high: 'E+' },
    speed: { low: 'V−', high: 'V+' },
    motivation: { low: 'M−', high: 'M+' },
    cost: { low: 'C−', high: 'C+' }
  },

  codes: {
    a: {
      1:  'Ex · E− · V− · M− · C−', 2:  'Ex · E− · V− · M− · C+',
      3:  'Ex · E− · V− · M+ · C−', 4:  'Ex · E− · V− · M+ · C+',
      5:  'Ex · E− · V+ · M− · C−', 6:  'Ex · E− · V+ · M− · C+',
      7:  'Ex · E− · V+ · M+ · C−', 8:  'Ex · E− · V+ · M+ · C+',
      9:  'Ex · E+ · V− · M− · C−', 10: 'Ex · E+ · V− · M− · C+',
      11: 'Ex · E+ · V− · M+ · C−', 12: 'Ex · E+ · V− · M+ · C+',
      13: 'Ex · E+ · V+ · M− · C−', 14: 'Ex · E+ · V+ · M− · C+',
      15: 'Ex · E+ · V+ · M+ · C−', 16: 'Ex · E+ · V+ · M+ · C+',
      17: 'Ré · E− · V− · M− · C−', 18: 'Ré · E− · V− · M− · C+',
      19: 'Ré · E− · V− · M+ · C−', 20: 'Ré · E− · V− · M+ · C+',
      21: 'Ré · E− · V+ · M− · C−', 22: 'Ré · E− · V+ · M− · C+',
      23: 'Ré · E− · V+ · M+ · C−', 24: 'Ré · E− · V+ · M+ · C+',
      25: 'Ré · E+ · V− · M− · C−', 26: 'Ré · E+ · V− · M− · C+',
      27: 'Ré · E+ · V− · M+ · C−', 28: 'Ré · E+ · V− · M+ · C+',
      29: 'Ré · E+ · V+ · M− · C−', 30: 'Ré · E+ · V+ · M− · C+',
      31: 'Ré · E+ · V+ · M+ · C−', 32: 'Ré · E+ · V+ · M+ · C+'
    }
  },

  scenarios: {
    1: {
      title: 'Exploration à l’aveugle',
      human_role: 'Définit la tâche et reçoit le résultat final. Formule la demande, fixe les paramètres de recherche et examine le résultat si nécessaire.',
      ai_role: 'Effectue une recherche large, agrège et structure les informations. Produit des synthèses, des collections de références et des panoramas thématiques.',
      logic: 'Une faible motivation signifie que la présence humaine dans le processus n’apporte pas de valeur supplémentaire. Une faible expertise et de faibles enjeux font de ce scénario un cas idéal de délégation.',
      risk_correct: 'Perte de nuances propres au projet — l’IA n’a pas accès au contexte implicite.',
      risk_wrong: 'Utiliser les résultats sans en vérifier l’exactitude ; prendre les hallucinations de l’IA pour des faits.',
      examples: ['Recherche initiale de références pour une direction esthétique inconnue', 'Vue d’ensemble des tendances dans une catégorie de niche pour un briefing préliminaire', 'Élaboration d’un glossaire terminologique pour un nouveau domaine'],
      related: ['С-02', 'С-03', 'С-09']
    },
    2: {
      title: 'Exploration avec filet de sécurité',
      human_role: 'Architecte du processus et auditeur du résultat. Définit les paramètres, les critères d’acceptation et effectue la vérification finale avant usage.',
      ai_role: 'Exécute la recherche de manière autonome dans les paramètres définis. Produit un résultat structuré et signale les zones d’incertitude et les lacunes potentielles.',
      logic: 'Le profil est identique au scénario 1, à l’exception du coût élevé de l’erreur. L’automatisation reste pertinente, mais exige une couche supplémentaire de contrôle.',
      risk_correct: 'Illusion de complétude — l’IA ne sait pas ce qu’elle ne sait pas ; des lacunes critiques peuvent passer inaperçues.',
      risk_wrong: 'Sauter la vérification finale sous la pression du temps ; confondre un ton assuré avec de l’exactitude.',
      examples: ['Analyse du paysage concurrentiel pour une présentation stratégique à un client', 'Audit de marché préliminaire avant un pitch d’investissement', 'Collecte du cadre réglementaire pour un projet dans un secteur régulé'],
      related: ['С-01', 'С-04', 'С-10']
    },
    3: {
      title: 'Co-construction du sens',
      human_role: 'Participant actif du dialogue : oriente la recherche, réagit aux suggestions de l’IA et apporte son expérience subjective ainsi que son intuition.',
      ai_role: 'Interlocuteur et générateur d’alternatives. Propose des directions peu évidentes, pose des questions de clarification et élargit le champ au-delà de l’évidence.',
      logic: 'La forte motivation est ici le facteur décisif. Même avec une expertise formelle faible, la personne doit rester dans le processus — le résultat doit refléter une perspective personnelle et non une sortie moyenne du modèle.',
      risk_correct: 'Effet de chambre d’écho — le modèle s’adapte trop au langage de la personne et cesse de produire des pistes réellement inattendues.',
      risk_wrong: 'Passer à un mode de simple augmentation (« donne-moi juste quelques options ») et perdre le dialogue vivant qui fait la valeur de ce mode.',
      examples: ['Explorer un langage visuel pour le nouveau projet personnel d’un jeune designer', 'Trouver un cadre conceptuel pour un projet artistique non commercial', 'Explorer conjointement un sujet culturel de niche pour un futur scénario'],
      related: ['С-01', 'С-04', 'С-07']
    },
    4: {
      title: 'Dialogue prudent',
      human_role: 'Participant principal avec une vigilance critique renforcée. Des enjeux élevés exigent que chaque conclusion importante soit vérifiée avant usage.',
      ai_role: 'Partenaire qui élargit le champ en mode haute transparence : indique le niveau de confiance, fait émerger les contradictions et propose des interprétations alternatives.',
      logic: 'Une forte implication exige la coopération. Le coût élevé de l’erreur rend ce mode plus strict : les itérations servent autant à générer des idées qu’à les vérifier.',
      risk_correct: 'Ralentissement du processus dû à une vérification excessive de chaque étape.',
      risk_wrong: 'Passage à l’automatisation sous pression — perte de contrôle précisément là où il est essentiel.',
      examples: ['Recherche pour une stratégie de repositionnement d’une grande marque sans expertise sectorielle', 'Fondation conceptuelle d’un programme éducatif destiné à être défendu publiquement', 'Recherche initiale pour un projet documentaire à forts enjeux publics'],
      related: ['С-03', 'С-12']
    },
    5: {
      title: 'Exploration rapide',
      human_role: 'Formule la demande et consomme le résultat. Énonce la tâche et reçoit une sortie structurée.',
      ai_role: 'Agrégateur d’information à grande vitesse. Travaille rapidement avec une large couverture. La priorité est la vitesse et la complétude, non la précision de chaque élément.',
      logic: 'Une forte contrainte de vitesse et une faible motivation orientent naturellement vers l’automatisation. La personne a besoin d’un résultat rapide, sans s’impliquer dans le processus.',
      risk_correct: 'Superficialité — une collecte rapide peut laisser échapper des nuances importantes.',
      risk_wrong: 'Utiliser un résultat rapide là où une analyse en profondeur est nécessaire.',
      examples: ['Recherche rapide de références avant un briefing client', 'Compilation d’une liste de fournisseurs potentiels pour une tâche de production', 'Vue d’ensemble des publications récentes pour une diapositive introductive'],
      related: ['С-01', 'С-06', 'С-07']
    },
    6: {
      title: 'Exploration urgente à forts enjeux',
      human_role: 'Vérificateur rapide du résultat. Il n’y a pas de temps pour une implication approfondie, mais la responsabilité du résultat demeure.',
      ai_role: 'Travaille à vitesse maximale, priorise les sources fiables et signale explicitement les niveaux de confiance ainsi que les principales lacunes.',
      logic: 'La vitesse et les enjeux élevés entrent ici en tension. La motivation est faible, donc l’implication active n’est pas réaliste. Mais le coût élevé de l’erreur rend la vérification finale indispensable.',
      risk_correct: 'La pression temporelle dégrade la qualité de la vérification — la couche de validation doit être protégée contre l’argument « nous n’avons pas le temps ». ',
      risk_wrong: 'Automatisation totale sans validation — une erreur coûteuse dans un contexte urgent et à forts enjeux.',
      examples: ['Collecte urgente de données avant une séance de communication de crise', 'Vérification rapide des faits pour un pitch de haut niveau', 'Analyse concurrentielle urgente avant des négociations'],
      related: ['С-05', 'С-08']
    },
    7: {
      title: 'Sprint avec un partenaire',
      human_role: 'Participant actif dans une boucle d’itération rapide. Réagit aux propositions de l’IA, élimine les pistes non pertinentes et conserve le cap stratégique malgré le rythme élevé.',
      ai_role: 'Générateur réactif en temps réel. Propose rapidement des options et ajuste la direction en fonction du retour humain.',
      logic: 'Une forte motivation exige une présence humaine dans la boucle malgré la vitesse. La coopération prend ici la forme d’un dialogue rapide dans lequel la personne donne le cap.',
      risk_correct: 'Résultats de surface — la coopération rapide produit de l’ampleur plutôt que de la profondeur.',
      risk_wrong: 'Basculer vers l’automatisation pure « parce qu’il n’y a pas le temps » et perdre la voix d’auteur.',
      examples: ['Brainstorming de directions conceptuelles pour un nouveau brief en un seul bloc de travail', 'Recherche rapide d’angles narratifs pour un contenu éditorial sous deadline', 'Génération de plusieurs directions visuelles pour des tests rapides'],
      related: ['С-03', 'С-08', 'С-15']
    },
    8: {
      title: 'Dialogue urgent',
      human_role: 'Leader sous pression. Garde un regard critique à grande vitesse et sous de forts enjeux.',
      ai_role: 'Travaille en mode soutien d’urgence : génère rapidement des directions et marque de façon transparente les niveaux de confiance.',
      logic: 'La vitesse et les enjeux élevés poussent vers l’automatisation, mais la motivation bloque ce déplacement. Le mode repose sur des itérations courtes et une vérification explicite.',
      risk_correct: 'Sous stress, il devient facile d’accepter des réponses convaincantes de l’IA sans les vérifier.',
      risk_wrong: 'Tout basculement vers l’automatisation peut ici devenir une erreur coûteuse.',
      examples: ['Recherche express avant une réunion clé avec un partenaire potentiel', 'Recherche urgente d’un angle conceptuel pour une campagne de crise', 'Recherche rapide de précédents pour justifier une décision peu conventionnelle face à un client'],
      related: ['С-07', 'С-04', 'С-16']
    },
    9: {
      title: 'Vue d’ensemble experte',
      human_role: 'Expert-navigateur : définit des paramètres de recherche très spécifiques. Lit le résultat avec un regard augmenté et perçoit ce que l’IA a pu manquer.',
      ai_role: 'Élargit la couverture : traite de grands volumes de matériau plus vite qu’un expert seul, tout en structurant et en agrégeant.',
      logic: 'Une expertise élevée est nécessaire à la qualité — l’IA élargit, elle ne remplace pas. Une motivation faible signifie que l’expert ne souhaite pas s’immerger lui-même dans le processus de recherche.',
      risk_correct: 'L’expert peut prendre l’organisation du matériau produite par l’IA pour une interprétation réelle.',
      risk_wrong: 'Sauter l’étape de vérification parce que l’expert « connaît déjà le sujet ».',
      examples: ['Collecte de littérature académique sur un sujet spécialisé pour un projet de recherche', 'Audit de solutions existantes dans un domaine technique étroit pour la R&D', 'Construction d’un glossaire élargi pour une discipline professionnelle'],
      related: ['С-01', 'С-10', 'С-11']
    },
    10: {
      title: 'Audit expert',
      human_role: 'Expert avec un niveau élevé de responsabilité. Définit des critères stricts de qualité et vérifie l’exactitude — l’erreur coûte cher.',
      ai_role: 'Assistant structuré avec marquage explicite des incertitudes. Priorise la fiabilité des sources et signale les données contradictoires.',
      logic: 'Une expertise élevée et des enjeux élevés produisent une augmentation avec un niveau de contrôle renforcé. La motivation est faible, mais la responsabilité du résultat final est totale.',
      risk_correct: 'Une prudence excessive peut ralentir le travail.',
      risk_wrong: 'Passer à la coopération lorsque le temps manque et réduire le contrôle dans un contexte à forts enjeux.',
      examples: ['Recherche sur l’environnement réglementaire nécessaire au lancement d’un nouveau produit média', 'Analyse de documentation technique pour un grand projet de production', 'Recherche académique destinée à une publication dans une revue à comité de lecture'],
      related: ['С-09', 'С-14']
    },
    11: {
      title: 'Recherche approfondie avec présence',
      human_role: 'Chercheur avec une position d’auteur. Il ne se contente pas de consommer de l’information : il construit un point de vue. L’IA élargit le champ, mais la direction est définie par l’humain.',
      ai_role: 'Élargisseur intellectuel : propose des connexions inattendues, des thèmes voisins et des perspectives alternatives.',
      logic: 'L’augmentation maintient l’humain dans un rôle d’auteur ; l’IA devient une loupe intellectuelle. Avec une expertise élevée, un usage dirigé apporte souvent plus qu’un dialogue itératif ouvert.',
      risk_correct: 'L’IA peut proposer tellement de connexions inattendues que le focus de la recherche se dilue.',
      risk_wrong: 'Passer à la coopération et affaiblir la position d’auteur.',
      examples: ['Recherche conceptuelle pour le projet artistique personnel d’un auteur expérimenté', 'Recherche académique dans une discipline adjacente', 'Développement d’un cadre théorique pour un nouveau cours'],
      related: ['С-09', 'С-12', 'С-15']
    },
    12: {
      title: 'Recherche pondérée',
      human_role: 'Auteur responsable : combine expertise, implication et conscience d’enjeux élevés. Chaque conclusion est vérifiée et chaque direction est soigneusement pesée.',
      ai_role: 'Assistant précis : marque l’incertitude, fournit des sources et évite les synthèses lorsque les données sont contradictoires.',
      logic: 'Ici, tous les paramètres liés à la responsabilité se concentrent au maximum, sans pression de vitesse. L’augmentation est la configuration la plus professionnelle, avec un contrôle entièrement conservé par l’humain.',
      risk_correct: 'Le perfectionnisme peut freiner l’avancement.',
      risk_wrong: 'La fatigue peut faire glisser le processus vers l’automatisation et provoquer une perte de contrôle précisément là où il compte le plus.',
      examples: ['Base de recherche pour une thèse ou un travail académique public', 'Analyse stratégique pour un grand projet culturel ou commercial', 'Fondement conceptuel d’une décision de design qui sera défendue publiquement'],
      related: ['С-11', 'С-10', 'С-16']
    },
    13: {
      title: 'Sprint expert',
      human_role: 'Expert en mode balayage rapide. Formule des requêtes précises, évalue rapidement la pertinence des résultats et avance.',
      ai_role: 'Agrégateur haute vitesse avec priorisation selon des critères experts.',
      logic: 'Une expertise élevée, une grande vitesse et une faible motivation en font un scénario classique d’augmentation. L’IA accélère le travail de l’expert sans le remplacer.',
      risk_correct: 'La vitesse réduit la profondeur — l’expert peut manquer une nuance importante que l’IA n’a pas signalée.',
      risk_wrong: 'Basculer vers l’automatisation — l’expert cesse de vérifier et s’en remet de plus en plus à l’intuition.',
      examples: ['Revue rapide de concurrents avant un pitch', 'Recherche urgente de précédents pour une argumentation professionnelle', 'Audit express de solutions existantes pour un briefing technique'],
      related: ['С-09', 'С-14', 'С-15']
    },
    14: {
      title: 'Audit expert urgent',
      human_role: 'Expert sous pression avec une forte responsabilité. Définit des critères précis et valide rapidement les résultats clés.',
      ai_role: 'Assistant maximalement efficace sous contrainte : priorise la fiabilité et signale l’incertitude.',
      logic: 'Forts enjeux à grande vitesse. L’augmentation reste nécessaire parce que l’expertise l’est aussi. Moins d’itérations, davantage de concentration sur la couche finale de validation.',
      risk_correct: 'Fausse impression de suffisance — « nous avons vérifié, l’IA a aidé, donc c’est bon ». ',
      risk_wrong: 'Sauter la couche de validation au nom de la vitesse.',
      examples: ['Analyse experte urgente avant la signature d’un partenariat stratégique', 'Vérification d’urgence de la base factuelle d’un discours public de haut niveau', 'Audit rapide de recherche avant la publication d’un contenu à forte portée'],
      related: ['С-13', 'С-16']
    },
    15: {
      title: 'Coopération experte',
      human_role: 'Expert en mode de co-autorat actif. Pose des questions complexes et évalue les propositions inattendues de l’IA depuis une position experte.',
      ai_role: 'Partenaire de pensée à égalité : fait apparaître des connexions que l’expert pourrait ne pas voir à cause de la “vision tunnel” de la spécialisation.',
      logic: 'Une forte motivation combinée à une forte expertise ne relève plus de l’augmentation. La coopération crée ici une synergie entre jugement expert et propositions non évidentes de l’IA.',
      risk_correct: 'L’expert peut se mettre à “enseigner” au modèle au lieu de travailler avec lui, ce qui fait perdre du rythme.',
      risk_wrong: 'Revenir à l’augmentation et perdre précisément ce qui rendait la coopération utile.',
      examples: ['Développement rapide de concepts pour une compétition à forte voix d’auteur', 'Brainstorming d’équipe experte avec l’IA comme “troisième participant”', 'Développement express de plusieurs directions conceptuelles fortes pour les comparer'],
      related: ['С-11', 'С-07', 'С-16']
    },
    16: {
      title: 'Dialogue de crise expert',
      human_role: 'Expert sous pression maximale. Une forte motivation, une forte expertise et des enjeux élevés exigent une vigilance critique constante.',
      ai_role: 'Partenaire rapide, transparent et précis. Propose des options avec un marquage explicite de la confiance et aide à structurer la pensée sous pression.',
      logic: 'Tous les paramètres sont à leur maximum. La coopération devient inévitable : la motivation et l’expertise bloquent l’automatisation, et les enjeux empêchent de transférer l’initiative à l’IA.',
      risk_correct: 'Surcharge cognitive — trop d’informations entrantes à grande vitesse et sous forte responsabilité.',
      risk_wrong: 'Toute réduction du niveau de contrôle peut conduire à une erreur grave.',
      examples: ['Recherche conceptuelle urgente pour un briefing de crise avec un client majeur', 'Élaboration express d’une position sur une question publique sensible avec publication immédiate', 'Travail analytique urgent pour un concours ou un appel d’offres à forts enjeux'],
      related: ['С-15', 'С-08', 'С-32']
    },
    17: {
      title: 'Chaîne de production',
      human_role: 'Architecte du système : configure les paramètres, définit des modèles, fixe les critères de qualité et vérifie régulièrement des échantillons.',
      ai_role: 'Exécutant de production : accomplit les tâches selon les paramètres définis, maintient une qualité constante et permet de passer à l’échelle.',
      logic: 'Scénario classique d’automatisation pure. Aucun paramètre n’exige ici une présence humaine continue dans le cycle de production.',
      risk_correct: 'Dérive de qualité — sans audits réguliers, le système s’éloigne progressivement du standard.',
      risk_wrong: 'Lancer sans modèle clair — automatiser une tâche mal définie produit une médiocrité à grande échelle.',
      examples: ['Génération massive de descriptions de produits pour un catalogue e-commerce', 'Création automatique de posts standardisés à partir d’un plan de contenu', 'Adaptation par lot de matériaux visuels à des formats standard'],
      related: ['С-18', 'С-19', 'С-25']
    },
    18: {
      title: 'Chaîne de production supervisée',
      human_role: 'Auditeur de production : vérifie régulièrement un échantillon des résultats et ajuste le système en cas d’écart.',
      ai_role: 'Système de production avec métriques étendues : enregistre les écarts et signale les unités à faible confiance pour une vérification prioritaire.',
      logic: 'Le profil est identique à celui du scénario 17, mais le coût élevé de l’erreur exige une supervision structurée. La logique économique de l’automatisation demeure, mais une couche d’audit est ajoutée.',
      risk_correct: 'L’auditeur peut laisser passer une erreur systémique en ne vérifiant qu’un échantillon.',
      risk_wrong: 'Réduire la supervision sous la pression du volume ou des délais.',
      examples: ['Production de documents juridiquement significatifs à partir de modèles', 'Localisation massive pour des marchés à risque réputationnel', 'Production automatisée de rapports financiers dans un format prescrit'],
      related: ['С-17', 'С-21']
    },
    19: {
      title: 'Production d’auteur',
      human_role: 'Auteur au cœur du processus : l’IA rend sa présence plus productive. L’humain dirige, édite et prend les décisions d’auteur.',
      ai_role: 'Accélérateur de production : réduit l’effort lié aux opérations techniquement simples et propose des options à l’auteur.',
      logic: 'Une forte motivation signifie que la valeur du résultat dépend de l’auteur humain. L’augmentation rend la production plus fluide tout en maintenant la personne dans un rôle d’auteur.',
      risk_correct: 'La voix d’auteur peut progressivement se lisser sous l’influence des suggestions de l’IA.',
      risk_wrong: 'Passer à la coopération ou à l’automatisation et perdre le contrôle d’auteur.',
      examples: ['Blog personnel avec assistant IA pour l’édition et la structuration', 'Production de contenu pour la marque personnelle d’un spécialiste junior', 'Création de matériel illustratif pour un projet non commercial'],
      related: ['С-17', 'С-20', 'С-23']
    },
    20: {
      title: 'Production d’auteur responsable',
      human_role: 'Auteur responsable : forte motivation et forts enjeux se combinent pour produire un niveau maximal de contrôle. Chaque élément passe par une décision humaine.',
      ai_role: 'Assistant attentif : prend en charge les opérations techniques, propose des options et marque explicitement l’incertitude.',
      logic: 'L’augmentation est le seul mode qui offre ici le bon équilibre : productivité de l’IA et responsabilité d’auteur assumée par l’humain.',
      risk_correct: 'Le perfectionnisme peut ralentir la production.',
      risk_wrong: 'Basculer vers l’automatisation par fatigue et perdre le contrôle exactement là où il compte le plus.',
      examples: ['Production de contenus publics qui façonnent la réputation de l’auteur', 'Création de matériaux pédagogiques sous un nom personnel pour un large public', 'Développement de contenu de marque avec des exigences élevées en matière de ton et de voix'],
      related: ['С-19', 'С-24']
    },
    21: {
      title: 'Chaîne de production rapide',
      human_role: 'Lance le processus et reçoit le résultat. Implication minimale dans le cycle de production.',
      ai_role: 'Exécutant de production à grande vitesse. La priorité est donnée au volume et à la rapidité dans les paramètres définis.',
      logic: 'La vitesse combinée à des valeurs faibles sur tous les autres attributs produit le scénario d’automatisation le plus pur.',
      risk_correct: 'La vitesse masque les erreurs systémiques jusqu’à leur passage à l’échelle.',
      risk_wrong: 'Appliquer ce mode à des tâches qui exigent ne serait-ce qu’un minimum d’expertise.',
      examples: ['Génération automatique de brèves descriptions d’événements pour un agrégateur', 'Production par lot de textes publicitaires pour des tests A/B', 'Attribution massive de tags et de métadonnées à une archive média'],
      related: ['С-17', 'С-22', 'С-23']
    },
    22: {
      title: 'Chaîne de production rapide supervisée',
      human_role: 'Auditeur rapide : la vitesse réduit le temps de revue, mais des enjeux élevés rendent cette revue obligatoire.',
      ai_role: 'Système de production rapide doté d’indicateurs de risque intégrés : signale automatiquement les cas non standard pour une vérification prioritaire.',
      logic: 'C’est la tension la plus aiguë des scénarios d’automatisation : vitesse et enjeux élevés en même temps. La solution réside dans une supervision intelligente centrée sur les unités à risque plutôt que sur tout le volume.',
      risk_correct: 'Le système de signalement des risques peut lui-même se tromper.',
      risk_wrong: 'La supervision devient un rituel formel au lieu d’un véritable contrôle.',
      examples: ['Localisation massive de contenus juridiquement sensibles sous des délais serrés', 'Production urgente de communications officielles de crise à partir de modèles', 'Production rapide de contenus média dans un secteur régulé'],
      related: ['С-21', 'С-18']
    },
    23: {
      title: 'Production d’auteur urgente',
      human_role: 'Auteur actif à haut rythme : préserve sa voix d’auteur et réagit rapidement aux propositions de l’IA.',
      ai_role: 'Partenaire de production réactif : génère rapidement des options et s’adapte à la direction donnée par l’auteur.',
      logic: 'La coopération est le seul mode qui permette à la fois la vitesse et le contrôle d’auteur.',
      risk_correct: 'Sous la pression du temps, la voix d’auteur peut se lisser plus vite qu’on ne s’en aperçoit.',
      risk_wrong: 'Passer à l’automatisation « parce qu’il n’y a pas le temps ».',
      examples: ['Publication urgente d’un contenu d’auteur sous deadline', 'Production rapide de contenus pour un direct ou une newsletter urgente', 'Développement express d’une solution visuelle pour un post urgent'],
      related: ['С-19', 'С-24', 'С-31']
    },
    24: {
      title: 'Autorité urgente et responsable',
      human_role: 'Auteur responsable sous pression maximale : la vitesse ne réduit pas les exigences de qualité, et de forts enjeux exigent une présence d’auteur.',
      ai_role: 'Partenaire de précision rapide : maintient le rythme et garantit la transparence sur les niveaux de confiance.',
      logic: 'Tension maximale dans les scénarios de réalisation authoriale. Un tandem de production avec une transparence mutuelle maximale.',
      risk_correct: 'Surcharge — trop de décisions par unité de temps sous forte responsabilité.',
      risk_wrong: 'Tout affaiblissement du contrôle d’auteur peut se transformer en erreur coûteuse.',
      examples: ['Communication de crise urgente publiée sous le nom d’un dirigeant', 'Publication d’urgence d’une déclaration d’auteur importante', 'Affinage urgent de contenus à forte audience avant diffusion'],
      related: ['С-23', 'С-20', 'С-32']
    },
    25: {
      title: 'Production experte',
      human_role: 'Expert en mode production : mobilise des connaissances spécialisées sans vouloir perdre du temps sur des opérations techniquement simples.',
      ai_role: 'Accélérateur de production pour l’expert : prend en charge les routines et propose des solutions standard pour les éléments typiques.',
      logic: 'Une expertise élevée bloque l’automatisation, car le jugement expert reste nécessaire ; une motivation faible bloque la coopération, faute de désir de dialogue itératif.',
      risk_correct: 'L’IA peut progressivement prendre en charge plus qu’elle ne le devrait, ce qui atrophie l’expertise.',
      risk_wrong: 'Passer à la coopération et gaspiller du temps expert dans des itérations qui auraient pu être résolues de manière instrumentale.',
      examples: ['Production de contenus spécialisés par un auteur expérimenté avec l’aide de l’IA', 'Rédaction de documentation technique avec sections modèles automatisées par l’IA', 'Création de solutions de design professionnelles tout en accélérant les routines grâce à l’IA'],
      related: ['С-17', 'С-26', 'С-27']
    },
    26: {
      title: 'Production de précision',
      human_role: 'Expert pleinement responsable du résultat. Travaille de manière méthodique et vérifie chaque élément critique.',
      ai_role: 'Assistant de production précis, avec priorité à la fiabilité : signale les cas non standard et garantit la traçabilité des décisions.',
      logic: 'Profil classique de production experte responsable. Ce qui compte ici, c’est la précision et le contrôle, non la vitesse ni le dialogue.',
      risk_correct: 'Une dépendance excessive à l’assistant IA peut réduire la vigilance experte.',
      risk_wrong: 'Passer à l’automatisation dans un contexte à forts enjeux — une fausse économie potentiellement fatale.',
      examples: ['Développement final d’un design pour la fabrication d’un produit physique', 'Préparation de documentation professionnelle pour un régulateur', 'Production de la version d’archive ou publique d’un projet important'],
      related: ['С-25', 'С-30']
    },
    27: {
      title: 'Production experte authoriale',
      human_role: 'Maître dans le processus : expert pour qui la présence personnelle dans chaque décision compte. L’IA amplifie sans remplacer.',
      ai_role: 'Outil intellectuel dans la main du maître : étend les capacités sans interférer avec le processus d’auteur.',
      logic: 'Une expertise élevée et une forte motivation sans pression temporelle constituent le profil idéal de l’augmentation profonde. L’expert cherche un renforcement, non un dialogue.',
      risk_correct: 'L’IA crée la tentation de déléguer « juste cette opération », ouvrant la voie à une perte progressive de contrôle.',
      risk_wrong: 'Passer à la coopération et céder l’initiative là où l’expert devrait diriger.',
      examples: ['Production de contenus d’auteur par un journaliste ou un écrivain expérimenté', 'Création d’un objet de design complexe avec soutien IA pour les opérations techniques', 'Développement d’un cours avec l’aide de l’IA pour la structuration'],
      related: ['С-25', 'С-28', 'С-31']
    },
    28: {
      title: 'Maîtrise responsable',
      human_role: 'Maître avec responsabilité maximale : chaque décision est pesée, chaque élément vérifié. Le plus haut standard de production.',
      ai_role: 'Assistant discipliné : précis, transparent, et n’assume jamais plus que ce qui lui a été délégué.',
      logic: 'Il s’agit de l’augmentation dans sa forme la plus exigeante : l’expert contrôle pleinement chaque décision, et les enjeux élevés rendent ce contrôle obligatoire.',
      risk_correct: 'Risque de sur-ingénierie — appliquer un niveau de contrôle excessif à des opérations individuellement peu risquées.',
      risk_wrong: 'Toute réduction du contrôle expert dans un contexte de forts enjeux.',
      examples: ['Production d’un produit phare qui définit la réputation d’un studio', 'Version finale d’un projet public sous forte attention médiatique', 'Travail créatif responsable publié sous le nom d’un auteur reconnu'],
      related: ['С-27', 'С-12', 'С-32']
    },
    29: {
      title: 'Accélération experte',
      human_role: 'Expert en mode haute production : mobilise rapidement un savoir spécialisé, sans itérations inutiles.',
      ai_role: 'Accélérateur de production : automatise tout ce qui ne requiert pas de jugement expert.',
      logic: 'Une expertise élevée, une grande vitesse et une faible motivation en font le scénario d’augmentation le plus efficace.',
      risk_correct: 'La vitesse réduit la profondeur — l’expert peut rogner sur la vérification là où elle reste nécessaire.',
      risk_wrong: 'Passer à l’automatisation avec la logique suivante : « l’IA peut bien s’en charger ». ',
      examples: ['Production urgente de contenus techniquement complexes par un auteur expérimenté', 'Développement express d’une solution de design complexe sous une deadline très serrée', 'Préparation rapide de matériel expert pour publication'],
      related: ['С-25', 'С-30', 'С-31']
    },
    30: {
      title: 'Production urgente de précision',
      human_role: 'Expert soumis à une double pression de vitesse et de forts enjeux. Concentre son attention sur les points de contrôle les plus critiques.',
      ai_role: 'Assistant de production maximalement efficace : travaille vite et priorise les éléments qui nécessitent le plus une relecture humaine.',
      logic: 'Le scénario d’augmentation le plus tendu dans la phase de réalisation. Le contrôle expert accéléré signifie que l’humain vérifie ce qu’il faut, et non tout.',
      risk_correct: 'Le système de priorisation des points critiques peut lui-même se tromper.',
      risk_wrong: 'Basculer vers l’automatisation sous pression et perdre le contrôle expert précisément lorsqu’il est le plus nécessaire.',
      examples: ['Finalisation urgente d’un projet à forts enjeux avant livraison au client', 'Préparation d’urgence de matériaux juridiquement ou réputationnellement sensibles', 'Mise en œuvre urgente d’une solution technique complexe sous une échéance immédiate'],
      related: ['С-29', 'С-26']
    },
    31: {
      title: 'Coopération de production experte',
      human_role: 'Auteur-expert en mode tandem actif. Travaille avec l’IA comme avec un partenaire à chaque décision importante.',
      ai_role: 'Partenaire de production actif : génère des options, s’adapte au retour expert et accélère l’itération.',
      logic: 'Une forte motivation et une forte expertise exigent une présence authoriale active dans le processus de production — c’est cela, la coopération. Une vitesse élevée rend l’augmentation lente peu praticable.',
      risk_correct: 'Une production coopérative menée à haut rythme peut lisser la voix d’auteur.',
      risk_wrong: 'Passer à l’automatisation « parce que cela fonctionne » et perdre imperceptiblement l’autorat.',
      examples: ['Production urgente d’un contenu d’auteur important', 'Développement rapide d’une solution créative complexe avec une voix d’auteur', 'Développement itératif à grande vitesse d’un système de design avec forte implication d’équipe'],
      related: ['С-27', 'С-15', 'С-32']
    },
    32: {
      title: 'Maître sous pression',
      human_role: 'Auteur-expert avec une responsabilité maximale sous pression extrême. Tous les paramètres sont à leur maximum. La coopération n’est pas un choix ici : c’est une nécessité.',
      ai_role: 'Partenaire de confiance maximale : rapide, transparent, professionnellement discipliné. Ne prend pas l’initiative sans demande explicite.',
      logic: 'L’image miroir du scénario 1 dans la matrice. Le plus exigeant des 32 scénarios : la coopération sous pression maximale et sous responsabilité maximale.',
      risk_correct: 'Lorsque la tension extrême devient la norme — le syndrome du « toujours en mode 32 » peut conduire à l’épuisement professionnel.',
      risk_wrong: 'Réduire le niveau de contrôle sous pression au moment exact où ce contrôle est le plus nécessaire.',
      examples: ['Finalisation urgente d’un projet phare sous le nom d’un spécialiste de premier plan', 'Travail créatif de crise de haut niveau avec conséquences immédiates', 'Production en temps réel d’un contenu d’auteur important pour une diffusion en direct'],
      related: ['С-31', 'С-28', 'С-16']
    }
  }
};