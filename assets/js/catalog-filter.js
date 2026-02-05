// ============================================
// FILTRADO DE CATÁLOGO
// ============================================

function filterProducts(category) {
    // Actualizar botones activos
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filtrar productos
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
            product.style.animation = 'fadeInUp 0.4s ease-out';
        } else {
            if (product.getAttribute('data-category') === category) {
                product.style.display = 'block';
                product.style.animation = 'fadeInUp 0.4s ease-out';
            } else {
                product.style.display = 'none';
            }
        }
    });

    // Animación de aparición
    const visibleProducts = document.querySelectorAll('.product-card[style*="display: block"]');
    visibleProducts.forEach((product, index) => {
        product.style.animationDelay = `${index * 0.1}s`;
    });
}

// Inicializar filtrado
document.addEventListener('DOMContentLoaded', function() {
    const firstButton = document.querySelector('.filter-btn');
    if (firstButton) {
        firstButton.classList.add('active');
    }
});

