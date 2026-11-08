// --- PSICOEDUCA ACADEMY: Sistema de Usuarios, Registro y Persistencia en LocalStorage ---
const getUsersDB = () => {
    return JSON.parse(localStorage.getItem('psicoeduca_users_db')) || {};
};

const saveUsersDB = (db) => {
    localStorage.setItem('psicoeduca_users_db', JSON.stringify(db));
};

const getAccessLogs = () => {
    return JSON.parse(localStorage.getItem('psicoeduca_access_logs')) || [];
};

const addAccessLog = (userName, userKey) => {
    const logs = getAccessLogs();
    const nowStr = new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
    logs.unshift({
        userName: userName,
        userKey: userKey,
        date: nowStr,
        timestamp: Date.now()
    });
    if (logs.length > 100) logs.pop();
    localStorage.setItem('psicoeduca_access_logs', JSON.stringify(logs));
};

const defaultState = {
    userName: "Estudiante",
    userObjective: "Mejorar como docente",
    avatarGender: "male",
    xp: 0,
    testsCompleted: 0,
    videosWatched: 0,
    level: "Explorador",
    notificationsRead: false,
    diagnosticResults: [],
    unlockedBadges: ['comunicacion'],
    routesCompleted: [],
    initialDiagnosticResult: null,
    firstLogin: null,
    lastLogin: null
};

let activeUserKey = localStorage.getItem('psicoeduca_active_user') || 'estudiante';
let usersDB = getUsersDB();
if (!usersDB[activeUserKey]) {
    usersDB[activeUserKey] = {
        ...defaultState,
        userName: "Estudiante",
        avatarGender: "male",
        firstLogin: Date.now(),
        lastLogin: Date.now()
    };
    saveUsersDB(usersDB);
}
let gameState = usersDB[activeUserKey];
if (!gameState.avatarGender) {
    gameState.avatarGender = 'male';
}

const saveGameState = () => {
    if (activeUserKey) {
        usersDB = getUsersDB();
        usersDB[activeUserKey] = gameState;
        saveUsersDB(usersDB);
    }
    localStorage.setItem('psicoeduca_save', JSON.stringify(gameState));
};

const now = new Date().getTime();
let motivationalMessage = "¡Bienvenido a Psicoeduca Academy!";
let motivationalSubtitle = "Aprende para enseñar, liderar y crecer en un entorno educativo, profesional y humano.";

const updateMotivation = () => {
    if (!gameState.firstLogin) {
        gameState.firstLogin = now;
        gameState.lastLogin = now;
        motivationalMessage = `¡Bienvenido a Psicoeduca Academy, ${gameState.userName}!`;
        motivationalSubtitle = "Tu espacio para desarrollar competencias educativas, profesionales y humanas.";
        saveGameState();
    } else {
        const daysSinceLastLogin = Math.floor((now - (gameState.lastLogin || now)) / (1000 * 60 * 60 * 24));
        gameState.lastLogin = now;
        saveGameState();

        if (daysSinceLastLogin === 0) {
            motivationalMessage = `¡Qué bueno verte de nuevo hoy, ${gameState.userName}!`;
            motivationalSubtitle = "Tu constancia impulsa tu crecimiento constante. ¡Sigue avanzando en tus rutas!";
        } else if (daysSinceLastLogin < 7) {
            motivationalMessage = `¡Hola ${gameState.userName}! De vuelta a tu academia.`;
            motivationalSubtitle = `Han pasado ${daysSinceLastLogin} días desde tu última sesión. Tienes rutas y simuladores esperándote.`;
        } else {
            motivationalMessage = `¡Te hemos extrañado, ${gameState.userName}!`;
            motivationalSubtitle = `Han pasado ${daysSinceLastLogin} días sin verte. Descubre los nuevos recursos y evaluaciones de desarrollo.`;
        }
    }
};

updateMotivation();

window.simulateDaysPassed = (days) => {
    gameState.lastLogin = now - (days * 24 * 60 * 60 * 1000);
    saveGameState();
    location.reload();
};

// --- Gamificación: 6 Niveles Principales ---
const gamificationLevels = [
    { name: "Explorador", xp: 0, seed: "Explorador", desc: "Inicio de tu viaje en Psicoeduca Academy." },
    { name: "Aprendiz", xp: 500, seed: "Aprendiz", desc: "Desarrollas activamente tus primeras competencias." },
    { name: "Practicante", xp: 1500, seed: "Practicante", desc: "Aplicas lo aprendido en casos y simulaciones." },
    { name: "Profesional", xp: 3000, seed: "Profesional", desc: "Dominas herramientas educativas y laborales." },
    { name: "Especialista", xp: 6000, seed: "Especialista", desc: "Referente en tu área de desarrollo." },
    { name: "Mentor", xp: 10000, seed: "Mentor", desc: "Guías a otros educadores y profesionales." }
];

// --- Insignias de Desarrollo y Medallas de Evaluación ---
const badgesData = [
    { id: 'comunicacion', name: "Comunicación efectiva", icon: "ph-chats-teardrop", desc: "Dominas la expresión asertiva y la escucha activa." },
    { id: 'facilitador', name: "Facilitador", icon: "ph-chalkboard-teacher", desc: "Lideras experiencias formativas de alto impacto." },
    { id: 'lider', name: "Líder", icon: "ph-crown", desc: "Inspiras y acompañas equipos hacia objetivos comunes." },
    { id: 'diseno_instruccional', name: "Diseñador instruccional", icon: "ph-compass-rose", desc: "Estructuras secuencias LXD eficientes." },
    { id: 'neuroeducador', name: "Neuroeducador", icon: "ph-brain", desc: "Aplicas principios de neurociencia y DUA en el aula." },
    { id: 'orientador', name: "Orientador laboral", icon: "ph-briefcase", desc: "Guías planes de carrera y empleabilidad." },
    { id: 'trabajo_equipo', name: "Trabajo en equipo", icon: "ph-users-three", desc: "Construyes sinergia y colaboración." },
    { id: 'resolucion_conflictos', name: "Resolución de conflictos", icon: "ph-scales", desc: "Medias con éxito situaciones difíciles." },
    // Medallas de los Cuatro Instrumentos de Evaluación
    { id: 'maestro_evaluacion', name: "Maestro de la Evaluación", icon: "ph-pencil-line", desc: "Aprobaste la evaluación de Evaluación Formativa con 80 puntos o más." },
    { id: 'arquitecto_aprendizaje', name: "Arquitecto del Aprendizaje", icon: "ph-books", desc: "Aprobaste la evaluación de Fundamentos de Pedagogía con 80 puntos o más." },
    { id: 'mentor_aprendizaje', name: "Mentor del Aprendizaje", icon: "ph-users-four", desc: "Aprobaste la evaluación de Andragogía Avanzada con 80 puntos o más." },
    { id: 'estratega_didactico', name: "Estratega Didáctico", icon: "ph-presentation-chart", desc: "Aprobaste la evaluación de Didáctica Práctica con 80 puntos o más." },
    // Logros Especiales
    { id: 'primer_paso_pedagogico', name: "Primer Paso Pedagógico", icon: "ph-footprints", desc: "Completaste tu primer instrumento de evaluación interactivo." },
    { id: 'dominio_integral', name: "Dominio Pedagógico Integral", icon: "ph-trophy", desc: "Aprobaste los cuatro instrumentos de evaluación docente con 80+ puntos." },
    { id: 'excelencia_pedagogica', name: "Excelencia Pedagógica", icon: "ph-medal", desc: "Alcanzaste nivel Avanzado (90+ puntos) en todos los instrumentos." }
];

// --- 5 Rutas de Aprendizaje ---
const routesData = {
    formador: {
        id: 'formador',
        title: "Ruta: Formador Organizacional & Train the Trainer",
        category: "Formación",
        level: "Intermedio / Avanzado",
        duration: "18 horas",
        xp: 1200,
        modulesCount: 6,
        modality: "Teórico-Práctica",
        status: "Disponible",
        desc: "Aprende a diagnosticar necesidades, diseñar talleres empresariales y facilitar experiencias formativas de alto impacto para adultos.",
        steps: [
            { num: "Nivel 1", title: "Fundamentos de Formación & Andragogía", desc: "Aprendizaje de adultos y diagnóstico de necesidades de capacitación." },
            { num: "Nivel 2", title: "Diseño Instruccional & Metodologías Activas", desc: "Estructuración LXD, actividades prácticas y evaluación de impacto." },
            { num: "Nivel 3", title: "Facilitación, Manejo de Grupos & Feedback", desc: "Oratoria, tono vocal, gestión de participantes difíciles y retroalimentación." },
            { num: "Proyecto Final", title: "Diseña una Experiencia Formativa Completa", desc: "Entrega un programa de capacitación listo para implementar." }
        ]
    },
    docente_innovador: {
        id: 'docente_innovador',
        title: "Ruta: Docente Innovador & Diseño Inclusivo DUA",
        category: "Docencia",
        level: "Todos los niveles",
        duration: "15 horas",
        xp: 1000,
        modulesCount: 5,
        modality: "Inmersiva",
        status: "Disponible",
        desc: "Transforma tu aula con neuroeducación, Diseño Universal para el Aprendizaje (DUA), creación interactiva en Canva e Inteligencia Artificial.",
        steps: [
            { num: "Nivel 1", title: "Neuroeducación & Principios DUA", desc: "Derriba el mito del promedio y diseña para la diversidad cognitiva." },
            { num: "Nivel 2", title: "Diseño de Clases & Recursos Visuales con Canva", desc: "Crea infografías y materiales atractivos en minutos." },
            { num: "Nivel 3", title: "Tecnología Educativa & IA en el Aula", desc: "Integra herramientas interactivas, TikTok pedagógico y asistentes de IA." },
            { num: "Proyecto Final", title: "Plan de Clase Inclusivo 360", desc: "Construye una unidad didáctica DUA completa con evaluación formativa." }
        ]
    },
    liderazgo: {
        id: 'liderazgo',
        title: "Ruta: Liderazgo, Feedback & Desarrollo de Personas",
        category: "Liderazgo",
        level: "Líderes & Directivos",
        duration: "12 horas",
        xp: 1500,
        modulesCount: 4,
        modality: "Simulación",
        status: "Disponible",
        desc: "Desarrolla competencias para guiar equipos, entregar feedback efectivo, delegar con confianza y gestionar conversaciones difíciles.",
        steps: [
            { num: "Nivel 1", title: "Estilos de Liderazgo & Delegación", desc: "De la supervisión al acompañamiento estratégico de personas." },
            { num: "Nivel 2", title: "Feedback Constructivo & Gestión del Desempeño", desc: "Entrega retroalimentación orientada al crecimiento sin generar defensiva." },
            { num: "Nivel 3", title: "Conversaciones Difíciles & Conflicto Laboral", desc: "Simulación de escenarios críticos y mediación de acuerdos." },
            { num: "Proyecto Final", title: "Plan de Acompañamiento a Colaboradores", desc: "Estructura un mapa de desarrollo 1:1 para tu equipo." }
        ]
    },
    empleabilidad: {
        id: 'empleabilidad',
        title: "Ruta: Empleabilidad, CV & Marca Personal",
        category: "Empleabilidad",
        level: "Desarrollo Laboral",
        duration: "10 horas",
        xp: 900,
        modulesCount: 4,
        modality: "Práctica",
        status: "Disponible",
        desc: "Prepara tu perfil profesional, supera entrevistas laborales desafiantes y construye un plan de carrera sólido.",
        steps: [
            { num: "Nivel 1", title: "Diagnóstico de Perfil & Marca Personal", desc: "Identifica tus competencias clave y propuesta de valor profesional." },
            { num: "Nivel 2", title: "Construcción de CV & Estrategia en LinkedIn", desc: "Diseño de currículum optimizado para sistemas de selección." },
            { num: "Nivel 3", title: "Simulación de Entrevista Laboral", desc: "Practica respuestas efectivas ante reclutadores e imprevistos." },
            { num: "Proyecto Final", title: "Plan de Empleabilidad 360", desc: "Hoja de ruta estratégica para acceder a tu siguiente rol deseado." }
        ]
    },
    habilidades_sociales: {
        id: 'habilidades_sociales',
        title: "Ruta: Habilidades Sociales & Relaciones Laborales",
        category: "Habilidades Sociales",
        level: "Todos los niveles",
        duration: "8 horas",
        xp: 800,
        modulesCount: 4,
        modality: "Interactiva",
        status: "Disponible",
        desc: "Potencia tu inteligencia emocional, asertividad en la comunicación, trabajo en equipo y resolución de conflictos interpersonales.",
        steps: [
            { num: "Nivel 1", title: "Comunicación Asertiva & Escucha Activa", desc: "Expresa tus ideas con firmeza, respeto y claridad." },
            { num: "Nivel 2", title: "Inteligencia Emocional & Empatía", desc: "Gestión de emociones en momentos de alta exigencia." },
            { num: "Nivel 3", title: "Resolución de Conflictos Interpersonales", desc: "Técnicas de desescalamiento y negociación win-win." },
            { num: "Proyecto Final", title: "Matriz de Comunicación Relacional", desc: "Autoevaluación y plan de mejora de interacciones de equipo." }
        ]
    }
};

// --- Laboratorio Psicoeduca (Simuladores y Casos Prácticos) ---
const laboratorioData = {
    sim_entrevista: {
        id: 'sim_entrevista',
        title: "Simulador de Entrevista Laboral",
        category: "Empleabilidad",
        competencia: "Empleabilidad & Comunicación",
        objetivo: "Responder con aplomo, claridad y propuesta de valor a preguntas complejas de reclutadores.",
        situacion: "Un entrevistador te pide justificar una brecha laboral o una situación de conflicto en tu trabajo anterior.",
        url: "modules/voz_en_escena.html",
        icon: "ph-microphone-stage"
    },
    sim_feedback: {
        id: 'sim_feedback',
        title: "Simulador de Feedback Constructivo",
        category: "Liderazgo",
        competencia: "Liderazgo & Gestión del Desempeño",
        objetivo: "Entregar retroalimentación basada en evidencias objetivas sin activar defensividad en el colaborador.",
        situacion: "Un miembro clave del equipo ha disminuido su nivel de entregables en el último mes.",
        url: "modules/sales_experience.html",
        icon: "ph-chat-circle-dots"
    },
    sim_conversacion: {
        id: 'sim_conversacion',
        title: "Simulador de Conversación Difícil",
        category: "Habilidades Sociales",
        competencia: "Asertividad & Resolución de Conflictos",
        objetivo: "Modular el tono vocal, mantener serenidad y lograr acuerdos en situaciones de tensión interpersonal.",
        situacion: "Negociación de límites de trabajo y redistribución de cargas laborales complejas.",
        url: "modules/voz_en_escena.html",
        icon: "ph-chats"
    },
    caso_liderazgo: {
        id: 'caso_liderazgo',
        title: "Caso Práctico: Liderazgo y Delegación",
        category: "Liderazgo",
        competencia: "Toma de Decisiones & Delegación",
        objetivo: "Identificar estilos de liderazgo y asignar tareas estratégicas según el nivel de madurez del colaborador.",
        situacion: "Debes lanzar un proyecto urgente en 48 horas coordinando 3 perfiles con distintas prioridades.",
        url: "modules/sales_360_game.html",
        icon: "ph-crown"
    },
    caso_conflicto: {
        id: 'caso_conflicto',
        title: "Caso: Mediación de Conflicto Laboral",
        category: "Relaciones Laborales",
        competencia: "Mediación & Inteligencia Emocional",
        objetivo: "Desescalar roces entre dos áreas interdependientes y establecer acuerdos operativos claros.",
        situacion: "Conflicto de responsabilidades entre el área de formación y la dirección operacional.",
        url: "modules/sales_experience.html",
        icon: "ph-scales"
    },
    diseno_clase: {
        id: 'diseno_clase',
        title: "Laboratorio: Diseño de Clase Inclusiva DUA",
        category: "Docencia",
        competencia: "Pedagogía & Diseño DUA",
        objetivo: "Estructurar recursos interactivos y presentaciones multimodales con Canva para aulas diversas.",
        situacion: "Crear una lección adaptada para estudiantes con diferentes canales de percepción.",
        url: "modules/curso_canva_educacion.html",
        icon: "ph-palette"
    },
    diseno_capacitacion: {
        id: 'diseno_capacitacion',
        title: "Laboratorio: Diseño Instruccional de Talleres",
        category: "Formación",
        competencia: "Diseño Instruccional & Andragogía",
        objetivo: "Planificar una experiencia formativa empresarial de 4 horas con metodologías activas.",
        situacion: "Estructurar la secuencia de un programa Train the Trainer para supervisores.",
        url: "modules/curso_canva_educacion.html",
        icon: "ph-compass-rose"
    },
    oratoria_escena: {
        id: 'oratoria_escena',
        title: "Role Play: Oratoria y Modulación Vocal",
        category: "Formación",
        competencia: "Facilitación & Tono Vocal",
        objetivo: "Captar atención, proyectar voz y dominar silencios pedagógicos ante grandes audiencias.",
        situacion: "Apertura inmersiva para un curso corporativo con audiencia desmotivada.",
        url: "modules/voz_en_escena.html",
        icon: "ph-waveform"
    }
};

// --- Biblioteca Psicoeduca (Recursos Filtrables) ---
const libraryData = [
    { title: "Guía Práctica: Principios de Andragogía para Formadores", type: "Guía", topic: "Formación", icon: "ph-file-text", desc: "Manual para estructurar talleres interactivos dirigidos a adultos." },
    { title: "Plantilla: Diseño de Sesión de Clase DUA Inclusiva", type: "Plantilla", topic: "Educación", icon: "ph-layout", desc: "Formato editable para planificar lecciones con multirrepresentación." },
    { title: "Infografía: Los 5 Escalones del Feedback Efectivo", type: "Infografía", topic: "Liderazgo", icon: "ph-image", desc: "Esquema visual para entregar retroalimentación en reuniones 1:1." },
    { title: "Herramienta: Checklist de Preparación para Entrevistas", type: "Herramienta", topic: "Empleabilidad", icon: "ph-check-square", desc: "Lista de verificación antes de tu entrevista laboral." },
    { title: "Caso de Estudio: Mediación de Conflictos en Equipos Remotos", type: "Caso", topic: "Habilidades sociales", icon: "ph-briefcase", desc: "Análisis de caso sobre resolución de fricciones en entornos híbridos." },
    { title: "Video Masterclass: Inteligencia Emocional en el Trabajo", type: "Video", topic: "Psicología", icon: "ph-video", desc: "Estrategias de autorregulación emocional ante la presión profesional." }
];

// --- Cursos Existentes Reorganizados ---
const coursesData = {
    lxd: {
        id: 'lxd',
        title: "Diseño de Experiencias de Aprendizaje (LXD)",
        desc: "Aprende a centrar tu enseñanza en la experiencia del estudiante usando metodologías de diseño y empatía.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
        progress: 0,
        category: "Formación",
        modules: [
            { id: 1, title: "1. Fundamentos de LXD y Carga Cognitiva", videoUrl: "https://www.youtube.com/embed/f20-u7mP-g0", content: "<b>El Diseño de Experiencias de Aprendizaje (LXD)</b> integra principios de UX con la neurociencia del aprendizaje.", completed: false },
            { id: 2, title: "2. Mapeo del Viaje del Estudiante", videoUrl: "https://www.youtube.com/embed/b-60jY9_cK8", content: "Entiende el 'Learner Journey' antes de diseñar tus diapositivas.", completed: false },
            { id: 3, title: "3. Diseño de Interacciones Significativas", videoUrl: "https://www.youtube.com/embed/Hz3p5sYt3eE", content: "La pasividad es el enemigo del aprendizaje moderno.", completed: false }
        ]
    },
    canva: {
        id: 'canva',
        title: "Creación de Contenido con Canva",
        desc: "Aprende a diseñar, producir y publicar tu propio contenido interactivo paso a paso.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
        progress: 0,
        category: "Docencia",
        isExternal: true,
        url: "modules/curso_canva_educacion.html",
        modules: []
    },
    dua: {
        id: 'dua',
        title: "Masterclass: Diseño Universal para el Aprendizaje (DUA)",
        desc: "Transforma tu aula o taller en un entorno 100% inclusivo aplicando neuroeducación.",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
        progress: 0,
        category: "Docencia",
        modules: [
            { id: 1, title: "1. Introducción al DUA y el Mito del Promedio", videoUrl: "", content: "<b>No existe el estudiante promedio.</b> Descubre las redes neuronales de aprendizaje.", completed: false },
            { id: 2, title: "2. Principio 1: Compromiso (Engagement)", videoUrl: "", content: "El porqué del aprendizaje. Motiva ofreciendo autonomía y relevancia.", completed: false }
        ]
    },
    miniserie: {
        id: 'miniserie',
        title: "Guía: TikTok y el Microaprendizaje",
        desc: "Descubre el potencial pedagógico del microaprendizaje sin necesidad de grabar videos.",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80",
        progress: 0,
        category: "Docencia",
        isExternal: true,
        url: "modules/miniserie_tiktok_educacion.html",
        modules: []
    }
};

const testsData = {
    formativa: { title: "Evaluación Formativa", icon: "ph-pencil-line", desc: "Domina las técnicas de evaluación continua.", category: "Competencias pedagógicas", locked: false, questions: [ { q: "¿Cuál es el propósito principal de la evaluación formativa?", options: ["Clasificar alumnos", "Mejorar el aprendizaje durante el proceso", "Asignar nota", "Castigar errores"], answer: 1 } ] },
    pedagogia: { title: "Fundamentos de Pedagogía", icon: "ph-books", desc: "Principios básicos del proceso educativo.", category: "Conocimientos", locked: false, questions: [ { q: "¿Quién es considerado el padre de la pedagogía moderna?", options: ["Dewey", "Piaget", "Jan Amos Comenius", "Vygotsky"], answer: 2 } ] },
    andragogia: { title: "Andragogía Avanzada", icon: "ph-users-four", desc: "Estrategias para la educación de adultos.", category: "Perfil profesional", locked: false, questions: [ { q: "Los adultos aprenden mejor cuando...", options: ["Se les impone", "El aprendizaje tiene relevancia inmediata", "Hay repetición", "Están aislados"], answer: 1 } ] },
    didactica: { title: "Didáctica Práctica", icon: "ph-presentation-chart", desc: "El arte de enseñar: métodos y técnicas.", category: "Competencias pedagógicas", locked: false, questions: [ { q: "¿Qué es la transposición didáctica?", options: ["Evaluación", "Adaptar el saber académico al saber enseñado", "Castigo", "Copiar texto"], answer: 1 } ] }
};

// --- Diagnósticos Situacionales Avanzados (Data) ---
const constructivistData = [
    {
        q: "Al iniciar un nuevo módulo de formación, ¿qué acción priorizas?",
        options: [
            { text: "Explicar el temario y los objetivos detalladamente.", points: 0 },
            { text: "Hacer algunas preguntas generales para ver si conocen el tema.", points: 1 },
            { text: "Hacer una encuesta rápida o lluvia de ideas guiada.", points: 2 },
            { text: "Presentar un caso o problema de la vida real y pedir que intenten resolverlo.", points: 3 }
        ]
    },
    {
        q: "Tus estudiantes no logran comprender un concepto complejo. ¿Cómo reaccionas?",
        options: [
            { text: "Repito la explicación más despacio y con otras palabras.", points: 0 },
            { text: "Les pido que me digan qué parte no entendieron para explicarla de nuevo.", points: 1 },
            { text: "Busco un video, analogía o ejemplo visual distinto para ilustrarlo.", points: 2 },
            { text: "Les proporciono un problema similar en parejas para que debatan y descubran el error.", points: 3 }
        ]
    },
    {
        q: "Durante un caso práctico, un grupo comete un error grave de razonamiento.",
        options: [
            { text: "Les indico el error inmediatamente y les doy la respuesta correcta.", points: 0 },
            { text: "Les marco que están equivocados y les pido que lo revisen.", points: 1 },
            { text: "Espero al final de la actividad para mostrar la solución correcta a todos.", points: 2 },
            { text: "Les hago preguntas orientadoras (Socráticas) para que ellos mismos descubran la contradicción.", points: 3 }
        ]
    },
    {
        q: "Al diseñar la evaluación final del curso, prefieres...",
        options: [
            { text: "Crear un examen de selección múltiple sobre los conceptos teóricos.", points: 0 },
            { text: "Combinar un examen teórico con algunas preguntas abiertas.", points: 1 },
            { text: "Pedirles que expongan un tema teórico libre frente a la clase.", points: 2 },
            { text: "Diseñar un proyecto donde deban aplicar lo aprendido para resolver un problema de su entorno laboral.", points: 3 }
        ]
    },
    {
        q: "Respecto a la interacción entre los alumnos durante la clase:",
        options: [
            { text: "Prefiero que trabajen solos para asegurar la asimilación individual.", points: 0 },
            { text: "Permito que compartan respuestas solo al final de una tarea individual.", points: 1 },
            { text: "Organizo grupos de trabajo para que discutan y entreguen un informe escrito conjunto.", points: 2 },
            { text: "Diseño retos que requieren la interdependencia y negociación activa entre los miembros del equipo.", points: 3 }
        ]
    },
    {
        q: "A la hora de estructurar el contenido a enseñar:",
        options: [
            { text: "Sigo estrictamente el manual o temario establecido sin alteraciones.", points: 0 },
            { text: "Sigo el temario oficial pero le añado mis propios ejemplos.", points: 1 },
            { text: "Doy el contenido base y ofrezco muchas lecturas complementarias opcionales.", points: 2 },
            { text: "Adapto el orden y la profundidad del contenido de forma flexible según los intereses de los estudiantes.", points: 3 }
        ]
    },
    {
        q: "Cuando un alumno propone una idea que se desvía del tema central planificado:",
        options: [
            { text: "Le pido amablemente que volvamos al tema que nos toca hoy.", points: 0 },
            { text: "Escucho brevemente por cortesía y retomo mi explicación.", points: 1 },
            { text: "Anoto su idea en la pizarra para que él la investigue al final de la clase.", points: 2 },
            { text: "Aprovecho su idea, la valido, y exploro si podemos conectarla colaborativamente con el objetivo del día.", points: 3 }
        ]
    },
    {
        q: "¿Qué indicador define el éxito final de tus sesiones de formación?",
        options: [
            { text: "Que todos hayan memorizado, asimilado el temario y aprobado el test.", points: 0 },
            { text: "Que los estudiantes hayan participado respondiendo correctamente mis preguntas.", points: 1 },
            { text: "Que los estudiantes hayan completado los ejercicios prácticos sin muchos errores.", points: 2 },
            { text: "Que los estudiantes demuestren capacidad de transferir lo aprendido para analizar y resolver problemas inéditos.", points: 3 }
        ]
    }
];

const pedagogicalData = [
    {
        dimension: "Facilitación del aprendizaje",
        q: "Inicias un tema complejo y notas que el grupo está confundido. ¿Cuál es tu primera acción?",
        options: [
            { text: "Repetir la explicación tal cual, hablando más pausado.", points: 0 },
            { text: "Preguntar al grupo qué parte exacta no entendieron.", points: 1 },
            { text: "Buscar un ejemplo cotidiano para hacer una analogía visual.", points: 2 },
            { text: "Dividirlos en pares para que comparen sus notas e identifiquen la duda central juntos.", points: 3 }
        ]
    },
    {
        dimension: "Evaluación del aprendizaje",
        q: "Al finalizar un módulo de formación de un mes, ¿cómo mides el éxito real del grupo?",
        options: [
            { text: "Con un examen escrito estandarizado de opción múltiple.", points: 0 },
            { text: "Con un examen escrito más algunas preguntas abiertas de análisis.", points: 1 },
            { text: "Pidiendo a los alumnos que realicen una presentación oral sobre la teoría.", points: 2 },
            { text: "Mediante la resolución de un caso práctico basado en un problema real de su contexto.", points: 3 }
        ]
    },
    {
        dimension: "Interacción y participación",
        q: "En un debate grupal, siempre participan las mismas 3 personas. ¿Qué estrategia aplicas?",
        options: [
            { text: "Felicito a los que participan activamente y continúo la clase.", points: 0 },
            { text: "Le pido directamente a los alumnos callados que hablen, llamándolos por su nombre.", points: 1 },
            { text: "Hago una pregunta abierta y digo que hoy quiero escuchar a alguien diferente.", points: 2 },
            { text: "Utilizo la técnica 'Piensa-Compara-Comparte' (Think-Pair-Share) para que todos hablen primero en privado.", points: 3 }
        ]
    },
    {
        dimension: "Gestión del aula",
        q: "Varios estudiantes están distraídos usando el celular durante tu explicación teórica central.",
        options: [
            { text: "Los regaño frente a todos y les exijo guardar el teléfono inmediatamente.", points: 0 },
            { text: "Ignoro la situación mientras no interrumpan el silencio del resto de la clase.", points: 1 },
            { text: "Pauso la clase, hago un chiste o anécdota para recuperar su atención y continúo.", points: 2 },
            { text: "Cambio la dinámica rápidamente a una actividad donde tengan que usar el celular para investigar.", points: 3 }
        ]
    },
    {
        dimension: "Comunicación educativa",
        q: "Un estudiante te hace una pregunta excelente que definitivamente no sabes responder. ¿Qué dices?",
        options: [
            { text: "Invento una respuesta que suene muy lógica para no perder autoridad.", points: 0 },
            { text: "Digo que ese dato no es tan relevante para el tema central de hoy y sigo adelante.", points: 1 },
            { text: "Admito que no lo sé y prometo investigarlo para traerles la respuesta en la próxima clase.", points: 2 },
            { text: "Digo: 'Excelente pregunta, no tengo el dato exacto. ¿Quién del grupo nos ayuda a buscarlo ahora mismo en su móvil?'", points: 3 }
        ]
    },
    {
        dimension: "Motivación del estudiante",
        q: "Debes impartir un tema que sabes que es árido, denso y aburrido por naturaleza.",
        options: [
            { text: "Les digo firmemente que presten atención porque eso saldrá en la evaluación obligatoria.", points: 0 },
            { text: "Intento usar muchas diapositivas coloridas y hablar más fuerte de lo normal.", points: 1 },
            { text: "Les muestro un video introductorio entretenido antes de iniciar la carga teórica.", points: 2 },
            { text: "Planteo un misterio o un 'Reto Imposible' al inicio que solo podrán resolver si dominan el tema aburrido.", points: 3 }
        ]
    },
    {
        dimension: "Adaptabilidad pedagógica",
        q: "Planificaste una clase interactiva usando el proyector, pero hay un corte repentino de energía eléctrica.",
        options: [
            { text: "Cancelo la sesión o les doy tiempo libre porque es imposible seguir el plan trazado.", points: 0 },
            { text: "Saco mis notas impresas y dicto la información para que la copien en sus cuadernos.", points: 1 },
            { text: "Hago la clase de forma magistral improvisando frente a ellos hablando claro.", points: 2 },
            { text: "Organizo un círculo de sillas, adapto la actividad a un debate oral o juego de roles.", points: 3 }
        ]
    },
    {
        dimension: "Desarrollo del pensamiento crítico",
        q: "Un estudiante entrega un análisis donde concluye algo completamente erróneo y contradictorio.",
        options: [
            { text: "Le marco una gran 'X' roja, le pongo un cero y le escribo la respuesta que esperaba.", points: 0 },
            { text: "Le doy medio punto por el esfuerzo de escribir y le explico verbalmente el porqué de su error.", points: 1 },
            { text: "Le pido que rehaga el trabajo prestándole más atención a la página 45 de sus apuntes.", points: 2 },
            { text: "Le hago dos preguntas estratégicas escritas al margen para guiarlo a que él mismo descubra su falla lógica.", points: 3 }
        ]
    }
];

const innovationData = [
    {
        dimension: "Diseño de experiencias de aprendizaje",
        q: "Al estructurar una nueva unidad de capacitación, tu enfoque principal es:",
        options: [
            { text: "Definir los temas a transmitir y preparar las diapositivas de contenido.", points: 0 },
            { text: "Organizar el contenido y añadir algunas actividades prácticas al final.", points: 1 },
            { text: "Diseñar retos donde los alumnos descubran el contenido mediante la acción.", points: 2 },
            { text: "Co-crear el camino de aprendizaje con los alumnos basándome en sus intereses reales.", points: 3 }
        ]
    },
    {
        dimension: "Uso de metodologías activas",
        q: "¿Con qué frecuencia utilizas enfoques como el Aprendizaje Basado en Proyectos (ABP) o Gamificación?",
        options: [
            { text: "Casi nunca. Prefiero la instrucción directa para garantizar que cubro el temario.", points: 0 },
            { text: "Esporádicamente, como una actividad de cierre divertida o proyecto final.", points: 1 },
            { text: "Frecuentemente. Mis módulos están diseñados en torno a retos prácticos.", points: 2 },
            { text: "Siempre. Mi curso completo está gamificado o basado en resolver un gran desafío transversal.", points: 3 }
        ]
    },
    {
        dimension: "Rol del docente",
        q: "Durante una sesión típica, la mayor parte del tiempo actúas como:",
        options: [
            { text: "El experto que explica y transmite la información de forma clara frontalmente.", points: 0 },
            { text: "El instructor que explica la teoría y luego supervisa los ejercicios.", points: 1 },
            { text: "El guía que plantea problemas y hace preguntas para que ellos piensen.", points: 2 },
            { text: "Un mentor que facilita recursos mientras los equipos lideran su propio proceso.", points: 3 }
        ]
    },
    {
        dimension: "Rol del estudiante",
        q: "¿Cuál de estas descripciones se ajusta más a lo que hacen tus estudiantes en clase?",
        options: [
            { text: "Escuchan, toman apuntes y hacen preguntas ocasionales.", points: 0 },
            { text: "Escuchan la explicación y luego participan en dinámicas controladas.", points: 1 },
            { text: "Investigan, debaten, proponen soluciones y presentan sus ideas constantemente.", points: 2 },
            { text: "Toman decisiones sobre su aprendizaje, evalúan a sus pares y crean productos reales.", points: 3 }
        ]
    },
    {
        dimension: "Evaluación",
        q: "Tu principal instrumento para evaluar si hubo aprendizaje real es:",
        options: [
            { text: "El examen final teórico y objetivo (opción múltiple o preguntas cerradas).", points: 0 },
            { text: "Una mezcla entre exámenes teóricos y algunas entregas de trabajos prácticos.", points: 1 },
            { text: "Rúbricas aplicadas a proyectos, portafolios de evidencias o simulaciones.", points: 2 },
            { text: "Evaluación formativa continua 360 (auto, co y hetero-evaluación) sobre productos.", points: 3 }
        ]
    },
    {
        dimension: "Uso de tecnología educativa",
        q: "¿Cómo integras las herramientas digitales en tu práctica?",
        options: [
            { text: "Uso el proyector para mostrar presentaciones y el correo para enviar archivos.", points: 0 },
            { text: "Uso plataformas LMS (ej. Moodle) como repositorios de PDF y para recibir tareas.", points: 1 },
            { text: "Uso apps interactivas (Kahoot, Miro, Padlet) para dinamizar las sesiones.", points: 2 },
            { text: "La tecnología es invisible; los alumnos la usan para crear, investigar o simular la realidad.", points: 3 }
        ]
    },
    {
        dimension: "Nivel de contextualización",
        q: "Respecto a los problemas o ejemplos que usas en clase:",
        options: [
            { text: "Uso los ejemplos clásicos que vienen en los manuales o libros estándar.", points: 0 },
            { text: "Intento traer ejemplos de noticias recientes para ilustrar la teoría.", points: 1 },
            { text: "Planteo escenarios simulados complejos o casos de estudio de empresas reales.", points: 2 },
            { text: "Los estudiantes trabajan con problemas reales de su propia comunidad aportando soluciones.", points: 3 }
        ]
    },
    {
        dimension: "Nivel de experimentación e innovación",
        q: "Cuando descubres una nueva herramienta o enfoque pedagógico:",
        options: [
            { text: "Rara vez la aplico; prefiero lo que ya me ha funcionado por años.", points: 0 },
            { text: "Espero a que mi institución me capacite y me pida usarla oficialmente.", points: 1 },
            { text: "La pruebo ocasionalmente en una clase piloto a ver qué tal reaccionan.", points: 2 },
            { text: "Itero constantemente mi diseño instruccional, prototipando y midiendo impacto.", points: 3 }
        ]
    },
    {
        dimension: "Manejo del error",
        q: "Cuando un estudiante se equivoca al aplicar un concepto en una práctica:",
        options: [
            { text: "Le marco el error y le doy la respuesta correcta para que no se confunda.", points: 0 },
            { text: "Le explico por qué está mal y le pido que repita el ejercicio exactamente.", points: 1 },
            { text: "Le hago preguntas guía para que él mismo descubra dónde falló lógicamente.", points: 2 },
            { text: "Celebro el error y le pido al grupo que analice qué podemos aprender de ese fallo iterativo.", points: 3 }
        ]
    },
    {
        dimension: "Diseño del espacio",
        q: "¿Cómo está distribuido o cómo manejas el espacio físico o virtual de tu clase?",
        options: [
            { text: "Sillas en filas hacia mí / Cámaras apagadas en Zoom mientras comparto pantalla.", points: 0 },
            { text: "Sillas en 'U' a veces / Salas virtuales (Breakout rooms) al final de la clase.", points: 1 },
            { text: "Mesas de trabajo colaborativo / Plataformas (Mural/Miro) como centro de sesión.", points: 2 },
            { text: "El aula es solo un punto; el aprendizaje ocurre explorando la calle, la empresa o simuladores.", points: 3 }
        ]
    }
];

// --- Web Audio API ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const playSound = (type) => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'techWelcome') {
        const now = audioCtx.currentTime;
        const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        freqs.forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            osc.type = i % 2 === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(freq * 0.5, now + (i * 0.07));
            osc.frequency.exponentialRampToValueAtTime(freq, now + (i * 0.07) + 0.12);
            g.gain.setValueAtTime(0, now + (i * 0.07));
            g.gain.linearRampToValueAtTime(0.08, now + (i * 0.07) + 0.04);
            g.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.07) + 0.7);
            osc.connect(g);
            g.connect(audioCtx.destination);
            osc.start(now + (i * 0.07));
            osc.stop(now + (i * 0.07) + 0.7);
        });
    } else if (type === 'cardFlip') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(850, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, audioCtx.currentTime + 0.14);
        gain.gain.setValueAtTime(0.07, audioCtx.currentTime); 
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.14);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.14);
    } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime); 
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    }
};

// --- App Initialization & Routing ---
document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateUI = () => {
        let currentLevelObj = gamificationLevels[0];
        for (let i = 0; i < gamificationLevels.length; i++) {
            if (gameState.xp >= gamificationLevels[i].xp) currentLevelObj = gamificationLevels[i];
        }
        gameState.level = currentLevelObj.name;
        saveGameState();

        const xpEl = document.getElementById('sidebar-xp');
        if (xpEl) xpEl.innerText = `XP: ${gameState.xp}`;
        
        const topbarLvl = document.getElementById('topbar-level');
        if (topbarLvl) topbarLvl.innerHTML = `<i class="ph-fill ph-star"></i> ${gameState.level}`;
        
        const nameDisplay = document.getElementById('user-name-display');
        if (nameDisplay) nameDisplay.innerText = gameState.userName;

        const avatarImg = document.getElementById('user-avatar');
        const sidebarLevel = document.getElementById('sidebar-level');
        if (sidebarLevel) sidebarLevel.innerText = gameState.level;

        if (avatarImg) {
            avatarImg.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(gameState.userName || 'Estudiante')}`;
        }
    };

    window.app = {
        toggleSidebar: (forceState = null) => {
            const sidebar = document.getElementById('main-sidebar');
            const backdrop = document.getElementById('sidebar-backdrop');
            if (!sidebar) return;
            const isOpen = sidebar.classList.contains('mobile-open');
            const newState = (forceState !== null) ? forceState : !isOpen;
            if (newState) {
                sidebar.classList.add('mobile-open');
                backdrop?.classList.add('active');
            } else {
                sidebar.classList.remove('mobile-open');
                backdrop?.classList.remove('active');
            }
        },

        navigate: (target, param = null) => {
            playSound('click');
            window.app.toggleSidebar(false);
            navLinks.forEach(l => l.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[data-target="${target}"]`);
            if (activeLink) activeLink.classList.add('active');

            if (views[target]) {
                contentArea.innerHTML = views[target](param);
                window.scrollTo(0, 0);
                if (target === 'aprende') {
                    setTimeout(() => {
                        if (window.initBrain3D && (!window._activeAprendeTab || window._activeAprendeTab === 'cerebro')) {
                            window.initBrain3D();
                        }
                    }, 80);
                }
            }
        },

        setUserObjective: (objText) => {
            playSound('success');
            gameState.userObjective = objText;
            saveGameState();
            updateUI();
            app.navigate('aprende');
        },

        toggleThemeMenu: () => {
            playSound('click');
            const menu = document.getElementById('theme-menu');
            if (menu.style.display === 'none' || !menu.style.display) menu.style.display = 'block'; 
            else menu.style.display = 'none';
        },

        changeTheme: (theme) => {
            playSound('success');
            document.body.className = '';
            if (theme !== 'default') document.body.classList.add(`theme-${theme}`);
            document.getElementById('theme-menu').style.display = 'none';
        },

        resetProgress: () => {
            if (confirm("¿Estás seguro de que deseas reiniciar tu progreso guardado?")) {
                playSound('click');
                localStorage.removeItem('psicoeduca_save');
                location.reload();
            }
        },

        openExternalModule: (url) => {
            playSound('click');
            contentArea.innerHTML = `
                <div class="view-animate" style="height: calc(100vh - 100px); display: flex; flex-direction: column;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-shrink: 0;">
                        <button class="hero-btn" style="font-size: 13px; padding: 8px 16px; background: rgba(255,255,255,0.08); color: white;" onclick="app.navigate('practica')">
                            <i class="ph-bold ph-arrow-left"></i> Volver al Laboratorio
                        </button>
                    </div>
                    <div style="flex: 1; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative;">
                        <iframe src="${url}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; background: #0f172a;"></iframe>
                    </div>
                </div>
            `;
        },

        startCourse: (courseId) => {
            playSound('click');
            const course = coursesData[courseId];
            if (!course) return;
            if (course.isExternal) {
                app.openExternalModule(course.url);
                return;
            }
            app.renderCourseModule(courseId, 0);
        },

        renderCourseModule: (courseId, moduleIdx) => {
            const course = coursesData[courseId];
            const currentModule = course.modules[moduleIdx] || course.modules[0];

            let videoElement = '';
            if (currentModule.videoUrl) {
                videoElement = `<div class="course-video-wrapper"><iframe src="${currentModule.videoUrl}" allowfullscreen></iframe></div>`;
            }

            const sidebarHTML = course.modules.map((m, idx) => `
                <div class="module-item ${idx === moduleIdx ? 'active' : ''} ${m.completed ? 'completed' : ''}" onclick="app.renderCourseModule('${courseId}', ${idx})">
                    <span>${m.title}</span>
                    <i class="ph ${m.completed ? 'ph-check-circle' : 'ph-circle'}"></i>
                </div>
            `).join('');

            contentArea.innerHTML = `
                <div class="view-animate">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; cursor: pointer; color: var(--text-secondary);" onclick="app.navigate('aprende')"><i class="ph-bold ph-arrow-left"></i> Volver a Aprende</div>
                    <div class="course-player-container">
                        <div class="course-content-area">
                            <h2 style="font-size: 26px; margin-bottom: 15px;">${currentModule.title}</h2>
                            ${videoElement}
                            <div style="font-size: 16px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 25px;">${currentModule.content}</div>
                            <button class="hero-btn" onclick="app.completeModule('${courseId}', ${currentModule.id})"><i class="ph-bold ph-check"></i> Marcar Módulo como Completado (+100 XP)</button>
                        </div>
                        <div class="course-sidebar"><h3 style="margin-bottom: 20px; font-size: 18px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">Contenido del Curso</h3>${sidebarHTML}</div>
                    </div>
                </div>
            `;
        },

        completeModule: (courseId, moduleId) => {
            playSound('success');
            gameState.xp += 100;
            const course = coursesData[courseId];
            const mod = course.modules.find(m => m.id === moduleId);
            if (mod) mod.completed = true;
            
            const completedCount = course.modules.filter(m => m.completed).length;
            course.progress = Math.round((completedCount / course.modules.length) * 100);
            
            if (course.progress === 100 && !gameState.unlockedBadges.includes('diseno_instruccional')) {
                gameState.unlockedBadges.push('diseno_instruccional');
            }

            updateUI();
            saveGameState();
            alert("¡Módulo completado! +100 XP añadidos a tu perfil.");
            app.navigate('aprende');
        },

        toggleChatbot: () => {
            playSound('click');
            const cw = document.getElementById('chatbot-window');
            cw.style.display = cw.style.display === 'none' ? 'flex' : 'none';
        },

        sendChatMessage: () => {
            const input = document.getElementById('chatbot-input');
            const text = input.value.trim();
            if (!text) return;
            
            playSound('click');
            const msgContainer = document.getElementById('chatbot-messages');
            msgContainer.innerHTML += `<div class="chat-msg user-msg">${text}</div>`;
            input.value = '';
            msgContainer.scrollTop = msgContainer.scrollHeight;

            const loadingId = "loading-" + Date.now();
            msgContainer.innerHTML += `<div id="${loadingId}" class="chat-msg bot-msg">Elprofe está consultando la base de conocimientos... <i class="ph-bold ph-spinner ph-spin"></i></div>`;
            msgContainer.scrollTop = msgContainer.scrollHeight;

            setTimeout(() => {
                const loadingEl = document.getElementById(loadingId);
                if (loadingEl) loadingEl.remove();
                
                playSound('success');
                const replyHtml = app.getElProfeResponse(text);
                msgContainer.innerHTML += `<div class="chat-msg bot-msg">${replyHtml}</div>`;
                msgContainer.scrollTop = msgContainer.scrollHeight;
            }, 350);
        },

        getElProfeResponse: (userText) => {
            const q = userText.toLowerCase().trim();

            if (q.includes('actividad') || q.includes('clase') || q.includes('critico') || q.includes('dua')) {
                return `<strong>Elprofe (Pedagogía & DUA):</strong><br><br>
Para diseñar una actividad de <strong>pensamiento crítico</strong>:<br>
1. <strong>Plantea un dilema real:</strong> Presenta una situación sin respuesta única.<br>
2. <strong>Aplica el Método Socrático:</strong> Guía con preguntas en lugar de explicaciones magistrales.<br>
3. <strong>Multimodalidad DUA:</strong> Permite que los estudiantes presenten sus conclusiones en audio, mapa mental o escrito.<br><br>
💡 Te recomiendo explorar la <strong>Ruta: Docente Innovador & DUA</strong> en la sección <em>Aprende</em>.`;
            }

            if (q.includes('capacita') || q.includes('taller') || q.includes('4 horas') || q.includes('formador') || q.includes('adulto')) {
                return `<strong>Elprofe (Formación Organizacional):</strong><br><br>
Estructura sugerida para un taller de 4 horas (Andragogía):<br>
• <strong>Bloque 1 (60 min):</strong> Rompehielos situacional y diagnóstico de necesidades.<br>
• <strong>Bloque 2 (90 min):</strong> Núcleo práctico (Trabajo colaborativo en retos).<br>
• <strong>Bloque 3 (60 min):</strong> Simulaciones / Role Play de aplicación.<br>
• <strong>Bloque 4 (30 min):</strong> Feedback 360 y compromiso de acción.<br><br>
💡 Explora la <strong>Ruta Formador Organizacional</strong> y prueba los simuladores en el <em>Laboratorio</em>.`;
            }

            if (q.includes('feedback') || q.includes('desempeño') || q.includes('equipo') || q.includes('lider')) {
                return `<strong>Elprofe (Liderazgo & Feedback):</strong><br><br>
Para entregar <strong>feedback efectivo</strong>:<br>
1. <strong>Hechos objetivos:</strong> Describe el comportamiento observatorio, no el carácter.<br>
2. <strong>Impacto directo:</strong> Muestra cómo afecta los resultados del equipo.<br>
3. <strong>Co-creación de solución:</strong> Pregunta <em>"¿Cómo propones abordarlo?"</em>.<br><br>
💡 Practica ahora mismo en el <strong>Simulador de Feedback Constructivo</strong> en el <em>Laboratorio</em>.`;
            }

            if (q.includes('entrevista') || q.includes('cv') || q.includes('empleo') || q.includes('laboral')) {
                return `<strong>Elprofe (Empleabilidad & Entrevistas):</strong><br><br>
Para tu entrevista laboral:<br>
• Utiliza la <strong>Técnica STAR</strong> (Situación, Tarea, Acción, Resultado).<br>
• Enfoca tus respuestas en tus logros medibles y habilidades de resolución.<br><br>
💡 Ingresa al <strong>Simulador de Entrevista Laboral</strong> en el <em>Laboratorio Psicoeduca</em>.`;
            }

            return `<strong>Elprofe — Tu Asistente Profesional:</strong><br><br>
Puedo guiarte en el desarrollo de competencias educativas, liderazgo, empleabilidad y habilidades sociales.<br><br>
💡 Te sugiero realizar el <strong>Diagnóstico Inicial</strong> en la sección <em>Evalúate</em> para obtener tu mapa de desarrollo personalizado.`;
        },

        searchApp: (query) => {
            query = query.toLowerCase().trim();
            const resultsContainer = document.getElementById('search-results');
            if (!query) { resultsContainer.style.display = 'none'; return; }
            
            let resultsHtml = '';
            const addResult = (icon, title, subtitle, target) => {
                resultsHtml += `<div class="search-item" style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="app.navigate('${target}'); document.getElementById('search-results').style.display='none'; document.querySelector('.search-bar input').value=''">
                    <i class="ph ${icon}" style="font-size: 20px; color: var(--primary);"></i><div><strong style="color:#fff; font-size:14px;">${title}</strong><br><small style="color:var(--text-secondary); font-size:12px;">${subtitle}</small></div>
                </div>`;
            };

            if ("inicio dashboard home".includes(query)) addResult('ph-squares-four', 'Inicio & Dashboard', 'Página principal', 'home');
            if ("explora sectores docencia liderazgo formacion empleabilidad".includes(query)) addResult('ph-compass', 'Explora las 6 Verticales', 'Sectores profesionales', 'explora');
            if ("rutas cursos microcursos biblioteca aprende".includes(query)) addResult('ph-books', 'Rutas & Cursos', 'Catálogo de aprendizaje', 'aprende');
            if ("practica laboratorio simuladores casos roleplay".includes(query)) addResult('ph-flask', 'Laboratorio Psicoeduca', 'Simuladores prácticos', 'practica');
            if ("evaluate diagnostico tests evaluacion".includes(query)) addResult('ph-exam', 'Diagnóstico & Evaluaciones', 'Centro de evaluación', 'evaluate');
            if ("orientacion vocacional carrera profesional".includes(query)) addResult('ph-briefcase', 'Orientación Vocacional y Profesional', 'Plan de carrera', 'orientacion');
            if ("mi desarrollo perfil insignias progreso".includes(query)) addResult('ph-user-circle', 'Mi Desarrollo & Perfil', 'Tu progreso', 'profile');

            Object.values(routesData).forEach(r => {
                if (r.title.toLowerCase().includes(query) || r.desc.toLowerCase().includes(query)) {
                    addResult('ph-path', r.title, `Ruta de ${r.category}`, 'aprende');
                }
            });

            Object.values(laboratorioData).forEach(l => {
                if (l.title.toLowerCase().includes(query) || l.competencia.toLowerCase().includes(query)) {
                    addResult(l.icon, l.title, `Simulador: ${l.category}`, 'practica');
                }
            });

            if (resultsHtml) { resultsContainer.innerHTML = resultsHtml; resultsContainer.style.display = 'block'; } 
            else { resultsContainer.innerHTML = `<div style="padding: 15px; color: var(--text-secondary); text-align: center;">No se encontraron resultados para "${query}"</div>`; resultsContainer.style.display = 'block'; }
        },

        handleLoginSubmit: (event) => {
            if (event) event.preventDefault();
            const userInput = document.getElementById('login-username')?.value.trim() || "Estudiante";
            const passInput = document.getElementById('login-password')?.value.trim() || "";
            const userKey = userInput.toLowerCase().replace(/\s+/g, '_');
            let db = getUsersDB();

            if (!db[userKey]) {
                db[userKey] = {
                    ...defaultState,
                    userName: userInput,
                    password: passInput,
                    firstLogin: Date.now(),
                    lastLogin: Date.now()
                };
                saveUsersDB(db);
            }

            activeUserKey = userKey;
            localStorage.setItem('psicoeduca_active_user', userKey);
            gameState = db[userKey];
            addAccessLog(userInput, userKey);

            const modal = document.getElementById('login-modal');
            if (modal) modal.style.display = 'none';

            updateUI();
            saveGameState();
            playSound('success');
            app.navigate('home');
        },

        logoutUser: () => {
            playSound('click');
            saveGameState();
            const modal = document.getElementById('login-modal');
            if (modal) modal.style.display = 'flex';
        },

        updateName: (newName) => {
            if (!newName) return;
            gameState.userName = newName;
            saveGameState();
            updateUI();
        }
    };

    // --- RENDERIZADO DE VISTAS PRINCIPALES ---

    // 1. NUEVA HOME (Página de Inicio Neurotech)
    const renderHome = () => {
        let currentLevelObj = gamificationLevels[0];
        let nextLevelObj = gamificationLevels[1] || gamificationLevels[0];
        for (let i = 0; i < gamificationLevels.length; i++) {
            if (gameState.xp >= gamificationLevels[i].xp) {
                currentLevelObj = gamificationLevels[i];
                nextLevelObj = gamificationLevels[i + 1] || gamificationLevels[i];
            }
        }
        
        const unlockedBadgesCount = (gameState.unlockedBadges || []).length;
        const activeObjective = gameState.userObjective || "Mejorar como docente";

        return `
        <div class="view-animate">
            <!-- Neurotech Hero Banner -->
            <div class="neuro-hero-banner">
                <div style="max-width: 680px; z-index: 2;">
                    <div class="hero-badge-pill">
                        <i class="ph-bold ph-brain"></i> LABORATORIO NEUROCOGNITIVO // v2.5
                    </div>
                    <h1 class="hero-main-title">
                        PSICOEDUCA <span class="gradient-text">ACADEMY</span>
                    </h1>
                    <p class="hero-tagline">"Conectando el conocimiento, la mente y el aprendizaje."</p>
                    <p class="hero-desc">
                        Bienvenido, <strong>${gameState.userName || 'Educador'}</strong>. Entorno de entrenamiento y desarrollo docente basado en neurociencias aplicadas, diseño universal (DUA), constructivismo y microaprendizaje de alta retención.
                    </p>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <button class="hero-btn" onclick="app.navigate('evaluate')">
                            <i class="ph-bold ph-scan"></i> Iniciar Diagnóstico Situacional
                        </button>
                        <button class="hero-btn hero-btn-cyan" onclick="app.navigate('practica')">
                            <i class="ph-bold ph-flask"></i> Laboratorio Experimental
                        </button>
                    </div>
                </div>

                <!-- Gráfico Neuronal Interactivo del Hero -->
                <div class="hero-synapse-visual" title="Núcleo de Sinapsis Cognitiva">
                    <div class="synapse-core-ring"></div>
                    <div class="synapse-inner-ring"></div>
                    <div class="synapse-center-node">
                        <i class="ph-bold ph-brain"></i>
                    </div>
                </div>
            </div>

            <!-- HUD de Telemetría Cognitiva del Usuario -->
            <div class="cognitive-hud-grid">
                <div class="hud-metric-card" onclick="app.navigate('profile')">
                    <div class="hud-icon-box" style="background: rgba(245, 158, 11, 0.12); color: var(--warning); border-color: rgba(245, 158, 11, 0.3);">
                        <i class="ph-fill ph-star"></i>
                    </div>
                    <div>
                        <div class="hud-metric-val">${currentLevelObj.name}</div>
                        <div class="hud-metric-label">Rango Evolutivo</div>
                    </div>
                </div>

                <div class="hud-metric-card" onclick="app.navigate('profile')">
                    <div class="hud-icon-box" style="background: rgba(34, 211, 238, 0.12); color: var(--color-cyan); border-color: rgba(34, 211, 238, 0.3);">
                        <i class="ph-bold ph-lightning"></i>
                    </div>
                    <div style="flex: 1;">
                        <div class="hud-metric-val" style="color: var(--color-cyan);">${gameState.xp || 0} XP</div>
                        <div class="hud-metric-label">Energía Sináptica</div>
                    </div>
                </div>

                <div class="hud-metric-card" onclick="app.navigate('evaluate')">
                    <div class="hud-icon-box" style="background: rgba(52, 211, 153, 0.12); color: var(--success); border-color: rgba(52, 211, 153, 0.3);">
                        <i class="ph-bold ph-exam"></i>
                    </div>
                    <div>
                        <div class="hud-metric-val">${gameState.testsCompleted || 0}</div>
                        <div class="hud-metric-label">Evaluaciones Validadas</div>
                    </div>
                </div>

                <div class="hud-metric-card" onclick="app.navigate('profile')">
                    <div class="hud-icon-box" style="background: rgba(168, 85, 247, 0.12); color: #C084FC; border-color: rgba(168, 85, 247, 0.3);">
                        <i class="ph-bold ph-medal"></i>
                    </div>
                    <div>
                        <div class="hud-metric-val">${unlockedBadgesCount}</div>
                        <div class="hud-metric-label">Insignias Desbloqueadas</div>
                    </div>
                </div>
            </div>

            <!-- Sección: ¿Qué quieres desarrollar? (5 Tarjetas de Objetivos) -->
            <div class="view-header">
                <h2 class="view-title">¿Qué quieres desarrollar hoy?</h2>
                <p class="view-subtitle">Selecciona tu meta pedagógica o profesional para activar una ruta de aprendizaje adaptativa.</p>
            </div>
            
            <div class="audiences-grid">
                <div class="audience-card" onclick="app.setUserObjective('Mejorar como docente')" style="border-top: 2px solid #38BDF8;">
                    <div>
                        <div class="audience-icon" style="color: #38BDF8; background: rgba(56, 189, 248, 0.12); border-color: rgba(56, 189, 248, 0.3);">
                            <i class="ph-bold ph-chalkboard-teacher"></i>
                        </div>
                        <h3 class="audience-title">Quiero enseñar mejor</h3>
                        <p class="audience-desc">Pedagogía activa, didáctica constructivista, DUA, neuroeducación e IA aplicada al aula.</p>
                    </div>
                    <div class="audience-action" style="color: #38BDF8;">
                        Ruta Docente <i class="ph-bold ph-arrow-right"></i>
                    </div>
                </div>

                <div class="audience-card" onclick="app.setUserObjective('Convertirme en formador')" style="border-top: 2px solid #C084FC;">
                    <div>
                        <div class="audience-icon" style="color: #C084FC; background: rgba(192, 132, 252, 0.12); border-color: rgba(192, 132, 252, 0.3);">
                            <i class="ph-bold ph-presentation"></i>
                        </div>
                        <h3 class="audience-title">Quiero formar personas</h3>
                        <p class="audience-desc">Diseño instruccional LXD, andragogía corporativa, capacitación y facilitación moderna.</p>
                    </div>
                    <div class="audience-action" style="color: #C084FC;">
                        Ruta Formador <i class="ph-bold ph-arrow-right"></i>
                    </div>
                </div>

                <div class="audience-card" onclick="app.setUserObjective('Conseguir empleo')" style="border-top: 2px solid #34D399;">
                    <div>
                        <div class="audience-icon" style="color: #34D399; background: rgba(52, 211, 153, 0.12); border-color: rgba(52, 211, 153, 0.3);">
                            <i class="ph-bold ph-briefcase"></i>
                        </div>
                        <h3 class="audience-title">Quiero crecer laboralmente</h3>
                        <p class="audience-desc">Orientación vocacional, empleabilidad, CV estratégico, entrevistas STAR y marca personal.</p>
                    </div>
                    <div class="audience-action" style="color: #34D399;">
                        Ruta Empleabilidad <i class="ph-bold ph-arrow-right"></i>
                    </div>
                </div>

                <div class="audience-card" onclick="app.setUserObjective('Mejorar mis habilidades sociales')" style="border-top: 2px solid #FBBF24;">
                    <div>
                        <div class="audience-icon" style="color: #FBBF24; background: rgba(251, 191, 36, 0.12); border-color: rgba(251, 191, 36, 0.3);">
                            <i class="ph-bold ph-chats-teardrop"></i>
                        </div>
                        <h3 class="audience-title">Quiero conectar mejor</h3>
                        <p class="audience-desc">Comunicación asertiva, inteligencia emocional, empatía activa y mediación de conflictos.</p>
                    </div>
                    <div class="audience-action" style="color: #FBBF24;">
                        Ruta Habilidades <i class="ph-bold ph-arrow-right"></i>
                    </div>
                </div>

                <div class="audience-card" onclick="app.setUserObjective('Prepararme para liderar equipos')" style="border-top: 2px solid #F472B6;">
                    <div>
                        <div class="audience-icon" style="color: #F472B6; background: rgba(244, 114, 182, 0.12); border-color: rgba(244, 114, 182, 0.3);">
                            <i class="ph-bold ph-crown"></i>
                        </div>
                        <h3 class="audience-title">Quiero liderar equipos</h3>
                        <p class="audience-desc">Liderazgo inspirador, feedback constructivo, delegación ágil y gestión del alto desempeño.</p>
                    </div>
                    <div class="audience-action" style="color: #F472B6;">
                        Ruta Liderazgo <i class="ph-bold ph-arrow-right"></i>
                    </div>
                </div>
            </div>

            <!-- Sección: Rutas de Aprendizaje Destacadas -->
            <div class="view-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
                <div>
                    <h2 class="view-title">Rutas de Aprendizaje Sináptico</h2>
                    <p class="view-subtitle">Estructuras modulares secuenciales diseñadas para el dominio cognitivo.</p>
                </div>
                <button class="hero-btn" style="font-size: 13px; padding: 8px 18px; background: rgba(34, 211, 238, 0.1); border-color: var(--border-glow); color: var(--color-cyan);" onclick="app.navigate('aprende')">
                    Ver Todas las Rutas <i class="ph-bold ph-arrow-right"></i>
                </button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 40px;">
                ${Object.values(routesData).slice(0, 3).map(r => `
                    <div class="route-card" onclick="app.navigate('aprende')">
                        <div class="route-header">
                            <span class="route-badge">${r.category}</span>
                            <span style="font-size: 12px; color: var(--warning); font-weight: bold; font-family: var(--font-tech); background: rgba(245, 158, 11, 0.1); padding: 3px 8px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.3);">
                                <i class="ph-bold ph-lightning"></i> +${r.xp} XP
                            </span>
                        </div>
                        <h3 style="font-size: 19px; font-family: var(--font-tech); color: #fff; margin-bottom: 10px;">${r.title}</h3>
                        <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 18px;">${r.desc}</p>
                        <div class="route-meta-pills">
                            <span class="meta-pill"><i class="ph-bold ph-clock"></i> ${r.duration}</span>
                            <span class="meta-pill"><i class="ph-bold ph-chart-bar"></i> ${r.level}</span>
                            <span class="meta-pill"><i class="ph-bold ph-squares-four"></i> ${r.modulesCount} módulos</span>
                        </div>
                        <div class="audience-action">Explorar Ruta Completa <i class="ph-bold ph-arrow-right"></i></div>
                    </div>
                `).join('')}
            </div>

            <!-- Scanner Situacional (CTA Diagnóstico) -->
            <div class="scanner-cta-panel">
                <div style="max-width: 650px; z-index: 2;">
                    <div style="display: inline-flex; align-items: center; gap: 6px; color: var(--success); font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; font-family: var(--font-tech); margin-bottom: 8px;">
                        <i class="ph-bold ph-shield-check"></i> DIAGNÓSTICO DE COMPETENCIAS DOCENTES
                    </div>
                    <h3 style="font-family: var(--font-tech); font-size: 26px; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">
                        Escáner de Perfil Pedagógico & Constructivista
                    </h3>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.55;">
                        Descubre tu nivel en 8 dimensiones clave: metodologías activas, DUA, evaluación formativa y neuroeducación. Obtén tu mapa de desarrollo y recomendaciones personalizadas.
                    </p>
                </div>
                <button class="hero-btn hero-btn-emerald" style="padding: 14px 28px; z-index: 2;" onclick="app.navigate('evaluate')">
                    <i class="ph-bold ph-scan"></i> Iniciar Evaluación
                </button>
            </div>

            <!-- Laboratorio Psicoeduca (Aprende Haciendo) -->
            <div class="view-header">
                <h2 class="view-title">Laboratorio Experimental Psicoeduca</h2>
                <p class="view-subtitle">Simuladores de casos, dinámicas de aula y resolución de retos en entornos controlados.</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 40px;">
                ${Object.values(laboratorioData).slice(0, 4).map(l => `
                    <div class="card" onclick="app.openExternalModule('${l.url}')" style="cursor: pointer;">
                        <div class="card-icon-wrapper"><i class="ph-bold ${l.icon}"></i></div>
                        <span style="font-size: 10.5px; color: var(--color-cyan); font-weight: 800; text-transform: uppercase; letter-spacing: 1px; font-family: var(--font-tech);">${l.category}</span>
                        <h4 style="font-size: 17px; font-family: var(--font-tech); margin: 6px 0 8px; color: #fff;">${l.title}</h4>
                        <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.45; margin-bottom: 16px;">${l.objetivo}</p>
                        <div class="audience-action" style="font-size: 12.5px;">Iniciar Simulación <i class="ph-bold ph-play"></i></div>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
    };

    // 2. VISTA EXPLORA (Filtrada por las 6 Vertocales)
    const renderExplora = (selectedVertical = 'Docencia') => {
        const verticals = ['Docencia', 'Formación', 'Liderazgo', 'Empleabilidad', 'Habilidades Sociales', 'Orientación Profesional'];
        const activeVert = selectedVertical || 'Docencia';

        return `
            <div class="view-animate">
                <div class="view-header">
                    <h1 class="view-title">Explora por Verticales de Desarrollo</h1>
                    <p class="view-subtitle">Filtra contenidos, rutas y herramientas según tu área de enfoque principal.</p>
                </div>

                <div class="filter-pills-row">
                    ${verticals.map(v => `
                        <div class="filter-pill ${v === activeVert ? 'active' : ''}" onclick="app.navigate('explora', '${v}')">${v}</div>
                    `).join('')}
                </div>

                <div class="view-header" style="margin-top: 20px;">
                    <h2 class="view-title" style="font-size: 22px;">Rutas y Recursos en: <span style="color: var(--primary);">${activeVert}</span></h2>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                    ${Object.values(routesData).filter(r => r.category.toLowerCase().includes(activeVert.toLowerCase()) || activeVert === 'Docencia').map(r => `
                        <div class="route-card" onclick="app.navigate('aprende')">
                            <span class="route-badge">${r.category}</span>
                            <h3 style="font-size: 20px; color: #fff; margin: 12px 0 8px;">${r.title}</h3>
                            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">${r.desc}</p>
                            <button class="hero-btn" style="font-size: 12px; padding: 8px 16px;">Ver Ruta Completa <i class="ph-bold ph-arrow-right"></i></button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    // --- ARTÍCULOS ACADÉMICOS DE NEUROEDUCACIÓN & PROCESOS COGNITIVOS ---
    window.neuroArticlesData = {
        frontal: {
            id: 'frontal',
            lobe: 'Lóbulo Frontal y Corteza Prefrontal',
            title: 'Lóbulo Frontal y Corteza Prefrontal: Funciones Ejecutivas y Autorregulación en el Aula',
            subtitle: 'Neurobiología del control inhibitorio, memoria de trabajo, flexibilidad cognitiva y diseño curricular bajo el Diseño Universal para el Aprendizaje (DUA).',
            tag: 'NEUROEDUCACIÓN // FUNCIONES EJECUTIVAS & DUA',
            icon: 'ph-cpu',
            color: '#22D3EE',
            badge: 'Corteza Asociativa Anterior',
            basicProcesses: 'Atención focalizada y sostenida, inhibición de reflejos motores automáticos inmediatos, control visomotor.',
            advancedProcesses: 'Funciones Ejecutivas (FE): Control inhibitorio, memoria de trabajo fonológica y visoespacial, flexibilidad cognitiva (shifting), planificación prospectiva, metacognición, empatía y toma de decisiones éticas.',
            classroomApplication: 'Implementación del DUA (múltiples formas de acción y expresión), pausas activas programadas cada 25-30 minutos para reponer dopamina prefrontal, checklists metacognitivas y andamiaje estructurado del control conductual.',
            readingTime: '7 min de lectura académica',
            bodyHtml: `
                <div class="article-section">
                    <h3>1. Introducción Neurobiológica y Maduración Tardía</h3>
                    <p>El lóbulo frontal, y en particular la <strong>corteza prefrontal (CPF)</strong> dorsolateral, ventromedial y orbitofrontal, representa la cúspide evolutiva del encéfalo humano. A diferencia de las áreas sensoriales primarias que completan su mielinización en la infancia temprana, la CPF experimenta una remodelación y poda sináptica prolongada que se extiende hasta aproximadamente los 22-25 años de edad.</p>
                    <div class="article-quote-box">
                        <em>«La corteza prefrontal es el director de orquesta del cerebro; no toca ningún instrumento individualmente, pero asegura que todos toquen en armonía, a tiempo y con el volumen adecuado.»</em>
                        <small>— Dra. Adele Diamond, Neurocientífica del Desarrollo (Universidad de British Columbia)</small>
                    </div>
                </div>
                <div class="article-section">
                    <h3>2. La Tríada Dorada de las Funciones Ejecutivas (FE) en Educación</h3>
                    <p>Las Funciones Ejecutivas son un constructo neurocognitivo fundamental que predice el éxito académico y socioemocional con mayor precisión que el cociente intelectual (CI):</p>
                    <div class="article-grid-2">
                        <div class="article-card-mini">
                            <h4>A. Control Inhibitorio</h4>
                            <p>Capacidad biológica de resistir interferencias, demorar la gratificación y frenar respuestas impulsivas automáticas. Permite al estudiante mantenerse enfocado a pesar de las distracciones del aula.</p>
                        </div>
                        <div class="article-card-mini">
                            <h4>B. Memoria de Trabajo (Working Memory)</h4>
                            <p>Sistema multicomponente (bucle fonológico, agenda visoespacial y retén episódico) coordinado por el ejecutivo central para retener y manipular mentalmente información en tiempo real.</p>
                        </div>
                    </div>
                    <div class="article-card-mini" style="margin-top: 14px;">
                        <h4>C. Flexibilidad Cognitiva (Shifting)</h4>
                        <p>Habilidad para cambiar de perspectiva, corregir estrategias ante un error didáctico y adaptarse a demandas cambiantes o consignas complejas del docente.</p>
                    </div>
                </div>
                <div class="article-section">
                    <h3>3. Conexión con el Diseño Universal para el Aprendizaje (DUA)</h3>
                    <p>El marco DUA (Center for Applied Special Technology - CAST) mapea directamente la red estratégica del lóbulo frontal en el principio: <strong>Múltiples Formas de Acción y Expresión</strong>. Cuando un docente ofrece alternativas para demostrar el conocimiento (un ensayo, un podcast, un mapa conceptual interactivo o un prototipo físico), alivia la sobrecarga de la memoria de trabajo y permite que la corteza prefrontal opere en su zona de desarrollo óptimo.</p>
                </div>
                <div class="article-section">
                    <h3>4. Estrategias Didácticas Basadas en Evidencia para el Docente</h3>
                    <ul>
                        <li><strong>Pausas Activas (Brain Breaks):</strong> Intervalos de 2 a 3 minutos con movimiento físico o respiración consciente cada 25-30 minutos. El ejercicio ligero promueve la liberación de BDNF (Factor Neurotrófico Derivado del Cerebro) y restaura la glucosa cerebral en la CPF.</li>
                        <li><strong>Externalización de la Memoria de Trabajo:</strong> Uso de organizadores visuales, rúbricas por pasos y tableros Kanban en el aula para evitar la sobrecarga cognitiva intrínseca.</li>
                        <li><strong>Entrenamiento Metacognitivo Explícito:</strong> Preguntas de auto-monitoreo: <em>«¿Qué estrategia utilicé?», «¿Dónde me estanqué?», «¿Qué otra ruta podría probar?»</em>.</li>
                    </ul>
                </div>
            `
        },
        parietal: {
            id: 'parietal',
            lobe: 'Lóbulo Parietal',
            title: 'Lóbulo Parietal: Integración Multisensorial y Neurodidáctica del Pensamiento Matemático',
            subtitle: 'El surco intraparietal y la cognición numérica, el homúnculo somatosensorial y el aprendizaje activo manipulativo.',
            tag: 'NEUROEDUCACIÓN // COGNICIÓN ESPACIAL & CÁLCULO',
            icon: 'ph-presentation-chart',
            color: '#38BDF8',
            badge: 'Corteza Somatosensorial y Visuoespacial',
            basicProcesses: 'Somatosensación primaria (área S1, homúnculo somatotópico de Penfield), tacto discriminativo, propiocepción consciente y nocicepción.',
            advancedProcesses: 'Integración multimodal multisensorial, conciencia visoespacial, esquema corporal, cálculo numérico simbólico y analógico (Surco Intraparietal - IPS), rotación mental de objetos y praxias motoras complejas.',
            classroomApplication: 'Uso de materiales manipulables concretos (bloques Dienes, regletas Cuisenaire, ábacos), estimulación de la gnosia digital (contar con dedos), diagramación espacial de problemas y enseñanza kinestésica.',
            readingTime: '6 min de lectura académica',
            bodyHtml: `
                <div class="article-section">
                    <h3>1. El Surco Intraparietal (IPS) y el Sentido Numérico Innato</h3>
                    <p>Las investigaciones de neuroimagen funcional dirigidas por Stanislas Dehaene han demostrado que el <strong>Surco Intraparietal (IPS)</strong> bilateral es la estructura cerebral responsable de representar magnitudes numéricas y espaciales de forma intuitiva (el llamado <em>«sentido del número»</em>).</p>
                    <div class="article-quote-box">
                        <em>«No nacemos con una calculadora en el cerebro, sino con un 'acumulador analógico' en el lóbulo parietal capaz de estimar cantidades aproximadas desde los primeros meses de vida.»</em>
                        <small>— Dr. Stanislas Dehaene, Catedrático de Psicología Cognitiva Experimental (Collège de France)</small>
                    </div>
                </div>
                <div class="article-section">
                    <h3>2. Gnosia Digital y Desarrollo del Pensamiento Matemático</h3>
                    <p>El área parietal encargada de la percepción y diferenciación de los propios dedos (gnosia digital) está íntimamente yuxtapuesta y conectada con las redes del cálculo aritmético. La neurociencia ha confirmado que prohibir a los niños contar con los dedos en etapas tempranas perjudica la consolidación de la línea numérica mental parietal. Contar con los dedos es el puente biológico entre lo concreto y lo simbólico.</p>
                </div>
                <div class="article-section">
                    <h3>3. Integración Multisensorial: De la Sensación al Concepto</h3>
                    <p>El lóbulo parietal actúa como un intercambiador multimodal donde confluyen las señales auditivas del lóbulo temporal, las visuales del lóbulo occipital y las táctiles de la corteza somatosensorial. Cuantas más modalidades sensoriales coherentes involucre una actividad pedagógica (ver, tocar, escuchar y manipular), mayor es la densidad de espinas dendríticas generadas en la corteza parietal asociativa.</p>
                </div>
                <div class="article-section">
                    <h3>4. Aplicaciones Prácticas en el Aula</h3>
                    <ul>
                        <li><strong>Metodología Singapur (CPA: Concreto - Pictórico - Abstracto):</strong> Iniciar siempre cualquier concepto abstracto con manipulación física parietal antes de pasar a la ecuación formal.</li>
                        <li><strong>Anclajes Visuoespaciales:</strong> Uso de líneas de tiempo físicas en el suelo del aula, ejes cartesianos interactivos y mapas mentales espaciales.</li>
                        <li><strong>Modelado Físico y Maker:</strong> Construcción de prototipos tridimensionales para activar las praxias constructivas del hemisferio parietal.</li>
                    </ul>
                </div>
            `
        },
        temporal: {
            id: 'temporal',
            lobe: 'Lóbulo Temporal y Sistema Límbico',
            title: 'Lóbulo Temporal y Sistema Límbico: Memoria a Largo Plazo, Emoción y Comprensión del Lenguaje',
            subtitle: 'El eje hipocampo-amígdala, el área de Wernicke, la repetición espaciada y el papel catalizador de la emoción.',
            tag: 'NEUROEDUCACIÓN // MEMORIA, LENGUAJE & EMOCIÓN',
            icon: 'ph-users-four',
            color: '#C084FC',
            badge: 'Corteza Auditiva & Sistema de Memoria Declarativa',
            basicProcesses: 'Procesamiento auditivo primario (área de Heschl, corteza A1), discriminación de tonos, prosodia vocal y ritmos.',
            advancedProcesses: 'Consolidación de memoria declarativa (episódica y semántica vía Hipocampo), comprensión del lenguaje semántico (Área de Wernicke), modulación emocional de la consolidación (Amígdala basolateral), reconocimiento de rostros familiares (giro fusiforme).',
            classroomApplication: 'Curiosidad como detonante dopaminérgico inicial, storytelling pedagógico, repetición espaciada (Spaced Retrieval), clima emocional de aula seguro e higiene del sueño para la consolidación sináptica.',
            readingTime: '8 min de lectura académica',
            bodyHtml: `
                <div class="article-section">
                    <h3>1. El Hipocampo y la Potenciación a Largo Plazo (LTP)</h3>
                    <p>En la cara medial del lóbulo temporal reside el <strong>hipocampo</strong>, la estructura clave para la consolidación de la memoria declarativa (lo que podemos verbalizar y recordar conscientemente). Mediante el fenómeno electrofisiológico de la <strong>Potenciación a Largo Plazo (LTP)</strong> mediada por receptores glutamatérgicos NMDA, las conexiones neuronales activadas simultáneamente incrementan su fuerza de transmisión.</p>
                    <div class="article-quote-box">
                        <em>«El cerebro sólo aprende si hay emoción. La curiosidad abre las puertas de la atención, y sin atención sostenida no hay consolidación hipocampal.»</em>
                        <small>— Dr. Francisco Mora Teruel, Doctor en Medicina y Neurociencia (Universidad Complutense de Madrid)</small>
                    </div>
                </div>
                <div class="article-section">
                    <h3>2. La Amígdala: El Semáforo Afectivo del Aprendizaje</h3>
                    <p>La amígdala cerebral actúa como evaluador de relevancia biológica. Cuando el estudiante experimenta una amenaza (humillación pública, miedo al castigo o estrés severo), la amígdala dispara la liberación masiva de cortisol y noradrenalina, bloqueando físicamente el flujo sináptico hacia el hipocampo y la corteza prefrontal (secuestro amigdalino). En contraste, un ambiente de aula emocionalmente seguro y estimulante libera dopamina, la cual actúa como un 'marcador biológico' que le indica al hipocampo: <em>«¡Guarda esta información, es vital!»</em>.</p>
                </div>
                <div class="article-section">
                    <h3>3. El Área de Wernicke y la Arquitectura del Significado</h3>
                    <p>Ubicada en la porción posterior del giro temporal superior (área 22 de Brodmann), el área de Wernicke decodifica la estructura fonológica y semántica de las palabras. El aprendizaje significativo postulado por David Ausubel encuentra aquí su correlato neural: los nuevos conceptos deben conectarse con las redes semánticas preexistentes en los lóbulos temporales del alumno para no disiparse en el olvido.</p>
                </div>
                <div class="article-section">
                    <h3>4. Recomendaciones Neurodidácticas Clave</h3>
                    <ul>
                        <li><strong>Práctica de Recuperación Activa (Retrieval Practice):</strong> Realizar mini-quizzes formativos sin nota o preguntas de autoevaluación fortalece la memoria mucho más que releer apuntes de forma pasiva.</li>
                        <li><strong>Efecto de Espaciamiento (Spaced Repetition):</strong> Distribuir el estudio en sesiones breves a lo largo de varias semanas para vencer la curva del olvido de Ebbinghaus.</li>
                        <li><strong>El Sueño como Fase Activa de Consolidación:</strong> Durante el sueño de ondas lentas y fase REM, el hipocampo reproduce los patrones neuronales del día y transfiere la información a la neocorteza temporal para su almacenamiento definitivo.</li>
                    </ul>
                </div>
            `
        },
        occipital: {
            id: 'occipital',
            lobe: 'Lóbulo Occipital',
            title: 'Lóbulo Occipital y Reciclaje Neuronal: De la Percepción Visual a la Alfabetización y Evaluación',
            subtitle: 'Procesamiento retinotópico, discriminación de patrones gráficos, reciclaje neuronal según Stanislas Dehaene y visual thinking.',
            tag: 'NEUROEDUCACIÓN // VISIÓN, LECTURA & EVALUACIÓN FORMATIVA',
            icon: 'ph-pencil-line',
            color: '#F59E0B',
            badge: 'Corteza Visual Primaria & Asociativa',
            basicProcesses: 'Procesamiento visual retinotópico primario (corteza estriada V1 / área 17), detección de bordes, líneas de orientación, contraste lumínico y frecuencias espaciales.',
            advancedProcesses: 'Reconocimiento invariante de formas, rostros y objetos (vía ventral), percepción del movimiento y localización espacial (vía dorsal), reciclaje neuronal para la lectura (Área de la Forma Visual de las Palabras - VWFA / Caja de Letras del Cerebro).',
            classroomApplication: 'Teoría de la Codificación Dual de Paivio (imagen + palabra sin sobrecarga cognitiva), diseño de rúbricas visuales transparentes de evaluación formativa, sketchnoting y mapas conceptuales cromáticos.',
            readingTime: '6 min de lectura académica',
            bodyHtml: `
                <div class="article-section">
                    <h3>1. De la Luz al Significado: La Vía Visual Ventral</h3>
                    <p>El lóbulo occipital procesa la información fotónica captada por la retina con una precisión topográfica asombrosa. A través de la vía visual ventral (el flujo del <em>«¿Qué es?»</em>), la corteza estriada V1 proyecta hacia V2, V4 y la corteza temporal inferior para transformar fotones en objetos, colores, símbolos y rostros con invariancia de escala y orientación.</p>
                    <div class="article-quote-box">
                        <em>«Aprender a leer consiste en reciclar un circuito cortical preexistente, originalmente evolucionado para el reconocimiento visual de formas de la naturaleza, para que responda a las letras de nuestro alfabeto.»</em>
                        <small>— Dr. Stanislas Dehaene, «Los ojos de la mente y las neuronas de la lectura»</small>
                    </div>
                </div>
                <div class="article-section">
                    <h3>2. La Teoría del Reciclaje Neuronal y la Caja de Letras</h3>
                    <p>La humanidad inventó la escritura hace apenas 5.400 años, un parpadeo en términos de evolución biológica; por ende, nuestro genoma no incluye ningún 'gen de la lectura'. El cerebro aprende a leer reconvirtiendo plásticamente el giro fusiforme occipitotemporal izquierdo (la <strong>Caja de Letras del Cerebro</strong>), conectándola directamente con las áreas motoras y fonológicas del lenguaje.</p>
                </div>
                <div class="article-section">
                    <h3>3. Teoría de la Codificación Dual y Evaluación Formativa</h3>
                    <p>Formulada por Allan Paivio y respaldada por la neuroimagen moderna, la Teoría de la Codificación Dual establece que el cerebro procesa la información visual y verbal a través de canales independientes pero interconectados. Cuando un docente acompaña una explicación con un diagrama gráfico bien estructurado, duplica las posibilidades de retención sin saturar la corteza occipital ni la memoria de trabajo.</p>
                </div>
                <div class="article-section">
                    <h3>4. Aplicación Neuroeducativa en Instrumentos de Evaluación</h3>
                    <ul>
                        <li><strong>Rúbricas Visuales Transparentes:</strong> Reemplazar textos densos de evaluación por escalas gráficas, iconos de desempeño e infografías de criterios. Esto reduce la ansiedad evaluativa y permite al estudiante autoevaluar su progreso con un solo vistazo.</li>
                        <li><strong>Pensamiento Visual (Sketchnoting):</strong> Estimular a los estudiantes a sintetizar conferencias y lecturas combinando dibujos sencillos, flechas relacionales y palabras clave.</li>
                        <li><strong>Jerarquía Cromática Pedagógica:</strong> Emplear un código coherente de color (verde para fortalezas, ámbar para áreas de oportunidad) para facilitar el escaneo visual rápido.</li>
                    </ul>
                </div>
            `
        },
        cerebelo: {
            id: 'cerebelo',
            lobe: 'Cerebelo y Tronco Encefálico',
            title: 'El Cerebelo y los Ganglios Basales: Automatización Procedural, Fluidez y Aprendizaje Lúdico',
            subtitle: 'Del control del equilibrio a la sintonía fina del pensamiento: cómo el juego, la práctica deliberada y el movimiento potencian la cognición.',
            tag: 'NEUROEDUCACIÓN // LÚDICA, GAMIFICACIÓN & FLUJO',
            icon: 'ph-game-controller',
            color: '#34D399',
            badge: 'Coordinador Motor & Sintonizador Cognitivo',
            basicProcesses: 'Coordinación motriz refleja, control del equilibrio vestibular, modulación del tono muscular antigravitatorio y timing rítmico.',
            advancedProcesses: 'Automatización de destrezas procedimentales complejas (memoria procedimental implícita en bucle cerebelo-ganglios basales), predicción y corrección de errores en tiempo real, sintonización fina de la velocidad del pensamiento y fluidez lingüística.',
            classroomApplication: 'Gamificación educativa con retroalimentación inmediata, micro-retos progresivos para alcanzar el Estado de Flujo (Csikszentmihalyi), práctica distribuida deliberada, simuladores de rol y aprendizaje basado en juegos.',
            readingTime: '7 min de lectura académica',
            bodyHtml: `
                <div class="article-section">
                    <h3>1. El Gigante Olvidado: Más del 50% de las Neuronas del Encéfalo</h3>
                    <p>Aunque ocupa únicamente el 10% del volumen craneal, el <strong>cerebelo</strong> contiene más de la mitad de todas las neuronas de nuestro sistema nervioso central, densamente empaquetadas en su corteza plegada en folia. Históricamente se consideró un simple órgano motor; sin embargo, la neurociencia contemporánea ha revelado que sus circuitos feed-forward modulan activamente la atención, el lenguaje y las funciones ejecutivas.</p>
                    <div class="article-quote-box">
                        <em>«El cerebelo es el procesador que toma las acciones torpes y las convierte en destrezas fluidas, automáticas e inconscientes. Lo que hace para los dedos de un pianista, lo hace también para los conceptos en la mente del aprendiz.»</em>
                        <small>— Dr. John Ratey, Profesor Clínico de Psiquiatría (Harvard Medical School)</small>
                    </div>
                </div>
                <div class="article-section">
                    <h3>2. Automatización y Liberación de Carga Cognitiva Prefrontal</h3>
                    <p>Cuando un estudiante aprende por primera vez a resolver una ecuación o escribir a máquina, su corteza prefrontal trabaja a máxima potencia y se agota rápidamente. Mediante la práctica deliberada repetida, el cerebelo y los ganglios basales empaquetan la secuencia en una <strong>memoria procedimental automática</strong>. Esto libera ancho de banda prefrontal para el pensamiento creativo y de orden superior.</p>
                </div>
                <div class="article-section">
                    <h3>3. Neurobiología de la Gamificación y el Estado de Flujo</h3>
                    <p>Los juegos bien diseñados activan circuitos de recompensa dopaminérgica mediante bucles cerrados de retroalimentación inmediata: reto -> intento -> error predictivo -> corrección instantánea -> recompensa. El psicólogo Mihaly Csikszentmihalyi denominó a este estado óptimo de inmersión <strong>«Estado de Flujo»</strong>, donde el nivel de desafío se equilibra milimétricamente con el nivel de habilidad del jugador.</p>
                </div>
                <div class="article-section">
                    <h3>4. Estrategias Docentes Basadas en el Cerebelo</h3>
                    <ul>
                        <li><strong>Mecánicas Gamificadas con Feedback Inmediato:</strong> Cuestionarios formativos interactivos donde el alumno conozca al instante su precisión y la justificación pedagógica del error.</li>
                        <li><strong>Práctica Distribuida y Fraccionada:</strong> 15 minutos diarios de práctica deliberada son infinitamente más efectivos que una maratón de 3 horas el día previo a la entrega.</li>
                        <li><strong>Incorporación de Movimiento Físico en la Rutina de Clase:</strong> La activación cerebelosa a través de estiramientos y cambios de estación física potencia la irrigación sanguínea en todo el manto cortical.</li>
                    </ul>
                </div>
            `
        },
        all: {
            id: 'all',
            lobe: 'Conectoma Global y Neuroplasticidad',
            title: 'El Conectoma Humano y la Neuroplasticidad: Ecosistema Sináptico Integrado en la Educación',
            subtitle: 'Sinapsis hebbianas, redes cerebrales a gran escala (DMN vs TPN), y los 7 principios universales de la neuroeducación transformadora.',
            tag: 'NEUROEDUCACIÓN // CONECTOMA & NEUROPLASTICIDAD',
            icon: 'ph-brain',
            color: '#22D3EE',
            badge: 'Red de Redes Sinápticas Globales',
            basicProcesses: 'Generación y propagación electroquímica de potenciales de acción, sinaptogénesis, neurotransmisión y metabolismo glial.',
            advancedProcesses: 'Neuroplasticidad estructural y funcional Hebbiana, integración interhemisférica vía cuerpo calloso, alternancia dinámica entre la Red por Defecto (DMN) y la Red de Atención Ejecutiva, pensamiento holístico divergente y convergente.',
            classroomApplication: 'Cultura de Mentalidad de Crecimiento (Carol Dweck), destierro absoluto de neuromitos pedagógicos, climatología de aula enriquecida y diseño instruccional holístico e interdisciplinar.',
            readingTime: '9 min de lectura académica',
            bodyHtml: `
                <div class="article-section">
                    <h3>1. El Conectoma: El Mapa de Cableado del Pensamiento</h3>
                    <p>El cerebro humano alberga aproximadamente 86.000 millones de neuronas conectadas por más de 100 billones de sinapsis. Esta inmensa red de fibra de sustancia blanca conforma el <strong>conectoma humano</strong>. La cognición y el aprendizaje nunca residen en una estructura aislada, sino en la interacción rítmica y sincronizada entre redes neuronales a gran escala.</p>
                    <div class="article-quote-box">
                        <em>«Las neuronas que disparan juntas, se conectan juntas (Neurons that fire together, wire together). Toda experiencia de aprendizaje reorganiza físicamente la estructura microscópica del cerebro del alumno.»</em>
                        <small>— Donald Hebb, Postulado de Plasticidad Sináptica Hebbiana (1949)</small>
                    </div>
                </div>
                <div class="article-section">
                    <h3>2. Desmontando Neuromitos en la Sala de Clases</h3>
                    <p>Para aplicar la neurociencia con verdadero rigor en la educación, el primer paso es erradicar los mitos pseudocientíficos ampliamente difundidos:</p>
                    <ul>
                        <li><strong>Mito 1: «Usamos sólo el 10% de nuestro cerebro»:</strong> FALSO. Técnicas de resonancia magnética funcional (fMRI) demuestran que utilizamos el 100% del encéfalo, incluso mientras dormimos.</li>
                        <li><strong>Mito 2: «Estilos de Aprendizaje VAK (Visual, Auditivo, Kinestésico)»:</strong> FALSO. No existe evidencia científica que respalde que enseñar a un alumno exclusivamente en su supuesto 'estilo preferido' mejore su aprendizaje. Por el contrario, el cerebro aprende mejor cuando integra múltiples canales sensoriales simultáneamente.</li>
                        <li><strong>Mito 3: «Cerebro Izquierdo Lógico vs Cerebro Derecho Creativo»:</strong> FALSO. Ambos hemisferios colaboran estrechamente a través del cuerpo calloso en cualquier tarea cognitiva compleja.</li>
                    </ul>
                </div>
                <div class="article-section">
                    <h3>3. Los 7 Pilares Universales de la Neuroeducación en PsicoEduca</h3>
                    <ol>
                        <li><strong>Plasticidad Cerebral:</strong> La inteligencia no es un rasgo fijo; el cerebro se expande y reorganiza ante el esfuerzo sostenido.</li>
                        <li><strong>Emoción y Curiosidad:</strong> El contenido sin impacto afectivo es invisible para los sistemas de memoria temporal e hipocampal.</li>
                        <li><strong>Atención Selectiva:</strong> El cerebro no puede prestar atención sostenida de alta intensidad por más de 20 minutos sin una variación de estímulo.</li>
                        <li><strong>Carga Cognitiva Controlada:</strong> Evitar la sobrecarga innecesaria de la memoria de trabajo eliminando elementos decorativos irrelevantes.</li>
                        <li><strong>Práctica Distribuida y Feedback:</strong> El error constructivo con corrección temprana es el motor neurobiológico del aprendizaje.</li>
                        <li><strong>Sueño y Descanso:</strong> Dormir no es perder tiempo; es el periodo biológico insustituible donde las sinapsis se consolidan.</li>
                        <li><strong>Actividad Física y Oxigenación:</strong> El ejercicio aeróbico regular incrementa el volumen del hipocampo y la concentración prefrontal.</li>
                    </ol>
                </div>
            `
        }
    };

    // --- GENERADOR DE AVATAR PIXEL ART EVOLUTIVO (SVG DINÁMICO 16-BIT) ---
    const generatePixelAvatarSVG = (gender, levelIndex, unlockedBadgesCount) => {
        const lvl = Math.max(0, Math.min(5, levelIndex || 0));
        const isFemale = (gender === 'female');
        
        const outfitColors = [
            { primary: '#0284C7', secondary: '#38BDF8', trim: '#FCD34D', cape: '#0369A1' }, // Tier 1: Explorador
            { primary: '#2563EB', secondary: '#60A5FA', trim: '#F59E0B', cape: '#1D4ED8' }, // Tier 2: Aprendiz
            { primary: '#7C3AED', secondary: '#A78BFA', trim: '#22D3EE', cape: '#6D28D9' }, // Tier 3: Practicante
            { primary: '#0F172A', secondary: '#22D3EE', trim: '#F59E0B', cape: '#1E293B' }, // Tier 4: Profesional
            { primary: '#1E1B4B', secondary: '#34D399', trim: '#C084FC', cape: '#312E81' }, // Tier 5: Especialista
            { primary: '#090D16', secondary: '#F59E0B', trim: '#FDE047', cape: '#B45309' }  // Tier 6: Mentor
        ];
        const col = outfitColors[lvl];
        const skin = '#FCD34D';
        const skinShadow = '#F59E0B';
        const hairColor = isFemale ? (lvl >= 4 ? '#A855F7' : '#92400E') : (lvl >= 4 ? '#06B6D4' : '#78350F');
        const hairHighlight = isFemale ? (lvl >= 4 ? '#C084FC' : '#B45309') : (lvl >= 4 ? '#22D3EE' : '#92400E');
        
        const rects = [];
        const r = (x, y, w, h, fill) => {
            rects.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`);
        };

        // 1. Alas Celestiales de Energía (Tier 6 - Mentor)
        if (lvl === 5) {
            // Ala izquierda
            r(1, 12, 4, 2, '#38BDF8');
            r(2, 10, 4, 3, '#22D3EE');
            r(3, 8, 4, 3, '#BAE6FD');
            r(4, 6, 3, 3, '#FDE047');
            r(0, 14, 5, 2, '#0284C7');
            // Ala derecha
            r(23, 12, 4, 2, '#38BDF8');
            r(22, 10, 4, 3, '#22D3EE');
            r(21, 8, 4, 3, '#BAE6FD');
            r(21, 6, 3, 3, '#FDE047');
            r(23, 14, 5, 2, '#0284C7');
        }

        // 2. Orbes Flotantes Sinápticos (Tier 5 & 6)
        if (lvl >= 4) {
            r(3, 17, 3, 3, '#22D3EE');
            r(4, 18, 1, 1, '#FFFFFF');
            r(22, 17, 3, 3, '#C084FC');
            r(23, 18, 1, 1, '#FFFFFF');
        }

        // 3. Corona / Halo / Visor
        if (lvl === 5) {
            // Halo cósmico supremo
            r(10, 2, 8, 1, '#FDE047');
            r(9, 3, 2, 1, '#FDE047');
            r(17, 3, 2, 1, '#FDE047');
            r(11, 2, 6, 1, '#FFFFFF');
        } else if (lvl >= 3) {
            // Diadema cuántica / visor
            r(10, 7, 8, 2, col.secondary);
            r(13, 7, 2, 2, '#FFFFFF');
        } else if (lvl === 1) {
            // Gafas de aprendiz sobre la frente
            r(11, 7, 3, 2, '#38BDF8');
            r(15, 7, 3, 2, '#38BDF8');
            r(14, 8, 1, 1, '#1E293B');
        }

        // 4. Capa posterior (Tiers 2+)
        if (lvl >= 2) {
            r(7, 16, 2, 13, col.cape);
            r(19, 16, 2, 13, col.cape);
            r(6, 18, 2, 10, col.cape);
            r(20, 18, 2, 10, col.cape);
            if (lvl >= 4) {
                r(5, 20, 2, 7, col.secondary);
                r(21, 20, 2, 7, col.secondary);
            }
        }

        // 5. Cabello (Hombre vs Mujer)
        if (isFemale) {
            r(10, 5, 8, 3, hairColor);
            r(9, 6, 10, 3, hairColor);
            r(9, 5, 3, 1, hairHighlight);
            r(14, 5, 4, 1, hairHighlight);
            r(8, 8, 2, 11, hairColor);
            r(18, 8, 2, 11, hairColor);
            r(7, 9, 2, 9, hairColor);
            r(19, 9, 2, 9, hairColor);
            r(11, 6, 2, 1, hairHighlight);
            r(15, 6, 2, 1, hairHighlight);
        } else {
            r(10, 4, 8, 3, hairColor);
            r(9, 5, 10, 4, hairColor);
            r(8, 7, 2, 4, hairColor);
            r(18, 7, 2, 4, hairColor);
            r(9, 3, 2, 2, hairColor);
            r(12, 3, 3, 2, hairHighlight);
            r(16, 3, 2, 2, hairColor);
            r(10, 4, 4, 1, hairHighlight);
        }

        // 6. Rostro y Piel
        r(10, 8, 8, 7, skin);
        r(10, 14, 8, 1, skinShadow);

        // Ojos
        r(11, 10, 2, 2, '#0F172A');
        r(11, 10, 1, 1, '#FFFFFF');
        r(15, 10, 2, 2, '#0F172A');
        r(15, 10, 1, 1, '#FFFFFF');

        // Rubor
        r(10, 12, 1, 1, '#FB7185');
        r(17, 12, 1, 1, '#FB7185');

        // Sonrisa
        r(13, 13, 2, 1, '#BE185D');

        // 7. Cuello
        r(13, 15, 2, 1, skinShadow);

        // 8. Torso / Atuendo
        r(9, 16, 10, 8, col.primary);
        r(11, 16, 6, 7, col.secondary);

        if (lvl === 0) {
            r(13, 17, 2, 2, col.trim);
        } else if (lvl === 1) {
            r(13, 16, 2, 1, col.trim);
            r(13, 18, 2, 1, col.trim);
            r(13, 20, 2, 1, col.trim);
        } else if (lvl >= 2) {
            r(12, 17, 4, 4, col.primary);
            r(13, 18, 2, 2, col.trim);
            r(11, 16, 1, 6, col.trim);
            r(16, 16, 1, 6, col.trim);
        }

        // Cinturón
        r(9, 23, 10, 2, '#0F172A');
        r(13, 23, 2, 2, col.trim);

        // 9. Brazos
        r(7, 16, 2, 6, col.primary);
        r(7, 22, 2, 2, skin);
        r(19, 16, 2, 6, col.primary);
        r(19, 22, 2, 2, skin);

        // 10. Accesorio en mano
        if (lvl === 0) {
            r(21, 20, 1, 4, '#F59E0B');
        } else if (lvl === 1) {
            r(21, 19, 2, 5, '#FEF08A');
            r(21, 21, 2, 1, '#D97706');
        } else if (lvl === 2) {
            r(21, 18, 3, 5, '#0284C7');
            r(22, 19, 1, 3, '#38BDF8');
        } else if (lvl === 3) {
            r(21, 15, 1, 10, '#F59E0B');
            r(20, 14, 3, 2, '#22D3EE');
            r(21, 13, 1, 1, '#FFFFFF');
        } else if (lvl >= 4) {
            r(22, 12, 1, 15, '#F59E0B');
            r(21, 10, 3, 3, col.secondary);
            r(22, 11, 1, 1, '#FFFFFF');
            r(20, 11, 1, 1, col.trim);
            r(24, 11, 1, 1, col.trim);
        }

        // 11. Piernas y Pantalones
        r(10, 25, 3, 6, '#1E293B');
        r(15, 25, 3, 6, '#1E293B');

        // 12. Botas
        r(9, 31, 4, 3, col.primary);
        r(9, 33, 5, 1, '#0F172A');
        r(15, 31, 4, 3, col.primary);
        r(14, 33, 5, 1, '#0F172A');

        if (lvl >= 3) {
            r(10, 32, 2, 1, col.secondary);
            r(16, 32, 2, 1, col.secondary);
        }

        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 36" width="220" height="280" class="pixel-avatar-svg" shape-rendering="crispEdges">
            ${rects.join('')}
        </svg>`;
    };

    window._activeAprendeTab = 'cerebro';
    window.app.switchAprendeTab = (tabKey) => {
        try { playSound('click'); } catch(e) {}
        window._activeAprendeTab = tabKey;
        const btns = document.querySelectorAll('.aprende-tab-btn');
        btns.forEach(b => {
            if (b.getAttribute('data-tab') === tabKey) b.classList.add('active');
            else b.classList.remove('active');
        });
        const panels = document.querySelectorAll('.aprende-tab-content');
        panels.forEach(p => {
            if (p.id === `tab-pane-${tabKey}`) p.style.display = 'block';
            else p.style.display = 'none';
        });
        if (tabKey === 'cerebro') {
            setTimeout(() => {
                if (window.initBrain3D) window.initBrain3D();
            }, 80);
        }
    };

    // 3. VISTA APRENDE (Laboratorio 3D Aprendamos del Cerebro, Rutas, Cursos y Biblioteca)
    const renderAprende = () => {
        const curTab = window._activeAprendeTab || 'cerebro';
        return `
            <div class="view-animate">
                <!-- Sub-Navegación de Pestañas en Aprende -->
                <div class="aprende-subnav">
                    <button class="aprende-tab-btn ${curTab === 'cerebro' ? 'active' : ''}" data-tab="cerebro" onclick="app.switchAprendeTab('cerebro')">
                        <i class="ph-bold ph-brain"></i> 🧠 Aprendamos del Cerebro (3D)
                    </button>
                    <button class="aprende-tab-btn ${curTab === 'rutas' ? 'active' : ''}" data-tab="rutas" onclick="app.switchAprendeTab('rutas')">
                        <i class="ph-bold ph-map-trifold"></i> 🛣️ Rutas de Aprendizaje
                    </button>
                    <button class="aprende-tab-btn ${curTab === 'cursos' ? 'active' : ''}" data-tab="cursos" onclick="app.switchAprendeTab('cursos')">
                        <i class="ph-bold ph-graduation-cap"></i> 📚 Cursos y Microcursos
                    </button>
                    <button class="aprende-tab-btn ${curTab === 'biblioteca' ? 'active' : ''}" data-tab="biblioteca" onclick="app.switchAprendeTab('biblioteca')">
                        <i class="ph-bold ph-books"></i> 📖 Biblioteca Psicoeduca
                    </button>
                </div>

                <!-- PANE 1: APRENDAMOS DEL CEREBRO (3D INTERACTIVO & PROCESOS COGNITIVOS) -->
                <div id="tab-pane-cerebro" class="aprende-tab-content" style="display: ${curTab === 'cerebro' ? 'block' : 'none'};">
                    <div class="view-header" style="margin-bottom: 22px;">
                        <div style="display: inline-flex; align-items: center; gap: 8px; color: var(--color-cyan); font-family: var(--font-tech); font-size: 11.5px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 6px;">
                            <i class="ph-bold ph-brain"></i> LABORATORIO DE NEUROEDUCACIÓN // MODELO 3D
                        </div>
                        <h1 class="view-title">Aprendamos del Cerebro</h1>
                        <p class="view-subtitle">Explora el encéfalo humano en 3D interactivo, descubre qué procesos cognitivos básicos y avanzados residen en cada región y cómo aplicar la neuroeducación en tu aula.</p>
                    </div>

                    <!-- Tarjeta de la Consola del Cerebro 3D para Aprender -->
                    <div class="profile-brain-card" style="margin-bottom: 35px; width: 100%;">
                        <div class="brain-console-header">
                            <div>
                                <span style="font-size: 10.5px; font-weight: 800; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1.5px; font-family: var(--font-tech); display: block;">
                                    <i class="ph-bold ph-cube"></i> ENTORNO VIRTUAL DE APRENDIZAJE NEUROLÓGICO
                                </span>
                                <h3 style="font-size: 18px; color: #fff; font-family: var(--font-tech); margin-top: 2px;">
                                    Laboratorio Bioconectoma 3D: Estructuras & Procesos Cognitivos
                                </h3>
                            </div>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                <button class="icon-btn" onclick="app.zoomBrain(1.2)" title="Acercar Zoom">
                                    <i class="ph-bold ph-magnifying-glass-plus"></i>
                                </button>
                                <button class="icon-btn" onclick="app.zoomBrain(0.8)" title="Alejar Zoom">
                                    <i class="ph-bold ph-magnifying-glass-minus"></i>
                                </button>
                                <button class="icon-btn" onclick="app.toggleBrainAutoRotate()" id="btn-brain-spin" title="Pausar / Reanudar Rotación" style="color: var(--color-cyan); border-color: var(--color-cyan);">
                                    <i class="ph-bold ph-arrow-clockwise"></i>
                                </button>
                                <button class="icon-btn" onclick="app.resetBrainView()" title="Restablecer Vista Original">
                                    <i class="ph-bold ph-arrows-in-cardinal"></i>
                                </button>
                                <button class="icon-btn" onclick="app.triggerBrainPulse()" title="Disparar Impulso Sináptico">
                                    <i class="ph-bold ph-lightning"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Visor 3D Canvas con 560px de altura y fondo negro espacial -->
                        <div class="brain-canvas-container" id="brain-canvas-wrapper" title="Haz clic sobre cualquier región o arrastra con el cursor para explorar el cerebro en 3D">
                            <canvas id="brain-3d-canvas"></canvas>
                            <span class="brain-3d-hint"><i class="ph-bold ph-hand-pointing"></i> Posa el cursor o haz clic en cualquier lóbulo para revelar sus procesos cognitivos • Arrastra 360° • Doble clic para abrir artículo</span>
                        </div>

                        <!-- Selector de Lóbulos Cerebrales -->
                        <div class="brain-lobes-selector">
                            <button class="brain-lobe-btn active" data-lobe="all" onclick="app.focusBrainLobe('all')">
                                <i class="ph-bold ph-brain"></i> Todo el Cerebro
                            </button>
                            <button class="brain-lobe-btn" data-lobe="frontal" onclick="app.focusBrainLobe('frontal')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #22D3EE;"></span> Frontal (Funciones Ejecutivas)
                            </button>
                            <button class="brain-lobe-btn" data-lobe="parietal" onclick="app.focusBrainLobe('parietal')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #38BDF8;"></span> Parietal (Cálculo & Visoespacial)
                            </button>
                            <button class="brain-lobe-btn" data-lobe="temporal" onclick="app.focusBrainLobe('temporal')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #C084FC;"></span> Temporal (Memoria & Lenguaje)
                            </button>
                            <button class="brain-lobe-btn" data-lobe="occipital" onclick="app.focusBrainLobe('occipital')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span> Occipital (Visión & Lectura)
                            </button>
                            <button class="brain-lobe-btn" data-lobe="cerebelo" onclick="app.focusBrainLobe('cerebelo')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #34D399;"></span> Cerebelo (Lúdica & Automatización)
                            </button>
                        </div>

                        <!-- Panel de Procesos Cognitivos y Neuroeducación del Lóbulo Seleccionado -->
                        <div class="brain-telemetry-readout" id="brain-cognitive-panel" style="padding: 22px; flex-direction: column; align-items: stretch; gap: 16px;">
                            <!-- Dinámicamente poblado con app.focusBrainLobe() -->
                        </div>
                    </div>

                    <!-- Tarjetas Guía Rápidas de Neuroeducación -->
                    <div class="view-header" style="margin-top: 10px;">
                        <h2 class="view-title" style="font-size: 20px;">Artículos Académicos de Neuroeducación</h2>
                        <p class="view-subtitle" style="font-size: 13px;">Profundiza en la evidencia científica detrás de cada proceso cognitivo y su traslación a la didáctica.</p>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 20px;">
                        <div class="card avatar-card" style="padding: 20px; cursor: pointer;" onclick="app.openNeuroArticle('frontal')">
                            <span class="route-badge" style="background: rgba(34,211,238,0.12); color: var(--color-cyan); border-color: rgba(34,211,238,0.3); font-size: 10.5px;">AUTORREGULACIÓN</span>
                            <h4 style="font-size: 16px; color: #fff; margin: 10px 0 6px;"><i class="ph-bold ph-cpu" style="color: var(--color-cyan);"></i> Funciones Ejecutivas en el Aula</h4>
                            <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.4; margin-bottom: 12px;">Cómo el control inhibitorio y la memoria de trabajo determinan el éxito escolar por encima del CI.</p>
                            <span style="font-size: 11.5px; color: var(--color-cyan); font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">Leer artículo completo <i class="ph-bold ph-arrow-right"></i></span>
                        </div>
                        <div class="card avatar-card" style="padding: 20px; cursor: pointer;" onclick="app.openNeuroArticle('temporal')">
                            <span class="route-badge" style="background: rgba(192,132,252,0.12); color: #C084FC; border-color: rgba(192,132,252,0.3); font-size: 10.5px;">EMOCIÓN Y APRENDIZAJE</span>
                            <h4 style="font-size: 16px; color: #fff; margin: 10px 0 6px;"><i class="ph-bold ph-heart" style="color: #C084FC;"></i> El Eje Hipocampo-Amígdala</h4>
                            <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.4; margin-bottom: 12px;">Francisco Mora: "Solo se puede aprender aquello que se ama". La emoción como catalizador de la memoria.</p>
                            <span style="font-size: 11.5px; color: #C084FC; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">Leer artículo completo <i class="ph-bold ph-arrow-right"></i></span>
                        </div>
                        <div class="card avatar-card" style="padding: 20px; cursor: pointer;" onclick="app.openNeuroArticle('occipital')">
                            <span class="route-badge" style="background: rgba(245,158,11,0.12); color: var(--warning); border-color: rgba(245,158,11,0.3); font-size: 10.5px;">ALFABETIZACIÓN</span>
                            <h4 style="font-size: 16px; color: #fff; margin: 10px 0 6px;"><i class="ph-bold ph-eye" style="color: var(--warning);"></i> Reciclaje Neuronal de la Lectura</h4>
                            <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.4; margin-bottom: 12px;">Stanislas Dehaene y la caja de letras del cerebro: cómo convertimos formas visuales en conceptos.</p>
                            <span style="font-size: 11.5px; color: var(--warning); font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">Leer artículo completo <i class="ph-bold ph-arrow-right"></i></span>
                        </div>
                    </div>
                </div>

                <!-- PANE 2: RUTAS DE APRENDIZAJE -->
                <div id="tab-pane-rutas" class="aprende-tab-content" style="display: ${curTab === 'rutas' ? 'block' : 'none'};">
                    <div class="view-header" style="margin-top: 10px;"><h2 class="view-title" style="font-size: 22px;">Rutas de Aprendizaje</h2></div>
                    <div style="margin-bottom: 40px;">
                        ${Object.values(routesData).map(r => `
                            <div class="route-card">
                                <div class="route-header">
                                    <div>
                                        <span class="route-badge">${r.category}</span>
                                        <h3 style="font-size: 22px; color: #fff; margin-top: 8px;">${r.title}</h3>
                                    </div>
                                    <span style="font-size: 13px; color: var(--warning); font-weight: 800; background: rgba(251,191,36,0.1); padding: 4px 12px; border-radius: 12px;">+${r.xp} XP</span>
                                </div>
                                <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 16px;">${r.desc}</p>
                                
                                <div class="route-steps-timeline">
                                    ${r.steps.map(s => `
                                        <div class="route-step-node">
                                            <span class="step-number">${s.num}</span>
                                            <div class="step-title">${s.title}</div>
                                            <div style="font-size: 12px; color: var(--text-secondary);">${s.desc}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- PANE 3: CURSOS Y MICROCURSOS -->
                <div id="tab-pane-cursos" class="aprende-tab-content" style="display: ${curTab === 'cursos' ? 'block' : 'none'};">
                    <div class="view-header"><h2 class="view-title" style="font-size: 22px;">Cursos y Micro-cursos</h2></div>
                    <div class="grid-container" style="margin-bottom: 40px;">
                        ${Object.values(coursesData).map(c => `
                            <div class="card avatar-card" onclick="app.startCourse('${c.id}')" style="padding: 0;">
                                <div style="height: 160px; background: url('${c.image}') center/cover; position: relative;"></div>
                                <div style="padding: 20px;">
                                    <span style="font-size: 10px; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 0.5px;">${c.category}</span>
                                    <h3 class="card-title" style="margin: 6px 0 8px;">${c.title}</h3>
                                    <p class="card-desc" style="margin-bottom: 14px;">${c.desc}</p>
                                    <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-secondary);"><span>PROGRESO</span><span>${c.progress}%</span></div>
                                    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${c.progress}%;"></div></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- PANE 4: BIBLIOTECA PSICOEDUCA -->
                <div id="tab-pane-biblioteca" class="aprende-tab-content" style="display: ${curTab === 'biblioteca' ? 'block' : 'none'};">
                    <div class="view-header"><h2 class="view-title" style="font-size: 22px;">Biblioteca Psicoeduca</h2></div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                        ${libraryData.map(lib => `
                            <div class="card avatar-card" style="padding: 20px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                                    <span class="route-badge" style="font-size: 10px;">${lib.type}</span>
                                    <span style="font-size: 11px; color: var(--text-secondary);">${lib.topic}</span>
                                </div>
                                <h4 style="font-size: 16px; color: #fff; margin-bottom: 8px;"><i class="ph ${lib.icon}"></i> ${lib.title}</h4>
                                <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.4; margin-bottom: 15px;">${lib.desc}</p>
                                <button class="hero-btn" style="font-size: 12px; padding: 6px 14px; width: 100%; justify-content: center;" onclick="alert('Descargando/Consultando recurso: ${lib.title}')">Acceder a Recurso</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    };

    // 4. VISTA PRACTICA (Laboratorio Psicoeduca)
    const renderPractica = () => `
        <div class="view-animate">
            <div class="view-header">
                <h1 class="view-title">Laboratorio Psicoeduca</h1>
                <p class="view-subtitle">Espacio inmersivo de aprendizaje experiencial, simuladores, casos de estudio y role play.</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 40px;">
                ${Object.values(laboratorioData).map(lab => `
                    <div class="route-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                                <span class="route-badge">${lab.category}</span>
                                <span style="font-size: 11px; color: var(--success); font-weight: 700;"><i class="ph-bold ph-lightning"></i> Práctica Interactiva</span>
                            </div>
                            <h3 style="font-size: 20px; color: #fff; margin-bottom: 8px;"><i class="ph ${lab.icon}"></i> ${lab.title}</h3>
                            <p style="font-size: 13px; color: var(--primary); font-weight: 700; margin-bottom: 8px;">Competencia: ${lab.competencia}</p>
                            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;"><strong>Objetivo:</strong> ${lab.objetivo}</p>
                        </div>
                        <button class="hero-btn" style="width: 100%; justify-content: center;" onclick="app.openExternalModule('${lab.url}')"><i class="ph-bold ph-play"></i> Iniciar Simulador en Laboratorio</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // 5. VISTA EVALÚATE (Diagnósticos & Evaluaciones)
    const renderEvaluate = () => `
        <div class="view-animate">
            <div class="view-header">
                <h1 class="view-title">Diagnóstico y Evaluación</h1>
                <p class="view-subtitle">Centro de evaluación orientativa de competencias profesionales y pedagógicas.</p>
            </div>

            <!-- Disclaimer Orientativo -->
            <div style="background: rgba(251, 191, 36, 0.08); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 16px; padding: 16px 20px; margin-bottom: 30px; display: flex; align-items: center; gap: 14px;">
                <i class="ph-bold ph-info" style="font-size: 28px; color: var(--warning); flex-shrink: 0;"></i>
                <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.4; margin: 0;">
                    <strong>Aviso Informativo:</strong> Este instrumento tiene finalidad exclusivamente educativa, orientativa y de desarrollo profesional, y no constituye una evaluación psicológica clínica.
                </p>
            </div>

            <!-- Diagnósticos Situacionales -->
            <div class="view-header"><h2 class="view-title" style="font-size: 22px;">Diagnósticos Situacionales de Desarrollo</h2></div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 40px;">
                <div class="card avatar-card" onclick="app.startDiagnosticTest('innovation')" style="background: linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.25)); border-color: #EC4899;">
                    <div class="card-icon-wrapper" style="background: #DB2777; color: white;"><i class="ph-bold ph-scan"></i></div>
                    <h3 class="card-title" style="color: #FBCFE8; font-size: 19px;">Scanner de Innovación Educativa</h3>
                    <p class="card-desc">Evalúa metodologías, rol docente, uso de tecnología y diseño instruccional.</p>
                    <button class="hero-btn" style="background: #DB2777; margin-top: 15px;">Iniciar Scanner <i class="ph-bold ph-arrow-right"></i></button>
                </div>

                <div class="card avatar-card" onclick="app.startDiagnosticTest('pedagogical')" style="background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(168,85,247,0.2)); border-color: #A855F7;">
                    <div class="card-icon-wrapper" style="background: #9333EA; color: white;"><i class="ph-bold ph-strategy"></i></div>
                    <h3 class="card-title" style="color: #C084FC; font-size: 19px;">Diagnóstico de Habilidades Pedagógicas</h3>
                    <p class="card-desc">Mide tu capacidad de gestión de aula, evaluación formativa e interacción.</p>
                    <button class="hero-btn" style="background: #9333EA; margin-top: 15px;">Iniciar Prueba <i class="ph-bold ph-arrow-right"></i></button>
                </div>

                <div class="card avatar-card" onclick="app.startDiagnosticTest('constructivist')" style="background: linear-gradient(135deg, rgba(147,197,253,0.1), rgba(59,130,246,0.2)); border-color: var(--primary);">
                    <div class="card-icon-wrapper" style="background: var(--primary); color: var(--bg-dark);"><i class="ph-bold ph-brain"></i></div>
                    <h3 class="card-title" style="color: var(--primary); font-size: 19px;">Diagnóstico de Perfil Constructivista</h3>
                    <p class="card-desc">Mide científicamente tu capacidad de aplicar enfoques constructivistas y DUA.</p>
                    <button class="hero-btn" style="margin-top: 15px;">Iniciar Prueba <i class="ph-bold ph-arrow-right"></i></button>
                </div>
            </div>

            <!-- Cuatro Instrumentos de Evaluación Pedagógica Interactivos -->
            <div class="view-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;">
                <div>
                    <h2 class="view-title" style="font-size: 22px;">Instrumentos de Evaluación de Competencias</h2>
                    <p class="view-subtitle" style="font-size: 13.5px;">Evaluaciones completas de 40 preguntas (35 min), diagnóstico por 4 dimensiones, medallas y retroalimentación pedagógica.</p>
                </div>
                <button class="hero-btn" onclick="EvaluationEngine.renderHistoryView()" style="background: rgba(255,255,255,0.08); color: white; font-size: 13px; padding: 10px 18px;">
                    <i class="ph-bold ph-chart-line-up"></i> Historial y Evolución
                </button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 40px;">
                ${['formativa', 'pedagogia', 'andragogia', 'didactica'].map(key => {
                    const inst = (window.EVALUATIONS_DATA && window.EVALUATIONS_DATA.instruments[key]) || testsData[key];
                    const active = window.EvaluationStorageService ? EvaluationStorageService.getActiveAttempt(key) : null;
                    const best = window.EvaluationStorageService ? EvaluationStorageService.getBestAttempt(key) : null;
                    const hasMedal = gameState.unlockedBadges && gameState.unlockedBadges.includes(inst.badgeId);
                    
                    let statusBadge = `<span class="route-badge" style="background: rgba(255,255,255,0.08); color: var(--text-secondary);"><i class="ph ph-circle"></i> No iniciado</span>`;
                    if (active) {
                        const answered = Object.keys(active.answers || {}).length;
                        statusBadge = `<span class="route-badge" style="background: rgba(245,158,11,0.2); color: var(--warning);"><i class="ph-bold ph-hourglass"></i> En curso (${answered}/40)</span>`;
                    } else if (best) {
                        statusBadge = best.passed ? 
                            `<span class="route-badge" style="background: rgba(16,185,129,0.2); color: var(--success);"><i class="ph-bold ph-seal-check"></i> Aprobado</span>` : 
                            `<span class="route-badge" style="background: rgba(245,158,11,0.2); color: var(--warning);"><i class="ph-bold ph-trend-up"></i> En desarrollo</span>`;
                    }

                    return `
                        <div class="card avatar-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 24px; border: 1px solid rgba(255,255,255,0.08); background: var(--bg-card); border-radius: 20px;">
                            <div>
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
                                    <div class="card-icon-wrapper" style="width: 50px; height: 50px; border-radius: 14px; background: rgba(14,165,233,0.15); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 26px;">
                                        <i class="ph ${inst.icon}"></i>
                                    </div>
                                    ${statusBadge}
                                </div>
                                <h3 class="card-title" style="font-size: 19px; color: #fff; margin-bottom: 8px;">${inst.title}</h3>
                                <p class="card-desc" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">${inst.shortDesc || inst.desc}</p>
                                
                                <div style="background: rgba(0,0,0,0.25); border-radius: 12px; padding: 12px 14px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; font-size: 12.5px;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <span style="color: var(--text-secondary);"><i class="ph-bold ph-list-numbers"></i> Estructura:</span>
                                        <strong style="color: #fff;">40 preguntas • 35 min</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between;">
                                        <span style="color: var(--text-secondary);"><i class="ph-bold ph-chart-bar"></i> Mejor puntaje:</span>
                                        <strong style="color: ${best ? (best.passed ? 'var(--success)' : 'var(--warning)') : 'var(--text-secondary)'};">
                                            ${best ? `${best.score}/100 pts (${best.masteryLevel})` : '--/100'}
                                        </strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 6px;">
                                        <span style="color: var(--text-secondary);"><i class="ph-bold ph-medal"></i> Medalla:</span>
                                        ${hasMedal ? 
                                            `<span style="color: var(--warning); font-weight: 700;"><i class="ph-fill ph-medal"></i> Desbloqueada</span>` : 
                                            `<span style="color: var(--text-secondary);"><i class="ph ph-lock"></i> Por desbloquear (80+)</span>`}
                                    </div>
                                </div>
                            </div>

                            <div style="display: flex; gap: 8px; margin-top: 10px;">
                                <button class="hero-btn" onclick="EvaluationEngine.startTest('${key}')" style="flex: 1; justify-content: center; font-size: 13px; padding: 12px;">
                                    ${active ? '<i class="ph-bold ph-play"></i> Continuar Test' : (best ? '<i class="ph-bold ph-arrow-counter-clockwise"></i> Reintentar Test' : '<i class="ph-bold ph-play"></i> Iniciar Test')}
                                </button>
                                ${best ? `
                                    <button class="hero-btn" onclick="EvaluationEngine.viewPastAttempt('${best.id}')" title="Ver último informe" style="background: rgba(255,255,255,0.08); padding: 12px 14px; font-size: 13px;">
                                        <i class="ph-bold ph-file-text"></i>
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // 6. VISTA COMUNIDAD
    const renderCommunity = () => `
        <div class="view-animate">
            <div class="view-header">
                <h1 class="view-title">Comunidad Psicoeduca</h1>
                <p class="view-subtitle">Red de aprendizaje colaborativo, debates pedagógicos, retos semanales y eventos.</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
                <div class="card avatar-card" style="text-align: center; padding: 40px; display: flex; flex-direction: column; justify-content: center;">
                    <div style="width: 70px; height: 70px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                        <i class="ph-bold ph-whatsapp-logo" style="font-size: 38px; color: white;"></i>
                    </div>
                    <h2 style="font-size: 22px; margin-bottom: 10px;">Canal Oficial de WhatsApp</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 25px; font-size: 14px; line-height: 1.5;">Únete a nuestra comunidad activa para recibir actualizaciones pedagógicas, plantillas y retos semanales.</p>
                    <a href="https://whatsapp.com" target="_blank" class="hero-btn" style="background: #25D366; color: white; text-decoration: none; justify-content: center;">Unirme a la Comunidad</a>
                </div>

                <div class="card avatar-card" style="padding: 30px;">
                    <h3 style="font-size: 20px; color: var(--primary); margin-bottom: 15px;"><i class="ph-bold ph-trophy"></i> Reto Semanal de Aprendizaje</h3>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; margin-bottom: 20px;"><strong>Reto #14:</strong> Diseña una pregunta socrática abierta para activar la clase y compártela en la comunidad.</p>
                    <button class="hero-btn" style="width: 100%; justify-content: center;" onclick="alert('¡Reto aceptado! Publica tu respuesta en la comunidad.')">Participar en el Reto (+200 XP)</button>
                </div>
            </div>
        </div>
    `;

    // 7. VISTA MI DESARROLLO (Neuro Digital Experience // 3D Brain & Gamified Profile)
    const renderProfile = () => {
        let currentLevelObj = gamificationLevels[0];
        let nextLevelObj = gamificationLevels[1] || gamificationLevels[0];
        let currentLevelIdx = 0;
        for (let i = 0; i < gamificationLevels.length; i++) {
            if (gameState.xp >= gamificationLevels[i].xp) {
                currentLevelObj = gamificationLevels[i];
                nextLevelObj = gamificationLevels[i + 1] || gamificationLevels[i];
                currentLevelIdx = i;
            }
        }

        const xpNeeded = nextLevelObj.xp - currentLevelObj.xp;
        const xpCurrent = gameState.xp - currentLevelObj.xp;
        const progressPct = nextLevelObj.xp > currentLevelObj.xp 
            ? Math.min(100, Math.max(0, Math.round((xpCurrent / xpNeeded) * 100))) 
            : 100;

        const objectivesList = [
            "Mejorar como docente",
            "Convertirme en formador",
            "Conseguir empleo",
            "Mejorar mis habilidades sociales",
            "Prepararme para liderar equipos"
        ];

        // Stats gamificadas en tiempo real
        const unlockedBadgesCount = (gameState.unlockedBadges || []).length;
        let testsPassedCount = 0;
        ['formativa', 'pedagogia', 'andragogia', 'didactica'].forEach(k => {
            const best = window.EvaluationStorageService ? EvaluationStorageService.getBestAttempt(k) : null;
            if (best && best.passed) testsPassedCount++;
        });
        const diagnosticsCount = (gameState.diagnosticResults || []).length;
        const gender = gameState.avatarGender || 'male';

        // Gear y Atuendo evolutivo desbloqueado según nivel (Tiers 1 a 6)
        const gearTiers = [
            { tier: 'Tier 1 // Explorador', items: ['🎒 Mochila de Campo', '👕 Atuendo de Inicio'], aura: 'rgba(34, 211, 238, 0.25)', color: '#22D3EE' },
            { tier: 'Tier 2 // Aprendiz', items: ['📜 Pergamino de Estudio', '👓 Visor de Datos'], aura: 'rgba(56, 189, 248, 0.35)', color: '#38BDF8' },
            { tier: 'Tier 3 // Practicante', items: ['🧥 Capa de Facilitador', '📱 Tableta Sináptica'], aura: 'rgba(192, 132, 252, 0.45)', color: '#C084FC' },
            { tier: 'Tier 4 // Profesional', items: ['⚡ Hombreras de Circuito', '🪄 Cetro Holográfico'], aura: 'rgba(251, 191, 36, 0.55)', color: '#FBBF24' },
            { tier: 'Tier 5 // Especialista', items: ['👑 Diadema Cuántica', '🔮 Orbes Flotantes'], aura: 'rgba(52, 211, 153, 0.65)', color: '#34D399' },
            { tier: 'Tier 6 // Gran Mentor', items: ['✨ Alas Celestiales', '🌌 Halo Cósmico de Luz'], aura: 'rgba(245, 158, 11, 0.8)', color: '#F59E0B' }
        ];

        const activeTier = gearTiers[currentLevelIdx] || gearTiers[0];
        const avatarSvgHtml = generatePixelAvatarSVG(gender, currentLevelIdx, unlockedBadgesCount);

        return `
            <div class="view-animate">
                <!-- Header de la Consola -->
                <div class="view-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 15px; margin-bottom: 25px;">
                    <div>
                        <div style="display: inline-flex; align-items: center; gap: 8px; color: var(--color-cyan); font-family: var(--font-tech); font-size: 11.5px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 6px;">
                            <i class="ph-bold ph-game-controller"></i> GAMIFICACIÓN & AVATAR EVOLUTIVO // MI PERFIL
                        </div>
                        <h1 class="view-title">Mi Desarrollo Profesional</h1>
                        <p class="view-subtitle">Evolución pedagógica de tu Avatar en Pixel Art, telemetría de competencias docentes y reconocimientos verificados.</p>
                    </div>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <button class="hero-btn" onclick="app.logoutUser()" style="background: rgba(255,255,255,0.08); color: white; font-size: 13px; padding: 10px 18px;">
                            <i class="ph-bold ph-sign-out"></i> Cambiar Usuario
                        </button>
                        <button class="hero-btn" onclick="app.resetProgress()" style="background: var(--error); color: white; font-size: 13px; padding: 10px 18px;">
                            <i class="ph-bold ph-warning"></i> Reiniciar Progreso
                        </button>
                    </div>
                </div>

                <!-- CONSOLA DEL AVATAR PIXEL ART EVOLUTIVO -->
                <div class="pixel-avatar-console">
                    <!-- Escenario del Avatar Pixel Art -->
                    <div class="pixel-avatar-stage">
                        <!-- Aura de energía sináptica radiante -->
                        <div class="pixel-aura" style="background: radial-gradient(circle, ${activeTier.aura} 0%, transparent 70%);"></div>

                        <!-- Chispas y destellos flotantes -->
                        <div class="pixel-sparkle" style="top: 25%; left: 20%; animation-delay: 0s;"></div>
                        <div class="pixel-sparkle" style="top: 60%; right: 22%; animation-delay: 0.8s; width: 8px; height: 8px; box-shadow: 0 0 10px ${activeTier.color};"></div>
                        <div class="pixel-sparkle" style="top: 35%; right: 18%; animation-delay: 1.4s;"></div>
                        ${currentLevelIdx >= 3 ? `<div class="pixel-sparkle" style="top: 75%; left: 24%; animation-delay: 1.9s; box-shadow: 0 0 12px #FDE047;"></div>` : ''}

                        <!-- Badge de Nivel Flotante en el Escenario -->
                        <div style="position: absolute; top: 16px; left: 16px; z-index: 10;">
                            <span class="avatar-tier-badge" style="background: rgba(8, 13, 27, 0.8); border: 1px solid ${activeTier.color}; color: ${activeTier.color};">
                                <i class="ph-fill ph-star"></i> Nivel ${currentLevelIdx + 1}: ${currentLevelObj.name}
                            </span>
                        </div>

                        <!-- Sprite SVG de Pixel Art auténtico 16-bit -->
                        <div id="pixel-avatar-wrapper" style="position: relative; z-index: 5;">
                            ${avatarSvgHtml}
                        </div>

                        <!-- Pedestal Tecnológico -->
                        <div class="pixel-avatar-pedestal" style="box-shadow: 0 0 25px ${activeTier.color}; border-color: ${activeTier.color};"></div>
                    </div>

                    <!-- Consola de Personalización y Evolución -->
                    <div style="display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <!-- Header de la Consola -->
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
                                <div>
                                    <span style="font-size: 11px; font-weight: 800; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1.2px; font-family: var(--font-tech); display: block; margin-bottom: 2px;">
                                        IDENTIDAD & ATUENDO EVOLUTIVO
                                    </span>
                                    <h3 style="font-size: 20px; color: #fff; font-family: var(--font-tech); margin: 0;">
                                        Avatar: ${gameState.userName}
                                    </h3>
                                </div>
                            </div>

                            <!-- Selector de Género (Hombre / Mujer) con Persistencia -->
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 11px; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">
                                    Seleccionar Género del Avatar:
                                </span>
                                <div style="display: flex; gap: 10px;">
                                    <button class="gender-toggle-btn ${gender === 'male' ? 'active' : ''}" onclick="app.setAvatarGender('male')">
                                        <i class="ph-bold ph-gender-male"></i> Avatar Masculino
                                    </button>
                                    <button class="gender-toggle-btn ${gender === 'female' ? 'active' : ''}" onclick="app.setAvatarGender('female')">
                                        <i class="ph-bold ph-gender-female"></i> Avatar Femenino
                                    </button>
                                </div>
                            </div>

                            <!-- Barra de XP y Progreso al Siguiente Nivel -->
                            <div style="background: rgba(8, 13, 27, 0.6); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 16px; margin-bottom: 18px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <span style="font-size: 11.5px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Progreso de Rango</span>
                                    <span style="color: ${activeTier.color}; font-family: var(--font-tech); font-weight: 800; font-size: 13px;">
                                        ${gameState.xp || 0} XP
                                    </span>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 11.5px; color: var(--text-muted); margin-bottom: 6px;">
                                    <span>Siguiente Evolución: <strong>${nextLevelObj.name}</strong></span>
                                    <span>${progressPct}%</span>
                                </div>
                                <div class="progress-bar-bg" style="height: 8px; background: rgba(255,255,255,0.06); border-radius: 6px;">
                                    <div class="progress-bar-fill" style="width: ${progressPct}%; background: linear-gradient(90deg, var(--primary), ${activeTier.color}); box-shadow: 0 0 10px ${activeTier.color};"></div>
                                </div>
                            </div>

                            <!-- Equipamiento e Indumentaria Desbloqueada -->
                            <div style="margin-bottom: 18px;">
                                <span style="font-size: 11px; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">
                                    Equipamiento y Atuendo Desbloqueado:
                                </span>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                    ${gearTiers.slice(0, currentLevelIdx + 1).flatMap(t => t.items).map(item => `
                                        <span class="avatar-gear-pill active">
                                            <i class="ph-bold ph-check" style="color: ${activeTier.color}; font-size: 11px;"></i> ${item}
                                        </span>
                                    `).join('')}
                                    ${gearTiers.slice(currentLevelIdx + 1).flatMap(t => t.items).map(item => `
                                        <span class="avatar-gear-pill" style="opacity: 0.5;">
                                            <i class="ph-bold ph-lock" style="font-size: 11px;"></i> ${item}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- Botón de Pulso Especial / Celebración -->
                        <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06);">
                            <button class="hero-btn hero-btn-cyan" onclick="app.triggerAvatarSpecialEffect()" style="padding: 10px 18px; font-size: 13px;">
                                <i class="ph-bold ph-sparkle"></i> Desatar Pulso de Evolución
                            </button>
                            <span style="font-size: 12px; color: var(--text-muted);">
                                <i class="ph-bold ph-lightning" style="color: var(--color-cyan);"></i> ${unlockedBadgesCount} insignias sincronizadas
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Tarjeta de Identidad y Meta Pedagógica -->
                <div class="profile-id-card" style="margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                        <div>
                            <span style="font-size: 11px; font-weight: 800; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1.2px; font-family: var(--font-tech); display: block; margin-bottom: 4px;">Nombre del Educador</span>
                            <input type="text" value="${gameState.userName}" onchange="app.updateName(this.value)" title="Haz clic para editar tu nombre" style="background: rgba(8, 13, 27, 0.6); border: 1px solid var(--border-subtle); color: #FFFFFF; padding: 8px 12px; border-radius: 10px; font-size: 16px; font-weight: 700; width: 100%; max-width: 240px; font-family: var(--font-tech);">
                        </div>
                        <div style="flex: 1; min-width: 260px;">
                            <span style="font-size: 11.5px; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Meta Pedagógica Principal:</span>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                ${objectivesList.map(obj => `
                                    <div class="objective-pill ${gameState.userObjective === obj ? 'active' : ''}" onclick="app.setUserObjective('${obj}')" style="padding: 7px 12px; font-size: 12px;">
                                        <i class="ph-bold ${gameState.userObjective === obj ? 'ph-check-circle' : 'ph-circle'}" style="color: ${gameState.userObjective === obj ? 'var(--color-cyan)' : 'var(--text-muted)'};"></i>
                                        <span>${obj}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Telemetría de Avances Gamificados (4 Cards en HUD) -->
                <div class="view-header" style="margin-bottom: 18px;">
                    <h2 class="view-title" style="font-size: 22px;">Telemetría de Avances Gamificados</h2>
                    <p class="view-subtitle" style="font-size: 13.5px;">Indicadores de desempeño cognitivo, rigor académico y acumulación de maestría.</p>
                </div>

                <div class="cognitive-hud-grid" style="margin-bottom: 40px;">
                    <div class="hud-metric-card">
                        <div class="hud-icon-box" style="background: rgba(34, 211, 238, 0.12); color: var(--color-cyan); border-color: rgba(34, 211, 238, 0.3);">
                            <i class="ph-bold ph-lightning"></i>
                        </div>
                        <div>
                            <div class="hud-metric-val" style="color: var(--color-cyan);">${gameState.xp || 0} XP</div>
                            <div class="hud-metric-label">Energía Sináptica Total</div>
                        </div>
                    </div>

                    <div class="hud-metric-card">
                        <div class="hud-icon-box" style="background: rgba(52, 211, 153, 0.12); color: var(--success); border-color: rgba(52, 211, 153, 0.3);">
                            <i class="ph-bold ph-seal-check"></i>
                        </div>
                        <div>
                            <div class="hud-metric-val" style="color: var(--success);">${testsPassedCount} / 4</div>
                            <div class="hud-metric-label">Evaluaciones Aprobadas (80+)</div>
                        </div>
                    </div>

                    <div class="hud-metric-card">
                        <div class="hud-icon-box" style="background: rgba(245, 158, 11, 0.12); color: var(--warning); border-color: rgba(245, 158, 11, 0.3);">
                            <i class="ph-bold ph-clipboard-text"></i>
                        </div>
                        <div>
                            <div class="hud-metric-val" style="color: var(--warning);">${diagnosticsCount}</div>
                            <div class="hud-metric-label">Diagnósticos Situacionales</div>
                        </div>
                    </div>

                    <div class="hud-metric-card">
                        <div class="hud-icon-box" style="background: rgba(192, 132, 252, 0.12); color: #C084FC; border-color: rgba(192, 132, 252, 0.3);">
                            <i class="ph-bold ph-medal"></i>
                        </div>
                        <div>
                            <div class="hud-metric-val" style="color: #C084FC;">${unlockedBadgesCount} / ${badgesData.length}</div>
                            <div class="hud-metric-label">Insignias Desbloqueadas</div>
                        </div>
                    </div>
                </div>

                <!-- Matriz de Medallas e Insignias de Desarrollo -->
                <div class="view-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
                    <div>
                        <h2 class="view-title" style="font-size: 22px;">Insignias de Competencia & Medallas de Honor</h2>
                        <p class="view-subtitle" style="font-size: 13.5px;">Reconocimientos verificados de habilidades pedagógicas y destreza en aula.</p>
                    </div>
                </div>

                <!-- Filtros Interactivos de Medallas -->
                <div class="badge-filter-pills">
                    <button class="badge-filter-btn active" data-filter="all" onclick="app.filterBadges('all')">
                        Todas (${badgesData.length})
                    </button>
                    <button class="badge-filter-btn" data-filter="unlocked" onclick="app.filterBadges('unlocked')">
                        <i class="ph-bold ph-check"></i> Desbloqueadas (${unlockedBadgesCount})
                    </button>
                    <button class="badge-filter-btn" data-filter="locked" onclick="app.filterBadges('locked')">
                        <i class="ph-bold ph-lock"></i> Por Desbloquear (${badgesData.length - unlockedBadgesCount})
                    </button>
                    <button class="badge-filter-btn" data-filter="eval" onclick="app.filterBadges('eval')">
                        <i class="ph-bold ph-medal"></i> Instrumentos de Evaluación (7)
                    </button>
                </div>

                <div class="badge-grid" id="profile-badges-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 16px; margin-bottom: 45px;">
                    ${badgesData.map(b => {
                        const isUnlocked = gameState.unlockedBadges && gameState.unlockedBadges.includes(b.id);
                        const isEvalBadge = ['maestro_evaluacion', 'arquitecto_aprendizaje', 'mentor_aprendizaje', 'estratega_didactico', 'primer_paso_pedagogico', 'dominio_integral', 'excelencia_pedagogica'].includes(b.id);
                        return `
                            <div class="neuro-badge-card ${isUnlocked ? 'unlocked' : 'locked'}" data-unlocked="${isUnlocked}" data-eval="${isEvalBadge}">
                                <div>
                                    <div class="badge-icon-box" style="width: 58px; height: 58px; border-radius: 16px; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 28px; background: rgba(34, 211, 238, 0.1); color: var(--color-cyan); border: 1px solid var(--border-subtle);">
                                        <i class="ph-bold ${b.icon}"></i>
                                    </div>
                                    <div style="font-size: 14px; font-weight: 700; color: #FFFFFF; font-family: var(--font-tech); margin-bottom: 4px;">${b.name}</div>
                                    <p style="font-size: 11.5px; color: var(--text-secondary); line-height: 1.4; margin-bottom: 12px;">${b.desc}</p>
                                </div>
                                <div style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-size: 11.5px; font-weight: 700; padding: 4px 10px; border-radius: 8px; ${isUnlocked ? 'color: var(--success); background: rgba(52, 211, 153, 0.12); border: 1px solid rgba(52, 211, 153, 0.3);' : 'color: var(--text-muted); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);'}">
                                    <i class="ph-bold ${isUnlocked ? 'ph-seal-check' : 'ph-lock'}"></i>
                                    <span>${isUnlocked ? 'Desbloqueada' : 'Por Desbloquear'}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- Historial de los Cuatro Instrumentos de Evaluación Pedagógica -->
                <div class="view-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
                    <div>
                        <h2 class="view-title" style="font-size: 22px;">Desempeño en Instrumentos de Evaluación</h2>
                        <p class="view-subtitle" style="font-size: 13.5px;">Progreso en los 4 instrumentos diagnósticos estandarizados (40 preguntas cada uno).</p>
                    </div>
                    <button class="hero-btn" onclick="EvaluationEngine.renderHistoryView()" style="font-size: 13px; padding: 10px 18px; background: rgba(34, 211, 238, 0.1); border-color: var(--border-glow); color: var(--color-cyan);">
                        <i class="ph-bold ph-chart-line-up"></i> Historial Completo & Evolución
                    </button>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 45px;">
                    ${['formativa', 'pedagogia', 'andragogia', 'didactica'].map(k => {
                        const inst = window.EVALUATIONS_DATA ? EVALUATIONS_DATA.instruments[k] : testsData[k];
                        const best = window.EvaluationStorageService ? EvaluationStorageService.getBestAttempt(k) : null;
                        const hasMedal = gameState.unlockedBadges && gameState.unlockedBadges.includes(inst.badgeId);
                        return `
                            <div class="card" style="padding: 22px; border: 1px solid var(--border-subtle); display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                                        <div class="card-icon-wrapper" style="width: 44px; height: 44px; font-size: 22px; margin-bottom: 0;">
                                            <i class="ph ${inst.icon}"></i>
                                        </div>
                                        ${hasMedal ? `<span style="color: var(--warning); font-size: 18px;" title="Medalla desbloqueada"><i class="ph-fill ph-medal"></i></span>` : `<span style="color: var(--text-muted); font-size: 16px;" title="Medalla por desbloquear (80+ pts)"><i class="ph ph-lock"></i></span>`}
                                    </div>
                                    <h4 style="font-size: 16px; color: #fff; font-family: var(--font-tech); margin-bottom: 6px;">${inst.title}</h4>
                                    <div style="font-size: 13.5px; font-weight: 800; color: ${best ? (best.passed ? 'var(--success)' : 'var(--warning)') : 'var(--text-muted)'}; margin-bottom: 12px;">
                                        ${best ? `${best.score} pts • ${best.masteryLevel}` : 'Sin evaluar'}
                                    </div>
                                </div>
                                <div>
                                    ${best ? `
                                        <button class="hero-btn" onclick="EvaluationEngine.viewPastAttempt('${best.id}')" style="width: 100%; justify-content: center; font-size: 12px; padding: 8px 12px; background: rgba(255,255,255,0.06); color: white;">
                                            <i class="ph-bold ph-file-text"></i> Ver Informe Detallado
                                        </button>
                                    ` : `
                                        <button class="hero-btn" onclick="EvaluationEngine.startTest('${k}')" style="width: 100%; justify-content: center; font-size: 12px; padding: 8px 12px;">
                                            <i class="ph-bold ph-play"></i> Iniciar Evaluación
                                        </button>
                                    `}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- Historial de Diagnósticos Situacionales -->
                <div class="view-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                    <div>
                        <h2 class="view-title" style="font-size: 22px;">Mis Diagnósticos Situacionales</h2>
                        <p class="view-subtitle" style="font-size: 13.5px;">Historial de autoevaluaciones de perfil y mapas de recomendaciones.</p>
                    </div>
                    <button class="hero-btn hero-btn-emerald" onclick="app.navigate('evaluate')" style="font-size: 12px; padding: 9px 18px;">
                        <i class="ph-bold ph-plus-circle"></i> Nuevo Diagnóstico
                    </button>
                </div>

                ${(gameState.diagnosticResults && gameState.diagnosticResults.length > 0) ? `
                    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px;">
                        ${gameState.diagnosticResults.map(res => `
                            <div class="card" style="padding: 24px; border: 1px solid var(--border-subtle);">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
                                    <div>
                                        <span class="route-badge" style="font-size: 11px;">${res.testName}</span>
                                        <h3 style="color: #fff; font-size: 19px; font-family: var(--font-tech); margin-top: 6px;">Nivel: <span style="color: var(--color-cyan);">${res.nivel}</span></h3>
                                    </div>
                                    <div style="text-align: right;">
                                        <span style="font-size: 12px; color: var(--text-secondary);"><i class="ph ph-calendar"></i> ${res.date}</span>
                                        <div style="font-size: 14px; font-weight: 800; color: var(--warning); margin-top: 4px; font-family: var(--font-tech);">Puntuación: ${res.score} / ${res.maxScore || 24}</div>
                                    </div>
                                </div>
                                <p style="color: var(--text-secondary); font-size: 13.5px; line-height: 1.5; margin-bottom: 14px;">${res.diag}</p>
                                ${res.recomendacion ? `
                                    <details style="background: rgba(8, 13, 27, 0.6); padding: 12px 16px; border-radius: 12px; font-size: 13px; color: var(--text-primary); cursor: pointer; border: 1px solid var(--border-subtle);">
                                        <summary style="font-weight: 700; color: var(--color-cyan); font-family: var(--font-tech);">Ver Recomendaciones Prácticas</summary>
                                        <div style="margin-top: 10px; line-height: 1.6; color: var(--text-secondary);">${res.recomendacion}</div>
                                    </details>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <div class="card" style="text-align: center; padding: 40px 20px; margin-bottom: 40px;">
                        <i class="ph-bold ph-clipboard-text" style="font-size: 48px; color: var(--color-cyan); margin-bottom: 12px; opacity: 0.7;"></i>
                        <p style="color: var(--text-secondary); font-size: 14px; max-width: 500px; margin: 0 auto 20px;">Aún no has completado un diagnóstico situacional. Realiza uno para identificar tu perfil pedagógico y obtener recomendaciones de desarrollo.</p>
                        <button class="hero-btn" onclick="app.navigate('evaluate')"><i class="ph-bold ph-scan"></i> Realizar un Diagnóstico</button>
                    </div>
                `}
            </div>
        `;
    };

    // Vistas adicionales mantenidas
    const renderNews = () => `
        <div class="view-animate">
            <div class="view-header"><h1 class="view-title">Novedades y Actualizaciones</h1></div>
            <div class="news-card premium" onclick="app.navigate('aprende')" style="background: var(--bg-card); border-radius: 20px; padding: 30px; border: 1px solid rgba(255,255,255,0.08);">
                <h3 style="color: var(--primary); font-size: 20px; margin-bottom: 8px;">¡Bienvenidos a PSICOEDUCA ACADEMY!</h3>
                <p style="color: var(--text-secondary); line-height: 1.5;">Hemos evolucionado hacia un ecosistema de desarrollo educativo, profesional y humano para 5 áreas clave.</p>
            </div>
        </div>
    `;

    const renderHistory = () => `
        <div class="view-animate">
            <div class="view-header"><h1 class="view-title">Historia de la Educación</h1></div>
            <div class="history-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                <div class="history-flip-card" onmouseenter="playSound('cardFlip')" onclick="playSound('cardFlip'); this.classList.toggle('flipped')">
                    <div class="history-flip-inner">
                        <div class="history-flip-front" style="background-image: url('assets/history_greece.png');">
                            <div class="history-overlay-front"><h2>Antigüedad Clásica</h2><p>Pasa el cursor o toca para girar</p></div>
                        </div>
                        <div class="history-flip-back">
                            <h3>Mayéutica y Diálogo Filosófico</h3>
                            <p class="history-back-desc">En la Antigua Grecia, Sócrates sentó las bases del pensamiento crítico mediante preguntas estratégicas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Mapeo de Vistas
    const views = {
        home: renderHome,
        explora: renderExplora,
        aprende: renderAprende,
        practica: renderPractica,
        evaluate: renderEvaluate,
        community: renderCommunity,
        profile: renderProfile,
        news: renderNews,
        history: renderHistory
    };

    // Diagnósticos Situacionales Avanzados (Test Logic & Rich Reporting)
    window.app.startDiagnosticTest = (type) => {
        playSound('click');
        let dataToUse = constructivistData;
        let testName = "Diagnóstico de Perfil Constructivista";
        let isInnovation = (type === 'innovation');
        let maxScore = 24;

        if (type === 'pedagogical') {
            dataToUse = pedagogicalData;
            testName = "Diagnóstico de Habilidades Pedagógicas";
            maxScore = 24;
        } else if (type === 'innovation') {
            dataToUse = innovationData;
            testName = "Scanner de Innovación Educativa";
            maxScore = 30;
        }

        let currentQ = 0;
        let totalScore = 0;

        const renderDiagnosticQuestion = () => {
            if (currentQ >= dataToUse.length) {
                gameState.xp += 1000;
                gameState.testsCompleted++;
                playSound('success');

                let nivel = "";
                let diag = "";
                let recomendacion = "";
                let interpretacion = "";
                let metodologias = "";

                if (type === 'constructivist') {
                    if (totalScore <= 8) {
                        nivel = "Facilitador Tradicional";
                        diag = "Tu estilo se centra fuertemente en la transmisión directa de conocimientos. Confías en la estructura y en tu rol como experto para garantizar el aprendizaje.";
                        recomendacion = "1. Intenta ceder gradualmente el protagonismo al grupo.<br>2. Antes de explicar un concepto, plantea un problema abierto o caso real y deja que los alumnos deduzcan la respuesta.<br>3. Fomenta el debate guiado antes de entregar la respuesta oficial.";
                    } else if (totalScore <= 14) {
                        nivel = "Facilitador en Transición";
                        diag = "Combinas métodos tradicionales con estrategias interactivas. Permites la participación, pero en momentos de duda aún recaes rápidamente en la explicación magistral directa de la solución.";
                        recomendacion = "1. Profundiza en el Aprendizaje Basado en Problemas (ABP).<br>2. Utiliza los errores de los alumnos como puntos de partida para la discusión socrática grupal.<br>3. Evita responder las dudas de inmediato; devuélvelas con preguntas reflexivas que activen su Zona de Desarrollo Próximo (ZDP).";
                    } else if (totalScore <= 20) {
                        nivel = "Facilitador Constructivista";
                        diag = "Entiendes que el alumno debe construir activamente su propio conocimiento. Diseñas experiencias interactivas y actúas como un guía que facilita el proceso de descubrimiento colaborativo.";
                        recomendacion = "1. Perfecciona tus instrumentos de evaluación formativa continua.<br>2. Reemplaza exámenes memorísticos por proyectos situacionales reales con rúbricas de desempeño transparentes.<br>3. Diseña rúbricas de co-evaluación para que los estudiantes aprendan a dar feedback constructivo a sus pares.";
                    } else {
                        nivel = "Arquitecto de Aprendizaje";
                        diag = "Tu práctica refleja un dominio total del constructivismo. Transformas el aula en un laboratorio de experiencias. El centro de tu clase no es lo que dices, sino las decisiones, investigaciones y creaciones de tus estudiantes.";
                        recomendacion = "1. Documenta y comparte tus dinámicas didácticas con otros colegas de tu institución.<br>2. Explora metodologías de vanguardia como el Diseño de Experiencias de Aprendizaje (LXD) y Design Thinking educativo.<br>3. Diseña retos inmersivos y casos de estudio contextualizados a los problemas reales de tu comunidad.";
                    }
                } else if (type === 'pedagogical') {
                    if (totalScore <= 10) {
                        nivel = "Nivel Básico (Tradicional)";
                        diag = "Tu enfoque se centra principalmente en la exposición de contenidos y el mantenimiento del orden. Tiendes a tomar decisiones unidireccionales para resolver problemas en el aula.";
                        recomendacion = "1. Permite espacios de silencio activo de 3 a 5 segundos después de hacer una pregunta para que los alumnos elaboren su respuesta.<br>2. Sustituye parte de tu explicación teórica por breves trabajos de discusión en parejas (técnica Think-Pair-Share).<br>3. Acostúmbrate a admitir el desconocimiento frente a una pregunta difícil como una valiosa oportunidad de indagación colectiva con el móvil.";
                    } else if (totalScore <= 18) {
                        nivel = "Nivel Intermedio (Práctico)";
                        diag = "Utilizas estrategias de participación activa e intentas diversificar la clase. Sin embargo, en situaciones de presión recaes en la resolución directa del conflicto en lugar de empoderar al alumno para que lo resuelva.";
                        recomendacion = "1. Utiliza la técnica 'Piensa-Compara-Comparte' rutinariamente para elevar la participación de los alumnos más reservados.<br>2. Antes de responder a una duda, pregúntale al grupo si alguien más tiene una hipótesis o pista.<br>3. Incorpora evaluación formativa basada en mini-retos prácticos y no únicamente en pruebas teóricas.";
                    } else if (totalScore <= 22) {
                        nivel = "Nivel Avanzado (Facilitador Activo)";
                        diag = "Eres un formador ágil que sabe leer la energía del grupo. Utilizas problemas, analogías y debates eficazmente. Sabes ceder el control del aprendizaje manteniendo claros los objetivos pedagógicos.";
                        recomendacion = "1. Empieza a usar explícitamente los errores de los alumnos como material didáctico de clase (el análisis del error constructivo).<br>2. Permite que los estudiantes participen en la definición de acuerdos de convivencia y ponderaciones de entrega.<br>3. Integra la co-evaluación estructurada de forma sistemática.";
                    } else {
                        nivel = "Nivel Experto (Arquitecto Pedagógico)";
                        diag = "Dominas el arte de la mediación educativa. Usas preguntas socráticas instintivamente, adaptas el entorno rápidamente y conviertes distracciones o fallas técnicas en oportunidades brillantes de aprendizaje.";
                        recomendacion = "1. Lidera talleres de formación docente para compartir tus estrategias de facilitación.<br>2. Diseña módulos bajo el modelo de Aula Invertida (Flipped Classroom) para dedicar el aula 100% a la práctica.<br>3. Involucra a los estudiantes en el co-diseño de las rúbricas y criterios de evaluación del próximo ciclo.";
                    }
                } else if (type === 'innovation') {
                    if (totalScore <= 10) {
                        nivel = "Docente Tradicional";
                        diag = "Tu práctica prioriza la transmisión frontal de conocimientos. Te apoyas en la exposición teórica y en el control del aula para asegurar que se cubra el temario estructurado.";
                        interpretacion = "Este nivel indica que concibes el aprendizaje como recepción de información. Confías en métodos estandarizados pero corres el riesgo de generar pasividad y desinterés en los estudiantes actuales.";
                        recomendacion = "1. Transforma el 20% de tu tiempo de exposición en dinámicas de discusión y aplicación inmediata.<br>2. Reemplaza preguntas cerradas por preguntas abiertas de análisis y juicio crítico.<br>3. Pide a los alumnos que sinteticen los puntos clave de la sesión en lugar de hacerlo tú.";
                        metodologias = "Aprendizaje activo básico, método de preguntas socráticas, debates cortos guiados.";
                    } else if (totalScore <= 18) {
                        nivel = "Docente en Transición";
                        diag = "Has comenzado a integrar dinámicas interactivas y herramientas digitales, pero en el fondo continúas dirigiendo fuertemente el proceso y las decisiones del curso.";
                        interpretacion = "Estás en un punto de evolución consciente. Sabes que la clase magistral es insuficiente e intentas variar, aunque las metodologías activas aún operan como complementos y no como el eje central de tu diseño instruccional.";
                        recomendacion = "1. Plantea un reto o caso como el hilo conductor de la unidad, no solo como la tarea final.<br>2. Fomenta el trabajo colaborativo donde ellos investiguen y contrasten antes de que tú expongas.<br>3. Introduce herramientas digitales para que los estudiantes creen productos didácticos (infografías, audios, mapas).";
                        metodologias = "Flipped Classroom (Aula Invertida), Trabajo Colaborativo (Jigsaw), Estudios de Caso estructurados.";
                    } else if (totalScore <= 26) {
                        nivel = "Facilitador Innovador";
                        diag = "Diseñas verdaderas experiencias de aprendizaje. Entiendes que el estudiante debe ser protagonista, utilizas la tecnología de forma significativa y evalúas mediante el desempeño práctico.";
                        interpretacion = "Actúas como un arquitecto del entorno de aprendizaje. Tus participantes están comprometidos porque los involucras en la resolución de problemas reales en lugar de limitarse a memorizar conceptos abstractos.";
                        recomendacion = "1. Atrévete a gamificar un módulo completo con mecánicas de narrativa, insignias y retos progresivos.<br>2. Conecta tus clases con desafíos del contexto local donde los estudiantes interactúen con agentes externos.<br>3. Implementa rúbricas de co-evaluación para empoderar el juicio crítico entre pares.";
                        metodologias = "Aprendizaje Basado en Proyectos (ABP), Gamificación Educativa, Design Thinking aplicado al aula.";
                    } else {
                        nivel = "Diseñador de Experiencias Disruptivas";
                        diag = "Tu práctica rompe con los paradigmas tradicionales. El aula es un laboratorio de co-creación donde los alumnos lideran su aprendizaje resolviendo retos de alta complejidad del mundo real.";
                        interpretacion = "Has disuelto la frontera entre el aula y la realidad profesional. No dictas clases; orquestas ecosistemas de aprendizaje donde el error es celebrado, la tecnología es invisible y el impacto formativo trasciende la sesión.";
                        recomendacion = "1. Involucra a tus estudiantes en la co-creación del plan de aprendizaje y los criterios evaluativos.<br>2. Conecta tus retos con proyectos u organizaciones reales para que los productos tengan impacto social tangible.<br>3. Sistematiza tu práctica pedagógica y publica tus métodos de innovación en comunidades docentes.";
                        metodologias = "Aprendizaje Basado en Retos (CBL), Co-creación curricular, Aprendizaje Inmersivo y Experiencial de frontera.";
                    }
                }

                // Guardar en el historial del estado
                gameState.diagnosticResults.unshift({
                    testName: testName,
                    type: type,
                    nivel: nivel,
                    score: totalScore,
                    maxScore: maxScore,
                    date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
                    diag: diag,
                    recomendacion: recomendacion,
                    interpretacion: interpretacion,
                    metodologias: metodologias
                });
                if (gameState.diagnosticResults.length > 20) gameState.diagnosticResults.pop();

                updateUI();
                saveGameState();

                let reportDetailsHtml = '';
                if (isInnovation) {
                    reportDetailsHtml = `
                        <div style="background: var(--bg-card); border: 1px solid rgba(236,72,153,0.3); border-radius: 20px; padding: 35px; margin: 25px 0; text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                            <div style="text-align: center; margin-bottom: 25px;">
                                <span class="route-badge" style="background: rgba(236,72,153,0.15); color: #F472B6; border-color: #EC4899; font-size: 13px;">Resultado del Scanner</span>
                                <h2 style="color: #F472B6; font-size: 28px; margin: 10px 0 6px;">${nivel}</h2>
                                <h4 style="color: var(--text-secondary); font-weight: 500; font-size: 16px;">Puntuación de Innovación: <strong style="color: #fff;">${totalScore} / ${maxScore}</strong></h4>
                            </div>

                            <h3 style="margin-bottom: 10px; color: var(--primary); font-size: 17px; display: flex; align-items: center; gap: 8px;"><i class="ph-bold ph-scan"></i> Diagnóstico Situacional:</h3>
                            <div style="background: rgba(0,0,0,0.3); padding: 18px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid var(--primary);">
                                <p style="color: var(--text-primary); line-height: 1.6; font-size: 14.5px; margin: 0;">${diag}</p>
                            </div>

                            <h3 style="margin-bottom: 10px; color: var(--accent); font-size: 17px; display: flex; align-items: center; gap: 8px;"><i class="ph-bold ph-chart-polar"></i> Interpretación Formativa:</h3>
                            <div style="background: rgba(0,0,0,0.3); padding: 18px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid var(--accent);">
                                <p style="color: var(--text-secondary); line-height: 1.6; font-size: 14px; margin: 0;">${interpretacion}</p>
                            </div>

                            <h3 style="margin-bottom: 12px; color: var(--success); font-size: 17px; display: flex; align-items: center; gap: 8px;"><i class="ph-bold ph-rocket-launch"></i> Recomendaciones Prácticas Paso a Paso:</h3>
                            <div style="background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.2); padding: 18px 22px; border-radius: 14px; color: var(--text-primary); line-height: 1.8; font-size: 14px; margin-bottom: 20px;">
                                ${recomendacion}
                            </div>

                            <h3 style="margin-bottom: 10px; color: var(--warning); font-size: 17px; display: flex; align-items: center; gap: 8px;"><i class="ph-bold ph-toolbox"></i> Metodologías Recomendadas para tu Nivel:</h3>
                            <div style="background: var(--warning-bg); border: 1px solid rgba(245,158,11,0.3); padding: 16px 20px; border-radius: 12px;">
                                <p style="color: var(--warning); line-height: 1.5; font-size: 15px; font-weight: 600; margin: 0;">${metodologias}</p>
                            </div>
                        </div>
                    `;
                } else {
                    const themeColor = (type === 'pedagogical') ? '#A855F7' : 'var(--primary)';
                    reportDetailsHtml = `
                        <div style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 35px; margin: 25px 0; text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                            <div style="text-align: center; margin-bottom: 25px;">
                                <span class="route-badge" style="font-size: 13px;">${testName}</span>
                                <h2 style="color: ${themeColor}; font-size: 28px; margin: 10px 0 6px;">${nivel}</h2>
                                <h4 style="color: var(--text-secondary); font-weight: 500; font-size: 16px;">Puntuación Obtenida: <strong style="color: #fff;">${totalScore} / ${maxScore}</strong></h4>
                            </div>

                            <h3 style="margin-bottom: 10px; color: ${themeColor}; font-size: 17px; display: flex; align-items: center; gap: 8px;"><i class="ph-bold ph-clipboard-text"></i> Diagnóstico Pedagógico:</h3>
                            <div style="background: rgba(0,0,0,0.3); padding: 18px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid ${themeColor};">
                                <p style="color: var(--text-primary); line-height: 1.6; font-size: 14.5px; margin: 0;">${diag}</p>
                            </div>

                            <h3 style="margin-bottom: 12px; color: var(--success); font-size: 17px; display: flex; align-items: center; gap: 8px;"><i class="ph-bold ph-lightbulb"></i> Recomendaciones Prácticas Paso a Paso:</h3>
                            <div style="background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.2); padding: 18px 22px; border-radius: 14px; color: var(--text-primary); line-height: 1.8; font-size: 14px;">
                                ${recomendacion}
                            </div>
                        </div>
                    `;
                }

                contentArea.innerHTML = `
                    <div class="view-animate" style="max-width: 820px; margin: 0 auto; text-align: center; padding: 25px 15px;">
                        <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(16,185,129,0.15); color: var(--success); display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; font-size: 44px; border: 2px solid var(--success);">
                            <i class="ph-fill ph-check-circle"></i>
                        </div>
                        <h1 class="view-title" style="font-size: 32px;">Reporte de Diagnóstico</h1>
                        <p style="color: var(--text-secondary); font-size: 15px;">Evaluación situacional completada exitosamente.</p>
                        
                        ${reportDetailsHtml}

                        <div style="background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.25); border-radius: 16px; padding: 16px 24px; margin-bottom: 30px; display: inline-flex; align-items: center; gap: 12px;">
                            <i class="ph-fill ph-star" style="color: var(--warning); font-size: 24px;"></i>
                            <span style="font-size: 16px; font-weight: 700; color: #fff;">¡Has ganado <strong style="color: var(--warning);">+1000 XP</strong> y tu reporte se ha guardado en Mi Desarrollo!</span>
                        </div>

                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button class="hero-btn" onclick="app.navigate('profile')"><i class="ph-bold ph-user-circle"></i> Ver en Mi Desarrollo</button>
                            <button class="hero-btn" style="background: rgba(255,255,255,0.08); color: white;" onclick="app.navigate('evaluate')"><i class="ph-bold ph-arrow-left"></i> Volver a Evaluaciones</button>
                        </div>
                    </div>`;
                return;
            }

            const qObj = dataToUse[currentQ];
            let dimensionHtml = '';
            if (qObj.dimension) {
                dimensionHtml = `<div style="background: var(--success-bg); color: var(--success); padding: 6px 16px; border-radius: 20px; display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; margin-bottom: 20px; border: 1px solid rgba(16,185,129,0.3);"><i class="ph-bold ph-compass"></i> Dimensión: ${qObj.dimension}</div>`;
            }

            const progPct = Math.round(((currentQ) / dataToUse.length) * 100);
            let optsHtml = qObj.options.map((opt) => `
                <div class="quiz-option" onclick="app.handleDiagAnswer(${opt.points})" style="margin-bottom: 14px; padding: 20px 24px; font-size: 15px; line-height: 1.45; display: flex; justify-content: space-between; align-items: center;">
                    <span style="flex: 1; text-align: left; padding-right: 15px;">${opt.text}</span>
                    <i class="ph ph-circle" style="color: var(--primary); font-size: 20px; flex-shrink: 0;"></i>
                </div>
            `).join('');

            contentArea.innerHTML = `
                <div class="view-animate quiz-container" style="max-width: 800px; margin: 0 auto;">
                    <div class="view-header" style="text-align: center; margin-bottom: 25px;">
                        <span class="route-badge" style="font-size: 11px;">Evaluación en Curso</span>
                        <h2 style="color: var(--primary); margin: 8px 0 4px; font-size: 26px;">${testName}</h2>
                        <p class="view-subtitle" style="font-size: 14px;">Pregunta ${currentQ + 1} de ${dataToUse.length}</p>
                        <div class="progress-bar-bg" style="width: 100%; max-width: 440px; margin: 16px auto 0; height: 8px;">
                            <div class="progress-bar-fill" style="width: ${progPct}%;"></div>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">${dimensionHtml}</div>
                    
                    <h2 class="quiz-question" style="text-align: center; max-width: 760px; margin: 0 auto 35px; font-size: 22px; line-height: 1.45;">${qObj.q}</h2>
                    
                    <div class="quiz-options">${optsHtml}</div>
                </div>`;
        };

        window.app.handleDiagAnswer = (pts) => {
            playSound('click');
            totalScore += pts;
            currentQ++;
            renderDiagnosticQuestion();
        };

        renderDiagnosticQuestion();
    };
    app.startDiagnosticTest = window.app.startDiagnosticTest;

    window.app.startQuiz = (quizId) => {
        if (window.EvaluationEngine && window.EVALUATIONS_DATA && window.EVALUATIONS_DATA.instruments[quizId]) {
            window.EvaluationEngine.startTest(quizId);
            return;
        }
        playSound('click');
        const data = testsData[quizId];
        let currentQ = 0;
        let score = 0;
        const renderQuestion = () => {
            if (currentQ >= data.questions.length) {
                gameState.xp += (score * 50);
                gameState.testsCompleted++;
                playSound('success');
                contentArea.innerHTML = `<div class="view-animate" style="text-align: center; padding: 50px 0;"><i class="ph-fill ph-check-circle" style="font-size: 70px; color: var(--success); margin-bottom: 20px;"></i><h1 class="view-title">Test Completado</h1><p style="font-size: 18px; color: var(--text-secondary); margin-bottom: 25px;">Ganaste ${score * 50} XP.</p><button class="hero-btn" onclick="app.navigate('evaluate')">Volver a Evaluaciones</button></div>`;
                updateUI();
                saveGameState();
                return;
            }
            const q = data.questions[currentQ];
            let optsHtml = q.options.map((opt, i) => `<div class="quiz-option" onclick="app.handleQuizAnswer(${i}, ${q.answer})">${opt}</div>`).join('');
            contentArea.innerHTML = `<div class="view-animate quiz-container"><div class="quiz-progress"><span>Pregunta ${currentQ + 1}/${data.questions.length}</span></div><h2 class="quiz-question">${q.q}</h2><div class="quiz-options">${optsHtml}</div><div class="quiz-feedback" id="quiz-feedback"></div><button class="btn-next" id="btn-next" style="display:none; margin-top:20px;" onclick="app.nextQuestion()">Siguiente <i class="ph-bold ph-arrow-right"></i></button></div>`;
        };

        window.app.handleQuizAnswer = (sel, cor) => {
            const opts = document.querySelectorAll('.quiz-option');
            opts.forEach((o, i) => { o.style.pointerEvents = 'none'; if(i===cor) o.classList.add('correct'); else if(i===sel) o.classList.add('incorrect'); });
            const fb = document.getElementById('quiz-feedback'); fb.style.display = 'block';
            if (sel === cor) { score++; fb.style.color = 'var(--success)'; fb.innerText = "¡Correcto!"; } 
            else { fb.style.color = 'var(--error)'; fb.innerText = "Incorrecto."; }
            document.getElementById('btn-next').style.display = 'block';
        };
        window.app.nextQuestion = () => { playSound('click'); currentQ++; renderQuestion(); };
        renderQuestion();
    };

    // =========================================================================
    // CONSOLA NEURO DIGITAL 3D: MODELO BIOCONECTOMA CEREBRAL & TELEMETRÍA GAMIFICADA
    // =========================================================================
    let brainAnimId = null;
    let brainState = {
        rotX: 0.2,
        rotY: -0.4,
        targetRotX: 0.2,
        targetRotY: -0.4,
        autoRotate: true,
        activeLobe: 'all',
        isDragging: false,
        lastX: 0,
        lastY: 0,
        hoveredNode: null,
        pulseRadius: -1
    };

    window.initBrain3D = () => {
        const canvas = document.getElementById('brain-3d-canvas');
        if (!canvas) return;

        // Limpiar instancia previa de Three.js si existía
        if (window._brainThreeInstance) {
            try {
                if (window._brainThreeInstance.animId) cancelAnimationFrame(window._brainThreeInstance.animId);
                if (window._brainThreeInstance.renderer) window._brainThreeInstance.renderer.dispose();
            } catch(e) {}
            window._brainThreeInstance = null;
        }

        const container = canvas.parentElement;
        const getDims = () => {
            const w = container ? container.clientWidth : 800;
            const h = container ? container.clientHeight : 560;
            return { w: Math.max(300, w), h: Math.max(400, h) };
        };

        const { w, h } = getDims();

        // Si Three.js no estuviera cargado, usar fallback seguro
        if (typeof THREE === 'undefined') {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, w, h);
                ctx.fillStyle = '#22D3EE';
                ctx.font = '700 16px "Space Grotesk", sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Cargando motor WebGL 3D...', w / 2, h / 2);
            }
            return;
        }

        // 1. CONFIGURACIÓN DEL RENDERER WEBGL (Fondo Negro Puro e Iluminación PBR)
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(w, h, false);
        renderer.setClearColor(0x000000, 1.0); // Fondo negro espacial puro y absoluto

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        // Cámara de perspectiva amplia para visualización clara y grande
        const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
        camera.position.set(0, 0.9, 10.8);

        // 2. SISTEMA DE ILUMINACIÓN MULTI-FUENTE PARA MÁXIMA DEFINICIÓN 3D
        const ambientLight = new THREE.AmbientLight(0x0a1628, 2.0);
        scene.add(ambientLight);

        // Luz principal direccional frontal con brillo especular
        const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
        keyLight.position.set(6, 9, 8);
        scene.add(keyLight);

        // Luz de relleno cian desde el lado opuesto
        const fillLight = new THREE.DirectionalLight(0x22d3ee, 1.6);
        fillLight.position.set(-8, 3, 5);
        scene.add(fillLight);

        // Luz de silueta / borde posterior (Rim Light) para resaltar contornos volumétricos
        const rimLight = new THREE.DirectionalLight(0x38bdf8, 3.2);
        rimLight.position.set(0, 5, -9);
        scene.add(rimLight);

        // Luz inferior sutil
        const underLight = new THREE.DirectionalLight(0x1e293b, 1.2);
        underLight.position.set(0, -7, 2);
        scene.add(underLight);

        // 3. GRUPO RAÍZ DEL CEREBRO 3D (Escalado amplio y centrado)
        const brainRoot = new THREE.Group();
        brainRoot.scale.set(1.18, 1.18, 1.18);
        scene.add(brainRoot);

        // Paleta oficial de colores de los lóbulos
        const lobeColors = {
            frontal: new THREE.Color(0x22D3EE),   // Cyan
            parietal: new THREE.Color(0x38BDF8),  // Sky Blue
            temporal: new THREE.Color(0xC084FC),  // Purple
            occipital: new THREE.Color(0xF59E0B), // Amber
            cerebelo: new THREE.Color(0x34D399),  // Emerald
            tronco: new THREE.Color(0x94A3B8),    // Slate Pearl
            dimmed: new THREE.Color(0x131D33)     // Dark Slate para lóbulos inactivos
        };

        const cortexMeshes = [];
        const hemisphereGeometries = [];

        // Generador de geometría anatómica de hemisferio cerebral con circunvoluciones y surcos reales
        const createHemisphere = (isRight) => {
            const side = isRight ? 1 : -1;
            const geo = new THREE.SphereGeometry(2.7, 72, 54);
            const pos = geo.attributes.position;
            const v = new THREE.Vector3();
            const colors = [];
            const lobeTags = [];

            for (let i = 0; i < pos.count; i++) {
                v.fromBufferAttribute(pos, i);

                // Proporciones anatómicas humanas reales
                // Aplanamiento y separación en la cara medial interna (cisura longitudinal)
                if (isRight) v.x = Math.max(0.12, v.x * 0.95) + 0.16;
                else v.x = Math.min(-0.12, v.x * 0.95) - 0.16;

                // Elongación anteroposterior (eje frontal-occipital)
                v.z *= 1.34;
                // Bóveda dorsal redondeada y base más cóncava
                v.y = v.y > 0 ? v.y * 1.16 : v.y * 0.92;

                // Curvatura del lóbulo temporal (abultamiento lateral e inferior hacia adelante)
                if (v.z > -0.6 && v.z < 1.3 && v.y < 0.25) {
                    v.x += side * 0.52 * Math.cos(v.y * 1.3);
                    v.y -= 0.35;
                }

                // Curvatura del polo frontal anterior
                if (v.z > 1.2) v.y += 0.05;
                // Curvatura del polo occipital posterior descendente
                if (v.z < -1.4) v.y -= 0.12;

                // Modelado de surcos profundos (Sulci) y circunvoluciones (Gyri) anatómicas
                const len = v.length();
                const norm = v.clone().normalize();
                const theta = Math.atan2(v.z, v.x);
                const phi = Math.acos(Math.max(-1, Math.min(1, v.y / len)));

                // Surcos mayores primarios (Surco central de Rolando y cisura de Silvio)
                const s1 = Math.sin(theta * 5.2 + Math.sin(phi * 4.2) * 1.5);
                const s2 = Math.cos(phi * 6.5 + Math.cos(theta * 4.0) * 1.3);
                // Convoluciones finas secundarias
                const g1 = Math.sin(v.x * 4.0) * Math.cos(v.y * 4.0) * Math.sin(v.z * 4.0);
                const g2 = Math.cos(v.x * 7.2 + v.z * 6.2) * 0.32;
                const g3 = Math.sin(v.y * 8.2 + v.x * 5.2) * 0.22;

                const foldDisplacement = (s1 * 0.22 + s2 * 0.18 + g1 * 0.26 + g2 * 0.12 + g3 * 0.09);
                v.addScaledVector(norm, foldDisplacement);
                pos.setXYZ(i, v.x, v.y, v.z);

                // Clasificación de lóbulo según coordenadas anatómicas
                let lobe = 'frontal';
                if (v.z > 0.75 && v.y > -0.75) lobe = 'frontal';
                else if (v.z <= 0.75 && v.z > -1.15 && v.y > 0.3) lobe = 'parietal';
                else if (v.z <= -1.15 && v.y > -1.35) lobe = 'occipital';
                else if (Math.abs(v.x) > 1.35 && v.y <= 0.3 && v.z > -1.4) lobe = 'temporal';
                else lobe = v.z > 0 ? 'frontal' : 'parietal';

                lobeTags.push(lobe);
                const c = lobeColors[lobe];
                colors.push(c.r, c.g, c.b);
            }

            geo.computeVertexNormals();
            geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            geo.userData = { lobeTags, baseColors: [...colors] };
            hemisphereGeometries.push(geo);

            // Capa 1: Superficie sólida cortical anatómica (PBR con reflejos y rugosidad biológica)
            const solidMat = new THREE.MeshStandardMaterial({
                vertexColors: true,
                roughness: 0.38,
                metalness: 0.15,
                emissive: new THREE.Color(0x061124),
                emissiveIntensity: 0.35
            });
            const mesh = new THREE.Mesh(geo, solidMat);
            brainRoot.add(mesh);
            cortexMeshes.push(mesh);

            // Capa 2: Malla sináptica holográfica brillante sobrepuesta en la corteza
            const wireMat = new THREE.MeshBasicMaterial({
                color: 0x22d3ee,
                wireframe: true,
                transparent: true,
                opacity: 0.16,
                blending: THREE.AdditiveBlending
            });
            const wireMesh = new THREE.Mesh(geo, wireMat);
            wireMesh.scale.set(1.014, 1.014, 1.014);
            brainRoot.add(wireMesh);
        };

        // Generar ambos hemisferios cerebrales
        createHemisphere(false); // Hemisferio Izquierdo
        createHemisphere(true);  // Hemisferio Derecho

        // 4. HEMISFERIOS CEREBELOSOS (Cerebelo con folia transversal estriada)
        [-1, 1].forEach(sideSign => {
            const cerGeo = new THREE.SphereGeometry(1.05, 48, 36);
            const cerPos = cerGeo.attributes.position;
            const cV = new THREE.Vector3();
            for (let i = 0; i < cerPos.count; i++) {
                cV.fromBufferAttribute(cerPos, i);
                cV.x *= 1.25;
                cV.z *= 0.9;
                // Estrías transversales de la folia cerebelosa
                const folia = Math.sin(cV.y * 32.0) * 0.08;
                cV.x += folia * 0.4;
                cV.z += folia * 0.5;
                cerPos.setXYZ(i, cV.x, cV.y, cV.z);
            }
            cerGeo.computeVertexNormals();

            const cerMat = new THREE.MeshStandardMaterial({
                color: lobeColors.cerebelo,
                roughness: 0.45,
                metalness: 0.1,
                emissive: new THREE.Color(0x062818),
                emissiveIntensity: 0.4
            });
            const cerMesh = new THREE.Mesh(cerGeo, cerMat);
            cerMesh.position.set(sideSign * 1.22, -2.35, -1.85);
            cerMesh.userData = { isCerebelo: true };
            brainRoot.add(cerMesh);
            cortexMeshes.push(cerMesh);
        });

        // 5. TRONCO ENCEFÁLICO (Brainstem vertical)
        const stemGeo = new THREE.CylinderGeometry(0.55, 0.42, 2.2, 32);
        const stemMat = new THREE.MeshStandardMaterial({
            color: lobeColors.tronco,
            roughness: 0.5,
            metalness: 0.1,
            emissive: new THREE.Color(0x0a101d),
            emissiveIntensity: 0.3
        });
        const stemMesh = new THREE.Mesh(stemGeo, stemMat);
        stemMesh.position.set(0, -2.6, -0.6);
        stemMesh.rotation.x = -0.15;
        brainRoot.add(stemMesh);

        // 6. CUERPO CALLOSO Y TRACTOS SINÁPTICOS INTERHEMISFÉRICOS
        const tractsGroup = new THREE.Group();
        for (let i = 0; i < 16; i++) {
            const u = i / 15;
            const curve = new THREE.CatmullRomCurve3([
                new THREE.Vector3(-0.9, -0.2 + Math.sin(u * Math.PI) * 0.8, -1.2 + u * 2.4),
                new THREE.Vector3(0, 0.4 + Math.sin(u * Math.PI) * 1.2, -1.2 + u * 2.4),
                new THREE.Vector3(0.9, -0.2 + Math.sin(u * Math.PI) * 0.8, -1.2 + u * 2.4)
            ]);
            const pts = curve.getPoints(24);
            const tractGeo = new THREE.BufferGeometry().setFromPoints(pts);
            const tractMat = new THREE.LineBasicMaterial({
                color: 0x38BDF8,
                transparent: true,
                opacity: 0.5,
                blending: THREE.AdditiveBlending
            });
            tractsGroup.add(new THREE.Line(tractGeo, tractMat));
        }
        brainRoot.add(tractsGroup);

        // 7. IMPULSOS ELÉCTRICOS SINÁPTICOS (Action Potentials en 3D)
        const sparkCount = 48;
        const sparkPositions = new Float32Array(sparkCount * 3);
        const sparkVelocities = [];
        for (let k = 0; k < sparkCount; k++) {
            const rad = 2.7 + Math.random() * 0.5;
            const th = Math.random() * Math.PI * 2;
            const ph = Math.random() * Math.PI;
            sparkPositions[k * 3] = rad * Math.sin(ph) * Math.cos(th);
            sparkPositions[k * 3 + 1] = rad * Math.cos(ph);
            sparkPositions[k * 3 + 2] = rad * Math.sin(ph) * Math.sin(th) * 1.3;
            sparkVelocities.push({
                th, ph,
                speedTh: (Math.random() - 0.5) * 0.02,
                speedPh: (Math.random() - 0.5) * 0.02
            });
        }
        const sparkGeo = new THREE.BufferGeometry();
        sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
        const sparkMat = new THREE.PointsMaterial({
            color: 0xFFFFFF,
            size: 0.16,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending
        });
        const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
        brainRoot.add(sparkPoints);

        // 8. PEDESTAL HOLOGRÁFICO Y RADAR DE PISO (Y = -4.5)
        const floorGroup = new THREE.Group();
        floorGroup.position.y = -4.2;

        [2.5, 4.2, 5.8].forEach((r, idx) => {
            const ringGeo = new THREE.RingGeometry(r - 0.02, r, 64);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0x22D3EE,
                transparent: true,
                opacity: 0.18 - idx * 0.04,
                side: THREE.DoubleSide
            });
            const ringMesh = new THREE.Mesh(ringGeo, ringMat);
            ringMesh.rotation.x = Math.PI / 2;
            floorGroup.add(ringMesh);
        });

        // Sombra suave proyectada bajo el cerebro
        const shadowGeo = new THREE.CircleGeometry(3.6, 48);
        const shadowMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.75,
            side: THREE.DoubleSide
        });
        const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
        shadowMesh.rotation.x = Math.PI / 2;
        shadowMesh.position.y = 0.01;
        floorGroup.add(shadowMesh);
        scene.add(floorGroup);

        // 9. VARIABLES DE CONTROL DE CÁMARA Y ROTACIÓN
        let rotX = 0.18;
        let rotY = -0.45;
        let targetRotX = 0.18;
        let targetRotY = -0.45;
        let targetZoom = 10.8;
        let autoRotate = true;
        let isDragging = false;
        let lastX = 0;
        let lastY = 0;
        let pulseTime = -1;

        // 10. RAYCASTER & INTERACCIÓN DE LÓBULOS (HOVER & CLIC NEUROEDUCATIVO)
        const raycaster = new THREE.Raycaster();
        const mouse2D = new THREE.Vector2();
        let hoveredLobe = null;
        let downPos = { x: 0, y: 0 };

        const getIntersectedLobe = (clientX, clientY) => {
            const rect = canvas.getBoundingClientRect();
            if (!rect || rect.width === 0 || rect.height === 0) return null;
            mouse2D.x = ((clientX - rect.left) / rect.width) * 2 - 1;
            mouse2D.y = -((clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouse2D, camera);
            const intersects = raycaster.intersectObjects(cortexMeshes, true);
            if (intersects && intersects.length > 0) {
                const hit = intersects[0];
                if (hit.object.userData && hit.object.userData.isCerebelo) {
                    return 'cerebelo';
                }
                const geo = hit.object.geometry;
                if (geo && geo.userData && geo.userData.lobeTags && hit.face) {
                    const lobe = geo.userData.lobeTags[hit.face.a];
                    if (lobe) return lobe;
                }
                const point = hit.point;
                if (point.z > 0.8 && point.y > -0.8) return 'frontal';
                if (point.z <= 0.8 && point.z > -1.2 && point.y > 0.3) return 'parietal';
                if (point.z <= -1.2 && point.y > -1.35) return 'occipital';
                if (Math.abs(point.x) > 1.35) return 'temporal';
                return 'frontal';
            }
            return null;
        };

        // Listeners interactivos de arrastre del ratón / touch
        const onDown = (e) => {
            isDragging = true;
            lastX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            lastY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
            downPos.x = lastX;
            downPos.y = lastY;
            canvas.style.cursor = 'grabbing';
        };

        const onMove = (e) => {
            const curX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            const curY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

            if (isDragging) {
                const dx = curX - lastX;
                const dy = curY - lastY;
                lastX = curX;
                lastY = curY;

                targetRotY += dx * 0.007;
                targetRotX += dy * 0.007;
                targetRotX = Math.max(-1.1, Math.min(1.1, targetRotX));
            } else {
                // Detección de zona sobre la que se posa el cursor (Hover)
                const detectedLobe = getIntersectedLobe(curX, curY);
                if (detectedLobe && detectedLobe !== hoveredLobe) {
                    hoveredLobe = detectedLobe;
                    canvas.style.cursor = 'pointer';
                    if (window.app && window.app.updateCognitivePanel) {
                        window.app.updateCognitivePanel(detectedLobe, false);
                    }
                } else if (!detectedLobe && hoveredLobe) {
                    hoveredLobe = null;
                    canvas.style.cursor = 'grab';
                }
            }
        };

        const onUp = (e) => {
            const upX = (e && e.clientX) || lastX;
            const upY = (e && e.clientY) || lastY;
            const dist = Math.hypot(upX - downPos.x, upY - downPos.y);
            isDragging = false;
            canvas.style.cursor = 'grab';

            // Si fue un clic (sin arrastre mayor a 6px), enfocar la zona seleccionada
            if (dist < 6) {
                const clickedLobe = getIntersectedLobe(upX, upY);
                if (clickedLobe && window.app && window.app.focusBrainLobe) {
                    window.app.focusBrainLobe(clickedLobe);
                }
            }
        };

        const onDblClick = (e) => {
            const curX = e.clientX || 0;
            const curY = e.clientY || 0;
            const targetLobe = getIntersectedLobe(curX, curY) || window._currentBrainLobe || 'all';
            if (window.app && window.app.openNeuroArticle) {
                window.app.openNeuroArticle(targetLobe);
            }
        };

        const onWheel = (e) => {
            e.preventDefault();
            const delta = e.deltaY * 0.008;
            targetZoom = Math.max(6.5, Math.min(16.0, targetZoom + delta));
        };

        canvas.addEventListener('pointerdown', onDown);
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        canvas.addEventListener('dblclick', onDblClick);
        canvas.addEventListener('wheel', onWheel, { passive: false });

        // Redimensionamiento responsivo
        const onResize = () => {
            const dims = getDims();
            camera.aspect = dims.w / dims.h;
            camera.updateProjectionMatrix();
            renderer.setSize(dims.w, dims.h, false);
        };
        window.addEventListener('resize', onResize);

        // 10. FUNCIÓN PARA ILUMINAR / ENFOCAR LÓBULO ESPECÍFICO EN 3D
        const updateLobeFocusIn3D = (lobeKey) => {
            hemisphereGeometries.forEach(geo => {
                const colorAttr = geo.attributes.color;
                const { lobeTags, baseColors } = geo.userData;
                const colors = colorAttr.array;

                for (let i = 0; i < lobeTags.length; i++) {
                    const tag = lobeTags[i];
                    const isTarget = (lobeKey === 'all' || tag === lobeKey);
                    const idx = i * 3;

                    if (isTarget) {
                        // Resaltar con brillo intenso
                        const boost = lobeKey === 'all' ? 1.0 : 1.45;
                        colors[idx] = Math.min(1.0, baseColors[idx] * boost);
                        colors[idx + 1] = Math.min(1.0, baseColors[idx + 1] * boost);
                        colors[idx + 2] = Math.min(1.0, baseColors[idx + 2] * boost);
                    } else {
                        // Atenuar lóbulos no seleccionados
                        colors[idx] = lobeColors.dimmed.r;
                        colors[idx + 1] = lobeColors.dimmed.g;
                        colors[idx + 2] = lobeColors.dimmed.b;
                    }
                }
                colorAttr.needsUpdate = true;
            });

            // Actualizar material del cerebelo
            cortexMeshes.forEach(m => {
                if (m.userData && m.userData.isCerebelo) {
                    if (lobeKey === 'all' || lobeKey === 'cerebelo') {
                        m.material.color.copy(lobeColors.cerebelo);
                        m.material.emissive.set(0x062818);
                    } else {
                        m.material.color.copy(lobeColors.dimmed);
                        m.material.emissive.set(0x020610);
                    }
                }
            });
        };

        // 11. BUCLE DE RENDERIZADO WEBGL (60 FPS)
        let clock = new THREE.Clock();

        const animate = () => {
            const liveCanvas = document.getElementById('brain-3d-canvas');
            if (!liveCanvas) {
                window.removeEventListener('pointermove', onMove);
                window.removeEventListener('pointerup', onUp);
                window.removeEventListener('resize', onResize);
                return;
            }

            const dt = clock.getDelta();
            const elapsed = clock.getElapsedTime();

            // Auto-rotación holográfica si el usuario no está arrastrando
            if (autoRotate && !isDragging) {
                targetRotY += 0.0035;
            }

            // Damping suave cinético
            rotX += (targetRotX - rotX) * 0.08;
            rotY += (targetRotY - rotY) * 0.08;
            camera.position.z += (targetZoom - camera.position.z) * 0.1;

            brainRoot.rotation.x = rotX;
            brainRoot.rotation.y = rotY;

            // Animación de chispas sinápticas (Action Potentials)
            const posArr = sparkGeo.attributes.position.array;
            for (let k = 0; k < sparkCount; k++) {
                const vel = sparkVelocities[k];
                vel.th += vel.speedTh;
                vel.ph += vel.speedPh;
                const rad = 2.85 + Math.sin(elapsed * 3.0 + k) * 0.15;
                posArr[k * 3] = rad * Math.sin(vel.ph) * Math.cos(vel.th);
                posArr[k * 3 + 1] = rad * Math.cos(vel.ph);
                posArr[k * 3 + 2] = rad * Math.sin(vel.ph) * Math.sin(vel.th) * 1.32;
            }
            sparkGeo.attributes.position.needsUpdate = true;

            // Manejo de onda de pulso sináptico concéntrico
            if (pulseTime >= 0) {
                pulseTime += dt * 2.2;
                const flash = Math.sin(pulseTime * Math.PI) * 0.8;
                cortexMeshes.forEach(m => {
                    if (m.material && m.material.emissiveIntensity !== undefined) {
                        m.material.emissiveIntensity = 0.35 + Math.max(0, flash);
                    }
                });
                if (pulseTime >= 1.0) {
                    pulseTime = -1;
                    cortexMeshes.forEach(m => {
                        if (m.material && m.material.emissiveIntensity !== undefined) {
                            m.material.emissiveIntensity = 0.35;
                        }
                    });
                }
            }

            renderer.render(scene, camera);
            window._brainThreeInstance.animId = requestAnimationFrame(animate);
        };

        window._brainThreeInstance = {
            renderer,
            scene,
            camera,
            animId: null,
            setTargetRot: (rx, ry) => { targetRotX = rx; targetRotY = ry; },
            setZoom: (z) => { targetZoom = Math.max(6.5, Math.min(16.0, z)); },
            getZoom: () => targetZoom,
            toggleAutoRotate: () => { autoRotate = !autoRotate; return autoRotate; },
            triggerPulse: () => { pulseTime = 0; },
            updateLobeFocus: updateLobeFocusIn3D
        };

        window._brainThreeInstance.animId = requestAnimationFrame(animate);

        // Inicializar panel cognitivo con la visión global
        setTimeout(() => {
            if (window.app && window.app.focusBrainLobe) {
                window.app.focusBrainLobe('all');
            }
        }, 50);
    };

    // Zoom interactivo para el cerebro 3D
    window.app.zoomBrain = (factor) => {
        try { playSound('click'); } catch(e) {}
        if (window._brainThreeInstance) {
            const curZ = window._brainThreeInstance.getZoom();
            window._brainThreeInstance.setZoom(curZ / factor);
        }
    };

    // Alternar auto-rotación del cerebro 3D
    window.app.toggleBrainAutoRotate = () => {
        try { playSound('click'); } catch(e) {}
        let isAuto = true;
        if (window._brainThreeInstance) {
            isAuto = window._brainThreeInstance.toggleAutoRotate();
        }
        const btn = document.getElementById('btn-brain-spin');
        if (btn) {
            if (isAuto) {
                btn.style.color = 'var(--color-cyan)';
                btn.style.borderColor = 'var(--color-cyan)';
                btn.classList.add('active');
            } else {
                btn.style.color = 'var(--text-muted)';
                btn.style.borderColor = 'var(--border-subtle)';
                btn.classList.remove('active');
            }
        }
    };

    // Restablecer ángulo y vista original del cerebro 3D
    window.app.resetBrainView = () => {
        try { playSound('click'); } catch(e) {}
        if (window._brainThreeInstance) {
            window._brainThreeInstance.setTargetRot(0.18, -0.45);
            window._brainThreeInstance.setZoom(10.8);
        }
        window.app.focusBrainLobe('all');
    };

    // Disparar pulso sináptico concéntrico
    window.app.triggerBrainPulse = () => {
        try { playSound('streak'); } catch(e) {}
        if (window._brainThreeInstance) {
            window._brainThreeInstance.triggerPulse();
        }
        const panel = document.getElementById('brain-cognitive-panel');
        if (panel) {
            panel.style.boxShadow = '0 0 25px rgba(34, 211, 238, 0.6)';
            setTimeout(() => { panel.style.boxShadow = 'none'; }, 600);
        }
    };

    // Actualizar Panel de Procesos Cognitivos y Neuroeducación
    window.app.updateCognitivePanel = (lobeKey, isFixed = false) => {
        const article = (window.neuroArticlesData && window.neuroArticlesData[lobeKey]) || window.neuroArticlesData.all;
        if (!article) return;
        const panel = document.getElementById('brain-cognitive-panel');
        if (!panel) return;

        panel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 42px; height: 42px; border-radius: 12px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 22px; color: ${article.color}; border: 1px solid ${article.color}50; box-shadow: 0 0 15px ${article.color}30;">
                        <i class="ph-bold ${article.icon}"></i>
                    </div>
                    <div>
                        <div style="display: inline-flex; align-items: center; gap: 6px; font-size: 10.5px; font-family: var(--font-tech); text-transform: uppercase; letter-spacing: 1.2px; color: ${article.color}; font-weight: 800;">
                            <i class="ph-bold ph-crosshair"></i> ${article.badge}
                        </div>
                        <h3 style="font-size: 18px; color: #fff; font-family: var(--font-tech); margin: 2px 0 0;">
                            ${article.title}
                        </h3>
                    </div>
                </div>
                <button class="hero-btn" onclick="app.openNeuroArticle('${lobeKey}')" style="background: linear-gradient(135deg, var(--primary), var(--color-cyan)); color: #020617; font-weight: 800; border: none; font-size: 12.5px; padding: 9px 18px; box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);">
                    <i class="ph-bold ph-book-open-text"></i> Leer Artículo en Profundidad
                </button>
            </div>

            <!-- Grilla de Procesos Cognitivos Básicos y Avanzados -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
                <!-- Procesos Cognitivos Básicos -->
                <div style="background: rgba(8, 13, 27, 0.65); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 14px 16px;">
                    <span style="font-size: 11px; font-family: var(--font-tech); text-transform: uppercase; letter-spacing: 1px; color: var(--color-cyan); font-weight: 800; display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                        <i class="ph-bold ph-waveform"></i> Procesos Cognitivos Básicos
                    </span>
                    <p style="font-size: 13px; color: #E2E8F0; line-height: 1.45; margin: 0;">
                        ${article.basicProcesses}
                    </p>
                </div>

                <!-- Procesos Cognitivos Avanzados / Superiores -->
                <div style="background: rgba(8, 13, 27, 0.65); border: 1px solid rgba(192, 132, 252, 0.25); border-radius: 14px; padding: 14px 16px;">
                    <span style="font-size: 11px; font-family: var(--font-tech); text-transform: uppercase; letter-spacing: 1px; color: #C084FC; font-weight: 800; display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                        <i class="ph-bold ph-cpu"></i> Procesos Cognitivos Superiores
                    </span>
                    <p style="font-size: 13px; color: #E2E8F0; line-height: 1.45; margin: 0;">
                        ${article.advancedProcesses}
                    </p>
                </div>
            </div>

            <!-- Aplicación Neuroeducativa en Aula -->
            <div style="background: linear-gradient(135deg, rgba(34, 211, 238, 0.08), rgba(37, 99, 235, 0.04)); border: 1px solid rgba(34, 211, 238, 0.25); border-radius: 14px; padding: 14px 16px;">
                <span style="font-size: 11px; font-family: var(--font-tech); text-transform: uppercase; letter-spacing: 1px; color: var(--color-cyan); font-weight: 800; display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                    <i class="ph-bold ph-chalkboard-teacher"></i> Aplicación Neuroeducativa en el Aula
                </span>
                <p style="font-size: 13px; color: #E2E8F0; line-height: 1.5; margin: 0;">
                    ${article.classroomApplication}
                </p>
            </div>
        `;
    };

    // Enfocar lóbulo cerebral específico e iluminar sus conexiones en 3D
    window.app.focusBrainLobe = (lobeKey) => {
        try { playSound('click'); } catch(e) {}
        window._currentBrainLobe = lobeKey;

        // Actualizar estado activo en botones
        const buttons = document.querySelectorAll('.brain-lobe-btn');
        buttons.forEach(btn => {
            if (btn.getAttribute('data-lobe') === lobeKey) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        // Orientar el cerebro 3D e iluminar el lóbulo seleccionado
        if (window._brainThreeInstance) {
            window._brainThreeInstance.updateLobeFocus(lobeKey);
            if (lobeKey === 'all') {
                window._brainThreeInstance.setTargetRot(0.18, -0.45);
            } else if (lobeKey === 'frontal') {
                window._brainThreeInstance.setTargetRot(0.04, 0.0);
            } else if (lobeKey === 'parietal') {
                window._brainThreeInstance.setTargetRot(0.55, -0.2);
            } else if (lobeKey === 'temporal') {
                window._brainThreeInstance.setTargetRot(0.05, 1.55);
            } else if (lobeKey === 'occipital') {
                window._brainThreeInstance.setTargetRot(0.18, Math.PI);
            } else if (lobeKey === 'cerebelo') {
                window._brainThreeInstance.setTargetRot(-0.45, 2.8);
            }
        }

        // Actualizar panel cognitivo
        window.app.updateCognitivePanel(lobeKey, true);
    };

    // Modal de Lectura en Profundidad de Neuroeducación
    window.app.openNeuroArticle = (lobeKey) => {
        try { playSound('click'); } catch(e) {}
        const article = (window.neuroArticlesData && window.neuroArticlesData[lobeKey]) || window.neuroArticlesData.all;
        if (!article) return;

        const modal = document.getElementById('neuro-article-modal');
        const iconEl = document.getElementById('modal-article-icon');
        const tagEl = document.getElementById('modal-article-tag');
        const titleEl = document.getElementById('modal-article-title');
        const bodyEl = document.getElementById('modal-article-body');

        if (iconEl) iconEl.innerHTML = `<i class="ph-bold ${article.icon}"></i>`;
        if (tagEl) tagEl.textContent = article.tag;
        if (titleEl) titleEl.textContent = article.title;
        if (bodyEl) {
            bodyEl.innerHTML = `
                <div style="margin-bottom: 24px; padding-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.08);">
                    <p style="font-size: 16px; color: #E2E8F0; line-height: 1.6; margin-bottom: 14px;">
                        ${article.subtitle}
                    </p>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; font-size: 12px; color: var(--text-secondary);">
                        <span><i class="ph-bold ph-clock"></i> ${article.readingTime}</span>
                        <span>•</span>
                        <span><i class="ph-bold ph-brain"></i> Región: ${article.lobe}</span>
                        <span>•</span>
                        <span style="color: ${article.color}; font-weight: 700;"><i class="ph-bold ph-shield-check"></i> PsicoEduca Academy // Neurociencia Rigurosa</span>
                    </div>
                </div>

                <!-- Resumen de Procesos -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 28px;">
                    <div style="background: rgba(34, 211, 238, 0.08); border: 1px solid rgba(34, 211, 238, 0.25); border-radius: 12px; padding: 16px;">
                        <strong style="color: var(--color-cyan); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">Procesos Básicos:</strong>
                        <div style="font-size: 13.5px; color: #CBD5E1; line-height: 1.45;">${article.basicProcesses}</div>
                    </div>
                    <div style="background: rgba(192, 132, 252, 0.08); border: 1px solid rgba(192, 132, 252, 0.25); border-radius: 12px; padding: 16px;">
                        <strong style="color: #C084FC; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">Procesos Superiores:</strong>
                        <div style="font-size: 13.5px; color: #CBD5E1; line-height: 1.45;">${article.advancedProcesses}</div>
                    </div>
                </div>

                ${article.bodyHtml}
            `;
        }

        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    window.app.closeNeuroArticle = () => {
        try { playSound('click'); } catch(e) {}
        const modal = document.getElementById('neuro-article-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    // Cambiar Género del Avatar Pixel Art con Persistencia
    window.app.setAvatarGender = (gender) => {
        try { playSound('click'); } catch(e) {}
        gameState.avatarGender = gender;
        saveGameState();
        if (views.profile) {
            contentArea.innerHTML = views.profile();
        }
    };

    // Desatar Pulso de Evolución del Avatar (Animación, Partículas & Feedback)
    window.app.triggerAvatarSpecialEffect = () => {
        try { playSound('streak'); } catch(e) {}
        const wrapper = document.getElementById('pixel-avatar-wrapper');
        if (wrapper) {
            wrapper.classList.remove('animating-jump');
            void wrapper.offsetWidth;
            wrapper.classList.add('animating-jump');
            setTimeout(() => {
                wrapper.classList.remove('animating-jump');
            }, 1000);
        }

        const stage = document.querySelector('.pixel-avatar-stage');
        if (stage) {
            const burst = document.createElement('div');
            burst.style.position = 'absolute';
            burst.style.inset = '0';
            burst.style.background = 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)';
            burst.style.pointerEvents = 'none';
            burst.style.transition = 'opacity 0.6s ease';
            burst.style.opacity = '1';
            stage.appendChild(burst);
            setTimeout(() => {
                burst.style.opacity = '0';
                setTimeout(() => burst.remove(), 600);
            }, 300);
        }
    };

    // Filtros interactivos para la matriz de insignias y medallas
    window.app.filterBadges = (filterKey) => {
        try { playSound('click'); } catch(e) {}
        const btns = document.querySelectorAll('.badge-filter-btn');
        btns.forEach(b => {
            if (b.getAttribute('data-filter') === filterKey) b.classList.add('active');
            else b.classList.remove('active');
        });

        const cards = document.querySelectorAll('.neuro-badge-card');
        cards.forEach(card => {
            const isUnlocked = card.getAttribute('data-unlocked') === 'true';
            const isEval = card.getAttribute('data-eval') === 'true';
            let show = false;
            if (filterKey === 'all') show = true;
            else if (filterKey === 'unlocked') show = isUnlocked;
            else if (filterKey === 'locked') show = !isUnlocked;
            else if (filterKey === 'eval') show = isEval;
            card.style.display = show ? 'flex' : 'none';
        });
    };

    // Inicialización del Motor de Red Neuronal Reactiva (Canvas 2D)
    const initNeuralCanvas = () => {
        const canvas = document.getElementById('neural-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let particles = [];
        let mouse = { x: -2000, y: -2000, radius: 180 };
        const colors = ['#22D3EE', '#60A5FA', '#34D399', '#38BDF8'];
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const resize = () => {
            width = canvas.width = window.innerWidth || document.documentElement.clientWidth || 1280;
            height = canvas.height = window.innerHeight || document.documentElement.clientHeight || 800;
            createParticles();
        };

        const createParticles = () => {
            particles = [];
            const count = width < 768 ? 40 : 85;
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.08 : 0.55),
                    vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.08 : 0.55),
                    radius: Math.random() * 2.2 + 2.0,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    baseAlpha: Math.random() * 0.35 + 0.55,
                    pulseSpeed: Math.random() * 0.025 + 0.015,
                    pulseOffset: Math.random() * Math.PI * 2
                });
            }
        };

        let tick = 0;
        const render = () => {
            ctx.clearRect(0, 0, width, height);
            tick += 0.02;

            // 1. Dibujar conexiones entre partículas
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];

                p1.x += p1.vx;
                p1.y += p1.vy;

                // Rebotar en bordes
                if (p1.x < 0 || p1.x > width) p1.vx *= -1;
                if (p1.y < 0 || p1.y > height) p1.vy *= -1;

                // Atracción magnética sutil hacia el cursor
                const dxM = mouse.x - p1.x;
                const dyM = mouse.y - p1.y;
                const distM = Math.hypot(dxM, dyM);
                if (distM < mouse.radius && !prefersReducedMotion) {
                    p1.x += dxM * 0.018;
                    p1.y += dyM * 0.018;
                }

                // Dibujar conexiones entre nodos vecinos
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.hypot(dx, dy);
                    const maxDist = width < 768 ? 110 : 155;

                    if (dist < maxDist) {
                        const lineAlpha = (1 - dist / maxDist) * 0.42;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
                        ctx.lineWidth = 1.1;
                        ctx.stroke();
                    }
                }

                // Conectar nodos cercanos al cursor interactivo
                if (distM < 185) {
                    const cursorLineAlpha = (1 - distM / 185) * 0.85;
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(p1.x, p1.y);
                    ctx.strokeStyle = `rgba(34, 211, 238, ${cursorLineAlpha})`;
                    ctx.lineWidth = 1.6;
                    ctx.stroke();
                }
            }

            // 2. Dibujar nodos con halo luminoso
            ctx.save();
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#22D3EE';
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const currentAlpha = p.baseAlpha + Math.sin(tick * p.pulseSpeed * 20 + p.pulseOffset) * 0.2;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0.25, Math.min(1, currentAlpha));
                ctx.fill();
            }

            // 3. Nodo central en el cursor si está en pantalla
            if (mouse.x > 0 && mouse.y > 0 && mouse.x < width && mouse.y < height) {
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#22D3EE';
                ctx.globalAlpha = 0.9;
                ctx.fill();
            }
            ctx.restore();

            requestAnimationFrame(render);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', () => {
            mouse.x = -2000;
            mouse.y = -2000;
        });
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) resize();
        });

        resize();
        render();
    };

    initNeuralCanvas();
    window.addEventListener('load', initNeuralCanvas, { once: true });

    // Clean Welcome Overlay with Tech Sound
    const welcomeOverlay = document.getElementById('welcome-overlay');
    if (welcomeOverlay) {
        try { playSound('techWelcome'); } catch(e) {}
        const playOnFirstInteraction = () => {
            try { playSound('techWelcome'); } catch(e) {}
            document.removeEventListener('pointerdown', playOnFirstInteraction);
        };
        document.addEventListener('pointerdown', playOnFirstInteraction, { once: true });
        setTimeout(() => { if (welcomeOverlay && welcomeOverlay.parentNode) welcomeOverlay.remove(); }, 3200);
    }

    app.navigate('home');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute('data-target');
            app.navigate(target);
        });
    });

    const loginModal = document.getElementById('login-modal');
    if (loginModal) loginModal.style.display = 'none';

    document.addEventListener('click', (e) => {
        const themeMenu = document.getElementById('theme-menu');
        const gearBtn = document.querySelector('.ph-gear')?.parentElement;
        if (themeMenu && themeMenu.style.display === 'block' && !themeMenu.contains(e.target) && gearBtn && !gearBtn.contains(e.target)) {
            themeMenu.style.display = 'none';
        }
    });

    // --- INTEGRACIÓN ELPROFE 360 Y GESTIÓN DE BASE DE CONOCIMIENTO RAG ---
    window.app.toggleChatbot = () => {
        const win = document.getElementById('chatbot-window');
        if (win) {
            win.style.display = (win.style.display === 'none' || !win.style.display) ? 'flex' : 'none';
            if (win.style.display === 'flex') {
                playSound('click');
                document.getElementById('chatbot-input')?.focus();
            }
        }
    };

    window.app.toggleTutorMode = () => {
        if (window.elprofeEngine) {
            window.elprofeEngine.currentMode = window.elprofeEngine.currentMode === 'tutor' ? 'standard' : 'tutor';
            const isTutor = window.elprofeEngine.currentMode === 'tutor';
            playSound('click');
            const chatMsgs = document.getElementById('chatbot-messages');
            if (chatMsgs) {
                const sysMsg = document.createElement('div');
                sysMsg.className = 'chat-msg bot-msg';
                sysMsg.style.background = isTutor ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)';
                sysMsg.style.borderColor = isTutor ? 'var(--success)' : 'var(--border-color)';
                sysMsg.innerHTML = isTutor 
                    ? `<b>🎓 Modo Tutor Activado:</b> Hazme una pregunta sobre lo que estudias o pídeme que te evalúe.`
                    : `<b>📚 Modo Estándar Activado:</b> Responderé a tus preguntas académicas y técnicas.`;
                chatMsgs.appendChild(sysMsg);
                chatMsgs.scrollTop = chatMsgs.scrollHeight;
            }
        }
    };

    const formatMarkdownToHTML = (text) => {
        if (!text) return '';
        let html = text
            .replace(/^### (.*$)/gim, '<h3 style="color:var(--primary); font-size:16px; margin:10px 0 6px 0;">$1</h3>')
            .replace(/^#### (.*$)/gim, '<h4 style="color:var(--success); font-size:14px; margin:8px 0 4px 0;">$1</h4>')
            .replace(/^> (.*$)/gim, '<blockquote style="border-left:3px solid var(--primary); padding-left:10px; margin:6px 0; color:var(--text-secondary); font-style:italic;">$1</blockquote>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>');
        return html;
    };

    window.app.sendChatMessage = async () => {
        const input = document.getElementById('chatbot-input');
        const msgs = document.getElementById('chatbot-messages');
        if (!input || !msgs) return;
        const text = input.value.trim();
        if (!text) return;

        // Agregar mensaje usuario
        const userDiv = document.createElement('div');
        userDiv.className = 'chat-msg user-msg';
        userDiv.innerText = text;
        msgs.appendChild(userDiv);
        input.value = '';
        msgs.scrollTop = msgs.scrollHeight;
        playSound('click');

        // Indicador escribiendo...
        const botDiv = document.createElement('div');
        botDiv.className = 'chat-msg bot-msg';
        botDiv.innerHTML = `<i class="ph-bold ph-spinner spinner" style="animation: spin 1s infinite linear;"></i> <i>Elprofe 360 está consultando la Base de Conocimiento...</i>`;
        msgs.appendChild(botDiv);
        msgs.scrollTop = msgs.scrollHeight;

        try {
            if (window.elprofeEngine) {
                const res = await window.elprofeEngine.processUserMessage(text, gameState);
                botDiv.innerHTML = formatMarkdownToHTML(res.reply);
            } else {
                botDiv.innerHTML = "Error: El motor de conocimiento no está disponible en este momento.";
            }
        } catch (err) {
            console.error("Error en chat:", err);
            botDiv.innerHTML = "Ocurrió un error al procesar la consulta.";
        }
        msgs.scrollTop = msgs.scrollHeight;
    };

    window.app.openKnowledgeAdmin = () => {
        playSound('click');
        const modal = document.getElementById('kb-admin-modal');
        if (modal) {
            modal.style.display = 'flex';
            window.app.renderKnowledgeBaseUIList();
        }
    };

    window.app.renderKnowledgeBaseUIList = (filter = "") => {
        const listDiv = document.getElementById('kb-items-list');
        if (!listDiv) return;
        const kb = (window.psicoeducaKnowledgeBase) ? window.psicoeducaKnowledgeBase : [];
        const normFilter = filter.toLowerCase();

        const filtered = kb.filter(item => {
            if (!normFilter) return true;
            return (item.concepto && item.concepto.toLowerCase().includes(normFilter)) ||
                   (item.tema && item.tema.toLowerCase().includes(normFilter)) ||
                   (item.autores && item.autores.some(a => a.toLowerCase().includes(normFilter)));
        });

        if (filtered.length === 0) {
            listDiv.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-secondary);">No se encontraron fragmentos para "${filter}".</div>`;
            return;
        }

        listDiv.innerHTML = filtered.map(item => `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                    <h4 style="color: var(--primary); font-size: 16px; margin: 0;">${item.concepto}</h4>
                    <span class="badge" style="background: rgba(14,165,233,0.15); color: var(--primary); font-size: 11px;">${item.tema}</span>
                </div>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px; line-height: 1.4;">${item.definicion}</p>
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted);">
                    <span><b>Autores:</b> ${(item.autores||[]).join(', ') || 'N/A'}</span>
                    <span><b>Estado:</b> ${item.validado ? '✅ Validado' : '⏳ En revisión'}</span>
                </div>
            </div>
        `).join('');
    };

    window.app.filterKnowledgeBaseUI = () => {
        const val = document.getElementById('kb-search-input')?.value || "";
        window.app.renderKnowledgeBaseUIList(val);
    };

    window.app.showAddKnowledgeForm = () => {
        const f = document.getElementById('kb-form-container');
        if (f) f.style.display = 'block';
    };

    window.app.saveKnowledgeEntryUI = () => {
        const tema = document.getElementById('kb-new-tema')?.value.trim();
        const subtema = document.getElementById('kb-new-subtema')?.value.trim();
        const concepto = document.getElementById('kb-new-concepto')?.value.trim();
        const definicion = document.getElementById('kb-new-definicion')?.value.trim();
        const autoresStr = document.getElementById('kb-new-autores')?.value.trim();
        const aplicacionesStr = document.getElementById('kb-new-aplicaciones')?.value.trim();

        if (!concepto || !definicion) {
            alert("Por favor completa al menos el nombre del concepto y su definición.");
            return;
        }

        const newItem = {
            id: "custom_" + Date.now(),
            tema: tema || "Conocimiento Propio",
            subtema: subtema || "General",
            concepto,
            definicion,
            autores: autoresStr ? autoresStr.split(',').map(a => a.trim()) : ["PsicoEduca"],
            aplicaciones_educativas: aplicacionesStr ? aplicacionesStr.split('\n').filter(a => a.trim()) : ["Aplicación práctica en procesos formativos."],
            nivel: ["intermedio"],
            publico: ["General"],
            tipo_conocimiento: "propio_psicoeduca",
            fecha_actualizacion: new Date().toISOString().split('T')[0],
            validado: true
        };

        if (window.saveCustomKnowledgeItem) {
            window.saveCustomKnowledgeItem(newItem);
            window.psicoeducaKnowledgeBase.unshift(newItem);
            playSound('success');
            alert("¡Fragmento académico agregado exitosamente a la Base de Conocimiento!");
            document.getElementById('kb-form-container').style.display = 'none';
        }
    };

    // Asegurar disponibilidad global de métodos del chatbot, diagnósticos y consola 3D
    Object.assign(window.app, {
        toggleChatbot: window.app.toggleChatbot,
        sendChatMessage: window.app.sendChatMessage,
        toggleTutorMode: window.app.toggleTutorMode,
        openKnowledgeAdmin: window.app.openKnowledgeAdmin,
        startDiagnosticTest: window.app.startDiagnosticTest,
        toggleBrainAutoRotate: window.app.toggleBrainAutoRotate,
        resetBrainView: window.app.resetBrainView,
        triggerBrainPulse: window.app.triggerBrainPulse,
        focusBrainLobe: window.app.focusBrainLobe,
        updateCognitivePanel: window.app.updateCognitivePanel,
        openNeuroArticle: window.app.openNeuroArticle,
        closeNeuroArticle: window.app.closeNeuroArticle,
        setAvatarGender: window.app.setAvatarGender,
        triggerAvatarSpecialEffect: window.app.triggerAvatarSpecialEffect,
        switchAprendeTab: window.app.switchAprendeTab,
        filterBadges: window.app.filterBadges,
        zoomBrain: window.app.zoomBrain
    });
});

