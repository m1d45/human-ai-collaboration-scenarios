/** locales/en.js — English */
window.LOCALES = window.LOCALES || {};
window.LOCALES.en = {

  meta: {
    title: '32 Scenarios — A Classification of Human-AI Collaboration'
  },

  ui: {
    eyebrow: 'AI LAB · HSE School of Design · Vadim Bulgakov',
    title: {
      line1: '32 scenarios of collaboration',
      line2: 'between humans and AI',
      line3: ' in the creative industries'
    },
    questionnaire: {
      intro_label: 'Find your scenario',
      intro_text: 'Answer 5 questions about your task — the system will identify the matching scenarios.',
      q1: {
        label: 'Is this an implementation task?',
        research: 'No',
        impl:     'Yes'
      },
      q2: {
        label: 'Does this task require specialised knowledge or professional experience?',
        low:  'No',
        high: 'Yes'
      },
      q3: {
        label: 'Does this task need to be done quickly?',
        low:  'No',
        high: 'Yes'
      },
      q4: {
        label: 'Is it important for you to do this task yourself?',
        low:  'No',
        high: 'Yes'
      },
      q5: {
        label: 'Could a mistake in this task be costly?',
        low:  'No',
        high: 'Yes'
      },
      showing:  'Showing ',
      of_total: ' of 32',
      reset:    'Reset',
      apply:    'Apply'
    },
    modes: { aug: 'Augmentation', coop: 'Cooperation', auto: 'Automation' },
    stages: { research: 'Exploration', impl: 'Implementation' },
    search: { placeholder: 'Search by title, description, examples…' },
    empty_state: 'No scenarios match the selected answers',
    card: {
      human_role: 'Human role',
      ai_role:    'AI role',
      expand:     'More',
      collapse:   'Less'
    },
    modal: {
      close:              'Close',
      logic:              'Mode selection rationale',
      risk_correct:       'Risks when applied correctly',
      risk_wrong:         'Risks when applied incorrectly',
      risk_correct_label: 'Correct mode',
      risk_wrong_label:   'Wrong mode',
      examples:           'Task examples',
      related:            'Related scenarios'
    }
  },

  attr_chips: {
    expertise: { low: 'E−', high: 'E+' },
    speed: { low: 'Sp−', high: 'Sp+' },
    motivation: { low: 'Mo−', high: 'Mo+' },
    cost: { low: 'Co−', high: 'Co+' }
  },

  codes: {
    a: {
      1:  'Ex · E− · Sp− · Mo− · Co−', 2:  'Ex · E− · Sp− · Mo− · Co+',
      3:  'Ex · E− · Sp− · Mo+ · Co−', 4:  'Ex · E− · Sp− · Mo+ · Co+',
      5:  'Ex · E− · Sp+ · Mo− · Co−', 6:  'Ex · E− · Sp+ · Mo− · Co+',
      7:  'Ex · E− · Sp+ · Mo+ · Co−', 8:  'Ex · E− · Sp+ · Mo+ · Co+',
      9:  'Ex · E+ · Sp− · Mo− · Co−', 10: 'Ex · E+ · Sp− · Mo− · Co+',
      11: 'Ex · E+ · Sp− · Mo+ · Co−', 12: 'Ex · E+ · Sp− · Mo+ · Co+',
      13: 'Ex · E+ · Sp+ · Mo− · Co−', 14: 'Ex · E+ · Sp+ · Mo− · Co+',
      15: 'Ex · E+ · Sp+ · Mo+ · Co−', 16: 'Ex · E+ · Sp+ · Mo+ · Co+',
      17: 'Im · E− · Sp− · Mo− · Co−', 18: 'Im · E− · Sp− · Mo− · Co+',
      19: 'Im · E− · Sp− · Mo+ · Co−', 20: 'Im · E− · Sp− · Mo+ · Co+',
      21: 'Im · E− · Sp+ · Mo− · Co−', 22: 'Im · E− · Sp+ · Mo− · Co+',
      23: 'Im · E− · Sp+ · Mo+ · Co−', 24: 'Im · E− · Sp+ · Mo+ · Co+',
      25: 'Im · E+ · Sp− · Mo− · Co−', 26: 'Im · E+ · Sp− · Mo− · Co+',
      27: 'Im · E+ · Sp− · Mo+ · Co−', 28: 'Im · E+ · Sp− · Mo+ · Co+',
      29: 'Im · E+ · Sp+ · Mo− · Co−', 30: 'Im · E+ · Sp+ · Mo− · Co+',
      31: 'Im · E+ · Sp+ · Mo+ · Co−', 32: 'Im · E+ · Sp+ · Mo+ · Co+'
    }
  },

  scenarios: {
    1: {
      title: 'Blind Exploration',
      human_role: 'Task setter and final recipient. Formulates the request, sets search parameters, and reviews the output as needed.',
      ai_role: 'Conducts broad search, aggregation, and initial structuring. Produces summary materials, reference collections, and thematic overviews.',
      logic: 'Low motivation means human presence in the process adds no value. Low expertise and low stakes make this an ideal delegation scenario.',
      risk_correct: 'Loss of project-specific nuance — AI has no access to implicit context.',
      risk_wrong: 'Using output without checking accuracy; treating AI hallucinations as facts.',
      examples: ['Initial reference gathering for an unfamiliar aesthetic direction', 'Trend overview in a niche category for a preliminary briefing', 'Building a terminology glossary for a new subject area'],
      related: ['С-02', 'С-03', 'С-09']
    },
    2: {
      title: 'Exploration with a Safety Net',
      human_role: 'Process architect and output auditor. Sets parameters, defines acceptance criteria, and conducts final verification before using the material.',
      ai_role: 'Executes research autonomously within the defined parameters. Produces structured output and flags areas of uncertainty and potential gaps.',
      logic: 'This profile is identical to Scenario 1 except for the high cost of error. Automation remains justified, but it requires an additional oversight layer.',
      risk_correct: 'Illusion of completeness — AI does not know what it does not know, and critical gaps may go unnoticed.',
      risk_wrong: 'Skipping final verification under deadline pressure; mistaking a confident tone for accuracy.',
      examples: ['Competitive landscape research for a strategic client presentation', 'Preliminary market audit before an investment pitch', 'Collecting a regulatory framework for a project in a regulated industry'],
      related: ['С-01', 'С-04', 'С-10']
    },
    3: {
      title: 'Collaborative Sense-Making',
      human_role: 'Active dialogue participant: sets direction, responds to AI suggestions, and brings subjective experience and intuition into the process.',
      ai_role: 'Interlocutor and generator of alternatives. Proposes non-obvious directions, asks clarifying questions, and expands the field beyond the obvious.',
      logic: 'High motivation is the key switch here. Even with low formal expertise, the person needs to stay in the process — the outcome should reflect a personal perspective rather than an averaged model output.',
      risk_correct: 'Echo-chamber effect — the model adapts too closely to the person’s phrasing and stops producing genuinely unexpected directions.',
      risk_wrong: 'Switching into plain augmentation mode (“just give me options”) and losing the live dialogue that makes this mode valuable.',
      examples: ['Exploring visual language for a young designer’s new personal project', 'Finding a conceptual frame for a non-commercial art project', 'Joint exploration of a niche cultural topic for a future script'],
      related: ['С-01', 'С-04', 'С-07']
    },
    4: {
      title: 'Cautious Dialogue',
      human_role: 'Lead participant with heightened critical vigilance. High stakes require every key finding to be checked before use.',
      ai_role: 'Field-expanding partner operating in a high-transparency mode: flags confidence levels, surfaces contradictions, and offers alternative interpretations.',
      logic: 'High motivation calls for cooperation. The high cost of error makes this mode more stringent: iterations serve not only idea generation, but also verification.',
      risk_correct: 'Process slowdown caused by over-verifying every step.',
      risk_wrong: 'Switching to automation under pressure and losing the control that matters most here.',
      examples: ['Research for a major brand repositioning strategy without sector-specific expertise', 'Conceptual groundwork for an educational programme that will be publicly defended', 'Initial research for a documentary project with high public stakes'],
      related: ['С-03', 'С-12']
    },
    5: {
      title: 'Quick Exploration',
      human_role: 'Task setter and result consumer. Formulates the request and receives structured output.',
      ai_role: 'High-speed information aggregator. Works quickly and with broad coverage. The priority is speed and completeness, not the precision of every single element.',
      logic: 'High speed and low motivation point naturally toward automation. The person needs results quickly, without being involved in the process.',
      risk_correct: 'Superficiality — rapid collection may miss important nuances.',
      risk_wrong: 'Using a fast result in a situation that requires depth.',
      examples: ['Quick reference gathering before a client briefing', 'Compiling a list of potential vendors for a production task', 'Overview of recent publications for an introductory presentation slide'],
      related: ['С-01', 'С-06', 'С-07']
    },
    6: {
      title: 'Urgent Exploration with Stakes',
      human_role: 'Fast output verifier. There is no time for deep involvement, but there is still responsibility for the result.',
      ai_role: 'Works at maximum speed, prioritises meaningful sources, and clearly marks confidence levels and key gaps.',
      logic: 'Speed and high stakes are in tension here. Motivation is low, so active participation is not practical. But the high cost of error makes final review mandatory.',
      risk_correct: 'Time pressure lowers the quality of checking — the validation layer must be protected from “we don’t have time.”',
      risk_wrong: 'Full automation without validation — an expensive mistake in an urgent, high-cost context.',
      examples: ['Emergency data collection before a crisis PR session', 'Rapid fact-checking for a high-profile pitch', 'Urgent competitive analysis before negotiations'],
      related: ['С-05', 'С-08']
    },
    7: {
      title: 'Sprint with a Partner',
      human_role: 'Active participant in a fast iteration loop. Responds to AI proposals, filters out irrelevant directions, and maintains strategic focus even at high speed.',
      ai_role: 'Reactive real-time generator. Quickly suggests options and adapts direction in response to human feedback.',
      logic: 'High motivation requires human presence in the loop despite the pace. Cooperation here takes the form of a rapid dialogue in which the person sets the direction.',
      risk_correct: 'Surface-level output — fast cooperation tends to generate breadth rather than depth.',
      risk_wrong: 'Switching to pure automation “because there’s no time” and losing the authorial voice.',
      examples: ['Brainstorming conceptual directions for a new brief in a single work block', 'Quick search for narrative angles for editorial content under a tight deadline', 'Generating multiple visual directions for rapid testing'],
      related: ['С-03', 'С-08', 'С-15']
    },
    8: {
      title: 'Urgent Dialogue',
      human_role: 'Leader under pressure. Maintains a critical perspective at high speed and under high stakes.',
      ai_role: 'Operates in urgent support mode: rapidly generates directions and transparently marks confidence.',
      logic: 'Speed and high stakes push toward automation, but motivation blocks that move. This mode depends on short iterations and explicit verification.',
      risk_correct: 'Under stress, it is easy to accept persuasive AI answers without checking them.',
      risk_wrong: 'Any shift into automation here can become a costly mistake.',
      examples: ['Express research before a key meeting with a potential partner', 'Urgent search for a conceptual angle for a crisis campaign', 'Fast analogue search to justify an unconventional decision to a client'],
      related: ['С-07', 'С-04', 'С-16']
    },
    9: {
      title: 'Expert Overview',
      human_role: 'Expert navigator: defines highly specific search parameters. Reviews the output with an intensified eye and notices what AI may have missed.',
      ai_role: 'Coverage expander: processes large volumes of material faster than the expert working alone, while structuring and aggregating it.',
      logic: 'High expertise is necessary for quality — AI expands the field rather than replacing the expert. Low motivation means the expert does not want to immerse themselves in the search process itself.',
      risk_correct: 'The expert may mistake AI’s organisation of material for genuine interpretation.',
      risk_wrong: 'Skipping the verification step because the expert “already knows the subject.”',
      examples: ['Collecting academic literature on a specialised topic for a research project', 'Auditing existing solutions in a narrow technical domain for R&D', 'Building an extended glossary for a professional discipline'],
      related: ['С-01', 'С-10', 'С-11']
    },
    10: {
      title: 'Expert Audit',
      human_role: 'Expert with heightened responsibility. Sets strict quality criteria and checks accuracy — mistakes are expensive.',
      ai_role: 'Structured assistant with explicit uncertainty markers. Prioritises source reliability and flags contradictory data.',
      logic: 'High expertise and high stakes produce an augmentation mode with elevated control. Motivation is low, but responsibility for the final result is total.',
      risk_correct: 'Excessive caution can slow the work down.',
      risk_wrong: 'Switching to cooperation when time is short and reducing control under high stakes.',
      examples: ['Researching the regulatory environment for launching a new media product', 'Analysing technical documentation for a large production project', 'Academic research intended for publication in a peer-reviewed journal'],
      related: ['С-09', 'С-14']
    },
    11: {
      title: 'Deep Research with Presence',
      human_role: 'Researcher with an authorial position. They do not simply consume information — they form a point of view. AI expands the field, but the direction is set by the human.',
      ai_role: 'Intellectual expander: proposes unexpected connections, adjacent topics, and alternative perspectives.',
      logic: 'Augmentation keeps the human in the author’s role, while AI becomes an intellectual magnifier. With high expertise, directed use often gives more than open-ended iterative dialogue.',
      risk_correct: 'AI may suggest so many unexpected connections that the focus of the research becomes diluted.',
      risk_wrong: 'Switching to cooperation and weakening the authorial position.',
      examples: ['Conceptual research for an experienced author’s personal art project', 'Academic research in an adjacent discipline', 'Developing a theoretical framework for a new course'],
      related: ['С-09', 'С-12', 'С-15']
    },
    12: {
      title: 'Deliberate Research',
      human_role: 'Accountable author: combines expertise, involvement, and awareness of high stakes. Every conclusion is checked, and every direction is considered carefully.',
      ai_role: 'Precise assistant: marks uncertainty, provides sources, and avoids synthesis where the data is contradictory.',
      logic: 'This is the highest concentration of responsibility-related parameters without speed pressure. Augmentation is the most professional configuration here, with full control retained by the human.',
      risk_correct: 'Perfectionism can slow progress.',
      risk_wrong: 'Fatigue may push the process into automation, causing a loss of control exactly where it matters most.',
      examples: ['Research base for a dissertation or public academic work', 'Strategic analysis for a major cultural or business project', 'Conceptual foundation for a design decision that will be publicly defended'],
      related: ['С-11', 'С-10', 'С-16']
    },
    13: {
      title: 'Expert Sprint',
      human_role: 'Expert in rapid-scan mode. Issues precise queries, quickly evaluates result relevance, and moves forward.',
      ai_role: 'High-speed aggregator with prioritisation based on expert criteria.',
      logic: 'High expertise, high speed, and low motivation make this a classic augmentation scenario. AI accelerates expert work rather than replacing it.',
      risk_correct: 'Speed reduces depth — the expert may miss an important nuance that AI failed to flag.',
      risk_wrong: 'Switching to automation — the expert stops checking and starts relying on intuition.',
      examples: ['Quick expert review of competitors before a pitch', 'Urgent search for precedents to support professional argumentation', 'Express audit of existing solutions for a technical briefing'],
      related: ['С-09', 'С-14', 'С-15']
    },
    14: {
      title: 'Urgent Expert Audit',
      human_role: 'Expert under pressure with high responsibility. Defines precise criteria and rapidly validates key findings.',
      ai_role: 'Maximally efficient assistant under constraints: prioritises reliability and marks uncertainty.',
      logic: 'High stakes at high speed. Augmentation still holds because expertise remains necessary. Fewer iterations, greater focus on the final validation layer.',
      risk_correct: 'False sense of adequacy — “we checked it, AI helped, so it must be fine.”',
      risk_wrong: 'Skipping the validation layer in the name of speed.',
      examples: ['Urgent expert analysis before signing a strategic partnership', 'Emergency fact-base review for a high-profile public speech', 'Fast research audit before publishing high-reach content'],
      related: ['С-13', 'С-16']
    },
    15: {
      title: 'Expert Cooperation',
      human_role: 'Expert in active co-authorship mode. Asks complex questions and evaluates AI’s unexpected proposals from an expert position.',
      ai_role: 'Equal thinking partner: surfaces connections the expert may miss because of the “tunnel vision” of specialisation.',
      logic: 'High motivation plus high expertise is no longer augmentation. Cooperation creates a synergy between expert judgment and AI’s non-obvious suggestions.',
      risk_correct: 'The expert may start “teaching” the model instead of working with it, which can slow the process down.',
      risk_wrong: 'Switching back to augmentation and losing what made cooperation worth choosing.',
      examples: ['Rapid concept development for a competition with a strong authorial voice', 'Expert team brainstorming with AI as a “third participant”', 'Express development of several strong conceptual directions for comparison'],
      related: ['С-11', 'С-07', 'С-16']
    },
    16: {
      title: 'Expert Crisis Dialogue',
      human_role: 'Expert under maximum pressure. High motivation, expertise, and stakes demand constant critical vigilance.',
      ai_role: 'Fast, transparent, precise partner. Offers options with explicit confidence marking and helps structure thinking under pressure.',
      logic: 'All parameters are at their maximum. Cooperation becomes unavoidable: motivation and expertise block automation, while the stakes block any transfer of initiative to AI.',
      risk_correct: 'Cognitive overload — too much incoming information at a high pace and under high responsibility.',
      risk_wrong: 'Any reduction in the level of control can become a serious mistake.',
      examples: ['Urgent conceptual research for a crisis briefing with a top client', 'Express development of a position on a sensitive public issue with immediate publication', 'Urgent analytical work for a high-stakes competition or tender'],
      related: ['С-15', 'С-08', 'С-32']
    },
    17: {
      title: 'Assembly Line',
      human_role: 'System architect: sets parameters, defines templates, establishes quality criteria, and periodically reviews a sample of outputs.',
      ai_role: 'Production executor: performs tasks according to the defined parameters, maintains consistent quality, and scales production.',
      logic: 'A classic scenario of pure automation. None of the parameters here require continuous human presence inside the production cycle.',
      risk_correct: 'Quality drift — without regular audits, the system gradually moves away from the standard.',
      risk_wrong: 'Launching without a clear template — automating a poorly defined task produces scaled mediocrity.',
      examples: ['Mass generation of product descriptions for an e-commerce catalogue', 'Automatic creation of standard social posts from a content plan', 'Batch adaptation of visual materials into standard formats'],
      related: ['С-18', 'С-19', 'С-25']
    },
    18: {
      title: 'Supervised Assembly Line',
      human_role: 'Production auditor: regularly checks a sample of results and adjusts the system when deviations appear.',
      ai_role: 'Production system with extended metrics: records deviations and flags low-confidence units for priority review.',
      logic: 'The profile is identical to Scenario 17, but a high error cost requires structured oversight. The economic logic of automation remains, but an audit layer is added.',
      risk_correct: 'The auditor may miss a systemic error by checking only a sample.',
      risk_wrong: 'Reducing oversight under pressure of volume or deadlines.',
      examples: ['Producing legally significant documents from templates', 'Mass localisation for markets with reputational risk', 'Automated production of financial reporting in a required format'],
      related: ['С-17', 'С-21']
    },
    19: {
      title: 'Authorial Production',
      human_role: 'Author in the process: AI makes their presence more productive. The human directs, edits, and makes the authorial decisions.',
      ai_role: 'Production accelerator: reduces the workload of technically simple operations and proposes options for the author to consider.',
      logic: 'High motivation means the value of the result depends on human authorship. Augmentation makes production smoother while keeping the person in the author’s role.',
      risk_correct: 'The authorial voice may gradually become smoothed by AI suggestions.',
      risk_wrong: 'Switching to cooperation or automation and losing authorial control.',
      examples: ['Personal blog with an AI assistant for editing and structuring', 'Content production for a junior specialist’s personal brand', 'Creating illustrative material for a non-commercial project'],
      related: ['С-17', 'С-20', 'С-23']
    },
    20: {
      title: 'Accountable Authorial Production',
      human_role: 'Accountable author: high motivation and high stakes combine to create a maximum level of control. Every element passes through a human decision.',
      ai_role: 'Careful assistant: handles technical operations, proposes options, and explicitly marks uncertainty.',
      logic: 'Augmentation is the only mode that provides the right balance: AI productivity plus human authorial responsibility.',
      risk_correct: 'Perfectionism can slow production down.',
      risk_wrong: 'Switching to automation through fatigue and losing control precisely where it matters most.',
      examples: ['Producing public content that shapes the author’s reputation', 'Creating educational materials under a personal name for a broad audience', 'Developing brand content with high requirements for tone and voice'],
      related: ['С-19', 'С-24']
    },
    21: {
      title: 'Fast Assembly Line',
      human_role: 'Launches the process and receives the result. Minimal involvement in the production cycle.',
      ai_role: 'High-speed production executor. The priority is volume and speed within the specified parameters.',
      logic: 'Speed combined with low values on all other attributes produces the purest automation scenario.',
      risk_correct: 'Speed hides systemic errors until they scale.',
      risk_wrong: 'Applying this mode to tasks that require even minimal expertise.',
      examples: ['Automatic generation of short event descriptions for an aggregator', 'Batch production of ad copy for A/B testing', 'Mass tagging and metadata assignment for a media archive'],
      related: ['С-17', 'С-22', 'С-23']
    },
    22: {
      title: 'Supervised Fast Assembly Line',
      human_role: 'Fast auditor: high speed shortens review time, while high stakes make that review mandatory.',
      ai_role: 'High-speed production system with built-in risk indicators: automatically flags non-standard cases for priority review.',
      logic: 'This is the sharpest tension within automation scenarios: speed and high stakes together. The solution is smart oversight focused on risk-bearing units rather than the whole volume.',
      risk_correct: 'The risk-flagging system itself may make mistakes.',
      risk_wrong: 'Oversight turns into a formal ritual instead of real control.',
      examples: ['Mass localisation of legally significant content under tight deadlines', 'Urgent production of official crisis communications from templates', 'High-speed media production in a regulated industry'],
      related: ['С-21', 'С-18']
    },
    23: {
      title: 'Urgent Authorial Production',
      human_role: 'Active author at a high pace: preserves the authorial voice and responds quickly to AI suggestions.',
      ai_role: 'Reactive production partner: rapidly generates options and adapts to the direction set by the author.',
      logic: 'Cooperation is the only mode that can provide both speed and authorial control at the same time.',
      risk_correct: 'Under time pressure, the authorial voice may become smoother faster than one notices.',
      risk_wrong: 'Switching to automation “because there is no time.”',
      examples: ['Urgent publication of authorial material under deadline', 'Fast production of content for a live stream or urgent newsletter', 'Express development of a visual solution for an urgent post'],
      related: ['С-19', 'С-24', 'С-31']
    },
    24: {
      title: 'Urgent Accountable Authorship',
      human_role: 'Accountable author under maximum pressure: speed does not reduce quality requirements, and high stakes demand authorial presence.',
      ai_role: 'Fast precision partner: supports the pace and maintains transparency about confidence levels.',
      logic: 'Maximum tension in authorial implementation scenarios. A production tandem with maximum mutual transparency.',
      risk_correct: 'Overload — too many decisions per unit of time under high responsibility.',
      risk_wrong: 'Any weakening of authorial control can become a costly mistake.',
      examples: ['Urgent crisis communication released under the name of a senior executive', 'Emergency publication of a significant authorial statement', 'Urgent refinement of high-reach content before broadcast'],
      related: ['С-23', 'С-20', 'С-32']
    },
    25: {
      title: 'Expert Production',
      human_role: 'Expert in production mode: applies specialised knowledge without wanting to spend time on technically simple operations.',
      ai_role: 'Production accelerator for the expert: takes over routine work and proposes standard solutions for typical elements.',
      logic: 'High expertise blocks automation, because expert judgment is still needed; low motivation blocks cooperation, because there is no desire for iterative dialogue.',
      risk_correct: 'AI may gradually take on more than it should, causing expertise to atrophy.',
      risk_wrong: 'Switching to cooperation and wasting expert time on iterations that could have been handled instrumentally.',
      examples: ['Producing specialised content with AI assistance as an experienced author', 'Developing technical documentation with AI automating template sections', 'Creating professional design solutions while AI accelerates routine operations'],
      related: ['С-17', 'С-26', 'С-27']
    },
    26: {
      title: 'Precision Production',
      human_role: 'Expert with full responsibility for the result. Methodical, checks every critical element.',
      ai_role: 'Precise production assistant with reliability as its top priority: flags non-standard cases and ensures decision traceability.',
      logic: 'A classic profile of accountable expert production. What matters here is precision and control, not speed or dialogue.',
      risk_correct: 'Excessive dependence on the AI assistant can reduce expert vigilance.',
      risk_wrong: 'Switching to automation under high stakes — a fatal false economy.',
      examples: ['Final design development for manufacturing a physical product', 'Preparing professional documentation for a regulator', 'Producing the archival or public version of a significant project'],
      related: ['С-25', 'С-30']
    },
    27: {
      title: 'Authorial Expert Production',
      human_role: 'Master in the process: an expert for whom personal presence in every decision matters. AI amplifies but does not replace.',
      ai_role: 'Intellectual tool in the master’s hands: expands capabilities without interfering in the authorial process.',
      logic: 'High expertise and high motivation without time pressure make this the ideal profile for deep augmentation. The expert seeks amplification, not dialogue.',
      risk_correct: 'AI creates the temptation to delegate “just this one operation,” leading to gradual loss of control.',
      risk_wrong: 'Switching to cooperation and surrendering initiative where the expert should lead.',
      examples: ['Producing authorial material as an experienced journalist or writer', 'Creating a complex design object with AI support for technical operations', 'Developing an educational course with AI assistance for structuring'],
      related: ['С-25', 'С-28', 'С-31']
    },
    28: {
      title: 'Accountable Mastery',
      human_role: 'Master with maximum responsibility: every decision is weighed, every element checked. The highest standard of production.',
      ai_role: 'Disciplined assistant: precise, transparent, and never takes on more than has been delegated.',
      logic: 'This is augmentation in its most demanding configuration: the expert fully controls every decision, and high stakes make that control mandatory.',
      risk_correct: 'The risk of over-engineering — applying an excessively high standard of control to individually low-risk operations.',
      risk_wrong: 'Any reduction in expert control under high stakes.',
      examples: ['Producing a flagship product that defines a studio’s reputation', 'The final version of a public project under intense media attention', 'Accountable creative work released under the name of a recognised author'],
      related: ['С-27', 'С-12', 'С-32']
    },
    29: {
      title: 'Expert Acceleration',
      human_role: 'Expert in high-output mode: applies specialised knowledge quickly, without unnecessary iterations.',
      ai_role: 'Production accelerator: automates everything that does not require expert judgment.',
      logic: 'High expertise, high speed, and low motivation make this the most efficient augmentation scenario.',
      risk_correct: 'Speed reduces depth — the expert may cut corners on checking where checking is still needed.',
      risk_wrong: 'Switching to automation with the logic that “AI can handle it anyway.”',
      examples: ['Urgent production of technically complex content by an experienced author', 'Express development of a complex design solution under a hard deadline', 'Rapid preparation of expert material for publication'],
      related: ['С-25', 'С-30', 'С-31']
    },
    30: {
      title: 'Urgent Precision Production',
      human_role: 'Expert under the dual pressure of speed and high stakes. Focuses attention on the most critical checkpoints.',
      ai_role: 'Maximally efficient production assistant: works quickly and prioritises the elements that most need human review.',
      logic: 'The most tense augmentation scenario in the implementation phase. This is accelerated expert control: the human checks the right things, not everything.',
      risk_correct: 'The system used to prioritise critical points may itself make mistakes.',
      risk_wrong: 'Switching to automation under pressure and losing expert control exactly when it is needed most.',
      examples: ['Urgent finalisation of a high-stakes project before client delivery', 'Emergency preparation of material with legal or reputational significance', 'Urgent implementation of a complex technical solution under an immediate deadline'],
      related: ['С-29', 'С-26']
    },
    31: {
      title: 'Expert Production Cooperation',
      human_role: 'Author-expert in active tandem mode. Engages with AI as a partner in every meaningful decision.',
      ai_role: 'Active production partner: generates options, adapts to expert feedback, and accelerates iteration.',
      logic: 'High motivation and high expertise require active authorial presence in the production process — that is cooperation. High speed makes slow augmentation impractical.',
      risk_correct: 'Fast production cooperation can smooth out the authorial voice.',
      risk_wrong: 'Switching to automation “because it works” and imperceptibly losing authorship.',
      examples: ['Urgent production of significant authorial content', 'Fast development of a complex creative solution with an authorial voice', 'High-speed iterative development of a design system with strong team involvement'],
      related: ['С-27', 'С-15', 'С-32']
    },
    32: {
      title: 'Master Under Pressure',
      human_role: 'Author-expert with maximum responsibility under extreme pressure. All parameters are at their peak. Cooperation is not a choice here — it is a necessity.',
      ai_role: 'Highest-trust partner: fast, transparent, professionally disciplined. Does not take initiative unless explicitly asked to.',
      logic: 'This is the mirror image of Scenario 1 in the matrix. The most demanding of all 32 scenarios: cooperation under maximum pressure and maximum responsibility.',
      risk_correct: 'When extreme tension becomes normal — the “always in mode 32” syndrome can lead to professional burnout.',
      risk_wrong: 'Reducing control under pressure at exactly the moment when control is most needed.',
      examples: ['Urgent finalisation of a flagship project under the name of a leading specialist', 'High-level crisis creative work with immediate consequences', 'Real-time production of significant authorial material for live broadcast'],
      related: ['С-31', 'С-28', 'С-16']
    }
  }
};