/**
 * PSICOEDUCA ACADEMY - Sistema de Evaluaciones Interactivas
 * Archivo: js/evaluations_data.js
 * Definición académica, dimensiones, criterios de dominio y especificaciones de los 4 instrumentos.
 */

window.EVALUATIONS_DATA = {
    settings: {
        totalQuestionsPerTest: 40,
        questionsPerDimension: 10,
        timeLimitSeconds: 35 * 60, // 35 minutos
        pointsPerQuestion: 2.5,
        maxScore: 100,
        passingScore: 80,
        difficultyDistribution: {
            basica: 12,
            intermedia: 18,
            avanzada: 10
        },
        cognitiveDistribution: {
            conceptual: 10,
            analisis: 10,
            aplicacion: 10,
            problema: 10
        }
    },

    masteryLevels: [
        {
            min: 0,
            max: 59.99,
            id: 'inicial',
            name: 'Inicial',
            color: '#ef4444',
            badgeBg: 'rgba(239, 68, 68, 0.15)',
            description: 'Requiere fortalecer conocimientos fundamentales y conceptos base.'
        },
        {
            min: 60,
            max: 79.99,
            id: 'en_desarrollo',
            name: 'En desarrollo',
            color: '#f59e0b',
            badgeBg: 'rgba(245, 158, 11, 0.15)',
            description: 'Presenta conocimientos clave, pero necesita consolidar su aplicación en contextos reales.'
        },
        {
            min: 80,
            max: 89.99,
            id: 'competente',
            name: 'Competente',
            color: '#0ea5e9',
            badgeBg: 'rgba(14, 165, 233, 0.15)',
            description: 'Demuestra dominio funcional y capacidad de aplicación sólida en diversos escenarios.'
        },
        {
            min: 90,
            max: 100,
            id: 'avanzado',
            name: 'Avanzado',
            color: '#10b981',
            badgeBg: 'rgba(16, 185, 129, 0.15)',
            description: 'Demuestra comprensión profunda, capacidad de análisis crítico y resolución experta.'
        }
    ],

    rewardsConfig: {
        completionXP: 20,
        tiers: [
            { minScore: 80, maxScore: 89.99, bonusXP: 30, tierId: 'tier_80' },
            { minScore: 90, maxScore: 99.99, bonusXP: 50, tierId: 'tier_90' },
            { minScore: 100, maxScore: 100, bonusXP: 75, tierId: 'tier_100' }
        ]
    },

    instruments: {
        formativa: {
            id: 'formativa',
            title: 'Evaluación Formativa',
            icon: 'ph-pencil-line',
            badgeId: 'maestro_evaluacion',
            badgeName: 'MAESTRO DE LA EVALUACIÓN',
            category: 'Competencias pedagógicas',
            shortDesc: 'Domina las técnicas de evaluación continua, retroalimentación y metacognición.',
            generalObjective: 'Evaluar la capacidad del participante para comprender, diseñar, implementar y analizar procesos de evaluación del aprendizaje, utilizando diferentes estrategias e instrumentos para identificar avances, dificultades y oportunidades de mejora.',
            competence: 'Capacidad de diseñar y utilizar estrategias de evaluación para reconocer el nivel de aprendizaje, proporcionar retroalimentación descriptiva y orientar decisiones de mejoramiento pedagógico y formativo.',
            dimensions: {
                fundamentos: {
                    id: 'fundamentos',
                    title: 'Fundamentos de Evaluación',
                    desc: 'Concepto de evaluación, diagnóstica, formativa, sumativa, criterial, normativa, por competencias y principios rectores.'
                },
                tecnicas: {
                    id: 'tecnicas',
                    title: 'Técnicas e Instrumentos de Evaluación',
                    desc: 'Rúbricas analíticas y holísticas, listas de cotejo, escalas de valoración, portafolios, observación y pruebas de desempeño.'
                },
                retroalimentacion: {
                    id: 'retroalimentacion',
                    title: 'Retroalimentación y Metacognición',
                    desc: 'Retroalimentación descriptiva y oportuna, metacognición, autorregulación, aprendizaje autónomo y orientación al error constructivo.'
                },
                aplicada: {
                    id: 'aplicada',
                    title: 'Evaluación Aplicada',
                    desc: 'Evaluación auténtica en escenarios reales, toma de decisiones pedagógicas, planes de mejora y seguimiento de transferencia.'
                }
            }
        },

        pedagogia: {
            id: 'pedagogia',
            title: 'Fundamentos de Pedagogía',
            icon: 'ph-books',
            badgeId: 'arquitecto_aprendizaje',
            badgeName: 'ARQUITECTO DEL APRENDIZAJE',
            category: 'Conocimientos',
            shortDesc: 'Fundamentos históricos, epistemológicos y teóricos de las ciencias de la educación.',
            generalObjective: 'Evaluar el conocimiento de los fundamentos históricos, epistemológicos y teóricos de la pedagogía, así como la capacidad para relacionar diferentes corrientes y teorías del aprendizaje con situaciones educativas reales.',
            competence: 'Capacidad de comprender las principales teorías pedagógicas, diferenciar sus fundamentos epistemológicos y utilizarlas para interpretar y orientar procesos educativos integrales.',
            dimensions: {
                historia: {
                    id: 'historia',
                    title: 'Historia y Epistemología Pedagógica',
                    desc: 'Evolución de la educación, escuela tradicional vs activa, pensamiento pedagógico moderno y relación entre pedagogía y sociedad.'
                },
                teorias: {
                    id: 'teorias',
                    title: 'Teorías del Aprendizaje',
                    desc: 'Conductismo, cognitivismo, constructivismo, teoría sociocultural, aprendizaje significativo, situado y procesamiento de información.'
                },
                autores: {
                    id: 'autores',
                    title: 'Autores y Modelos Pedagógicos',
                    desc: 'Piaget, Vygotsky, Ausubel, Bruner, Freire, Skinner, Dewey, Bandura, Bloom y sus modelos aplicados.'
                },
                analisis_aplicado: {
                    id: 'analisis_aplicado',
                    title: 'Análisis Pedagógico Aplicado',
                    desc: 'Selección de enfoques, relación teoría-práctica, inclusión, diversidad de ritmos, mediación pedagógica y crítica docente.'
                }
            }
        },

        andragogia: {
            id: 'andragogia',
            title: 'Andragogía Avanzada',
            icon: 'ph-users-four',
            badgeId: 'mentor_aprendizaje',
            badgeName: 'MENTOR DEL APRENDIZAJE',
            category: 'Perfil profesional',
            shortDesc: 'Estrategias y principios avanzados para la formación, motivación y aprendizaje del adulto.',
            generalObjective: 'Evaluar la comprensión de los procesos de aprendizaje adulto y la capacidad para diseñar experiencias de formación que reconozcan la autonomía, experiencia, motivaciones y necesidades de los participantes.',
            competence: 'Capacidad de diseñar, facilitar y evaluar procesos de aprendizaje adulto que permitan transferir conocimientos y habilidades a situaciones personales, educativas y laborales.',
            dimensions: {
                fundamentos_adulto: {
                    id: 'fundamentos_adulto',
                    title: 'Fundamentos del Aprendizaje Adulto',
                    desc: 'Modelo andragógico de Knowles, autoconcepto, experiencia previa acumulada, disposición, orientación a problemas y autonomía.'
                },
                motivacion: {
                    id: 'motivacion',
                    title: 'Motivación y Autorregulación',
                    desc: 'Motivación intrínseca/extrínseca, aprendizaje autodirigido, barreras de aprendizaje en adultos y diálogo intergeneracional.'
                },
                experienciales: {
                    id: 'experienciales',
                    title: 'Estrategias Experienciales',
                    desc: 'Ciclo experiencial de Kolb, comunidades de práctica, aprendizaje situado en el trabajo y resolución colaborativa de problemas.'
                },
                transferencia: {
                    id: 'transferencia',
                    title: 'Transferencia y Aplicación',
                    desc: 'Transferencia laboral, entrenamiento on-the-job, modelo Kirkpatrick, acompañamiento, coaching y retorno de inversión formativa.'
                }
            }
        },

        didactica: {
            id: 'didactica',
            title: 'Didáctica Práctica',
            icon: 'ph-presentation-chart',
            badgeId: 'estratega_didactico',
            badgeName: 'ESTRATEGA DIDÁCTICO',
            category: 'Competencias pedagógicas',
            shortDesc: 'El arte y la ciencia de enseñar: planeación, metodologías activas y facilitación de aula.',
            generalObjective: 'Evaluar la capacidad del participante para planear, desarrollar y ajustar estrategias didácticas que faciliten la construcción de aprendizajes significativos y profundos.',
            competence: 'Capacidad de convertir los objetivos de aprendizaje en experiencias educativas organizadas, participativas, pertinentes, accesibles y evaluables.',
            dimensions: {
                planeacion: {
                    id: 'planeacion',
                    title: 'Planeación Didáctica',
                    desc: 'Secuencias didácticas (inicio, desarrollo, cierre), resultados de aprendizaje, alineación constructiva de Biggs y taxonomía de Bloom.'
                },
                estrategias: {
                    id: 'estrategias',
                    title: 'Estrategias Metodológicas',
                    desc: 'ABP, ABPr, gamificación, aprendizaje colaborativo, simulaciones, práctica guiada, microlearning y aula invertida.'
                },
                facilitacion: {
                    id: 'facilitacion',
                    title: 'Facilitación y Gestión de Grupos',
                    desc: 'Comunicación pedagógica asertiva, preguntas socráticas, manejo del tiempo, mediación de conflictos y participación activa.'
                },
                diseno_resolucion: {
                    id: 'diseno_resolucion',
                    title: 'Diseño y Resolución de Situaciones',
                    desc: 'Diseño Universal para el Aprendizaje (DUA), integración tecnológica (TPACK/SAMR), atención a la diversidad y situaciones críticas.'
                }
            }
        }
    },

    specialAchievements: [
        {
            id: 'primer_paso_pedagogico',
            name: 'Primer Paso Pedagógico',
            icon: 'ph-footprints',
            desc: 'Completaste tu primer instrumento de evaluación interactivo en PsicoEduca.'
        },
        {
            id: 'dominio_integral',
            name: 'Dominio Pedagógico Integral',
            icon: 'ph-trophy',
            desc: 'Aprobaste los cuatro instrumentos de evaluación pedagógica con 80 puntos o más.'
        },
        {
            id: 'excelencia_pedagogica',
            name: 'Excelencia Pedagógica',
            icon: 'ph-medal',
            desc: 'Obtuviste 90 puntos o más (nivel Avanzado) en cada uno de los cuatro instrumentos.'
        }
    ]
};
