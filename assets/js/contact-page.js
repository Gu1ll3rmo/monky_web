// ============================================
// PÁGINA DE CONTACTO
// ============================================

// ENVIAR FORMULARIO DE CONTACTO
function sendContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validar campos
    if (!name || !email || !subject || !message) {
        alert('Por favor completa todos los campos requeridos');
        return;
    }

    // Aquí se enviaría el formulario a un servidor
    // Por ahora, mostramos un mensaje de confirmación
    alert(`✓ Mensaje enviado correctamente!\n\nNos pondremos en contacto pronto.\nGracias, ${name}!`);

    // Limpiar formulario
    document.querySelector('.contact-form').reset();
}

// TOGGLE FAQ
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allButtons = document.querySelectorAll('.faq-question');

    // Cerrar todas las respuestas
    allAnswers.forEach(ans => ans.style.display = 'none');
    allButtons.forEach(btn => btn.style.borderRadius = '4px');

    // Abrir la seleccionada
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        button.style.borderRadius = '4px 4px 0 0';
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Agregar listener de clic a todos los botones FAQ
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            toggleFAQ(this);
        });
    });
});
