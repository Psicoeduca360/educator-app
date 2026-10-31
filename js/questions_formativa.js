/**
 * PSICOEDUCA ACADEMY - Banco de Preguntas
 * Instrumento 1: Evaluación Formativa (40 preguntas completas)
 * Dimensiones:
 * 1. Fundamentos de Evaluación (preguntas 1 a 10)
 * 2. Técnicas e Instrumentos de Evaluación (preguntas 11 a 20)
 * 3. Retroalimentación y Metacognición (preguntas 21 a 30)
 * 4. Evaluación Aplicada (preguntas 31 a 40)
 * Distribución: 12 Básicas, 18 Intermedias, 10 Avanzadas | 10 Conceptuales, 10 Análisis, 10 Aplicación, 10 Problema
 */

window.QUESTIONS_FORMATIVA = [
    // =========================================================================
    // DIMENSIÓN 1: FUNDAMENTOS DE EVALUACIÓN (Preguntas 1 a 10)
    // =========================================================================
    {
        id: "ef-01",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Diferenciar las funciones y propósitos esenciales de la evaluación formativa frente a la sumativa.",
        themeCategory: "Concepto de evaluación formativa",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es el propósito primordial que distingue a la evaluación formativa de la evaluación sumativa en cualquier proceso de enseñanza-aprendizaje?",
        options: [
            "Emitir una calificación cuantitativa final que certifique la aprobación de un programa académico.",
            "Recoger evidencias continuas sobre el progreso del estudiante para retroalimentar y ajustar la enseñanza en tiempo real.",
            "Clasificar y jerarquizar a los participantes de acuerdo con su rendimiento relativo frente a una norma estadística.",
            "Determinar de forma punitiva las sanciones académicas aplicables ante errores recurrentes en las tareas."
        ],
        correctAnswer: 1,
        explanationCorrect: "La evaluación formativa se caracteriza por su carácter procesual y continuo: su meta no es acreditar ni clasificar, sino obtener evidencias sobre el aprendizaje para retroalimentar al estudiante y permitirle al docente o facilitador reorientar su práctica didáctica mientras el aprendizaje aún ocurre.",
        explanationIncorrect: "La opción A corresponde a la evaluación sumativa o acreditativa. La opción C define a la evaluación referenciada a la norma (normativa). La opción D desvirtúa por completo el sentido pedagógico de la evaluación al concebirla como mecanismo punitivo.",
        recommendation: "Profundizar en la bibliografía de Dylan Wiliam y Black sobre los cinco principios rectores de la evaluación formativa en el aula."
    },
    {
        id: "ef-02",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Identificar el momento y la finalidad pedagógica de la evaluación diagnóstica.",
        themeCategory: "Evaluación diagnóstica",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En un programa de inducción corporativa o en un curso escolar, ¿qué caracteriza centralmente a una evaluación diagnóstica rigurosa?",
        options: [
            "Se aplica al cierre de la sesión para comprobar el grado de memorización de los conceptos expuestos.",
            "Asigna la calificación que determinará el 50% de la ponderación final del curso formativo.",
            "Identifica conocimientos previos, preconcepciones, expectativas y habilidades iniciales para adaptar la planificación formativa.",
            "Evalúa exclusivamente rasgos de personalidad patológicos mediante reactivos clínicos estandarizados."
        ],
        correctAnswer: 2,
        explanationCorrect: "La evaluación diagnóstica (o inicial) permite detectar el punto de partida real de los participantes, reconociendo ideas previas, fortalezas y brechas cognitivas para ajustar la ruta de aprendizaje antes de iniciar la instrucción formal.",
        explanationIncorrect: "La opción A describe una evaluación sumativa de cierre de sesión. La opción B contradice la naturaleza de la evaluación inicial, la cual no debe tener fines de calificación final. La opción D confunde la evaluación educativa con un test psicopatológico clínico.",
        recommendation: "Revisar técnicas de activación de ideas previas como rutinas de pensamiento visible y cuestionarios diagnósticos no graduados."
    },
    {
        id: "ef-03",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Diferenciar la evaluación criterial de la evaluación normativa en el ámbito formativo.",
        themeCategory: "Evaluación criterial vs normativa",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es el postulado central que fundamenta la evaluación criterial en el marco del enfoque por competencias?",
        options: [
            "El desempeño del estudiante se juzga en relación con criterios de logro y descriptores de competencia predeterminados y públicos.",
            "El estudiante es calificado con base en su posición relativa respecto a la campana de Gauss del grupo.",
            "Solo el 10% superior del grupo tiene derecho a obtener la máxima valoración por motivos de exigencia estándar.",
            "Los criterios de evaluación se mantienen ocultos para evitar que los estudiantes preparen las respuestas con anticipación."
        ],
        correctAnswer: 0,
        explanationCorrect: "La evaluación criterial compara el desempeño de cada individuo contra un estándar objetivo y explícito de competencia (criterios claros y transparentes), independientemente del rendimiento del resto del grupo.",
        explanationIncorrect: "Las opciones B y C describen la evaluación referenciada a normas (curva normal o percentiles), inapropiada para el aseguramiento de competencias individuales. La opción D contradice la transparencia y la alineación constructiva de la evaluación formativa.",
        recommendation: "Consultar los aportes de Popham sobre evaluación criterial y diseño de descriptores de desempeño transparentes."
    },
    {
        id: "ef-04",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Analizar el papel del error en la cultura evaluativa contemporánea.",
        themeCategory: "El error como oportunidad de aprendizaje",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Desde la perspectiva de la evaluación para el aprendizaje (Assessment for Learning), ¿cómo debe ser interpretado el error cometido por el aprendiz?",
        options: [
            "Como un síntoma inequívoco de falta de atención o capacidad que amerita ser penalizado inmediatamente en el registro.",
            "Como una ventana cognitiva que revela la lógica del pensamiento del estudiante y ofrece una oportunidad invaluable de retroalimentación.",
            "Como un factor irrelevante que debe ignorarse para no afectar la autoestima y motivación del aprendiz.",
            "Como una señal de que el facilitador debe reiniciar toda la unidad temática desde el primer módulo sin excepciones."
        ],
        correctAnswer: 1,
        explanationCorrect: "En la evaluación formativa contemporánea (Astolfi, Perrenoud), el error no es una falta moral ni un fracaso, sino un indicador de los modelos mentales del estudiante, un hito normal del proceso de construcción cognitiva que orienta la mediación pedagógica.",
        explanationIncorrect: "La opción A refleja el paradigma tradicional sancionador del error. La opción C ignora el error privando al estudiante de feedback correctivo. La opción D plantea una medida desproporcionada e ineficiente que desconoce la retroalimentación puntual.",
        recommendation: "Estudiar el libro 'El 'error', un medio para enseñar' de Jean-Pierre Astolfi para redimensionar el valor pedagógico del fallo."
    },
    {
        id: "ef-05",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Distinguir las funciones de la evaluación sumativa en contextos formativos y organizacionales.",
        themeCategory: "Evaluación sumativa",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Un coordinador de capacitación laboral necesita verificar si los operarios han alcanzado el estándar de seguridad industrial requerido para operar una máquina de corte. ¿Por qué en esta fase específica predomina la función sumativa?",
        options: [
            "Porque la función sumativa busca certificar y acreditar la competencia demostrada antes de autorizar el ejercicio laboral real.",
            "Porque la evaluación sumativa no requiere evidencias empíricas ni instrumentos de verificación técnica.",
            "Porque la función sumativa es la única que permite a los operarios reflexionar libremente sobre sus aspiraciones profesionales.",
            "Porque se debe garantizar que al menos un tercio de los participantes resulte reprobado para demostrar rigor operativo."
        ],
        correctAnswer: 0,
        explanationCorrect: "La evaluación sumativa tiene como propósito certificar, validar o acreditar de manera formal el logro de determinados resultados de aprendizaje al final de un ciclo o módulo, asegurando que se cumplen los requisitos mínimos de idoneidad.",
        explanationIncorrect: "La opción B es falsa, toda evaluación sumativa rigurosa exige evidencias concretas de desempeño. La opción C alude a la autoevaluación o metacognición. La opción D incurre en una mala práctica basada en cuotas artificiales de reprobación.",
        recommendation: "Revisar los modelos de evaluación de impacto de Donald Kirkpatrick, particularmente el Nivel 2 (Aprendizaje / Certificación)."
    },
    {
        id: "ef-06",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Analizar la articulación entre evaluación de procesos y evaluación de resultados.",
        themeCategory: "Evaluación de procesos y resultados",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Al evaluar un proyecto integrador en educación superior, una docente observa que un equipo presentó un informe final impecable, pero durante las 8 semanas de desarrollo no entregó bitácoras, no asistió a tutorías de seguimiento y subcontrató a terceros. ¿Qué principio evaluativo se vulneró en el diseño de la evaluación?",
        options: [
            "La primacía exclusiva de la calificación sumativa sobre cualquier evidencia procesual.",
            "La integración equilibrada entre la evaluación del proceso (andamiaje y autoría) y la evaluación del producto final.",
            "La prohibición de utilizar proyectos como instrumentos de verificación académica.",
            "La obligación legal de evaluar a los estudiantes únicamente mediante exámenes escritos bajo vigilancia cerrada."
        ],
        correctAnswer: 1,
        explanationCorrect: "Evaluar por competencias exige valorar tanto el proceso continuo de desarrollo (evidencias formativas, iteraciones, reflexión, autoría) como el producto final resultante; limitar la evaluación al producto expone el proceso al fraude y elimina la retroalimentación.",
        explanationIncorrect: "La opción A propone precisamente el error metodológico que causó el problema. La opción C es falsa, los proyectos son metodologías activas altamente recomendadas. La opción D desconoce la variedad de instrumentos de evaluación auténtica.",
        recommendation: "Diseñar hitos evaluativos intermedios (checkpoints formativos) con rúbricas de avance en tareas basadas en proyectos."
    },
    {
        id: "ef-07",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Identificar los principios éticos y deontológicos de la evaluación educativa.",
        themeCategory: "Principios de la evaluación",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Un facilitador decide cambiar inesperadamente los criterios de evaluación el día de la entrega del trabajo final, añadiendo dos requisitos técnicos no contemplados en la guía de aprendizaje. ¿Qué principio cardinal de la evaluación educativa se está transgrediendo?",
        options: [
            "El principio de flexibilidad pedagógica absoluta.",
            "El principio de validez, transparencia y confiabilidad de los criterios evaluativos.",
            "El principio de aleatoriedad en las exigencias académicas.",
            "El principio de subordinación incondicional del aprendiz al juicio del facilitador."
        ],
        correctAnswer: 1,
        explanationCorrect: "La evaluación debe fundamentarse en la transparencia y validez ecológica: los estudiantes tienen el derecho pedagógico de conocer con antelación clara y comprensible qué se espera de ellos, bajo qué criterios serán evaluados y con qué evidencias demostrarán su logro.",
        explanationIncorrect: "La opción A tergiversa el concepto de flexibilidad, convirtiéndolo en arbitrariedad. La opción C no es un principio pedagógico válido. La opción D refleja un modelo autoritario premoderno incompatible con la evaluación por competencias.",
        recommendation: "Socializar y consensuar las rúbricas o matrices de valoración desde el inicio de cada experiencia formativa."
    },
    {
        id: "ef-08",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Aplicar la alineación constructiva entre objetivos, actividades y evaluación.",
        themeCategory: "Alineación constructiva en evaluación",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Si el objetivo de un taller para directivos es 'Diseñar un plan estratégico de gestión del cambio organizacional para su unidad', ¿cuál de las siguientes opciones representa la estrategia de evaluación más coherente?",
        options: [
            "Un cuestionario de opción múltiple de 50 preguntas sobre la historia cronológica de la administración científica.",
            "La elaboración y sustentación de una propuesta de intervención real o simulada para su área de trabajo con criterios de factibilidad.",
            "Una prueba memorística a libro cerrado donde definan al pie de la letra las teorías clásicas de liderazgo.",
            "El registro pasivo de la asistencia puntual a las sesiones presenciales del programa."
        ],
        correctAnswer: 1,
        explanationCorrect: "De acuerdo con el principio de alineación constructiva de John Biggs, la tarea evaluativa debe demandar el mismo nivel cognitivo y competencial que el objetivo: si el objetivo es 'Diseñar un plan', la evaluación debe consistir en el diseño y justificación del plan, no en pruebas memorísticas.",
        explanationIncorrect: "Las opciones A y C evalúan retención declarativa de bajo nivel taxonómico, muy por debajo de la habilidad de 'diseñar'. La opción D confunde la asistencia (condición administrativa) con la demostración de la competencia.",
        recommendation: "Estudiar la obra de John Biggs 'Calidad del aprendizaje universitario' sobre alineación constructiva."
    },
    {
        id: "ef-09",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Resolver problemas derivados de la confusión entre medir, calificar y evaluar.",
        themeCategory: "Medición vs calificación vs evaluación",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "Una institución educativa afirma que realiza 'evaluación formativa continua' porque aplica una prueba de opción múltiple calificada de 1 a 10 cada viernes, registrando la nota en la libreta sin hacer devoluciones cualitativas a los alumnos. Como asesor pedagógico, ¿cuál es tu dictamen técnico?",
        options: [
            "La institución realiza evaluación formativa impecable, ya que la frecuencia semanal garantiza la continuidad del proceso.",
            "La institución confunde la medición y calificación repetitiva con la evaluación formativa; falta la retroalimentación y la reorientación didáctica.",
            "La institución debería aplicar los exámenes dos veces al día para consolidar verdaderamente la evaluación formativa.",
            "El procedimiento es perfecto siempre que las preguntas hayan sido redactadas por expertos internacionales."
        ],
        correctAnswer: 1,
        explanationCorrect: "Medir es asignar un valor numérico; calificar es emitir un juicio formal de acreditación; evaluar formativamente implica interpretar esas evidencias para dialogar con el estudiante, brindar feedback descriptivo y modificar la enseñanza. Multiplicar pruebas sin retroalimentación no es evaluación formativa.",
        explanationIncorrect: "La opción A confunde la frecuencia temporal con la naturaleza formativa de la evaluación. La opción C agravaría el error estresando a los alumnos sin fines pedagógicos. La opción D omite el factor crucial: la ausencia de mediación pedagógica basada en los resultados.",
        recommendation: "Consultar las distinciones conceptuales entre medir, evaluar y calificar en la obra de Santos Guerra y Pedro Ahumada."
    },
    {
        id: "ef-10",
        testId: "formativa",
        dimensionId: "fundamentos",
        dimensionName: "Fundamentos de Evaluación",
        competency: "Resolver situaciones complejas de evaluación en contextos de formación corporativa y por competencias.",
        themeCategory: "Evaluación por competencias en la empresa",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En una empresa de servicios financieros, los empleados obtienen 95% en los exámenes teóricos sobre protocolos de atención al cliente, pero las auditorías de servicio real demuestran un 40% de insatisfacción por mala atención. ¿Qué ajuste estructural de evaluación debe implementar el equipo de capacitación?",
        options: [
            "Elevar la nota mínima de aprobación del examen teórico al 100% y exigir más horas de lectura individual.",
            "Sustituir o complementar las pruebas teóricas con evaluaciones auténticas de desempeño in situ, observación con listas de cotejo y simulaciones de casos críticos.",
            "Eliminar todas las instancias de evaluación y confiar en que la experiencia laboral corregirá espontáneamente el déficit.",
            "Sancionar económicamente a los empleados que no memoricen el manual corporativo en su tiempo libre."
        ],
        correctAnswer: 1,
        explanationCorrect: "Una competencia no se reduce a saber declarativo (conocer el protocolo), sino que exige saber hacer y saber convivir en contexto. Cuando hay brecha entre la teoría y la práctica, se debe transitar hacia la evaluación del desempeño auténtico (simulaciones, observación en vivo, cliente misterioso formativo).",
        explanationIncorrect: "La opción A insiste en evaluar únicamente conocimiento memorístico sin verificar la ejecución práctica. La opción C elimina la evaluación impidiendo el diagnóstico y la mejora. La opción D adopta un enfoque punitivo no pedagógico que no resuelve la brecha de habilidad.",
        recommendation: "Implementar simulaciones clínicas/laborales basadas en el modelo de Miller (sabe, sabe cómo, muestra cómo, hace)."
    },

    // =========================================================================
    // DIMENSIÓN 2: TÉCNICAS E INSTRUMENTOS DE EVALUACIÓN (Preguntas 11 a 20)
    // =========================================================================
    {
        id: "ef-11",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Distinguir la estructura y aplicabilidad de las rúbricas analíticas frente a las holísticas.",
        themeCategory: "Rúbricas analíticas vs holísticas",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es la principal ventaja que ofrece una rúbrica analítica en comparación con una rúbrica global u holística en un proceso formativo?",
        options: [
            "Permite calificar el trabajo en menos de diez segundos sin necesidad de leer el contenido detalladamente.",
            "Desglosa el desempeño en criterios y dimensiones independientes con descriptores cualitativos por niveles, facilitando una retroalimentación precisa.",
            "Garantiza que todos los estudiantes reciban automáticamente la máxima puntuación del curso.",
            "Se limita a registrar si el estudiante asistió puntualmente a las sesiones de clase."
        ],
        correctAnswer: 1,
        explanationCorrect: "La rúbrica analítica evalúa cada componente o dimensión por separado (ej: coherencia, argumentación, uso de fuentes), permitiendo identificar con exactitud milimétrica en qué aspectos el estudiante destaca y en cuáles requiere apoyo específico.",
        explanationIncorrect: "La opción A describe una corrección superficial que desvirtúa la rúbrica. La opción C es absurda, la rúbrica es un instrumento de rigor evaluativo. La opción D confunde una rúbrica con una lista de asistencia.",
        recommendation: "Consultar a Heidi Goodrich Andrade sobre el diseño de rúbricas instruccionales centradas en el aprendizaje."
    },
    {
        id: "ef-12",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Diferenciar una lista de cotejo de una escala de valoración o estimación.",
        themeCategory: "Listas de cotejo vs escalas de valoración",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Qué rasgo técnico define estructuralmente a una lista de cotejo (checklist)?",
        options: [
            "Presenta una escala continua de cinco niveles de frecuencia o calidad (siempre, casi siempre, a veces, casi nunca, nunca).",
            "Es un instrumento dicotómico que registra únicamente la presencia o ausencia de un indicador observable (Sí / No; Cumple / No cumple).",
            "Es un ensayo reflexivo de extensión libre donde el evaluador narra sus impresiones subjetivas.",
            "Es una prueba estandarizada de reactivos de emparejamiento con opciones múltiples."
        ],
        correctAnswer: 1,
        explanationCorrect: "La lista de cotejo es dicotómica: verifica si un rasgo, conducta, elemento o paso de un procedimiento está presente o ausente. Cuando se evalúa gradación de calidad o frecuencia, se emplea una escala de valoración.",
        explanationIncorrect: "La opción A define a una escala de apreciación o estimación de frecuencias (tipo Likert). La opción C describe un registro anecdótico o diario de campo. La opción D define una prueba escrita objetiva.",
        recommendation: "Utilizar listas de cotejo para verificar requerimientos formales, procedimientos estandarizados de seguridad o elementos estructurales obligatorios."
    },
    {
        id: "ef-13",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Comprender la función del portafolio digital como instrumento de evaluación formativa.",
        themeCategory: "Portafolios de evidencias",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Qué convierte a un portafolio de evidencias en un instrumento potente para la evaluación formativa y no en un simple archivador de tareas?",
        options: [
            "La exigencia de que todos los documentos se impriman en papel de alta calidad empastado en cuero.",
            "La inclusión sistemática de reflexiones metacognitivas del estudiante sobre su propio proceso, avances y autorregulaciones.",
            "La acumulación de al menos quinientas páginas de textos sin ningún criterio de selección previa.",
            "Que solo contenga trabajos que hayan obtenido la máxima calificación sin errores visibles."
        ],
        correctAnswer: 1,
        explanationCorrect: "Un portafolio educativo auténtico combina la selección intencionada de evidencias representativas con la reflexión metacognitiva: el estudiante analiza por qué seleccionó esa muestra, qué aprendió con ella y qué dificultades superó.",
        explanationIncorrect: "La opción A atiende a cuestiones cosméticas superficiales. La opción C confunde cantidad con valor pedagógico. La opción D desconoce el valor del borrador y la progresión del aprendizaje frente al producto final pulido.",
        recommendation: "Revisar la tipología de portafolios (de trabajo, de presentación, de evaluación) en la obra de Danielson y Abrutyn."
    },
    {
        id: "ef-14",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Analizar el uso pedagógico de la coevaluación entre pares.",
        themeCategory: "Coevaluación entre pares",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Un docente implementa la coevaluación en un taller de redacción, pero nota que los estudiantes se califican entre sí con la nota máxima por amistad o complicidad, sin hacerse comentarios críticos. ¿Cuál es la causa metodológica principal de esta falla?",
        options: [
            "La coevaluación es una técnica intrínsecamente inútil que jamás debe utilizarse en ámbitos formativos.",
            "Los estudiantes no contaban con criterios de evaluación claros ni fueron capacitados previamente en el uso de rúbricas analíticas para brindar feedback descriptivo.",
            "Los estudiantes deberían ser amenazados con perder la materia si no reprueban al menos a un compañero de equipo.",
            "El docente debió prohibir que los estudiantes leyeran los trabajos de sus pares para evitar comparaciones."
        ],
        correctAnswer: 1,
        explanationCorrect: "Para que la coevaluación funcione como mecanismo de aprendizaje, los estudiantes necesitan entrenamiento explícito en el uso de criterios objetivos, comprensión de la rúbrica y desarrollo de habilidades de retroalimentación constructiva basada en evidencias.",
        explanationIncorrect: "La opción A desacredita injustificadamente una de las estrategias de evaluación formativa con mayor impacto empírico según Hattie. La opción C es punitiva y destructiva del clima de aula. La opción D contradice la esencia de la coevaluación.",
        recommendation: "Implementar protocolos guiados de feedback entre pares como la 'Escalera de la Retroalimentación' de Daniel Wilson."
    },
    {
        id: "ef-15",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Diseñar criterios observables para escalas de valoración de desempeño.",
        themeCategory: "Escalas de valoración",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Al redactar un indicador de desempeño para evaluar una presentación oral en público, ¿cuál de los siguientes enunciados cumple con las directrices técnicas de formulación observable y objetiva?",
        options: [
            "Demuestra un espíritu noble y un entusiasmo interior muy puro durante la exposición.",
            "Estructura la presentación con apertura, desarrollo y cierre, empleando apoyos visuales legibles y modulando el tono de voz según la audiencia.",
            "Sabe muchísimo sobre el tema y parece una persona con un futuro profesional brillante.",
            "Se porta bien y respeta las leyes de la educación nacional."
        ],
        correctAnswer: 1,
        explanationCorrect: "Los criterios evaluativos deben ser observables, verificables y centrados en el desempeño: estructuración, uso de apoyos visuales y modulación vocal son conductas que el evaluador puede contrastar con evidencias directas.",
        explanationIncorrect: "Las opciones A, C y D contienen juicios morales, subjetivos, ambiguos o inobservables que no permiten una valoración técnica confiable ni ofrecen retroalimentación formativa al aprendiz.",
        recommendation: "Formular descriptores de desempeño utilizando verbos de acción observables en lugar de adjetivos abstractos o especulaciones internas."
    },
    {
        id: "ef-16",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Aplicar la observación sistemática mediante registros de incidentes críticos.",
        themeCategory: "Observación sistemática",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "En un curso de formación de brigadistas de emergencia, el instructor registra el comportamiento de los participantes durante un simulacro de evacuación. ¿Qué información es indispensable consignar en un registro anecdótico para que tenga valor formativo?",
        options: [
            "La descripción objetiva del hecho observado, el contexto situacional y la interpretación pedagógica separada del hecho.",
            "Únicamente los apodos y comentarios chistosos sobre los errores de los participantes.",
            "Un resumen general de tres líneas que diga si el grupo le cayó simpático o antipático al evaluador.",
            "La calificación numérica definitiva sin ninguna anotación textual sobre lo ocurrido."
        ],
        correctAnswer: 0,
        explanationCorrect: "Un registro anecdótico riguroso requiere registrar el acontecimiento fáctico de manera descriptiva y neutral (qué ocurrió, cuándo, dónde y cómo), manteniendo separada la interpretación técnica del evaluador para evitar sesgos.",
        explanationIncorrect: "Las opciones B y C carecen de rigor ético y metodológico. La opción D elimina el valor descriptivo de la observación sistemática, reduciéndola a una cifra sin evidencia cualitativa.",
        recommendation: "Adoptar pautas de registro anecdótico que diferencien la columna de 'Hecho fáctico observable' de la columna de 'Análisis / Hipótesis pedagógica'."
    },
    {
        id: "ef-17",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Seleccionar instrumentos de evaluación auténtica para la resolución de problemas.",
        themeCategory: "Pruebas de desempeño auténtico",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Una docente de ciencias naturales desea evaluar si sus estudiantes de secundaria comprenden el impacto de la contaminación del agua en su comunidad local. ¿Qué instrumento y actividad resultan más pertinentes bajo un enfoque auténtico?",
        options: [
            "Una prueba de diez preguntas de verdadero o falso sobre la fórmula química del agua potable.",
            "Una rúbrica analítica aplicada a un informe de análisis de muestras de agua del río local con propuesta de mitigación ecológica comunitaria.",
            "Una lista de cotejo para verificar si los cuadernos tienen margen rojo y letra legible.",
            "Un dictado de conceptos teóricos extraídos del diccionario enciclopédico escolar."
        ],
        correctAnswer: 1,
        explanationCorrect: "La evaluación auténtica (Wiggins) sitúa al estudiante ante problemas reales de su entorno; la recolección de muestras locales y la propuesta comunitaria evaluada con rúbrica analítica miden comprensión profunda y transferencia contextualizada.",
        explanationIncorrect: "La opción A evalúa memorización descontextualizada. La opción C evalúa aspectos formales irrelevantes para la competencia científica. La opción D es una práctica reproductiva pasiva.",
        recommendation: "Explorar la metodología de Grant Wiggins sobre tareas de desempeño auténtico (marco GRASPS / GREDOS)."
    },
    {
        id: "ef-18",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Aplicar la autoevaluación guiada en procesos de aprendizaje autónomo.",
        themeCategory: "Autoevaluación guiada",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "Un facilitador de capacitación empresarial diseña una matriz de autoevaluación para que los líderes de ventas examinen sus habilidades de negociación tras una simulación. Para evitar que la autoevaluación se convierta en una sobreestimación complaciente, ¿qué requisito debe incorporar la herramienta?",
        options: [
            "Solicitar que el participante justifique cada nivel seleccionado aportando evidencias concretas y observables ocurridas durante la simulación.",
            "Descontar automáticamente dos puntos de la nota final a quien se califique con el puntaje más alto.",
            "Obligar a que el jefe directo del líder decida la respuesta que el colaborador debe marcar en su propia hoja.",
            "Pedir que califiquen su estado de ánimo antes que sus competencias técnicas de negociación."
        ],
        correctAnswer: 0,
        explanationCorrect: "La autoevaluación formativa no es un acto de fe ni de complacencia; adquiere rigor cuando el participante debe respaldar su juicio con evidencias verificables de su propio desempeño frente a criterios explícitos.",
        explanationIncorrect: "La opción B castiga artificialmente la autoevaluación honesta. La opción C suplanta la autoevaluación transformándola en heteroevaluación. La opción D desvía el foco de las competencias de negociación hacia aspectos emocionales no vinculados a los criterios.",
        recommendation: "Articular la autoevaluación con la triangulación de evidencias (autoevaluación + coevaluación + heteroevaluación)."
    },
    {
        id: "ef-19",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Resolver problemas en la calibración y validez de constructo de rúbricas analíticas.",
        themeCategory: "Calibración de instrumentos",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En un programa de posgrado, tres docentes corrigen los mismos ensayos con la misma rúbrica pero obtienen calificaciones con discrepancias de más del 40% entre ellos. ¿Qué medida técnica debe tomar la coordinación académica para resolver esta falta de confiabilidad inter-evaluador?",
        options: [
            "Promediar a ciegas las notas sin debatir nada para no incomodar a los profesores evaluadores.",
            "Realizar una sesión de calibración de evaluadores (moderación) revisando muestras testigo para unificar criterios y ajustar los descriptores de la rúbrica.",
            "Despedir inmediatamente a los tres docentes y sustituirlos por un software automático de conteo de palabras.",
            "Eliminar la rúbrica y permitir que cada docente califique según su intuición y criterio personal libre."
        ],
        correctAnswer: 1,
        explanationCorrect: "La confiabilidad inter-evaluador se logra mediante procesos de calibración o moderación: los docentes analizan muestras representativas de trabajos (ancla / testigo), debaten la interpretación de los descriptores y acuerdan estándares comunes antes de la calificación masiva.",
        explanationIncorrect: "La opción A perpetúa la injusticia evaluativa y la inconsistencia técnica. La opción C es desproporcionada e ineficaz. La opción D empeoraría la subjetividad al eliminar el marco de referencia común.",
        recommendation: "Institucionalizar mesas de moderación de evaluación colegiada al inicio de cada ciclo académico."
    },
    {
        id: "ef-20",
        testId: "formativa",
        dimensionId: "tecnicas",
        dimensionName: "Técnicas e Instrumentos de Evaluación",
        competency: "Resolver dilemas de evaluación en entornos de aprendizaje digital y multimodal.",
        themeCategory: "Evaluación en entornos virtuales",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En un curso en línea asincrónico para 500 docentes, la plataforma registra que los participantes responden cuestionarios teóricos aprobándolos al 100%, pero en las tareas de diseño pedagógico demuestran graves vacíos conceptuales. ¿Qué combinación de instrumentos formativos resolvería esta brecha?",
        options: [
            "Instalar sistemas de reconocimiento facial intrusivos que bloqueen el teclado durante los cuestionarios teóricos.",
            "Diseñar tareas de desempeño auténtico con evaluación entre pares guiada por rúbricas analíticas y feedback automatizado formativo por niveles.",
            "Aumentar el número de preguntas de opción múltiple de 10 a 200 por cuestionario.",
            "Suspender el curso virtual y exigir que viajen a la capital de forma obligatoria."
        ],
        correctAnswer: 1,
        explanationCorrect: "En la educación digital masiva, las pruebas de opción múltiple solo miden reconocimiento superficial; integrar tareas auténticas con rúbricas analíticas y evaluación entre pares andamiada (peer assessment) permite evaluar desempeños complejos a escala.",
        explanationIncorrect: "La opción A confunde vigilancia tecnológica con aprendizaje pedagógico. La opción C satura cognitivamente al estudiante sin cambiar el nivel taxonómico de la prueba. La opción D desconoce la viabilidad y valor de la formación virtual bien diseñada.",
        recommendation: "Utilizar el marco de evaluación de la UNESCO para la educación virtual con énfasis en evaluación formativa continua y formativa adaptativa."
    },

    // =========================================================================
    // DIMENSIÓN 3: RETROALIMENTACIÓN Y METACOGNICIÓN (Preguntas 21 a 30)
    // =========================================================================
    {
        id: "ef-21",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Diferenciar la retroalimentación descriptiva de la retroalimentación valorativa o de felicitación.",
        themeCategory: "Retroalimentación descriptiva",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "Al devolver un trabajo a un participante, un facilitador escribe: '¡Muy bien hecho! ¡Felicitaciones! ¡Excelente trabajo! 10/10'. Según las investigaciones de Hattie y Timperley, ¿por qué este tipo de devolución tiene un impacto formativo casi nulo?",
        options: [
            "Porque felicitar a los estudiantes siempre genera soberbia y desobediencia en el aula.",
            "Porque se limita a un elogio a la persona y no describe la brecha de aprendizaje, ni cómo se alcanzaron los criterios, ni qué pasos seguir para avanzar.",
            "Porque la única retroalimentación válida debe consistir en críticas severas y señalamientos de faltas.",
            "Porque las felicitaciones están expresamente prohibidas por las normas internacionales de educación."
        ],
        correctAnswer: 1,
        explanationCorrect: "El elogio personal ('buen chico', 'excelente') orienta la atención hacia el yo y no hacia la tarea. La retroalimentación descriptiva eficaz debe responder a tres preguntas: ¿Hacia dónde voy? (objetivo), ¿Cómo voy? (evidencia actual) y ¿Cuál es el siguiente paso? (feed-forward).",
        explanationIncorrect: "La opción A contiene una afirmación psicológica infundada. La opción C confunde retroalimentación con descalificación o castigo. La opción D es completamente falsa e inexistente.",
        recommendation: "Aplicar el modelo de retroalimentación en tres niveles de Hattie y Timperley: tarea, proceso y autorregulación."
    },
    {
        id: "ef-22",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Reconocer la oportunidad temporal (timing) de la retroalimentación pedagógica.",
        themeCategory: "Retroalimentación oportuna",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es el criterio temporal más favorable para que la retroalimentación formativa ejerza su máximo impacto en la consolidación del aprendizaje?",
        options: [
            "Entregarla dos meses después de concluido el curso para que el estudiante haya olvidado sus errores iniciales.",
            "Ofrecerla de manera oportuna mientras el proceso aún está activo y el estudiante tiene la posibilidad inmediata de mejorar su desempeño.",
            "Brindarla únicamente el último día del año escolar junto con el diploma de graduación.",
            "Darla exclusivamente antes de que el estudiante intente realizar cualquier tarea por primera vez."
        ],
        correctAnswer: 1,
        explanationCorrect: "La retroalimentación tardía pierde su potencial formativo y se transforma en un balance contable sumativo; para ser formativa, debe ser oportuna (just-in-time), permitiendo que el estudiante utilice los comentarios para revisar y perfeccionar su producción.",
        explanationIncorrect: "Las opciones A y C anulan la posibilidad de que el estudiante aplique el feedback en su producción en curso. La opción D describe una instrucción previa o modelamiento, no una retroalimentación.",
        recommendation: "Implementar ciclos cortos de retroalimentación formativa y segundas oportunidades de entrega basadas en comentarios previos."
    },
    {
        id: "ef-23",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Identificar los componentes esenciales de la metacognición en el aprendizaje.",
        themeCategory: "Concepto de metacognición",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En psicología educativa, ¿qué define centralmente a la metacognición según los planteamientos de John Flavell?",
        options: [
            "La capacidad biológica de memorizar fechas históricas sin comprender su significado.",
            "El conocimiento, monitoreo y regulación consciente que una persona ejerce sobre sus propios procesos cognitivos y de aprendizaje.",
            "Un estado de hipnosis pedagógica inducido por medios audiovisuales.",
            "La habilidad para adivinar las respuestas correctas de una prueba sin haber estudiado."
        ],
        correctAnswer: 1,
        explanationCorrect: "La metacognición se define como el 'pensar sobre el propio pensamiento': comprende el conocimiento declarativo, procedimental y condicional sobre la propia mente, así como las habilidades de planificación, monitoreo y evaluación de la propia cognición.",
        explanationIncorrect: "La opción A describe memorización mecánica de bajo orden. La opción C es una pseudociencia no relacionada con la pedagogía. La opción D alude al azar en pruebas cerradas.",
        recommendation: "Integrar preguntas metacognitivas al cierre de cada sesión: ¿Qué aprendí hoy? ¿Qué estrategia me funcionó mejor? ¿Dónde tuve más dudas?"
    },
    {
        id: "ef-24",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Analizar la estructura de una retroalimentación pedagógica efectiva.",
        themeCategory: "Estructura de la retroalimentación",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Analiza el siguiente comentario de un tutor sobre un plan de clase: 'Tu objetivo está bien alineado con la taxonomía, pero en la actividad de desarrollo no se observa cómo participarán los alumnos; te sugiero incluir un trabajo cooperativo en parejas con una guía de preguntas y volver a presentar tu propuesta mañana'. ¿Por qué este feedback es pedagógicamente de alta calidad?",
        options: [
            "Porque identifica un logro específico, señala con claridad el punto de mejora y ofrece una acción concreta de avance (feed-forward).",
            "Porque califica con nota numérica exacta de acuerdo con el reglamento disciplinario.",
            "Porque evita cualquier señalamiento crítico para que el estudiante no se sienta frustrado.",
            "Porque le ahorra trabajo al docente al pedirle al alumno que haga todo de nuevo desde cero."
        ],
        correctAnswer: 0,
        explanationCorrect: "Un feedback efectivo articula el reconocimiento del logro ('objetivo bien alineado'), el diagnóstico preciso de la necesidad ('falta participación en desarrollo') y la recomendación accionable ('trabajo en parejas con guía'), abriendo una oportunidad de mejora.",
        explanationIncorrect: "La opción B no es cierta, el comentario no utiliza notas numéricas sino retroalimentación cualitativa. La opción C es falsa, sí señala una debilidad explícita de forma respetuosa. La opción D tergiversa la intención pedagógica del tutor.",
        recommendation: "Estudiar la obra 'El valor formativo de la retroalimentación' de Rebeca Anijovich."
    },
    {
        id: "ef-25",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Fomentar la autorregulación del aprendizaje mediante la evaluación formativa.",
        themeCategory: "Autorregulación del aprendizaje",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "¿Cómo contribuye la evaluación formativa a desarrollar la autorregulación según el modelo de Barry Zimmerman?",
        options: [
            "Haciendo que el estudiante dependa exclusivamente de las órdenes y premios externos del profesor.",
            "Facilitando que el estudiante aprenda a fijar metas, monitorear su propio progreso y ajustar sus estrategias cognitivas frente a las dificultades.",
            "Eliminando toda necesidad de esfuerzo y concentración por parte del participante.",
            "Impidiendo que el estudiante conozca los errores cometidos para no distraer su concentración."
        ],
        correctAnswer: 1,
        explanationCorrect: "La autorregulación cíclica de Zimmerman (previsión, ejecución y auto-reflexión) se fortalece cuando la evaluación formativa proporciona criterios transparentes y espacios continuos para que el estudiante autoevalúe su eficacia y calibre sus estrategias de estudio.",
        explanationIncorrect: "La opción A describe dependencia heterónoma, opuesta a la autorregulación. La opción C es una falacia absurda. La opción D contradice el principio de retroalimentación sobre el error.",
        recommendation: "Revisar las tres fases del aprendizaje autorregulado de Zimmerman: planificación previa, control de la ejecución y auto-juicio."
    },
    {
        id: "ef-26",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Analizar el uso de preguntas socráticas en la retroalimentación oral.",
        themeCategory: "Preguntas metacognitivas orientadoras",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "Durante una sesión de asesoría a un equipo de proyectos que no logra delimitar su problema de investigación, el facilitador pregunta: '¿Qué evidencias les hacen pensar que ese es el problema raíz y no una consecuencia secundaria? ¿Cómo podrían verificarlo?'. ¿Qué objetivo formativo persigue esta intervención?",
        options: [
            "Humillar al equipo evidenciando su falta de lecturas previas frente al resto del salón.",
            "Activar la reflexión metacognitiva y el pensamiento crítico para que el equipo descubra por sí mismo las inconsistencias de su propuesta.",
            "Dictarles la respuesta correcta para terminar rápido la sesión de asesoría.",
            "Demostrar la superioridad intelectual del docente mediante acertijos sin solución."
        ],
        correctAnswer: 1,
        explanationCorrect: "El andamiaje socrático mediante preguntas orientadoras ayuda a los aprendices a examinar sus propios supuestos, verificar evidencias y autorregular su pensamiento sin depender de respuestas masticadas por el docente.",
        explanationIncorrect: "Las opciones A y D atribuyen intenciones destructivas contrarias a la ética docente. La opción C describe la conducta opuesta: el facilitador no dio la respuesta, formuló preguntas de mediación.",
        recommendation: "Utilizar protocolos de preguntas socráticas (clarificación, examen de supuestos, exploración de perspectivas y análisis de consecuencias)."
    },
    {
        id: "ef-27",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Implementar la 'Escalera de la Retroalimentación' en contextos prácticos.",
        themeCategory: "Escalera de la retroalimentación",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Al utilizar el protocolo de la 'Escalera de la Retroalimentación' del Proyecto Cero de Harvard (Daniel Wilson), ¿cuál es el orden secuencial correcto de los cuatro peldaños que guían la conversación?",
        options: [
            "1. Descalificar - 2. Ignorar - 3. Corregir - 4. Calificar.",
            "1. Clarificar dudas - 2. Valorar fortalezas - 3. Expresar inquietudes/preguntas - 4. Hacer sugerencias.",
            "1. Poner nota - 2. Pedir disculpas - 3. Felicitar - 4. Asignar nueva tarea.",
            "1. Exponer la solución - 2. Criticar - 3. Aplaudir - 4. Firmar el acta."
        ],
        correctAnswer: 1,
        explanationCorrect: "La Escalera de la Retroalimentación de Daniel Wilson sigue un protocolo riguroso y respetuoso: primero Clarificar aspectos no comprendidos; luego Valorar lo que funciona bien; después Expresar inquietudes ('Me pregunto si...'); y finalmente Hacer Sugerencias constructivas.",
        explanationIncorrect: "La opción A es tóxica y antipedagógica. Las opciones C y D mezclan fases desordenadas y no guardan ninguna relación con el protocolo de Harvard.",
        recommendation: "Practicar el uso de la Escalera de la Retroalimentación en sesiones de coevaluación entre pares o feedback 1 a 1."
    },
    {
        id: "ef-28",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Diseñar estrategias de feedback que generen compromiso con la mejora (feed-forward).",
        themeCategory: "Feed-forward y mejora continua",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Un facilitador de capacitación nota que los colaboradores leen sus notas, miran las correcciones, pero las archivan de inmediato y vuelven a cometer los mismos errores en el informe siguiente. ¿Qué estrategia pedagógica de retroalimentación revierte esta situación?",
        options: [
            "Colocar notas en tinta roja más llamativas con signos de exclamación grandes.",
            "Implementar una sesión obligatoria donde cada participante deba aplicar el feedback en una versión 2.0 del informe antes de recibir la calificación sumativa definitiva.",
            "Dejar de entregar retroalimentación para no desgastarse inútilmente.",
            "Publicar las peores notas en el portal público de la empresa para ejercer presión social."
        ],
        correctAnswer: 1,
        explanationCorrect: "El feedback solo genera aprendizaje cuando existe una 'ventana de oportunidad' para usarlo. Si se vincula a una segunda iteración obligatoria (versión revisada) antes de la calificación sumativa, el estudiante se ve forzado a procesar y aplicar las sugerencias recibidas.",
        explanationIncorrect: "La opción A es cosmética e irrelevante. La opción C abandona la labor formativa. La opción D constituye acoso laboral y vulnera los derechos fundamentales del aprendiz.",
        recommendation: "Estructurar las evaluaciones en entregas iterativas: Borrador con retroalimentación -> Versión mejorada con matriz de cambios aplicados -> Entrega final."
    },
    {
        id: "ef-29",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Resolver situaciones de bloqueo o resistencia psicológica ante la retroalimentación crítica.",
        themeCategory: "Gestión emocional del feedback",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Un profesional experimentado que cursa una certificación técnica reacciona a la defensiva y con hostilidad al recibir observaciones sobre fallas en su proyecto, argumentando: 'Tengo 15 años de experiencia, su corrección no tiene sentido'. ¿Cómo debe intervenir el facilitador desde un enfoque de retroalimentación formativa asertiva?",
        options: [
            "Reprenderlo públicamente y expulsarlo del curso por falta de respeto a la autoridad docente.",
            "Reconocer su trayectoria previa, invitarlo a una sesión individual y contrastar de manera neutral las evidencias de su trabajo frente a los criterios explícitos de la rúbrica acordada.",
            "Darle la razón de inmediato y asignarle un 100% de calificación para evitar conflictos personales.",
            "Ignorar su reclamo y reprobarlo silenciosamente en el siguiente examen sin darle explicaciones."
        ],
        correctAnswer: 1,
        explanationCorrect: "La retroalimentación asertiva neutraliza la amenaza identitaria validando la experiencia del sujeto pero anclando el diálogo en los hechos y en los criterios objetivos de la rúbrica, no en un choque de egos entre docente y estudiante.",
        explanationIncorrect: "La opción A escala el conflicto innecesariamente. La opción C cae en el fraude evaluativo y el abandono pedagógico. La opción D es una represalia encubierta que viola la ética evaluativa.",
        recommendation: "Estudiar 'Thanks for the Feedback' de Douglas Stone y Sheila Heen sobre desencadenantes de resistencia al feedback (verdad, relación e identidad)."
    },
    {
        id: "ef-30",
        testId: "formativa",
        dimensionId: "retroalimentacion",
        dimensionName: "Retroalimentación y Metacognición",
        competency: "Diseñar rutinas de pensamiento visible para el seguimiento metacognitivo continuo.",
        themeCategory: "Rutinas de pensamiento metacognitivas",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Al finalizar una unidad compleja de bioestadística, el profesor desea que los estudiantes hagan consciente cómo cambió su comprensión del tema e identifiquen qué lagunas conceptuales persisten. ¿Cuál de las siguientes rutinas de pensamiento visible del Proyecto Cero cumple con máxima fidelidad este propósito?",
        options: [
            "La rutina 'Antes pensaba... pero ahora pienso...', complementada con '¿Qué preguntas aún me inquietan?'.",
            "La rutina de copiar tres veces el índice del libro de texto en silencio.",
            "Un test de memoria relámpago con límite de tiempo de 3 segundos por pregunta.",
            "El sorteo de una rifa entre los estudiantes que asistieron a todas las clases."
        ],
        correctAnswer: 0,
        explanationCorrect: "La rutina de pensamiento 'Antes pensaba... pero ahora pienso...' (Ritchhart, Church y Morrison) promueve la autoevaluación metacognitiva del cambio conceptual, ayudando al estudiante a visibilizar cómo se transformó su comprensión y qué aspectos debe profundizar.",
        explanationIncorrect: "La opción B es una tarea memorística mecánica. La opción C mide velocidad de respuesta, no reflexión metacognitiva. La opción D es un incentivo extrínseco sin vinculación evaluativa.",
        recommendation: "Integrar rutinas de pensamiento visible (Thinking Routines) del Proyecto Cero de Harvard como herramientas de evaluación formativa regular."
    },

    // =========================================================================
    // DIMENSIÓN 4: EVALUACIÓN APLICADA (Preguntas 31 a 40)
    // =========================================================================
    {
        id: "ef-31",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Identificar las características de la evaluación auténtica frente a la evaluación tradicional.",
        themeCategory: "Evaluación auténtica",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Qué condición fundamental define a una tarea de evaluación como auténtica?",
        options: [
            "Que utilice preguntas de opción múltiple con hojas de respuesta de lectura óptica.",
            "Que enfrente al estudiante a situaciones, desafíos y contextos análogos a los que los profesionales resuelven en la vida real o laboral.",
            "Que esté redactada exclusivamente en idioma extranjero para aumentar su nivel de complejidad.",
            "Que no permita el acceso a ningún tipo de fuentes de información, calculadoras ni internet."
        ],
        correctAnswer: 1,
        explanationCorrect: "La evaluación auténtica (Grant Wiggins, Linda Darling-Hammond) requiere que los estudiantes apliquen conocimientos y habilidades en situaciones reales o realistas del mundo social y laboral, integrando competencias complejas con sentido y propósito.",
        explanationIncorrect: "La opción A describe una prueba estandarizada tradicional. La opción C añade una dificultad instrumental no justificada. La opción D aísla al estudiante del uso de herramientas reales de trabajo, contradiciendo la autenticidad.",
        recommendation: "Consultar la obra de Neus Sanmartí '10 ideas clave: Evaluar para aprender' sobre evaluación auténtica y formativa."
    },
    {
        id: "ef-32",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Seleccionar el instrumento idóneo según la naturaleza de la competencia a evaluar.",
        themeCategory: "Selección de instrumentos",
        difficulty: "basica",
        cognitiveType: "analisis",
        question: "Un instructor de gastronomía desea evaluar si los aprendices dominan la técnica correcta de desinfección, corte en juliana y manejo seguro del cuchillo chef en tiempo real. ¿Cuál es el instrumento más apropiado?",
        options: [
            "Un ensayo literario de cinco cuartillas sobre la historia del cuchillo en la Edad Media.",
            "Una lista de cotejo o escala de apreciación aplicada durante una prueba de desempeño práctico en cocina.",
            "Un crucigrama impreso con los nombres de las verduras.",
            "Un debate oral sobre las políticas agrícolas internacionales."
        ],
        correctAnswer: 1,
        explanationCorrect: "Las habilidades psicomotrices y de ejecución procedimental requieren observación directa del desempeño en tiempo real mediante instrumentos precisos como listas de cotejo de pasos seguros y escalas de valoración de técnica y destreza.",
        explanationIncorrect: "Las opciones A, C y D evalúan contenidos declarativos o argumentativos totalmente desalineados con la competencia procedimental directa del corte y desinfección.",
        recommendation: "Alinear el tipo de saber (conceptual, procedimental, actitudinal) con el tipo de instrumento evaluativo pertinente."
    },
    {
        id: "ef-33",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Tomar decisiones pedagógicas basadas en el análisis de resultados formativos.",
        themeCategory: "Toma de decisiones pedagógicas",
        difficulty: "basica",
        cognitiveType: "analisis",
        question: "Tras aplicar una evaluación formativa rápida en mitad de una clase, el docente descubre que el 75% del grupo no comprendió la diferencia entre correlación y causalidad. ¿Cuál es la decisión pedagógica más acertada que debe adoptar en ese momento?",
        options: [
            "Ignorar el resultado, felicitarse a sí mismo por haber explicado el tema y continuar con el siguiente tema del temario.",
            "Hacer una pausa en la planificación prevista, diseñar una analogía o análisis de casos reales para clarificar la confusión y verificar de nuevo la comprensión.",
            "Reprobar de inmediato a ese 75% del grupo y suspender las clases prácticas del semestre.",
            "Asignarles a los estudiantes una multa económica por falta de concentración en el salón."
        ],
        correctAnswer: 1,
        explanationCorrect: "La esencia de la evaluación formativa es informar la acción didáctica (Wiliam). Si la evidencia demuestra que tres cuartas partes del grupo tienen una confusión conceptual crítica, avanzar ciegamente es negligencia pedagógica; se impone ajustar la instrucción y re-mediar.",
        explanationIncorrect: "La opción A representa la docencia burocrática centrada en 'cubrir contenidos' y no en el aprendizaje. Las opciones C y D son absurdas y punitivas.",
        recommendation: "Incorporar 'Boletos de Salida' (Exit Tickets) al final de cada clase para tomar decisiones instruccionales informadas antes de la siguiente sesión."
    },
    {
        id: "ef-34",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Diseñar planes de mejoramiento individualizados derivados de la evaluación.",
        themeCategory: "Planes de mejoramiento continuo",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "En un curso de enfermería, un estudiante aprueba los exámenes teóricos pero en la práctica clínica muestra dificultades sistemáticas en el cálculo de dosis farmacológicas pediátricas. ¿Cómo debe formularse su plan de mejoramiento formativo?",
        options: [
            "Exigirle que estudie solo en su casa sin tutoría hasta que pasen seis meses.",
            "Establecer metas específicas de cálculo, proveer ejercicios situacionales progresivos con retroalimentación guiada por un tutor y reevaluar la competencia con simuladores antes de la atención al paciente.",
            "Autorizarlo a suministrar medicamentos directamente a niños hospitalizados para que aprenda por ensayo y error en vivo.",
            "Obligarlo a cambiar de carrera inmediatamente sin ofrecerle ninguna alternativa de nivelación."
        ],
        correctAnswer: 1,
        explanationCorrect: "Un plan de mejoramiento debe ser específico, medible y acompañado: define objetivos de superación precisos, ofrece actividades de andamiaje graduadas y utiliza entornos seguros (simulación clínica) para verificar la superación del error antes de exponer a riesgos a terceros.",
        explanationIncorrect: "La opción A carece de mediación docente. La opción C es un acto criminal de mala praxis médica y bioética. La opción D deniega el derecho formativo a la nivelación y remediation pedagógica.",
        recommendation: "Diseñar planes de mejoramiento basados en la formulación de compromisos SMART (específicos, medibles, alcanzables, relevantes y temporizados)."
    },
    {
        id: "ef-35",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Evaluar la transferencia del aprendizaje en el puesto de trabajo.",
        themeCategory: "Evaluación de la transferencia laboral",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Una consultora capacitó a 80 supervisores de ventas en 'Liderazgo y Gestión Emocional'. Tres meses después, la gerencia de recursos humanos quiere evaluar el impacto real del programa. ¿Cuál de los siguientes métodos corresponde al Nivel 3 de Kirkpatrick (Conducta / Transferencia)?",
        options: [
            "Encuestar a los supervisores sobre si el café y el aire acondicionado del salón de capacitación fueron agradables.",
            "Aplicar una evaluación 360 grados y observaciones sistemáticas en el lugar de trabajo para evidenciar si los supervisores cambiaron efectivamente su estilo de liderazgo con sus colaboradores.",
            "Verificar si los supervisores recuerdan de memoria el nombre de los autores de la inteligencia emocional mediante un examen de opción múltiple.",
            "Revisar el recibo de pago de la factura de los refrigerios del evento."
        ],
        correctAnswer: 1,
        explanationCorrect: "El Nivel 3 del modelo de Kirkpatrick evalúa el Comportamiento o Transferencia: mide el grado en que los participantes aplican lo aprendido en su trabajo diario, mediante observación in situ, auditorías de desempeño y retroalimentación de pares o subordinados (evaluación 360).",
        explanationIncorrect: "La opción A corresponde al Nivel 1 (Reacción / Satisfacción). La opción C corresponde al Nivel 2 (Aprendizaje teórico). La opción D es un control contable que nada tiene que ver con evaluación formativa ni de impacto.",
        recommendation: "Estudiar el modelo de los cuatro niveles de evaluación de Donald y James Kirkpatrick."
    },
    {
        id: "ef-36",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Construir rúbricas socioformativas con niveles de complejidad contextualizada.",
        themeCategory: "Diseño de rúbricas socioformativas",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Desde el enfoque socioformativo de Sergio Tobón, ¿cuál es la estructura de progresión de niveles de dominio recomendada para redactar los descriptores de una rúbrica por competencias?",
        options: [
            "Pésimo, Malo, Regular, Bueno, Excelente.",
            "Receptivo (nociones básicas), Resolutivo (resuelve problemas simples), Autónomo (argumenta e innova) y Estratégico (crea soluciones complejas y autorregula el impacto).",
            "Cero, Uno, Dos, Tres, Cuatro.",
            "Aprobado de milagro, Aprobado normal, Aprobado sobresaliente, Dios de la materia."
        ],
        correctAnswer: 1,
        explanationCorrect: "La socioformación propone cuatro niveles cualitativos de dominio: Receptivo (recepción pasiva y conceptos iniciales), Resolutivo (aplicación práctica en problemas sencillos), Autónomo (criterio propio, argumentación y mejora continua) y Estratégico (creatividad, liderazgo ético y resolución de problemas de alta incertidumbre).",
        explanationIncorrect: "Las opciones A, C y D utilizan adjetivos vagos, escalas numéricas desprovistas de descripción cualitativa o denominaciones informales que no orientan formativamente la progresión del estudiante.",
        recommendation: "Consultar la metodología de rúbricas socioformativas de Sergio Tobón para articular saberes y resolución de problemas de contexto."
    },
    {
        id: "ef-37",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Diseñar adaptaciones de evaluación bajo el marco DUA (Diseño Universal para el Aprendizaje).",
        themeCategory: "Evaluación inclusiva y DUA",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En un grupo escolar de educación inclusiva, una estudiante con dislexia severa y un estudiante con parálisis motriz en las manos deben demostrar su comprensión de los ecosistemas locales. ¿Cómo debe actuar el docente para garantizar una evaluación formativa equitativa sin rebajar la exigencia cognitiva?",
        options: [
            "Exonerarlos de la evaluación y asignarles la nota máxima por compasión.",
            "Obligarlos a escribir a mano el mismo examen estándar de dos horas con pluma estilográfica bajo la premisa de 'igualdad para todos'.",
            "Ofrecer múltiples medios de acción y expresión (DUA): permitirles sustentar mediante un pódcast grabado, una presentación oral con software accesible o un mapa conceptual interactivo.",
            "Enviarlos a un aula aislada y prohibirles participar en las actividades con el resto de sus compañeros."
        ],
        correctAnswer: 2,
        explanationCorrect: "El principio III del DUA (Proporcionar múltiples formas de acción y expresión) establece que el medio de evaluación no debe ser una barrera para evidenciar la competencia cognitiva: si el objetivo es comprender los ecosistemas, la expresión oral, multimedia o asistida por tecnología valida plenamente el logro sin discriminar por la vía motriz o gráfica.",
        explanationIncorrect: "La opción A cae en el asistencialismo complaciente y niega el derecho a aprender y ser evaluado. La opción B confunde igualdad con equidad, imponiendo barreras discapacitantes. La opción D segrega a los estudiantes, vulnerando los principios de la educación inclusiva.",
        recommendation: "Revisar las Pautas DUA del CAST (Center for Applied Special Technology) aplicadas a la evaluación formativa."
    },
    {
        id: "ef-38",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Resolver situaciones complejas de evaluación colegiada en proyectos interdisciplinarios.",
        themeCategory: "Evaluación de proyectos interdisciplinarios",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "En un colegio técnico, los docentes de Matemáticas, Tecnología y Emprendimiento desarrollan un proyecto conjunto donde los estudiantes diseñan una miniempresa sustentable. Al momento de evaluar, cada docente quiere calificar por su cuenta con su propio examen tradicional aislado, fragmentando el proyecto. ¿Qué solución pedagógica e institucional resuelve este conflicto?",
        options: [
            "Cancelar el proyecto interdisciplinario y obligar a cada docente a dictar sus clases a puerta cerrada.",
            "Construir colaborativamente una matriz integrada de evaluación con una rúbrica interdisciplinaria holística-analítica, donde cada asignatura aporte indicadores específicos evaluados sobre el producto y la sustentación común.",
            "Dejar que únicamente el docente de matemáticas decida la nota de todos los alumnos.",
            "Asignar las calificaciones mediante un sorteo aleatorio para evitar discusiones entre los profesores."
        ],
        correctAnswer: 1,
        explanationCorrect: "La evaluación en proyectos interdisciplinarios exige alineación y consenso entre las áreas involucradas: el diseño de una matriz integrada permite valorar los aportes disciplinares específicos y la integración competencial del proyecto compartido, garantizando coherencia pedagógica.",
        explanationIncorrect: "La opción A destruye la innovación curricular. La opción C impone el sesgo de una sola disciplina sobre un proyecto integral. La opción D es una arbitrariedad negligente.",
        recommendation: "Fomentar el trabajo colegiado docente y el co-diseño de instrumentos interdisciplinarios mediante comunidades profesionales de aprendizaje."
    },
    {
        id: "ef-39",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Analizar e interpretar datos agregados de evaluación para la mejora curricular institucional.",
        themeCategory: "Analítica de datos y mejora continua",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Al analizar los reportes semestrales de evaluación formativa de una facultad de ingeniería, el comité curricular identifica que en tres carreras distintas el 65% de los estudiantes fracasa consistentemente en la dimensión 'Modelación matemática de problemas abiertos', a pesar de aprobar la teoría. ¿Qué decisión de mejora institucional debe liderar el comité?",
        options: [
            "Eliminar los problemas abiertos de todos los exámenes y evaluar únicamente ejercicios mecánicos de cálculo algorítmico repetitivo.",
            "Revisar el currículo para articular talleres de modelación aplicada desde los primeros semestres y capacitar al cuerpo docente en estrategias de andamiaje y evaluación de resolución de problemas complejos.",
            "Emitir un comunicado culpando a la educación secundaria por el bajo nivel cognitivo de los estudiantes sin tomar acciones internas.",
            "Cerrar la carrera de ingeniería y abrir únicamente carreras que no requieran matemáticas."
        ],
        correctAnswer: 1,
        explanationCorrect: "La evaluación formativa a nivel macro (institucional) sirve para detectar brechas curriculares sistémicas: la respuesta profesional consiste en transformar las prácticas pedagógicas, articular la trayectoria formativa e intervenir con desarrollo docente para fortalecer la competencia deficitaria.",
        explanationIncorrect: "La opción A reduce la calidad y rigor del perfil de egreso para ocultar el síntoma. La opción C es una postura evasiva no constructiva. La opción D es un absurdo extremo.",
        recommendation: "Implementar ciclos de mejora continua curricular basados en analítica del aprendizaje (Closing the Loop in Assessment)."
    },
    {
        id: "ef-40",
        testId: "formativa",
        dimensionId: "aplicada",
        dimensionName: "Evaluación Aplicada",
        competency: "Integrar la evaluación formativa como motor de una cultura de aprendizaje organizacional y escolar.",
        themeCategory: "Cultura evaluativa transformadora",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Una institución educativa o corporativa desea transformar su cultura evaluativa, históricamente punitiva, temerosa y basada en la sospecha, hacia un ecosistema de evaluación formativa para el aprendizaje y la innovación. ¿Cuál de las siguientes acciones estratégicas constituye el catalizador más efectivo para iniciar este cambio?",
        options: [
            "Instalar más cámaras de seguridad en las aulas e imponer sanciones más severas a quienes cometan equivocaciones.",
            "Institucionalizar el valor pedagógico del error como fuente de aprendizaje, capacitar a facilitadores en retroalimentación descriptiva oportuna e involucrar a los participantes en la co-construcción de criterios y autoevaluación reflexiva.",
            "Eliminar todas las evaluaciones y prohibir cualquier tipo de retroalimentación cualitativa o cuantitativa.",
            "Reemplazar a los educadores y facilitadores por robots automatizados sin mediación humana."
        ],
        correctAnswer: 1,
        explanationCorrect: "Transformar la cultura evaluativa (Carol Dweck - mentalidad de crecimiento; Lorna Earl - evaluación como aprendizaje) requiere desmitificar el error, empoderar a los estudiantes mediante la transparencia de criterios e instalar prácticas dialógicas de retroalimentación y metacognición continua.",
        explanationIncorrect: "La opción A profundiza el clima de miedo y bloquea la creatividad. La opción C cae en el relativismo estéril sin información para la mejora. La opción D desconoce la naturaleza socio-emocional y dialógica del acto educativo.",
        recommendation: "Consultar la obra 'Assessment as Learning: Using Classroom Assessment to Maximize Student Learning' de Lorna Earl."
    }
];
