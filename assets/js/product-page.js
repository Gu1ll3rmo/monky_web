// ============================================
// PÁGINA DE PRODUCTO INDIVIDUAL
// ============================================

// CAMBIAR IMAGEN PRINCIPAL
function changeMainImage(element, emoji) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
    
    mainImage.textContent = emoji;
    mainImage.style.animation = 'fadeInUp 0.3s ease-out';
}

// SELECTOR DE TALLA
let selectedSize = null;

function selectSize(element, size) {
    const sizeButtons = document.querySelectorAll('.size-option');
    sizeButtons.forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    selectedSize = size;
}

// CANTIDAD
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) < 10) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// COMPRAR AHORA
function buyNow() {
    if (!selectedSize) {
        alert('Por favor selecciona una talla');
        return;
    }
    
    const quantity = document.getElementById('quantity').value;
    const productTitle = document.getElementById('productTitle').textContent;
    const productPrice = document.getElementById('productPrice').textContent;
    
    alert(`✓ Producto agregado al carrito\n\n${productTitle}\nTalla: ${selectedSize}\nCantidad: ${quantity}\nPrecio: ${productPrice}`);
}

// CONTACTAR POR WHATSAPP
function contactWhatsApp() {
    if (!selectedSize) {
        alert('Por favor selecciona una talla');
        return;
    }
    
    const quantity = document.getElementById('quantity').value;
    const productTitle = document.getElementById('productTitle').textContent;
    const productPrice = document.getElementById('productPrice').textContent;
    
    const phoneNumber = '5521987654321';
    const message = encodeURIComponent(
        `Hola, me interesa comprar:\n\n${productTitle}\nTalla: ${selectedSize}\nCantidad: ${quantity}\nPrecio: ${productPrice}\n\n¿Puedes confirmar disponibilidad?`
    );
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// ABRIR PESTAÑAS DE DETALLES
function openTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// OBTENER PARÁMETRO DE URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// CARGAR DATOS DEL PRODUCTO
document.addEventListener('DOMContentLoaded', function() {
    const productId = getUrlParameter('id');
    
    // Aquí puedes agregar lógica para cargar productos dinámicamente
    // Por ahora, usamos datos estáticos
    
    const products = {
        '1': {
            title: 'Jeans Slim Fit Negro',
            price: '$49.99',
            description: 'Estos jeans Slim Fit Negro ofrecen el ajuste perfecto para un look moderno y sofisticado.'
        },
        '2': {
            title: 'Jeans Oversize Azul',
            price: '$54.99',
            description: 'Jeans Oversize Azul con tendencia actual y máxima comodidad.'
        },
        '3': {
            title: 'Chamarra Denim Premium',
            price: '$63.99',
            description: 'Chamarra Denim Premium perfecta para cualquier ocasión.'
        },
        '4': {
            title: 'Playera Monky Logo',
            price: '$29.99',
            description: 'Playera con diseño exclusivo Monky y máxima comodidad.'
        }
    };
    
    if (productId && products[productId]) {
        const product = products[productId];
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('productPrice').textContent = product.price;
        document.getElementById('productDescription').textContent = product.description;
    }
});

// VALIDAR CANTIDAD EN INPUT
document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            if (parseInt(this.value) < 1) this.value = 1;
            if (parseInt(this.value) > 10) this.value = 10;
        });
    }
});
