// ============================================
// MONKY JEANS - CHATBOT INTELIGENTE
// ============================================

class MonkyChatbot {
    constructor() {
        this.products = this.loadProducts();
        this.messageCounter = 0;
    }

    // CARGAR PRODUCTOS
    loadProducts() {
        return {
            '1': {
                name: 'Jeans Slim Fit Negro',
                price: 49.99,
                sizes: ['28', '30', '32', '34', '36', '38'],
                description: 'Corte clásico con detalles modernos'
            },
            '2': {
                name: 'Jeans Oversize Azul',
                price: 54.99,
                sizes: ['28', '30', '32', '34', '36'],
                description: 'Tendencia actual, comodidad máxima'
            },
            '3': {
                name: 'Chamarra Denim Premium',
                price: 63.99,
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                description: 'Perfecta para cualquier ocasión'
            },
            '4': {
                name: 'Playera Monky Logo',
                price: 29.99,
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                description: 'Diseño exclusivo y cómodo'
            }
        };
    }

    // PROCESAR ENTRADA DEL USUARIO
    processUserInput(message) {
        const lowerMessage = message.toLowerCase().trim();
        
        // Detectar intención del usuario
        if (this.isGreeting(lowerMessage)) {
            return this.handleGreeting();
        } else if (this.isPriceQuestion(lowerMessage)) {
            return this.handlePriceQuestion(lowerMessage);
        } else if (this.isSizeQuestion(lowerMessage)) {
            return this.handleSizeQuestion(lowerMessage);
        } else if (this.isProductQuestion(lowerMessage)) {
            return this.handleProductQuestion(lowerMessage);
        } else if (this.isContactQuestion(lowerMessage)) {
            return this.handleContactQuestion();
        } else if (this.isShippingQuestion(lowerMessage)) {
            return this.handleShippingQuestion();
        } else if (this.isHelpRequest(lowerMessage)) {
            return this.handleHelpRequest();
        } else {
            return this.handleUnknownQuery(lowerMessage);
        }
    }

    // DETECTAR SALUDOS
    isGreeting(message) {
        return /hola|buenos|hi|hey|saludos|qué tal/.test(message);
    }

    handleGreeting() {
        const greetings = [
            '¡Hola! 👋 Bienvenido a Monky Jeans. Soy tu asistente digital. ¿En qué puedo ayudarte?',
            '¡Hola! 😊 Estoy aquí para ayudarte con preguntas sobre nuestros productos, precios y tallas.',
            '¡Saludos! 🎉 Cuéntame, ¿buscas información sobre algún producto específico?'
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // DETECTAR PREGUNTAS DE PRECIO
    isPriceQuestion(message) {
        return /precio|cuánto|costo|vale|cost/.test(message);
    }

    handlePriceQuestion(message) {
        // Buscar si menciona un producto específico
        for (const [id, product] of Object.entries(this.products)) {
            if (message.includes(product.name.toLowerCase())) {
                return `💰 El precio de "${product.name}" es $${product.price}. ¿Te interesa? Puedo ayudarte a comprar.`;
            }
        }

        return '💰 Nuestros precios varían según el producto:\n\n' +
               '• Playeras: desde $29.99\n' +
               '• Jeans: desde $49.99 a $54.99\n' +
               '• Chamarras: desde $63.99\n\n' +
               '¿Te interesa conocer el precio de algún producto específico?';
    }

    // DETECTAR PREGUNTAS DE TALLA
    isSizeQuestion(message) {
        return /talla|tamaño|size|disponible/.test(message);
    }

    handleSizeQuestion(message) {
        for (const [id, product] of Object.entries(this.products)) {
            if (message.includes(product.name.toLowerCase())) {
                return `📏 "${product.name}" disponible en tallas: ${product.sizes.join(', ')}. ¿Cuál necesitas?`;
            }
        }

        return '📏 Tenemos tallas desde XS hasta XXL. ¿Qué producto te interesa y qué talla buscas? Cuéntame para verificar disponibilidad.';
    }

    // DETECTAR PREGUNTAS DE PRODUCTO
    isProductQuestion(message) {
        return /jeans|playera|chamarra|producto|ropa|catálogo|colección/.test(message);
    }

    handleProductQuestion(message) {
        let response = '👕 Nuestros productos destacados:\n\n';
        
        for (const [id, product] of Object.entries(this.products)) {
            response += `🛍️ ${product.name}\n` +
                       `   Precio: $${product.price}\n` +
                       `   Tallas: ${product.sizes.join(', ')}\n\n`;
        }
        
        response += '¿Cuál de estos te interesa?';
        return response;
    }

    // DETECTAR PREGUNTAS DE CONTACTO
    isContactQuestion(message) {
        return /contacto|whatsapp|número|teléfono|comunicar/.test(message);
    }

    handleContactQuestion() {
        return '📱 Puedes contactarnos por:\n\n' +
               '✅ WhatsApp: +52 1 987 654 321\n' +
               '📧 Email: info@monkeyjeans.mx\n' +
               '📍 Redes sociales: @monkeyjeans\n\n' +
               'Atendemos de lunes a domingo, 9 AM a 9 PM 🕘';
    }

    // DETECTAR PREGUNTAS DE ENVÍO
    isShippingQuestion(message) {
        return /envío|despacho|delivery|llega|tiempo|costo de envío/.test(message);
    }

    handleShippingQuestion() {
        return '🚚 Información de envíos:\n\n' +
               '✓ Enviamos a todo el país\n' +
               '✓ Tiempo de entrega: 2-5 días hábiles\n' +
               '✓ Costos desde $50\n' +
               '✓ Envío gratis en compras mayores a $500\n\n' +
               '¿A qué estado necesitas envío?';
    }

    // DETECTAR SOLICITUDES DE AYUDA
    isHelpRequest(message) {
        return /ayuda|help|qué puedo|cómo|opciones|menú/.test(message);
    }

    handleHelpRequest() {
        return '🤖 Soy tu asistente Monky Bot. Puedo ayudarte con:\n\n' +
               '💰 Preguntas de precios\n' +
               '📏 Disponibilidad de tallas\n' +
               '👕 Catálogo de productos\n' +
               '🚚 Información de envíos\n' +
               '📱 Contacto y WhatsApp\n\n' +
               '¿En qué puedo ayudarte?';
    }

    // MANEJAR CONSULTAS DESCONOCIDAS
    handleUnknownQuery(message) {
        const responses = [
            'Entiendo tu pregunta. Para más detalles, te recomiendo escribirnos por WhatsApp 📱',
            'Mmm, no tengo esa información en mi base de datos. ¿Quieres que te conecte con nuestro equipo por WhatsApp? 💬',
            'Interesante pregunta. Nuestro equipo puede darte una respuesta más detallada. ¿Te paso por WhatsApp? 🤝',
            'No estoy seguro de eso. ¿Quieres que abra WhatsApp para contactar directamente? ✅'
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // GENERAR SUGERENCIAS
    getSuggestions() {
        return [
            '¿Cuánto cuesta el jeans?',
            '¿Tienen talla 32?',
            'Ver productos',
            'Contacto'
        ];
    }
}

// INICIALIZAR CHATBOT
const chatbot = new MonkyChatbot();

// Actualizar función sendMessage para usar el chatbot
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (userInput.value.trim() === '') return;
    
    // Agregar mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerHTML = `<p>${userInput.value}</p>`;
    chatMessages.appendChild(userMessage);
    
    const userText = userInput.value;
    
    // Obtener respuesta del chatbot inteligente
    const botResponse = chatbot.processUserInput(userText);
    
    // Simular delay de respuesta
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.innerHTML = `<p>${botResponse}</p>`;
        chatMessages.appendChild(botMessage);
        
        // Scroll al último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 400);
    
    // Limpiar input
    userInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Permitir enviar con Enter
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
