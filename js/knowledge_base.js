// ============================================================================
// PSICOEDUCA ACADEMY - BASE DE CONOCIMIENTO ACADÉMICO Y EDUCATIVO (EXTENSIBLE)
// Base de datos estructurada en cliente para RAG (Retrieval-Augmented Generation)
// ============================================================================

const initialKnowledgeBase = [
    // ------------------------------------------------------------------------
    // 01. EDUCACIÓN Y DIDÁCTICA
    // ------------------------------------------------------------------------
    {
        id: "edu_concepto_fundamentos",
        tema: "Educación",
        subtema: "Fundamentos Educativos",
        concepto: "Concepto y Finalidades de la Educación",
        definicion: "Proceso sociocultural dinámico e intencional de facilitación del aprendizaje, adquisición de conocimientos, habilidades, valores, creencias y hábitos. Su finalidad trasciende la mera transmisión de información, buscando el desarrollo integral de la persona y la transformación reflexiva de su entorno.",
        autores: ["John Dewey", "Paulo Freire"],
        teorias_relacionadas: ["Pedagogía Crítica", "Educación Progresista"],
        conceptos_relacionados: ["Enseñanza", "Aprendizaje", "Pedagogía", "Didáctica", "Currículo"],
        aplicaciones_educativas: ["Diseño de proyectos integradores", "Construcción de ambientes de aprendizaje reflexivos"],
        aplicaciones_organizacionales: ["Programas de desarrollo de talento basados en competencias humanas y técnicas"],
        ejemplos: ["Un proyecto escolar colaborativo donde los estudiantes diagnostican y proponen soluciones a un problema ambiental de su comunidad."],
        actividades: ["Taller de formulación de la visión y propósito educativo personal o institucional."],
        errores_frecuentes: ["Reducir la educación a la instrucción académica o memorización de contenidos."],
        comparaciones: [
            {
                con: "Instrucción / Adiestramiento",
                diferencia: "La instrucción capacita para realizar tareas específicas; la educación forma el juicio crítico, la autonomía moral y la capacidad reflexiva."
            }
        ],
        nivel: ["basico", "intermedio"],
        publico: ["Docentes", "Formadores Organizacionales", "Estudiantes"],
        fuentes: [
            { autor: "Dewey, J.", titulo: "Democracia y Educación", ano: 1916 },
            { autor: "Freire, P.", titulo: "Pedagogía del Oprimido", ano: 1970 }
        ],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },
    {
        id: "edu_tipos_modalidades",
        tema: "Educación",
        subtema: "Modalidades Educativas",
        concepto: "Educación Formal, No Formal e Informal",
        definicion: "Clasificación de los contextos de aprendizaje según su grado de institucionalización y estructuración. La Educación Formal es institucionalizada, secuencial y conducente a títulos; la No Formal es estructurada pero al margen del sistema formal obligatorio (capacitaciones, cursos libres); y la Informal es el proceso asistemático continuo a lo largo de la vida a través de experiencias cotidianas.",
        autores: ["Philip Coombs", "Coombs & Ahmed"],
        teorias_relacionadas: ["Aprendizaje a lo largo de la vida (Lifelong Learning)"],
        conceptos_relacionados: ["Formación Continua", "Educación de Adultos", "Andragogía"],
        aplicaciones_educativas: ["Reconocimiento de saberes previos adquiridos informalmente para proyectos escolares."],
        aplicaciones_organizacionales: ["Estructuración de planes de capacitación empresarial (No Formal) articulados con la práctica laboral diaria (Informal)."],
        ejemplos: ["Un taller corporativo de 8 horas sobre liderazgo es Educación No Formal; aprender a negociar gestionando desacuerdos diarios en la oficina es Educación Informal."],
        actividades: ["Mapeo de fuentes de aprendizaje personal en las 3 modalidades."],
        errores_frecuentes: ["Creer que el aprendizaje real únicamente ocurre dentro de la Educación Formal."],
        comparaciones: [
            {
                con: "Educación Formal vs No Formal",
                diferencia: "La formal otorga grados académicos oficiales en un sistema jerárquico; la no formal responde a necesidades específicas inmediatas con flexibilidad curricular."
            }
        ],
        nivel: ["basico", "intermedio"],
        publico: ["Docentes", "Formadores Organizacionales", "Líderes", "Recursos Humanos"],
        fuentes: [{ autor: "Coombs, P. H.", titulo: "La crisis mundial de la educación", ano: 1968 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },
    {
        id: "edu_pedagogia_didactica",
        tema: "Educación",
        subtema: "Disciplinas Pedagógicas",
        concepto: "Pedagogía vs Didáctica",
        definicion: "La Pedagogía es la ciencia social encargada de teorizar, estudiar y orientar el fenómeno educativo en su dimensión integral, filosófica y social. La Didáctica es la rama o disciplina práctica de la pedagogía focalizada en los métodos, técnicas y estrategias del proceso de enseñanza-aprendizaje.",
        autores: ["Jan Amos Comenius", "Johann Friedrich Herbart"],
        teorias_relacionadas: ["Didáctica Magna", "Teoría del Diseño Instruccional"],
        conceptos_relacionados: ["Estrategia Didáctica", "Secuencia Didáctica", "Evaluación"],
        aplicaciones_educativas: ["Formulación del modelo pedagógico institucional y diseño de secuencias didácticas de clase."],
        aplicaciones_organizacionales: ["Diseño instruccional de micro-cápsulas formativas para colaboradores."],
        ejemplos: ["Estudiar el sentido ético y social de formar ciudadanos reflexivos es Pedagogía; diseñar una dinámica de Role Playing de 20 minutos con rúbrica es Didáctica."],
        actividades: ["Diseño de una secuencia didáctica en 3 momentos: Inicio (Activación), Desarrollo (Construcción) y Cierre (Metacognición)."],
        errores_frecuentes: ["Usar 'pedagogía' y 'didáctica' como sinónimos indistintos."],
        comparaciones: [
            {
                con: "Pedagogía vs Didáctica",
                diferencia: "La Pedagogía responde a ¿por qué y para qué educar?; la Didáctica responde a ¿cómo, con qué y cuándo enseñar?"
            }
        ],
        nivel: ["basico", "intermedio"],
        publico: ["Docentes", "Formadores Organizacionales", "Especialistas de Formación"],
        fuentes: [{ autor: "Comenius, J. A.", titulo: "Didáctica Magna", ano: 1630 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },
    {
        id: "edu_dua_inclusion",
        tema: "Educación",
        subtema: "Inclusión y Diversidad",
        concepto: "Diseño Universal para el Aprendizaje (DUA)",
        definicion: "Marco educativo basado en la investigación neurocientífica que orienta el diseño de entornos de aprendizaje accesibles e inclusivos desde el inicio, minimizando barreras mediante 3 principios fundamentales: Múltiples formas de Implicación (Motivación), Múltiples formas de Representación (Percepción), y Múltiples formas de Acción y Expresión.",
        autores: ["David Rose", "Anne Meyer", "CAST"],
        teorias_relacionadas: ["Neuroeducación", "Educación Inclusiva"],
        conceptos_relacionados: ["Accesibilidad", "Diversidad", "Ajustes Razonables"],
        aplicaciones_educativas: ["Ofrecer opciones de lectura de texto, audiolibro e infografía sintética para el mismo tema de estudio."],
        aplicaciones_organizacionales: ["Diseñar manuales de capacitación corporativa accesibles en formatos visuales, auditivos e interactivos."],
        ejemplos: ["Permitir que un estudiante demuestre lo aprendido entregando un ensayo escrito, grabando un podcast o creando un mapa conceptual."],
        actividades: ["Auditoría DUA de un plan de clase o capacitación empresarial."],
        errores_frecuentes: ["Confundir DUA con adaptar de forma individualizada y posterior un examen para un solo alumno."],
        comparaciones: [
            {
                con: "Ajustes Razonables Adaptativos",
                diferencia: "Los Ajustes Razonables son reactivos para un individuo; el DUA es proactivo y beneficia a todos desde la concepción del diseño."
            }
        ],
        nivel: ["intermedio", "avanzado"],
        publico: ["Docentes", "Formadores Organizacionales", "Diseñadores Instruccionales"],
        fuentes: [{ autor: "CAST", titulo: "Universal Design for Learning Guidelines version 2.2", ano: 2018 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },

    // ------------------------------------------------------------------------
    // 02. HISTORIA DE LA EDUCACIÓN
    // ------------------------------------------------------------------------
    {
        id: "hist_educacion_evocacion",
        tema: "Historia de la Educación",
        subtema: "Evolución Histórica de los Sistemas Educativos",
        concepto: "De la Educación Clásica a la Escuela Nueva y Contemporánea",
        definicion: "Trayectoria evolutiva del acto educativo desde las comunidades antiguas y la Paideia griega (focalizada en la formación integral del ciudadano ético y filosófico) pasando por la Escolástica Medieval, la alfabetización industrializada del siglo XIX (Escuela Tradicional enfocada en disciplina y memoria), hasta la revolución de la Escuela Nueva (Dewey, Montessori) y la educación basada en competencias e IA del siglo XXI.",
        autores: ["Sócrates", "Platón", "Aristóteles", "Quintiliano", "Comenius", "Rousseau", "Dewey", "Montessori"],
        teorias_relacionadas: ["Paideia Griega", "Escolástica", "Ilustración", "Escuela Nueva", "Paradigma Digital"],
        conceptos_relacionados: ["Mayéutica", "Trívium y Cuadrívium", "Escuela Tradicional", "Innovación Educativa"],
        aplicaciones_educativas: ["Implementar el diálogo socrático como técnica didáctica en debates universitarios y escolares."],
        aplicaciones_organizacionales: ["Transicionar de capacitaciones pasivas tipo 'exposición frontal magistral' hacia talleres experienciales basados en Escuela Nueva."],
        ejemplos: ["La Mayéutica de Sócrates utilizaba preguntas estratégicas para que el estudiante descubriera por sí mismo la verdad (hacer 'nacer' el conocimiento)."],
        actividades: ["Matriz comparativa de rol docente y método entre la Grecia Clásica, el Siglo XIX y el Siglo XXI."],
        errores_frecuentes: ["Asumir que las metodologías antiguas carecían de valor pedagógico o que la Escuela Tradicional no aportó a la cobertura masiva."],
        comparaciones: [
            {
                con: "Escuela Tradicional vs Escuela Nueva",
                diferencia: "La Escuela Tradicional centra el proceso en el profesor y la memorización pasiva; la Escuela Nueva centra el proceso en el estudiante, el interés y el aprendizaje activo."
            },
            {
                con: "Educación Medieval vs Contemporánea",
                diferencia: "La Medieval se estructuraba sobre el dogma y la autoridad del texto (Escolástica); la Contemporánea prioriza el pensamiento crítico, la evidencia científica y la adaptabilidad."
            }
        ],
        nivel: ["intermedio", "avanzado"],
        publico: ["Docentes", "Investigadores", "Estudiantes"],
        fuentes: [
            { autor: "Marrou, H. I.", titulo: "Historia de la educación en la antigüedad", ano: 1948 },
            { autor: "Abbagnano, N. & Visalberghi, A.", titulo: "Historia de la Pedagogía", ano: 1964 }
        ],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },

    // ------------------------------------------------------------------------
    // 03. CONSTRUCTIVISMO Y SUS AUTORES CLAVE
    // ------------------------------------------------------------------------
    {
        id: "const_piaget_desarrollo",
        tema: "Constructivismo",
        subtema: "Psicología Genética y Desarrollo Cognitivo",
        concepto: "Jean Piaget: Asimilación, Acomodación y Esquemas Cognitivos",
        definicion: "Teoría constructivista piagetiana que sostiene que el sujeto construye activamente el conocimiento al interactuar con el entorno. La asimilación es el proceso de integrar nueva información en esquemas cognitivos previos; la acomodación es la modificación de dichos esquemas cuando la nueva información entra en conflicto; y la equilibración es la autorregulación que restablece el balance mental.",
        autores: ["Jean Piaget"],
        teorias_relacionadas: ["Epistemología Genética", "Etapas del Desarrollo Cognitivo"],
        conceptos_relacionados: ["Esquema Cognitivo", "Desequilibrio Cognitivo", "Etapa Sensoriomotora", "Etapa Preoperacional", "Operaciones Concretas", "Operaciones Formales"],
        aplicaciones_educativas: ["Provocar desequilibrios cognitivos controlados mediante preguntas desafiantes para motivar la reorganización mental."],
        aplicaciones_organizacionales: ["Desdiseñar suposiciones obsoletas de trabajo planteando situaciones de cambio de proceso que requieran 'acomodación' mental."],
        ejemplos: ["Un niño que conoce solo perros ve un gato y dice '¡perrito!' (asimilación). Cuando nota que maúlla y trepa árboles, modifica su esquema para crear la categoría 'gato' (acomodación)."],
        actividades: ["Diseño de un reto de aprendizaje basado en preguntas de desequilibrio cognitivo."],
        errores_frecuentes: ["Creer que la asimilación y la acomodación ocurren por separado; son procesos complementarios indisolubles."],
        comparaciones: [
            {
                con: "Constructivismo Sociocultural de Vygotsky",
                diferencia: "Piaget enfatiza la acción del sujeto sobre el objeto físico y la maduración biológica previa; Vygotsky enfatiza la interacción social mediada culturalmente como motor del desarrollo."
            }
        ],
        nivel: ["intermedio", "avanzado"],
        publico: ["Docentes", "Psicopedagogos", "Formadores"],
        fuentes: [{ autor: "Piaget, J.", titulo: "La psicología de la inteligencia", ano: 1947 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },
    {
        id: "const_vygotsky_zdp",
        tema: "Constructivismo",
        subtema: "Teoría Sociocultural",
        concepto: "Lev Vygotsky: Zona de Desarrollo Próximo (ZDP) y Andamiaje",
        definicion: "Concepto central de la teoría sociocultural vygotskiana. La ZDP es la distancia entre el nivel real de desarrollo (lo que el sujeto puede hacer solo) y el nivel potencial (lo que puede lograr con la guía o colaboración de un par o mediador más experto). El andamiaje (concepto desarrollado por Bruner a partir de Vygotsky) es la estructura temporal de apoyo brindada en esa zona.",
        autores: ["Lev Vygotsky", "Jerome Bruner"],
        teorias_relacionadas: ["Teoría Sociocultural", "Aprendizaje Colaborativo"],
        conceptos_relacionados: ["Mediación Cultural", "Herramientas de Pensamiento", "Internalización", "Lenguaje Egocéntrico y Social"],
        aplicaciones_educativas: ["Formar parejas de aprendizaje heterogéneas y diseñar guías de estudio con soportes visuales que se retiran progresivamente."],
        aplicaciones_organizacionales: ["Implementar programas de Mentoría y Shadowing corporativo entre colaboradores senior y junior."],
        ejemplos: ["Un estudiante no puede estructurar una entrevista laboral por sí solo. Con una plantilla guía y el modelado del docente (andamiaje), logra redactar las preguntas. En la siguiente práctica lo realiza sin ayuda."],
        actividades: ["Diseño de una pauta de andamiaje en 3 niveles (Apoyo Alto -> Apoyo Medio -> Autonomía)."],
        errores_frecuentes: ["Confundir ZDP con la capacidad actual del estudiante o mantener el andamiaje permanentemente sin retirarlo."],
        comparaciones: [
            {
                con: "Aprendizaje Individualista",
                diferencia: "El aprendizaje individualista asume el desarrollo como un proceso aislado; la ZDP demuestra que las funciones psicológicas superiores emergen primero en el plano interpsicológico (social) y luego en el intrapsicológico (individual)."
            }
        ],
        nivel: ["basico", "intermedio", "avanzado"],
        publico: ["Docentes", "Formadores Organizacionales", "Líderes", "Instructores"],
        fuentes: [{ autor: "Vygotsky, L. S.", titulo: "El desarrollo de los procesos psicológicos superiores", ano: 1978 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },
    {
        id: "const_ausubel_significativo",
        tema: "Constructivismo",
        subtema: "Aprendizaje Significativo",
        concepto: "David Ausubel: Aprendizaje Significativo e Inclusión de Conocimientos Previos",
        definicion: "Proceso mediante el cual una nueva información se relaciona de manera no arbitraria y sustantiva con la estructura cognitiva previa del aprendiz. Requiere dos condiciones esenciales: que el material sea potencialmente significativo y que el estudiante manifieste una disposición positiva para aprender.",
        autores: ["David Ausubel", "Joseph Novak"],
        teorias_relacionadas: ["Teoría de la Asimilación", "Mapas Conceptuales"],
        conceptos_relacionados: ["Conocimientos Previos", "Inclusor", "Organizador Previo", "Diferenciación Progresiva"],
        aplicaciones_educativas: ["Presentar mapas conceptuales y realizar preguntas diagnósticas antes de introducir cualquier concepto científico nuevo."],
        aplicaciones_organizacionales: ["Conectar los nuevos sistemas de gestión tecnológica con las rutinas laborales conocidas de los empleados."],
        ejemplos: ["Explicar el funcionamiento del sistema circulatorio humano comparándolo con la red de tuberías de agua y bombeo de un edificio (organizador previo comparativo)."],
        actividades: ["Elaboración de un Mapa Conceptual Novakiano relacionando conocimientos previos con conceptos nuevos."],
        errores_frecuentes: ["Confundir aprendizaje significativo con aprendizaje 'divertido' o asumir que ocurre automáticamente por mostrar un video."],
        comparaciones: [
            {
                con: "Aprendizaje Memorístico / Repetitivo",
                diferencia: "El aprendizaje memorístico incorpora información de forma arbitraria sin conectarla con la estructura mental; el significativo transforma y enriquece la estructura cognitiva."
            }
        ],
        nivel: ["basico", "intermedio"],
        publico: ["Docentes", "Formadores", "Diseñadores Instruccionales"],
        fuentes: [{ autor: "Ausubel, D. P.", titulo: "Psicología Educativa: Un punto de vista cognoscitivo", ano: 1968 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },

    // ------------------------------------------------------------------------
    // 04. CONDUCTISMO Y CONCEPTOS CLAVE
    // ------------------------------------------------------------------------
    {
        id: "cond_skinner_operante",
        tema: "Conductismo",
        subtema: "Condicionamiento Operante",
        concepto: "B. F. Skinner: Condicionamiento Operante y Reforzamiento",
        definicion: "Teoría del aprendizaje asociativo que establece que la probabilidad de ocurrencia de una conducta se modifica en función de las consecuencias que le siguen en el ambiente. El reforzamiento incrementa la frecuencia de la conducta; la extinción o el castigo la disminuyen.",
        autores: ["B. F. Skinner", "Iván Pavlov", "Edward Thorndike", "John B. Watson"],
        teorias_relacionadas: ["Análisis Experimental de la Conducta", "Modificación de Conducta"],
        conceptos_relacionados: ["Refuerzo Positivo", "Refuerzo Negativo", "Castigo Positivo", "Castigo Negativo", "Moldeamiento", "Programas de Reforzamiento"],
        aplicaciones_educativas: ["Dar retroalimentación positiva inmediata e insignias (Gamificación) tras completar tareas académicas complejas."],
        aplicaciones_organizacionales: ["Sistemas de reconocimiento, incentivos puntuales y retroalimentación constructiva continua."],
        ejemplos: ["Otorgar puntos XP al entregar una tarea a tiempo es Refuerzo Positivo; exonerar de la entrega de un informe tedioso a quienes obtuvieron excelente desempeño es Refuerzo Negativo."],
        actividades: ["Matriz de identificación contingencial de conductas (Antecedente -> Conducta -> Consecuencia)."],
        errores_frecuentes: [
            "⚠️ ERROR GRAVE FRECUENTE: Confundir 'Refuerzo Negativo' con 'Castigo'. El Refuerzo Negativo NUNCA es un castigo; siempre AUMENTA la conducta al RETIRAR un estímulo desagradable o aversivo.",
            "Creer que el conductismo ignora los pensamientos por negar su existencia (en realidad, los considera conductas privadas no directamente observables)."
        ],
        comparaciones: [
            {
                con: "Refuerzo Negativo vs Castigo",
                diferencia: "El Refuerzo Negativo AUMENTA una conducta deseada al quitar un estímulo aversivo (ej: quitar una alarma molesta al ponerse el cinturón). El Castigo BUSCA DISMINUIR o eliminar una conducta no deseada."
            },
            {
                con: "Condicionamiento Clásico vs Operante",
                diferencia: "El Clásico (Pavlov) asocia dos estímulos e involucra respuestas involuntarias/reflejas; el Operante (Skinner) asocia la conducta voluntaria con sus consecuencias ambientales."
            }
        ],
        nivel: ["basico", "intermedio"],
        publico: ["Docentes", "Formadores", "Líderes", "Psicólogos"],
        fuentes: [{ autor: "Skinner, B. F.", titulo: "La conducta de los organismos", ano: 1938 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },

    // ------------------------------------------------------------------------
    // 05. BASE FICHAS DE AUTORES (15+ AUTORES)
    // ------------------------------------------------------------------------
    {
        id: "autor_piaget",
        tema: "Autores de Psicología y Educación",
        subtema: "Ficha Biográfica y Teórica",
        concepto: "Jean Piaget (1896-1980)",
        definicion: "Epistemólogo y biólogo suizo, padre de la Epistemología Genética. Revolucionó la psicología del desarrollo al demostrar que la mente infantil no es una versión en miniatura del adulto, sino que posee una estructura cualitativamente distinta que evoluciona en estadios.",
        autores: ["Jean Piaget"],
        teorias_relacionadas: ["Epistemología Genética", "Estadios del Desarrollo Cognitivo"],
        conceptos_relacionados: ["Asimilación", "Acomodación", "Equilibración", "Pensamiento Operatorio"],
        aplicaciones_educativas: ["Respetar el nivel de maduración cognitiva del estudiante y adecuar la complejidad de las tareas al estadio correspondiente."],
        aplicaciones_organizacionales: ["Estructuración de rutas de aprendizaje progresivas acordes con el nivel de experiencia del profesional."],
        ejemplos: ["Comprender que un niño menor de 6 años en etapa preoperacional tendrá dificultades con la conservación de volumen o masa."],
        actividades: ["Diseño de experimentos piagetianos de conservación de líquidos y volumen."],
        errores_frecuentes: ["Tratar de acelerar artificialmente los estadios madurativos mediante ejercitación memorística."],
        comparaciones: [{ con: "Lev Vygotsky", diferencia: "Piaget antepone el desarrollo al aprendizaje; Vygotsky sostiene que el aprendizaje lidera el desarrollo." }],
        nivel: ["intermedio"],
        publico: ["Docentes", "Psicólogos", "Estudiantes"],
        fuentes: [{ autor: "Piaget, J.", titulo: "Seis estudios de psicología", ano: 1964 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },
    {
        id: "autor_vygotsky",
        tema: "Autores de Psicología y Educación",
        subtema: "Ficha Biográfica y Teórica",
        concepto: "Lev Semiónovich Vygotsky (1896-1934)",
        definicion: "Psicólogo soviético, fundador de la Psicología Histórico-Cultural. Sostuvo que los procesos psicológicos superiores (pensamiento, lenguaje, atención voluntaria) se originan en las relaciones sociales y la mediación instrumental e histórica.",
        autores: ["Lev Vygotsky"],
        teorias_relacionadas: ["Teoría Histórico-Cultural", "Zona de Desarrollo Próximo"],
        conceptos_relacionados: ["Mediación", "Andamiaje", "Internalización", "Lenguaje"],
        aplicaciones_educativas: ["Aprendizaje colaborativo, tutoría entre pares y rol del docente como mediador cultural."],
        aplicaciones_organizacionales: ["Comunidades de práctica empresarial y mentoría en equipos de trabajo."],
        ejemplos: ["La utilización de diagramas de flujo compartidos como artefacto cultural para coordinar tareas complejas en equipo."],
        actividades: ["Evaluación dinámica en ZDP (evaluar lo que el aprendiz realiza con ayuda)."],
        errores_frecuentes: ["Considerar la mediación como interferencia o dependencia en lugar de facilitación del pensamiento autónomo."],
        comparaciones: [{ con: "Jean Piaget", diferencia: "Vygotsky coloca la interacción socio-histórica en la base del desarrollo cognitivo." }],
        nivel: ["intermedio"],
        publico: ["Docentes", "Formadores", "Líderes"],
        fuentes: [{ autor: "Vygotsky, L. S.", titulo: "Pensamiento y Lenguaje", ano: 1934 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },
    {
        id: "autor_freire",
        tema: "Autores de Psicología y Educación",
        subtema: "Ficha Biográfica y Teórica",
        concepto: "Paulo Freire (1921-1997)",
        definicion: "Educador y pedagogo brasileño, una de las figuras más influyentes de la pedagogía crítica mundial. Creador de la educación liberadora frente a la 'educación bancaria', defendiendo la alfabetización dialógica y la concientización política.",
        autores: ["Paulo Freire"],
        teorias_relacionadas: ["Pedagogía Crítica", "Educación Liberadora"],
        conceptos_relacionados: ["Concientización", "Educación Bancaria", "Diálogo", "Tema Generador"],
        aplicaciones_educativas: ["Partir de los problemas reales del contexto de los estudiantes para generar aprendizaje dialógico."],
        aplicaciones_organizacionales: ["Crear espacios participativos donde la voz del colaborador reconfigure los procesos de trabajo."],
        ejemplos: ["Sustituir el dictado pasivo de temas por círculos de cultura donde se discute un problema de la comunidad."],
        actividades: ["Construcción de un 'Círculo de Cultura' sobre un dilema ético profesional."],
        errores_frecuentes: ["Reducir la propuesta de Freire a una técnica de alfabetización rápida sin considerar su dimensión ética y política."],
        comparaciones: [{ con: "Escuela Tradicional Bancaria", diferencia: "La bancaria deposita datos en alumnos pasivos; la liberadora promueve la coinvestigación dialógica del mundo." }],
        nivel: ["intermedio", "avanzado"],
        publico: ["Docentes", "Líderes Sociales", "Formadores"],
        fuentes: [{ autor: "Freire, P.", titulo: "Pedagogía de la Autonomía", ano: 1996 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },

    // ------------------------------------------------------------------------
    // 06. EDUCACIÓN COGNITIVA Y METACOGNICIÓN
    // ------------------------------------------------------------------------
    {
        id: "cog_metacognicion_autorregulacion",
        tema: "Educación Cognitiva",
        subtema: "Procesos Cognitivos Superiores",
        concepto: "Metacognición y Autorregulación del Aprendizaje",
        definicion: "La Metacognición (John Flavell) es el conocimiento y control reflexivo sobre los propios procesos cognitivos ('aprender a aprender'). La Autorregulación implica la planificación, monitoreo continuo y evaluación crítica que el estudiante realiza activamente durante la ejecución de una tarea.",
        autores: ["John Flavell", "Barry Zimmerman", "Ann Brown"],
        teorias_relacionadas: ["Procesamiento de Información", "Aprendizaje Autodirigido"],
        conceptos_relacionados: ["Atención", "Memoria de Trabajo", "Planificación", "Monitoreo", "Autoevaluación"],
        aplicaciones_educativas: ["Implementar 'diarios de metacognición' al final de cada unidad: ¿Qué aprendí?, ¿Qué estrategia me funcionó?, ¿Qué corregiré?"],
        aplicaciones_organizacionales: ["Revisiones Post-Acción (After Action Reviews - AAR) en proyectos corporativos."],
        ejemplos: ["Un profesional que nota que distrae su atención con notificaciones decide aplicar la técnica Pomodoro y evalúa su efectividad al finalizar la jornada."],
        actividades: ["Diseño de una Rúbrica de Autoevaluación Metacognitiva."],
        errores_frecuentes: ["Asumir que la metacognición es un proceso puramente teórico desvinculado de la acción práctica."],
        comparaciones: [
            {
                con: "Cognición vs Metacognición",
                diferencia: "La cognición ejecuta el procesamiento mental (recordar, resolver); la metacognición monitorea y juzga la eficiencia de ese procesamiento."
            }
        ],
        nivel: ["intermedio", "avanzado"],
        publico: ["Docentes", "Formadores", "Estudiantes", "Líderes"],
        fuentes: [
            { autor: "Flavell, J. H.", titulo: "Metacognition and cognitive monitoring", ano: 1979 },
            { autor: "Zimmerman, B. J.", titulo: "Becoming a self-regulated learner", ano: 2002 }
        ],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },

    // ------------------------------------------------------------------------
    // 07. PSICOLOGÍA DE LAS EMOCIONES Y EDUCACIÓN
    // ------------------------------------------------------------------------
    {
        id: "emoc_inteligencia_clima",
        tema: "Psicología de las Emociones",
        subtema: "Emoción, Neurociencia y Aprendizaje",
        concepto: "Inteligencia Emocional y Clima de Aprendizaje",
        definicion: "Las emociones son respuestas neurobiológicas rápidas que dirigen la atención e influyen directamente en la consolidación de la memoria a largo plazo en el hipocampo. Un clima seguro libre de amenaza reduce la activación de la amígdala cerebral, posibilitando que las funciones ejecutivas de la corteza prefrontal operen con máxima eficiencia.",
        autores: ["Daniel Goleman", "Peter Salovey", "John Mayer", "Francisco Mora"],
        teorias_relacionadas: ["Neuroeducación", "Aprendizaje Socioemocional (SEL)"],
        conceptos_relacionados: ["Regulación Emocional", "Empatía", "Estrés Académico", "Seguridad Psicología", "Motivación Intrínseca"],
        aplicaciones_educativas: ["Iniciar clases con 3 minutos de encuadre emocional y validar los niveles de ansiedad antes de exámenes."],
        aplicaciones_organizacionales: ["Fomentar la 'Seguridad Psicológica' en equipos de trabajo para incentivar la innovación sin miedo al error."],
        ejemplos: ["Un estudiante paralizado por la ansiedad ante una exposición no puede acceder a su memoria debido al secuestro amigdalino. La desmitificación del error y la respiración guiada restablecen la calma."],
        actividades: ["Construcción del 'Semáforo de Regulación Emocional' en el entorno de aprendizaje."],
        errores_frecuentes: ["Creer que la emoción y la razón son procesos opuestos; la neurociencia demuestra que no existe aprendizaje duradero sin emoción."],
        comparaciones: [
            {
                con: "Emoción vs Sentimiento",
                diferencia: "La emoción es una respuesta fisiológica autoinmune e inmediata; el sentimiento es la toma de conciencia consciente y racionalizada de esa emoción en el tiempo."
            }
        ],
        nivel: ["basico", "intermedio"],
        publico: ["Docentes", "Formadores", "Líderes", "Recursos Humanos"],
        fuentes: [
            { autor: "Goleman, D.", titulo: "Inteligencia Emocional", ano: 1995 },
            { autor: "Mora, F.", titulo: "Neuroeducación: solo se puede aprender aquello que se ama", ano: 2013 }
        ],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },

    // ------------------------------------------------------------------------
    // 08. EDUCACIÓN DEL SIGLO XXI Y FUTURO DEL TRABAJO
    // ------------------------------------------------------------------------
    {
        id: "s21_competencias_ia",
        tema: "Educación del Siglo XXI",
        subtema: "Competencias Globales y Transformación Digital",
        concepto: "Competencias 4C e Inteligencia Artificial en Educación",
        definicion: "Conjunto de habilidades transversales fundamentales para navegar la sociedad del conocimiento y el trabajo del siglo XXI: Pensamiento Crítico, Creatividad, Comunicación y Colaboración (las 4C), integrando la Alfabetización Digital y la interacción ética con tecnologías de Inteligencia Artificial.",
        autores: ["Partnership for 21st Century Skills (P21)", "UNESCO"],
        teorias_relacionadas: ["Conectivismo", "Educación Híbrida", "Lifelong Learning"],
        conceptos_relacionados: ["Alfabetización Algorítmica", "Pensamiento Computacional", "Reskilling", "Upskilling"],
        aplicaciones_educativas: ["Enseñar a los estudiantes a auditar críticamente y contrastar las respuestas generadas por herramientas de IA."],
        aplicaciones_organizacionales: ["Desarrollo de planes de Upskilling laboral enfocados en resolución de problemas complejos inter-disciplinares."],
        ejemplos: ["Utilizar un chatbot de IA como 'contraparte socrática' para defender una postura en un debate de bioética."],
        actividades: ["Taller de evaluación crítica de contenido generado por IA mediante pensamiento crítico."],
        errores_frecuentes: ["Prohibir la tecnología o asumir que el dominio instrumental de dispositivos equivale a alfabetización digital crítica."],
        comparaciones: [
            {
                con: "Educación Tradicional Analógica vs Digital Siglo XXI",
                diferencia: "La analógica priorizaba la acumulación de datos en memoria; la del Siglo XXI prioriza el filtrado crítico, la curaduría de información y la resolución creativa de problemas."
            }
        ],
        nivel: ["intermedio", "avanzado"],
        publico: ["Docentes", "Formadores Organizacionales", "Líderes", "Estudiantes"],
        fuentes: [{ autor: "UNESCO", titulo: "Reimaginar juntos nuestros futuros: un nuevo contrato social para la educación", ano: 2021 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    },

    // ------------------------------------------------------------------------
    // 09. FORMACIÓN ORGANIZACIONAL Y LIDERAZGO
    // ------------------------------------------------------------------------
    {
        id: "org_liderazgo_feedback",
        tema: "Formación Organizacional",
        subtema: "Liderazgo y Gestión de Talento",
        concepto: "Feedback Constructivo y Modelo Andragógico de Capacitación",
        definicion: "Estrategias de desarrollo profesional orientadas a adultos en entornos laborales. Aplica los principios de la Andragogía (Knowles): necesidad de saber el 'por qué', orientación práctica a la resolución de problemas y aprovechamiento de la experiencia acumulada. El feedback constructivo utiliza modelos como SBI (Situation-Behavior-Impact) para potenciar el desempeño.",
        autores: ["Malcolm Knowles", "Center for Creative Leadership (CCL)"],
        teorias_relacionadas: ["Andragogía", "Desarrollo Organizacional"],
        conceptos_relacionados: ["Feedback SBI", "Conversaciones Difíciles", "Mentoría", "Empowerment"],
        aplicaciones_educativas: ["Aplicar evaluación entre pares con formato de feedback estructurado en proyectos grupales."],
        aplicaciones_organizacionales: ["Entrenar a supervisores y líderes en reuniones de evaluación del desempeño basadas en hechos sin descalificación personal."],
        ejemplos: ["Modelo SBI: 'En la reunión de ayer con el cliente (Situación), interrumpiste dos veces al diseñador (Conducta), lo que causó que el cliente percibiera falta de alineación en el equipo (Impacto).'"],
        actividades: ["Simulación de conversación de Feedback SBI con role play."],
        errores_frecuentes: ["Dar feedback ambiguo ('tienes que mejorar tu actitud') o mezclar elogios fingidos con críticas sin hechos concretos."],
        comparaciones: [
            {
                con: "Pedagogía (Niños) vs Andragogía (Adultos)",
                diferencia: "La Pedagogía atiende a aprendices dependientes que construyen experiencia; la Andragogía atiende a aprendices autónomos cuya experiencia previa es el recurso primario de aprendizaje."
            }
        ],
        nivel: ["intermedio", "avanzado"],
        publico: ["Formadores Organizacionales", "Líderes", "Supervisores", "Recursos Humanos"],
        fuentes: [{ autor: "Knowles, M. S.", titulo: "La práctica moderna de la educación de adultos", ano: 1970 }],
        tipo_conocimiento: "academico",
        fecha_actualizacion: "2026-10-04",
        validado: true
    }
];

// Helper para gestionar la persistencia y ampliación en LocalStorage
const getKnowledgeBase = () => {
    try {
        const stored = localStorage.getItem('psicoeduca_custom_kb');
        if (stored) {
            const customItems = JSON.parse(stored);
            return [...initialKnowledgeBase, ...customItems];
        }
    } catch (e) {
        console.error("Error al cargar custom KB:", e);
    }
    return initialKnowledgeBase;
};

const saveCustomKnowledgeItem = (newItem) => {
    try {
        const stored = JSON.parse(localStorage.getItem('psicoeduca_custom_kb') || '[]');
        stored.unshift(newItem);
        localStorage.setItem('psicoeduca_custom_kb', JSON.stringify(stored));
        return true;
    } catch (e) {
        console.error("Error al guardar ítem en KB:", e);
        return false;
    }
};

if (typeof window !== 'undefined') {
    window.psicoeducaKnowledgeBase = getKnowledgeBase();
    window.saveCustomKnowledgeItem = saveCustomKnowledgeItem;
}
