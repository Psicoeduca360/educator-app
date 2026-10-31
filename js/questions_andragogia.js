/**
 * PSICOEDUCA ACADEMY - Banco de Preguntas
 * Instrumento 3: Andragogía Avanzada (40 preguntas completas)
 * Dimensiones:
 * 1. Fundamentos del Aprendizaje Adulto (preguntas 1 a 10)
 * 2. Motivación y Autorregulación (preguntas 11 a 20)
 * 3. Estrategias Experienciales (preguntas 21 a 30)
 * 4. Transferencia y Aplicación (preguntas 31 a 40)
 * Distribución: 12 Básicas, 18 Intermedias, 10 Avanzadas | 10 Conceptuales, 10 Análisis, 10 Aplicación, 10 Problema
 */

window.QUESTIONS_ANDRAGOGIA = [
    // =========================================================================
    // DIMENSIÓN 1: FUNDAMENTOS DEL APRENDIZAJE ADULTO (Preguntas 1 a 10)
    // =========================================================================
    {
        id: "aa-01",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Identificar la definición y el origen disciplinar de la andragogía según Malcolm Knowles.",
        themeCategory: "Concepto de andragogía y Malcolm Knowles",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cómo definió Malcolm Knowles la andragogía en su obra pionera 'The Modern Practice of Adult Education' (1970)?",
        options: [
            "Como el arte y la ciencia de ayudar a los adultos a aprender, diferenciándola formalmente de la pedagogía tradicional centrada en niños.",
            "Como el tratamiento psiquiátrico hospitalario para personas mayores de 80 años.",
            "Como una técnica de marketing para vender cursos en línea sin contenidos académicos.",
            "Como la disciplina que prohíbe que los adultos lean libros teóricos en su tiempo libre."
        ],
        correctAnswer: 0,
        explanationCorrect: "Knowles popularizó y sistematizó el término andragogía (del griego andros = adulto, y agein = guiar) como el arte y la ciencia de facilitar el aprendizaje de los adultos, formulando un modelo basado en supuestos psicológicos propios del desarrollo maduro.",
        explanationIncorrect: "La opción B confunde andragogía con psicogeriatría. Las opciones C y D son distorsiones absurdas sin relación con la educación de adultos.",
        recommendation: "Estudiar 'The Adult Learner: The Definitive Classic in Adult Education and Human Resource Development' de Malcolm Knowles, Elwood Holton y Richard Swanson."
    },
    {
        id: "aa-02",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Reconocer el supuesto del autoconcepto del adulto en el modelo andragógico.",
        themeCategory: "Autoconcepto y autonomía del adulto",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "Según el modelo de Knowles, ¿cómo evoluciona el autoconcepto de una persona a medida que transita de la niñez a la adultez?",
        options: [
            "Transita de una personalidad dependiente hacia una persona con un autoconcepto autodirigido y autónomo, capaz de tomar sus propias decisiones y asumir la responsabilidad de su aprendizaje.",
            "Permanece idéntico e inmutable durante toda la vida, exigiendo siempre órdenes estrictas de una figura autoritaria.",
            "Involuciona hacia la total sumisión pasiva y el miedo absoluto a opinar en público.",
            "Se transforma en un rechazo biológico e irreversible hacia cualquier tipo de lectura o estudio."
        ],
        correctAnswer: 0,
        explanationCorrect: "Uno de los seis supuestos andragógicos centrales de Knowles es que el adulto se percibe a sí mismo como un ser humano autónomo y autodirigido; cuando un facilitador lo trata como a un niño dependiente, se genera resentimiento y resistencia inmediata.",
        explanationIncorrect: "La opción B define el estancamiento dependiente que contradice la psicología del desarrollo adulto. Las opciones C y D carecen de fundamento científico.",
        recommendation: "Analizar cómo el trato infantilizante hacia los adultos en capacitaciones empresariales es la principal causa de desconexión y resistencia."
    },
    {
        id: "aa-03",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Comprender el rol de la experiencia acumulada como recurso principal de aprendizaje.",
        themeCategory: "El reservorio de experiencia previa",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Qué papel desempeña el reservorio de experiencias previas que el adulto aporta al espacio de formación?",
        options: [
            "Es un obstáculo inútil que debe ser borrado de la mente del adulto para que el docente pueda escribir desde cero.",
            "Constituye el recurso más rico y valioso de aprendizaje para el propio participante y para sus pares, sirviendo de anclaje para los nuevos conocimientos.",
            "Es un factor insignificante que no influye en la velocidad ni en la calidad de la comprensión conceptual.",
            "Debe ser castigado por el facilitador si no coincide al pie de la letra con el manual corporativo."
        ],
        correctAnswer: 1,
        explanationCorrect: "Los adultos ingresan a la formación con un vasto bagaje de experiencias de vida y laborales: ignorar esa experiencia equivale a desvalorizar su identidad; el diseño andragógico utiliza esa vivencia como el cimiento central para el análisis, debate y reconfiguración conceptual.",
        explanationIncorrect: "La opción A asume el modelo de la tábula rasa, inaplicable al adulto. La opción C niega el postulado andragógico fundamental. La opción D promueve un autoritarismo destructor del aprendizaje.",
        recommendation: "Integrar técnicas andragógicas de rescate de experiencia como el análisis de incidentes críticos y la cartografía de competencias previas."
    },
    {
        id: "aa-04",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Diferenciar la orientación del aprendizaje en adultos frente a la pedagogía escolar.",
        themeCategory: "Orientación hacia problemas reales",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "¿Cómo difiere la orientación del aprendizaje del adulto respecto a la del estudiante escolar tradicional según los supuestos de Knowles?",
        options: [
            "Mientras la pedagogía tradicional suele estar centrada en asignaturas y contenidos teóricos abstractos, el adulto se orienta primordialmente hacia tareas, problemas y situaciones reales de su contexto vital o laboral inmediato.",
            "El adulto busca únicamente aprender temas que no tengan ninguna aplicación práctica en el mundo real.",
            "Los niños solo aprenden mediante problemas laborales y los adultos solo mediante canciones infantiles de cuna.",
            "No existe ninguna diferencia en la orientación del aprendizaje entre un niño de 6 años y un gerente de 50 años."
        ],
        correctAnswer: 0,
        explanationCorrect: "Los adultos tienen una orientación contextual y pragmática: aprenden con mayor compromiso cuando el contenido está estructurado en torno a problemas vitales, desafíos profesionales o dilemas laborales que deben resolver en su presente.",
        explanationIncorrect: "La opción B contradice la naturaleza utilitaria y funcional del aprendizaje adulto. Las opciones C y D invierten o niegan las diferencias evolutivas reconocidas internacionalmente.",
        recommendation: "Reemplazar currículos basados en temarios academicistas por módulos basados en 'Desafíos / Retos Situacionales' en la formación de adultos."
    },
    {
        id: "aa-05",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Analizar el supuesto de la 'necesidad de saber' (The Need to Know) en adultos.",
        themeCategory: "La necesidad de saber",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Un facilitador inicia un taller corporativo de 8 horas diciendo: 'Abran el libro en la página 1 y lean sin preguntar para qué sirve, porque así lo ordenó la gerencia general'. ¿Por qué esta consigna desata el desinterés y la resistencia de los adultos?",
        options: [
            "Porque los adultos necesitan comprender previamente el valor, el porqué y el para qué de lo que van a aprender antes de invertir su tiempo y energía mental en ello.",
            "Porque los adultos solo trabajan si se les regalan golosinas en los primeros cinco minutos.",
            "Porque los adultos tienen prohibido por ley leer páginas numeradas con el número 1.",
            "Porque la gerencia general jamás tiene autoridad en las empresas privadas."
        ],
        correctAnswer: 0,
        explanationCorrect: "El primer supuesto de Knowles es 'The Need to Know': los adultos necesitan saber por qué necesitan aprender algo y qué beneficios o costos implicará no saberlo; sin esta justificación de sentido y utilidad, la inversión cognitiva se bloquea.",
        explanationIncorrect: "La opción B confunde a los adultos con niños pequeños condicionados por refuerzos primarios. Las opciones C y D son argumentos sin ningún sentido técnico.",
        recommendation: "Dedicar siempre los primeros minutos de cada módulo andragógico a explicitar el 'WIIFM' (What's in it for me? / ¿Qué gano yo con esto? y ¿Qué problema resolveré?)."
    },
    {
        id: "aa-06",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Analizar la relación horizontal y dialógica entre facilitador y participante adulto.",
        themeCategory: "Horizontalidad andragógica de Félix Adam",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "El educador venezolano Félix Adam, pionero de la andragogía latinoamericana, postuló que la andragogía descansa en dos principios cardinales: 'Horizontalidad' y 'Participación'. ¿Qué implica la 'Horizontalidad'?",
        options: [
            "Que facilitador y participante adulto comparten una condición común de igualdad como adultos con experiencia, donde el facilitador orienta y aprende junto al grupo sin ejercer autoritarismo jerárquico.",
            "Que todos los participantes deben tomar la clase acostados horizontalmente en el suelo del salón.",
            "Que el facilitador renuncia a saber nada sobre la materia y le pide al conserje que dicte la sesión.",
            "Que no se permite evaluar ni evaluar ningún tipo de resultado al final de la jornada."
        ],
        correctAnswer: 0,
        explanationCorrect: "La horizontalidad de Félix Adam se refiere a la relación simétrica en estatus humano y madurez entre educador y educando: el facilitador no es un superior jerárquico que impone dogmas, sino un mediador experto que respeta la adultez de los participantes en un diálogo de saberes.",
        explanationIncorrect: "La opción B toma el término físico espacialmente de forma ridícula. La opción C confunde horizontalidad con incompetencia docente. La opción D confunde respeto mutuo con abandono evaluativo.",
        recommendation: "Consultar la obra 'Andragogía: Ciencia de la educación de adultos' de Félix Adam (1977)."
    },
    {
        id: "aa-07",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Analizar el papel del desaprendizaje (unlearning) en la adultez.",
        themeCategory: "Desaprendizaje de modelos mentales obsoletos",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Al capacitar a trabajadores experimentados en una nueva tecnología digital que reemplaza su proceso manual de 20 años, el facilitador nota que el mayor reto no es enseñar la nueva herramienta, sino lograr que los participantes cuestionen y dejen de usar sus rutinas arraigadas. ¿Qué concepto andragógico describe este desafío?",
        options: [
            "Desaprendizaje reflexivo: la necesidad de desactivar modelos mentales, sesgos y hábitos consolidados para abrir espacio cognitivo a nuevos paradigmas.",
            "Degeneración neuronal acelerada irreversible.",
            "Falta total de coeficiente intelectual en las personas mayores de 30 años.",
            "Histeria colectiva inducida por el uso de pantallas electrónicas."
        ],
        correctAnswer: 0,
        explanationCorrect: "Como señalaba Alvin Toffler, 'los analfabetos del siglo XXI no serán quienes no sepan leer ni escribir, sino quienes no puedan aprender, desaprender y reaprender'. En adultos, la experiencia previa también puede cristalizar en sesgos y rutinas defensivas que requieren procesos andragógicos deliberados de desaprendizaje.",
        explanationIncorrect: "Las opciones B y C son afirmaciones falsas y edadistas (discriminación por edad). La opción D es un diagnóstico clínico falso.",
        recommendation: "Diseñar fases de 'descongelamiento de esquemas' (unfreezing de Kurt Lewin) antes de introducir nuevas metodologías a profesionales veteranos."
    },
    {
        id: "aa-08",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Aplicar los supuestos andragógicos al rediseño de un programa formativo.",
        themeCategory: "Rediseño andragógico de programas",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Un curso técnico sobre normativa tributaria para contadores sénior tiene una deserción del 60%. Las clases consisten en el docente leyendo diapositivas de artículos de ley durante tres horas. ¿Cómo debe rediseñarse el curso bajo principios andragógicos para asegurar retención y aprendizaje?",
        options: [
            "Aumentar las diapositivas a 500 por clase y amenazarlos con multas si faltan a la sesión.",
            "Reestructurar el curso en torno al análisis de casos reales de auditorías complejas, resolución de litigios tributarios en equipos y debate de jurisprudencia aplicada con retroalimentación inmediata.",
            "Regalarles la certificación a todos sin que asistan a ninguna sesión formativa.",
            "Reemplazar al profesor por un lector automático de voz monótona."
        ],
        correctAnswer: 1,
        explanationCorrect: "Los contadores sénior son adultos con alto bagaje profesional que requieren resolución de problemas reales, no lectura pasiva de leyes que ellos mismos pueden leer. El método de casos y la deliberación entre pares conecta directamente con su orientación práctica y su experiencia previa.",
        explanationIncorrect: "La opción A agrava el error de sobrecarga pasiva. La opción C incurre en fraude y desvaloriza la certificación. La opción D deshumaniza el proceso sin resolver la falla pedagógica.",
        recommendation: "Aplicar la metodología del caso (Case Method) de Harvard adaptada a la formación continua de profesionales."
    },
    {
        id: "aa-09",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Resolver problemas derivados de la resistencia al cambio en la formación corporativa.",
        themeCategory: "Resistencia al cambio y zonas de confort",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "Durante la implementación de una metodología ágil en una empresa tradicional, los líderes de proyecto expresan: 'Siempre lo hemos hecho en cascada durante 15 años y nos funcionó, esta nueva metodología es una moda innecesaria'. Desde la mediación andragógica, ¿cuál es la intervención profesional idónea?",
        options: [
            "Burlarse de su metodología anterior y amenazarlos con el despido inmediato si no sonríen.",
            "Validar sus éxitos pasados, analizar conjuntamente las nuevas demandas del mercado que hacen insuficiente el modelo tradicional y permitirles experimentar la metodología ágil en un proyecto piloto seguro con métricas de valor tangibles.",
            "Cancelar la transformación de la empresa y prohibir la innovación para complacer a los resistentes.",
            "Obligarlos a memorizar el glosario de términos ágiles en inglés sin explicar su significado funcional."
        ],
        correctAnswer: 1,
        explanationCorrect: "La resistencia adulta nace a menudo de la amenaza a la competencia percibida y al orgullo por logros históricos. La facilitación andragógica no descalifica el pasado; honra la experiencia previa y construye un puente cognitivo hacia la nueva necesidad mediante pilotajes de bajo riesgo.",
        explanationIncorrect: "La opción A genera represalias, miedo y boicot encubierto. La opción C condena a la empresa a la obsolescencia. La opción D impone memorización vacía sin sentido funcional.",
        recommendation: "Utilizar el modelo de transición de William Bridges (Ending, Neutral Zone, New Beginning) en capacitaciones de gestión del cambio."
    },
    {
        id: "aa-10",
        testId: "andragogia",
        dimensionId: "fundamentos_adulto",
        dimensionName: "Fundamentos del Aprendizaje Adulto",
        competency: "Resolver dilemas de formación en poblaciones adultas vulnerables y de baja escolaridad.",
        themeCategory: "Andragogía en contextos comunitarios vulnerables",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Una ONG diseña un programa de educación financiera y emprendimiento para mujeres adultas campesinas, muchas de las cuales no completaron la primaria pero administran huertas y cooperativas exitosamente. ¿Qué enfoque andragógico garantiza el éxito del programa evitando el fracaso escolar?",
        options: [
            "Hacerles un examen escrito formal de álgebra pura y reprobar a las que no sepan resolver derivadas matemáticas.",
            "Partir de sus saberes empíricos cotidianos de administración del hogar y la siembra, utilizando materiales visuales, dinámicas vivenciales, simulaciones de mercado y diálogo de saberes respetuoso y contextualizado.",
            "Obligarlas a comprar libros universitarios de macroeconomía en inglés.",
            "Tratarlas como niñas pequeñas de preescolar cantando canciones infantiles simplonas."
        ],
        correctAnswer: 1,
        explanationCorrect: "La andragogía popular comunitaria reconoce que los adultos de baja escolaridad formal poseen una enorme sabiduría práctica y matemática informal; la facilitación debe anclarse en su realidad vivida, promoviendo el empoderamiento y la resolución práctica sin infantilización.",
        explanationIncorrect: "Las opciones A y C imponen barreras académicas artificiales y discriminatorias. La opción D comete el grave error de infantilizar a mujeres adultas trabajadoras y madres de familia.",
        recommendation: "Articular la andragogía de Knowles con la etnomatemática de Ubiratan D'Ambrosio y la educación popular de Paulo Freire."
    },

    // =========================================================================
    // DIMENSIÓN 2: MOTIVACIÓN Y AUTORREGULACIÓN (Preguntas 11 a 20)
    // =========================================================================
    {
        id: "aa-11",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Distinguir las fuentes de motivación intrínseca y extrínseca en los aprendices adultos.",
        themeCategory: "Motivación intrínseca vs extrínseca",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "Aunque los adultos responden a motivadores externos (salario, ascenso, certificación), ¿cuáles son los motivadores más potentes y sostenibles según la andragogía?",
        options: [
            "Las presiones de sus padres y las amenazas de castigo físico.",
            "Los motivadores internos: el deseo de crecimiento personal, la autoestima, la curiosidad, el sentido de competencia y la satisfacción de resolver problemas de su interés.",
            "Las rifas semanales de electrodomésticos en el aula de capacitación.",
            "El temor permanente a la descalificación pública frente a sus vecinos."
        ],
        correctAnswer: 1,
        explanationCorrect: "Knowles demostró que el sexto supuesto andragógico es que los motivadores más potentes en el adulto son internos (intrínsecos): autorrealización, reconocimiento profesional, autoeficacia, placer por el dominio y aplicabilidad práctica.",
        explanationIncorrect: "La opción A corresponde a dinámicas infantiles heterónomas. La opción C ofrece estímulos extrínsecos superficiales de corta duración. La opción D genera estrés tóxico y abandono.",
        recommendation: "Revisar la Teoría de la Autodeterminación de Deci y Ryan (necesidades psicológicas básicas: autonomía, competencia y relación)."
    },
    {
        id: "aa-12",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Comprender el concepto de aprendizaje autodirigido (Self-Directed Learning).",
        themeCategory: "Aprendizaje autodirigido de Allen Tough",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "Allen Tough ('The Adult's Learning Projects') y Malcolm Knowles definen el 'Aprendizaje Autodirigido' como un proceso en el cual los individuos:",
        options: [
            "Toman la iniciativa, con o sin la ayuda de otros, para diagnosticar sus necesidades de aprendizaje, formular metas, identificar recursos, elegir estrategias y evaluar sus propios logros.",
            "Se aíslan permanentemente del mundo sin hablar jamás con ningún colega ni experto.",
            "Esperan pasivamente a que un jefe les diga exactamente qué página leer cada mañana.",
            "Copian exámenes de internet sin realizar ningún esfuerzo de comprensión cognitiva."
        ],
        correctAnswer: 0,
        explanationCorrect: "El aprendizaje autodirigido (SDL) no significa soledad absoluta, sino proactividad y agencia: el aprendiz adulto asume el control del diseño de su trayectoria formativa, identificando sus vacíos y gestionando los recursos humanos y materiales para superarlos.",
        explanationIncorrect: "La opción B confunde autodirección con aislamiento social. La opción C es la definición de dependencia pasiva. La opción D es fraude deshonesto.",
        recommendation: "Explorar el modelo de etapas de aprendizaje autodirigido (SSDL) de Gerald Grow para adaptar el estilo docente al nivel de autonomía del aprendiz."
    },
    {
        id: "aa-13",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Clasificar las barreras de aprendizaje en adultos según el modelo de Patricia Cross.",
        themeCategory: "Barreras de aprendizaje de Patricia Cross",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En el marco de la educación de adultos (Patricia Cross, 'Adults as Learners', 1981), ¿cuáles son las tres grandes categorías de barreras que dificultan o impiden la participación de los adultos en la formación?",
        options: [
            "Barreras de altura física, barreras climáticas y barreras cósmicas.",
            "Barreras situacionales (falta de tiempo, dinero, cuidado de hijos), institucionales (horarios rígidos, burocracia, costos) y disposicionales (baja autoestima, miedo al fracaso, cansancio).",
            "Barreras deportivas, barreras gastronómicas y barreras de vestuario.",
            "Barreras políticas exclusivamente gubernamentales sin ningún factor personal."
        ],
        correctAnswer: 1,
        explanationCorrect: "La taxonomía de Patricia Cross categoriza con claridad por qué los adultos no participan o abandonan: Barreras situacionales (contexto vital: hijos, empleo), Institucionales (políticas del centro: cursos inflexibles, ubicaciones lejanas) y Disposicionales (creencias internas: 'estoy viejo para estudiar', 'no voy a poder').",
        explanationIncorrect: "Las opciones A, C y D carecen de rigor científico y no guardan ninguna relación con la investigación andragógica consolidada.",
        recommendation: "Diseñar estrategias institucionales que mitiguen las tres barreras de Cross (asincronía para lo situacional, microlearning para lo institucional, andamiaje empático para lo disposicional)."
    },
    {
        id: "aa-14",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Analizar el papel del 'contrato de aprendizaje' (learning contract) en la andragogía.",
        themeCategory: "Contratos de aprendizaje andragógicos",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "¿Por qué el uso de 'Contratos de Aprendizaje' consensuados entre el facilitador y el participante adulto eleva sustancialmente la motivación y el compromiso?",
        options: [
            "Porque permite amenazar legalmente al participante con embargos financieros si no saca 100 en la prueba.",
            "Porque formaliza la corresponsabilidad, permitiendo al adulto personalizar sus objetivos, seleccionar las evidencias que demostrará y autorregular sus tiempos de entrega dentro de un marco claro y pactado.",
            "Porque elimina cualquier necesidad de estudiar o asistir a las sesiones pactadas.",
            "Porque es un requisito impuesto por los bancos hipotecarios internacionales."
        ],
        correctAnswer: 1,
        explanationCorrect: "El contrato de aprendizaje andragógico es un instrumento de empoderamiento y corresponsabilidad: respeta la autonomía del adulto al permitirle negociar qué aprenderá, cómo lo demostrará y bajo qué criterios de calidad será evaluado, elevando el compromiso intrínseco.",
        explanationIncorrect: "La opción A confunde un acuerdo pedagógico con un contrato comercial punitivo. Las opciones C y D son falsas y descontextualizadas.",
        recommendation: "Implementar plantillas de contratos de aprendizaje en proyectos de titulación, diplomados o programas de mentoría corporativa."
    },
    {
        id: "aa-15",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Analizar los desafíos pedagógicos del diálogo intergeneracional en las organizaciones.",
        themeCategory: "Aprendizaje intergeneracional en el trabajo",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "En una empresa conviven cuatro generaciones laborales: Baby Boomers, Generación X, Millennials y Generación Z. Al diseñar un programa de formación transversal, ¿cuál es la estrategia andragógica más efectiva?",
        options: [
            "Imponer un único formato idéntico para todos basado exclusivamente en textos PDF de 400 páginas sin imágenes.",
            "Separar físicamente a las generaciones en edificios distintos para evitar que hablen entre sí.",
            "Fomentar la mentoría inversa y el aprendizaje colaborativo intergeneracional, combinando rigor metodológico con entornos multimodales flexibles y aprovechando la experiencia de los séniores y las destrezas digitales de los júniores.",
            "Despedir a todos los mayores de 40 años para no tener que adaptar los cursos de capacitación."
        ],
        correctAnswer: 2,
        explanationCorrect: "La diversidad generacional en el trabajo es una fortaleza formativa cuando se aprovecha mediante mentoría cruzada (reverse mentoring): los séniores aportan visión estratégica, cultura organizacional y criterio ético, mientras que los júniores aportan fluidez digital y nuevas metodologías de innovación.",
        explanationIncorrect: "La opción A ignora la diversidad de preferencias y canales de comunicación. La opción B segrega e impide la sinergia. La opción D constituye discriminación laboral ilegal.",
        recommendation: "Diseñar programas de Reverse Mentoring (mentoría bidireccional) para enriquecer el capital intelectual de la organización."
    },
    {
        id: "aa-16",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Analizar el impacto del síndrome del impostor en aprendices adultos de alto rendimiento.",
        themeCategory: "El síndrome del impostor en el desarrollo profesional",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "Durante un programa de liderazgo ejecutivo para mujeres gerentes, varias participantes sobresalientes expresan en privado: 'Tengo miedo de que descubran que no sé lo suficiente y que llegué aquí solo por casualidad'. ¿Qué fenómeno psicológico enfrenta el facilitador andragógico y cómo debe abordarlo?",
        options: [
            "El síndrome del impostor; debe normalizarlo, visibilizar evidencias objetivas de logro, fomentar redes de apoyo entre pares y desmitificar el mito de la perfección absoluta.",
            "Esquizofrenia paranoide grave que requiere internamiento psiquiátrico forzoso.",
            "Falta total de inteligencia que confirma que deben ser degradadas de puesto.",
            "Un intento manipulador de las líderes para que les regalen el diploma sin trabajar."
        ],
        correctAnswer: 0,
        explanationCorrect: "El síndrome del impostor (Clance y Imes) es sumamente común en adultos altamente capacitados y perfeccionistas; el facilitador andragógico debe crear un entorno psicológicamente seguro que permita reflexionar sobre estas creencias irracionales, apoyándose en evidencias de competencia y validación de pares.",
        explanationIncorrect: "La opción B es un diagnóstico psiquiátrico falso y desproporcionado. Las opciones C y D descalifican insensiblemente un desafío socioemocional frecuente en el desarrollo del talento.",
        recommendation: "Integrar dinámicas de seguridad psicológica (Amy Edmondson) en programas de formación de líderes y posgrados."
    },
    {
        id: "aa-17",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Aplicar el Microlearning como estrategia para derribar barreras temporales en adultos.",
        themeCategory: "Microlearning en la formación de adultos",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Un grupo de médicos especialistas reporta que no tiene tiempo para cursar un diplomado de 120 horas con clases sincrónicas de 4 horas los fines de semana. ¿Cómo se aplica la estrategia de Microlearning para responder a su perfil andragógico?",
        options: [
            "Eliminar el 90% de los temas médicos y enseñarles solo cómo sonreír a los pacientes.",
            "Fraccionar el contenido en cápsulas formativas breves (nuggets de 5 a 10 minutos), altamente enfocadas en un solo objetivo o procedimiento clínico práctico, accesibles desde dispositivos móviles en sus tiempos libres.",
            "Obligarlos a renunciar a su trabajo hospitalario para asistir a clases presenciales todo el día.",
            "Enviarles 50 libros de texto por correo postal para que los lean en sus vacaciones."
        ],
        correctAnswer: 1,
        explanationCorrect: "El microaprendizaje responde con precisión a las restricciones de tiempo y carga cognitiva del adulto moderno: ofrece unidades modulares focalizadas, autónomas y prácticas ('just-in-time, just-enough, just-for-me') que el profesional puede consumir e integrar en su flujo diario de trabajo.",
        explanationIncorrect: "La opción A reduce la calidad y rigor técnico del saber médico. Las opciones C y D ignoran las barreras situacionales de los profesionales en ejercicio.",
        recommendation: "Estructurar microcápsulas andragógicas con la regla de oro: 1 problema real -> 1 concepto clave -> 1 aplicación práctica -> 1 autoverificación rápida."
    },
    {
        id: "aa-18",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Aplicar la gamificación educativa para elevar el compromiso de adultos en entornos corporativos.",
        themeCategory: "Gamificación andragógica corporativa",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "Una consultora diseña una plataforma gamificada para capacitar a inspectores de calidad en una fábrica automotriz. Para que la gamificación conecte con la motivación intrínseca de los adultos y no sea vista como un juego infantil frívolo, ¿qué diseño lúdico debe privilegiar?",
        options: [
            "Llenar la pantalla de muñequitos de caricatura infantil que bailan con sonidos estridentes.",
            "Diseñar simuladores inmersivos de resolución de fallas críticas en línea de ensamble, donde los puntos, insignias y niveles reflejen maestría técnica real, estatus profesional y superación de desafíos complejos.",
            "Hacer que los operarios compitan cantando canciones infantiles frente al presidente de la empresa.",
            "Quitarles el sueldo a quienes pierdan una partida en el juego virtual."
        ],
        correctAnswer: 1,
        explanationCorrect: "La gamificación para adultos (Karl Kapp, 'The Gamification of Learning and Instruction') debe enfocarse en la maestría, el reto significativo y la narrativa contextual: cuando las mecánicas lúdicas recompensan la pericia profesional y la resolución de problemas auténticos, generan alto enganche cognitivo.",
        explanationIncorrect: "Las opciones A y C infantilizan groseramente al profesional adulto. La opción D introduce amenazas ilegales que destruyen la motivación.",
        recommendation: "Utilizar el marco Octalysis de Yu-kai Chou para balancear motivadores de 'sombrero blanco' (significado épico, empoderamiento, maestría) en adultos."
    },
    {
        id: "aa-19",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Resolver problemas de fatiga cognitiva y sobrecarga laboral en programas de capacitación.",
        themeCategory: "Fatiga cognitiva y burnout en el aprendizaje adulto",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En una empresa de tecnología, los desarrolladores de software deben capacitarse en ciberseguridad después de cumplir jornadas laborales extenuantes de 10 horas frente a la pantalla. El facilitador nota que el 80% está exhausto, desmotivado y con la mirada perdida. ¿Cuál es el ajuste andragógico indispensable?",
        options: [
            "Gritarles con un megáfono y amenazarlos con reportes disciplinarios para obligarlos a prestar atención.",
            "Reorganizar la formación dentro del horario laboral como parte del trabajo remunerado, reduciendo las sesiones sincrónicas, introduciendo pausas activas, trabajo colaborativo dinámico y descansos cerebrales.",
            "Obligarlos a tomar cinco tazas de café con sal antes de ingresar al salón.",
            "Extender la capacitación por 4 horas adicionales cada medianoche."
        ],
        correctAnswer: 1,
        explanationCorrect: "El aprendizaje requiere energía metabólica y atención ejecutiva prefrontal: pretender que adultos con fatiga crónica y sobrecarga laboral aprendan de noche sin descanso es inviable fisiológica y pedagógicamente; la capacitación debe integrarse al tiempo protegido laboral y respetar los ritmos biológicos.",
        explanationIncorrect: "La opción A incrementa el estrés y el agotamiento (burnout). Las opciones C y D son prácticas nocivas para la salud que atentan contra la dignidad laboral.",
        recommendation: "Articular las políticas de formación corporativa con las normas de bienestar laboral y desconexión digital de la OIT."
    },
    {
        id: "aa-20",
        testId: "andragogia",
        dimensionId: "motivacion",
        dimensionName: "Motivación y Autorregulación",
        competency: "Resolver situaciones complejas de aprendizaje autodirigido en comunidades profesionales de práctica.",
        themeCategory: "Comunidades de práctica y aprendizaje social autónomo",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Una red de 300 directores de hospitales desea mantener un proceso de aprendizaje autodirigido continuo para compartir lecciones aprendidas durante emergencias sanitarias sin depender de cursos formales centralizados. Como facilitador andragógico, ¿qué arquitectura de aprendizaje debes co-diseñar?",
        options: [
            "Nombrar a un inspector único que les tome exámenes escritos con preguntas trampa todos los domingos.",
            "Facilitar una Comunidad de Práctica (CoP) autogestionada, con un repositorio colaborativo de lecciones aprendidas, sesiones periódicas de 'Ateneo de Incidentes Críticos' y círculos de co-consultoría entre pares con moderación rotativa.",
            "Clausurar cualquier intento de diálogo entre los directores para que no se enteren de los problemas de otros hospitales.",
            "Obligarlos a enviar cartas manuscritas por correo postal cada tres meses."
        ],
        correctAnswer: 1,
        explanationCorrect: "Las Comunidades de Práctica (Wenger) constituyen el modelo andragógico cúspide para profesionales de alto nivel: permiten el aprendizaje social situado, la reflexión sobre incidentes reales y la coconstrucción de conocimiento tácito entre pares con total autonomía.",
        explanationIncorrect: "La opción A impone un control burocrático inapropiado para directivos expertos. Las opciones C y D bloquean la inteligencia colectiva y el flujo del conocimiento.",
        recommendation: "Estudiar 'Cultivating Communities of Practice' de Etienne Wenger, Richard McDermott y William Snyder."
    },

    // =========================================================================
    // DIMENSIÓN 3: ESTRATEGIAS EXPERIENCIALES (Preguntas 21 a 30)
    // =========================================================================
    {
        id: "aa-21",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Identificar las cuatro etapas del Ciclo de Aprendizaje Experiencial de David Kolb.",
        themeCategory: "David Kolb y el ciclo de aprendizaje experiencial",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En la teoría del Aprendizaje Experiencial de David Kolb (1984), ¿cuáles son las cuatro etapas interconectadas que componen el ciclo de transformación de la experiencia?",
        options: [
            "1. Experiencia Concreta (hacer/sentir) -> 2. Observación Reflexiva (revisar) -> 3. Conceptualización Abstracta (concluir/teorizar) -> 4. Experimentación Activa (planificar/aplicar).",
            "1. Dormir -> 2. Despertar -> 3. Comer -> 4. Volver a dormir.",
            "1. Memorizar -> 2. Repetir -> 3. Olvidar -> 4. Castigar.",
            "1. Escribir -> 2. Borrar -> 3. Romper el papel -> 4. Salir corriendo."
        ],
        correctAnswer: 0,
        explanationCorrect: "Kolb plantea que el aprendizaje es el proceso mediante el cual el conocimiento se crea a través de la transformación de la experiencia: comienza con la Experiencia Concreta, transita por la Observación Reflexiva sobre lo vivido, genera Conceptualizaciones Abstractas y culmina en la Experimentación Activa probando hipótesis en nuevas situaciones.",
        explanationIncorrect: "Las opciones B, C y D carecen de sentido teórico y distorsionan el ciclo empírico de Kolb.",
        recommendation: "Diseñar secuencias didácticas andragógicas que garanticen el paso fluido por los cuatro cuadrantes del ciclo de Kolb."
    },
    {
        id: "aa-22",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Comprender la función del 'debriefing' o procesamiento reflexivo en actividades vivenciales.",
        themeCategory: "Debriefing en dinámicas experienciales",
        difficulty: "basica",
        cognitiveType: "aplicacion",
        question: "Tras realizar una simulación vivencial o dinámica de cuerdas en un taller de formación para adultos, ¿por qué la etapa de 'debriefing' (procesamiento reflexivo guiado) es la más crítica de todo el taller?",
        options: [
            "Porque es el momento en que se anuncia la hora del almuerzo y se entregan souvenirs.",
            "Porque la experiencia por sí sola no genera aprendizaje; es la reflexión guiada sobre lo ocurrido la que extrae aprendizajes, conecta con la teoría y permite proyectar cambios en la vida real.",
            "Porque permite al facilitador señalar con el dedo y burlarse de quienes se equivocaron en la dinámica.",
            "Porque es un requisito administrativo para justificar el cobro del salón de eventos."
        ],
        correctAnswer: 1,
        explanationCorrect: "Como afirmaba John Dewey, 'no aprendemos de la experiencia... aprendemos de reflexionar sobre la experiencia'. Sin un debriefing estructurado (¿Qué pasó? ¿Por qué pasó? ¿Qué aprendimos? ¿Cómo lo aplicamos en nuestro trabajo?), la actividad vivencial queda reducida a un simple juego recreativo sin transferencia.",
        explanationIncorrect: "La opción A reduce el taller a un evento social. La opción C destruye la seguridad psicológica grupal. La opción D desconoce el fundamento metodológico del procesamiento reflexivo.",
        recommendation: "Utilizar el modelo de debriefing de las tres preguntas de Sivasailam Thiagarajan (Thiagi): ¿Qué? (hechos), ¿Y qué? (significado) y ¿Ahora qué? (aplicación)."
    },
    {
        id: "aa-23",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Identificar las características del Estudio de Caso como método andragógico.",
        themeCategory: "Método del estudio de casos",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Qué caracteriza al 'Método del Caso' utilizado ampliamente en escuelas de negocios y formación andragógica avanzada?",
        options: [
            "La narración de una situación real compleja, con información incompleta y dilemas abiertos, donde no existe una respuesta única prefabricada y el grupo debe analizar, diagnosticar y tomar decisiones fundamentadas.",
            "Una prueba de 100 preguntas de opción múltiple con respuestas de una sola palabra.",
            "La lectura obligatoria de una novela romántica de ficción que no guarda ninguna relación con la profesión.",
            "El dictado pasivo de leyes por parte del profesor sin permitir ninguna intervención de los alumnos."
        ],
        correctAnswer: 0,
        explanationCorrect: "El método del caso sitúa a los adultos en los zapatos del tomador de decisiones real: exige análisis de datos, contraste de perspectivas divergentes, argumentación colegiada y toma de decisiones éticas y estratégicas en condiciones de incertidumbre.",
        explanationIncorrect: "La opción A describe una prueba objetiva cerrada. Las opciones C y D contradicen la metodología activa y dialógica del caso.",
        recommendation: "Estudiar la metodología de facilitación de casos de Harvard Business School (apertura, mapa de pizarrón, preguntas de empuje y síntesis)."
    },
    {
        id: "aa-24",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Analizar el uso del Juego de Roles (Role Playing) y la Simulación en la formación de adultos.",
        themeCategory: "Juego de roles y simulación conductual",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Al utilizar el 'Juego de Roles' para entrenar a líderes en 'Conversaciones Difíciles y Feedback Crítico', ¿qué condición metodológica evita que la dinámica se vuelva ridícula o superficial?",
        options: [
            "Permitir que actúen como personajes de dibujos animados sin ningún guión.",
            "Establecer roles realistas con objetivos e intereses en conflicto, asignar observadores con pautas precisas de evaluación conductual y realizar un debriefing riguroso inmediatamente después.",
            "Hacer que el juego dure cinco minutos sin dar ninguna retroalimentación posterior.",
            "Obligar a los participantes a actuar bajo hipnosis colectiva frente a una cámara de televisión."
        ],
        correctAnswer: 1,
        explanationCorrect: "El juego de roles formativo requiere encuadre profesional: diseño de casos verosímiles, roles con instrucciones claras, observadores activos con guías de registro de conductas observables y una sesión inmediata de retroalimentación reflexiva para consolidar el aprendizaje.",
        explanationIncorrect: "La opción A trivializa la herramienta. La opción C anula el valor formativo al omitir el feedback. La opción D es un absurdo pseudocientífico.",
        recommendation: "Diseñar hojas de observación estructuradas para los participantes que actúan como observadores durante las simulaciones."
    },
    {
        id: "aa-25",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Analizar la técnica del incidente crítico (Flanagan) en el aprendizaje experiencial.",
        themeCategory: "Técnica del incidente crítico de John Flanagan",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "En un taller de seguridad para pilotos de aviación o ingenieros de planta, el facilitador utiliza la 'Técnica del Incidente Crítico' (John Flanagan). ¿En qué consiste esta estrategia experiencial?",
        options: [
            "En analizar en profundidad acontecimientos reales imprevistos de falla o de éxito sobresaliente, diseccionando la cadena de decisiones, factores humanos y protocolos que desencadenaron el resultado.",
            "En provocar un accidente real intencionado en el avión para ver quién sobrevive.",
            "En inventar historias de fantasmas para asustar a los participantes durante la noche.",
            "En memorizar de memoria las matrículas de todos los aviones del país."
        ],
        correctAnswer: 0,
        explanationCorrect: "La técnica del incidente crítico examina eventos reales significativos (fallas graves, cuasi-accidentes o resoluciones heroicas) para descomponer qué conductas y decisiones específicas marcaron la diferencia entre el éxito y la catástrofe, generando aprendizajes profundos.",
        explanationIncorrect: "La opción B es una aberración criminal. Las opciones C y D carecen de sentido y utilidad pedagógica.",
        recommendation: "Aplicar el análisis de incidentes críticos para extraer lecciones aprendidas (After Action Review - AAR del ejército de EE.UU.)."
    },
    {
        id: "aa-26",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Analizar el papel del facilitador como mediador andragógico en dinámicas experienciales.",
        themeCategory: "El rol del facilitador andragógico",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "¿Cómo debe transformarse el comportamiento de un docente tradicional cuando asume el rol de facilitador andragógico en un taller vivencial?",
        options: [
            "Pasa de ser el 'sabio en el escenario' (sage on the stage) que monopoliza la palabra a ser un 'guía al costado' (guide on the side) que formula preguntas provocadoras, gestiona el tiempo y crea condiciones para que el grupo construya sus propias conclusiones.",
            "Abandona el salón de clases y se va a su casa a descansar mientras los alumnos juegan solos.",
            "Se sienta en una tarima alta con una campana para multar a quien hable sin permiso.",
            "Obliga a que todos los adultos repitan a coro sus opiniones personales en tono militar."
        ],
        correctAnswer: 0,
        explanationCorrect: "En la andragogía experiencial, el facilitador descentra su ego: modera la interacción, hace preguntas poderosas, valida saberes dispersos en la sala, cuida la seguridad psicológica y ayuda al grupo a conectar la experiencia vivida con marcos conceptuales sólidos.",
        explanationIncorrect: "La opción B describe negligencia y abandono. Las opciones C y D perpetúan modelos autoritarios incompatibles con la dignidad del aprendiz adulto.",
        recommendation: "Entrenar habilidades de facilitación avanzada: escucha activa, reformulación, preguntas poderosas y síntesis integradora."
    },
    {
        id: "aa-27",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Aplicar la metodología del 'World Café' para la deliberación andragógica de problemas complejos.",
        themeCategory: "World Café y diálogo generativo",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Una organización reúne a 60 líderes de diferentes países para co-diseñar su nueva estrategia de sostenibilidad. ¿Cómo se aplica la metodología experiencial del 'World Café' (Brown e Isaacs) en este escenario?",
        options: [
            "Haciendo que los 60 líderes escuchen a un orador durante 8 horas seguidas sin pausas.",
            "Organizando mesas redondas pequeñas con preguntas potentes, donde los participantes conversan en rondas sucesivas de 20 minutos rotando de mesa, mientras los 'anfitriones de mesa' retienen las ideas y polinizan los aprendizajes hacia una plenaria final colectiva.",
            "Sirviendo café caliente a todos y cancelando la reunión de trabajo inmediatamente.",
            "Obligando a los líderes a competir en un concurso de baile sobre las mesas."
        ],
        correctAnswer: 1,
        explanationCorrect: "El World Café es un proceso de diálogo andragógico generativo: genera una atmósfera distendida (tipo café), utiliza preguntas estratégicas y hace rotar a los participantes entre mesas para entrelazar perspectivas diversas, emergiendo la inteligencia colectiva sobre manteles de papel compartidos.",
        explanationIncorrect: "La opción A es el modelo magistral tradicional que silencia a los participantes. Las opciones C y D trivializan y desnaturalizan la metodología.",
        recommendation: "Consultar 'The World Café: Shaping Our Futures Through Conversations That Matter' de Juanita Brown y David Isaacs."
    },
    {
        id: "aa-28",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Aplicar el aprendizaje basado en la indagación apreciativa (Appreciative Inquiry).",
        themeCategory: "Indagación apreciativa de David Cooperrider",
        difficulty: "avanzada",
        cognitiveType: "aplicacion",
        question: "En un hospital con clima laboral deteriorado, el facilitador andragógico decide utilizar la 'Indagación Apreciativa' (David Cooperrider) en lugar del diagnóstico tradicional centrado exclusivamente en fallas y problemas. ¿Cuál es el punto de partida de esta intervención experiencial?",
        options: [
            "Investigar minuciosamente a quién despedir y publicar una lista de los empleados más antipáticos.",
            "Identificar y explorar el 'núcleo positivo': indagar en los momentos en que el hospital funcionó con máxima excelencia, compasión y trabajo en equipo (fase de Descubrimiento), para proyectar colectivamente ese potencial hacia el futuro (Sueño, Diseño y Destino).",
            "Negar la existencia de cualquier enfermedad en el hospital y prohibir el uso de medicamentos.",
            "Reemplazar a los médicos por actores de teatro cómico para hacer reír a los pacientes."
        ],
        correctAnswer: 1,
        explanationCorrect: "La Indagación Apreciativa (las 4D: Discovery, Dream, Design, Destiny) parte de la premisa de que las organizaciones crecen hacia lo que investigan con persistencia: en vez de obsesionarse con la patología y la culpa, investiga las fortalezas vivas y los momentos cumbre para apalancar la transformación positiva.",
        explanationIncorrect: "La opción A intensifica la cultura del miedo y el resentimiento. Las opciones C y D son disparates ajenos a la metodología organizacional.",
        recommendation: "Explorar la metodología de Indagación Apreciativa aplicada a la educación y al desarrollo organizacional."
    },
    {
        id: "aa-29",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Resolver problemas derivados de dinámicas vivenciales mal facilitadas o traumatizantes.",
        themeCategory: "Ética y seguridad psicológica en dinámicas experienciales",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "En un retiro corporativo, un facilitador inexperto somete a los empleados a una dinámica invasiva donde los fuerza a confesar traumas íntimos de su infancia frente a sus jefes directos, provocando ataques de pánico y crisis relacionales. Como director de desarrollo humano, ¿cuál es tu evaluación técnica y tu acción inmediata?",
        options: [
            "Felicitar al facilitador por haber 'destruido las armaduras' de los empleados con tanta valentía.",
            "Detener de inmediato la actividad, brindar contención psicológica a los afectados y desvincular al facilitador: transgredió la frontera entre formación andragógica profesional y terapia clínica invasiva, violando el principio de seguridad psicológica y consentimiento informado.",
            "Obligar a los jefes a descontar el sueldo de los colaboradores que hayan llorado durante la dinámica.",
            "Ignorar el hecho argumentando que todo vale en la capacitación moderna."
        ],
        correctAnswer: 1,
        explanationCorrect: "La formación experiencial andragógica NUNCA debe convertirse en terapia grupal no consentida ni en manipulación emocional forzada: el facilitador ético cuida celosamente los límites entre el desarrollo de competencias laborales y la intimidad psicológica del sujeto, asegurando siempre el 'derecho a pasar' (challenge by choice).",
        explanationIncorrect: "La opción A aplaude una negligencia profesional gravísima. Las opciones C y D constituyen abusos laborales y éticos inaceptables.",
        recommendation: "Adoptar códigos éticos estrictos en formación vivencial corporativa basados en el principio 'Challenge by Choice' (Karl Rohnke)."
    },
    {
        id: "aa-30",
        testId: "andragogia",
        dimensionId: "experienciales",
        dimensionName: "Estrategias Experienciales",
        competency: "Diseñar un laboratorio vivencial integrado de resolución de retos para adultos.",
        themeCategory: "Laboratorios de innovación y aprendizaje experiencial",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Una empresa manufacturera sufre continuas fallas en el lanzamiento de nuevos productos por falta de comunicación entre el área de Diseño y el área de Producción. Como especialista andragógico, diseñas un 'Laboratorio Vivencial de Co-Creación'. ¿Qué estructura metodológica garantiza resultados formativos y operativos tangibles?",
        options: [
            "Ponerlos a competir en un partido de fútbol para que el ganador imponga sus condiciones al perdedor.",
            "Diseñar un reto de prototipado rápido en equipos mixtos interdisciplinarios (Diseño + Producción), utilizando Design Thinking y metodologías ágiles, seguido de un análisis cruzado de factibilidad técnica y compromisos de trabajo cooperativo.",
            "Dictarles un seminario magistral de 40 horas sobre historia de la manufactura en el siglo XIX.",
            "Encerrar a los gerentes en una habitación sin agua ni luz hasta que firmen un memorando de paz."
        ],
        correctAnswer: 1,
        explanationCorrect: "El laboratorio experiencial andragógico aborda problemas reales mediante equipos mixtos que disuelven los silos organizacionales: trabajar hombro a hombro en un reto de prototipado rápido con Design Thinking genera empatía mutua, comprensión de las restricciones operativas del otro y soluciones aplicables de inmediato.",
        explanationIncorrect: "La opción A polariza el conflicto en una dinámica suma-cero. La opción C es pasiva e ineficaz para cambiar conductas operativas. La opción D es un trato inhumano ilegal.",
        recommendation: "Articular el aprendizaje experiencial de Kolb con el proceso de Design Thinking (Empatizar, Definir, Idear, Prototipar, Evaluar)."
    },

    // =========================================================================
    // DIMENSIÓN 4: TRANSFERENCIA Y APLICACIÓN (Preguntas 31 a 40)
    // =========================================================================
    {
        id: "aa-31",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Diferenciar la transferencia cercana de la transferencia lejana en la formación de adultos.",
        themeCategory: "Transferencia cercana vs lejana",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "En la psicología del aprendizaje en el trabajo (Baldwin y Ford), ¿cuál es la distinción fundamental entre 'transferencia cercana' y 'transferencia lejana'?",
        options: [
            "La cercana se refiere a capacitaciones que se dictan en la misma ciudad y la lejana a cursos en el extranjero.",
            "La transferencia cercana es la aplicación directa de procedimientos estandarizados en situaciones idénticas a las del aula; la lejana es la capacidad de aplicar principios y resolver problemas inéditos en contextos complejos y cambiantes.",
            "La transferencia cercana es obligatoria y la lejana está prohibida por la legislación laboral.",
            "No existe ninguna diferencia; son conceptos comerciales inventados para vender consultoría."
        ],
        correctAnswer: 1,
        explanationCorrect: "Transferencia cercana (near transfer) implica aplicar destrezas procedurales en condiciones idénticas a las aprendidas (ej: software específico). Transferencia lejana (far transfer) implica adaptabilidad cognitiva: generalizar principios profundos para resolver problemas nuevos y ambiguos en contextos diferentes.",
        explanationIncorrect: "La opción A confunde la distancia cognitiva con distancia geográfica física. Las opciones C y D carecen de fundamento teórico en modelos de transferencia de entrenamiento.",
        recommendation: "Consultar el modelo de transferencia del entrenamiento de Baldwin y Ford (1988) para diseñar estrategias según el tipo de transferencia deseada."
    },
    {
        id: "aa-32",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Identificar los cuatro niveles de evaluación del impacto de la capacitación de Donald Kirkpatrick.",
        themeCategory: "Modelo de cuatro niveles de Kirkpatrick",
        difficulty: "basica",
        cognitiveType: "conceptual",
        question: "¿Cuál es la secuencia jerárquica de los cuatro niveles del modelo de evaluación de la capacitación de Donald Kirkpatrick?",
        options: [
            "Nivel 1: Reacción -> Nivel 2: Aprendizaje -> Nivel 3: Comportamiento (Transferencia) -> Nivel 4: Resultados (Impacto en el negocio).",
            "Nivel 1: Dinero -> Nivel 2: Comida -> Nivel 3: Diploma -> Nivel 4: Despido.",
            "Nivel 1: Inscripción -> Nivel 2: Asistencia -> Nivel 3: Calificación -> Nivel 4: Graduación.",
            "Nivel 1: Memoria -> Nivel 2: Repetición -> Nivel 3: Examen -> Nivel 4: Olvido."
        ],
        correctAnswer: 0,
        explanationCorrect: "El modelo estándar de Kirkpatrick evalúa sucesivamente: 1. Reacción (satisfacción del participante), 2. Aprendizaje (adquisición de conocimientos y destrezas), 3. Comportamiento (transferencia al puesto de trabajo) y 4. Resultados (impacto medible en los indicadores clave de la organización: ventas, calidad, retención).",
        explanationIncorrect: "Las opciones B, C y D distorsionan el modelo universal de evaluación de la formación con listas informales o procesos administrativos.",
        recommendation: "Estudiar 'Evaluating Training Programs: The Four Levels' de Donald Kirkpatrick y James Kirkpatrick."
    },
    {
        id: "aa-33",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Comprender el modelo de desarrollo profesional 70-20-10.",
        themeCategory: "Modelo 70-20-10 de Morgan McCall y Michael Lombardo",
        difficulty: "basica",
        cognitiveType: "aplicacion",
        question: "El modelo de desarrollo de competencias 70-20-10 formulado por el Center for Creative Leadership propone que el aprendizaje profesional más efectivo proviene de:",
        options: [
            "70% de experiencia práctica en el trabajo real (proyectos y retos), 20% de aprendizaje social con otros (mentoría y retroalimentación) y 10% de cursos formales y lectura teórica.",
            "70% de horas sentado en clase magistral, 20% de exámenes escritos y 10% de recreo.",
            "70% de vacaciones remuneradas, 20% de teletrabajo y 10% de trabajo presencial.",
            "70% de multas salariales, 20% de advertencias verbales y 10% de cursos nocturnos."
        ],
        correctAnswer: 0,
        explanationCorrect: "El marco 70-20-10 (Lombardo y Eichinger) revolucionó el desarrollo organizacional: demuestra que la mayor parte del dominio se adquiere en el trabajo cotidiano (70%), complementado por la interacción con pares y mentores (20%) y sostenido por la instrucción formal estructurada (10%).",
        explanationIncorrect: "La opción B describe el modelo pedagógico escolar tradicional. Las opciones C y D son caricaturas sin relación con la arquitectura del talento.",
        recommendation: "Diseñar planes de desarrollo individual (PDI) que integren acciones en los tres componentes del 70-20-10."
    },
    {
        id: "aa-34",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Analizar el papel del 'clima de transferencia' en el entorno laboral.",
        themeCategory: "Clima de transferencia y apoyo organizacional",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Un empleado asiste a un excelente curso de innovación y regresa motivado para aplicar nuevas herramientas. Sin embargo, su jefe inmediato le dice con frialdad: 'Olvida lo que te enseñaron en ese curso, aquí las cosas se hacen como yo digo y no tenemos tiempo para experimentos'. Según la investigación en andragogía laboral, ¿qué fenómeno ocurrió?",
        options: [
            "Un bloqueo total de la transferencia por clima organizacional adverso y falta de apoyo de la supervisión directa, el principal destructor de la inversión en capacitación.",
            "Una exitosa consolidación del aprendizaje del colaborador a través de la humildad laboral.",
            "Un fenómeno paranormal provocado por el estrés magnético de las oficinas.",
            "La confirmación de que la capacitación fue defectuosa y el facilitador debe ser encarcelado."
        ],
        correctAnswer: 0,
        explanationCorrect: "Numerosas investigaciones (Rouiller y Goldstein, Holton) demuestran que el factor más determinante para que la capacitación se transfiera al puesto no es el curso en sí, sino el 'clima de transferencia': el apoyo del supervisor inmediato, la oportunidad de practicar y la retroalimentación positiva en el trabajo.",
        explanationIncorrect: "La opción B disfraza el boicot del jefe de 'humildad'. Las opciones C y D desvían la responsabilidad real hacia factores absurdos.",
        recommendation: "Involucrar activamente a los jefes directos antes, durante y después de los programas de capacitación (alineación de expectativas y planes de aplicación)."
    },
    {
        id: "aa-35",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Diseñar planes de acción post-capacitación (Action Planning) para asegurar transferencia.",
        themeCategory: "Planes de acción post-curso",
        difficulty: "intermedia",
        cognitiveType: "analisis",
        question: "Al cierre de un taller andragógico corporativo, el facilitador destina la última hora a que cada participante redacte un 'Plan de Acción y Aplicación Inmediata'. ¿Qué elementos debe incluir este plan para maximizar su efectividad práctica?",
        options: [
            "Metas SMART precisas, conductas observables a implementar en los primeros 30 días, recursos requeridos, posibles obstáculos previstos con planes de contingencia y fecha de revisión con su supervisor.",
            "Una declaración de amor eterno a la empresa redactada en poesía clásica sin fechas ni metas.",
            "La lista de los nombres de todos los compañeros del curso ordenados alfabéticamente.",
            "El compromiso de no volver a hablar del tema del taller durante el resto de su vida laboral."
        ],
        correctAnswer: 0,
        explanationCorrect: "El Action Planning andragógico transforma la inspiración teórica en compromiso conductual concreto: metas SMART, plazos definidos, anticipación de barreras (Implementation Intentions de Peter Gollwitzer) y mecanismos de rendición de cuentas (accountability) con el líder directo.",
        explanationIncorrect: "Las opciones B, C y D carecen de rigor operativo y no constituyen planes de transferencia profesional.",
        recommendation: "Implementar sesiones de seguimiento a los 30 y 60 días para evaluar el grado de cumplimiento de los Planes de Acción."
    },
    {
        id: "aa-36",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Diferenciar las intervenciones de Coaching, Mentoring y Capacitación formal.",
        themeCategory: "Coaching vs Mentoring vs Capacitación",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "En una estrategia integral de desarrollo andragógico del talento, ¿cómo se diferencian con precisión las figuras de Capacitación, Mentoring y Coaching?",
        options: [
            "Capacitación enseña competencias estructuradas; Mentoring es una relación a largo plazo donde un profesional con mayor experiencia guía y aconseja la carrera de otro; y Coaching es un proceso dialógico no directivo donde el coach acompaña al coachee a potenciar sus propios recursos y alcanzar sus metas mediante preguntas poderosas.",
            "Son tres palabras en inglés inventadas para nombrar exactamente lo mismo: despedir empleados sin pagar liquidación.",
            "El Coaching es solo para deportes olímpicos, el Mentoring para filósofos griegos y la Capacitación para niños de kínder.",
            "El mentor es un juez penal, el coach es un policía y el facilitador es un enfermero."
        ],
        correctAnswer: 0,
        explanationCorrect: "Cada intervención tiene un propósito y metodología distinta: la capacitación transmite y entrena competencias; el mentoring transfiere sabiduría organizacional y guía de carrera basada en la experiencia vivida; y el coaching (según la ICF) es un proceso de acompañamiento reflexivo y no directivo orientado a metas del propio cliente.",
        explanationIncorrect: "Las opciones B, C y D evidencian confusión conceptual extrema y desinformación sobre las disciplinas del desarrollo humano.",
        recommendation: "Integrar programas de capacitación formal con fases posteriores de coaching de aplicación y mentoring de carrera."
    },
    {
        id: "aa-37",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Calcular y analizar el Retorno de Inversión (ROI) de la capacitación según Jack Phillips.",
        themeCategory: "Cálculo del ROI en capacitación (Jack Phillips Nivel 5)",
        difficulty: "intermedia",
        cognitiveType: "aplicacion",
        question: "Jack Phillips amplió el modelo de Kirkpatrick añadiendo el Nivel 5: Retorno de Inversión (ROI). Si un programa de capacitación en optimización de procesos costó $20.000 USD y generó ahorros netos auditados de $60.000 USD en el primer año (beneficio neto = $60.000 - $20.000 = $40.000 USD), ¿cuál es el porcentaje de ROI obtenido?",
        options: [
            "ROI = (Beneficios Netos / Costos del Programa) x 100 = ($40.000 / $20.000) x 100 = 200%.",
            "ROI = 0% porque la capacitación nunca genera beneficios económicos tangibles.",
            "ROI = 10.000% porque cualquier capacitación multiplica el dinero por cien mágicamente.",
            "ROI = -50% porque se gastaron veinte mil dólares que nunca volverán."
        ],
        correctAnswer: 0,
        explanationCorrect: "La fórmula estándar de Jack Phillips para el ROI es: [(Beneficios Netos del Programa) / (Costos Totales del Programa)] x 100. En este caso: ($40.000 / $20.000) x 100 = 200%. Esto significa que por cada dólar invertido en la capacitación, la organización recuperó el dólar y obtuvo $2 dólares adicionales de ganancia neta.",
        explanationIncorrect: "La opción B desconoce la métrica financiera del talento. Las opciones C y D realizan cálculos erróneos o niegan la rentabilidad de la formación.",
        recommendation: "Estudiar 'Return on Investment in Training and Performance Improvement Programs' de Jack J. Phillips."
    },
    {
        id: "aa-38",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Diseñar el acompañamiento andragógico en el puesto de trabajo (On-the-Job Training estructurado).",
        themeCategory: "Entrenamiento estructurado en el puesto de trabajo (OJT)",
        difficulty: "intermedia",
        cognitiveType: "problema",
        question: "En una planta siderúrgica, los operarios novatos aprendían mirando de manera informal a veteranos que no explicaban nada y tenían vicios de seguridad. La dirección decide profesionalizar el proceso mediante un 'Entrenamiento en el Puesto de Trabajo Estructurado' (S-OJT). ¿Cuál es la secuencia metodológica correcta que deben seguir los tutores de campo?",
        options: [
            "1. Yo hago, tú miras (demostración con explicación) -> 2. Hacemos juntos (práctica guiada) -> 3. Tú haces, yo miro (práctica supervisada con feedback) -> 4. Tú haces solo (autonomía y seguimiento).",
            "1. Dejar al novato solo en el alto horno el primer día sin casco -> 2. Regañarlo si se quema -> 3. Despedirlo -> 4. Contratar a otro.",
            "1. Obligarlo a leer el manual en una bodega cerrada durante 6 meses sin tocar ninguna máquina.",
            "1. Pagarle el sueldo sin que asista a la planta siderúrgica jamás."
        ],
        correctAnswer: 0,
        explanationCorrect: "El modelo clásico de 4 pasos del S-OJT (Structured On-the-Job Training de Ronald Jacobs / método TWI): Explicar y Demostrar (Modelado), Ejecutar juntos con apoyo (Andamiaje), Ejecutar solo bajo observación con retroalimentación (Evaluación formativa) y Habilitación autónoma con seguimiento periódico.",
        explanationIncorrect: "La opción B es una negligencia criminal que viola la seguridad industrial. La opción C aísla la teoría de la práctica real. La opción D fomenta el absentismo laboral.",
        recommendation: "Consultar 'Structured On-the-Job Training: Unleashing Employee Expertise in the Workplace' de Ronald L. Jacobs."
    },
    {
        id: "aa-39",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Resolver problemas de dispersión o pérdida del impacto formativo en el tiempo.",
        themeCategory: "Sostenibilidad del aprendizaje y curva del olvido",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "Hermann Ebbinghaus formuló la 'Curva del Olvido', que demuestra que los adultos olvidan hasta el 75% de la información no reforzada en menos de seis días. Para evitar este efecto tras un curso corporativo estratégico, ¿qué arquitectura andragógica de refuerzo debe implementarse?",
        options: [
            "Obligar a los colaboradores a repetir todo el curso de 40 horas todas las semanas durante diez años.",
            "Implementar un sistema de 'Repetición Espaciada y Recuperación Activa' (Spaced Repetition & Retrieval Practice): enviar microdesafíos, escenarios breves de decisión y preguntas de refuerzo por app móvil a los 3, 7, 14 y 30 días posteriores al curso.",
            "Asumir que el olvido es una ley ineludible y no hacer ningún esfuerzo de seguimiento.",
            "Sancionar a los empleados que no recuerden todas las diapositivas de memoria un año después."
        ],
        correctAnswer: 1,
        explanationCorrect: "La ciencia cognitiva del aprendizaje (Roediger y Karpicke, Brown, Roediger & McDaniel 'Make It Stick') demuestra que la recuperación activa espaciada en el tiempo (retrieval practice) interrumpe la curva del olvido, consolidando las huellas de memoria a largo plazo y facilitando la transferencia duradera.",
        explanationIncorrect: "La opción A es económicamente inviable y produce rechazo. La opción C es una postura derrotista. La opción D es un castigo injustificado que desconoce la fisiología de la memoria.",
        recommendation: "Diseñar 'campañas de refuerzo continuo' (booster campaigns) con microretos distribuidos en las semanas posteriores a la formación."
    },
    {
        id: "aa-40",
        testId: "andragogia",
        dimensionId: "transferencia",
        dimensionName: "Transferencia y Aplicación",
        competency: "Construir indicadores de gestión del aprendizaje articulados con el negocio (Learning Analytics).",
        themeCategory: "Métricas de aprendizaje y analítica del talento",
        difficulty: "avanzada",
        cognitiveType: "problema",
        question: "La gerencia general de una corporación exige al director de formación: 'Quiero ver métricas reales del valor de la capacitación, no solo la típica encuesta de satisfacción de si les gustó el refrigerio'. ¿Qué tablero de indicadores clave (KPIs andragógicos) debe presentar el director?",
        options: [
            "1. Tasa de transferencia efectiva al puesto (Nivel 3 auditado) -> 2. Impacto en KPIs operativos del área (reducción de errores, incremento de ventas o tiempos de ciclo) -> 3. Retorno de Inversión (ROI) -> 4. Tasa de retención del talento clave capacitado.",
            "Únicamente el número de sándwiches y cafés consumidos durante los eventos del año.",
            "La lista de los chistes que más risa causaron en los talleres presenciales.",
            "El número de veces que el facilitador dijo la palabra 'capacitación' durante sus ponencias."
        ],
        correctAnswer: 0,
        explanationCorrect: "Los líderes organizacionales demandan analítica de valor (Kirkpatrick 3 y 4, Phillips 5): indicadores de desempeño en el puesto, métricas de productividad/calidad antes y después de la intervención, retorno económico auditado y correlación con la retención del talento crítico.",
        explanationIncorrect: "Las opciones B, C y D presentan datos banales o absurdos que descalifican la función estratégica de la formación en las organizaciones.",
        recommendation: "Construir Dashboards de Learning Analytics vinculando datos del LMS/evaluación con los indicadores de desempeño operativo (ERP / CRM) de la organización."
    }
];
