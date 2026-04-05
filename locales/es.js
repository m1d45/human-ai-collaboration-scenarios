/** locales/es.js — Español */
window.LOCALES = window.LOCALES || {};
window.LOCALES.es = {

  meta: {
    title: '32 escenarios — Una clasificación de la colaboración humano-IA'
  },

  ui: {
    eyebrow: 'AI LAB · HSE School of Design · Vadim Bulgakov',
    title: {
      line1: '32 escenarios de colaboración',
      line2: 'entre humanos e IA',
      line3: ' en las industrias creativas'
    },
    questionnaire: {
      intro_label: 'Encuentra tu escenario',
      intro_text: 'Responde 5 preguntas sobre tu tarea — el sistema identificará los escenarios correspondientes.',
      q1: {
        label: '¿Es esta una tarea de implementación?',
        research: 'No',
        impl:     'Sí'
      },
      q2: {
        label: '¿Esta tarea requiere conocimientos especializados o experiencia profesional?',
        low:  'No',
        high: 'Sí'
      },
      q3: {
        label: '¿Esta tarea debe resolverse rápidamente?',
        low:  'No',
        high: 'Sí'
      },
      q4: {
        label: '¿Es importante para ti hacer esta tarea personalmente?',
        low:  'No',
        high: 'Sí'
      },
      q5: {
        label: '¿Un error en esta tarea podría salir caro?',
        low:  'No',
        high: 'Sí'
      },
      showing: 'Mostrando ',
      of_total: ' de 32',
      reset: 'Restablecer',
      apply: 'Aplicar'
    },
    modes: { aug: 'Aumentación', coop: 'Cooperación', auto: 'Automatización' },
    stages: { research: 'Exploración', impl: 'Implementación' },
    search: { placeholder: 'Buscar por título, descripción, ejemplos…' },
    empty_state: 'Ningún escenario coincide con las respuestas seleccionadas',
    card: {
      human_role: 'Rol humano',
      ai_role: 'Rol de la IA',
      expand: 'Más',
      collapse: 'Menos'
    },
    modal: {
      close: 'Cerrar',
      logic: 'Justificación de la elección del modo',
      risk_correct: 'Riesgos con una aplicación correcta',
      risk_wrong: 'Riesgos con una aplicación incorrecta',
      risk_correct_label: 'Modo correcto',
      risk_wrong_label: 'Modo incorrecto',
      examples: 'Ejemplos de tareas',
      related: 'Escenarios relacionados'
    },
    graph: {
      page_title:   'Mapa de escenarios',
      back:         '← Todos los escenarios',
      hint:         'Arrastrar · Desplazar para zoom · Clic para explorar',
      mode_filter:  'Modo:',
      stage_filter: 'Etapa:',
      map_link:     'Mapa de escenarios →'
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
      17: 'Im · E− · V− · M− · C−', 18: 'Im · E− · V− · M− · C+',
      19: 'Im · E− · V− · M+ · C−', 20: 'Im · E− · V− · M+ · C+',
      21: 'Im · E− · V+ · M− · C−', 22: 'Im · E− · V+ · M− · C+',
      23: 'Im · E− · V+ · M+ · C−', 24: 'Im · E− · V+ · M+ · C+',
      25: 'Im · E+ · V− · M− · C−', 26: 'Im · E+ · V− · M− · C+',
      27: 'Im · E+ · V− · M+ · C−', 28: 'Im · E+ · V− · M+ · C+',
      29: 'Im · E+ · V+ · M− · C−', 30: 'Im · E+ · V+ · M− · C+',
      31: 'Im · E+ · V+ · M+ · C−', 32: 'Im · E+ · V+ · M+ · C+'
    }
  },

  scenarios: {
    1: {
      title: 'Exploración a ciegas',
      human_role: 'Define la tarea y recibe el resultado final. Formula la solicitud, establece los parámetros de búsqueda y revisa el resultado si es necesario.',
      ai_role: 'Realiza una búsqueda amplia, agrega y estructura la información. Produce materiales de síntesis, colecciones de referencias y panorámicas temáticas.',
      logic: 'Una motivación baja significa que la presencia humana en el proceso no aporta un valor adicional. Una baja experiencia y unos riesgos bajos hacen de este un escenario ideal para delegar.',
      risk_correct: 'Pérdida de matices específicos del proyecto: la IA no tiene acceso al contexto implícito.',
      risk_wrong: 'Usar la salida sin comprobar su exactitud; tomar las alucinaciones de la IA como hechos.',
      examples: ['Recopilación inicial de referencias para una dirección estética desconocida', 'Panorámica de tendencias en una categoría de nicho para un briefing preliminar', 'Creación de un glosario terminológico para un nuevo ámbito'],
      related: ['С-02', 'С-03', 'С-09']
    },
    2: {
      title: 'Exploración con red de seguridad',
      human_role: 'Arquitecto del proceso y auditor del resultado. Define parámetros, criterios de aceptación y realiza la verificación final antes de usar los materiales.',
      ai_role: 'Ejecuta la investigación de forma autónoma dentro de los parámetros definidos. Produce una salida estructurada y señala áreas de incertidumbre y posibles lagunas.',
      logic: 'El perfil es idéntico al del escenario 1, salvo por el alto coste del error. La automatización sigue estando justificada, pero requiere una capa adicional de supervisión.',
      risk_correct: 'Ilusión de completitud: la IA no sabe lo que no sabe, y las lagunas críticas pueden pasar desapercibidas.',
      risk_wrong: 'Saltarse la verificación final por presión de tiempo; confundir un tono seguro con exactitud.',
      examples: ['Investigación del panorama competitivo para una presentación estratégica a un cliente', 'Auditoría preliminar del mercado antes de un pitch de inversión', 'Recopilación del marco regulatorio para un proyecto en un sector regulado'],
      related: ['С-01', 'С-04', 'С-10']
    },
    3: {
      title: 'Construcción colaborativa de sentido',
      human_role: 'Participante activo del diálogo: marca la dirección, responde a las propuestas de la IA y aporta su experiencia subjetiva e intuición.',
      ai_role: 'Interlocutor y generador de alternativas. Propone direcciones no evidentes, hace preguntas de aclaración y amplía el campo más allá de lo obvio.',
      logic: 'La alta motivación es aquí el factor decisivo. Incluso con una experiencia formal baja, la persona necesita permanecer dentro del proceso: el resultado debe reflejar una perspectiva personal y no una salida promedio del modelo.',
      risk_correct: 'Efecto de cámara de eco: el modelo se adapta demasiado al lenguaje de la persona y deja de producir direcciones realmente inesperadas.',
      risk_wrong: 'Pasar a un modo de aumentación simple (“solo dame opciones”) y perder el diálogo vivo que da valor a este modo.',
      examples: ['Explorar un lenguaje visual para el nuevo proyecto personal de un diseñador joven', 'Encontrar un marco conceptual para un proyecto artístico no comercial', 'Exploración conjunta de un tema cultural de nicho para un futuro guion'],
      related: ['С-01', 'С-04', 'С-07']
    },
    4: {
      title: 'Diálogo cauteloso',
      human_role: 'Participante principal con una vigilancia crítica reforzada. Los riesgos altos exigen verificar cada hallazgo clave antes de usarlo.',
      ai_role: 'Socio que amplía el campo y trabaja con alta transparencia: marca niveles de confianza, hace visibles contradicciones y ofrece interpretaciones alternativas.',
      logic: 'La alta motivación exige cooperación. El alto coste del error hace este modo más estricto: las iteraciones sirven no solo para generar ideas, sino también para verificarlas.',
      risk_correct: 'Ralentización del proceso por verificar en exceso cada paso.',
      risk_wrong: 'Pasar a la automatización bajo presión y perder el control precisamente donde más importa.',
      examples: ['Investigación para una estrategia de reposicionamiento de una gran marca sin experiencia sectorial', 'Base conceptual para un programa educativo que será defendido públicamente', 'Investigación inicial para un proyecto documental con gran exposición pública'],
      related: ['С-03', 'С-12']
    },
    5: {
      title: 'Exploración rápida',
      human_role: 'Plantea la solicitud y consume el resultado. Formula la petición y recibe una salida estructurada.',
      ai_role: 'Agregador de información de alta velocidad. Trabaja rápido y con gran cobertura. La prioridad es la velocidad y la completitud, no la precisión de cada elemento.',
      logic: 'La alta velocidad y la baja motivación apuntan claramente hacia la automatización. La persona necesita resultados rápidos sin implicarse en el proceso.',
      risk_correct: 'Superficialidad: una recopilación veloz puede dejar fuera matices importantes.',
      risk_wrong: 'Usar un resultado rápido allí donde se necesita profundidad.',
      examples: ['Búsqueda rápida de referencias antes de un briefing con un cliente', 'Elaboración de una lista de posibles proveedores para una tarea de producción', 'Resumen de publicaciones recientes para una diapositiva introductoria'],
      related: ['С-01', 'С-06', 'С-07']
    },
    6: {
      title: 'Exploración urgente con riesgos altos',
      human_role: 'Verificador rápido del resultado. No hay tiempo para una implicación profunda, pero sí responsabilidad sobre el resultado.',
      ai_role: 'Trabaja a máxima velocidad, prioriza fuentes fiables y marca de forma explícita los niveles de confianza y las lagunas clave.',
      logic: 'La velocidad y los riesgos altos entran aquí en tensión. La baja motivación hace poco realista la participación activa, pero el alto coste del error vuelve obligatoria la revisión final.',
      risk_correct: 'La presión del tiempo degrada la calidad de la revisión: la capa de validación debe protegerse frente al argumento “no tenemos tiempo”.',
      risk_wrong: 'Automatización total sin validación: un error costoso en un contexto urgente y de alto riesgo.',
      examples: ['Recopilación urgente de datos antes de una sesión de comunicación de crisis', 'Verificación rápida de hechos para un pitch de alto nivel', 'Análisis competitivo urgente antes de una negociación'],
      related: ['С-05', 'С-08']
    },
    7: {
      title: 'Sprint con un socio',
      human_role: 'Participante activo en un bucle de iteración rápida. Responde a las propuestas de la IA, descarta direcciones irrelevantes y mantiene el foco estratégico incluso a gran velocidad.',
      ai_role: 'Generador reactivo en tiempo real. Ofrece opciones con rapidez y adapta la dirección en función del feedback humano.',
      logic: 'La alta motivación exige presencia humana dentro del bucle, pese al ritmo. La cooperación adopta aquí la forma de un diálogo rápido en el que la persona marca el vector.',
      risk_correct: 'Resultados superficiales: la cooperación rápida produce amplitud, pero no profundidad.',
      risk_wrong: 'Pasar a la automatización pura “porque no hay tiempo” y perder la voz autoral.',
      examples: ['Lluvia de ideas de direcciones conceptuales para un nuevo brief en un solo bloque de trabajo', 'Búsqueda rápida de ángulos narrativos para contenido editorial con una deadline ajustada', 'Generación de varias direcciones visuales para pruebas rápidas'],
      related: ['С-03', 'С-08', 'С-15']
    },
    8: {
      title: 'Diálogo urgente',
      human_role: 'Líder bajo presión. Mantiene una mirada crítica a gran velocidad y con riesgos altos.',
      ai_role: 'Trabaja en modo de apoyo urgente: genera direcciones con rapidez y marca de forma transparente los niveles de confianza.',
      logic: 'La velocidad y los riesgos altos empujan hacia la automatización, pero la motivación bloquea ese movimiento. El modo depende de iteraciones cortas y verificación explícita.',
      risk_correct: 'Bajo estrés resulta fácil aceptar respuestas convincentes de la IA sin verificarlas.',
      risk_wrong: 'Cualquier paso hacia la automatización puede convertirse aquí en un error costoso.',
      examples: ['Investigación exprés antes de una reunión clave con un socio potencial', 'Búsqueda urgente de un ángulo conceptual para una campaña de crisis', 'Búsqueda rápida de precedentes para justificar una decisión poco convencional ante un cliente'],
      related: ['С-07', 'С-04', 'С-16']
    },
    9: {
      title: 'Panorámica experta',
      human_role: 'Experto-navegador: define parámetros de búsqueda altamente específicos. Revisa la salida con una mirada intensificada y detecta lo que la IA pudo haber pasado por alto.',
      ai_role: 'Amplía la cobertura: procesa grandes volúmenes de material más rápido que el experto por sí solo, mientras estructura y agrega.',
      logic: 'La experiencia alta es necesaria para la calidad: la IA amplía el campo, no sustituye al experto. La baja motivación significa que el experto no desea sumergirse personalmente en el proceso de búsqueda.',
      risk_correct: 'El experto puede confundir la organización del material por parte de la IA con una interpretación real.',
      risk_wrong: 'Saltarse la fase de verificación porque el experto “ya conoce el tema”.',
      examples: ['Recopilación de literatura académica sobre un tema especializado para un proyecto de investigación', 'Auditoría de soluciones existentes en un ámbito técnico estrecho para I+D', 'Construcción de un glosario ampliado para una disciplina profesional'],
      related: ['С-01', 'С-10', 'С-11']
    },
    10: {
      title: 'Auditoría experta',
      human_role: 'Experto con un alto grado de responsabilidad. Define criterios estrictos de calidad y comprueba la exactitud: los errores resultan caros.',
      ai_role: 'Asistente estructurado con marcadores explícitos de incertidumbre. Prioriza la fiabilidad de las fuentes y señala los datos contradictorios.',
      logic: 'Una experiencia alta y unos riesgos altos producen una aumentación con un nivel elevado de control. La motivación es baja, pero la responsabilidad sobre el resultado final es total.',
      risk_correct: 'Una cautela excesiva puede ralentizar el trabajo.',
      risk_wrong: 'Pasar a la cooperación cuando falta tiempo y reducir el control en un contexto de alto riesgo.',
      examples: ['Investigación del entorno regulatorio para lanzar un nuevo producto mediático', 'Análisis de documentación técnica para un gran proyecto de producción', 'Investigación académica destinada a una publicación revisada por pares'],
      related: ['С-09', 'С-14']
    },
    11: {
      title: 'Investigación profunda con presencia',
      human_role: 'Investigador con posición autoral. No solo consume información: construye un punto de vista. La IA amplía el campo, pero la dirección la fija la persona.',
      ai_role: 'Expansor intelectual: propone conexiones inesperadas, temas adyacentes y perspectivas alternativas.',
      logic: 'La aumentación mantiene a la persona en el papel de autor; la IA se convierte en una lupa intelectual. Con una experiencia alta, el uso dirigido suele aportar más que un diálogo iterativo abierto.',
      risk_correct: 'La IA puede proponer tantas conexiones inesperadas que el foco de la investigación se diluya.',
      risk_wrong: 'Pasar a la cooperación y debilitar la posición autoral.',
      examples: ['Investigación conceptual para el proyecto artístico personal de un autor experimentado', 'Investigación académica en una disciplina adyacente', 'Desarrollo de un marco teórico para un nuevo curso'],
      related: ['С-09', 'С-12', 'С-15']
    },
    12: {
      title: 'Investigación ponderada',
      human_role: 'Autor responsable: combina experiencia, implicación y conciencia de riesgos altos. Cada conclusión se comprueba y cada dirección se sopesa con cuidado.',
      ai_role: 'Asistente preciso: marca la incertidumbre, aporta fuentes y evita las síntesis cuando los datos son contradictorios.',
      logic: 'Aquí se concentran al máximo los parámetros ligados a la responsabilidad, sin presión de velocidad. La aumentación es la configuración más profesional, con el control plenamente en manos de la persona.',
      risk_correct: 'El perfeccionismo puede frenar el avance.',
      risk_wrong: 'La fatiga puede empujar el proceso hacia la automatización y provocar una pérdida de control justo donde más importa.',
      examples: ['Base de investigación para una tesis o un trabajo académico público', 'Análisis estratégico para un gran proyecto cultural o empresarial', 'Fundamento conceptual para una decisión de diseño que será defendida públicamente'],
      related: ['С-11', 'С-10', 'С-16']
    },
    13: {
      title: 'Sprint experto',
      human_role: 'Experto en modo de escaneo rápido. Formula consultas precisas, evalúa rápidamente la relevancia de los resultados y avanza.',
      ai_role: 'Agregador de alta velocidad con priorización según criterios expertos.',
      logic: 'Una experiencia alta, gran velocidad y baja motivación hacen de este un escenario clásico de aumentación. La IA acelera el trabajo del experto sin sustituirlo.',
      risk_correct: 'La velocidad reduce la profundidad: el experto puede pasar por alto un matiz importante que la IA no haya señalado.',
      risk_wrong: 'Pasar a la automatización: el experto deja de comprobar y empieza a apoyarse en la intuición.',
      examples: ['Revisión rápida de competidores antes de un pitch', 'Búsqueda urgente de precedentes para una argumentación profesional', 'Auditoría exprés de soluciones existentes para un briefing técnico'],
      related: ['С-09', 'С-14', 'С-15']
    },
    14: {
      title: 'Auditoría experta urgente',
      human_role: 'Experto bajo presión y con alta responsabilidad. Define criterios precisos y valida rápidamente los hallazgos clave.',
      ai_role: 'Asistente máximamente eficiente bajo restricciones: prioriza la fiabilidad y marca la incertidumbre.',
      logic: 'Riesgos altos a gran velocidad. La aumentación sigue siendo necesaria porque la experiencia también lo es. Menos iteraciones, mayor concentración en la capa final de validación.',
      risk_correct: 'Falsa sensación de suficiencia: “lo hemos revisado, la IA ayudó, así que estará bien”.',
      risk_wrong: 'Saltarse la capa de validación en nombre de la velocidad.',
      examples: ['Análisis experto urgente antes de firmar una alianza estratégica', 'Revisión urgente de la base factual de un discurso público de alto nivel', 'Auditoría rápida de investigación antes de publicar contenido de gran alcance'],
      related: ['С-13', 'С-16']
    },
    15: {
      title: 'Cooperación experta',
      human_role: 'Experto en modo de coautoría activa. Formula preguntas complejas y evalúa las propuestas inesperadas de la IA desde una posición experta.',
      ai_role: 'Socio de pensamiento en igualdad: revela conexiones que el experto puede no ver debido a la “visión de túnel” propia de la especialización.',
      logic: 'Una motivación alta combinada con una experiencia alta ya no corresponde a la aumentación. La cooperación crea aquí una sinergia entre el juicio experto y las sugerencias no evidentes de la IA.',
      risk_correct: 'El experto puede empezar a “enseñar” al modelo en lugar de trabajar con él, lo que hace perder ritmo.',
      risk_wrong: 'Volver a la aumentación y perder precisamente aquello que hacía valiosa la cooperación.',
      examples: ['Desarrollo rápido de conceptos para una competición con una fuerte voz autoral', 'Brainstorming de un equipo experto con la IA como “tercer participante”', 'Desarrollo exprés de varias direcciones conceptuales potentes para compararlas'],
      related: ['С-11', 'С-07', 'С-16']
    },
    16: {
      title: 'Diálogo de crisis experto',
      human_role: 'Experto bajo presión máxima. Una motivación alta, una experiencia alta y riesgos elevados exigen una vigilancia crítica constante.',
      ai_role: 'Socio rápido, transparente y preciso. Propone opciones con una marcación explícita de confianza y ayuda a estructurar el pensamiento bajo presión.',
      logic: 'Todos los parámetros están al máximo. La cooperación se vuelve inevitable: la motivación y la experiencia bloquean la automatización, y los riesgos impiden transferir la iniciativa a la IA.',
      risk_correct: 'Sobrecarga cognitiva: demasiada información entrante a gran velocidad y bajo una responsabilidad alta.',
      risk_wrong: 'Cualquier reducción del nivel de control puede convertirse en un error grave.',
      examples: ['Investigación conceptual urgente para un briefing de crisis con un cliente importante', 'Desarrollo exprés de una posición sobre un asunto público sensible con publicación inmediata', 'Trabajo analítico urgente para una competición o una licitación de alto riesgo'],
      related: ['С-15', 'С-08', 'С-32']
    },
    17: {
      title: 'Cadena de montaje',
      human_role: 'Arquitecto del sistema: configura parámetros, define plantillas, fija criterios de calidad y revisa periódicamente muestras de resultados.',
      ai_role: 'Ejecutor de producción: realiza tareas según los parámetros definidos, mantiene una calidad constante y permite escalar la producción.',
      logic: 'Escenario clásico de automatización pura. Ningún parámetro exige aquí una presencia humana continua dentro del ciclo de producción.',
      risk_correct: 'Deriva de calidad: sin auditorías regulares, el sistema se aleja gradualmente del estándar.',
      risk_wrong: 'Lanzar sin una plantilla clara: automatizar una tarea mal definida produce mediocridad a gran escala.',
      examples: ['Generación masiva de descripciones de productos para un catálogo de e-commerce', 'Creación automática de publicaciones estándar a partir de un plan de contenidos', 'Adaptación por lotes de materiales visuales a formatos estándar'],
      related: ['С-18', 'С-19', 'С-25']
    },
    18: {
      title: 'Cadena de montaje supervisada',
      human_role: 'Auditor de producción: revisa regularmente muestras de resultados y reajusta el sistema cuando aparecen desviaciones.',
      ai_role: 'Sistema de producción con métricas ampliadas: registra desviaciones y marca las unidades de baja confianza para revisión prioritaria.',
      logic: 'El perfil es idéntico al del escenario 17, pero el alto coste del error exige una supervisión estructurada. La lógica económica de la automatización se mantiene, aunque se añade una capa de auditoría.',
      risk_correct: 'El auditor puede dejar pasar un error sistémico al revisar solo una muestra.',
      risk_wrong: 'Reducir la supervisión bajo presión de volumen o de plazos.',
      examples: ['Producción de documentos jurídicamente significativos a partir de plantillas', 'Localización masiva para mercados con riesgo reputacional', 'Producción automatizada de informes financieros en un formato prescrito'],
      related: ['С-17', 'С-21']
    },
    19: {
      title: 'Producción autoral',
      human_role: 'Autor dentro del proceso: la IA vuelve más productiva su presencia. La persona dirige, edita y toma las decisiones autorales.',
      ai_role: 'Acelerador de producción: reduce la carga de operaciones técnicamente simples y propone opciones para que el autor las valore.',
      logic: 'Una motivación alta significa que el valor del resultado depende de la autoría humana. La aumentación hace la producción más fluida y mantiene a la persona en el rol de autor.',
      risk_correct: 'La voz autoral puede alisarse gradualmente bajo la influencia de las sugerencias de la IA.',
      risk_wrong: 'Pasar a la cooperación o a la automatización y perder el control autoral.',
      examples: ['Blog personal con asistente de IA para edición y estructuración', 'Producción de contenido para la marca personal de un especialista junior', 'Creación de material ilustrativo para un proyecto no comercial'],
      related: ['С-17', 'С-20', 'С-23']
    },
    20: {
      title: 'Producción autoral responsable',
      human_role: 'Autor responsable: una motivación alta y unos riesgos altos se combinan para producir un nivel máximo de control. Cada elemento pasa por una decisión humana.',
      ai_role: 'Asistente cuidadoso: se encarga de operaciones técnicas, ofrece opciones y marca explícitamente la incertidumbre.',
      logic: 'La aumentación es el único modo que ofrece aquí el equilibrio correcto: productividad de la IA y responsabilidad autoral humana.',
      risk_correct: 'El perfeccionismo puede ralentizar la producción.',
      risk_wrong: 'Pasar a la automatización por fatiga y perder el control justo donde más importa.',
      examples: ['Producción de contenido público que moldea la reputación del autor', 'Creación de materiales educativos bajo un nombre propio para un público amplio', 'Desarrollo de contenido de marca con altas exigencias de tono y voz'],
      related: ['С-19', 'С-24']
    },
    21: {
      title: 'Cadena de montaje rápida',
      human_role: 'Lanza el proceso y recibe el resultado. Implicación mínima en el ciclo de producción.',
      ai_role: 'Ejecutor de producción de alta velocidad. La prioridad es el volumen y la rapidez dentro de los parámetros especificados.',
      logic: 'La velocidad combinada con valores bajos en todos los demás atributos produce el escenario de automatización más puro.',
      risk_correct: 'La velocidad oculta errores sistémicos hasta que estos escalan.',
      risk_wrong: 'Aplicar este modo a tareas que requieren aunque sea un mínimo de experiencia.',
      examples: ['Generación automática de breves descripciones de eventos para un agregador', 'Producción por lotes de textos publicitarios para pruebas A/B', 'Asignación masiva de etiquetas y metadatos a un archivo multimedia'],
      related: ['С-17', 'С-22', 'С-23']
    },
    22: {
      title: 'Cadena de montaje rápida supervisada',
      human_role: 'Auditor rápido: la alta velocidad reduce el tiempo de revisión, pero los riesgos altos vuelven esa revisión obligatoria.',
      ai_role: 'Sistema de producción rápida con indicadores de riesgo integrados: marca automáticamente los casos no estándar para una revisión prioritaria.',
      logic: 'Esta es la tensión más aguda dentro de los escenarios de automatización: velocidad y riesgos altos al mismo tiempo. La solución está en una supervisión inteligente centrada en las unidades de riesgo y no en todo el volumen.',
      risk_correct: 'El propio sistema de señalización de riesgos puede equivocarse.',
      risk_wrong: 'La supervisión se convierte en un ritual formal en lugar de un control real.',
      examples: ['Localización masiva de contenidos jurídicamente sensibles con plazos muy ajustados', 'Producción urgente de comunicaciones oficiales de crisis a partir de plantillas', 'Producción rápida de contenido mediático en una industria regulada'],
      related: ['С-21', 'С-18']
    },
    23: {
      title: 'Producción autoral urgente',
      human_role: 'Autor activo a gran ritmo: preserva la voz autoral y responde con rapidez a las propuestas de la IA.',
      ai_role: 'Socio de producción reactivo: genera opciones con rapidez y se adapta a la dirección marcada por el autor.',
      logic: 'La cooperación es el único modo que permite simultáneamente velocidad y control autoral.',
      risk_correct: 'Bajo presión de tiempo, la voz autoral puede alisarse más rápido de lo que se percibe.',
      risk_wrong: 'Pasar a la automatización “porque no hay tiempo”.',
      examples: ['Publicación urgente de contenido autoral con deadline', 'Producción rápida de contenido para un directo o un boletín urgente', 'Desarrollo exprés de una solución visual para una publicación urgente'],
      related: ['С-19', 'С-24', 'С-31']
    },
    24: {
      title: 'Autoría urgente y responsable',
      human_role: 'Autor responsable bajo presión máxima: la velocidad no reduce las exigencias de calidad, y unos riesgos elevados exigen presencia autoral.',
      ai_role: 'Socio rápido de precisión: mantiene el ritmo y garantiza transparencia respecto a los niveles de confianza.',
      logic: 'Máxima tensión en los escenarios de implementación autoral. Un tándem de producción con máxima transparencia mutua.',
      risk_correct: 'Sobrecarga: demasiadas decisiones por unidad de tiempo bajo alta responsabilidad.',
      risk_wrong: 'Cualquier debilitamiento del control autoral puede convertirse en un error costoso.',
      examples: ['Comunicación de crisis urgente publicada bajo el nombre de un directivo', 'Publicación de emergencia de una declaración autoral importante', 'Ajuste urgente de contenido de gran alcance antes de su emisión'],
      related: ['С-23', 'С-20', 'С-32']
    },
    25: {
      title: 'Producción experta',
      human_role: 'Experto en modo de producción: aplica conocimientos especializados sin querer perder tiempo en operaciones técnicamente simples.',
      ai_role: 'Acelerador de producción para el experto: asume rutinas y propone soluciones estándar para elementos típicos.',
      logic: 'Una experiencia alta bloquea la automatización porque sigue siendo necesario el juicio experto; una motivación baja bloquea la cooperación por falta de deseo de diálogo iterativo.',
      risk_correct: 'La IA puede ir asumiendo gradualmente más de lo que debería y atrofiar la pericia.',
      risk_wrong: 'Pasar a la cooperación y gastar tiempo experto en iteraciones que podrían haberse resuelto de forma instrumental.',
      examples: ['Producción de contenido especializado por un autor experimentado con ayuda de la IA', 'Redacción de documentación técnica con secciones plantilla automatizadas por la IA', 'Creación de soluciones de diseño profesionales mientras la IA acelera rutinas'],
      related: ['С-17', 'С-26', 'С-27']
    },
    26: {
      title: 'Producción de precisión',
      human_role: 'Experto plenamente responsable del resultado. Trabaja de forma metódica y verifica cada elemento crítico.',
      ai_role: 'Asistente de producción preciso y orientado a la fiabilidad: señala casos no estándar y garantiza la trazabilidad de las decisiones.',
      logic: 'Perfil clásico de producción experta responsable. Aquí importan la precisión y el control, no la velocidad ni el diálogo.',
      risk_correct: 'Una dependencia excesiva del asistente de IA puede debilitar la vigilancia del experto.',
      risk_wrong: 'Pasar a la automatización en un contexto de alto riesgo: una falsa economía potencialmente fatal.',
      examples: ['Desarrollo final de un diseño para la fabricación de un producto físico', 'Preparación de documentación profesional para un regulador', 'Producción de la versión de archivo o pública de un proyecto importante'],
      related: ['С-25', 'С-30']
    },
    27: {
      title: 'Producción experta autoral',
      human_role: 'Maestro en el proceso: un experto para quien la presencia personal en cada decisión importa. La IA amplifica, pero no sustituye.',
      ai_role: 'Herramienta intelectual en manos del maestro: amplía capacidades sin interferir en el proceso autoral.',
      logic: 'Una experiencia alta y una motivación alta sin presión de tiempo constituyen el perfil ideal para una aumentación profunda. El experto busca refuerzo, no diálogo.',
      risk_correct: 'La IA genera la tentación de delegar “solo esta operación”, abriendo la puerta a una pérdida gradual de control.',
      risk_wrong: 'Pasar a la cooperación y ceder la iniciativa allí donde el experto debería liderar.',
      examples: ['Producción de contenidos autorales por un periodista o escritor experimentado', 'Creación de un objeto de diseño complejo con apoyo de la IA para operaciones técnicas', 'Desarrollo de un curso con ayuda de la IA para la estructuración'],
      related: ['С-25', 'С-28', 'С-31']
    },
    28: {
      title: 'Maestría responsable',
      human_role: 'Maestro con responsabilidad máxima: cada decisión se sopesa y cada elemento se comprueba. El más alto estándar de producción.',
      ai_role: 'Asistente disciplinado: preciso, transparente y sin asumir nunca más de lo que se le ha delegado.',
      logic: 'Se trata de la aumentación en su forma más exigente: el experto controla por completo cada decisión, y los riesgos altos hacen que ese control sea obligatorio.',
      risk_correct: 'Riesgo de sobrediseño: aplicar un estándar de control excesivamente alto a operaciones con riesgo individual bajo.',
      risk_wrong: 'Cualquier reducción del control experto en un contexto de alto riesgo.',
      examples: ['Producción de un producto insignia que define la reputación de un estudio', 'Versión final de un proyecto público bajo intensa atención mediática', 'Trabajo creativo responsable publicado bajo el nombre de un autor reconocido'],
      related: ['С-27', 'С-12', 'С-32']
    },
    29: {
      title: 'Aceleración experta',
      human_role: 'Experto en modo de alta producción: aplica conocimientos especializados con rapidez, sin iteraciones innecesarias.',
      ai_role: 'Acelerador de producción: automatiza todo aquello que no requiere juicio experto.',
      logic: 'Una experiencia alta, gran velocidad y baja motivación forman el escenario de aumentación más eficiente.',
      risk_correct: 'La velocidad reduce la profundidad: el experto puede recortar la verificación allí donde todavía sería necesaria.',
      risk_wrong: 'Pasar a la automatización bajo la lógica de “la IA puede encargarse de esto de todos modos”.',
      examples: ['Producción urgente de contenido técnicamente complejo por parte de un autor experimentado', 'Desarrollo exprés de una solución de diseño compleja bajo una deadline muy exigente', 'Preparación rápida de material experto para publicación'],
      related: ['С-25', 'С-30', 'С-31']
    },
    30: {
      title: 'Producción urgente de precisión',
      human_role: 'Experto sometido a la doble presión de la velocidad y de riesgos altos. Centra su atención en los puntos de control más críticos.',
      ai_role: 'Asistente de producción máximamente eficiente: trabaja rápido y prioriza los elementos que más necesitan revisión humana.',
      logic: 'El escenario de aumentación más tenso en la fase de implementación. El control experto acelerado significa que la persona comprueba lo adecuado, no absolutamente todo.',
      risk_correct: 'El sistema de priorización de puntos críticos puede equivocarse por sí mismo.',
      risk_wrong: 'Pasar a la automatización bajo presión y perder el control experto justo cuando más se necesita.',
      examples: ['Finalización urgente de un proyecto de alto riesgo antes de la entrega al cliente', 'Preparación de emergencia de material jurídicamente o reputacionalmente sensible', 'Implementación urgente de una solución técnica compleja con un plazo inmediato'],
      related: ['С-29', 'С-26']
    },
    31: {
      title: 'Cooperación de producción experta',
      human_role: 'Autor-experto en modo tándem activo. Trabaja con la IA como con un socio en cada decisión significativa.',
      ai_role: 'Socio de producción activo: genera opciones, se adapta al feedback experto y acelera la iteración.',
      logic: 'Una motivación alta y una experiencia alta exigen una presencia autoral activa dentro del proceso de producción: eso es cooperación. Una velocidad elevada hace poco viable una aumentación lenta.',
      risk_correct: 'La producción cooperativa a gran ritmo puede alisar la voz autoral.',
      risk_wrong: 'Pasar a la automatización “porque funciona” y perder de manera imperceptible la autoría.',
      examples: ['Producción urgente de contenido autoral significativo', 'Desarrollo rápido de una solución creativa compleja con voz autoral', 'Desarrollo iterativo a gran velocidad de un sistema de diseño con fuerte implicación del equipo'],
      related: ['С-27', 'С-15', 'С-32']
    },
    32: {
      title: 'Maestro bajo presión',
      human_role: 'Autor-experto con responsabilidad máxima bajo presión extrema. Todos los parámetros están en su punto más alto. La cooperación aquí no es una opción: es una necesidad.',
      ai_role: 'Socio del más alto nivel de confianza: rápido, transparente y profesionalmente disciplinado. No toma la iniciativa sin una petición explícita.',
      logic: 'La imagen especular del escenario 1 dentro de la matriz. El más exigente de los 32 escenarios: cooperación bajo presión máxima y con responsabilidad máxima.',
      risk_correct: 'Cuando la tensión extrema se convierte en la norma, el síndrome de “vivir siempre en modo 32” puede conducir al agotamiento profesional.',
      risk_wrong: 'Reducir el control bajo presión exactamente en el momento en que más se necesita.',
      examples: ['Finalización urgente de un proyecto insignia bajo el nombre de un especialista de primer nivel', 'Trabajo creativo de crisis de alto nivel con consecuencias inmediatas', 'Producción en tiempo real de contenido autoral significativo para una emisión en directo'],
      related: ['С-31', 'С-28', 'С-16']
    }
  }
};