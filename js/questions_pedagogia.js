/**
 * PSICOEDUCA ACADEMY - Banco de Preguntas
 * Instrumento 2: Fundamentos de Pedagogía (40 preguntas completas)
 * Dimensiones:
 * 1. Historia y Epistemología Pedagógica (preguntas 1 a 10)
 * 2. Teorías del Aprendizaje (preguntas 11 a 20)
 * 3. Autores y Modelos Pedagógicos (preguntas 21 a 30)
 * 4. Análisis Pedagógico Aplicado (preguntas 31 a 40)
 * Distribución: 12 Básicas, 18 Intermedias, 10 Avanzadas | 10 Conceptuales, 10 Análisis, 10 Aplicación, 10 Problema
 */

window.QUESTIONS_PEDAGOGIA = [
    // =========================================================================
    // DIMENSIÓN 1: HISTORIA Y EPISTEMOLOGÍA PEDAGÓGICA (Preguntas 1 a 10)
    // =========================================================================
    {
        id: "fp-01",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Reconocer los orígenes de la pedagogía moderna y la obra fundacional de Jan Amos Comenius.",
        themeCategory: "Origen de la pedagogía moderna",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Por qué Jan Amos Comenius (Comenio) es unánimemente reconocido como el padre de la pedagogía moderna a través de su obra 'Didáctica Magna' (1657)?",
        options: [
            "Porque propuso por primera vez un método sistemático, universal y graduado para 'enseñar todo a todos' (pansofía), fundamentado en el desarrollo natural.",
            "Porque inventó el primer examen estandarizado de opción múltiple con computadora electrónica.",
            "Porque defendió que la educación debía reservarse exclusivamente para las clases aristocráticas y los clérigos.",
            "Porque prohibió terminantemente el uso de libros e ilustraciones visuales en las escuelas de Europa."
        ],
        correctAnswer: 0,
        explanationCorrect: "Comenio revolucionó la educación con la 'Didáctica Magna' al sistematizar la enseñanza por etapas evolutivas, promover la escuela pública universal y crear el 'Orbis Sensualium Pictus', primer libro ilustrado de texto, bajo el principio de la pansofía.",
        explanationIncorrect: "La opción B es anacrónica por siglos. La opción C es lo opuesto a la pansofía ('enseñar todo a todos'). La opción D es falsa, Comenio fue pionero en el uso de imágenes didácticas.",
        recommendation: "Leer fragmentos fundamentales de la 'Didáctica Magna' de Comenio para comprender la génesis de los sistemas escolares modernos."
    },
    {
        id: "fp-02",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Diferenciar los postulados centrales de la Escuela Tradicional frente al movimiento de la Escuela Activa.",
        themeCategory: "Escuela Tradicional vs Escuela Nueva",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es la ruptura epistemológica y metodológica más radical que introduce el movimiento de la Escuela Nueva o Activa (Montessori, Decroly, Dewey) frente a la Escuela Tradicional?",
        options: [
            "El traslado del centro del acto educativo desde el maestro magistral y el programa rígido hacia el niño, su actividad, sus intereses y su contexto.",
            "La sustitución de los profesores por máquinas de enseñar sin ninguna mediación humana.",
            "La imposición de castigos físicos más severos para erradicar cualquier manifestación de espontaneidad infantil.",
            "La eliminación de cualquier tipo de interacción social entre los estudiantes dentro del aula."
        ],
        correctAnswer: 0,
        explanationCorrect: "La Escuela Nueva protagonizó la 'revolución copernicana' en educación (en palabras de Claparède): el alumno dejó de ser un receptor pasivo (magistrocentrismo) para convertirse en el protagonista activo de su propio aprendizaje (paidocentrismo).",
        explanationIncorrect: "La opción B alude a caricaturas de la instrucción automatizada. La opción C corresponde a la disciplina autoritaria del modelo tradicional que la Escuela Nueva combatió. La opción D contradice el énfasis cooperativo de la Escuela Activa.",
        recommendation: "Estudiar los principios del movimiento de la Escuela Nueva y las obras de María Montessori y Ovide Decroly."
    },
    {
        id: "fp-03",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Distinguir las nociones conceptuales de educación, pedagogía y didáctica.",
        themeCategory: "Conceptos fundamentales de educación y pedagogía",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En el campo teórico de las ciencias de la educación, ¿cómo se delimita con precisión la relación entre Educación, Pedagogía y Didáctica?",
        options: [
            "La Educación es la práctica social global; la Pedagogía es la disciplina que reflexiona y teoriza sobre ella; y la Didáctica es la disciplina pedagógica aplicada que orienta los métodos de enseñanza.",
            "Son tres sinónimos exactos e intercambiables que se refieren indistintamente a cuidar niños en una guardería.",
            "La Pedagogía es únicamente el castigo escolar, la Didáctica es el cobro de mensualidades y la Educación es el edificio físico.",
            "La Didáctica engloba a la Pedagogía y esta a su vez anula la existencia de la Educación como fenómeno social."
        ],
        correctAnswer: 0,
        explanationCorrect: "Siguiendo la epistemología pedagógica (Zuluaga, Runge, Camilloni): la Educación es el fenómeno sociocultural formativo; la Pedagogía es el saber sistemático, reflexivo y teórico sobre dicho fenómeno; y la Didáctica es la rama de la pedagogía que se ocupa específicamente de los procesos de enseñanza y aprendizaje.",
        explanationIncorrect: "La opción B ignora la distinción epistemológica elemental de la disciplina. Las opciones C y D carecen por completo de rigor conceptual y teórico.",
        recommendation: "Consultar 'Pedagogía y epistemología' de Olga Lucía Zuluaga para profundizar en el estatuto conceptual de la pedagogía."
    },
    {
        id: "fp-04",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Analizar el pensamiento pedagógico ilustrado y el aporte de Jean-Jacques Rousseau.",
        themeCategory: "Pensamiento pedagógico de la Ilustración",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "En su obra 'Emilio, o De la educación' (1762), Jean-Jacques Rousseau propone el concepto de 'educación negativa'. ¿Qué significa este concepto en su filosofía pedagógica?",
        options: [
            "Inculcar en el niño el pesimismo, el desprecio por la vida y el rechazo a la ciencia.",
            "Proteger el desarrollo natural del niño de las influencias corruptoras de la sociedad, permitiendo que aprenda por la experiencia directa con las cosas antes que por preceptos morales verbales.",
            "Castigar físicamente al estudiante ante cualquier duda para forjar un carácter insensible.",
            "Impedir que el niño aprenda a leer o a comunicarse con otros seres humanos durante toda su existencia."
        ],
        correctAnswer: 1,
        explanationCorrect: "Rousseau concibe la 'educación negativa' no como una carencia, sino como una pedagogía de la preservación: no anticipar virtudes ni verdades antes de que la razón madure naturalmente, evitando los vicios sociales y respetando las etapas del desarrollo infantil.",
        explanationIncorrect: "Las opciones A, C y D interpretan la palabra 'negativa' en un sentido vulgar, distorsionando radicalmente el pensamiento naturalista de Rousseau.",
        recommendation: "Analizar los cinco libros del 'Emilio' de Rousseau y su impacto en la pedagogía contemporánea."
    },
    {
        id: "fp-05",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Analizar la relación sociológica y política entre educación, poder y reproducción social.",
        themeCategory: "Pedagogía y sociedad",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Las teorías de la reproducción en educación (Pierre Bourdieu y Jean-Claude Passeron, 'La Reproducción', 1970) sostienen que la escuela no es un espacio neutro. ¿Cuál es su tesis central?",
        options: [
            "Que la escuela reproduce biológicamente a las especies animales mediante técnicas de laboratorio escolar.",
            "Que la escuela ejerce violencia simbólica al legitimar y reproducir el capital cultural de las clases dominantes, presentándolo como mérito universal individual.",
            "Que todos los estudiantes tienen exactamente las mismas oportunidades socioeconómicas garantizadas desde su nacimiento.",
            "Que los sistemas educativos fueron diseñados por sindicatos de maestros para evitar el avance de la economía."
        ],
        correctAnswer: 1,
        explanationCorrect: "Bourdieu y Passeron demostraron empíricamente que el sistema educativo formal ejerce una violencia simbólica invisible: premia el 'habitus' y el capital cultural heredado por las élites, disimulando las desigualdades de clase bajo el mito de la meritocracia individual.",
        explanationIncorrect: "La opción A confunde reproducción sociológica con reproducción celular biológica. La opción C es la ilusión meritocrática desmentida por la teoría sociológica. La opción D es un prejuicio acientífico.",
        recommendation: "Estudiar los conceptos de 'capital cultural', 'habitus' y 'violencia simbólica' de Pierre Bourdieu."
    },
    {
        id: "fp-06",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Contrastar los modelos pedagógicos conductista, tradicional y constructivista.",
        themeCategory: "Modelos pedagógicos contemporáneos",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Al contrastar el rol del docente en el modelo transmisionista tradicional con el rol del docente en el modelo constructivista, ¿cuál es la diferencia fundamental?",
        options: [
            "En el tradicional el docente es emisor monopolizador del saber y el alumno receptor pasivo; en el constructivista el docente es mediador y diseñador de entornos desafiantes donde el estudiante construye significado.",
            "En el tradicional el docente jamás asiste a clase; en el constructivista el docente habla sin parar durante 8 horas continuas.",
            "Ambos modelos conciben el aprendizaje como el almacenamiento mecánico de datos en la memoria a corto plazo.",
            "En el constructivismo se prohíbe terminantemente que el docente interactúe con los estudiantes."
        ],
        correctAnswer: 0,
        explanationCorrect: "El modelo transmisionista asume la mente del estudiante como una 'tábula rasa' a llenar; el constructivismo postula que el conocimiento es una construcción activa del sujeto interactuando con el objeto y los otros, mediada pedagógicamente por el docente.",
        explanationIncorrect: "Las opciones B y D son disparates que caricaturizan ambos modelos. La opción C describe únicamente la perspectiva mecanicista del conductismo o asociacionismo tradicional.",
        recommendation: "Revisar 'Hacia una pedagogía del conocimiento' de Rafael Flórez Ochoa para profundizar en modelos pedagógicos."
    },
    {
        id: "fp-07",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Comprender la función emancipadora de la pedagogía crítica latinoamericana.",
        themeCategory: "Pedagogía crítica latinoamericana",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "¿Qué postula Paulo Freire al criticar lo que denominó la 'concepción bancaria de la educación' en 'Pedagogía del oprimido' (1968)?",
        options: [
            "Que las escuelas deben cobrar intereses financieros usurarios por cada libro prestado en la biblioteca.",
            "Que la educación tradicional concibe al educando como un recipiente vacío en el que el educador 'deposita' contenidos, anulando su capacidad crítica y manteniéndolo en la pasividad.",
            "Que la economía internacional debe reemplazar las asignaturas escolares por cursos de inversión en bolsa de valores.",
            "Que los bancos comerciales son los únicos lugares idóneos para instalar escuelas primarias."
        ],
        correctAnswer: 1,
        explanationCorrect: "La 'educación bancaria' freiriana cosifica al educando transformándolo en una vasija receptora de depósitos verbales de un educador sabelotodo, perpetuando la dominación; Freire propone en su lugar la 'educación problematizadora y dialógica' que emancipa y concientiza.",
        explanationIncorrect: "Las opciones A, C y D toman la metáfora bancaria en sentido literal financiero, perdiendo por completo la crítica política y epistemológica de Freire.",
        recommendation: "Leer los capítulos 1 y 2 de 'Pedagogía del oprimido' de Paulo Freire."
    },
    {
        id: "fp-08",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Aplicar la perspectiva histórica pedagógica para resolver dilemas educativos modernos.",
        themeCategory: "Aplicación de modelos históricos",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Una institución educativa decide eliminar las filas alineadas de pupitres, los timbres fabriles y las materias aisladas, organizando en su lugar rincones de trabajo experimental y proyectos vinculados a la huerta y la carpintería escolar. ¿Qué herencia pedagógica histórica está aplicando directamente en su praxis?",
        options: [
            "La pedagogía jesuítica del Ratio Studiorum del siglo XVI.",
            "El movimiento pedagógico de la Escuela Activa y el método de proyectos de John Dewey y Célestin Freinet.",
            "El sistema lancasteriano de enseñanza mutua disciplinaria fabril.",
            "La escolástica medieval basada en la lectio y la disputatio abstracta."
        ],
        correctAnswer: 1,
        explanationCorrect: "La transformación de las aulas fabriles hacia talleres vivos de trabajo manual, intelectual y cooperativo (talleres, rincones, asambleas e imprenta escolar) es la materialización directa de la Escuela Activa (Freinet, Dewey, Decroly).",
        explanationIncorrect: "La opción A representa la disciplina rígida humanista jesuita. La opción C fue un modelo masivo de monitores para disciplinar a las clases obreras en la Revolución Industrial. La opción D es un método dogmático puramente verbalista.",
        recommendation: "Estudiar las técnicas pedagógicas de Célestin Freinet (texto libre, correspondencia escolar, imprenta en la escuela)."
    },
    {
        id: "fp-09",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Evaluar críticamente las corrientes pedagógicas contemporáneas frente a la digitalización.",
        themeCategory: "Epistemología pedagógica en la era digital",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "Un directivo tecnológico sostiene que 'con la inteligencia artificial y los motores de búsqueda, la pedagogía ha muerto, porque los alumnos ya tienen todo el conocimiento en su teléfono'. Desde una sólida fundamentación epistemológica, ¿cuál es la refutación pedagógica correcta?",
        options: [
            "El directivo tiene toda la razón; los docentes deben renunciar y clausurar los centros educativos.",
            "Tener acceso a información dispersa no equivale a construir conocimiento significativo ni desarrollar pensamiento crítico, ético y contextualizado, lo cual exige mediación pedagógica intencionada.",
            "La pedagogía consiste únicamente en vigilar que los estudiantes no toquen los teléfonos celulares.",
            "Los motores de búsqueda son una invención que desaparecerá en los próximos tres meses por ley natural."
        ],
        correctAnswer: 1,
        explanationCorrect: "La epistemología pedagógica diferencia tajantemente el dato o información bruta del conocimiento: el aprendizaje es un proceso humano activo de transformación cognitiva, comprensión profunda, juicio crítico y aplicación ética que requiere mediación pedagógica, andamiaje y reflexión.",
        explanationIncorrect: "La opción A claudica ante un determinismo tecnológico superficial. Las opciones C y D carecen de fundamento científico y pedagógico.",
        recommendation: "Revisar debates sobre el Conectivismo (George Siemens) y las críticas pedagógicas a la tecnolatría educativa."
    },
    {
        id: "fp-10",
        testId: "pedagogia",
        dimensionId: "historia",
        dimensionName: "Historia y Epistemología Pedagógica",
        competency: "Resolver problemas de diseño institucional integrando fundamentos pedagógicos plurales.",
        themeCategory: "Diseño de modelos pedagógicos institucionales",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Una universidad corporativa que capacita a 10.000 ingenieros diseña su modelo educativo institucional. La junta directiva exige que 'los egresados sean innovadores, críticos y éticos', pero su currículo actual es 100% memorístico, transmisionista y punitivo. Como arquitecto pedagógico, ¿cuál es la ruta de transformación estructural requerida?",
        options: [
            "Comprar computadoras de última generación y dejar intactos los métodos pedagógicos y de evaluación.",
            "Alinear el modelo pedagógico hacia un enfoque socioconstructivista y crítico, migrando de la enseñanza transmisionista a metodologías de resolución de problemas reales, trabajo colaborativo y evaluación auténtica.",
            "Duplicar las horas de clase magistral para que los docentes hablen el doble de tiempo en cada jornada.",
            "Eliminar todas las asignaturas técnicas y enseñar únicamente poesía clásica medieval."
        ],
        correctAnswer: 1,
        explanationCorrect: "Un perfil de egreso innovador y ético es incompatible con una epistemología transmisionista pasiva: se requiere coherencia institucional alineando el modelo pedagógico (socioconstructivismo), la didáctica (ABP, proyectos) y la evaluación (auténtica y formativa).",
        explanationIncorrect: "La opción A incurre en el error común del tecno-centrismo sin innovación pedagógica. La opción C acentúa el problema al reforzar la pasividad. La opción D desconoce las necesidades del perfil profesional de ingeniería.",
        recommendation: "Diseñar Proyectos Educativos Institucionales (PEI) con alineación explícita entre misión, modelo pedagógico y prácticas de aula."
    },

    // =========================================================================
    // DIMENSIÓN 2: TEORÍAS DEL APRENDIZAJE (Preguntas 11 a 20)
    // =========================================================================
    {
        id: "fp-11",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Identificar los principios fundantes del paradigma conductista del aprendizaje.",
        themeCategory: "Paradigma conductista",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En el marco del conductismo clásico y operante (Pavlov, Watson, Skinner), ¿cómo se define formalmente el aprendizaje?",
        options: [
            "Como un cambio observable, medible y cuantificable en la conducta del organismo, producido como respuesta a estímulos ambientales y reforzadores.",
            "Como una reestructuración interna profunda de los esquemas conceptuales en la memoria a largo plazo.",
            "Como la internalización de herramientas semióticas y culturales en la zona de desarrollo próximo.",
            "Como un acto místico de iluminación espiritual no verificable empíricamente."
        ],
        correctAnswer: 0,
        explanationCorrect: "Para el conductismo radical, la mente es una 'caja negra' inaccesible a la introspección científica; por ende, el aprendizaje se reduce operacionalmente al cambio de conducta observable determinado por la relación entre estímulos, respuestas y contingencias de refuerzo.",
        explanationIncorrect: "La opción B define el aprendizaje desde la psicología cognitiva (Piaget, procesamiento de información). La opción C es la definición sociocultural de Vygotsky. La opción D es contraria a la epistemología positivista conductista.",
        recommendation: "Consultar 'Ciencia y conducta humana' de B. F. Skinner para comprender las bases del condicionamiento operante."
    },
    {
        id: "fp-12",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Reconocer los principios del cognitivismo y el modelo de procesamiento de la información.",
        themeCategory: "Paradigma cognitivista",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Qué postula el modelo de procesamiento de la información (Atkinson y Shiffrin) respecto a la estructura de la memoria humana?",
        options: [
            "Que la memoria no existe y que todas las decisiones humanas son guiadas por el horóscopo.",
            "Que el flujo cognitivo transita a través de registros sensoriales, pasa a la memoria de trabajo (a corto plazo con capacidad limitada) y se codifica en la memoria a largo plazo.",
            "Que los seres humanos nacen con toda la información universal grabada y no requieren aprender nada nuevo.",
            "Que la memoria de trabajo tiene una capacidad infinita e inmune al olvido o a la sobrecarga cognitiva."
        ],
        correctAnswer: 1,
        explanationCorrect: "El modelo multialmacén de Atkinson y Shiffrin describe el tránsito de la información desde la memoria sensorial hasta la memoria a largo plazo a través de la memoria de trabajo (working memory), cuya capacidad limitada (7 ± 2 elementos de Miller / teoría de la carga cognitiva de Sweller) es clave para el diseño instruccional.",
        explanationIncorrect: "Las opciones A y C son afirmaciones pseudocientíficas. La opción D contradice la ley biológica comprobada de la limitación estricta de la memoria de trabajo.",
        recommendation: "Estudiar la Teoría de la Carga Cognitiva de John Sweller y sus implicaciones para no saturar al estudiante."
    },
    {
        id: "fp-13",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Comprender la tesis central del constructivismo pedagógico.",
        themeCategory: "Epistemología constructivista",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es la premisa epistemológica irreductible que une a las diversas corrientes del constructivismo educativo?",
        options: [
            "El conocimiento no es una copia pasiva de la realidad externa, sino una construcción activa realizada por el sujeto cognoscente a partir de sus esquemas previos e interacciones.",
            "El conocimiento se adquiere exclusivamente mediante la copia textual de enciclopedias bajo dictado del profesor.",
            "La realidad objetiva puede transferirse de un cerebro a otro a través de impulsos electromagnéticos sin esfuerzo mental del alumno.",
            "El aprendizaje ocurre únicamente cuando el estudiante duerme escuchando grabaciones de audio."
        ],
        correctAnswer: 0,
        explanationCorrect: "Todo enfoque constructivista (sea psicogenético, sociocultural o cognitivo) rechaza el empirismo pasivo: el sujeto aprende transformando, asimilando y reestructurando activamente la información con base en sus conocimientos y experiencias anteriores.",
        explanationIncorrect: "La opción B describe el modelo empirista transmisionista tradicional. Las opciones C y D son mitos pseudocientíficos carentes de cualquier respaldo pedagógico.",
        recommendation: "Revisar 'El constructivismo en el aula' de César Coll, Elena Martín y otros para diferenciar matices constructivistas."
    },
    {
        id: "fp-14",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Analizar el papel del refuerzo negativo frente al castigo en la modificación de conducta.",
        themeCategory: "Condicionamiento operante skinneriano",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "En un entorno de formación, un facilitador suele confundir 'refuerzo negativo' con 'castigo'. Según la psicología del aprendizaje operante, ¿cuál es la diferencia técnica indiscutible?",
        options: [
            "El refuerzo negativo elimina o retira un estímulo aversivo para incrementar la probabilidad de una conducta deseada; el castigo aplica un estímulo aversivo o retira un privilegio para disminuir o extinguir una conducta.",
            "El refuerzo negativo es un insulto verbal; el castigo es un premio económico cuantioso.",
            "Ambos términos significan exactamente lo mismo y producen la extinción instantánea del comportamiento.",
            "El refuerzo negativo solo se aplica en animales marinos y el castigo solo en seres humanos adultos."
        ],
        correctAnswer: 0,
        explanationCorrect: "Tanto el refuerzo positivo como el negativo tienen por meta AUMENTAR la frecuencia de una conducta (el negativo lo hace quitando un estímulo desagradable, ej: quitar la alarma ruidosa al ponerse el cinturón). El castigo busca DISMINUIR una conducta.",
        explanationIncorrect: "La opción B confunde los términos técnicos con agresiones o premios. Las opciones C y D evidencian ignorancia de los principios operantes básicos.",
        recommendation: "Diferenciar con precisión en el diseño instruccional: Refuerzo positivo, Refuerzo negativo, Castigo positivo, Castigo negativo y Extinción."
    },
    {
        id: "fp-15",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Analizar el aprendizaje significativo de David Ausubel frente al aprendizaje memorístico.",
        themeCategory: "Teoría del aprendizaje significativo",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Para que se produzca un 'aprendizaje significativo' según David Ausubel, se requieren dos condiciones sine qua non. ¿Cuáles son?",
        options: [
            "Que el material sea potencialmente significativo (con estructura lógica no arbitraria) y que el aprendiz manifieste una disposición o actitud activa para relacionarlo con sus saberes previos (anclaje subsunsor).",
            "Que el aula tenga aire acondicionado moderno y que la sesión dure al menos ocho horas seguidas.",
            "Que el docente entregue premios comestibles a los alumnos y que prohíba hacer preguntas.",
            "Que los estudiantes memoricen de memoria 100 páginas de texto sin cambiar ninguna coma."
        ],
        correctAnswer: 0,
        explanationCorrect: "Ausubel postula que el aprendizaje significativo depende de la significatividad lógica del material (coherencia interna del contenido) y de la significatividad psicológica del alumno (existencia de conceptos inclusores o 'subsunsores' y voluntad de conectar el nuevo material con su estructura cognitiva previa).",
        explanationIncorrect: "La opción B atiende a factores ambientales secundarios. La opción C promueve el condicionamiento instrumental elemental. La opción D define el aprendizaje memorístico o mecánico por repetición, opuesto por definición al significativo.",
        recommendation: "Profundizar en 'Psicología educativa: Un punto de vista cognoscitivo' de David Ausubel, Joseph Novak y Helen Hanesian."
    },
    {
        id: "fp-16",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Analizar la Teoría del Aprendizaje Social y el modelamiento vicario de Albert Bandura.",
        themeCategory: "Aprendizaje social y modelamiento",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "En un experimento corporativo, los nuevos supervisores observan cómo un líder experimentado maneja con éxito una crisis con un cliente indignado, mostrando empatía y escucha activa; posteriormente, los novatos reproducen esas mismas conductas sin haber recibido instrucción verbal directa. ¿Qué concepto teórico de Albert Bandura explica este fenómeno?",
        options: [
            "Condicionamiento pavloviano por salivación involuntaria.",
            "Aprendizaje vicario u observacional mediante procesos de atención, retención, reproducción motora y motivación (modelamiento).",
            "Amnesia retrógrada selectiva inducida por estrés situacional.",
            "Desarrollo psicosexual fijado en la etapa anal según el psicoanálisis freudiano."
        ],
        correctAnswer: 1,
        explanationCorrect: "Bandura demostró que gran parte del aprendizaje humano ocurre por observación de modelos (aprendizaje vicario), donde el observador adquiere representaciones simbólicas de conductas complejas sin necesidad de ejecutar ensayos directos ni recibir refuerzos inmediatos.",
        explanationIncorrect: "La opción A describe reflejos biológicos condicionados simples. Las opciones C y D mezclan conceptos de neuropsicología clínica o psicoanálisis ajenos al aprendizaje social.",
        recommendation: "Revisar los cuatro procesos del modelamiento de Albert Bandura: atención, retención, reproducción motriz y reforzamiento/motivación."
    },
    {
        id: "fp-17",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Aplicar la teoría del Aprendizaje Situado y las Comunidades de Práctica.",
        themeCategory: "Aprendizaje situado",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Jean Lave y Etienne Wenger formularon la teoría del 'Aprendizaje Situado' y la 'Participación Periférica Legítima'. ¿Cómo se traduce esta teoría al diseño de un programa de formación de médicos internos o aprendices técnicos?",
        options: [
            "Aislando a los aprendices en una cabina individual con libros teóricos durante 5 años sin ver pacientes reales.",
            "Integrando a los novatos en la comunidad de práctica profesional real, donde inician asumiendo tareas guiadas de menor riesgo y van asumiendo progresivamente mayor autonomía y responsabilidad compleja junto a los expertos.",
            "Haciendo que los novatos reemplacen a los médicos jefes en cirugías a corazón abierto desde su primer día de clase sin supervisión.",
            "Eliminando toda conversación profesional entre aprendices y expertos para evitar 'contaminación' de ideas."
        ],
        correctAnswer: 1,
        explanationCorrect: "Para Lave y Wenger, el aprendizaje no ocurre en la mente aislada sino en la participación social situada: el novato ingresa como 'participante periférico legítimo' en una comunidad de práctica y mediante el acompañamiento de expertos avanza hacia una participación plena.",
        explanationIncorrect: "La opción A desconoce el valor de la situated cognition. La opción C es un peligroso absurdo ético. La opción D elimina el andamiaje social que fundamenta la comunidad de práctica.",
        recommendation: "Consultar 'Comunidades de práctica: aprendizaje, significado e identidad' de Etienne Wenger."
    },
    {
        id: "fp-18",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Aplicar la teoría del Aprendizaje por Descubrimiento de Jerome Bruner.",
        themeCategory: "Aprendizaje por descubrimiento",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "Un formador desea que sus estudiantes deduzcan los principios del electromagnetismo mediante el Aprendizaje por Descubrimiento guiado de Bruner. ¿Cuál debe ser su intervención didáctica?",
        options: [
            "Escribir las tres leyes del electromagnetismo en la pizarra, ordenar que las copien cinco veces y tomar examen al día siguiente.",
            "Presentarles situaciones experimentales desafiantes, imanes y bobinas, planteando preguntas orientadoras y andamiajes para que ellos formulen hipótesis y descubran los patrones fundamentales.",
            "Dejarlos completamente solos en un cuarto oscuro sin ninguna instrucción ni material por 48 horas.",
            "Prohibir que toquen los experimentos y proyectar una película de ciencia ficción de dibujos animados."
        ],
        correctAnswer: 1,
        explanationCorrect: "El descubrimiento según Bruner no es un 'dejar hacer' caótico, sino un proceso guiado (descubrimiento guiado): el docente estructura el entorno, formula preguntas divergentes y proporciona andamiajes para que el estudiante reorganice los datos y descubra las regularidades y principios por sí mismo.",
        explanationIncorrect: "La opción A es el método expositivo tradicional receptivo. La opción C es una caricatura del descubrimiento no guiado que conduce a la frustración y la sobrecarga cognitiva. La opción D evade la experimentación.",
        recommendation: "Revisar los tres modos de representación del conocimiento de Bruner: enativo (acción), icónico (imagen) y simbólico (lenguaje/abstracción)."
    },
    {
        id: "fp-19",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Resolver problemas derivados de la persistencia de mitos en neuroeducación (neuromitos).",
        themeCategory: "Neuromitos en educación",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Una institución contrata a un consultor que afirma: 'Los estudiantes aprenden exclusivamente según su estilo: visual, auditivo o kinestésico (modelo VAK), y si no se les enseña en su canal único no aprenden, porque solo usamos el 10% del cerebro'. Como pedagogo científico, ¿cuál es tu respuesta técnica?",
        options: [
            "Aceptar la propuesta con entusiasmo, ya que el modelo VAK y el mito del 10% son las verdades más sólidas de la neurociencia contemporánea.",
            "Advertir que ambas afirmaciones son neuromitos ampliamente refutados por la neurociencia cognitiva y la OCDE; el cerebro es un órgano multimodal plástico que usa el 100% de su capacidad y se beneficia de múltiples vías combinadas de representación.",
            "Exigir que a los niños 'auditivos' se les vende los ojos durante todo el año escolar para no confundirlos.",
            "Creer que los estilos de aprendizaje son rasgos genéticos inmutables fijados en el ADN."
        ],
        correctAnswer: 1,
        explanationCorrect: "Tanto la OCDE como destacados neurocientíficos (Dehaene, Howard-Jones) han catalogado el uso del 10% del cerebro y la teoría rígida de los estilos de aprendizaje cerrados (VAK) como neuromitos: enseñar por múltiples modalidades combinadas (diseño DUA) enriquece la cognición de todos los alumnos, sin encasillarlos en etiquetas falsas.",
        explanationIncorrect: "La opción A valida el error pseudocientífico. La opción C es una práctica aberrante derivada del neuromito. La opción D desconoce la neuroplasticidad cerebral.",
        recommendation: "Consultar la publicación de la OCDE 'Comprender el cerebro: el nacimiento de una ciencia del aprendizaje' para identificar neuromitos comunes."
    },
    {
        id: "fp-20",
        testId: "pedagogia",
        dimensionId: "teorias",
        dimensionName: "Teorías del Aprendizaje",
        competency: "Resolver problemas de diseño pedagógico integrando el Conectivismo en redes digitales complejas.",
        themeCategory: "Conectivismo y redes de aprendizaje",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En una maestría ejecutiva virtual sobre innovación disruptiva, los conocimientos cambian a una velocidad que desactualiza los libros en meses. ¿Cómo se aplica la teoría conectivista de George Siemens y Stephen Downes para responder a este desafío formativo?",
        options: [
            "Prohibir que los estudiantes utilicen internet y exigirles que memoricen únicamente un manual impreso de 1995.",
            "Estructurar la experiencia como una red dinámica de nodos de información, donde el aprendizaje consiste en la habilidad para conectar fuentes especializadas, discernir la veracidad y nutrir redes activas de aprendizaje continuo.",
            "Cancelar la maestría y aconsejar que nadie estudie nada hasta que la ciencia deje de cambiar.",
            "Contratar a un locutor de radio para que lea en voz alta resúmenes de Wikipedia durante las clases."
        ],
        correctAnswer: 1,
        explanationCorrect: "El conectivismo postula que en la era de la información masiva, el aprendizaje reside en las redes humanas y tecnológicas: la competencia clave no es acumular datos en la cabeza, sino desarrollar la capacidad de navegar la red, conectar nodos de conocimiento y mantenerse actualizado en tiempo real.",
        explanationIncorrect: "La opción A representa el aislamiento del flujo contemporáneo de información. Las opciones C y D demuestran una total incomprensión de las pedagogías emergentes en entornos de red.",
        recommendation: "Estudiar 'Conectivismo: Una teoría del aprendizaje para la era digital' de George Siemens."
    },

    // =========================================================================
    // DIMENSIÓN 3: AUTORES Y MODELOS PEDAGÓGICOS (Preguntas 21 a 30)
    // =========================================================================
    {
        id: "fp-21",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Comprender la teoría psicogenética y las etapas del desarrollo cognitivo de Jean Piaget.",
        themeCategory: "Jean Piaget y la epistemología genética",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Qué procesos dialécticos explican, según Jean Piaget, la adaptación cognitiva y la evolución de los esquemas mentales en el sujeto?",
        options: [
            "Asimilación (incorporar nueva información a esquemas existentes), Acomodación (modificar esquemas previos ante discrepancias) y Equilibración (autorregulación entre ambas).",
            "Castigo corporal, sumisión moral y memorización fonética pasiva.",
            "Ingestión de vitaminas, sueño profundo y lectura mecánica de signos.",
            "Hipnosis colectiva, transferencia telepática y obediencia incondicional."
        ],
        correctAnswer: 0,
        explanationCorrect: "La epistemología genética de Piaget postula que el desarrollo intelectual avanza cuando un nuevo objeto no encaja en los esquemas existentes produciendo un 'conflicto cognitivo'; el sujeto asimila, acomoda sus estructuras y alcanza un nuevo equilibrio cualitativamente superior.",
        explanationIncorrect: "Las opciones B, C y D carecen de sentido psicológico y desvirtúan los principios básicos de la psicología del desarrollo.",
        recommendation: "Repasar las etapas del desarrollo piagetiano (sensoriomotriz, preoperacional, operaciones concretas y operaciones formales)."
    },
    {
        id: "fp-22",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Identificar el concepto de Zona de Desarrollo Próximo (ZDP) de Lev Vygotsky.",
        themeCategory: "Lev Vygotsky y la teoría sociocultural",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "Lev Vygotsky define la 'Zona de Desarrollo Próximo' (ZDP) como:",
        options: [
            "El radio geográfico de 500 metros alrededor de la escuela pública más cercana.",
            "La distancia entre el nivel de desarrollo real (determinado por la capacidad de resolver independientemente un problema) y el nivel de desarrollo potencial (determinado con la guía de un adulto o en colaboración con pares más capaces).",
            "El porcentaje de neuronas que un niño pierde cuando no consume suficiente azúcar por la mañana.",
            "El tiempo que tarda un estudiante en correr 100 metros planos en la clase de educación física."
        ],
        correctAnswer: 1,
        explanationCorrect: "La ZDP es el constructo medular de Vygotsky para la pedagogía: define aquellas funciones que aún no han madurado pero están en proceso de hacerlo; la enseñanza eficaz es aquella que se adelanta al desarrollo y opera precisamente en la ZDP con mediación y andamiaje.",
        explanationIncorrect: "La opción A toma 'zona' en sentido topográfico territorial. Las opciones C y D son distorsiones biológicas o físicas sin relación con la psicología histórico-cultural.",
        recommendation: "Leer 'El desarrollo de los procesos psicológicos superiores' de Lev Vygotsky, especialmente el capítulo sobre interacción entre aprendizaje y desarrollo."
    },
    {
        id: "fp-23",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Comprender la función de los organizadores previos según David Ausubel.",
        themeCategory: "David Ausubel y los organizadores previos",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Qué es un 'organizador previo' (advance organizer) en la metodología instruccional de David Ausubel?",
        options: [
            "Un archivador de plástico donde se guardan las evaluaciones ordenadas por apellido.",
            "Un material introductorio en un nivel más alto de abstracción, generalidad e inclusividad que sirve de puente cognitivo entre lo que el aprendiz ya sabe y lo que necesita aprender.",
            "Un software que apaga las computadoras de los estudiantes cuando se termina el tiempo de clase.",
            "Un reglamento disciplinario que enumera los castigos aplicables a los estudiantes impuntuales."
        ],
        correctAnswer: 1,
        explanationCorrect: "El organizador previo ausubeliano actúa como un puente conceptual: introduce una estructura contextual de alto orden que ayuda al aprendiz a activar conceptos inclusores (subsunsores) relevantes para anclar el nuevo contenido detallado que se enseñará a continuación.",
        explanationIncorrect: "Las opciones A y C toman el término 'organizador' como un objeto material o software utilitario. La opción D confunde un recurso instruccional cognitivo con un código de disciplina.",
        recommendation: "Diferenciar entre organizadores previos expositivos (cuando el tema es totalmente nuevo) y comparativos (cuando el tema se relaciona con conocimientos previos similares)."
    },
    {
        id: "fp-24",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Analizar el concepto de andamiaje (scaffolding) de Jerome Bruner.",
        themeCategory: "Jerome Bruner y el andamiaje",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "El concepto de 'andamiaje' (scaffolding), acuñado por Jerome Bruner, Wood y Ross, se inspira directamente en la teoría de Vygotsky. ¿Cuál es su dinámica pedagógica esencial?",
        options: [
            "Construir estructuras metálicas en el patio de la escuela para que los estudiantes hagan gimnasia.",
            "Brindar un apoyo estructurado, temporal y ajustable por parte del tutor, que se va retirando progresivamente a medida que el aprendiz internaliza la competencia y adquiere autonomía.",
            "Resolverle permanentemente todas las tareas y exámenes al estudiante para que nunca experimente dificultades.",
            "Obligar a los estudiantes a memorizar fórmulas sin ofrecerles ninguna explicación sobre su funcionamiento."
        ],
        correctAnswer: 1,
        explanationCorrect: "Al igual que el andamio de una obra civil que se retira conforme el edificio se sostiene por sí mismo, el andamiaje pedagógico es un soporte contingente y transitorio: sostiene al aprendiz en su ZDP y se desvanece gradualmente (fading) a medida que este logra el dominio autónomo.",
        explanationIncorrect: "La opción A toma la metáfora arquitectónica en sentido literal físico. La opción C genera indefensión aprendida y anula el aprendizaje. La opción D es opuesta a la mediación andamiada.",
        recommendation: "Estudiar el artículo seminal de Wood, Bruner y Ross (1976) 'The Role of Tutoring in Problem Solving'."
    },
    {
        id: "fp-25",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Analizar la filosofía educativa pragmatista de John Dewey.",
        themeCategory: "John Dewey y la educación experiencial",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "John Dewey afirmaba en 'Democracia y educación' (1916): 'La educación no es una preparación para la vida; la educación es la vida misma'. ¿Qué implicación pedagógica directa se desprende de esta afirmación?",
        options: [
            "Que la escuela debe ser una comunidad democrática en miniatura donde los estudiantes aprendan a través de experiencias reales, resolución de problemas y cooperación activa.",
            "Que los niños deben abandonar la escuela a los 6 años para trabajar en jornadas industriales completas.",
            "Que no se debe enseñar ninguna materia teórica porque la vida se vive sin pensar.",
            "Que el docente debe gobernar la clase como un tirano absoluto para preparar a los alumnos para la dureza del mundo."
        ],
        correctAnswer: 0,
        explanationCorrect: "Dewey concibió la educación pragmatista como reconstrucción continua de la experiencia: la escuela no puede ser un claustro artificial desvinculado del mundo, sino un laboratorio vivo de vida democrática, pensamiento reflexivo y cooperación cívica activa.",
        explanationIncorrect: "La opción B es una distorsión que promueve la explotación infantil. Las opciones C y D contradicen radicalmente el pensamiento democrático y reflexivo de Dewey.",
        recommendation: "Leer 'Experiencia y educación' de John Dewey para comprender la diferencia entre experiencia educativa genuina y experiencia no reflexiva."
    },
    {
        id: "fp-26",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Analizar la Taxonomía de los Objetivos Educativos de Benjamin Bloom revisada.",
        themeCategory: "Benjamin Bloom y la taxonomía cognitiva",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "En la taxonomía cognitiva de Benjamin Bloom revisada por Anderson y Krathwohl (2001), ¿cuál es el orden ascendente de los seis niveles cognitivos, desde los procesos de orden inferior (LOTS) hasta los de orden superior (HOTS)?",
        options: [
            "1. Recordar -> 2. Comprender -> 3. Aplicar -> 4. Analizar -> 5. Evaluar -> 6. Crear.",
            "1. Crear -> 2. Olvidar -> 3. Dormir -> 4. Copiar -> 5. Gritar -> 6. Aprobar.",
            "1. Evaluar -> 2. Recordar -> 3. Castigar -> 4. Adivinar -> 5. Calificar -> 6. Salir.",
            "1. Aplicar -> 2. Analizar -> 3. Recordar -> 4. Crear -> 5. Soñar -> 6. Memorizar."
        ],
        correctAnswer: 0,
        explanationCorrect: "La taxonomía revisada de Anderson y Krathwohl estructura los procesos cognitivos con verbos de acción en orden jerárquico de complejidad: Recordar, Comprender, Aplicar, Analizar, Evaluar y, en la cúspide creativa, Crear.",
        explanationIncorrect: "Las opciones B, C y D presentan desórdenes evidentes, niveles inventados o acciones que no corresponden a categorías cognitivas taxonómicas.",
        recommendation: "Utilizar la matriz bidimensional de Anderson y Krathwohl (dimensión del conocimiento x dimensión del proceso cognitivo) en el diseño didáctico."
    },
    {
        id: "fp-27",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Aplicar la teoría del currículo en espiral de Jerome Bruner en el diseño formativo.",
        themeCategory: "Currículo en espiral",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "¿Cómo se implementa el principio del 'currículo en espiral' de Jerome Bruner en una carrera profesional de cuatro años?",
        options: [
            "Enseñando cada tema una única vez en la vida de forma aislada para no repetir contenidos jamás.",
            "Retomando los conceptos nucleares fundamentales a lo largo de los diferentes semestres, cada vez con mayor profundidad, complejidad conceptual y aplicaciones más desafiantes.",
            "Obligando a los estudiantes a cursar exactamente las mismas materias de primer año durante los cuatro años de carrera sin ninguna variación.",
            "Haciendo que las materias se cursen en círculos concéntricos sentados en el piso de un estadio deportivo."
        ],
        correctAnswer: 1,
        explanationCorrect: "Bruner sostenía que cualquier tema puede enseñarse a cualquier aprendiz en cualquier etapa de desarrollo de forma honesta: el currículo en espiral revisita las grandes ideas clave de la disciplina de manera iterativa, aumentando progresivamente su nivel de sofisticación y rigor.",
        explanationIncorrect: "La opción A describe un currículo fragmentado y lineal rígido. La opción C es una repetición idéntica sin progresión. La opción D es una confusión literal y superficial de la palabra 'espiral'.",
        recommendation: "Diseñar mallas curriculares donde las competencias clave se retomen progresivamente en niveles básico, intermedio y avanzado."
    },
    {
        id: "fp-28",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Aplicar el concepto de autoeficacia de Albert Bandura para superar bloqueos de aprendizaje.",
        themeCategory: "Albert Bandura y la autoeficacia",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Un grupo de profesionales en un curso de programación afirma convencido: 'Nosotros no servimos para el código, somos pésimos y nunca podremos aprender a programar'. ¿Qué dimensión psicológica de Bandura debe intervenir prioritariamente el facilitador?",
        options: [
            "La autoeficacia percibida (las creencias de las personas sobre sus propias capacidades para alcanzar determinados logros), mediante experiencias de éxito escalonadas, modelamiento y retroalimentación persuasiva positiva.",
            "El condicionamiento pavloviano mediante descargas eléctricas cada vez que cometan un error de sintaxis.",
            "La hipnosis regresiva para buscar traumas en su infancia temprana.",
            "Aumentar la dificultad de los ejercicios para demostrarles que sus miedos eran completamente ciertos."
        ],
        correctAnswer: 0,
        explanationCorrect: "Bandura demostró que la creencia en la propia eficacia predice fuertemente el rendimiento: ante baja autoeficacia, el facilitador debe proporcionar 'experiencias de dominio vicario y directo' (tareas graduadas donde alcancen éxito tangible), reforzando su agencia y perseverancia.",
        explanationIncorrect: "La opción B es una práctica cruel y antipedagógica. La opción C es pseudocientífica. La opción D agravaría la indefensión aprendida y provocaría la deserción inmediata.",
        recommendation: "Fortalecer las cuatro fuentes de la autoeficacia de Bandura: experiencias de dominio, modelado social, persuasión social y gestión de estados afectivos."
    },
    {
        id: "fp-29",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Resolver problemas de diseño educativo combinando aportes de Piaget y Vygotsky.",
        themeCategory: "Articulación Piaget-Vygotsky",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Un debate clásico en pedagogía enfrenta a quienes priorizan el desarrollo biológico individual (Piaget) contra quienes priorizan la mediación sociocultural (Vygotsky). Como especialista pedagógico que lidera la renovación curricular de una institución, ¿cuál es la síntesis dialéctica integradora que debes orientar?",
        options: [
            "Declarar a uno de los dos autores como traidor a la ciencia y prohibir la lectura de sus libros en la universidad.",
            "Reconocer que el desarrollo cognitivo requiere respetar las capacidades operatorias y la maduración biológica del sujeto (Piaget), pero comprendiendo que el aprendizaje social andamiado y las herramientas culturales potencian, jalonan y transforman el desarrollo (Vygotsky).",
            "Sostener que ni el desarrollo ni la cultura importan, y que lo único relevante es que los estudiantes paguen su matrícula a tiempo.",
            "Reemplazar ambas teorías por doctrinas astrológicas medievales."
        ],
        correctAnswer: 1,
        explanationCorrect: "La pedagogía contemporánea articula ambas perspectivas: la psicología genética de Piaget aporta la comprensión de los mecanismos psicogenéticos de asimilación/acomodación y las restricciones del desarrollo, mientras que Vygotsky demuestra cómo la interacción social y la cultura expanden y traccionan la cognición a través de la mediación semiótica.",
        explanationIncorrect: "La opción A plantea un sectarismo dogmático acientífico. Las opciones C y D carecen de sentido y rigor académico.",
        recommendation: "Consultar 'Piaget y Vygotsky: La génesis social del pensamiento' para comprender sus puntos de encuentro y complementariedad."
    },
    {
        id: "fp-30",
        testId: "pedagogia",
        dimensionId: "autores",
        dimensionName: "Autores y Modelos Pedagógicos",
        competency: "Resolver situaciones complejas de exclusión escolar mediante la pedagogía de la esperanza de Freire.",
        themeCategory: "Paulo Freire y la pedagogía dialógica",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En una comunidad rural marginada, los jóvenes muestran una actitud fatalista de resignación frente a la pobreza, diciendo: 'Nacimos pobres y nada va a cambiar, la educación no sirve para nada'. ¿Cómo debe abordarse este desafío educativo desde la 'Pedagogía de la esperanza' y la 'concientización' de Paulo Freire?",
        options: [
            "Confirmar su desesperanza diciéndoles que el destino ya está escrito y que acepten su situación sin quejarse.",
            "Iniciar círculos de cultura con palabras generadoras basadas en su realidad concreta, problematizando la opresión para transformar el 'inédito viable', despertando la conciencia crítica y la agencia transformadora colectiva.",
            "Imponer un curso obligatorio de etiqueta social de la nobleza europea del siglo XVIII.",
            "Cerrar la escuela de la comunidad y aconsejar que emigren en silencio."
        ],
        correctAnswer: 1,
        explanationCorrect: "Para Freire, la concientización supera la 'conciencia mágica o fatalista': mediante el diálogo problematizador en círculos de cultura, los sujetos reconocen que la realidad no es un destino inmutable sino una construcción histórica susceptible de ser transformada mediante la praxis (reflexión y acción sobre el mundo).",
        explanationIncorrect: "Las opciones A y D profundizan la opresión y la desmovilización social. La opción C representa una imposición colonialista descontextualizada.",
        recommendation: "Estudiar 'Pedagogía de la esperanza' y 'La educación como práctica de la libertad' de Paulo Freire."
    },

    // =========================================================================
    // DIMENSIÓN 4: ANÁLISIS PEDAGÓGICO APLICADO (Preguntas 31 a 40)
    // =========================================================================
    {
        id: "fp-31",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Identificar los principios de la inclusión educativa frente a la mera integración escolar.",
        themeCategory: "Educación inclusiva",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es la diferencia conceptual determinante entre 'integración escolar' e 'inclusión educativa' según la UNESCO?",
        options: [
            "La integración exige que el estudiante con necesidades especiales se adapte a una escuela rígida e inmutable; la inclusión exige que el sistema educativo se transforme estructuralmente para responder a la diversidad de todos los aprendices.",
            "La integración es gratuita y la inclusión es extremadamente costosa.",
            "Son dos términos exactamente iguales que se usan para referirse a la compra de uniformes escolares.",
            "La integración se aplica solo a niños y la inclusión solo a personas jubiladas."
        ],
        correctAnswer: 0,
        explanationCorrect: "La integración operaba bajo un modelo médico o de déficit: insertaba al alumno 'diferente' en la escuela común siempre que pudiera amoldarse. La inclusión (UNESCO, Declaración de Incheon 2015) parte del modelo social de derechos: la escuela debe derribar barreras al aprendizaje y la participación para acoger a todas las diversidades.",
        explanationIncorrect: "Las opciones B, C y D reflejan desconocimiento conceptual del marco internacional de derechos educativos e inclusión.",
        recommendation: "Consultar las directrices de la UNESCO sobre Educación 2030 y el 'Índice de Inclusión' (Booth y Ainscow)."
    },
    {
        id: "fp-32",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Analizar el papel de la transposición didáctica en la práctica docente.",
        themeCategory: "Transposición didáctica de Yves Chevallard",
        difficulty: "basica",
        cognitiveType: "analisis",
        question: "El concepto de 'transposición didáctica' formulado por el matemático y pedagogo Yves Chevallard se refiere a:",
        options: [
            "El proceso de copiar un examen de una universidad extranjera sin traducirlo.",
            "El conjunto de transformaciones epistemológicas y pedagógicas mediante las cuales un 'saber sabio' (académico/experto) se adapta y reconstruye para convertirse en un 'saber enseñado' comprensible y significativo para los aprendices.",
            "El traslado físico de pupitres de un salón a otro durante las vacaciones escolares.",
            "La expulsión definitiva de un estudiante problemático de la institución."
        ],
        correctAnswer: 1,
        explanationCorrect: "Chevallard demostró que el saber no se transfiere en bruto: el objeto de saber académico experto debe sufrir un trabajo de descontextualización, selección, secuenciación y recontextualización didáctica (vigilancia epistemológica) para transformarse en un saber escolar aprendible sin falsear su esencia científica.",
        explanationIncorrect: "La opción A es plagio académico. La opción C es una confusión física con la palabra 'traslado'. La opción D es una sanción disciplinaria ajena a la didáctica.",
        recommendation: "Estudiar 'La transposición didáctica: del saber sabio al saber enseñado' de Yves Chevallard."
    },
    {
        id: "fp-33",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Analizar las implicaciones de la diversidad de ritmos de aprendizaje en el aula heterogénea.",
        themeCategory: "Aulas heterogéneas y diversidad de ritmos",
        difficulty: "basica",
        cognitiveType: "analisis",
        question: "En un aula heterogénea, dos estudiantes requieren tiempos y estrategias diferentes para consolidar el mismo objetivo de comprensión lectora. Según Rebeca Anijovich ('Gestionar una escuela con aulas heterogéneas'), ¿qué enfoque pedagógico debe guiar al docente?",
        options: [
            "Imponer un ritmo único ultra-rápido para que los que se queden atrás reprueben sin contemplación.",
            "Diseñar tareas diversificadas con opciones de acceso, variedad de recursos y flexibilidad temporal, garantizando que todos alcancen los aprendizajes comunes esenciales por rutas personalizadas.",
            "Dividir el aula en dos grupos fijos: el grupo de los 'inteligentes' y el grupo de los 'desahuciados' para no mezclarlos.",
            "Suspender la lectura en la escuela para que nadie se sienta presionado."
        ],
        correctAnswer: 1,
        explanationCorrect: "El enfoque de aulas heterogéneas promueve la diferenciación pedagógica: frente a la ilusión homogeneizadora de la escuela tradicional, se diversifican las consignas, los andamiajes y los tiempos para que cada estudiante avance hacia metas altas de aprendizaje partiendo de su situación singular.",
        explanationIncorrect: "La opción A promueve la exclusión escolar. La opción C estigmatiza mediante etiquetas segregadoras (efecto Pigmalión negativo). La opción D abandona la misión formativa de la escuela.",
        recommendation: "Consultar 'El aula diversificada' de Carol Ann Tomlinson y las estrategias para aulas heterogéneas de Rebeca Anijovich."
    },
    {
        id: "fp-34",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Aplicar la mediación pedagógica de Reuven Feuerstein y la modificabilidad cognitiva estructural.",
        themeCategory: "Reuven Feuerstein y la mediación pedagógica",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "La teoría de la Modificabilidad Cognitiva Estructural y la Experiencia de Aprendizaje Mediado (EAM) de Reuven Feuerstein sostiene que la inteligencia es dinámica y modificable. ¿Cuál es el criterio central que define la acción del educador como mediador?",
        options: [
            "El educador se interpone intencionalmente entre los estímulos del mundo y el aprendiz, filtrando, organizando, dando significado y trascendencia a la experiencia para desarrollar funciones cognitivas superiores.",
            "El educador se limita a observar en silencio sin decir una sola palabra durante todo el año.",
            "El educador clasifica a los estudiantes con base en su coeficiente intelectual genético fijo e inalterable.",
            "El educador les compra regalos materiales a cambio de que memoricen oraciones gramaticales."
        ],
        correctAnswer: 0,
        explanationCorrect: "Feuerstein demostró que nadie está condenado a una estructura cognitiva fija: mediante la mediación humana intencionada (caracterizada por intencionalidad, reciprocidad, significado y trascendencia), el mediador transforma el modo en que el sujeto percibe, procesa y responde a la realidad.",
        explanationIncorrect: "La opción B describe el abandono pedagógico pasivo. La opción C representa el paradigma innatista determinista que Feuerstein refutó empíricamente con personas con síndrome de Down y trauma. La opción D es un soborno conductual.",
        recommendation: "Estudiar los 12 criterios de mediación pedagógica de Reuven Feuerstein y su Programa de Enriquecimiento Instrumental (PEI)."
    },
    {
        id: "fp-35",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Aplicar los principios del aprendizaje cooperativo frente al trabajo en grupo tradicional.",
        themeCategory: "Aprendizaje cooperativo estructurado",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Los hermanos David y Roger Johnson establecieron cinco condiciones esenciales para que el trabajo en equipo sea verdaderamente 'Aprendizaje Cooperativo' y no un simple juntar personas donde uno trabaja y tres descansan. ¿Cuál de las siguientes condiciones es imprescindible?",
        options: [
            "La interdependencia positiva (nos hundimos o nadamos juntos), combinada con la responsabilidad individual exigible a cada miembro.",
            "La prohibición absoluta de hablar entre los miembros del equipo durante el trabajo.",
            "Que el docente designe a un solo estudiante para que haga todo el informe final.",
            "Que la calificación de todos los integrantes dependa del azar de tirar una moneda al aire."
        ],
        correctAnswer: 0,
        explanationCorrect: "El aprendizaje cooperativo exige interdependencia positiva estructurada (el éxito de uno depende del éxito de los demás) y responsabilidad individual (cada quien debe demostrar su dominio), además de interacción estimuladora cara a cara, habilidades interpersonales y procesamiento grupal.",
        explanationIncorrect: "La opción B contradice la naturaleza dialógica del aprendizaje colaborativo. Las opciones C y D describen las típicas disfunciones del trabajo grupal no estructurado.",
        recommendation: "Implementar las cinco condiciones del aprendizaje cooperativo de los hermanos Johnson en proyectos grupales."
    },
    {
        id: "fp-36",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Diseñar experiencias de aprendizaje basadas en la práctica reflexiva docente.",
        themeCategory: "Práctica reflexiva de Donald Schön",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Donald Schön propone el concepto del 'profesional reflexivo' distinguiendo la 'reflexión en la acción' de la 'reflexión sobre la acción'. ¿Cómo aplica un docente la 'reflexión en la acción' durante una clase en vivo?",
        options: [
            "Escribiendo un diario pedagógico cinco años después de haberse retirado de la docencia.",
            "Monitoreando las reacciones imprevistas del grupo mientras enseña, detectando desconexión o confusión e improvisando ajustes pedagógicos creativos sobre la marcha.",
            "Siguiendo rígidamente su plan de clase minuto a minuto sin mirar nunca los rostros de sus alumnos.",
            "Leyendo el periódico en voz alta mientras los estudiantes resuelven una guía en silencio."
        ],
        correctAnswer: 1,
        explanationCorrect: "La 'reflexión en la acción' es un diálogo reflexivo con la situación en tiempo real: el profesional experto evalúa sobre la marcha lo que está ocurriendo, cuestiona sus supuestos y remodela su acción inmediatamente sin interrumpir el flujo de la clase.",
        explanationIncorrect: "La opción A describe una reflexión retrospectiva lejana. La opción C representa la ceguera técnica de quien privilegia el programa sobre el sujeto. La opción D es desidia profesional.",
        recommendation: "Consultar 'El profesional reflexivo: cómo piensan los profesionales cuando actúan' de Donald Schön."
    },
    {
        id: "fp-37",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Resolver problemas derivados de la violencia escolar y el acoso (bullying) desde un enfoque socioeducativo.",
        themeCategory: "Convivencia escolar y resolución de conflictos",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "En una institución educativa se presentan casos reiterados de ciberacoso y hostigamiento entre pares. La dirección propone expulsar a los agresores y contratar policías privados en los pasillos. Como asesor pedagógico, ¿qué estrategia integral alternativa de convivencia debes proponer?",
        options: [
            "Implementar un enfoque restaurativo y formativo de la convivencia: programas de educación socioemocional, mediación de pares, desarrollo de la empatía comunitaria y revisión de las normas con participación activa de los propios estudiantes.",
            "Felicitar a los agresores en la formación de bandera para que se calmen.",
            "Prohibir que los estudiantes hablen de sus emociones en la escuela porque la escuela es solo para matemáticas.",
            "Ignorar el acoso bajo el argumento de que 'son cosas normales de la edad que forjan el carácter'."
        ],
        correctAnswer: 0,
        explanationCorrect: "El enfoque punitivo-policial de 'tolerancia cero' fracasa empíricamente porque expulsa el problema sin educar; el enfoque pedagógico restaurativo aborda las causas socioemocionales, repara el daño relacional, compromete a la comunidad y empodera a los estudiantes en la mediación pacífica de conflictos.",
        explanationIncorrect: "La opción B refuerza la violencia. La opción C desconoce la dimensión socioafectiva inseparable del aprendizaje cognitivo. La opción D naturaliza el sufrimiento y la vulneración de derechos.",
        recommendation: "Estudiar modelos de prácticas restaurativas en escuelas y el programa KiVa de prevención del acoso escolar."
    },
    {
        id: "fp-38",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Resolver dilemas éticos y pedagógicos derivados de la evaluación punitiva y la deserción escolar.",
        themeCategory: "Retención escolar y justicia curricular",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En una escuela técnica de vulnerabilidad social, la tasa de reprobación en el primer año alcanza el 55%, lo que provoca una deserción masiva. El equipo docente afirma orgulloso: 'Nuestra alta tasa de reprobados demuestra nuestro altísimo nivel de exigencia y prestigio académico'. Desde el concepto de 'Justicia Curricular' de Raewyn Connell, ¿cuál es el análisis crítico de esta situación?",
        options: [
            "Los docentes tienen razón: mientras más alumnos reprueben y abandonen, más prestigiosa y excelente es la institución.",
            "Es una falacia elitista: confundir la reprobación con calidad encubre la incapacidad pedagógica de la institución para enseñar a estudiantes reales y vulnera la justicia curricular, que exige garantizar el éxito de los sectores más desfavorecidos.",
            "La solución consiste en regalar títulos a cambio de dinero sin necesidad de que los estudiantes asistan a clase.",
            "Se debe cerrar la escuela técnica y construir un centro comercial en su lugar."
        ],
        correctAnswer: 1,
        explanationCorrect: "Raewyn Connell plantea que la justicia curricular exige pensar la educación desde la perspectiva de los menos favorecidos: una institución de alta calidad no es la que expulsa al 55% de sus aprendices, sino la que tiene la capacidad pedagógica, el andamiaje y la mediación para llevarlos al dominio de competencias exigentes.",
        explanationIncorrect: "La opción A representa la ideología elitista de la exclusión meritocrática. La opción C es corrupción académica. La opción D abandona la responsabilidad social educativa del Estado.",
        recommendation: "Consultar 'Escuelas y justicia social' de Raewyn Connell para profundizar en currículo contra-hegemónico e inclusión."
    },
    {
        id: "fp-39",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Diseñar innovaciones pedagógicas transformando el espacio y el tiempo escolar.",
        themeCategory: "Arquitectura pedagógica y rediseño escolar",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Una institución educativa desea trascender el modelo de 'clases de 45 minutos fragmentadas por campanas' que genera dispersión y superficialidad. ¿Qué innovación organizativa y pedagógica contemporánea responde eficazmente a esta necesidad?",
        options: [
            "Hacer que las clases duren 10 minutos y cambiar de materia cada 600 segundos.",
            "Implementar bloques horarios integrados (block scheduling) vinculados a proyectos interdisciplinarios, laboratorios de investigación y talleres de profundización colaborativa.",
            "Eliminar a los docentes y proyectar videos de internet en un televisor sin pausa durante 8 horas seguidas.",
            "Obligar a los estudiantes a permanecer inmóviles en sus asientos durante 12 horas continuas sin recreo."
        ],
        correctAnswer: 1,
        explanationCorrect: "El tiempo escolar tradicional parcelado en módulos breves de 45 minutos responde al modelo fabril del siglo XIX; los bloques horarios extendidos (block scheduling) posibilitan secuencias didácticas profundas de indagación, experimentación, debates y retroalimentación activa.",
        explanationIncorrect: "La opción A aumentaría exponencialmente la dispersión atencional. Las opciones C y D son prácticas antipedagógicas y deshumanizantes.",
        recommendation: "Revisar experiencias innovadoras internacionales de rediseño de tiempos y espacios escolares (Escola Nova 21, High Tech High)."
    },
    {
        id: "fp-40",
        testId: "pedagogia",
        dimensionId: "analisis_aplicado",
        dimensionName: "Análisis Pedagógico Aplicado",
        competency: "Consolidar el estatuto epistemológico del docente como intelectual y no como mero técnico aplicador.",
        themeCategory: "El docente como intelectual transformador",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Henry Giroux ('Los profesores como intelectuales transformadores', 1990) critica fuertemente las reformas educativas que reducen a los docentes a meros 'técnicos aplicadores de paquetes curriculares prefabricados'. ¿Cuál es la visión del docente que reivindica la pedagogía crítica?",
        options: [
            "El docente es un intelectual reflexivo y actor político capaz de investigar su propia práctica, cuestionar críticamente el currículo y educar para la emancipación ciudadana y la justicia social.",
            "El docente es un empleado subordinado cuya única función es leer en voz alta lo que manda el ministerio sin cuestionar nada.",
            "El docente debe ser sustituido por guardias de seguridad armados en todas las escuelas.",
            "El docente es una persona que no necesita pensar ni formarse porque la pedagogía no requiere ningún conocimiento científico."
        ],
        correctAnswer: 0,
        explanationCorrect: "Giroux reivindica al profesorado como intelectuales transformadores: profesionales con agencia moral, política y pedagógica que no consumen pasivamente recetas externas, sino que investigan, problematizan la realidad y facilitan que los estudiantes se conviertan en ciudadanos libres y críticos.",
        explanationIncorrect: "La opción B define el modelo tecnocrático desprofesionalizador que Giroux denuncia. Las opciones C y D degradan la profesión docente con afirmaciones absurdas.",
        recommendation: "Leer 'Los profesores como intelectuales: hacia una pedagogía crítica del aprendizaje' de Henry Giroux."
    }
];
