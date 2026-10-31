/**
 * PSICOEDUCA ACADEMY - Motor de Evaluaciones Interactivas
 * Archivo: js/evaluation_engine.js
 * Capa de Persistencia, Motor de Gamificación, Runner Interactivo,
 * Informe Diagnóstico, Retroalimentación Pedagógica e Historial de Evolución.
 */

// =============================================================================
// 1. CAPA DE SERVICIO DE PERSISTENCIA (LOCALSTORAGE)
// =============================================================================
const EvaluationStorageService = {
    KEYS: {
        ATTEMPTS: 'psicoeduca_eval_attempts',
        ACTIVE: 'psicoeduca_eval_active',
        REWARDS: 'psicoeduca_eval_rewards'
    },

    getCurrentUserKey() {
        return localStorage.getItem('psicoeduca_active_user') || 'estudiante';
    },

    getAllAttempts() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.ATTEMPTS)) || [];
        } catch (e) {
            console.error('[EvaluationStorageService] Error al leer intentos:', e);
            return [];
        }
    },

    getUserAttempts(testId = null) {
        const userKey = this.getCurrentUserKey();
        const attempts = this.getAllAttempts().filter(a => a.userKey === userKey);
        if (testId) {
            return attempts.filter(a => a.testId === testId);
        }
        return attempts;
    },

    saveAttempt(attemptData) {
        try {
            const all = this.getAllAttempts();
            all.unshift(attemptData);
            localStorage.setItem(this.KEYS.ATTEMPTS, JSON.stringify(all));
            return true;
        } catch (e) {
            console.error('[EvaluationStorageService] Error al guardar intento:', e);
            return false;
        }
    },

    getActiveAttempt(testId = null) {
        try {
            const activeMap = JSON.parse(localStorage.getItem(this.KEYS.ACTIVE)) || {};
            const userKey = this.getCurrentUserKey();
            const userActive = activeMap[userKey];
            if (!userActive) return null;
            if (testId && userActive.testId !== testId) return null;
            return userActive;
        } catch (e) {
            console.error('[EvaluationStorageService] Error al leer intento activo:', e);
            return null;
        }
    },

    saveActiveAttempt(attemptData) {
        try {
            const activeMap = JSON.parse(localStorage.getItem(this.KEYS.ACTIVE)) || {};
            const userKey = this.getCurrentUserKey();
            activeMap[userKey] = {
                ...attemptData,
                userKey: userKey,
                lastSavedAt: Date.now()
            };
            localStorage.setItem(this.KEYS.ACTIVE, JSON.stringify(activeMap));
        } catch (e) {
            console.error('[EvaluationStorageService] Error al guardar intento activo:', e);
        }
    },

    clearActiveAttempt(testId = null) {
        try {
            const activeMap = JSON.parse(localStorage.getItem(this.KEYS.ACTIVE)) || {};
            const userKey = this.getCurrentUserKey();
            if (activeMap[userKey]) {
                if (!testId || activeMap[userKey].testId === testId) {
                    delete activeMap[userKey];
                    localStorage.setItem(this.KEYS.ACTIVE, JSON.stringify(activeMap));
                }
            }
        } catch (e) {
            console.error('[EvaluationStorageService] Error al limpiar intento activo:', e);
        }
    },

    getUserRewards() {
        try {
            const all = JSON.parse(localStorage.getItem(this.KEYS.REWARDS)) || {};
            const userKey = this.getCurrentUserKey();
            return all[userKey] || {};
        } catch (e) {
            return {};
        }
    },

    saveUserRewards(rewards) {
        try {
            const all = JSON.parse(localStorage.getItem(this.KEYS.REWARDS)) || {};
            const userKey = this.getCurrentUserKey();
            all[userKey] = rewards;
            localStorage.setItem(this.KEYS.REWARDS, JSON.stringify(all));
        } catch (e) {
            console.error('[EvaluationStorageService] Error al guardar recompensas:', e);
        }
    },

    getBestAttempt(testId) {
        const attempts = this.getUserAttempts(testId);
        if (!attempts.length) return null;
        return attempts.reduce((best, curr) => (curr.score > best.score ? curr : best), attempts[0]);
    },

    getLatestAttempt(testId) {
        const attempts = this.getUserAttempts(testId);
        return attempts.length ? attempts[0] : null;
    }
};

// =============================================================================
// 2. MOTOR DE GAMIFICACIÓN INTEGRADO (PUNTOS XP, MEDALLAS Y LOGROS)
// =============================================================================
const EvaluationGamification = {
    processRewards(testId, score) {
        const rewards = EvaluationStorageService.getUserRewards();
        const testRewards = rewards[testId] || {
            completedAwarded: false,
            bestTierAwarded: 0,
            bestScore: 0,
            totalBonusXPAwarded: 0
        };

        let newXP = 0;
        let baseXP = 0;
        let tierXP = 0;
        const unlockedMedals = [];

        // 1. Recompensa por completar el test (20 XP, una sola vez por instrumento)
        if (!testRewards.completedAwarded) {
            baseXP = EVALUATIONS_DATA.rewardsConfig.completionXP;
            newXP += baseXP;
            testRewards.completedAwarded = true;
        }

        // 2. Bonificación por desempeño con cálculo delta contra duplicados
        // Tiers: 80-89 -> 30 XP | 90-99 -> 50 XP | 100 -> 75 XP
        let currentTier = 0;
        let currentTierTargetXP = 0;

        if (score === 100) {
            currentTier = 100;
            currentTierTargetXP = 75;
        } else if (score >= 90) {
            currentTier = 90;
            currentTierTargetXP = 50;
        } else if (score >= 80) {
            currentTier = 80;
            currentTierTargetXP = 30;
        }

        if (currentTierTargetXP > testRewards.totalBonusXPAwarded) {
            tierXP = currentTierTargetXP - testRewards.totalBonusXPAwarded;
            newXP += tierXP;
            testRewards.totalBonusXPAwarded = currentTierTargetXP;
            testRewards.bestTierAwarded = currentTier;
        }

        if (score > (testRewards.bestScore || 0)) {
            testRewards.bestScore = score;
        }

        rewards[testId] = testRewards;
        EvaluationStorageService.saveUserRewards(rewards);

        // 3. Desbloqueo de Medalla del Instrumento (score >= 80)
        const instrument = EVALUATIONS_DATA.instruments[testId];
        if (score >= EVALUATIONS_DATA.settings.passingScore && instrument && instrument.badgeId) {
            if (!gameState.unlockedBadges.includes(instrument.badgeId)) {
                gameState.unlockedBadges.push(instrument.badgeId);
                unlockedMedals.push({
                    id: instrument.badgeId,
                    name: instrument.badgeName,
                    desc: `Aprobaste ${instrument.title} con ${score} puntos.`
                });
            }
        }

        // 4. Verificación de Logros Especiales
        const userAttempts = EvaluationStorageService.getUserAttempts();

        // Logro 1: Primer Paso Pedagógico (Completar primer test)
        if (userAttempts.length >= 1 && !gameState.unlockedBadges.includes('primer_paso_pedagogico')) {
            gameState.unlockedBadges.push('primer_paso_pedagogico');
            unlockedMedals.push({
                id: 'primer_paso_pedagogico',
                name: 'PRIMER PASO PEDAGÓGICO',
                desc: 'Completaste tu primera evaluación interactiva.'
            });
        }

        // Logro 2: Dominio Pedagógico Integral (Aprobar los 4 instrumentos >= 80)
        const testKeys = ['formativa', 'pedagogia', 'andragogia', 'didactica'];
        const allPassed80 = testKeys.every(k => {
            const best = EvaluationStorageService.getBestAttempt(k);
            return best && best.score >= 80;
        });

        if (allPassed80 && !gameState.unlockedBadges.includes('dominio_integral')) {
            gameState.unlockedBadges.push('dominio_integral');
            unlockedMedals.push({
                id: 'dominio_integral',
                name: 'DOMINIO PEDAGÓGICO INTEGRAL',
                desc: 'Aprobaste los 4 instrumentos de evaluación docente con 80+ puntos.'
            });
        }

        // Logro 3: Excelencia Pedagógica (Obtener 90+ puntos en los 4 instrumentos)
        const allPassed90 = testKeys.every(k => {
            const best = EvaluationStorageService.getBestAttempt(k);
            return best && best.score >= 90;
        });

        if (allPassed90 && !gameState.unlockedBadges.includes('excelencia_pedagogica')) {
            gameState.unlockedBadges.push('excelencia_pedagogica');
            unlockedMedals.push({
                id: 'excelencia_pedagogica',
                name: 'EXCELENCIA PEDAGÓGICA',
                desc: 'Alcanzaste nivel Avanzado (90+ puntos) en todos los instrumentos.'
            });
        }

        // 5. Aplicar XP al gameState de PsicoEduca
        if (newXP > 0) {
            gameState.xp += newXP;
        }

        gameState.testsCompleted = EvaluationStorageService.getUserAttempts().length;

        // Persistir en gameState
        if (typeof saveGameState === 'function') {
            saveGameState();
        }
        if (typeof updateUI === 'function') {
            updateUI();
        }

        return {
            baseXP: baseXP,
            tierXP: tierXP,
            totalNewXP: newXP,
            unlockedMedals: unlockedMedals
        };
    }
};

// =============================================================================
// 3. MOTOR PRINCIPAL DE EJECUCIÓN (EVALUATION ENGINE)
// =============================================================================
window.EvaluationEngine = {
    activeState: null,
    timerInterval: null,

    // Algoritmo de barajado Fisher-Yates
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    // Iniciar o reanudar test
    startTest(testId) {
        if (typeof playSound === 'function') playSound('click');

        const activeAttempt = EvaluationStorageService.getActiveAttempt(testId);
        if (activeAttempt) {
            this.showResumeModal(activeAttempt);
        } else {
            this.showIntroModal(testId);
        }
    },

    // Modal de Introducción
    showIntroModal(testId) {
        const instrument = EVALUATIONS_DATA.instruments[testId];
        if (!instrument) return;

        const best = EvaluationStorageService.getBestAttempt(testId);

        const modalHtml = `
            <div id="eval-intro-modal" class="eval-modal-backdrop">
                <div class="eval-confirm-dialog" style="max-width: 580px; text-align: left;">
                    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 8px;">
                        <div class="eval-icon-badge" style="width: 52px; height: 52px; font-size: 26px;">
                            <i class="ph ${instrument.icon}"></i>
                        </div>
                        <div>
                            <span class="eval-tag eval-tag-dim">${instrument.category}</span>
                            <h2 style="font-size: 22px; color: #fff; margin-top: 4px;">${instrument.title}</h2>
                        </div>
                    </div>

                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; margin: 0;">
                        ${instrument.generalObjective}
                    </p>

                    <div style="background: rgba(0,0,0,0.3); border-radius: 14px; padding: 16px; border: 1px solid rgba(255,255,255,0.08); display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 13px;">
                        <div><strong style="color: #fff;"><i class="ph-bold ph-list-numbers" style="color: var(--primary);"></i> Preguntas:</strong> 40 preguntas</div>
                        <div><strong style="color: #fff;"><i class="ph-bold ph-clock" style="color: var(--warning);"></i> Tiempo límite:</strong> 35 minutos</div>
                        <div><strong style="color: #fff;"><i class="ph-bold ph-seal-check" style="color: var(--success);"></i> Aprobación:</strong> 80 / 100 puntos</div>
                        <div><strong style="color: #fff;"><i class="ph-bold ph-medal" style="color: var(--accent);"></i> Medalla:</strong> ${instrument.badgeName}</div>
                    </div>

                    ${best ? `
                        <div style="background: rgba(14,165,233,0.1); border: 1px solid rgba(14,165,233,0.3); border-radius: 12px; padding: 10px 14px; font-size: 12.5px; display: flex; justify-content: space-between; align-items: center;">
                            <span>Mejor resultado previo: <strong style="color:#fff;">${best.score} pts</strong> (${best.masteryLevel})</span>
                            <button onclick="EvaluationEngine.viewPastAttempt('${best.id}')" style="background:none; border:none; color:var(--primary); text-decoration:underline; cursor:pointer; font-size:12px;">Ver último informe</button>
                        </div>
                    ` : ''}

                    <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.4;">
                        <strong>Instrucciones:</strong> Una sola opción correcta por pregunta (2,5 pts c/u). Puedes retroceder y modificar respuestas en cualquier momento. Si recargas la página, tu progreso se restaurará automáticamente.
                    </div>

                    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
                        <button class="eval-btn-secondary" onclick="document.getElementById('eval-intro-modal').remove()">Cancelar</button>
                        <button class="eval-btn-finish" style="padding: 12px 24px; font-size: 14px;" onclick="document.getElementById('eval-intro-modal').remove(); EvaluationEngine.initNewAttempt('${testId}')">
                            <i class="ph-bold ph-play"></i> Comenzar Evaluación
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
    },

    // Modal de Reanudación de intento pendiente
    showResumeModal(activeAttempt) {
        const instrument = EVALUATIONS_DATA.instruments[activeAttempt.testId];
        const answeredCount = Object.keys(activeAttempt.answers || {}).length;
        const minutes = Math.floor(activeAttempt.timeRemaining / 60);

        const modalHtml = `
            <div id="eval-resume-modal" class="eval-modal-backdrop">
                <div class="eval-confirm-dialog" style="max-width: 480px;">
                    <div class="eval-confirm-icon warning">
                        <i class="ph-bold ph-arrow-counter-clockwise"></i>
                    </div>
                    <h2 style="font-size: 20px; color: #fff;">Intento en Curso Encontrado</h2>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
                        Tienes una evaluación activa de <strong>${instrument ? instrument.title : 'Evaluación'}</strong> con <strong>${answeredCount} de 40</strong> preguntas respondidas y <strong>${minutes} minutos</strong> restantes.
                    </p>
                    <div style="display: flex; gap: 12px; justify-content: center; margin-top: 10px;">
                        <button class="eval-btn-secondary" onclick="document.getElementById('eval-resume-modal').remove(); EvaluationEngine.discardAndRestart('${activeAttempt.testId}')">
                            Reiniciar Nuevo Test
                        </button>
                        <button class="eval-btn-finish" onclick="document.getElementById('eval-resume-modal').remove(); EvaluationEngine.resumeAttempt('${activeAttempt.testId}')">
                            <i class="ph-bold ph-play"></i> Continuar Evaluación
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    },

    // Descartar intento previo y empezar nuevo
    discardAndRestart(testId) {
        EvaluationStorageService.clearActiveAttempt(testId);
        this.initNewAttempt(testId);
    },

    // Inicializar nuevo intento barajando preguntas y opciones
    initNewAttempt(testId) {
        const rawQuestions = window.EVAL_QUESTIONS_BANK[testId];
        if (!rawQuestions || !rawQuestions.length) {
            alert('No se encontraron preguntas cargadas para esta evaluación.');
            return;
        }

        // Barajar preguntas aleatoriamente
        const shuffledQuestionsOrder = this.shuffleArray(rawQuestions);

        // Barajar alternativas de cada pregunta preservando la correspondencia exacta de la correcta
        const preparedQuestions = shuffledQuestionsOrder.map((q, idx) => {
            const originalCorrectText = q.options[q.correctAnswer];
            const shuffledOptions = this.shuffleArray(q.options);
            const newCorrectIndex = shuffledOptions.indexOf(originalCorrectText);

            return {
                ...q,
                attemptIndex: idx,
                options: shuffledOptions,
                correctAnswer: newCorrectIndex
            };
        });

        const attemptId = 'eval_' + Date.now();
        this.activeState = {
            id: attemptId,
            testId: testId,
            startTime: Date.now(),
            timeRemaining: EVALUATIONS_DATA.settings.timeLimitSeconds, // 2100 s
            currentQIndex: 0,
            answers: {},
            questions: preparedQuestions
        };

        EvaluationStorageService.saveActiveAttempt(this.activeState);
        this.startTimer();
        this.renderRunner();
    },

    // Reanudar intento existente
    resumeAttempt(testId) {
        const saved = EvaluationStorageService.getActiveAttempt(testId);
        if (!saved) {
            this.initNewAttempt(testId);
            return;
        }

        this.activeState = saved;
        if (!this.activeState.timeRemaining || this.activeState.timeRemaining <= 0) {
            this.activeState.timeRemaining = 60; // margen mínimo si quedó en 0
        }

        this.startTimer();
        this.renderRunner();
    },

    // Temporizador regresivo
    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            if (!this.activeState) return;

            this.activeState.timeRemaining--;

            // Guardar periódicamente cada 5 segundos
            if (this.activeState.timeRemaining % 5 === 0) {
                EvaluationStorageService.saveActiveAttempt(this.activeState);
            }

            this.updateTimerDisplay();

            if (this.activeState.timeRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.timeExpiredAutoSubmit();
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const timerEl = document.getElementById('eval-timer-display');
        if (!timerEl || !this.activeState) return;

        const totalSecs = Math.max(0, this.activeState.timeRemaining);
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        timerEl.innerHTML = `<i class="ph-bold ph-clock"></i> ${timeStr}`;

        // Alertas visuales
        timerEl.classList.remove('warning', 'danger');
        if (totalSecs <= 60) {
            timerEl.classList.add('danger');
        } else if (totalSecs <= 300) {
            timerEl.classList.add('warning');
        }
    },

    timeExpiredAutoSubmit() {
        alert('¡El tiempo límite de 35 minutos ha finalizado! Tu evaluación se entregará automáticamente con las respuestas registradas.');
        this.submitEvaluation(true);
    },

    // Renderizar la interfaz de examen (Runner)
    renderRunner() {
        const existingOverlay = document.getElementById('eval-runner-overlay');
        if (existingOverlay) existingOverlay.remove();

        const instrument = EVALUATIONS_DATA.instruments[this.activeState.testId];
        const state = this.activeState;
        const q = state.questions[state.currentQIndex];
        const answeredCount = Object.keys(state.answers).length;
        const progressPct = Math.round((answeredCount / state.questions.length) * 100);

        const overlayHtml = `
            <div id="eval-runner-overlay" class="eval-runner-overlay">
                <div class="eval-runner-container">
                    <!-- Topbar de la Evaluación -->
                    <header class="eval-header-bar">
                        <div class="eval-title-group">
                            <div class="eval-icon-badge"><i class="ph ${instrument.icon}"></i></div>
                            <div class="eval-title-text">
                                <h3>${instrument.title}</h3>
                                <span>Instrumento de Evaluación Interactiva</span>
                            </div>
                        </div>

                        <div id="eval-timer-display" class="eval-timer-badge">
                            <i class="ph-bold ph-clock"></i> 35:00
                        </div>

                        <div class="eval-header-actions">
                            <button class="eval-btn-secondary" onclick="EvaluationEngine.togglePalette()">
                                <i class="ph-bold ph-squares-four"></i> Mapa (${answeredCount}/40)
                            </button>
                            <button class="eval-btn-finish" onclick="EvaluationEngine.confirmSubmit()">
                                <i class="ph-bold ph-check-circle"></i> Finalizar
                            </button>
                        </div>
                    </header>

                    <!-- Barra de Progreso -->
                    <div class="eval-progress-card">
                        <div class="eval-progress-meta">
                            <span>Pregunta <strong>${state.currentQIndex + 1}</strong> de <strong>40</strong></span>
                            <span>Progreso: <strong>${answeredCount}/40</strong> (${progressPct}%)</span>
                        </div>
                        <div class="eval-progress-bar-bg">
                            <div id="eval-progress-fill" class="eval-progress-bar-fill" style="width: ${progressPct}%;"></div>
                        </div>
                    </div>

                    <!-- Tarjeta de Pregunta Actual -->
                    <main id="eval-question-area" class="eval-question-card">
                        ${this.renderQuestionCardContent(q, state.currentQIndex)}
                    </main>

                    <!-- Barra de Navegación Inferior -->
                    <footer class="eval-navigation-bar">
                        <button class="eval-nav-btn" onclick="EvaluationEngine.prevQuestion()" ${state.currentQIndex === 0 ? 'disabled' : ''}>
                            <i class="ph-bold ph-arrow-left"></i> Anterior
                        </button>
                        <div style="font-size: 13px; color: var(--text-secondary);">
                            ${state.answers[state.currentQIndex] !== undefined ? '<span style="color: var(--success);"><i class="ph-bold ph-check"></i> Respondida</span>' : '<span style="color: var(--warning);"><i class="ph-bold ph-clock"></i> Pendiente</span>'}
                        </div>
                        <button class="eval-nav-btn primary" onclick="EvaluationEngine.nextQuestion()">
                            ${state.currentQIndex === 39 ? 'Revisar / Entregar <i class="ph-bold ph-check"></i>' : 'Siguiente <i class="ph-bold ph-arrow-right"></i>'}
                        </button>
                    </footer>
                </div>

                <!-- Drawer / Paleta de Navegación Rápida -->
                <div id="eval-palette-drawer" class="eval-palette-drawer">
                    <div class="eval-palette-header">
                        <h4 style="color:#fff; font-size:16px; margin:0;"><i class="ph-bold ph-squares-four"></i> Mapa de las 40 Preguntas</h4>
                        <button class="eval-btn-secondary" onclick="EvaluationEngine.togglePalette()">Cerrar <i class="ph-bold ph-x"></i></button>
                    </div>
                    <div id="eval-palette-grid" class="eval-palette-grid">
                        ${this.renderPaletteGridContent()}
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', overlayHtml);
        this.updateTimerDisplay();
    },

    // Generar contenido de la tarjeta de pregunta
    renderQuestionCardContent(q, index) {
        const letters = ['A', 'B', 'C', 'D'];
        const selectedOpt = this.activeState.answers[index];

        return `
            <div class="eval-question-tags">
                <span class="eval-tag eval-tag-dim">${q.dimensionName}</span>
                <span class="eval-tag eval-tag-diff ${q.difficulty}">${q.difficulty}</span>
                <span class="eval-tag eval-tag-cog">${q.cognitiveType}</span>
                <span style="font-size: 12px; color: var(--text-secondary); margin-left: auto;">${q.themeCategory}</span>
            </div>

            <h2 class="eval-question-statement">${q.question}</h2>

            <div class="eval-options-list">
                ${q.options.map((optText, optIdx) => `
                    <div class="eval-option-item ${selectedOpt === optIdx ? 'selected' : ''}" onclick="EvaluationEngine.selectOption(${optIdx})">
                        <div class="eval-option-letter">${letters[optIdx]}</div>
                        <div class="eval-option-text">${optText}</div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    // Generar botones de la paleta 1..40
    renderPaletteGridContent() {
        const state = this.activeState;
        return state.questions.map((q, idx) => {
            const isAnswered = state.answers[idx] !== undefined;
            const isCurrent = state.currentQIndex === idx;
            let classes = 'eval-palette-btn';
            if (isAnswered) classes += ' answered';
            if (isCurrent) classes += ' current';

            return `<button class="${classes}" onclick="EvaluationEngine.goToQuestion(${idx}); EvaluationEngine.togglePalette(false);">${idx + 1}</button>`;
        }).join('');
    },

    // Seleccionar opción
    selectOption(optIdx) {
        if (typeof playSound === 'function') playSound('click');
        const state = this.activeState;
        state.answers[state.currentQIndex] = optIdx;

        EvaluationStorageService.saveActiveAttempt(state);

        // Actualizar visualmente la tarjeta de pregunta
        const cardArea = document.getElementById('eval-question-area');
        if (cardArea) {
            const q = state.questions[state.currentQIndex];
            cardArea.innerHTML = this.renderQuestionCardContent(q, state.currentQIndex);
        }

        // Actualizar barra de progreso
        const answeredCount = Object.keys(state.answers).length;
        const progressPct = Math.round((answeredCount / state.questions.length) * 100);
        const fillEl = document.getElementById('eval-progress-fill');
        if (fillEl) fillEl.style.width = `${progressPct}%`;

        // Actualizar footer
        const navBar = document.querySelector('.eval-navigation-bar');
        if (navBar) {
            navBar.innerHTML = `
                <button class="eval-nav-btn" onclick="EvaluationEngine.prevQuestion()" ${state.currentQIndex === 0 ? 'disabled' : ''}>
                    <i class="ph-bold ph-arrow-left"></i> Anterior
                </button>
                <div style="font-size: 13px; color: var(--text-secondary);">
                    <span style="color: var(--success);"><i class="ph-bold ph-check"></i> Respondida</span>
                </div>
                <button class="eval-nav-btn primary" onclick="EvaluationEngine.nextQuestion()">
                    ${state.currentQIndex === 39 ? 'Revisar / Entregar <i class="ph-bold ph-check"></i>' : 'Siguiente <i class="ph-bold ph-arrow-right"></i>'}
                </button>
            `;
        }

        // Actualizar paleta
        const palGrid = document.getElementById('eval-palette-grid');
        if (palGrid) palGrid.innerHTML = this.renderPaletteGridContent();
    },

    nextQuestion() {
        if (this.activeState.currentQIndex < 39) {
            this.goToQuestion(this.activeState.currentQIndex + 1);
        } else {
            this.confirmSubmit();
        }
    },

    prevQuestion() {
        if (this.activeState.currentQIndex > 0) {
            this.goToQuestion(this.activeState.currentQIndex - 1);
        }
    },

    goToQuestion(idx) {
        if (typeof playSound === 'function') playSound('click');
        this.activeState.currentQIndex = idx;
        EvaluationStorageService.saveActiveAttempt(this.activeState);
        this.renderRunner();
    },

    togglePalette(forceState = null) {
        const drawer = document.getElementById('eval-palette-drawer');
        if (!drawer) return;
        if (forceState === true) {
            drawer.style.display = 'block';
        } else if (forceState === false) {
            drawer.style.display = 'none';
        } else {
            drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
        }
    },

    // Confirmar entrega
    confirmSubmit() {
        const state = this.activeState;
        const total = state.questions.length;
        const answered = Object.keys(state.answers).length;
        const pending = total - answered;

        const isComplete = pending === 0;

        const modalHtml = `
            <div id="eval-submit-confirm-modal" class="eval-modal-backdrop">
                <div class="eval-confirm-dialog">
                    <div class="eval-confirm-icon ${isComplete ? 'ready' : 'warning'}">
                        <i class="ph-bold ${isComplete ? 'ph-check-circle' : 'ph-warning'}"></i>
                    </div>
                    <h2 style="font-size: 22px; color: #fff;">${isComplete ? '¿Entregar Evaluación?' : 'Preguntas Pendientes'}</h2>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
                        ${isComplete ? 
                            'Has respondido las 40 preguntas. ¿Deseas entregar definitivamente tu evaluación para calificarla?' : 
                            `Aún tienes <strong style="color:var(--warning);">${pending} pregunta(s) sin responder</strong>. Las preguntas no contestadas equivalen a 0 puntos. ¿Deseas entregar de todas formas o volver a revisar?`}
                    </p>
                    <div style="display: flex; gap: 12px; justify-content: center; margin-top: 10px;">
                        <button class="eval-btn-secondary" onclick="document.getElementById('eval-submit-confirm-modal').remove()">
                            Seguir Revisando
                        </button>
                        <button class="eval-btn-finish" style="${!isComplete ? 'background: var(--warning); color: #000;' : ''}" onclick="document.getElementById('eval-submit-confirm-modal').remove(); EvaluationEngine.submitEvaluation(false)">
                            Sí, Entregar Evaluación
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
    },

    // Calificar y guardar intento
    submitEvaluation(isForced = false) {
        if (this.timerInterval) clearInterval(this.timerInterval);

        const state = this.activeState;
        const instrument = EVALUATIONS_DATA.instruments[state.testId];
        const durationSecs = EVALUATIONS_DATA.settings.timeLimitSeconds - state.timeRemaining;

        let correctCount = 0;
        let incorrectCount = 0;
        let unansweredCount = 0;

        // Estructuras por dimensión
        const dimensionStats = {};
        Object.keys(instrument.dimensions).forEach(dimKey => {
            dimensionStats[dimKey] = {
                title: instrument.dimensions[dimKey].title,
                correct: 0,
                total: 0,
                score: 0,
                percentage: 0
            };
        });

        const questionsReviewSnapshot = state.questions.map((q, idx) => {
            const userAns = state.answers[idx];
            const isAnswered = userAns !== undefined;
            const isCorrect = isAnswered && userAns === q.correctAnswer;

            if (isCorrect) correctCount++;
            else if (isAnswered) incorrectCount++;
            else unansweredCount++;

            if (dimensionStats[q.dimensionId]) {
                dimensionStats[q.dimensionId].total++;
                if (isCorrect) dimensionStats[q.dimensionId].correct++;
            }

            return {
                id: q.id,
                question: q.question,
                options: q.options,
                userAnswer: isAnswered ? userAns : null,
                correctAnswer: q.correctAnswer,
                isCorrect: isCorrect,
                dimensionId: q.dimensionId,
                dimensionName: q.dimensionName,
                difficulty: q.difficulty,
                cognitiveType: q.cognitiveType,
                themeCategory: q.themeCategory,
                competency: q.competency,
                explanationCorrect: q.explanationCorrect,
                explanationIncorrect: q.explanationIncorrect,
                recommendation: q.recommendation
            };
        });

        // Calificación final: 2.5 pts por cada acierto (0 a 100)
        const finalScore = Number((correctCount * EVALUATIONS_DATA.settings.pointsPerQuestion).toFixed(1));
        const passed = finalScore >= EVALUATIONS_DATA.settings.passingScore;

        // Determinar Nivel de Dominio
        let masteryObj = EVALUATIONS_DATA.masteryLevels[0];
        for (let lvl of EVALUATIONS_DATA.masteryLevels) {
            if (finalScore >= lvl.min && finalScore <= lvl.max) {
                masteryObj = lvl;
                break;
            }
        }

        // Calcular porcentajes de dimensiones y niveles
        Object.keys(dimensionStats).forEach(dimKey => {
            const dim = dimensionStats[dimKey];
            dim.score = Number((dim.correct * 2.5).toFixed(1));
            dim.percentage = Math.round((dim.correct / (dim.total || 10)) * 100);

            for (let lvl of EVALUATIONS_DATA.masteryLevels) {
                if (dim.percentage >= lvl.min && dim.percentage <= lvl.max) {
                    dim.level = lvl.name;
                    dim.levelColor = lvl.color;
                    break;
                }
            }
        });

        // Procesar Gamificación (XP y medallas)
        const rewardsAwarded = EvaluationGamification.processRewards(state.testId, finalScore);

        const attemptResult = {
            id: state.id,
            userKey: EvaluationStorageService.getCurrentUserKey(),
            testId: state.testId,
            testTitle: instrument.title,
            startDate: state.startTime,
            endDate: Date.now(),
            dateStr: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
            durationSeconds: Math.max(1, durationSecs),
            score: finalScore,
            correctCount: correctCount,
            incorrectCount: incorrectCount,
            unansweredCount: unansweredCount,
            masteryLevel: masteryObj.name,
            masteryLevelColor: masteryObj.color,
            passed: passed,
            dimensionStats: dimensionStats,
            rewardsAwarded: rewardsAwarded,
            questionsSnapshot: questionsReviewSnapshot
        };

        // Guardar intento histórico y limpiar activo
        EvaluationStorageService.saveAttempt(attemptResult);
        EvaluationStorageService.clearActiveAttempt(state.testId);
        this.activeState = null;

        // Cerrar runner
        const runnerEl = document.getElementById('eval-runner-overlay');
        if (runnerEl) runnerEl.remove();

        if (typeof playSound === 'function') {
            playSound(passed ? 'success' : 'click');
        }

        // Renderizar el Informe Diagnóstico
        this.renderDiagnosticReport(attemptResult);
    },

    // Generar Informe Diagnóstico Individual Detallado
    renderDiagnosticReport(attempt) {
        const contentArea = document.getElementById('content-area');
        if (!contentArea) return;

        const instrument = EVALUATIONS_DATA.instruments[attempt.testId];
        const minutes = Math.floor(attempt.durationSeconds / 60);
        const seconds = attempt.durationSeconds % 60;

        // Analizar Fortalezas y Oportunidades de Mejora por dimensión
        const dimsArray = Object.values(attempt.dimensionStats);
        const strengths = dimsArray.filter(d => d.percentage >= 80);
        const improvements = dimsArray.filter(d => d.percentage < 80);

        // Recomendaciones inteligentes derivadas de las preguntas falladas
        const missedQuestions = attempt.questionsSnapshot.filter(q => !q.isCorrect);
        const smartRecommendations = [];
        const seenCategories = new Set();

        for (let mq of missedQuestions) {
            if (!seenCategories.has(mq.themeCategory) && mq.recommendation) {
                smartRecommendations.push({
                    category: mq.themeCategory,
                    dimName: mq.dimensionName,
                    rec: mq.recommendation
                });
                seenCategories.add(mq.themeCategory);
                if (smartRecommendations.length >= 4) break; // máx 4 recomendaciones destacadas
            }
        }

        const reportHtml = `
            <div class="view-animate eval-report-container">
                <!-- Botón Volver -->
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <button class="hero-btn" onclick="app.navigate('evaluate')" style="background: rgba(255,255,255,0.08); font-size: 13px; padding: 8px 16px;">
                        <i class="ph-bold ph-arrow-left"></i> Volver a Evaluaciones
                    </button>
                    <div style="font-size: 13px; color: var(--text-secondary);">
                        <i class="ph ph-calendar"></i> ${attempt.dateStr}
                    </div>
                </div>

                <!-- Hero Card con Calificación y Nivel -->
                <div class="eval-report-hero">
                    <div style="flex: 1; min-width: 260px;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                            <span class="route-badge">${instrument ? instrument.category : 'Evaluación'}</span>
                            <span style="font-size: 12px; color: ${attempt.passed ? 'var(--success)' : 'var(--warning)'}; font-weight: 700;">
                                <i class="ph-bold ${attempt.passed ? 'ph-seal-check' : 'ph-warning'}"></i> ${attempt.passed ? 'APROBADO' : 'POR FORTALECER'}
                            </span>
                        </div>
                        <h1 style="font-size: 28px; color: #fff; margin-bottom: 10px;">${attempt.testTitle}</h1>
                        <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; margin: 0;">
                            ${attempt.passed ? 
                                '¡Felicitaciones! Has demostrado las competencias requeridas para este instrumento formativo.' : 
                                'Has completado la evaluación. Te sugerimos revisar las oportunidades de mejora y la retroalimentación detallada para fortalecer tus saberes.'}
                        </p>
                    </div>

                    <div class="eval-score-ring">
                        <div class="eval-score-number" style="color: ${attempt.masteryLevelColor};">${attempt.score}</div>
                        <div class="eval-score-total">de 100 puntos</div>
                        <div class="eval-mastery-pill" style="background: rgba(255,255,255,0.08); color: ${attempt.masteryLevelColor};">
                            <i class="ph-fill ph-star"></i> Nivel ${attempt.masteryLevel}
                        </div>
                    </div>
                </div>

                <!-- Métricas Rápidas -->
                <div class="eval-metrics-grid">
                    <div class="eval-metric-card">
                        <div class="eval-metric-icon" style="background: rgba(16,185,129,0.15); color: var(--success);"><i class="ph-bold ph-check"></i></div>
                        <div>
                            <div style="font-size: 22px; font-weight: 800; color: #fff;">${attempt.correctCount}</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Correctas (2.5 pts c/u)</div>
                        </div>
                    </div>
                    <div class="eval-metric-card">
                        <div class="eval-metric-icon" style="background: rgba(239,68,68,0.15); color: var(--error);"><i class="ph-bold ph-x"></i></div>
                        <div>
                            <div style="font-size: 22px; font-weight: 800; color: #fff;">${attempt.incorrectCount}</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Incorrectas</div>
                        </div>
                    </div>
                    <div class="eval-metric-card">
                        <div class="eval-metric-icon" style="background: rgba(245,158,11,0.15); color: var(--warning);"><i class="ph-bold ph-minus-circle"></i></div>
                        <div>
                            <div style="font-size: 22px; font-weight: 800; color: #fff;">${attempt.unansweredCount}</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Sin responder</div>
                        </div>
                    </div>
                    <div class="eval-metric-card">
                        <div class="eval-metric-icon" style="background: rgba(14,165,233,0.15); color: var(--primary);"><i class="ph-bold ph-clock"></i></div>
                        <div>
                            <div style="font-size: 22px; font-weight: 800; color: #fff;">${minutes}m ${seconds}s</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Tiempo empleado</div>
                        </div>
                    </div>
                </div>

                <!-- Diagnóstico por Dimensiones -->
                <div class="view-header" style="margin-top: 10px;">
                    <h2 class="view-title" style="font-size: 20px;">Diagnóstico por Dimensiones Pedagógicas</h2>
                    <p class="view-subtitle" style="font-size: 13px;">Desempeño específico en cada una de las 4 áreas del instrumento.</p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 14px;">
                    ${Object.keys(attempt.dimensionStats).map(k => {
                        const d = attempt.dimensionStats[k];
                        return `
                            <div class="eval-dimension-card">
                                <div class="eval-dimension-header">
                                    <div class="eval-dimension-title">${d.title}</div>
                                    <div style="display: flex; align-items: center; gap: 12px;">
                                        <span style="font-size: 12px; padding: 3px 8px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${d.levelColor}; font-weight: 700;">${d.level}</span>
                                        <div class="eval-dimension-score">${d.score} / 25 pts (${d.percentage}%)</div>
                                    </div>
                                </div>
                                <div class="eval-progress-bar-bg" style="height: 10px;">
                                    <div class="eval-progress-bar-fill" style="width: ${d.percentage}%; background: ${d.levelColor};"></div>
                                </div>
                                <div style="font-size: 12px; color: var(--text-secondary);">
                                    ${d.correct} de ${d.total} preguntas correctas en esta dimensión.
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- Fortalezas, Oportunidades y Recomendaciones Inteligentes -->
                <div class="eval-insights-grid">
                    <div class="eval-insight-box strengths">
                        <div class="eval-insight-header" style="color: var(--success);">
                            <i class="ph-bold ph-trophy"></i> Fortalezas Identificadas
                        </div>
                        ${strengths.length > 0 ? `
                            <ul style="padding-left: 18px; color: var(--text-secondary); font-size: 13.5px; line-height: 1.6; margin: 0;">
                                ${strengths.map(s => `<li><strong>${s.title}:</strong> Demuestras dominio sólido (${s.percentage}%) y capacidad de aplicación.</li>`).join('')}
                            </ul>
                        ` : `
                            <p style="color: var(--text-secondary); font-size: 13.5px; margin: 0;">
                                Continúa profundizando para consolidar tus primeras dimensiones en nivel Competente o Avanzado.
                            </p>
                        `}
                    </div>

                    <div class="eval-insight-box improvements">
                        <div class="eval-insight-header" style="color: var(--warning);">
                            <i class="ph-bold ph-trend-up"></i> Oportunidades de Mejora
                        </div>
                        ${improvements.length > 0 ? `
                            <ul style="padding-left: 18px; color: var(--text-secondary); font-size: 13.5px; line-height: 1.6; margin: 0;">
                                ${improvements.map(i => `<li><strong>${i.title}:</strong> Requiere fortalecimiento conceptual y práctico (${i.percentage}% de logro).</li>`).join('')}
                            </ul>
                        ` : `
                            <p style="color: var(--success); font-size: 13.5px; margin: 0;">
                                ¡Excelente desempeño integral! No se registraron dimensiones por debajo de 80 puntos.
                            </p>
                        `}
                    </div>
                </div>

                <!-- Recomendaciones Inteligentes -->
                <div class="eval-insight-box recommendations">
                    <div class="eval-insight-header" style="color: var(--primary);">
                        <i class="ph-bold ph-lightbulb"></i> Recomendaciones Pedagógicas Específicas
                    </div>
                    ${smartRecommendations.length > 0 ? `
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            ${smartRecommendations.map(r => `
                                <div style="background: rgba(0,0,0,0.25); padding: 12px 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                                    <div style="font-size: 12px; color: var(--accent); font-weight: 700; margin-bottom: 4px;">${r.dimName} • ${r.category}</div>
                                    <div style="font-size: 13px; color: var(--text-primary); line-height: 1.5;">${r.rec}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p style="color: var(--text-secondary); font-size: 13.5px; margin: 0;">
                            Has demostrado un dominio sobresaliente en todos los núcleos conceptuales de la evaluación. Te sugerimos transferir tus conocimientos mediante tutoría a colegas y diseño de proyectos aplicados.
                        </p>
                    `}
                </div>

                <!-- Recompensas de Gamificación Obtenidas -->
                <div class="eval-gamification-card">
                    <div class="eval-medal-preview">
                        <div class="eval-medal-icon-large">
                            <i class="ph-fill ${attempt.passed ? 'ph-medal' : 'ph-star'}"></i>
                        </div>
                        <div>
                            <div style="font-size: 12px; text-transform: uppercase; color: var(--warning); font-weight: 700;">Recompensas de este Intento</div>
                            <h3 style="color: #fff; font-size: 18px; margin: 2px 0 6px;">
                                ${attempt.rewardsAwarded.totalNewXP > 0 ? `+${attempt.rewardsAwarded.totalNewXP} Puntos XP Ganados` : 'Intento Registrado en tu Historial'}
                            </h3>
                            <div style="font-size: 13px; color: var(--text-secondary);">
                                Completitud: +${attempt.rewardsAwarded.baseXP} XP | Bono Desempeño: +${attempt.rewardsAwarded.tierXP} XP
                            </div>
                        </div>
                    </div>

                    ${attempt.rewardsAwarded.unlockedMedals.length > 0 ? `
                        <div style="display: flex; flex-direction: column; gap: 6px; align-items: flex-end;">
                            <span style="font-size: 11px; text-transform: uppercase; color: var(--success); font-weight: 700;"><i class="ph-fill ph-check-circle"></i> Nueva Medalla Desbloqueada</span>
                            ${attempt.rewardsAwarded.unlockedMedals.map(m => `
                                <div style="background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); border-radius: 8px; padding: 6px 12px; font-size: 12px; color: #fff; font-weight: 700;">
                                    🏆 ${m.name}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>

                <!-- Botones de Acción -->
                <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-top: 10px;">
                    <button class="hero-btn" onclick="EvaluationEngine.viewPedagogicalFeedback('${attempt.id}')" style="background: var(--primary); font-size: 14px; padding: 12px 24px;">
                        <i class="ph-bold ph-book-open"></i> Revisar Respuestas y Retroalimentación (40 Preguntas)
                    </button>
                    <button class="hero-btn" onclick="EvaluationEngine.renderHistoryView('${attempt.testId}')" style="background: rgba(255,255,255,0.08); color: white; font-size: 14px; padding: 12px 20px;">
                        <i class="ph-bold ph-chart-line-up"></i> Ver Historial de Intentos
                    </button>
                    <button class="hero-btn" onclick="EvaluationEngine.initNewAttempt('${attempt.testId}')" style="background: rgba(255,255,255,0.08); color: white; font-size: 14px; padding: 12px 20px;">
                        <i class="ph-bold ph-arrow-counter-clockwise"></i> Reintentar Evaluación
                    </button>
                </div>
            </div>
        `;

        contentArea.innerHTML = reportHtml;
        window.scrollTo(0, 0);
    },

    // Ver intento histórico guardado
    viewPastAttempt(attemptId) {
        const attempts = EvaluationStorageService.getAllAttempts();
        const found = attempts.find(a => a.id === attemptId);
        if (found) {
            this.renderDiagnosticReport(found);
        } else {
            alert('No se encontró el intento solicitado.');
        }
    },

    // Ver Retroalimentación Pedagógica de las 40 preguntas
    viewPedagogicalFeedback(attemptId, filter = 'all') {
        const contentArea = document.getElementById('content-area');
        if (!contentArea) return;

        const attempts = EvaluationStorageService.getAllAttempts();
        const attempt = attempts.find(a => a.id === attemptId);
        if (!attempt) return;

        const letters = ['A', 'B', 'C', 'D'];
        let filteredQuestions = attempt.questionsSnapshot;

        if (filter === 'correct') {
            filteredQuestions = attempt.questionsSnapshot.filter(q => q.isCorrect);
        } else if (filter === 'incorrect') {
            filteredQuestions = attempt.questionsSnapshot.filter(q => !q.isCorrect);
        }

        const viewHtml = `
            <div class="view-animate eval-report-container">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                    <div>
                        <button class="hero-btn" onclick="EvaluationEngine.viewPastAttempt('${attempt.id}')" style="background: rgba(255,255,255,0.08); font-size: 13px; padding: 8px 16px;">
                            <i class="ph-bold ph-arrow-left"></i> Volver al Informe
                        </button>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button class="filter-pill ${filter === 'all' ? 'active' : ''}" onclick="EvaluationEngine.viewPedagogicalFeedback('${attempt.id}', 'all')">
                            Todas (40)
                        </button>
                        <button class="filter-pill ${filter === 'correct' ? 'active' : ''}" onclick="EvaluationEngine.viewPedagogicalFeedback('${attempt.id}', 'correct')">
                            Correctas (${attempt.correctCount})
                        </button>
                        <button class="filter-pill ${filter === 'incorrect' ? 'active' : ''}" onclick="EvaluationEngine.viewPedagogicalFeedback('${attempt.id}', 'incorrect')">
                            Incorrectas / En blanco (${attempt.incorrectCount + attempt.unansweredCount})
                        </button>
                    </div>
                </div>

                <div class="view-header" style="margin-top: 10px;">
                    <h1 class="view-title">Retroalimentación Pedagógica Detallada</h1>
                    <p class="view-subtitle">Análisis conceptual de cada respuesta, justificación de distractores y sugerencias formativas.</p>
                </div>

                <div style="display: flex; flex-direction: column;">
                    ${filteredQuestions.map((q, idx) => {
                        const statusClass = q.isCorrect ? 'correct' : 'incorrect';
                        return `
                            <div class="eval-feedback-item ${statusClass}">
                                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                                    <div class="eval-question-tags">
                                        <span class="eval-tag" style="background: rgba(255,255,255,0.1); color: #fff;">#${idx + 1}</span>
                                        <span class="eval-tag eval-tag-dim">${q.dimensionName}</span>
                                        <span class="eval-tag eval-tag-diff ${q.difficulty}">${q.difficulty}</span>
                                    </div>
                                    <div style="font-size: 13px; font-weight: 700; color: ${q.isCorrect ? 'var(--success)' : 'var(--error)'};">
                                        <i class="ph-bold ${q.isCorrect ? 'ph-check-circle' : 'ph-x-circle'}"></i> ${q.isCorrect ? 'Respuesta Correcta' : (q.userAnswer === null ? 'Sin Responder' : 'Respuesta Incorrecta')}
                                    </div>
                                </div>

                                <div style="font-size: 17px; font-weight: 600; color: #fff; line-height: 1.5;">
                                    ${q.question}
                                </div>

                                <!-- Opciones analizadas -->
                                <div style="display: flex; flex-direction: column; gap: 8px;">
                                    ${q.options.map((opt, optIdx) => {
                                        const isCorrect = optIdx === q.correctAnswer;
                                        const isUserChoice = optIdx === q.userAnswer;
                                        let optClass = 'eval-feedback-option';

                                        if (isCorrect) optClass += ' is-correct';
                                        if (isUserChoice && !isCorrect) optClass += ' is-user-incorrect';

                                        return `
                                            <div class="${optClass}">
                                                <span><strong>${letters[optIdx]}.</strong> ${opt}</span>
                                                <div style="display: flex; gap: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase;">
                                                    ${isUserChoice ? `<span style="padding: 2px 8px; border-radius: 4px; background: rgba(0,0,0,0.3);"><i class="ph-bold ph-user"></i> Tu respuesta</span>` : ''}
                                                    ${isCorrect ? `<span style="padding: 2px 8px; border-radius: 4px; background: var(--success); color: #000;"><i class="ph-bold ph-check"></i> Correcta</span>` : ''}
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>

                                <!-- Explicaciones Pedagógicas -->
                                <div class="eval-rationale-box">
                                    <div style="color: var(--success); font-weight: 700; display: flex; align-items: center; gap: 6px;">
                                        <i class="ph-bold ph-lightbulb"></i> Fundamento de la Respuesta Correcta:
                                    </div>
                                    <p style="margin: 0; color: var(--text-primary);">${q.explanationCorrect}</p>

                                    <div style="color: var(--warning); font-weight: 700; margin-top: 8px; display: flex; align-items: center; gap: 6px;">
                                        <i class="ph-bold ph-info"></i> Análisis de los Distractores:
                                    </div>
                                    <p style="margin: 0; color: var(--text-secondary);">${q.explanationIncorrect}</p>

                                    <div style="margin-top: 8px; font-size: 12px; color: var(--accent); border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px;">
                                        <strong>Competencia:</strong> ${q.competency}<br>
                                        <strong>Recomendación:</strong> ${q.recommendation}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div style="text-align: center; margin-top: 20px;">
                    <button class="hero-btn" onclick="EvaluationEngine.viewPastAttempt('${attempt.id}')">
                        <i class="ph-bold ph-arrow-left"></i> Volver al Informe Diagnóstico
                    </button>
                </div>
            </div>
        `;

        contentArea.innerHTML = viewHtml;
        window.scrollTo(0, 0);
    },

    // Vista de Historial y Evolución
    renderHistoryView(filterTestId = null) {
        const contentArea = document.getElementById('content-area');
        if (!contentArea) return;

        const attempts = EvaluationStorageService.getUserAttempts(filterTestId);
        const instruments = EVALUATIONS_DATA.instruments;

        const historyHtml = `
            <div class="view-animate eval-report-container">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                    <div>
                        <button class="hero-btn" onclick="app.navigate('evaluate')" style="background: rgba(255,255,255,0.08); font-size: 13px; padding: 8px 16px;">
                            <i class="ph-bold ph-arrow-left"></i> Volver a Evaluaciones
                        </button>
                    </div>
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        <button class="filter-pill ${!filterTestId ? 'active' : ''}" onclick="EvaluationEngine.renderHistoryView()">Todos</button>
                        ${Object.keys(instruments).map(k => `
                            <button class="filter-pill ${filterTestId === k ? 'active' : ''}" onclick="EvaluationEngine.renderHistoryView('${k}')">${instruments[k].title}</button>
                        `).join('')}
                    </div>
                </div>

                <div class="view-header" style="margin-top: 10px;">
                    <h1 class="view-title">Historial y Evolución de Evaluaciones</h1>
                    <p class="view-subtitle">Monitorea tu progresión, curvas de mejora entre intentos e insignias desbloqueadas.</p>
                </div>

                <!-- Resumen Global -->
                <div class="eval-metrics-grid" style="margin-bottom: 24px;">
                    <div class="eval-metric-card">
                        <div class="eval-metric-icon" style="background: rgba(14,165,233,0.15); color: var(--primary);"><i class="ph-bold ph-clipboard-text"></i></div>
                        <div>
                            <div style="font-size: 22px; font-weight: 800; color: #fff;">${attempts.length}</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Intentos completados</div>
                        </div>
                    </div>
                    <div class="eval-metric-card">
                        <div class="eval-metric-icon" style="background: rgba(16,185,129,0.15); color: var(--success);"><i class="ph-bold ph-seal-check"></i></div>
                        <div>
                            <div style="font-size: 22px; font-weight: 800; color: #fff;">${attempts.filter(a => a.passed).length}</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Evaluaciones aprobadas</div>
                        </div>
                    </div>
                    <div class="eval-metric-card">
                        <div class="eval-metric-icon" style="background: rgba(245,158,11,0.15); color: var(--warning);"><i class="ph-bold ph-trophy"></i></div>
                        <div>
                            <div style="font-size: 22px; font-weight: 800; color: #fff;">
                                ${attempts.length ? Math.round(attempts.reduce((acc, a) => acc + a.score, 0) / attempts.length) : 0} pts
                            </div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Promedio general</div>
                        </div>
                    </div>
                </div>

                <!-- Lista de Intentos -->
                ${attempts.length > 0 ? `
                    <div style="display: flex; flex-direction: column; gap: 14px;">
                        ${attempts.map(att => `
                            <div class="eval-history-card">
                                <div style="display: flex; align-items: center; gap: 14px;">
                                    <div class="eval-icon-badge" style="width: 46px; height: 46px; font-size: 22px;">
                                        <i class="ph ${instruments[att.testId] ? instruments[att.testId].icon : 'ph-exam'}"></i>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 17px; color: #fff; margin: 0 0 4px 0;">${att.testTitle}</h3>
                                        <div style="font-size: 12px; color: var(--text-secondary);">
                                            <span><i class="ph ph-calendar"></i> ${att.dateStr}</span> • 
                                            <span><i class="ph ph-clock"></i> ${Math.floor(att.durationSeconds / 60)}m</span> • 
                                            <span style="color: ${att.masteryLevelColor}; font-weight: 700;">Nivel ${att.masteryLevel}</span>
                                        </div>
                                    </div>
                                </div>

                                <div style="display: flex; align-items: center; gap: 18px;">
                                    <div style="text-align: right;">
                                        <div style="font-size: 24px; font-weight: 800; color: ${att.passed ? 'var(--success)' : 'var(--warning)'};">${att.score} pts</div>
                                        <div style="font-size: 11px; color: var(--text-secondary); text-transform: uppercase; font-weight: 700;">
                                            ${att.passed ? 'Aprobado' : 'No aprobado'}
                                        </div>
                                    </div>
                                    <button class="hero-btn" onclick="EvaluationEngine.viewPastAttempt('${att.id}')" style="font-size: 12px; padding: 8px 16px;">
                                        Ver Informe <i class="ph-bold ph-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <div class="card avatar-card" style="text-align: center; padding: 40px; margin-top: 10px;">
                        <i class="ph-bold ph-clipboard-text" style="font-size: 48px; color: var(--text-secondary); margin-bottom: 12px; opacity: 0.5;"></i>
                        <h3 style="color: #fff; font-size: 18px; margin-bottom: 6px;">Sin evaluaciones registradas</h3>
                        <p style="color: var(--text-secondary); font-size: 14px; max-width: 480px; margin: 0 auto 20px;">
                            Aún no has completado evaluaciones con este filtro. Inicia uno de los 4 instrumentos para medir tus competencias docentes y organizacionales.
                        </p>
                        <button class="hero-btn" onclick="app.navigate('evaluate')"><i class="ph-bold ph-exam"></i> Ir a Evaluaciones</button>
                    </div>
                `}
            </div>
        `;

        contentArea.innerHTML = historyHtml;
        window.scrollTo(0, 0);
    }
};
