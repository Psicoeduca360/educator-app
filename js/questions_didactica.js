/**
 * PSICOEDUCA ACADEMY - Banco de Preguntas
 * Instrumento 4: Didáctica Práctica (40 preguntas completas)
 * Dimensiones:
 * 1. Planeación Didáctica (preguntas 1 a 10)
 * 2. Estrategias Metodológicas (preguntas 11 a 20)
 * 3. Facilitación y Gestión de Grupos (preguntas 21 a 30)
 * 4. Diseño y Resolución de Situaciones (preguntas 31 a 40)
 * Distribución: 12 Básicas, 18 Intermedias, 10 Avanzadas | 10 Conceptuales, 10 Análisis, 10 Aplicación, 10 Problema
 */

window.QUESTIONS_DIDACTICA = [
    // =========================================================================
    // DIMENSIÓN 1: PLANEACIÓN DIDÁCTICA (Preguntas 1 a 10)
    // =========================================================================
    {
        id: "dp-01",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Identificar los momentos esenciales de una secuencia didáctica eficaz.",
        themeCategory: "Momentos de la secuencia didáctica",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuáles son los tres momentos estructurales indispensables que componen una secuencia didáctica según los marcos pedagógicos consolidados (Díaz-Barriga, Tobón)?",
        options: [
            "1. Inicio o Apertura (activación de saberes previos y motivación) -> 2. Desarrollo (procesamiento activo, interacción y aplicación) -> 3. Cierre (síntesis, metacognición y evaluación formativa).",
            "1. Entrada al salón -> 2. Cobro de colegiatura -> 3. Salida al patio de recreo.",
            "1. Lectura en voz alta del docente -> 2. Silencio de los alumnos -> 3. Castigo a los impuntuales.",
            "1. Copia del pizarrón -> 2. Dictado de memoria -> 3. Examen sin explicaciones."
        ],
        correctAnswer: 0,
        explanationCorrect: "Una secuencia didáctica sólida articula Inicio (enganchar, activar conocimientos previos y transparentar objetivos), Desarrollo (andamiaje, resolución de retos, interacción y práctica guiada) y Cierre (conclusiones clave, transferencia, metacognición y verificación formativa).",
        explanationIncorrect: "Las opciones B, C y D reflejan prácticas administrativas o modelos obsoletos y autoritarios sin fundamento didáctico contemporáneo.",
        recommendation: "Consultar 'Secuencias de aprendizaje: ¿Un nuevo enfoque para el diseño curricular?' de Ángel Díaz-Barriga."
    },
    {
        id: "dp-02",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Diferenciar un objetivo de aprendizaje de un Resultado de Aprendizaje Esperado (RAE).",
        themeCategory: "Resultados de Aprendizaje Esperados (RAE)",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En el diseño curricular contemporáneo por competencias, ¿qué diferencia sustancial existe entre la formulación tradicional de un 'objetivo de enseñanza' y un 'Resultado de Aprendizaje Esperado' (RAE)?",
        options: [
            "El objetivo suele centrarse en la intención o actividad del docente ('enseñar las leyes'), mientras que el RAE describe explícitamente lo que el estudiante será capaz de demostrar, hacer o resolver al finalizar el proceso, con criterios observables.",
            "El objetivo es para universidades públicas y el RAE es únicamente para empresas petroleras.",
            "Son exactamente lo mismo y solo cambia el tipo de letra con el que se imprimen en el documento.",
            "El RAE prohíbe que el estudiante aprenda nada práctico."
        ],
        correctAnswer: 0,
        explanationCorrect: "El giro hacia los Resultados de Aprendizaje (Learning Outcomes) centra el foco en el estudiante: especifica un desempeño verificable (verbo observable + objeto + contexto + criterio de calidad), superando las declaraciones de intenciones abstractas del docente.",
        explanationIncorrect: "Las opciones B y D carecen de sentido y fundamento pedagógico. La opción C desconoce la evolución internacional del diseño curricular basado en competencias (Tuning Project, Espacio Europeo de Educación Superior).",
        recommendation: "Redactar RAEs utilizando la estructura: Verbo activo (Bloom) + Objeto de conocimiento + Contexto de aplicación + Criterio o estándar de calidad."
    },
    {
        id: "dp-03",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Comprender el principio de 'Alineación Constructiva' de John Biggs.",
        themeCategory: "Alineación constructiva de John Biggs",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es el postulado central del modelo de 'Alineación Constructiva' (Constructive Alignment) propuesto por John Biggs?",
        options: [
            "Que los tres componentes del sistema formativo (Resultados de Aprendizaje, Actividades de Enseñanza/Aprendizaje y Tareas de Evaluación) deben estar en total coherencia de nivel cognitivo y competencial.",
            "Que los estudiantes deben sentarse en línea recta militar frente a la ventana.",
            "Que las materias deben construirse únicamente con ladrillos y cemento en las paredes.",
            "Que la evaluación no debe guardar ninguna relación con lo que se enseñó en clase."
        ],
        correctAnswer: 0,
        explanationCorrect: "Biggs plantea que el sistema funciona cuando hay alineación: si el resultado esperado es 'analizar y diseñar', las actividades en el aula deben poner al estudiante a analizar y diseñar (no solo a escuchar pasivamente), y la evaluación debe juzgar su capacidad de análisis y diseño (no su memoria).",
        explanationIncorrect: "La opción B toma 'alineación' en sentido espacial físico. La opción C es una confusión literal con la palabra 'constructiva'. La opción D propone la incoherencia didáctica más grave.",
        recommendation: "Estudiar 'Teaching for Quality Learning at University' de John Biggs y Catherine Tang."
    },
    {
        id: "dp-04",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Reconocer la función didáctica del momento de apertura o inicio de una sesión.",
        themeCategory: "Estrategias de apertura y enganche didáctico",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "¿Por qué comenzar una clase o taller presentando un enigma, una pregunta provocadora o un caso dilemático es didácticamente superior a comenzar leyendo el índice del temario?",
        options: [
            "Porque activa el sistema reticular ascendente, genera curiosidad epistemológica, activa conocimientos previos y genera una necesidad cognitiva de saber.",
            "Porque permite al facilitador perder tiempo para no dictar la clase completa.",
            "Porque distrae a los estudiantes para que no noten la falta de preparación del docente.",
            "Porque es un requisito impuesto por los canales de televisión locales."
        ],
        correctAnswer: 0,
        explanationCorrect: "La neuroeducación y la didáctica demuestran que la atención no se demanda por decreto; se captura: un detonante cognitivo desafiante activa el circuito de la dopamina, conecta con los modelos mentales previos y prepara el cerebro para el aprendizaje significativo.",
        explanationIncorrect: "Las opciones B y C atribuyen intenciones de desidia docente. La opción D es un absurdo sin relación didáctica.",
        recommendation: "Utilizar 'ganchos didácticos' (hooks) al inicio de cada sesión: analogías discrepantes, datos impactantes, historias o retos breves."
    },
    {
        id: "dp-05",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Analizar la formulación técnica de verbos de acción según la taxonomía de Bloom.",
        themeCategory: "Taxonomía de Bloom aplicada a la planeación",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Un docente redacta el siguiente objetivo en su planeación: 'El estudiante sabrá y apreciará la importancia de la contabilidad'. ¿Por qué esta formulación es técnicamente deficiente desde el punto de vista del diseño instruccional?",
        options: [
            "Porque los verbos 'saber' y 'apreciar' son ambiguos, internos e inobservables; no especifican qué desempeño observable, evidencia o nivel de dominio evidenciará el estudiante.",
            "Porque la palabra contabilidad está prohibida en las escuelas modernas.",
            "Porque los objetivos deben redactarse obligatoriamente en verso rimado de cuatro estrofas.",
            "Porque los docentes no tienen permitido planificar sus asignaturas con anticipación."
        ],
        correctAnswer: 0,
        explanationCorrect: "Verbos como 'saber', 'conocer' o 'apreciar' describen estados mentales internos no verificables directamente; deben sustituirse por verbos de acción precisos (ej: 'clasificar', 'calcular', 'contrastar', 'evaluar', 'diseñar') que precisen la evidencia demostrable.",
        explanationIncorrect: "Las opciones B, C y D carecen de fundamento técnico y contradicen las normas del diseño instruccional basado en competencias.",
        recommendation: "Reemplazar verbos vagos ('conocer', 'entender') por verbos taxonómicos observables y medibles en todas las guías de aprendizaje."
    },
    {
        id: "dp-06",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Analizar el diseño invertido (Backward Design) de Wiggins y McTighe.",
        themeCategory: "Diseño curricular hacia atrás (Backward Design)",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "El modelo 'Understanding by Design' (UbD / Diseño Invertido) de Grant Wiggins y Jay McTighe propone planificar en tres etapas en sentido inverso al tradicional. ¿Cuál es ese orden secuencial?",
        options: [
            "Etapa 1: Identificar los resultados deseados (grandes ideas) -> Etapa 2: Determinar las evidencias aceptables de evaluación -> Etapa 3: Planificar las experiencias de aprendizaje e instrucción.",
            "Etapa 1: Comprar libros -> Etapa 2: Tomar el examen final -> Etapa 3: Presentarse el primer día de clase.",
            "Etapa 1: Inventar tareas divertidas -> Etapa 2: Calificar -> Etapa 3: Pensar para qué servían.",
            "Etapa 1: Dictar clase -> Etapa 2: Quejarse de los alumnos -> Etapa 3: Reprobar a todos."
        ],
        correctAnswer: 0,
        explanationCorrect: "El diseño invertido combate el error clásico de planificar pensando primero en las actividades ('¿qué manualidades o lecturas haremos?'): exige definir primero el destino (comprensión profunda duradera), luego el criterio de prueba (¿qué evidencias demostrarán esa comprensión?) y finalmente las actividades para llegar allí.",
        explanationIncorrect: "La opción B presenta una secuencia temporal absurda. La opción C describe la trampa de la 'actividad por la actividad' (activity-focused teaching). La opción D describe malas prácticas docentes sin rigor.",
        recommendation: "Consultar 'Understanding by Design' de Grant Wiggins y Jay McTighe para implementar las tres etapas del diseño hacia atrás."
    },
    {
        id: "dp-07",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Analizar la gestión de recursos y apoyos didácticos multimodales.",
        themeCategory: "Selección de recursos didácticos",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Al planear una sesión didáctica, ¿bajo qué criterio pedagógico debe seleccionarse un recurso tecnológico (video, simulador digital o software)?",
        options: [
            "Bajo el criterio de que sea el más ruidoso y llamativo para impresionar a los directivos de la escuela.",
            "Bajo el criterio de alineación y valor agregado pedagógico: que potencie la comprensión del contenido, facilite la interacción activa y reduzca barreras de aprendizaje.",
            "Bajo la condición de que sustituya por completo al facilitador para que este no tenga que trabajar.",
            "Únicamente si es una tecnología extremadamente costosa que ninguna otra institución pueda adquirir."
        ],
        correctAnswer: 1,
        explanationCorrect: "La tecnología en didáctica no es un fin en sí misma, sino un medio mediador: un recurso es válido si aporta un andamiaje cognitivo genuino (visualización de conceptos abstractos, simulación interactiva de fenómenos complejos o accesibilidad universal).",
        explanationIncorrect: "La opción A privilegia el efectismo cosmético superficial. La opción C deshumaniza el acto pedagógico. La opción D confunde costo económico con valor educativo.",
        recommendation: "Evaluar los recursos didácticos mediante el modelo SAMR (Sustituir, Aumentar, Modificar, Redefinir) de Rubén Puentedura."
    },
    {
        id: "dp-08",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Aplicar la técnica del 'Boleto de Salida' (Exit Ticket) en el momento de cierre.",
        themeCategory: "Estrategias de cierre y consolidación",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "En una sesión de capacitación docente, el facilitador destina los últimos 7 minutos a aplicar un 'Boleto de Salida' (Exit Ticket) pidiendo: '1. Escribe la idea principal que aprendiste hoy; 2. Escribe una duda que todavía tengas'. ¿Qué utilidad formativa directa brinda esta técnica?",
        options: [
            "Permite verificar rápidamente la comprensión del 100% de los participantes antes de que abandonen el aula, identificando vacíos para ajustar la planeación de la sesión siguiente.",
            "Sirve como boleta de castigo para prohibirle el almuerzo a quienes tengan dudas conceptuales.",
            "Es un trámite burocrático que el facilitador arroja a la basura sin leer.",
            "Es un concurso de caligrafía estética sin relación con el contenido aprendido."
        ],
        correctAnswer: 0,
        explanationCorrect: "El boleto de salida es una de las herramientas de evaluación formativa más ágiles y poderosas: obliga a todos los estudiantes a sintetizar su aprendizaje y ofrece al facilitador una 'radiografía cognitiva' inmediata del grupo para planear la siguiente clase con precisión quirúrgica.",
        explanationIncorrect: "La opción B es una práctica represiva y antipedagógica. Las opciones C y D descalifican la función formativa de la retroalimentación inmediata.",
        recommendation: "Implementar boletos de salida tanto físicos (tarjetas 3x5) como digitales (Mentimeter, Google Forms, Slido) en las clases diarias."
    },
    {
        id: "dp-09",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Resolver problemas derivados de la sobrecarga de contenidos en el plan de clase.",
        themeCategory: "Sobrecarga de contenidos y currículo enciclopédico",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "Un profesor novato planifica para una sesión de 90 minutos: 'Exponer 15 teorías del desarrollo, proyectar 3 documentales de 20 minutos cada uno, hacer un debate en grupos y aplicar un examen de 50 preguntas'. A los 45 minutos se da cuenta de que solo va en la teoría 2 y el grupo está abrumado. ¿Cuál es el error de diseño y la corrección didáctica?",
        options: [
            "El error es hablar despacio; debe acelerar el ritmo y hablar a triple velocidad sin permitir ninguna pregunta de los estudiantes.",
            "El error es el enciclopedismo desmedido y la falta de jerarquización cognitiva; debe seleccionar 2 o 3 ideas esenciales profundas, articularlas con una actividad interactiva y eliminar el exceso superficial.",
            "Debe culpar a los estudiantes por no tener un cerebro superdotado.",
            "Debe extender la clase a 24 horas continuas sin interrupción."
        ],
        correctAnswer: 1,
        explanationCorrect: "Menos es más en didáctica ('Less is more'): pretender cubrir volúmenes masivos de datos genera saturación de la memoria de trabajo y aprendizaje superficial; el diseño riguroso prioriza conceptos nodales estructurantes y tiempo para el procesamiento activo.",
        explanationIncorrect: "La opción A agrava el problema provocando desconexión total. La opción C elude la responsabilidad de la planeación docente. La opción D es inviable biológica y normativamente.",
        recommendation: "Utilizar el filtro de tres niveles de Wiggins y McTighe: 1. Información que vale la pena conocer -> 2. Conocimientos y destrezas importantes -> 3. Grandes comprensiones perdurables (Big Ideas)."
    },
    {
        id: "dp-10",
        testId: "didactica",
        dimensionId: "planeacion",
        dimensionName: "Planeación Didáctica",
        competency: "Diseñar una planeación curricular flexible que incorpore la incertidumbre y la contingencia.",
        themeCategory: "Planeación didáctica como hipótesis de trabajo",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Al planear una unidad didáctica para un programa de formación técnica, la coordinadora académica exige: 'El plan debe ser un guión militar pétreo e inmutable; si planificó que a las 10:14 am todos deben estar respondiendo la página 4, nadie puede desviarse ni un segundo aunque ocurra una catástrofe'. Desde la didáctica crítica contemporánea, ¿cuál es la refutación profesional a este enfoque tecnocrático?",
        options: [
            "La planeación didáctica no es un corsé dogmático ni una camisa de fuerza burocrática, sino una hipótesis de trabajo flexible que orienta la acción pero debe adaptarse dinámicamente a los emergentes, ritmos e intereses reales del aula.",
            "La coordinadora tiene toda la razón: la educación es idéntica a la programación de un semáforo de tránsito vehicular.",
            "No se debe planificar nada jamás y se debe llegar al aula a ver qué se le ocurre al profesor cada día.",
            "Los profesores deben ser multados económicamente si respiran fuera del tiempo planeado."
        ],
        correctAnswer: 0,
        explanationCorrect: "La didáctica contemporánea (Stenhouse, Gimeno Sacristán) concibe la planeación como una hipótesis reflexiva de intervención: planificar con rigor es indispensable para tener claridad de metas, pero la maestría docente radica en la flexibilidad interactiva para responder a los imprevistos y necesidades del grupo vivo.",
        explanationIncorrect: "La opción B deshumaniza y robotiza el acto pedagógico. La opción C cae en el vicio opuesto de la improvisación negligente. La opción D es un absurdo autoritario.",
        recommendation: "Consultar 'Investigación y desarrollo del currículum' de Lawrence Stenhouse para entender el currículo como proyecto y no como receta cerrada."
    },

    // =========================================================================
    // DIMENSIÓN 2: ESTRATEGIAS METODOLÓGICAS (Preguntas 11 a 20)
    // =========================================================================
    {
        id: "dp-11",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Identificar los principios y fases del Aprendizaje Basado en Problemas (ABP).",
        themeCategory: "Aprendizaje Basado en Problemas (ABP)",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En la metodología de Aprendizaje Basado en Problemas (ABP / PBL), ¿cuál es el punto de partida que detona todo el proceso de aprendizaje?",
        options: [
            "La presentación de un problema complejo, real o verosímil y mal estructurado, antes de haber impartido la teoría, para que los estudiantes identifiquen qué necesitan aprender para resolverlo.",
            "Una clase magistral de 50 horas donde el profesor explica todas las respuestas del libro.",
            "Un examen final sorpresa sin haber asistido a ninguna clase previa.",
            "La asignación de una calificación numérica aleatoria al iniciar el semestre."
        ],
        correctAnswer: 0,
        explanationCorrect: "A diferencia del método tradicional donde primero se enseña la teoría y luego se aplica un ejercicio, en el ABP el problema va primero: actúa como desafío contextual que motiva la indagación autodirigida, la búsqueda de información y el trabajo colaborativo para construir la solución.",
        explanationIncorrect: "La opción B es el modelo transmisionista tradicional. Las opciones C y D distorsionan las prácticas evaluativas sin relación con el ABP.",
        recommendation: "Dominar los 7 pasos clásicos del ABP de la Universidad de Maastricht (clarificar términos, definir el problema, lluvia de ideas, categorizar, formular objetivos de aprendizaje, autoestudio y puesta en común)."
    },
    {
        id: "dp-12",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Diferenciar el Aprendizaje Basado en Proyectos (ABPr) del Aprendizaje Basado en Problemas (ABP).",
        themeCategory: "Aprendizaje Basado en Proyectos (ABPr)",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es el rasgo definitorio central que distingue al Aprendizaje Basado en Proyectos (ABPr) del Aprendizaje Basado en Problemas (ABP)?",
        options: [
            "El ABPr culmina necesariamente en la creación colaborativa de un producto tangible, servicio auténtico o solución pública (prototipo, documental, campaña, artefacto) que se presenta ante una audiencia real.",
            "El ABPr se realiza únicamente de manera individual y a oscuras.",
            "En el ABPr no se permite usar internet ni consultar libros de texto.",
            "El ABP dura cuatro años y el ABPr dura tres minutos."
        ],
        correctAnswer: 0,
        explanationCorrect: "Mientras el ABP se focaliza primordialmente en la indagación y diagnóstico de un problema formulando propuestas conceptuales, el ABPr (según el marco PBLWorks / Buck Institute for Education) exige la planificación, diseño y desarrollo de un artefacto o producto público compartido con la comunidad.",
        explanationIncorrect: "La opción B contradice la naturaleza colaborativa del ABPr. Las opciones C y D carecen de sentido metodológico y temporal.",
        recommendation: "Consultar los 'Gold Standard PBL' del Buck Institute for Education (PBLWorks) para diseñar proyectos de alto impacto."
    },
    {
        id: "dp-13",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Comprender los fundamentos del Aula Invertida (Flipped Classroom).",
        themeCategory: "Aula Invertida (Flipped Classroom)",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es la inversión pedagógica medular que propone el modelo de Aula Invertida o Flipped Classroom (Bergmann y Sams)?",
        options: [
            "Trasladar los procesos cognitivos de orden inferior (conocer, recordar, acceder a la información) fuera del aula mediante recursos multimedia autónomos, para dedicar el tiempo presencial de clase a procesos cognitivos de orden superior (aplicar, analizar, debatir y crear con el docente).",
            "Poner a los estudiantes de cabeza con los pies apoyados en el techo del salón.",
            "Grabar al docente durmiendo y proyectar el video a los alumnos durante 6 horas.",
            "Prohibir que los estudiantes asistan a clase presencial y cancelar las universidades."
        ],
        correctAnswer: 0,
        explanationCorrect: "El Aula Invertida invierte la lógica del aula tradicional: en lugar de usar la presencia del profesor experto para escuchar una cátedra expositiva pasiva y enviar los ejercicios difíciles a casa sin ayuda, el contenido se revisa antes y el aula se convierte en taller dinámico de aplicación andamiada.",
        explanationIncorrect: "La opción B es una interpretación literal jocosa de la palabra 'invertida'. Las opciones C y D caricaturizan la educación digital sin entender el modelo pedagógico.",
        recommendation: "Revisar los cuatro pilares del F-L-I-P: Flexible environment, Learning culture, Intentional content, Professional educator."
    },
    {
        id: "dp-14",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Analizar el método de Instrucción por Pares (Peer Instruction) de Eric Mazur.",
        themeCategory: "Instrucción por Pares de Eric Mazur",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "El profesor de física de Harvard, Eric Mazur, desarrolló la 'Instrucción por Pares' (Peer Instruction) al notar que sus alumnos memorizaban fórmulas pero no comprendían los conceptos. ¿Cuál es la secuencia de esta estrategia didáctica?",
        options: [
            "1. Pregunta conceptual breve (ConcepTest) -> 2. Votación individual inicial -> 3. Discusión entre pares en parejas argumentando sus respuestas -> 4. Segunda votación -> 5. Explicación y cierre del docente.",
            "1. Examen final -> 2. Gritos en el salón -> 3. Reprobación masiva -> 4. Salida.",
            "1. Dictado de definiciones -> 2. Silencio absoluto -> 3. Copia en el cuaderno.",
            "1. Sorteo de lotería -> 2. Aplausos -> 3. Asignación de notas al azar."
        ],
        correctAnswer: 0,
        explanationCorrect: "Peer Instruction utiliza preguntas conceptuales desafiantes: cuando los estudiantes defienden y explican su razonamiento a un compañero que pensó distinto, se produce una clarificación conceptual entre iguales extraordinariamente efectiva, antes de la mediación final del docente.",
        explanationIncorrect: "Las opciones B, C y D representan dinámicas caóticas, métodos tradicionales pasivos o arbitrariedades sin relación con la técnica de Mazur.",
        recommendation: "Estudiar 'Peer Instruction: A User's Manual' de Eric Mazur e implementarlo con herramientas como clickers o encuestas móviles en tiempo real."
    },
    {
        id: "dp-15",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Analizar los elementos del diseño de Gamificación Educativa efectiva.",
        themeCategory: "Gamificación educativa aplicada",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "¿Por qué limitar la gamificación educativa a la simple adición de puntos, medallas y tablas de clasificación (PBL: Points, Badges, Leaderboards) suele fracasar a mediano plazo?",
        options: [
            "Porque la gamificación superficial basada solo en recompensas extrínsecas genera adicción efímera pero extingue la motivación intrínseca cuando se acaba el premio; la gamificación profunda requiere narrativa inmersiva, autonomía, retos significativos y retroalimentación formativa.",
            "Porque los juegos están prohibidos en todas las instituciones del planeta.",
            "Porque los puntos electrónicos desgastan físicamente la vista de los estudiantes.",
            "Porque las tablas de clasificación provocan automáticamente la quiebra financiera del centro educativo."
        ],
        correctAnswer: 0,
        explanationCorrect: "La investigación en gamificación (Dichev, Deterding) advierte contra la 'puntificación' (pointification): otorgar medallas vacías sin un diseño lúdico que conecte con la narrativa, el dominio de retos y la autonomía del sujeto solo estimula conductas especulativas superficiales de corto plazo.",
        explanationIncorrect: "La opción B es una falsedad regulatoria. Las opciones C y D son afirmaciones absurdas sin respaldo científico ni económico.",
        recommendation: "Diseñar experiencias gamificadas centradas en el jugador (Player-Centered Design) balanceando retos, progreso visible y narrativa épica."
    },
    {
        id: "dp-16",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Analizar el uso de Simulaciones Clínicas y Laborales de alta fidelidad.",
        themeCategory: "Simulación en la educación para la salud y la industria",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "En carreras como Medicina, Aviación o Ingeniería Nuclear, el aprendizaje mediante Simulación es de uso obligatorio. ¿Cuál es el mayor beneficio pedagógico y ético que aporta la simulación estructurada?",
        options: [
            "Permite cometer errores, experimentar sus consecuencias y aprender de ellos en un entorno controlado y seguro sin poner en riesgo vidas humanas reales ni infraestructura crítica.",
            "Ahorra dinero al prescindir totalmente de los profesores y del hospital.",
            "Garantiza que ningún estudiante tenga que estudiar anatomía ni fisiología.",
            "Es un videojuego puramente recreativo para entretener a los alumnos en horas libres."
        ],
        correctAnswer: 0,
        explanationCorrect: "La simulación (Gaba, McGaghie) traslada el principio bioético 'primero no dañar' (primum non nocere) a la educación: el aprendiz comete fallas, analiza el error en el debriefing, ajusta su algoritmo de toma de decisiones y adquiere pericia antes de intervenir en escenarios vivos reales.",
        explanationIncorrect: "La opción B es falsa, la simulación exige facilitadores y tutores altamente calificados. Las opciones C y D despojan a la simulación de su rigor científico y formativo.",
        recommendation: "Explorar los estándares de mejores prácticas en simulación clínica de la INACSL (International Nursing Association for Clinical Simulation and Learning)."
    },
    {
        id: "dp-17",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Aplicar la estructura del Design Thinking como metodología didáctica de innovación.",
        themeCategory: "Design Thinking en educación (Design for Learning)",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Una docente de bachillerato decide enseñar 'Educación Ciudadana' aplicando el marco de Design Thinking de la Escuela de Stanford (d.school). ¿Cuál es la secuencia correcta de las cinco fases que guiarán a los estudiantes para resolver una problemática de su barrio?",
        options: [
            "1. Empatizar (investigar con vecinos) -> 2. Definir (el problema central) -> 3. Idear (soluciones creativas) -> 4. Prototipar (modelar la propuesta) -> 5. Evaluar/Testear (probar con la comunidad).",
            "1. Juzgar -> 2. Criticar -> 3. Resignarse -> 4. Pelear -> 5. Rendirse.",
            "1. Escribir un poema -> 2. Dormir -> 3. Pintar un cuadro -> 4. Salir a caminar -> 5. Almorzar.",
            "1. Cobrar entradas -> 2. Hacer publicidad -> 3. Vender comida -> 4. Pedir donaciones -> 5. Cerrar el proyecto."
        ],
        correctAnswer: 0,
        explanationCorrect: "El proceso de Design Thinking estructura el pensamiento de diseño centrado en el ser humano en 5 fases iterativas: Empatía profunda con el usuario, Definición focalizada del desafío raíz, Ideación divergente, Prototipado rápido de bajo costo y Testeo iterativo con usuarios reales.",
        explanationIncorrect: "Las opciones B, C y D presentan dinámicas emocionales negativas, actividades no relacionadas o procesos mercantiles sin ningún rigor metodológico.",
        recommendation: "Consultar la guía 'Design Thinking for Educators' de IDEO para implementar proyectos de innovación social en el aula."
    },
    {
        id: "dp-18",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Aplicar la técnica cooperativa del 'Rompecabezas' (Jigsaw de Elliot Aronson).",
        themeCategory: "Técnica del Rompecabezas (Jigsaw)",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "Al enseñar un tema extenso y complejo con cuatro textos especializados diferentes, el profesor aplica la técnica del 'Rompecabezas' (Jigsaw de Aronson). ¿Cuál es el procedimiento operativo exacto de esta estrategia cooperativa?",
        options: [
            "Se conforman equipos base; cada miembro recibe un subtema distinto; se reúnen en 'grupos de expertos' con quienes tienen el mismo subtema para profundizarlo; y luego regresan a sus equipos base para enseñárselo mutuamente a sus compañeros.",
            "Se compran rompecabezas de cartón de 5000 piezas y los estudiantes arman la figura en completo silencio sin hablar.",
            "El profesor corta el libro de texto en pedazos con una tijera y los arroja por la ventana.",
            "Un solo estudiante lee los cuatro temas mientras los otros tres duermen en sus pupitres."
        ],
        correctAnswer: 0,
        explanationCorrect: "El Jigsaw de Elliot Aronson garantiza la máxima interdependencia positiva: ningún miembro del equipo base puede comprender el panorama completo a menos que cada uno aprenda su pieza en el grupo de expertos y regrese con la responsabilidad de enseñársela a sus pares.",
        explanationIncorrect: "La opción B confunde la técnica didáctica con el juguete físico infantil. Las opciones C y D describen conductas vandálicas o pasivas contrarias al aprendizaje activo.",
        recommendation: "Aplicar el Jigsaw en talleres de lectura crítica y análisis de casos multidisciplinarios extensos."
    },
    {
        id: "dp-19",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Resolver problemas derivados de la implementación deficiente de metodologías activas.",
        themeCategory: "Falsas aplicaciones de metodologías activas",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En un colegio, los profesores afirman aplicar 'Aprendizaje Basado en Proyectos' (ABPr), pero en la práctica asignan maquetas escolares para que los padres de familia las hagan en casa durante el fin de semana, premiando la maqueta más costosa comprada en la papelería. ¿Qué patología didáctica ocurre y cómo se subsana profesionalmente?",
        options: [
            "Se confunde el ABPr auténtico con 'manualidades domiciliarias'; se debe garantizar que el proyecto se desarrolle en el aula dentro del horario escolar, con andamiaje del docente, indagación auténtica de los propios estudiantes y rúbricas de desempeño público.",
            "Los profesores deben exigir que las maquetas se hagan de oro puro para elevar el estatus de la escuela.",
            "Se debe expulsar a los padres de familia del país por ayudar a sus hijos.",
            "La solución es eliminar los proyectos y volver a dictar 8 horas diarias de clase magistral expositiva."
        ],
        correctAnswer: 0,
        explanationCorrect: "Es la patología clásica del 'falso ABP': proyectos cosméticos realizados por adultos en casa que profundizan la desigualdad socioeconómica. El ABPr riguroso se gestiona en el aula, promueve la agencia del estudiante, evalúa el proceso cognitivo y responde a una pregunta guía genuina.",
        explanationIncorrect: "La opción B incrementa la segregación económica clasista. La opción C es un absurdo legal. La opción D retrocede hacia la pasividad tradicional en lugar de corregir la metodología activa.",
        recommendation: "Establecer como política institucional que el 100% de la producción de evidencias del ABPr se realice dentro del tiempo escolar supervisado."
    },
    {
        id: "dp-20",
        testId: "didactica",
        dimensionId: "estrategias",
        dimensionName: "Estrategias Metodológicas",
        competency: "Diseñar una arquitectura pedagógica híbrida y flexible (Blended Learning).",
        themeCategory: "Modelos de Blended Learning",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Una institución educativa debe diseñar un programa híbrido (Blended Learning) de alta calidad para estudiantes que combinan trabajo y estudio. Para evitar el error de simplemente 'transmitir clases presenciales aburridas por videollamada de Zoom', ¿qué modelo de rotación o combinación didáctica estratégica se debe diseñar?",
        options: [
            "Un modelo de Rotación por Estaciones o Clase Invertida enriquecida: diseño asincrónico interactivo con microlearning y simulaciones autónomas previas, articulado con encuentros sincrónicos presenciales/virtuales focalizados exclusivamente en talleres de resolución de casos, debate y co-creación guiada.",
            "Obligar a los estudiantes a tener la cámara encendida 12 horas seguidas mientras el docente lee diapositivas sin respirar.",
            "Eliminar cualquier interacción humana y enviarles un correo mensual con notas de reprobación.",
            "Hacer que los estudiantes asistan a clase presencial a las 3:00 de la madrugada."
        ],
        correctAnswer: 0,
        explanationCorrect: "El Blended Learning eficaz (Horn y Staker - Clayton Christensen Institute) no es una mera suma de tecnologías; es una orquestación didáctica: aprovecha lo asincrónico para el ritmo individualizado de acceso al contenido y reserva el tiempo sincrónico para la interacción social profunda y la aplicación guiada.",
        explanationIncorrect: "La opción A describe la 'pedagogía del zoom-zombie' que provoca fatiga atencional y deserción masiva. Las opciones C y D carecen de sentido formativo y humano.",
        recommendation: "Consultar 'Blended: Using Disruptive Innovation to Improve Schools' de Michael B. Horn y Heather Staker."
    },

    // =========================================================================
    // DIMENSIÓN 3: FACILITACIÓN Y GESTIÓN DE GRUPOS (Preguntas 21 a 30)
    // =========================================================================
    {
        id: "dp-21",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Identificar los componentes de la comunicación pedagógica asertiva.",
        themeCategory: "Comunicación pedagógica asertiva",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cómo se define la comunicación asertiva en la facilitación docente y qué impacto produce en el clima de aprendizaje?",
        options: [
            "La capacidad de expresar expectativas, límites y retroalimentación de manera clara, firme y honesta, pero con absoluto respeto por la dignidad del estudiante, construyendo un ambiente de seguridad psicológica y confianza mutua.",
            "El uso de gritos e intimidaciones continuas para someter a los participantes mediante el miedo.",
            "La sumisión pasiva donde el facilitador permite que el desorden destruya la sesión sin intervenir jamás.",
            "Hablar en código morse para que nadie en el aula comprenda lo que el docente dice."
        ],
        correctAnswer: 0,
        explanationCorrect: "La asertividad docente equidista de dos extremos destructivos: la agresividad autoritaria (que humilla y bloquea la cognición) y la pasividad permisiva (que desestructura el ambiente). Establece límites claros desde la empatía y la firmeza respetuosa.",
        explanationIncorrect: "La opción B describe el estilo agresivo punitivo. La opción C describe el estilo pasivo negligente. La opción D es un absurdo incomunicativo.",
        recommendation: "Practicar técnicas de comunicación asertiva en el aula: mensajes en primera persona ('Mensajes Yo'), escucha activa y validación empática."
    },
    {
        id: "dp-22",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Reconocer el valor del 'tiempo de espera' (Wait Time) tras formular una pregunta.",
        themeCategory: "Técnica del tiempo de espera de Mary Budd Rowe",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "Las investigaciones pioneras de Mary Budd Rowe demostraron que los docentes suelen esperar menos de un segundo después de hacer una pregunta antes de responderla ellos mismos o llamar a otro alumno. ¿Qué ocurre cuando el facilitador amplía deliberadamente ese tiempo de espera a 3 a 5 segundos (Wait Time)?",
        options: [
            "Aumenta exponencialmente la calidad, profundidad y longitud de las respuestas, se incrementa la participación voluntaria de los estudiantes más reflexivos y se eleva el nivel cognitivo de los debates.",
            "Todos los estudiantes se duermen instantáneamente en sus asientos.",
            "Se desata el pánico colectivo en la escuela.",
            "El docente olvida de inmediato la materia que estaba enseñando."
        ],
        correctAnswer: 0,
        explanationCorrect: "El tiempo de espera (Wait Time I y II de Rowe) es una de las palancas más simples y potentes de la didáctica: dar silencio intencionado permite a los cerebros procesar, estructurar argumentos y superar el filtro de la prisa memorística superficial.",
        explanationIncorrect: "Las opciones B, C y D exageran de forma ridícula los efectos del silencio pedagógico constructivo.",
        recommendation: "Incorporar rutinariamente la técnica 'Piensa en silencio (30 seg) -> Escribe tu respuesta -> Comparte con tu compañero' (Think-Pair-Share)."
    },
    {
        id: "dp-23",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Identificar estrategias para democratizar la participación equitativa en el aula.",
        themeCategory: "Participación equitativa y no discriminatoria",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En un grupo de 30 personas, siempre participan con rapidez los mismos 3 estudiantes extrovertidos, mientras los otros 27 permanecen en silencio pasivo. ¿Qué técnica didáctica de facilitación rompe este monopolio de forma constructiva?",
        options: [
            "Insultar públicamente a los tres estudiantes extrovertidos para que se callen para siempre.",
            "Utilizar técnicas estructuradas de participación como 'Piensa-Compara-Comparte' (Think-Pair-Share), palitos de respuesta aleatoria o votaciones interactivas digitales anónimas antes de abrir el micrófono.",
            "Dar por sentado que los 27 estudiantes silenciosos no tienen capacidad intelectual para opinar.",
            "Suspender la clase y dictar la sesión únicamente para los tres extrovertidos en una sala privada."
        ],
        correctAnswer: 1,
        explanationCorrect: "Democratizar la palabra exige estructuras didácticas: permitir pensar individualmente y discutir en parejas reduce la ansiedad social de hablar ante 30 personas, asegurando que el 100% elabore cognitivamente una respuesta antes de la plenaria.",
        explanationIncorrect: "La opción A castiga injustamente el entusiasmo de los participativos. La opción C comete un sesgo de atribución erróneo. La opción D segrega y excluye a la gran mayoría del grupo.",
        recommendation: "Utilizar herramientas de recolección de respuestas universales antes de la plenaria para garantizar la voz de todos los perfiles atencionales."
    },
    {
        id: "dp-24",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Analizar el manejo de participantes desafiantes o monopolizadores en la formación.",
        themeCategory: "Gestión de dinámicas de grupo complejas",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "Durante un taller, un participante interrumpe constantemente con monólogos extensos y descalifica las intervenciones de sus compañeros, rompiendo la dinámica grupal. ¿Cómo debe intervenir el facilitador con pericia andragógica?",
        options: [
            "Retomar el control con firmeza y amabilidad: agradecer su aporte, sintetizarlo en una frase, recordarle las normas de convivencia acordadas y redirigir explícitamente la palabra hacia una persona o subgrupo que aún no haya intervenido.",
            "Desafiarlo a una pelea física en el estacionamiento de la empresa.",
            "Cederle todo el control del taller y sentarse en el fondo del salón a llorar en silencio.",
            "Apagar las luces del salón para que todos queden a oscuras hasta que se calme."
        ],
        correctAnswer: 0,
        explanationCorrect: "El facilitador profesional no entra en luchas de poder ni se paraliza: utiliza el 'puenteo' (bridging): valida brevemente, parafrasea y reencauza el flujo hacia el grupo apoyándose en los acuerdos colectivos de participación construidos al inicio.",
        explanationIncorrect: "La opción B es una conducta violenta inaceptable. La opción C es una claudicación del rol de facilitación. La opción D es una evasión ridícula que no resuelve la disfunción grupal.",
        recommendation: "Establecer siempre un 'Contrato de Convivencia / Reglas de Juego' explícito co-construido con el grupo en los primeros 15 minutos del taller."
    },
    {
        id: "dp-25",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Analizar el uso de preguntas socráticas divergentes frente a preguntas convergentes cerradas.",
        themeCategory: "Preguntas orientadoras y divergencia cognitiva",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Un docente suele preguntar en clase: '¿Todos entendieron?' o '¿Verdad que la respuesta es 5?'. Desde la didáctica de la indagación, ¿por qué estas preguntas convergentes tienen un valor formativo casi nulo?",
        options: [
            "Porque son preguntas retóricas de respuesta única ('sí' o 'no') que inducen la sumisión automática y no obligan al estudiante a argumentar, contrastar evidencias ni hacer visible su pensamiento.",
            "Porque las preguntas en clase están prohibidas por la legislación pedagógica internacional.",
            "Porque la única respuesta válida a cualquier pregunta debe ser un número primo.",
            "Porque los estudiantes solo aprenden cuando el docente grita."
        ],
        correctAnswer: 0,
        explanationCorrect: "Preguntas como '¿entendieron?' generan una falsa ilusión de comprensión porque nadie quiere admitir dudas en público. Las preguntas pedagógicas de alto impacto son abiertas y divergentes: '¿Qué pasaría si...?', '¿Qué supuestos sostienen esta postura?', '¿Qué otra alternativa explicaría este resultado?'.",
        explanationIncorrect: "Las opciones B, C y D carecen de sentido y rigor conceptual en el marco de la didáctica socrática.",
        recommendation: "Sustituir '¿Alguna duda?' por preguntas diagnósticas concretas dirigidas al contenido: '¿Qué paso de este algoritmo les pareció el más contra-intuitivo y por qué?'."
    },
    {
        id: "dp-26",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Analizar la gestión estratégica del tiempo pedagógico.",
        themeCategory: "Manejo del tiempo y ritmo didáctico",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Al observar una sesión de clase, un supervisor pedagógico nota que el docente dedicó 75 minutos a la introducción y al pase de lista, dejando solo 10 minutos para la actividad central y 0 minutos para el cierre y la síntesis. ¿Qué consecuencia pedagógica produce esta descompensación temporal?",
        options: [
            "Provoca una sesión desbalanceada donde se suprime la fase de aplicación práctica y se elimina la síntesis metacognitiva, haciendo que los estudiantes se retiren con fragmentos dispersos sin consolidación conceptual.",
            "Garantiza el éxito pedagógico absoluto porque el pase de lista es la única actividad formativa que importa.",
            "Produce un aumento del 100% en la retención de conocimientos en la memoria a largo plazo.",
            "Permite a los estudiantes graduarse automáticamente como doctores en educación."
        ],
        correctAnswer: 0,
        explanationCorrect: "El tiempo pedagógico es el recurso más escaso: si el inicio se desborda y el cierre se omite, se vulnera la curva de consolidación mnémica (efecto de primacía y recencia); los cierres son esenciales para fijar anclas de aprendizaje y evaluar formativamente la comprensión.",
        explanationIncorrect: "Las opciones B, C y D son disparates que niegan los principios científicos de la gestión del tiempo y la psicología cognitiva.",
        recommendation: "Utilizar la regla del 20-60-20: 20% tiempo en enganche y activación -> 60% en práctica y reto guiado -> 20% en síntesis, metacognición y boleto de salida."
    },
    {
        id: "dp-27",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Aplicar la técnica de mediación pedagógica en situaciones de conflicto interpersonal en el aula.",
        themeCategory: "Mediación de conflictos en el aula",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Durante un debate académico sobre políticas de salud pública, dos equipos de estudiantes escalan la discusión hacia descalificaciones personales e insultos directos. ¿Cuál es el protocolo de mediación inmediata que debe aplicar el docente?",
        options: [
            "Detener de inmediato el debate, marcar un tiempo fuera sereno, recordar las normas de respeto y argumentación basadas en evidencias, pedir a cada equipo que reformule la postura del oponente con empatía antes de responder y retomar la discusión centrada en los datos, no en las personas.",
            "Alentar los insultos y apostar dinero a cuál de los dos grupos gana la pelea física.",
            "Salir corriendo del aula y encerrarse en la sala de profesores con llave.",
            "Reprobar a los 30 alumnos del grupo y cancelar la materia definitivamente."
        ],
        correctAnswer: 0,
        explanationCorrect: "La mediación pedagógica transforma el conflicto destructivo en oportunidad de aprendizaje cívico: interrumpe la escalada emocional, restablece el encuadre seguro (atacar los argumentos, nunca a las personas) y utiliza la técnica del espejo empático para restablecer el diálogo racional.",
        explanationIncorrect: "La opción B es una incitación a la violencia. La opción C es deserción de la responsabilidad profesional. La opción D es un castigo colectivo desproporcionado e injusto.",
        recommendation: "Entrenar a los estudiantes en 'Protocolos de Debate Académico Regulado' (formato Oxford / Karl Popper) para discutir ideas con pasión y a las personas con respeto."
    },
    {
        id: "dp-28",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Aplicar estrategias de facilitación multimodal para mantener la energía atencional del grupo.",
        themeCategory: "Dinámica atencional y curvas de energía en el aula",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "A la mitad de una jornada formativa vespertina de 4 horas, el facilitador nota que el grupo sufre el 'bajón postprandial' (somnolencia, fatiga visual y apatía tras el almuerzo). ¿Qué intervención didáctica y neuroeducativa reactiva la energía cognitiva del grupo?",
        options: [
            "Apagar las luces del salón y leer un texto monótono en voz baja durante dos horas seguidas.",
            "Introducir una 'Pausa Activa' o dinamizador breve de movimiento corporal, seguido de un cambio de modalidad didáctica (de escucha pasiva a trabajo colaborativo en estaciones o resolución interactiva de un reto en equipos de pie).",
            "Obligar a todos los participantes a correr diez kilómetros bajo el sol sin agua.",
            "Gritarles que son malos profesionales para despertar su indignación."
        ],
        correctAnswer: 1,
        explanationCorrect: "El cerebro no aprende si el cuerpo está en letargo metabólico: las pausas activas, el cambio de postura (aprender de pie), la oxigenación y la transición hacia dinámicas kinestésicas o colaborativas liberan noradrenalina y reactivan las redes atencionales del lóbulo frontal.",
        explanationIncorrect: "La opción A induce el sueño profundo. La opción C es un castigo físico peligroso. La opción D genera hostilidad y rechazo emocional.",
        recommendation: "Diseñar secuencias didácticas con cambios de estímulo (cada 15 a 20 minutos) e incorporar pausas activas cerebrales (Brain Breaks)."
    },
    {
        id: "dp-29",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Resolver problemas de dispersión y uso compulsivo de dispositivos móviles en el aula.",
        themeCategory: "Manejo pedagógico de distractores tecnológicos",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En una universidad, los estudiantes están constantemente chateando en redes sociales durante la clase teórica. El decano propone instalar inhibidores de señal celular de grado militar para bloquear los teléfonos. Como especialista en didáctica digital, ¿cuál es tu propuesta superadora?",
        options: [
            "Apoyar el bloqueo militar y además requisar los teléfonos en una caja fuerte con candado todos los días.",
            "Transformar la tecnología de distractor en herramienta pedagógica de aprendizaje activo: rediseñar las clases para que los teléfonos se utilicen deliberadamente para responder sondeos en tiempo real, buscar fuentes, resolver microretos y construir pizarras colaborativas.",
            "Permitir que los estudiantes jueguen en sus teléfonos sin que el docente dicte ninguna clase jamás.",
            "Expulsar a todos los estudiantes de la universidad y clausurar las carreras."
        ],
        correctAnswer: 1,
        explanationCorrect: "La prohibición absoluta suele ser una respuesta reactiva ante clases aburridas y pasivas: la didáctica contemporánea integra el dispositivo (BYOD - Bring Your Own Device) como una extensión del aprendizaje, comprometiendo la atención en tareas que exigen interactuar y crear con el teléfono.",
        explanationIncorrect: "La opción A criminaliza una herramienta cultural y provoca batallas de poder estériles. Las opciones C y D abandonan la función formativa institucional.",
        recommendation: "Establecer 'Zonas Verdes' (uso intencionado del dispositivo para la tarea) y 'Zonas Rojas' (pantallas abajo para el diálogo cara a cara y la escucha profunda)."
    },
    {
        id: "dp-30",
        testId: "didactica",
        dimensionId: "facilitacion",
        dimensionName: "Facilitación y Gestión de Grupos",
        competency: "Resolver situaciones de apatía y desconexión grupal mediante el re-encuadre motivacional.",
        themeCategory: "Reencuadre motivacional y empatía pedagógica",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Un facilitador ingresa a un grupo obligatorio de capacitación corporativa y percibe un clima de apatía helada, brazos cruzados y hostilidad silenciosa; un participante dice: 'Estamos aquí obligados, nos están haciendo perder el tiempo de nuestro trabajo real'. ¿Cómo debe reaccionar el facilitador desde una maestría andragógica de grupo?",
        options: [
            "Ofenderse, insultar al grupo y amenazarlos con quejarse ante el presidente de la empresa.",
            "Aceptar y validar explícitamente el sentir del grupo con empatía, transparentar el dilema, negociar cómo hacer que ese tiempo invertido les rinda el máximo beneficio práctico para su trabajo real y adaptar el programa hacia sus problemas más urgentes.",
            "Ignorar el comentario y empezar a leer diapositivas como si nada hubiera pasado.",
            "Llamar al personal de seguridad para que desaloje el edificio inmediatamente."
        ],
        correctAnswer: 1,
        explanationCorrect: "El facilitador experto no combate la resistencia frontalmente: la nombra y la valida ('Poner el elefante sobre la mesa'). Al reconocer su frustración con empatía y pactar una alianza donde el contenido responda a sus dolores laborales reales, disuelve la hostilidad y construye corresponsabilidad.",
        explanationIncorrect: "La opción A escala el conflicto destructivamente. La opción C demuestra ceguera pedagógica y desconexión emocional. La opción D es un despropósito injustificado.",
        recommendation: "Utilizar técnicas de desescalamiento andragógico y acuerdos de utilidad inmediata ('Contrato de Aterrizaje Práctico')."
    },

    // =========================================================================
    // DIMENSIÓN 4: DISEÑO Y RESOLUCIÓN DE SITUACIONES (Preguntas 31 a 40)
    // =========================================================================
    {
        id: "dp-31",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Identificar los tres principios del Diseño Universal para el Aprendizaje (DUA).",
        themeCategory: "Diseño Universal para el Aprendizaje (DUA)",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "El marco del Diseño Universal para el Aprendizaje (DUA / UDL del CAST) se fundamenta en la neurociencia cognitiva y establece tres redes cerebrales y tres principios rectores. ¿Cuáles son estos tres principios?",
        options: [
            "1. Proporcionar múltiples formas de Compromiso e Implicación (redes afectivas) -> 2. Proporcionar múltiples formas de Representación (redes de reconocimiento) -> 3. Proporcionar múltiples formas de Acción y Expresión (redes estratégicas).",
            "1. Castigar al que dude -> 2. Repetir de memoria -> 3. Premiar solo al que termine primero.",
            "1. Usar libros viejos -> 2. Prohibir computadoras -> 3. Sentarse en fila recta.",
            "1. Hablar en voz alta -> 2. No mirar a los alumnos -> 3. Evaluar con una sola prueba."
        ],
        correctAnswer: 0,
        explanationCorrect: "El DUA derriba barreras desde el diseño original: ofrece múltiples opciones para motivarse y comprometerse ('el porqué del aprendizaje'), múltiples formas de percibir y comprender la información ('el qué del aprendizaje') y múltiples vías para que los estudiantes expresen y demuestren su maestría ('el cómo del aprendizaje').",
        explanationIncorrect: "Las opciones B, C y D representan prácticas pedagógicas tradicionales, punitivas o rígidas totalmente opuestas a los principios de accesibilidad e inclusión del DUA.",
        recommendation: "Consultar las Pautas DUA versión 3.0 del CAST (Center for Applied Special Technology)."
    },
    {
        id: "dp-32",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Analizar el modelo TPACK de integración tecnológica en la didáctica.",
        themeCategory: "Modelo TPACK de Mishra y Koehler",
        difficulty: "basica",
        cognitiveType: "analisis",
        question: "El modelo TPACK (Mishra y Koehler) sostiene que para enseñar eficazmente en el siglo XXI no basta con saber computación. ¿Qué tres saberes interactúan en la intersección del TPACK?",
        options: [
            "Conocimiento del Contenido (CK - disciplinar), Conocimiento Pedagógico (PK - cómo enseñar) y Conocimiento Tecnológico (TK - herramientas digitales).",
            "Saber matemáticas, saber conducir autos y saber cocinar postres.",
            "Saber comprar hardware, saber vender licencias y saber cobrar matrículas.",
            "Saber mandar órdenes, saber castigar y saber calificar con tinta roja."
        ],
        correctAnswer: 0,
        explanationCorrect: "El TPACK enfatiza que la tecnología no se añade como un apéndice aislado: la verdadera competencia docente reside en la intersección sinérgica entre el saber disciplinar qué se enseña, el saber pedagógico cómo se aprende y el saber tecnológico con qué herramientas se potencia la mediación.",
        explanationIncorrect: "Las opciones B, C y D desfiguran el marco conceptual del TPACK mezclando oficios no académicos, ventas comerciales o prácticas autoritarias.",
        recommendation: "Revisar el marco TPACK (Technological Pedagogical Content Knowledge) para diseñar capacitaciones docentes en tecnología educativa."
    },
    {
        id: "dp-33",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Analizar los niveles del modelo SAMR de integración tecnológica.",
        themeCategory: "Modelo SAMR de Rubén Puentedura",
        difficulty: "basica",
        cognitiveType: "analisis",
        question: "Una escuela reemplazó los cuadernos de papel por tabletas electrónicas para que los alumnos usen la tableta únicamente como libreta digital de notas manuscritas idéntica al papel. Según el modelo SAMR de Rubén Puentedura, ¿en qué nivel de integración tecnológica se encuentra esta práctica?",
        options: [
            "Sustitución: la tecnología actúa como un sustituto directo del soporte tradicional sin ningún cambio funcional ni transformación pedagógica del acto de aprender.",
            "Redefinición: se crearon tareas pedagógicas inéditas que antes eran imposibles de concebir.",
            "Modificación: se rediseñó sustancialmente la tarea permitiendo colaboración global síncrona.",
            "Perfección absoluta: no existe ningún nivel más avanzado que escribir notas en una pantalla."
        ],
        correctAnswer: 0,
        explanationCorrect: "El modelo SAMR describe cuatro niveles: Sustitución (la tecnología hace lo mismo sin cambio funcional), Aumento (hay mejoras funcionales menores), Modificación (rediseño de la tarea) y Redefinición (creación de experiencias antes inconcebibles). Usar la tableta como simple cuaderno es pura sustitución elemental.",
        explanationIncorrect: "La opción B es el nivel más alto del modelo, totalmente ausente en este caso. La opción C requiere rediseño funcional. La opción D desconoce la escala de transformación del modelo SAMR.",
        recommendation: "Avanzar en el diseño didáctico desde los niveles de mejora (Sustitución / Aumento) hacia los niveles de transformación (Modificación / Redefinición)."
    },
    {
        id: "dp-34",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Aplicar adaptaciones curriculares no significativas para atender barreras de aprendizaje.",
        themeCategory: "Adaptaciones didácticas curriculares",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "En un grupo de formación técnica hay dos aprendices con Trastorno por Déficit de Atención e Hiperactividad (TDAH) que tienen dificultades para mantener la atención en instrucciones verbales largas y se dispersan con facilidad. ¿Qué adaptación didáctica de acceso debe implementar el facilitador?",
        options: [
            "Segmentar las instrucciones en pasos breves y secuenciados acompañados de listas de verificación visuales, permitir pausas breves de movimiento y ubicar apoyos gráficos claros para la autogestión de la tarea.",
            "Gritarles con furia cada vez que muevan una pierna para disciplinarlos frente a todos.",
            "Exonerarlos de hacer cualquier actividad y permitir que jueguen en el patio todo el año.",
            "Obligarlos a sentarse atados a una silla durante ocho horas seguidas."
        ],
        correctAnswer: 0,
        explanationCorrect: "Las adaptaciones metodológicas de acceso (DUA) no bajan la exigencia de la competencia, sino que eliminan barreras: estructuración visual de instrucciones (chunking), checklist de progreso, reducción de distractores y pausas de descarga motriz permiten a los estudiantes con TDAH autorregularse con éxito.",
        explanationIncorrect: "La opción B genera ansiedad y humillación traumática. La opción C cae en la exclusión complaciente. La opción D es un maltrato físico punible por ley.",
        recommendation: "Implementar apoyos visuales y temporizadores de cuenta regresiva (Time Timer) para andamiar las funciones ejecutivas en el aula inclusiva."
    },
    {
        id: "dp-35",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Diseñar experiencias de evaluación basadas en portafolios digitales interactivos.",
        themeCategory: "Portafolios digitales y e-Portfolios",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Un formador de instructores diseña la evaluación final mediante un 'e-Portfolio Reflexivo'. Para que no sea un simple repositorio de archivos, ¿qué estructura de diseño debe exigir a los participantes?",
        options: [
            "Cada evidencia seleccionada (diseño de clase, video de micro-enseñanza, instrumento de evaluación) debe estar acompañada de una narrativa reflexiva que explique por qué se eligió, qué principios pedagógicos la sustentan, qué dificultades se enfrentaron y cómo se mejorará a futuro.",
            "Subir 10.000 fotos de reuniones sociales con música estridente de fondo.",
            "Guardar únicamente las tareas donde hayan obtenido calificación perfecta sin incluir borradores ni comentarios de mejora.",
            "Copiar y pegar textos aleatorios de blogs de internet sin citar autores."
        ],
        correctAnswer: 0,
        explanationCorrect: "El corazón del e-Portfolio formativo es el trinomio: Evidencia + Reflexión Crítica + Proyección de Mejora. Sin la narrativa metacognitiva del autor, el portafolio pierde su valor transformador y se convierte en una simple carpeta de almacenamiento pasivo.",
        explanationIncorrect: "Las opciones B y D carecen de rigor académico o constituyen plagio deshonesto. La opción C invisibiliza la progresión del aprendizaje y la superación del error.",
        recommendation: "Establecer matrices de evaluación de e-portafolios que ponderen la profundidad de la reflexión pedagógica por encima de la cantidad de archivos."
    },
    {
        id: "dp-36",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Resolver incidentes críticos imprevistos durante la mediación didáctica en vivo.",
        themeCategory: "Resolución de fallas técnicas e incidentes críticos",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "En una sesión presencial estratégica ante 100 directivos, se corta la energía eléctrica del auditorio: no hay proyector, ni diapositivas, ni micrófono, ni computadoras. ¿Cómo demuestra el facilitador su maestría didáctica práctica?",
        options: [
            "Cancelar la sesión inmediatamente, disculparse avergonzado y marcharse del lugar.",
            "Mantener la serenidad y activar un 'Plan de Contingencia Didáctico': acercar a los participantes en semicírculos íntimos, utilizar rotafolios de papel o pizarras manuales y transformar la presentación en un diálogo reflexivo sobre casos reales apoyado en la interacción directa.",
            "Ponerse a llorar en el escenario y pedir que despidan a los electricistas.",
            "Obligar a los 100 directivos a permanecer a oscuras en silencio absoluto durante cuatro horas."
        ],
        correctAnswer: 1,
        explanationCorrect: "La pedagogía reside en el diseño didáctico y en la interacción humana, no en los cables: el docente experto no colapsa sin PowerPoint; adapta la situación inmediatamente recurriendo a metodologías dialógicas, casos provocadores y trabajo en pequeños círculos colaborativos.",
        explanationIncorrect: "La opción A demuestra fragilidad e incompetencia para adaptarse. Las opciones C y D evidencian inmadurez profesional y falta de recursos pedagógicos.",
        recommendation: "Tener siempre diseñado un 'Plan B analógico' (Low-Tech / No-Tech) para cualquier experiencia formativa de alto impacto."
    },
    {
        id: "dp-37",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Resolver problemas derivados de la falta de alineación entre objetivos y evaluación en el aula.",
        themeCategory: "Auditoría de alineación didáctica",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "Una institución educativa contrata una auditoría didáctica. Se descubre que en el sílabo el objetivo es: 'Desarrollar el pensamiento crítico y la capacidad de resolver dilemas éticos', pero durante el semestre los profesores solo dictaron clases magistrales teóricas y el examen final fue una prueba de 40 preguntas de opción múltiple que pedía memorizar definiciones de memoria. ¿Cuál es el dictamen didáctico y el plan de acción?",
        options: [
            "Felicitar a la institución por su maravillosa coherencia educativa.",
            "Existe una fractura didáctica total por falta de alineación constructiva: se debe capacitar a los docentes en diseño hacia atrás, incorporar metodologías activas (estudio de casos éticos, debates) y alinear la evaluación mediante rúbricas analíticas aplicadas a dilemas morales contextualizados.",
            "Eliminar la ética del plan de estudios y enseñar únicamente cálculo matemático.",
            "Prohibir que los auditores vuelvan a ingresar a la institución educativa."
        ],
        correctAnswer: 1,
        explanationCorrect: "Cuando el objetivo promete pensamiento crítico pero las clases y la evaluación son memorísticas cerradas, hay un fraude curricular involuntario; se impone reconstruir la alineación constructiva (Biggs) para que las actividades y la evaluación exijan el mismo nivel taxonómico prometido.",
        explanationIncorrect: "La opción A niega la contradicción flagrante. Las opciones C y D son evasiones destructivas que impiden la calidad y la mejora institucional.",
        recommendation: "Diseñar matrices de alineación didáctica institucional donde se audite la correspondencia entre Verbo del Objetivo -> Tarea en Aula -> Tarea Evaluativa."
    },
    {
        id: "dp-38",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Resolver dilemas de inclusión y accesibilidad cognitiva para personas con discapacidad visual o auditiva.",
        themeCategory: "Accesibilidad universal en materiales didácticos",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Un centro de formación empresarial diseña un curso virtual obligatorio donde todos los contenidos son videos grabados sin subtítulos, sin transcripción textual y sin descripción de audio de las imágenes, dejando en situación de discriminación a colaboradores con discapacidad auditiva y visual. ¿Qué remediación didáctica y legal debe aplicarse?",
        options: [
            "Aplicar las pautas de accesibilidad web (WCAG 2.1) y el DUA: incorporar subtitulado accesible (closed captions), transcripciones en texto descargables, audiodescripción de elementos visuales y compatibilidad con lectores de pantalla (screen readers).",
            "Exigir a los empleados con discapacidad que renuncien a sus puestos para no molestar a los programadores.",
            "Eliminar todos los cursos virtuales y obligarlos a viajar 500 kilómetros a pie.",
            "Ignorar el reclamo bajo el argumento de que la inclusión digital no existe."
        ],
        correctAnswer: 0,
        explanationCorrect: "La accesibilidad didáctica no es optativa; es un derecho humano y un imperativo legal (Convención sobre los Derechos de las Personas con Discapacidad de la ONU): garantizar texto alternativo, subtítulos, audiodescripción y contraste adecuado permite el acceso universal a la formación.",
        explanationIncorrect: "La opción B es discriminación laboral ilegal sancionable penalmente. Las opciones C y D vulneran los principios éticos y normativos de la educación contemporánea.",
        recommendation: "Auditar todos los recursos didácticos digitales con herramientas automáticas y manuales de accesibilidad WCAG nivel AA."
    },
    {
        id: "dp-39",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Integrar la Inteligencia Artificial Generativa con propósito pedagógico y ético en el aula.",
        themeCategory: "Inteligencia Artificial y mediación didáctica",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Frente al auge de herramientas de Inteligencia Artificial Generativa (ChatGPT, Claude), una facultad debate si prohibir su uso bajo amenaza de expulsión o integrarla pedagógicamente. Como especialista en didáctica de vanguardia, ¿cuál es la orientación pedagógica más sólida que debes defender?",
        options: [
            "Prohibir totalmente la IA, desconectar el internet de la universidad y obligar a escribir todo con pluma estilográfica bajo vigilancia armada.",
            "Integrar la IA con propósitos didácticos explícitos: enseñar a formular 'prompts' rigurosos, utilizarla como interlocutor socrático o asistente de ideación y centrar la evaluación en el análisis crítico, la verificación de fuentes, la contrastación ética y la aplicación contextual que la IA no puede reemplazar.",
            "Permitir que la IA haga todos los exámenes de los estudiantes y graduarlos sin que asistan a clase.",
            "Declarar que la IA es una herramienta mágica infalible que nunca comete alucinaciones ni errores factuales."
        ],
        correctAnswer: 1,
        explanationCorrect: "Prohibir la tecnología es inútil e ingenuo. La didáctica contemporánea (UNESCO - Guía de IA generativa para la educación y la investigación) enseña a co-diseñar con la IA: el estudiante desarrolla pensamiento crítico evaluando sesgos y alucinaciones de la máquina, mientras las tareas evaluativas migran hacia la argumentación auténtica y la resolución situada.",
        explanationIncorrect: "La opción A representa el ludismo tecnofóbico retrógrado. La opción C cae en el fraude y la vacuidad formativa. La opción D desconoce las limitaciones y alucinaciones cognitivas de los modelos de lenguaje.",
        recommendation: "Diseñar pautas pedagógicas e institucionales para el uso ético, transparente y crítico de la IA generativa en el aprendizaje."
    },
    {
        id: "dp-40",
        testId: "didactica",
        dimensionId: "diseno_resolucion",
        dimensionName: "Diseño y Resolución de Situaciones",
        competency: "Consolidar el ciclo de mejora continua de la práctica docente mediante la investigación-acción.",
        themeCategory: "Investigación-Acción pedagógica de John Elliott",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "John Elliott y Wilfred Carr definen la 'Investigación-Acción' (Action Research) en educación como el estudio reflexivo de una situación social para mejorar la calidad de la acción docente. ¿Cuál es el ciclo helicoidal que sigue un docente investigador para perfeccionar su práctica didáctica de forma científica?",
        options: [
            "1. Diagnóstico y reflexión sobre un problema de aprendizaje de su aula -> 2. Planificación de una intervención pedagógica innovadora -> 3. Puesta en práctica y observación rigurosa de evidencias -> 4. Reflexión sobre los resultados -> 5. Re-planificación y nuevo ciclo.",
            "1. Quejarse en el pasillo -> 2. Culpar a los padres de familia -> 3. Reprobar a los estudiantes -> 4. Cobrar el sueldo -> 5. Repetir.",
            "1. Escribir un libro de ficción -> 2. Publicarlo en redes sociales -> 3. Venderlo a los alumnos.",
            "1. Copiar una tesis de internet -> 2. Cambiarle el título -> 3. Presentarla como propia."
        ],
        correctAnswer: 0,
        explanationCorrect: "La investigación-acción es el camino más riguroso de desarrollo profesional docente: el educador investiga en y sobre su propia práctica mediante ciclos iterativos de diagnóstico, acción innovadora, recolección sistemática de evidencias y reflexión colegiada, transformando la enseñanza en una ciencia aplicada viva.",
        explanationIncorrect: "La opción B describe el cinismo docente defensivo. Las opciones C y D describen conductas comerciales o plagio deshonesto ajenos a la investigación formativa.",
        recommendation: "Implementar comunidades de Investigación-Acción Pedagógica (Lesson Study japonesa) en instituciones educativas y centros de formación."
    }
];
