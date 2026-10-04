// ============================================================================
// PSICOEDUCA ACADEMY - MOTOR ASISTENTE ACADÉMICO INTELIGENTE (ELPROFE 360)
// Arquitectura RAG (Retrieval-Augmented Generation), Clasificación de Intención,
// Resolución de Perfiles, Memoria Conversacional e Inferencia Híbrida.
// ============================================================================

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
        const q = query.toLowerCase();
        
        if (q.includes("modo tutor") || q.includes("modo docente") || q.includes("ponme a prueba") || q.includes("Cuestióname") || q.includes("hazme una pregunta")) {
            return "teacher_mode";
        }
        if (q.includes("diferencia") || q.includes("compara") || q.includes("vs") || q.includes("versus") || q.includes("distinto")) {
            return "comparison";
        }
        if (q.includes("ejemplo") || q.includes("casos prácticos") || q.includes("dame un caso")) {
            return "example";
        }
        if (q.includes("cómo aplico") || q.includes("cómo implementar") || q.includes("estrategia") || q.includes("actividad") || q.includes("pasos para")) {
            return "application";
        }
        if (q.includes("problema") || q.includes("pierden") || q.includes("distraen") || q.includes("no participan") || q.includes("tengo un caso")) {
            return "problem_solving";
        }
        if (q.includes("qué es") || q.includes("defina") || q.includes("concepto de") || q.includes("significa")) {
            return "definition";
        }
        if (q.includes("quién fue") || q.includes("biografía") || q.includes("obras de") || q.includes("autor")) {
            return "author_info";
        }
        return "explanation";
    }

    // ------------------------------------------------------------------------
    // 2. RESOLUTOR DE PERFIL DE USUARIO (PROFILE RESOLVER)
    // ------------------------------------------------------------------------
    resolveProfile(query, userState = {}) {
        const q = query.toLowerCase();
        
        if (q.includes("empresa") || q.includes("capacitación") || q.includes("empleados") || q.includes("formador empresarial")) {
            return "Formador Organizacional";
        }
        if (q.includes("equipo") || q.includes("liderar") || q.includes("supervisar") || q.includes("colaboradores") || q.includes("líder")) {
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
            if (userState.userObjective.includes("formador")) return "Formador Organizacional";
            if (userState.userObjective.includes("liderar")) return "Líder / Supervisor";
            if (userState.userObjective.includes("empleo") || userState.userObjective.includes("vocacional")) return "Desarrollo Laboral";
        }
        return this.currentProfile || "Docente / Educador";
    }

    // ------------------------------------------------------------------------
    // 3. RECUPERADOR RAG & RANKING LÉXICO-SEMÁNTICO
    // ------------------------------------------------------------------------
    retrieveKnowledge(query) {
        const kb = (typeof window !== 'undefined' && window.psicoeducaKnowledgeBase) ? window.psicoeducaKnowledgeBase : [];
        if (!kb || kb.length === 0) return [];

        const normalizedQuery = query.toLowerCase();
        const tokens = normalizedQuery.split(/\s+/).filter(t => t.length > 3);

        const scored = kb.map(item => {
            let score = 0;
            const fullText = `${item.tema} ${item.subtema} ${item.concepto} ${item.definicion} ${(item.autores||[]).join(' ')} ${(item.conceptos_relacionados||[]).join(' ')} ${(item.errores_frecuentes||[]).join(' ')}`.toLowerCase();

            // Coincidencia exacta de concepto o autor
            if (item.concepto && normalizedQuery.includes(item.concepto.toLowerCase())) score += 50;
            if (item.autores && item.autores.some(a => normalizedQuery.includes(a.toLowerCase()))) score += 40;
            if (item.tema && normalizedQuery.includes(item.tema.toLowerCase())) score += 30;
            if (item.subtema && normalizedQuery.includes(item.subtema.toLowerCase())) score += 20;

            // Coincidencia por tokens
            tokens.forEach(token => {
                if (fullText.includes(token)) score += 5;
            });

            return { item, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return scored.filter(s => s.score > 8).map(s => s.item).slice(0, 3);
    }

    // ------------------------------------------------------------------------
    // 4. MEMORIA CONVERSACIONAL Y RESOLUCIÓN DE ANÁFORAS
    // ------------------------------------------------------------------------
    resolveAnaphora(query) {
        let enhancedQuery = query;
        if (this.memory.length > 0) {
            const lastTurn = this.memory[this.memory.length - 1];
            const lower = query.toLowerCase();
            
            // Si el usuario pregunta "¿cómo lo aplico?" o "ejemplos de eso"
            if (lower.includes("lo aplico") || lower.includes("de eso") || lower.includes("cómo funciona eso") || lower.includes("y él")) {
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
        if (retrievedItems.length === 0) {
            return `### 💡 Orientación de Elprofe 360

Actualmente no dispongo de un fragmento específico en la Base de Conocimiento de PsicoEduca para responder en detalle sobre esa consulta exacta.

**Recomendación**:
* Intenta consultar sobre conceptos como: *Constructivismo, Vygotsky, Piaget, Skinner, Refuerzo Negativo vs Castigo, DUA, Metacognición, Educación Siglo XXI, o Liderazgo*.
* ¿Te gustaría que exploremos alguno de estos temas clave para tu perfil de **${profile}**?`;
        }

        const primary = retrievedItems[0];
        let response = "";

        // Encabezado contextual
        response += `### 📚 ${primary.concepto}\n\n`;
        response += `> **Área**: ${primary.tema} — ${primary.subtema}  \n`;
        response += `> **Perfil Adaptado**: ${profile}\n\n`;

        // INTENCIÓN: DEFINICIÓN / EXPLICACIÓN
        if (intent === "definition" || intent === "explanation") {
            response += `#### 📌 Definición Académica\n${primary.definicion}\n\n`;
            if (primary.autores && primary.autores.length > 0) {
                response += `**Autores / Teóricos Clave**: ${primary.autores.join(", ")}.\n\n`;
            }
        }

        // INTENCIÓN: COMPARACIÓN
        if (intent === "comparison" || (primary.comparaciones && primary.comparaciones.length > 0 && intent !== "example")) {
            response += `#### ⚖️ Comparación y Distinción Conceptualmente Clave\n`;
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

        // SECCIÓN DE ERRORES FRECUENTES (SI APLICA)
        if (primary.errores_frecuentes && primary.errores_frecuentes.length > 0) {
            response += `#### ⚠️ Errores Frecuentes a Evitar\n`;
            primary.errores_frecuentes.forEach(err => {
                response += `* ${err}\n`;
            });
            response += `\n`;
        }

        // APLICACIÓN PRÁCTICA SEGÚN EL PERFIL DEL USUARIO
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
            response += `#### 📝 Actividad de Cierre Recomendada\n* ${primary.actividades[0]}\n\n`;
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
