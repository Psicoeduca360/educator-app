// ============================================================================
// PSICOEDUCA ACADEMY - MOTOR ASISTENTE ACADÉMICO INTELIGENTE (ELPROFE 360)
// Arquitectura RAG (Retrieval-Augmented Generation), Clasificación de Intención,
// Resolución de Perfiles, Memoria Conversacional e Inferencia Híbrida.
// ============================================================================

const normalizeText = (text) => {
    if (!text) return "";
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // quitar tildes/diacríticos
        .replace(/[¿?¡!.,:;()\[\]{}'"_\-\/]/g, " ")
        .trim();
};

class ElprofeEngine {
    constructor() {
        this.memory = [];
        this.maxMemory = 10;
        this.currentProfile = "Docente";
        this.currentMode = "standard"; // 'standard' | 'tutor'
    }

    // ------------------------------------------------------------------------
    // 1. CLASIFICADOR DE INTENCIÓN (INTENT CLASSIFIER)
    // ------------------------------------------------------------------------
    classifyIntent(query) {
        const q = normalizeText(query);
        
        if (q.includes("modo tutor") || q.includes("modo docente") || q.includes("ponme a prueba") || q.includes("cuestioname") || q.includes("hazme una pregunta")) {
            return "teacher_mode";
        }
        if (q === "hola" || q.startsWith("hola ") || q.includes("buenos dias") || q.includes("buenas tardes") || q.includes("buenas noches") || q.includes("saludos") || q.includes("que tal") || q.includes("quien eres") || q.includes("presentate") || q === "ayuda" || q.startsWith("ayuda ")) {
            return "greeting";
        }
        if (q.includes("curso") || q.includes("talleres") || q.includes("modulo") || q.includes("canva") || q.includes("tiktok") || q.includes("lxd") || q.includes("catalogo") || q.includes("que puedo aprender")) {
            return "courses_info";
        }
        if (q.includes("evalua") || q.includes("diagnostico") || q.includes("scanner") || q.includes("test") || q.includes("prueba") || q.includes("examen")) {
            return "diagnostic_info";
        }
        if (q.includes("practica") || q.includes("laboratorio") || q.includes("simulador") || q.includes("juego") || q.includes("sales") || q.includes("voz en escena") || q.includes("aprende jugando")) {
            return "practice_info";
        }
        if (q.includes("diferencia") || q.includes("compara") || q.includes(" vs ") || q.includes("versus") || q.includes("distinto")) {
            return "comparison";
        }
        if (q.includes("ejemplo") || q.includes("casos practicos") || q.includes("dame un caso")) {
            return "example";
        }
        if (q.includes("como aplico") || q.includes("como implementar") || q.includes("estrategia") || q.includes("actividad") || q.includes("pasos para")) {
            return "application";
        }
        if (q.includes("problema") || q.includes("pierden") || q.includes("distra") || q.includes("celular") || q.includes("telefono") || q.includes("no participan") || q.includes("aburr") || q.includes("desinteres") || q.includes("motiv") || q.includes("disciplin") || q.includes("atencion") || q.includes("callados")) {
            return "problem_solving";
        }
        if (q.includes("que es") || q.includes("defina") || q.includes("concepto de") || q.includes("significa") || q.includes("en que consiste")) {
            return "definition";
        }
        if (q.includes("quien fue") || q.includes("biografia") || q.includes("obras de") || q.includes("autor")) {
            return "author_info";
        }
        return "explanation";
    }

    // ------------------------------------------------------------------------
    // 2. RESOLUTOR DE PERFIL DE USUARIO (PROFILE RESOLVER)
    // ------------------------------------------------------------------------
    resolveProfile(query, userState = {}) {
        const q = normalizeText(query);
        
        if (q.includes("empresa") || q.includes("capacitacion") || q.includes("empleados") || q.includes("formador empresarial")) {
            return "Formador Organizacional";
        }
        if (q.includes("equipo") || q.includes("liderar") || q.includes("supervisar") || q.includes("colaboradores") || q.includes("lider")) {
            return "Líder / Supervisor";
        }
        if (q.includes("estudiante") || q.includes("universidad") || q.includes("mi aprendizaje") || q.includes("estudiar")) {
            return "Estudiante";
        }
        if (q.includes("aula") || q.includes("colegio") || q.includes("alumnos") || q.includes("docente") || q.includes("profesor")) {
            return "Docente";
        }
        
        // Retornar objetivo del estado o por defecto Docente
        if (userState.userObjective) {
            const objNorm = normalizeText(userState.userObjective);
            if (objNorm.includes("formador")) return "Formador Organizacional";
            if (objNorm.includes("liderar")) return "Líder / Supervisor";
            if (objNorm.includes("empleo") || objNorm.includes("vocacional")) return "Desarrollo Laboral";
        }
        return this.currentProfile || "Docente / Educador";
    }

    // ------------------------------------------------------------------------
    // 3. RECUPERADOR RAG & RANKING LÉXICO-SEMÁNTICO
    // ------------------------------------------------------------------------
    retrieveKnowledge(query) {
        const kb = (typeof window !== 'undefined' && window.psicoeducaKnowledgeBase) ? window.psicoeducaKnowledgeBase : [];
        if (!kb || kb.length === 0) return [];

        const normQuery = normalizeText(query);
        const queryTokens = normQuery.split(/\s+/).filter(t => t.length >= 3);

        const scored = kb.map(item => {
            let score = 0;
            const normConcept = normalizeText(item.concepto || "");
            const normTema = normalizeText(item.tema || "");
            const normSubtema = normalizeText(item.subtema || "");
            const normDefinicion = normalizeText(item.definicion || "");
            const normAutores = (item.autores || []).map(a => normalizeText(a));
            const normRel = (item.conceptos_relacionados || []).map(r => normalizeText(r));
            const normErrores = (item.errores_frecuentes || []).map(e => normalizeText(e));
            const fullNormalized = `${normTema} ${normSubtema} ${normConcept} ${normDefinicion} ${normAutores.join(' ')} ${normRel.join(' ')} ${normErrores.join(' ')}`;

            // 1. Coincidencia directa de concepto
            if (normConcept && (normQuery.includes(normConcept) || normConcept.includes(normQuery))) {
                score += 60;
            }

            // 2. Acrónimos y términos de alto impacto pedagógico
            const keyTerms = [
                'dua', 'zdp', 'abp', 'constructivismo', 'conductismo', 'cognitivismo',
                'andragogia', 'metacognicion', 'neuromitos', 'gamificacion', 'lxd',
                'feedback', 'inclusion', 'asimilacion', 'acomodacion', 'skinner',
                'piaget', 'vygotsky', 'freire', 'dewey', 'montessori', 'bloom',
                'gardner', 'inteligencia emocional', 'liderazgo', 'refuerzo'
            ];
            keyTerms.forEach(kt => {
                if (normQuery.includes(kt) && fullNormalized.includes(kt)) {
                    score += 40;
                }
            });

            // 3. Coincidencia de autores (por partes o completo)
            normAutores.forEach(author => {
                if (normQuery.includes(author)) {
                    score += 50;
                } else {
                    const parts = author.split(/\s+/).filter(p => p.length >= 4);
                    parts.forEach(part => {
                        if (normQuery.includes(part)) score += 35;
                    });
                }
            });

            // 4. Coincidencia por tokens
            queryTokens.forEach(token => {
                if (normConcept.includes(token)) score += 20;
                else if (normTema.includes(token) || normSubtema.includes(token)) score += 12;
                else if (fullNormalized.includes(token)) score += 6;
            });

            return { item, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return scored.filter(s => s.score >= 15).map(s => s.item).slice(0, 3);
    }

    // ------------------------------------------------------------------------
    // 4. MEMORIA CONVERSACIONAL Y RESOLUCIÓN DE ANÁFORAS
    // ------------------------------------------------------------------------
    resolveAnaphora(query) {
        let enhancedQuery = query;
        if (this.memory.length > 0) {
            const lastTurn = this.memory[this.memory.length - 1];
            const lower = normalizeText(query);
            
            if (lower.includes("lo aplico") || lower.includes("de eso") || lower.includes("como funciona eso") || lower.includes("y el") || lower.includes("dame otro")) {
                if (lastTurn.retrievedTopic) {
                    enhancedQuery += ` sobre ${lastTurn.retrievedTopic}`;
                }
            }
        }
        return enhancedQuery;
    }

    // ------------------------------------------------------------------------
    // 5. SINTETIZADOR DE RESPUESTAS ADAPTATIVAS (CLIENT-SIDE SYNTHESIZER)
    // ------------------------------------------------------------------------
    synthesizeResponse(query, intent, profile, retrievedItems) {
        // CASO 1: SALUDOS / BIENVENIDA
        if (intent === "greeting") {
            return `### 👋 ¡Hola! Soy Elprofe 360

Tu **Asistente Académico Inteligente** en PsicoEduca Academy. Estoy equipado con un motor **RAG pedagógico** para orientarte con rigor en:

* 🧠 **Teorías del Aprendizaje**: Constructivismo (*Piaget, Vygotsky*), Conductismo (*Skinner, Pavlov*) y Cognitivismo.
* ♿ **Inclusión Educativa**: Principios del *Diseño Universal para el Aprendizaje (DUA)*.
* 🏫 **Gestión de Aula & Andragogía**: Motivación activa, técnicas *Think-Pair-Share* y formación de adultos.
* 🚀 **Innovación & Liderazgo**: Metodologías activas (ABP, Gamificación) y desarrollo profesional para tu perfil de **${profile}**.

> *¿Sobre qué concepto, autor o desafío formativo te gustaría consultar hoy?*`;
        }

        // CASO 2: INFORMACIÓN DE CURSOS
        if (intent === "courses_info") {
            return `### 📚 Catálogo Formativo de PsicoEduca Academy

Nuestra academia ofrece micro-cursos y programas especializados diseñados bajo el enfoque de aprendizaje activo:

1. **Masterclass: Diseño Universal para el Aprendizaje (DUA)**: Neuroeducación y aulas inclusivas derribando el mito del alumno promedio.
2. **LXD (Diseño de Experiencias de Aprendizaje)**: Metodologías ágiles para estructurar rutas de formación de alto impacto.
3. **Canva para Docentes y Formadores**: Psicología del color, jerarquía visual y creación de recursos didácticos atractivos.
4. **TikTok y Microaprendizaje**: Estrategias de síntesis y contenido educativo en formatos breves y dinámicos.

💡 *Puedes explorar todos los módulos y lecciones interactivas navegando a la sección **Aprende** en el menú lateral.*`;
        }

        // CASO 3: INFORMACIÓN DE DIAGNÓSTICOS
        if (intent === "diagnostic_info") {
            return `### 🏆 Centro de Evaluación y Diagnósticos Situacionales

En la sección **Evalúate** dispones de 3 instrumentos orientativos avanzados para potenciar tu desarrollo:

* 📊 **Scanner de Innovación Educativa**: Evalúa 10 dimensiones clave (desde metodologías activas y rol docente hasta uso invisible de la tecnología).
* 🎯 **Diagnóstico de Habilidades Pedagógicas**: Mide 8 dimensiones de facilitación, resolución de imprevistos e interacción en el aula.
* 🧠 **Diagnóstico de Perfil Constructivista**: Analiza tu aplicación situacional del andamiaje socrático y aprendizaje colaborativo.

✨ *Cada diagnóstico completado te otorga **+1000 XP** y un reporte detallado con recomendaciones prácticas y metodologías sugeridas.*`;
        }

        // CASO 4: INFORMACIÓN DE PRÁCTICA Y LABORATORIO
        if (intent === "practice_info") {
            return `### 🔬 Laboratorio Psicoeduca: Aprende Haciendo

En la sección **Practica** puedes entrenar tus competencias mediante simuladores y experiencias interactivas:

* 🎮 **Sales 360 Game**: Simulador gamificado de empatía y ventas consultivas.
* 🎭 **Voz en Escena**: Laboratorio de oratoria, presencia escénica y modulación vocal.
* 🧩 **Sales Experience**: Dinámicas de memoria, trivia y aplicación de conceptos clave.
* 🧭 **Consultor Vocacional**: Diagnóstico inteligente de afinidad didáctica y rutas docentes.`;
        }

        // CASO 5: RESOLUCIÓN DE PROBLEMAS DE AULA Y GESTIÓN DE PARTICIPANTES
        if (intent === "problem_solving") {
            const relatedConcept = retrievedItems[0] ? `\n\n---\n💡 *Concepto Académico Sugerido en PsicoEduca: **${retrievedItems[0].concepto}** (${retrievedItems[0].tema} — ${retrievedItems[0].subtema}).*` : '';
            return `### 💡 Estrategia de Gestión de Aula y Motivación de Elprofe 360

Para abordar situaciones de desinterés, pasividad o distracción digital en el aula, te sugiero aplicar estas 4 estrategias basadas en neuroeducación y constructivismo:

1. **Transformar la Distracción en Herramienta (BYOD)**:
   * En lugar de confrontar el uso del celular, lanza un reto de investigación rápida de 3 minutos: *"¿Quién encuentra primero el dato más curioso sobre este problema en su móvil?"*.
2. **Técnica Piensa - Compara - Comparte (Think-Pair-Share)**:
   * Haz una pausa activa. Pide a los alumnos formular su hipótesis individualmente (1 min), contrastarla en parejas (2 min) y exponerla en plenaria. Esto elimina el miedo escénico y activa a los tímidos.
3. **Ganchos Cognitivos Situacionales**:
   * Inicia tu sesión con un enigma o caso contradictorio antes de impartir teoría. El cerebro solo retiene información cuando percibe un vacío o misterio que necesita resolver.
4. **Validación del Error como Oportunidad**:
   * Si un estudiante comete una falla, utilízala con preguntas socráticas para que el grupo analice la lógica del razonamiento sin emitir juicios negativos.

> *¿Te gustaría que diseñemos juntos una actividad práctica para tu próxima sesión?*` + relatedConcept;
        }

        // CASO 6: SIN FRAGMENTO RAG ESPECÍFICO
        if (retrievedItems.length === 0) {
            return `### 💡 Orientación Académica de Elprofe 360

Actualmente no cuento con un fragmento indexado con esa formulación exacta, pero puedo orientarte en principios pedagógicos clave.

**Temas Académicos Destacados**:
* **Constructivismo**: *Jean Piaget* (asimilación/acomodación) y *Lev Vygotsky* (Zona de Desarrollo Próximo y andamiaje).
* **Conductismo**: *B.F. Skinner* (refuerzo positivo/negativo) vs *Pavlov*.
* **Inclusión**: *Diseño Universal para el Aprendizaje (DUA)* y derribo del mito del alumno promedio.
* **Metacognición & Aprendizaje Activo**: ABP, Aula Invertida (Flipped Classroom) y Gamificación.

¿Deseas profundizar en alguno de estos conceptos para tu perfil de **${profile}**?`;
        }

        // CASO 7: RESPUESTA RAG ACADÉMICA ESTRUCTURADA
        const primary = retrievedItems[0];
        let response = "";

        response += `### 📚 ${primary.concepto}\n\n`;
        response += `> **Área**: ${primary.tema} — ${primary.subtema}  \n`;
        response += `> **Perfil Adaptado**: ${profile}\n\n`;

        // DEFINICIÓN / EXPLICACIÓN
        response += `#### 📌 Definición Académica\n${primary.definicion}\n\n`;
        if (primary.autores && primary.autores.length > 0) {
            response += `**Autores / Teóricos Clave**: ${primary.autores.join(", ")}.\n\n`;
        }

        // COMPARACIÓN
        if (intent === "comparison" || (primary.comparaciones && primary.comparaciones.length > 0 && intent !== "example")) {
            response += `#### ⚖️ Comparación y Distinción Clave\n`;
            if (primary.comparaciones && primary.comparaciones.length > 0) {
                primary.comparaciones.forEach(comp => {
                    response += `* **Frente a ${comp.con}**: ${comp.diferencia}\n`;
                });
            } else if (retrievedItems.length > 1) {
                const sec = retrievedItems[1];
                response += `* **Frente a ${sec.concepto}**: Mientras ${primary.concepto} se enfoca en *${primary.subtema}*, ${sec.concepto} enfatiza *${sec.subtema}*.\n`;
            }
            response += `\n`;
        }

        // ERRORES FRECUENTES
        if (primary.errores_frecuentes && primary.errores_frecuentes.length > 0) {
            response += `#### ⚠️ Errores Frecuentes a Evitar\n`;
            primary.errores_frecuentes.forEach(err => {
                response += `* ${err}\n`;
            });
            response += `\n`;
        }

        // APLICACIÓN PRÁCTICA SEGÚN PERFIL
        response += `#### 🛠️ Aplicación Práctica para ${profile}\n`;
        if (profile.includes("Organizacional") || profile.includes("Líder") || profile.includes("Supervisor")) {
            if (primary.aplicaciones_organizacionales && primary.aplicaciones_organizacionales.length > 0) {
                primary.aplicaciones_organizacionales.forEach(app => response += `* ${app}\n`);
            } else {
                primary.aplicaciones_educativas.forEach(app => response += `* ${app}\n`);
            }
        } else {
            primary.aplicaciones_educativas.forEach(app => response += `* ${app}\n`);
        }
        response += `\n`;

        // EJEMPLO ILUSTRATIVO
        if (primary.ejemplos && primary.ejemplos.length > 0) {
            response += `#### 🌟 Ejemplo de la Vida Real\n* "${primary.ejemplos[0]}"\n\n`;
        }

        // ACTIVIDAD SUGERIDA
        if (primary.actividades && primary.actividades.length > 0) {
            response += `#### 📝 Actividad Recomendada\n* ${primary.actividades[0]}\n\n`;
        }

        // FUENTES Y TRAZABILIDAD
        if (primary.fuentes && primary.fuentes.length > 0) {
            response += `---\n<small style="opacity: 0.8;">📖 **Fuente Académica**: ${primary.fuentes[0].autor} (${primary.fuentes[0].ano}). *${primary.fuentes[0].titulo}*.</small>`;
        }

        return response;
    }

    // ------------------------------------------------------------------------
    // 6. MODO DOCENTE / TUTOR INTERACTIVO
    // ------------------------------------------------------------------------
    generateTutorQuestion(retrievedItems) {
        const item = retrievedItems[0] || (window.psicoeducaKnowledgeBase ? window.psicoeducaKnowledgeBase[0] : null);
        if (!item) return "¡Hola! ¿Qué concepto te gustaría que analicemos hoy?";

        return `### 🎓 Modo Tutor Activado

Tomando como base el concepto de **${item.concepto}**:

> **Pregunta de Reflexión Académica**:
> *"¿De qué manera implementarías este concepto para resolver una situación donde los participantes muestran baja motivación o resistencia al aprendizaje?"*

Tómate tu tiempo para responder. Analizaré tu planteamiento y te brindaré retroalimentación constructiva.`;
    }

    // ------------------------------------------------------------------------
    // 7. PROCESO PRINCIPAL DE RESPUESTA (HYBRID DISPATCHER)
    // ------------------------------------------------------------------------
    async processUserMessage(userQuery, userState = {}) {
        // 1. Resolver anáfora y contexto
        const resolvedQuery = this.resolveAnaphora(userQuery);

        // 2. Clasificar intención y perfil
        const intent = this.classifyIntent(resolvedQuery);
        const profile = this.resolveProfile(resolvedQuery, userState);

        // 3. Recuperar conocimiento RAG
        const retrievedItems = this.retrieveKnowledge(resolvedQuery);

        let finalReply = "";

        // Si es Modo Tutor explícito
        if (intent === "teacher_mode" || this.currentMode === "tutor") {
            finalReply = this.generateTutorQuestion(retrievedItems);
        } else {
            // Sintetizar respuesta localmente (Autónomo RAG)
            finalReply = this.synthesizeResponse(resolvedQuery, intent, profile, retrievedItems);
        }

        // Guardar en memoria conversacional
        this.memory.push({
            query: userQuery,
            resolvedQuery,
            intent,
            profile,
            retrievedTopic: retrievedItems[0] ? retrievedItems[0].concepto : null,
            reply: finalReply,
            timestamp: Date.now()
        });

        if (this.memory.length > this.maxMemory) this.memory.shift();

        return {
            reply: finalReply,
            meta: {
                intent,
                profile,
                retrievedCount: retrievedItems.length,
                topTopic: retrievedItems[0] ? retrievedItems[0].concepto : null
            }
        };
    }
}

// Instancia global
if (typeof window !== 'undefined') {
    window.elprofeEngine = new ElprofeEngine();
}
