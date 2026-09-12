const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.handler = async function (event, context) {
    // Solo permitir solicitudes POST
    if (event.httpMethod !== "POST") {
        return { 
            statusCode: 405, 
            body: JSON.stringify({ error: "Method Not Allowed" }) 
        };
    }

    try {
        const body = JSON.parse(event.body);
        const userMessage = body.message || body.contents?.[0]?.parts?.[0]?.text || "";

        if (!process.env.GEMINI_API_KEY) {
            console.error("No se encontró la GEMINI_API_KEY en Netlify");
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "El API Key no está configurado en el servidor." })
            };
        }

        // Inicializar la API de Gemini
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        // Inicializar el modelo con instrucciones de sistema
        const model = genAI.getGenerativeModel({ 
            model: "gemini-1.5-flash",
            systemInstruction: "Eres 'Elprofe', el chatbot oficial y experto en pedagogía, DUA (Diseño Universal para el Aprendizaje), gamificación, constructivismo y neuroeducación de la plataforma Psicoeduca Academy. Tu objetivo es asesorar a docentes para resolver problemas de aula con estrategias prácticas, empáticas y muy didácticas. Nunca te salgas del personaje."
        });

        // Generar la respuesta
        const result = await model.generateContent(userMessage);
        const responseText = result.response.text();
        
        // Devolver al frontend
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                // Habilitar CORS por si acaso (aunque Netlify suele manejarlo si está en el mismo dominio)
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            body: JSON.stringify({ reply: responseText })
        };

    } catch (error) {
        console.error("Error al procesar la IA:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Hubo un error de comunicación con la IA de Google.' })
        };
    }
};
