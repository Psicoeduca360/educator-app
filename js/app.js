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
        firstLogin: Date.now(),
        lastLogin: Date.now()
    };
    saveUsersDB(usersDB);
}
let gameState = usersDB[activeUserKey];

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
                if (target === 'profile') {
                    setTimeout(() => {
                        if (window.initBrain3D) window.initBrain3D();
                    }, 60);
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

    // 3. VISTA APRENDE (Rutas, Cursos, Microcursos y Biblioteca)
    const renderAprende = () => `
        <div class="view-animate">
            <div class="view-header">
                <h1 class="view-title">Centro de Aprendizaje & Rutas</h1>
                <p class="view-subtitle">Accede al catálogo jerárquico de formación continua y biblioteca de recursos.</p>
            </div>

            <!-- Rutas Principales -->
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

            <!-- Cursos y Microcursos -->
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

            <!-- Biblioteca Psicoeduca -->
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
    `;

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
        for (let i = 0; i < gamificationLevels.length; i++) {
            if (gameState.xp >= gamificationLevels[i].xp) {
                currentLevelObj = gamificationLevels[i];
                nextLevelObj = gamificationLevels[i + 1] || gamificationLevels[i];
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

        return `
            <div class="view-animate">
                <!-- Header de la Consola Neuro Digital -->
                <div class="view-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 15px; margin-bottom: 25px;">
                    <div>
                        <div style="display: inline-flex; align-items: center; gap: 8px; color: var(--color-cyan); font-family: var(--font-tech); font-size: 11.5px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 6px;">
                            <i class="ph-bold ph-brain"></i> NEURO DIGITAL EXPERIENCE // MI PERFIL
                        </div>
                        <h1 class="view-title">Mi Desarrollo Profesional</h1>
                        <p class="view-subtitle">Consola de evolución pedagógica, conectoma cerebral 3D y telemetría de competencias docentes.</p>
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

                <!-- Grid Principal: Identidad & Cerebro 3D Interactivo -->
                <div class="profile-neuro-grid">
                    <!-- Tarjeta 1: Identidad del Educador & Rango Evolutivo -->
                    <div class="profile-id-card">
                        <div>
                            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 22px;">
                                <div style="width: 80px; height: 80px; border-radius: 50%; background: radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(37,99,235,0.2) 100%); border: 2px solid var(--color-cyan); padding: 3px; box-shadow: 0 0 25px rgba(34, 211, 238, 0.4); flex-shrink: 0; position: relative;">
                                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(gameState.userName || 'Estudiante')}" style="width: 100%; height: 100%; border-radius: 50%;">
                                    <span style="position: absolute; bottom: 0; right: 0; width: 14px; height: 14px; background: var(--success); border: 2px solid var(--bg-surface); border-radius: 50%; box-shadow: 0 0 10px var(--success);"></span>
                                </div>
                                <div style="flex: 1; min-width: 0;">
                                    <span style="font-size: 11px; font-weight: 800; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1.2px; font-family: var(--font-tech); display: block; margin-bottom: 4px;">Educador Registrado</span>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <input type="text" value="${gameState.userName}" onchange="app.updateName(this.value)" title="Haz clic para editar tu nombre" style="background: rgba(8, 13, 27, 0.6); border: 1px solid var(--border-subtle); color: #FFFFFF; padding: 8px 12px; border-radius: 10px; font-size: 17px; font-weight: 700; width: 100%; max-width: 220px; font-family: var(--font-tech);">
                                    </div>
                                </div>
                            </div>

                            <!-- Rango y Barra de Energía XP -->
                            <div style="background: rgba(8, 13, 27, 0.6); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 18px; margin-bottom: 20px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <span style="font-size: 11.5px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Nivel Evolutivo</span>
                                    <span style="color: var(--warning); font-family: var(--font-tech); font-weight: 800; font-size: 13px;"><i class="ph-fill ph-star"></i> ${currentLevelObj.name}</span>
                                </div>
                                <div style="font-size: 28px; font-weight: 800; color: var(--color-cyan); font-family: var(--font-tech); margin-bottom: 6px;">
                                    ${gameState.xp || 0} <small style="font-size: 13px; color: var(--text-secondary); font-weight: 600;">XP Acumulados</small>
                                </div>
                                
                                <div style="display: flex; justify-content: space-between; font-size: 11.5px; color: var(--text-muted); margin-bottom: 6px;">
                                    <span>Próximo Hito: <strong>${nextLevelObj.name}</strong></span>
                                    <span>${progressPct}%</span>
                                </div>
                                <div class="progress-bar-bg" style="height: 8px; background: rgba(255,255,255,0.06); border-radius: 6px;">
                                    <div class="progress-bar-fill" style="width: ${progressPct}%; background: linear-gradient(90deg, var(--primary), var(--color-cyan)); box-shadow: 0 0 10px var(--color-cyan);"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Selector de Objetivo en la Tarjeta de Identidad -->
                        <div>
                            <span style="font-size: 11.5px; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Meta Pedagógica Principal:</span>
                            <div style="display: flex; flex-direction: column; gap: 6px;">
                                ${objectivesList.slice(0, 3).map(obj => `
                                    <div class="objective-pill ${gameState.userObjective === obj ? 'active' : ''}" onclick="app.setUserObjective('${obj}')" style="padding: 9px 12px; font-size: 12.5px;">
                                        <i class="ph-bold ${gameState.userObjective === obj ? 'ph-check-circle' : 'ph-circle'}" style="color: ${gameState.userObjective === obj ? 'var(--color-cyan)' : 'var(--text-muted)'};"></i>
                                        <span>${obj}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Tarjeta 2: Consola Holográfica del Cerebro 3D Interactivo -->
                    <div class="profile-brain-card">
                        <div class="brain-console-header">
                            <div>
                                <span style="font-size: 10.5px; font-weight: 800; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1.5px; font-family: var(--font-tech); display: block;">
                                    <i class="ph-bold ph-cube"></i> MODELO BIOCONECTOMA 3D
                                </span>
                                <h3 style="font-size: 18px; color: #fff; font-family: var(--font-tech); margin-top: 2px;">
                                    Mapeo Neuronal de Competencias
                                </h3>
                            </div>
                            <div style="display: flex; gap: 8px;">
                                <button class="icon-btn" onclick="app.toggleBrainAutoRotate()" id="btn-brain-spin" title="Pausar / Reanudar Rotación Automática" style="color: var(--color-cyan); border-color: var(--color-cyan);">
                                    <i class="ph-bold ph-arrow-clockwise"></i>
                                </button>
                                <button class="icon-btn" onclick="app.resetBrainView()" title="Restablecer Vista Original">
                                    <i class="ph-bold ph-arrows-in-cardinal"></i>
                                </button>
                                <button class="icon-btn" onclick="app.triggerBrainPulse()" title="Disparar Pulso Sináptico">
                                    <i class="ph-bold ph-lightning"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Visor Interactivo 3D Canvas -->
                        <div class="brain-canvas-container" id="brain-canvas-wrapper" title="Haz clic y arrastra con el cursor para girar el cerebro en 3D">
                            <canvas id="brain-3d-canvas"></canvas>
                            <span class="brain-3d-hint"><i class="ph-bold ph-hand-pointing"></i> Arrastra para girar en 3D</span>
                        </div>

                        <!-- Selector de Lóbulos Cerebrales -->
                        <div class="brain-lobes-selector">
                            <button class="brain-lobe-btn active" data-lobe="all" onclick="app.focusBrainLobe('all')">
                                <i class="ph-bold ph-brain"></i> Todo el Conectoma
                            </button>
                            <button class="brain-lobe-btn" data-lobe="frontal" onclick="app.focusBrainLobe('frontal')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #22D3EE;"></span> Frontal (DUA)
                            </button>
                            <button class="brain-lobe-btn" data-lobe="parietal" onclick="app.focusBrainLobe('parietal')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #38BDF8;"></span> Parietal (Didáctica)
                            </button>
                            <button class="brain-lobe-btn" data-lobe="temporal" onclick="app.focusBrainLobe('temporal')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #C084FC;"></span> Temporal (Andragogía)
                            </button>
                            <button class="brain-lobe-btn" data-lobe="occipital" onclick="app.focusBrainLobe('occipital')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span> Occipital (Evaluación)
                            </button>
                            <button class="brain-lobe-btn" data-lobe="cerebelo" onclick="app.focusBrainLobe('cerebelo')">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #34D399;"></span> Cerebelo (Lúdica)
                            </button>
                        </div>

                        <!-- Panel de Telemetría Dinámica del Lóbulo Seleccionado -->
                        <div class="brain-telemetry-readout" id="brain-telemetry-panel">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <i class="ph-bold ph-brain" style="font-size: 22px; color: var(--color-cyan);"></i>
                                <div>
                                    <strong style="color: #fff; font-family: var(--font-tech); font-size: 13.5px;">Visión Global del Conectoma</strong>
                                    <div style="color: var(--text-secondary); font-size: 12px;">Integración Holística de Competencias Docentes</div>
                                </div>
                            </div>
                            <span class="telemetry-tag" style="color: var(--color-cyan); background: rgba(34,211,238,0.1); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(34,211,238,0.25);">
                                Conectividad Sináptica Óptima
                            </span>
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
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        if (brainAnimId) {
            cancelAnimationFrame(brainAnimId);
            brainAnimId = null;
        }

        // Configuración de resolución de alta densidad (Retina / High DPI)
        const setupCanvasSize = () => {
            const container = canvas.parentElement;
            if (!container) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const w = container.clientWidth || 600;
            const h = container.clientHeight || 380;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            return { w, h };
        };

        let { w, h } = setupCanvasSize() || { w: 600, h: 380 };

        // Metadatos de Lóbulos Anatómicos y Especialidades Pedagógicas
        const lobeMetadata = {
            all: { name: 'Conectoma Integral', dim: 'Evolución Holística Docente', color: '#22D3EE' },
            frontal: { name: 'Lóbulo Frontal', dim: 'Funciones Ejecutivas & DUA', color: '#22D3EE' },
            parietal: { name: 'Lóbulo Parietal', dim: 'Didáctica Activa & Métodos', color: '#38BDF8' },
            temporal: { name: 'Lóbulo Temporal', dim: 'Andragogía & Mediación', color: '#C084FC' },
            occipital: { name: 'Lóbulo Occipital', dim: 'Evaluación Formativa & Rúbricas', color: '#F59E0B' },
            cerebelo: { name: 'Cerebelo & Tronco', dim: 'Lúdica & Gamificación', color: '#34D399' }
        };

        // =========================================================================
        // MODELADO VOLUMÉTRICO 3D DEL CEREBRO (Dual Hemispheres, Gyri & Sulci)
        // =========================================================================
        const nodes = [];
        const ribbons = []; // Curvas de contorno cortical volumétrico (3D Gyri Traces)
        const hemGap = 3.2; // Cisura interhemisférica longitudinal

        // Función constructora de nodos anatómicos con vector normal para iluminación 3D
        const addNode = (x, y, z, lobe, side, baseRadius = 2.4) => {
            const centerX = side === 'left' ? -15 : (side === 'right' ? 15 : 0);
            const centerY = -4;
            const centerZ = 0;
            // Vector normal outward desde el centro de su hemisferio
            const nx = x - centerX;
            const ny = y - centerY;
            const nz = z - centerZ;
            const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;

            const nodeObj = {
                id: nodes.length,
                x, y, z,
                origX: x, origY: y, origZ: z,
                nx: nx / len, ny: ny / len, nz: nz / len,
                lobe,
                side,
                color: lobeMetadata[lobe].color,
                radius: baseRadius,
                pulsePhase: Math.random() * Math.PI * 2
            };
            nodes.push(nodeObj);
            return nodeObj;
        };

        // Generar ambos hemisferios cerebrales (Izquierdo: sideSign=-1, Derecho: sideSign=1)
        [-1, 1].forEach(sideSign => {
            const sideName = sideSign > 0 ? 'right' : 'left';
            const sX = sideSign;

            // 1. LÓBULO FRONTAL (Anterior y superior: corteza prefrontal, convexidad frontal)
            const frontalRibbonA = [];
            const frontalRibbonB = [];
            for (let i = 0; i < 28; i++) {
                const u = i / 27;
                const theta = u * Math.PI * 0.58; // De frontal a vertex
                const phi = (i * 1.618) % 1;
                // Ondulaciones orgánicas de surcos y circunvoluciones cerebrales (Gyri)
                const gyrusFold = Math.sin(u * 8) * 1.8 + Math.cos(phi * 6) * 1.2;
                const radX = (21 + gyrusFold) * Math.sin(theta);
                const radY = (28 + gyrusFold) * Math.cos(theta * 0.8) + (phi - 0.5) * 8;
                const radZ = 8 + (34 + gyrusFold) * Math.cos(theta);

                const px = sX * (hemGap + radX);
                const py = Math.max(-10, radY);
                const pz = radZ;

                const n = addNode(px, py, pz, 'frontal', sideName, 2.3 + Math.random() * 0.8);
                if (i % 2 === 0) frontalRibbonA.push(n);
                else frontalRibbonB.push(n);
            }
            if (frontalRibbonA.length > 3) ribbons.push({ nodes: frontalRibbonA, color: '#22D3EE', lobe: 'frontal' });
            if (frontalRibbonB.length > 3) ribbons.push({ nodes: frontalRibbonB, color: '#22D3EE', lobe: 'frontal' });

            // 2. LÓBULO PARIETAL (Superior y dorsal: corona cerebral, surco intraparietal)
            const parietalRibbon = [];
            for (let i = 0; i < 24; i++) {
                const u = i / 23;
                const theta = u * Math.PI * 0.65;
                const phi = (i * 1.414) % 1;
                const fold = Math.sin(u * 9) * 1.5;
                const px = sX * (hemGap + (24 + fold) * Math.cos(phi * 0.7));
                const py = 12 + (20 + fold) * Math.sin(theta) + (phi - 0.5) * 6;
                const pz = 6 - (28 + fold) * Math.cos(theta * 0.8);

                const n = addNode(px, py, pz, 'parietal', sideName, 2.2 + Math.random() * 0.8);
                if (i % 2 === 0) parietalRibbon.push(n);
            }
            if (parietalRibbon.length > 3) ribbons.push({ nodes: parietalRibbon, color: '#38BDF8', lobe: 'parietal' });

            // 3. LÓBULO TEMPORAL (Lateral e inferior: polo temporal, circunvolución temporal media)
            const temporalRibbon = [];
            for (let i = 0; i < 22; i++) {
                const u = i / 21;
                const theta = u * Math.PI * 0.85;
                const fold = Math.sin(u * 7) * 1.4;
                const px = sX * (hemGap + 16 + (14 + fold) * Math.sin(theta));
                const py = -14 + fold + Math.cos(theta * 2) * 5;
                const pz = -16 + (30 + fold) * u;

                const n = addNode(px, py, pz, 'temporal', sideName, 2.2 + Math.random() * 0.8);
                temporalRibbon.push(n);
            }
            if (temporalRibbon.length > 3) ribbons.push({ nodes: temporalRibbon, color: '#C084FC', lobe: 'temporal' });

            // 4. LÓBULO OCCIPITAL (Posterior: polo occipital, corteza visual primaria)
            const occipitalRibbon = [];
            for (let i = 0; i < 20; i++) {
                const u = i / 19;
                const theta = u * Math.PI * 0.7;
                const fold = Math.sin(u * 6) * 1.2;
                const px = sX * (hemGap + (16 + fold) * Math.sin(theta));
                const py = -6 + (16 + fold) * Math.cos(theta) * 0.8;
                const pz = -25 - (18 + fold) * Math.cos(theta * 0.5);

                const n = addNode(px, py, pz, 'occipital', sideName, 2.2 + Math.random() * 0.8);
                occipitalRibbon.push(n);
            }
            if (occipitalRibbon.length > 3) ribbons.push({ nodes: occipitalRibbon, color: '#F59E0B', lobe: 'occipital' });

            // 5. CEREBELO (Inferior posterior: hemisferio cerebeloso con folia transversal estriada)
            const cerebeloRibbonA = [];
            const cerebeloRibbonB = [];
            for (let i = 0; i < 20; i++) {
                const u = i / 19;
                const theta = u * Math.PI * 2;
                const folia = Math.sin(theta * 5) * 1.1; // Pliegues de folia cerebelosa
                const px = sX * (hemGap + 2 + (13 + folia) * Math.cos(theta) * 0.85);
                const py = -30 + Math.sin(theta) * 7;
                const pz = -14 - (1 - u) * 18 + folia;

                const n = addNode(px, py, pz, 'cerebelo', sideName, 2.0 + Math.random() * 0.6);
                if (i % 2 === 0) cerebeloRibbonA.push(n);
                else cerebeloRibbonB.push(n);
            }
            if (cerebeloRibbonA.length > 3) ribbons.push({ nodes: cerebeloRibbonA, color: '#34D399', lobe: 'cerebelo' });
            if (cerebeloRibbonB.length > 3) ribbons.push({ nodes: cerebeloRibbonB, color: '#34D399', lobe: 'cerebelo' });
        });

        // 6. TRONCO ENCEFÁLICO & CUERPO CALLOSO (Eje central vertical e interhemisférico)
        for (let i = 0; i < 12; i++) {
            const u = i / 11;
            // Tronco encefálico descendente
            addNode(
                (Math.sin(u * 5) * 1.5),
                -24 - u * 20,
                -6 + Math.cos(u * 4) * 2,
                'cerebelo',
                'center',
                2.5
            );
            // Fibras comisurales del Cuerpo Calloso (puente entre hemisferios)
            addNode(
                (u - 0.5) * 7.5,
                4 + Math.sin(u * Math.PI) * 7,
                -12 + u * 24,
                'frontal',
                'center',
                2.2
            );
        }

        // =========================================================================
        // RED DE FILAMENTOS SINÁPTICOS (Aristas volumétricas conectadas)
        // =========================================================================
        const edges = [];
        const maxDist = 18;
        const maxConns = 4;
        const nodeEdgeCounts = new Array(nodes.length).fill(0);

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                if (nodeEdgeCounts[i] >= maxConns || nodeEdgeCounts[j] >= maxConns) continue;
                const a = nodes[i];
                const b = nodes[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dz = a.z - b.z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                const canConnect = (a.side === b.side && dist < maxDist) || 
                                   (a.side !== b.side && Math.abs(a.x - b.x) < 10 && dist < 22);

                if (canConnect) {
                    edges.push({
                        from: i,
                        to: j,
                        dist,
                        color: a.lobe === b.lobe ? a.color : '#38BDF8',
                        lobe: a.lobe === b.lobe ? a.lobe : 'multi'
                    });
                    nodeEdgeCounts[i]++;
                    nodeEdgeCounts[j]++;
                }
            }
        }

        // Impulsos sinápticos activos (Action Potentials viajando en 3D)
        const pulses = [];
        const pulseCount = 22;
        for (let k = 0; k < pulseCount; k++) {
            if (edges.length > 0) {
                pulses.push({
                    edgeIdx: Math.floor(Math.random() * edges.length),
                    progress: Math.random(),
                    speed: 0.008 + Math.random() * 0.014,
                    dir: Math.random() > 0.5 ? 1 : -1,
                    size: 2.2 + Math.random() * 1.6
                });
            }
        }

        // Listeners interactivos del visor de rotación 3D
        let mouseX = -999;
        let mouseY = -999;

        const onPointerDown = (e) => {
            brainState.isDragging = true;
            brainState.lastX = e.clientX;
            brainState.lastY = e.clientY;
            canvas.style.cursor = 'grabbing';
        };

        const onPointerMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;

            if (!brainState.isDragging) return;
            const deltaX = e.clientX - brainState.lastX;
            const deltaY = e.clientY - brainState.lastY;
            brainState.lastX = e.clientX;
            brainState.lastY = e.clientY;

            brainState.targetRotY += deltaX * 0.008;
            brainState.targetRotX += deltaY * 0.008;
            brainState.targetRotX = Math.max(-1.15, Math.min(1.15, brainState.targetRotX));
        };

        const onPointerUp = () => {
            brainState.isDragging = false;
            canvas.style.cursor = 'grab';
        };

        canvas.onpointerdown = onPointerDown;
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);

        // Click en nodo interactivo para enfocar su lóbulo
        canvas.onclick = () => {
            if (brainState.hoveredNode) {
                try { playSound('click'); } catch(e) {}
                window.app.focusBrainLobe(brainState.hoveredNode.lobe);
            }
        };

        // =========================================================================
        // MOTOR DE RENDERIZADO 3D CON PERSPECTIVA & ILUMINACIÓN VOLUMÉTRICA
        // =========================================================================
        let time = 0;
        // Vector de luz direccional en el espacio 3D (desde arriba a la izquierda y frontal)
        const lightDir = { x: -0.38, y: 0.62, z: 0.68 };
        const lightLen = Math.sqrt(lightDir.x * lightDir.x + lightDir.y * lightDir.y + lightDir.z * lightDir.z);
        lightDir.x /= lightLen; lightDir.y /= lightLen; lightDir.z /= lightLen;

        const renderLoop = () => {
            const liveCanvas = document.getElementById('brain-3d-canvas');
            if (!liveCanvas) {
                window.removeEventListener('pointermove', onPointerMove);
                window.removeEventListener('pointerup', onPointerUp);
                return;
            }

            time += 0.025;

            // Auto-rotación holográfica suave
            if (brainState.autoRotate && !brainState.isDragging) {
                brainState.targetRotY += 0.004;
            }

            // Suavizado cinético (damping)
            brainState.rotX += (brainState.targetRotX - brainState.rotX) * 0.08;
            brainState.rotY += (brainState.targetRotY - brainState.rotY) * 0.08;

            const curW = canvas.clientWidth || w;
            const curH = canvas.clientHeight || h;
            const cx = curW / 2;
            const cy = curH / 2;

            // 1. FONDO NEGRO PURO Y SÓLIDO (Evita totalmente traslapes con el fondo de la página)
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, curW, curH);

            // Viñeta oscura radial sutil
            const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(curW, curH) * 0.65);
            bgGrad.addColorStop(0, '#050a18');
            bgGrad.addColorStop(0.55, '#01030a');
            bgGrad.addColorStop(1, '#000000');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, curW, curH);

            // Matrices de rotación
            const cosY = Math.cos(brainState.rotY);
            const sinY = Math.sin(brainState.rotY);
            const cosX = Math.cos(brainState.rotX);
            const sinX = Math.sin(brainState.rotX);

            const fov = 270;
            const depthOffset = 110;
            const modelScale = 2.45;

            // Función de proyección 3D
            const project3D = (px, py, pz) => {
                // Rotación en Y (Yaw)
                const x1 = px * cosY - pz * sinY;
                const z1 = px * sinY + pz * cosY;
                // Rotación en X (Pitch)
                const y2 = py * cosX - z1 * sinX;
                const z2 = py * sinX + z1 * cosX;

                const scale = fov / (fov + z2 + depthOffset);
                return {
                    x: cx + x1 * scale * modelScale,
                    y: cy - y2 * scale * modelScale,
                    scale,
                    depth: z2,
                    x1, y2, z2
                };
            };

            // 2. PEDESTAL HOLOGRÁFICO EN EL PISO 3D (Perspectiva a Y = -52)
            const groundY = -50;
            const groundRings = [28, 48, 68];
            ctx.save();
            groundRings.forEach((r, idx) => {
                ctx.beginPath();
                const steps = 36;
                for (let s = 0; s <= steps; s++) {
                    const ang = (s / steps) * Math.PI * 2;
                    const pt = project3D(Math.cos(ang) * r, groundY, Math.sin(ang) * r);
                    if (s === 0) ctx.moveTo(pt.x, pt.y);
                    else ctx.lineTo(pt.x, pt.y);
                }
                ctx.strokeStyle = `rgba(34, 211, 238, ${0.12 - idx * 0.03})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Ejes en cruz sobre el pedestal
            [-60, 60].forEach(coord => {
                const pX1 = project3D(-50, groundY, 0);
                const pX2 = project3D(50, groundY, 0);
                const pZ1 = project3D(0, groundY, -50);
                const pZ2 = project3D(0, groundY, 50);

                ctx.beginPath();
                ctx.moveTo(pX1.x, pX1.y); ctx.lineTo(pX2.x, pX2.y);
                ctx.moveTo(pZ1.x, pZ1.y); ctx.lineTo(pZ2.x, pZ2.y);
                ctx.strokeStyle = 'rgba(34, 211, 238, 0.08)';
                ctx.lineWidth = 0.8;
                ctx.stroke();
            });

            // Sombra difusa dinámica del cerebro sobre el pedestal
            const shadowCenter = project3D(0, groundY, 0);
            const shadowGrad = ctx.createRadialGradient(shadowCenter.x, shadowCenter.y, 4, shadowCenter.x, shadowCenter.y, 70 * shadowCenter.scale);
            shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
            shadowGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.45)');
            shadowGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = shadowGrad;
            ctx.beginPath();
            ctx.arc(shadowCenter.x, shadowCenter.y, 70 * shadowCenter.scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // 3. PROYECCIÓN DE TODOS LOS NODOS ANATÓMICOS CON CÁLCULO DE LUZ
            const projectedNodes = new Array(nodes.length);
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                const pt = project3D(n.x, n.y, n.z);

                // Rotar el vector normal outward a coordenadas de vista para iluminación
                const nx1 = n.nx * cosY - n.nz * sinY;
                const nz1 = n.nx * sinY + n.nz * cosY;
                const ny2 = n.ny * cosX - nz1 * sinX;
                const nz2 = n.ny * sinX + nz1 * cosX;

                // Producto punto para luz difusa
                const dotLight = nx1 * lightDir.x + ny2 * lightDir.y + nz2 * lightDir.z;
                const diffuse = Math.max(0.18, 0.25 + 0.75 * Math.max(0, dotLight));

                // Destello especular en dirección al espectador
                const specular = Math.pow(Math.max(0, nz2), 10) * 0.7;

                projectedNodes[i] = {
                    node: n,
                    projX: pt.x,
                    projY: pt.y,
                    scale: pt.scale,
                    depth: pt.depth,
                    diffuse,
                    specular,
                    nz2,
                    distFromCenter: Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z)
                };
            }

            // Manejo de onda concéntrica (Shockwave de triggerBrainPulse)
            if (brainState.pulseRadius >= 0) {
                brainState.pulseRadius += 2.2;
                if (brainState.pulseRadius > 85) brainState.pulseRadius = -1;
            }

            // Detección de nodo hover con cursor
            let closestNode = null;
            let closestDist = 14;
            for (let i = 0; i < projectedNodes.length; i++) {
                const pn = projectedNodes[i];
                const dx = pn.projX - mouseX;
                const dy = pn.projY - mouseY;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < closestDist) {
                    closestDist = d;
                    closestNode = pn.node;
                }
            }
            brainState.hoveredNode = closestNode;

            // 4. DIBUJAR CURVAS DE CONTORNO VOLUMÉTRICO (Gyri & Sulci Ribbons)
            ribbons.forEach(rib => {
                const isLobeActive = brainState.activeLobe === 'all' || rib.lobe === brainState.activeLobe;
                ctx.beginPath();
                let started = false;
                for (let k = 0; k < rib.nodes.length; k++) {
                    const pn = projectedNodes[rib.nodes[k].id];
                    if (!pn) continue;
                    if (!started) { ctx.moveTo(pn.projX, pn.projY); started = true; }
                    else ctx.lineTo(pn.projX, pn.projY);
                }
                ctx.strokeStyle = rib.color;
                ctx.globalAlpha = isLobeActive ? 0.35 : 0.08;
                ctx.lineWidth = isLobeActive ? 1.4 : 0.7;
                ctx.stroke();
            });

            // 5. DIBUJAR FILAMENTOS SINÁPTICOS CON PROFUNDIDAD
            for (let i = 0; i < edges.length; i++) {
                const edge = edges[i];
                const pA = projectedNodes[edge.from];
                const pB = projectedNodes[edge.to];
                if (!pA || !pB) continue;

                const isLobeActive = brainState.activeLobe === 'all' || 
                                    pA.node.lobe === brainState.activeLobe || 
                                    pB.node.lobe === brainState.activeLobe;

                // Atenuación de líneas en la parte posterior (Depth Fog)
                const avgDepth = (pA.depth + pB.depth) * 0.5;
                const depthFade = Math.max(0.12, Math.min(1.0, (avgDepth + 60) / 100));

                let alpha = (pA.scale + pB.scale) * 0.22 * depthFade;
                if (!isLobeActive) alpha *= 0.12;

                ctx.beginPath();
                ctx.moveTo(pA.projX, pA.projY);
                ctx.lineTo(pB.projX, pB.projY);
                ctx.strokeStyle = edge.color;
                ctx.globalAlpha = Math.max(0.04, Math.min(0.85, alpha));
                ctx.lineWidth = isLobeActive ? (1.0 + depthFade * 0.6) : 0.5;
                ctx.stroke();
            }

            // 6. IMPULSOS SINÁPTICOS (Action Potentials viajando por el espacio 3D)
            for (let k = 0; k < pulses.length; k++) {
                const pulse = pulses[k];
                pulse.progress += pulse.speed * pulse.dir;
                if (pulse.progress > 1) {
                    pulse.progress = 0;
                    pulse.edgeIdx = Math.floor(Math.random() * edges.length);
                } else if (pulse.progress < 0) {
                    pulse.progress = 1;
                    pulse.edgeIdx = Math.floor(Math.random() * edges.length);
                }

                const edge = edges[pulse.edgeIdx];
                if (!edge) continue;
                const pA = projectedNodes[edge.from];
                const pB = projectedNodes[edge.to];
                if (!pA || !pB) continue;

                const isLobeActive = brainState.activeLobe === 'all' || 
                                    pA.node.lobe === brainState.activeLobe || 
                                    pB.node.lobe === brainState.activeLobe;

                const px = pA.projX + (pB.projX - pA.projX) * pulse.progress;
                const py = pA.projY + (pB.projY - pA.projY) * pulse.progress;
                const pulseScale = (pA.scale + pB.scale) * 0.5;

                ctx.beginPath();
                ctx.arc(px, py, pulse.size * pulseScale, 0, Math.PI * 2);
                ctx.fillStyle = isLobeActive ? '#FFFFFF' : 'rgba(255,255,255,0.25)';
                ctx.globalAlpha = isLobeActive ? 0.95 : 0.2;
                ctx.shadowColor = '#22D3EE';
                ctx.shadowBlur = isLobeActive ? 14 : 2;
                ctx.fill();
            }

            // 7. DIBUJAR NODOS ORDENADOS POR PROFUNDIDAD (Painter's algorithm para verdadero 3D)
            const sortedNodes = [...projectedNodes].sort((a, b) => a.depth - b.depth);

            for (let i = 0; i < sortedNodes.length; i++) {
                const pn = sortedNodes[i];
                const n = pn.node;
                const isLobeActive = brainState.activeLobe === 'all' || n.lobe === brainState.activeLobe;
                const isHovered = brainState.hoveredNode && brainState.hoveredNode.id === n.id;

                // Efecto de pulso concéntrico
                let pulseEnergy = 0;
                if (brainState.pulseRadius >= 0) {
                    const diff = Math.abs(pn.distFromCenter - brainState.pulseRadius);
                    if (diff < 8) pulseEnergy = (1 - diff / 8) * 1.6;
                }

                // Tamaño con perspectiva real + energía de luz
                const nodeRadius = (n.radius + (isHovered ? 3.5 : 0) + pulseEnergy * 2) * pn.scale * 1.5;

                // Atenuación de opacidad según profundidad Z (Atmospheric depth)
                const depthAlpha = Math.max(0.18, Math.min(1.0, (pn.depth + 60) / 100));
                const finalAlpha = isLobeActive ? (depthAlpha * pn.diffuse + (isHovered ? 0.4 : 0)) : 0.12;

                ctx.beginPath();
                ctx.arc(pn.projX, pn.projY, Math.max(1, nodeRadius), 0, Math.PI * 2);
                ctx.fillStyle = isHovered ? '#FFFFFF' : n.color;
                ctx.globalAlpha = Math.min(1.0, finalAlpha);
                ctx.shadowColor = n.color;
                ctx.shadowBlur = isLobeActive ? (isHovered ? 18 : Math.floor(10 * pn.diffuse)) : 0;
                ctx.fill();

                // Destello especular en el centro (sensación de esfera volumétrica 3D)
                if (isLobeActive && (pn.nz2 > 0.1 || isHovered)) {
                    ctx.beginPath();
                    ctx.arc(pn.projX - nodeRadius * 0.25, pn.projY - nodeRadius * 0.25, Math.max(0.8, nodeRadius * 0.4), 0, Math.PI * 2);
                    ctx.fillStyle = '#FFFFFF';
                    ctx.globalAlpha = Math.min(1.0, 0.45 + pn.specular * 0.55);
                    ctx.shadowBlur = 0;
                    ctx.fill();
                }

                // Halo de energía en nodos activos o frontales
                if (isLobeActive && (isHovered || pn.scale > 0.88 || pulseEnergy > 0.3)) {
                    ctx.beginPath();
                    ctx.arc(pn.projX, pn.projY, nodeRadius * 1.7, 0, Math.PI * 2);
                    ctx.strokeStyle = n.color;
                    ctx.globalAlpha = (isHovered ? 0.85 : 0.25) * finalAlpha;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;

            // 8. BRÚJULA / GIMBAL DE ORIENTACIÓN 3D EN LA ESQUINA INFERIOR IZQUIERDA
            const gX = 40;
            const gY = curH - 42;
            const gLen = 22;
            const axes = [
                { x: 1, y: 0, z: 0, color: '#EF4444', label: 'X' }, // Eje X (Rojo)
                { x: 0, y: 1, z: 0, color: '#10B981', label: 'Y' }, // Eje Y (Verde)
                { x: 0, y: 0, z: 1, color: '#22D3EE', label: 'Z' }  // Eje Z (Cyan)
            ];
            ctx.save();
            ctx.font = '700 9px "Space Grotesk", monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            axes.forEach(axis => {
                // Rotar cada vector unitario
                const x1 = axis.x * cosY - axis.z * sinY;
                const z1 = axis.x * sinY + axis.z * cosY;
                const y2 = axis.y * cosX - z1 * sinX;

                const endX = gX + x1 * gLen;
                const endY = gY - y2 * gLen;

                ctx.beginPath();
                ctx.moveTo(gX, gY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = axis.color;
                ctx.lineWidth = 1.8;
                ctx.stroke();

                ctx.fillStyle = axis.color;
                ctx.fillText(axis.label, endX + x1 * 7, endY - y2 * 7);
            });
            ctx.fillStyle = '#64748B';
            ctx.fillText('3D GIMBAL', gX + 16, gY + 18);
            ctx.restore();

            // 9. TELEMETRÍA HOLOGRÁFICA EN LA ESQUINA SUPERIOR IZQUIERDA
            ctx.save();
            ctx.font = '700 10px "Space Grotesk", monospace';
            ctx.fillStyle = 'rgba(34, 211, 238, 0.75)';
            ctx.fillText(`CONECTOMA 3D // VISTA ${brainState.activeLobe.toUpperCase()}`, 16, 22);
            ctx.font = '500 9.5px "Space Grotesk", monospace';
            ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
            const degY = Math.round((((brainState.rotY % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) * (180 / Math.PI));
            const degX = Math.round(brainState.rotX * (180 / Math.PI));
            ctx.fillText(`YAW: ${degY}° • PITCH: ${degX}° • PROFUNDIDAD: ACTIVA`, 16, 36);
            ctx.restore();

            // 10. TOOLTIP HOLOGRÁFICO AL HACER HOVER EN UN NODO
            if (brainState.hoveredNode) {
                const hNode = brainState.hoveredNode;
                const pn = projectedNodes[hNode.id];
                if (pn) {
                    const meta = lobeMetadata[hNode.lobe];
                    const tooltipText = `${meta.name}: ${meta.dim}`;
                    ctx.font = '600 11px "Space Grotesk", sans-serif';
                    const textWidth = ctx.measureText(tooltipText).width;
                    const boxW = textWidth + 24;
                    const boxH = 28;
                    const boxX = Math.min(curW - boxW - 10, Math.max(10, pn.projX - boxW / 2));
                    const boxY = Math.max(10, pn.projY - boxH - 12);

                    ctx.fillStyle = 'rgba(3, 7, 18, 0.95)';
                    ctx.strokeStyle = meta.color;
                    ctx.lineWidth = 1.3;
                    ctx.shadowColor = meta.color;
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    if (ctx.roundRect) ctx.roundRect(boxX, boxY, boxW, boxH, 8);
                    else ctx.rect(boxX, boxY, boxW, boxH);
                    ctx.fill();
                    ctx.stroke();

                    ctx.shadowBlur = 0;
                    ctx.fillStyle = '#FFFFFF';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(tooltipText, boxX + boxW / 2, boxY + boxH / 2);
                }
            }

            brainAnimId = requestAnimationFrame(renderLoop);
        };

        renderLoop();
    };

    // Alternar auto-rotación del cerebro 3D
    window.app.toggleBrainAutoRotate = () => {
        try { playSound('click'); } catch(e) {}
        brainState.autoRotate = !brainState.autoRotate;
        const btn = document.getElementById('btn-brain-spin');
        if (btn) {
            if (brainState.autoRotate) {
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
        brainState.targetRotX = 0.2;
        brainState.targetRotY = -0.4;
        window.app.focusBrainLobe('all');
    };

    // Disparar pulso sináptico concéntrico
    window.app.triggerBrainPulse = () => {
        try { playSound('streak'); } catch(e) {}
        brainState.pulseRadius = 0;
        const panel = document.getElementById('brain-telemetry-panel');
        if (panel) {
            panel.style.boxShadow = '0 0 25px rgba(34, 211, 238, 0.6)';
            setTimeout(() => { panel.style.boxShadow = 'none'; }, 600);
        }
    };

    // Enfocar lóbulo cerebral específico e iluminar sus conexiones
    window.app.focusBrainLobe = (lobeKey) => {
        try { playSound('click'); } catch(e) {}
        brainState.activeLobe = lobeKey;

        // Actualizar estado activo en botones
        const buttons = document.querySelectorAll('.brain-lobe-btn');
        buttons.forEach(btn => {
            if (btn.getAttribute('data-lobe') === lobeKey) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        // Orientar el cerebro 3D hacia el ángulo óptimo para observar el lóbulo
        if (lobeKey === 'all') {
            brainState.targetRotX = 0.2;
            brainState.targetRotY = -0.4;
        } else if (lobeKey === 'frontal') {
            brainState.targetRotX = 0.05;
            brainState.targetRotY = 0.0; // Vista frontal
        } else if (lobeKey === 'parietal') {
            brainState.targetRotX = 0.72; // Vista superior
            brainState.targetRotY = -0.2;
        } else if (lobeKey === 'temporal') {
            brainState.targetRotX = 0.1;
            brainState.targetRotY = 1.5; // Vista lateral
        } else if (lobeKey === 'occipital') {
            brainState.targetRotX = 0.2;
            brainState.targetRotY = Math.PI; // Vista posterior
        } else if (lobeKey === 'cerebelo') {
            brainState.targetRotX = -0.45; // Vista inferior posterior
            brainState.targetRotY = 2.8;
        }

        // Consultar progreso real del usuario para la telemetría dinámica
        const bestFormativa = window.EvaluationStorageService ? EvaluationStorageService.getBestAttempt('formativa') : null;
        const bestDidactica = window.EvaluationStorageService ? EvaluationStorageService.getBestAttempt('didactica') : null;
        const bestAndragogia = window.EvaluationStorageService ? EvaluationStorageService.getBestAttempt('andragogia') : null;
        const bestPedagogia = window.EvaluationStorageService ? EvaluationStorageService.getBestAttempt('pedagogia') : null;
        const unlockedBadges = gameState.unlockedBadges || [];

        const telemetryData = {
            all: {
                icon: 'ph-brain',
                color: '#22D3EE',
                title: 'Visión Global del Conectoma',
                subtitle: 'Integración Holística de Competencias Docentes (4 Verticales)',
                tag: 'Conectividad Sináptica Óptima',
                status: `${gameState.xp || 0} XP • Nivel ${gameState.level || 'Explorador'}`
            },
            frontal: {
                icon: 'ph-cpu',
                color: '#22D3EE',
                title: 'Lóbulo Frontal // Funciones Ejecutivas & DUA',
                subtitle: 'Planificación curricular, autorregulación y accesibilidad universal.',
                tag: (unlockedBadges.includes('neuroeducador') || unlockedBadges.includes('diseno_instruccional'))
                    ? 'Maestría DUA Verificada' 
                    : 'En Desarrollo • ' + (gameState.xp || 0) + ' XP',
                status: 'Neuroeducación y Diseño Instruccional'
            },
            parietal: {
                icon: 'ph-presentation-chart',
                color: '#38BDF8',
                title: 'Lóbulo Parietal // Didáctica Activa & Métodos',
                subtitle: 'Estructuración de secuencias didácticas y metodologías activas.',
                tag: bestDidactica && bestDidactica.passed 
                    ? `Estratega Aprobado (${bestDidactica.score}/100)` 
                    : (bestDidactica ? `Puntaje: ${bestDidactica.score}/100 • Requiere Práctica` : 'Evaluación de Didáctica Disponible'),
                status: bestDidactica && bestDidactica.passed ? 'Competencia Demostrada' : 'Recomendado: 40 Preguntas de Didáctica'
            },
            temporal: {
                icon: 'ph-users-four',
                color: '#C084FC',
                title: 'Lóbulo Temporal // Andragogía & Aprendizaje Adulto',
                subtitle: 'Facilitación experiencial, comunicación asertiva y mediación pedagógica.',
                tag: bestAndragogia && bestAndragogia.passed 
                    ? `Mentor Certificado (${bestAndragogia.score}/100)` 
                    : (bestAndragogia ? `Puntaje: ${bestAndragogia.score}/100` : 'Ruta Train the Trainer'),
                status: unlockedBadges.includes('comunicacion') ? 'Comunicación Asertiva Desbloqueada' : 'En Consolidación'
            },
            occipital: {
                icon: 'ph-pencil-line',
                color: '#F59E0B',
                title: 'Lóbulo Occipital // Evaluación Formativa & Rúbricas',
                subtitle: 'Retroalimentación continua, diseño de rúbricas y analítica del aprendizaje.',
                tag: bestFormativa && bestFormativa.passed 
                    ? `Maestro de Evaluación (${bestFormativa.score}/100)` 
                    : (bestFormativa ? `Puntaje: ${bestFormativa.score}/100` : 'Instrumento Diagnóstico Listo'),
                status: bestFormativa && bestFormativa.passed ? 'Aprobado con 80+' : 'Pendiente de Validación'
            },
            cerebelo: {
                icon: 'ph-game-controller',
                color: '#34D399',
                title: 'Cerebelo & Tronco // Lúdica, Gamificación & Dinamismo',
                subtitle: 'Coordinación metodológica, aprendizaje basado en juegos y simulación.',
                tag: `${(gameState.diagnosticResults || []).length} Diagnósticos Situacionales Completados`,
                status: `${gameState.testsCompleted || 0} Evaluaciones Realizadas • Dinamismo Alto`
            }
        };

        const tInfo = telemetryData[lobeKey] || telemetryData.all;
        const panel = document.getElementById('brain-telemetry-panel');
        if (panel) {
            panel.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 20px; color: ${tInfo.color}; border: 1px solid ${tInfo.color}40;">
                        <i class="ph-bold ${tInfo.icon}"></i>
                    </div>
                    <div>
                        <strong style="color: #fff; font-family: var(--font-tech); font-size: 14px;">${tInfo.title}</strong>
                        <div style="color: var(--text-secondary); font-size: 12px; margin-top: 2px;">${tInfo.subtitle}</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <small style="color: var(--text-muted); font-size: 11px;">${tInfo.status}</small>
                    <span class="telemetry-tag" style="color: ${tInfo.color}; background: ${tInfo.color}15; padding: 4px 10px; border-radius: 8px; border: 1px solid ${tInfo.color}40;">
                        ${tInfo.tag}
                    </span>
                </div>
            `;
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
        filterBadges: window.app.filterBadges
    });
});

