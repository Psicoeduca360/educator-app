/**
 * PSICOEDUCA ACADEMY - Banco Central de Preguntas de Evaluación
 * Archivo: js/questions_bank.js
 * Consolida los 4 bancos de preguntas de evaluación (160 preguntas completas).
 */

window.EVAL_QUESTIONS_BANK = {
    formativa: window.QUESTIONS_FORMATIVA || [],
    pedagogia: window.QUESTIONS_PEDAGOGIA || [],
    andragogia: window.QUESTIONS_ANDRAGOGIA || [],
    didactica: window.QUESTIONS_DIDACTICA || []
};

// Verificación y registro de integridad en consola
if (window.EVAL_QUESTIONS_BANK) {
    const counts = {
        formativa: window.EVAL_QUESTIONS_BANK.formativa.length,
        pedagogia: window.EVAL_QUESTIONS_BANK.pedagogia.length,
        andragogia: window.EVAL_QUESTIONS_BANK.andragogia.length,
        didactica: window.EVAL_QUESTIONS_BANK.didactica.length
    };
    const total = counts.formativa + counts.pedagogia + counts.andragogia + counts.didactica;
    console.log(`[PsicoEduca] Banco de preguntas cargado con éxito: ${total} preguntas totales.`, counts);
}
