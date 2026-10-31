// Validación de banco de preguntas mediante JScript de Windows
var fso = new ActiveXObject("Scripting.FileSystemObject");

var window = {};

function loadScript(filePath) {
    var file = fso.OpenTextFile(filePath, 1, false, -1); // -1 = Unicode / UTF-16, 0 = ASCII
    // Si es UTF-8, use ADODB.Stream
    var stream = new ActiveXObject("ADODB.Stream");
    stream.Type = 2; // adTypeText
    stream.Charset = "utf-8";
    stream.Open();
    stream.LoadFromFile(filePath);
    var content = stream.ReadText(-1);
    stream.Close();
    eval(content);
}

WScript.Echo("Cargando y validando bancos de preguntas en JavaScript nativo...");

loadScript("js/questions_formativa.js");
loadScript("js/questions_pedagogia.js");
loadScript("js/questions_andragogia.js");
loadScript("js/questions_didactica.js");

var tests = [
    { name: "formativa", data: window.QUESTIONS_FORMATIVA },
    { name: "pedagogia", data: window.QUESTIONS_PEDAGOGIA },
    { name: "andragogia", data: window.QUESTIONS_ANDRAGOGIA },
    { name: "didactica", data: window.QUESTIONS_DIDACTICA }
];

var totalQuestions = 0;
var errors = [];
var allIds = {};

for (var t = 0; t < tests.length; t++) {
    var test = tests[t];
    var list = test.data;
    if (!list) {
        errors.push("No se cargaron preguntas para " + test.name);
        continue;
    }
    WScript.Echo("-> " + test.name + ": " + list.length + " preguntas encontradas.");
    totalQuestions += list.length;

    if (list.length !== 40) {
        errors.push(test.name + " no tiene 40 preguntas (tiene " + list.length + ")");
    }

    var diffCounts = { basica: 0, intermedia: 0, avanzada: 0 };
    var cogCounts = { conceptual: 0, analisis: 0, aplicacion: 0, problema: 0 };
    var dimCounts = {};

    for (var i = 0; i < list.length; i++) {
        var q = list[i];
        if (!q.id) errors.push("Pregunta sin ID en " + test.name);
        if (allIds[q.id]) errors.push("ID duplicado: " + q.id);
        allIds[q.id] = true;

        if (q.testId !== test.name) errors.push(q.id + " testId incorrecto: " + q.testId);
        if (!q.dimensionId) errors.push(q.id + " sin dimensionId");
        if (!q.competency) errors.push(q.id + " sin competency");
        if (!q.themeCategory) errors.push(q.id + " sin themeCategory");
        if (!q.question) errors.push(q.id + " sin question");
        if (!q.options || q.options.length !== 4) errors.push(q.id + " no tiene exactamente 4 opciones");
        if (q.correctAnswer < 0 || q.correctAnswer > 3) errors.push(q.id + " correctAnswer fuera de rango: " + q.correctAnswer);
        if (!q.explanationCorrect) errors.push(q.id + " sin explanationCorrect");
        if (!q.explanationIncorrect) errors.push(q.id + " sin explanationIncorrect");
        if (!q.recommendation) errors.push(q.id + " sin recommendation");

        if (diffCounts[q.difficulty] !== undefined) diffCounts[q.difficulty]++;
        else errors.push(q.id + " dificultad inválida: " + q.difficulty);

        if (cogCounts[q.cognitiveType] !== undefined) cogCounts[q.cognitiveType]++;
        else errors.push(q.id + " tipo cognitivo inválido: " + q.cognitiveType);

        if (!dimCounts[q.dimensionId]) dimCounts[q.dimensionId] = 0;
        dimCounts[q.dimensionId]++;
    }

    // Verificar distribución de dificultad: 12 básicas, 18 intermedias, 10 avanzadas
    if (diffCounts.basica !== 12 || diffCounts.intermedia !== 18 || diffCounts.avanzada !== 10) {
        errors.push(test.name + " dificultad incorrecta: basica=" + diffCounts.basica + "/12, intermedia=" + diffCounts.intermedia + "/18, avanzada=" + diffCounts.avanzada + "/10");
    } else {
        WScript.Echo("   [OK] Dificultad: 12 Basicas, 18 Intermedias, 10 Avanzadas.");
    }

    // Verificar distribución cognitiva: 10 conceptual, 10 análisis, 10 aplicación, 10 problema
    if (cogCounts.conceptual !== 10 || cogCounts.analisis !== 10 || cogCounts.aplicacion !== 10 || cogCounts.problema !== 10) {
        errors.push(test.name + " tipos cognitivos incorrectos: conceptual=" + cogCounts.conceptual + "/10, analisis=" + cogCounts.analisis + "/10, aplicacion=" + cogCounts.aplicacion + "/10, problema=" + cogCounts.problema + "/10");
    } else {
        WScript.Echo("   [OK] Cognitivo: 10 Conceptual, 10 Análisis, 10 Aplicación, 10 Problema.");
    }

    // Verificar dimensiones (4 dimensiones con 10 preguntas cada una)
    var dimKeys = [];
    for (var dk in dimCounts) dimKeys.push(dk);
    if (dimKeys.length !== 4) {
        errors.push(test.name + " debe tener 4 dimensiones; tiene " + dimKeys.length);
    }
    for (var dk in dimCounts) {
        if (dimCounts[dk] !== 10) {
            errors.push(test.name + " dimensión " + dk + " tiene " + dimCounts[dk] + " preguntas; debe tener 10");
        }
    }
    WScript.Echo("   [OK] Dimensiones: 4 dimensiones con exactamente 10 preguntas cada una.");
}

WScript.Echo("=================================================");
WScript.Echo("Total de preguntas validadas: " + totalQuestions + " / 160 esperadas.");

if (errors.length === 0) {
    WScript.Echo("RESULTADO: 100% DE PRUEBAS SUPERADAS SIN ERRORES (0 fallas).");
} else {
    WScript.Echo("RESULTADO: SE ENCONTRARON " + errors.length + " ERRORES:");
    for (var e = 0; e < errors.length; e++) {
        WScript.Echo(" - " + errors[e]);
    }
}
WScript.Echo("=================================================");
