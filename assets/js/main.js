// ============================================
// MONKY JEANS - SCRIPT PRINCIPAL
// ============================================

// INICIALIZACIÓN AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeResponsiveMenu();
});

// ============================================
// NAVEGACIÓN
// ============================================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Cerrar menú hamburguesa si está abierto
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
}

// MENÚ RESPONSIVO
function initializeResponsiveMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// ============================================
// FUNCIONES DE WHATSAPP
// ============================================
function sendWhatsAppMessage(productName, price, productId) {
    const phoneNumber = '5521987654321'; // Cambia esto por tu número de WhatsApp
    const message = encodeURIComponent(
        `Hola, me interesa el producto: "${productName}" con precio ${price}. ¿Me das más información?`
    );
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

function sendWhatsAppFromProduct(productName, price) {
    const phoneNumber = '5521987654321';
    const message = encodeURIComponent(
        `¡Hola! Me interesa comprar: "${productName}" - ${price}. ¿Cuál es la talla disponible?`
    );
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// ============================================
// CHATBOT FLOTANTE
// ============================================
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('active');
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (userInput.value.trim() === '') return;
    
    // Agregar mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerHTML = `<p>${userInput.value}</p>`;
    chatMessages.appendChild(userMessage);
    
    // Obtener respuesta del bot
    const botResponse = getBotResponse(userInput.value.toLowerCase());
    
    // Simular delay de respuesta
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.innerHTML = `<p>${botResponse}</p>`;
        chatMessages.appendChild(botMessage);
        
        // Scroll al último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
    
    // Limpiar input
    userInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    // Base de conocimiento del chatbot
    const responses = {
        'hola': '¡Hola! Bienvenido a Monky Jeans. ¿En qué puedo ayudarte? Puedo responder sobre precios, tallas, productos y más.',
        'precio': 'Nuestros precios varían según el producto. Los jeans van desde $29.99 a $79.99. ¿Cuál te interesa específicamente?',
        'talla': '¿Qué talla buscas? Tenemos desde XS hasta XXL. Cuéntame la talla y te digo si tenemos disponible.',
        'jeans': 'Tenemos una amplia variedad de jeans: Slim Fit, Oversize, Skinny, etc. ¿Qué estilo prefieres?',
        'envío': 'Hacemos envíos a todo el país. Los costos de envío dependen de tu ubicación. ¿A qué ciudad necesitas?',
        'contacto': 'Puedes contactarnos directamente por WhatsApp al +521 987 654 321 o visitando nuestras redes sociales.',
        'promo': 'Tenemos descuentos especiales. ¡Revisa nuestro catálogo para ver todos los productos en promoción!',
        'duda': 'Claro, estoy aquí para ayudarte. ¿Cuál es tu pregunta?',
        'ayuda': 'Puedo ayudarte con: información de productos, precios, tallas, envíos y contacto. ¿Qué necesitas?',
        'horario': 'Atendemos de lunes a domingo de 9:00 AM a 9:00 PM. ¿En qué puedo ayudarte?',
    };
    
    // Buscar respuesta en la base de datos
    for (const [key, value] of Object.entries(responses)) {
        if (userMessage.includes(key)) {
            return value;
        }
    }
    
    // Respuesta por defecto
    return 'Entiendo tu pregunta. Para más detalles específicos, te recomiendo contactarnos directamente por WhatsApp. ¿Te gustaría que abra WhatsApp para ti?';
}

// Permitir enviar mensaje con Enter
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

// ============================================
// OBSERVADOR DE SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos al cargar
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.product-card, .feature-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll personalizado
function smoothScroll(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Log inicial
console.log('%c🤖 Monky Jeans - Sistema Activo', 'color: #00D4FF; font-size: 16px; font-weight: bold;');
