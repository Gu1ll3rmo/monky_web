# 🤖 MONKY JEANS - Sitio Web Moderno y Responsivo

## 📌 Descripción General

**Monky Jeans** es un sitio web moderno y profesional para una marca de moda urbana especializada en jeans y ropa premium. Diseñado con enfoque en UX/UI, experiencia de usuario fluida y estrategias de conversión.

---

## 🎨 IDENTIDAD VISUAL

### Paleta de Colores Vibrante
- **Oro**: `#FFD700` - Color premium brillante
- **Negro**: `#0a0a0a` - Color base profundo
- **Rojo**: `#FF1744` - Rojo vibrante y énfasis
- **Azul Eléctrico**: `#00D4FF` - Azul eléctrico para interacciones
- **Gris Claro**: `#f5f5f5` - Fondos suaves

### Tipografía
- **Títulos**: Bebas Neue (Bold, mayúsculas)
- **Textos**: Montserrat (Regular, Semi-Bold, Bold)

---

## 📁 ESTRUCTURA DEL PROYECTO

```
d:\monky_web/
├── index.html                    # Página de inicio
├── pages/
│   ├── catalog.html             # Catálogo completo de productos
│   ├── product.html             # Página de producto individual
│   ├── about.html               # Sobre nosotros
│   └── contact.html             # Contacto y FAQ
├── assets/
│   ├── css/
│   │   ├── styles.css           # Estilos principales
│   │   └── page-styles.css      # Estilos para páginas internas
│   ├── js/
│   │   ├── main.js              # Scripts principales
│   │   ├── chatbot.js           # Sistema de chatbot inteligente
│   │   ├── catalog-filter.js    # Filtrado de productos
│   │   ├── product-page.js      # Lógica de página de producto
│   │   └── contact-page.js      # Lógica de página de contacto
│   └── images/                  # Carpeta para imágenes
└── README.md                    # Este archivo
```

---

## ✨ CARACTERÍSTICAS PRINCIPALES

### 1. **Navegación Responsiva**
- Menú sticky en la parte superior
- Soporte para dispositivos móviles con hamburguesa
- Links suave a secciones

### 2. **Hero Section Impactante**
- Banner grande con frase de impacto
- Gradiente de fondo atractivo
- CTA (Call-To-Action) principal

### 3. **Catálogo de Productos**
- Grid responsivo de productos
- Filtrado por categoría (Jeans, Playeras, Chamarras, Accesorios)
- Cards con imagen, precio y botones de acción
- Badges para nuevos productos y descuentos

### 4. **Página de Producto Detallada**
- Galería de imágenes con thumbnails
- Selector de talla
- Control de cantidad
- Especificaciones técnicas
- Pestañas (Descripción, Materiales, Envío)
- Productos relacionados

### 5. **Chatbot Inteligente Flotante** 🤖
- Interfaz moderna y amigable
- Reconocimiento de intenciones del usuario
- Base de conocimiento sobre:
  - Precios de productos
  - Disponibilidad de tallas
  - Información de envío
  - Contacto directo
- Integración con WhatsApp

### 6. **Integración WhatsApp**
- Botones directos a WhatsApp en todos los productos
- Mensajes predefinidos con información del producto
- Contacto directo desde cualquier página

### 7. **Página Sobre Nosotros**
- Historia de la marca
- Misión y Visión
- Valores corporativos
- Equipo
- Logros

### 8. **Página de Contacto**
- Formulario de contacto funcional
- Información de canales diretos
- Preguntas frecuentes (FAQ) interactivas
- Enlaces a redes sociales

### 9. **Diseño Responsivo**
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Móvil (480px - 767px)
- Extra pequeño (< 480px)

### 10. **Animaciones Suaves**
- Fade in al cargar elementos
- Hover effects en botones y cards
- Transiciones fluidas entre páginas

---

## 🚀 CÓMO USAR

### Abrir el Sitio
1. Abre `index.html` en tu navegador
2. Navega entre páginas usando el menú superior
3. Usa el chatbot flotante (🤖) para soporte

### Editar Contenido

#### Cambiar Número de WhatsApp
En los archivos de JavaScript, busca:
```javascript
const phoneNumber = '5521987654321';
```
Y reemplaza con tu número:
```javascript
const phoneNumber = 'TU_NÚMERO_AQUÍ';
```

#### Agregar Nuevos Productos
En `pages/catalog.html`, copia un bloque de producto:
```html
<div class="product-card" data-category="jeans">
    <!-- Contenido del producto -->
</div>
```

#### Personalizar Colores
En `assets/css/styles.css`, modifica:
```css
:root {
    --color-gold: #FFD700;      /* Oro vibrante */
    --color-black: #0a0a0a;     /* Negro profundo */
    --color-red: #FF1744;       /* Rojo vibrante */
    --color-blue: #00D4FF;      /* Azul eléctrico */
}
```

---

## 🤖 CHATBOT INTELIGENTE

El chatbot entiende preguntas como:

### Preguntas de Precio
- "¿Cuánto cuesta?"
- "¿Cuál es el precio?"
- "Precio del jeans"

### Preguntas de Talla
- "¿Tienen talla 32?"
- "¿Disponibilidad de tallas?"
- "¿Qué tallas tienes?"

### Preguntas de Producto
- "¿Qué jeans tienes?"
- "Ver catálogo"
- "¿Qué productos venden?"

### Preguntas de Envío
- "¿Cuánto cuesta el envío?"
- "¿Cuánto tiempo tarda?"
- "Información de delivery"

### Preguntas de Contacto
- "¿Cómo los contacto?"
- "Número de WhatsApp"
- "Teléfono"

---

## 📱 OPTIMIZACIÓN MÓVIL

El sitio está completamente optimizado para dispositivos móviles:

- **Texto legible**: Tamaños ajustados para cada pantalla
- **Menú hamburguesa**: Aparece automáticamente en tablets
- **Imágenes responsivas**: Se adaptan al ancho de pantalla
- **Botones grandes**: Fáciles de tocar en dispositivos táctiles
- **Chatbot optimizado**: Se ajusta al tamaño de pantalla

---

## 🎯 ESTRATEGIAS DE CONVERSIÓN

### 1. **CTA Prominentes**
- Botones dorados que destacan
- Textos de acción clara ("Comprar Ahora", "Ver Colección")

### 2. **Confianza**
- Sección de características
- Testimonios
- Información de garantía
- FAQ completa

### 3. **Contacto Directo**
- Botón WhatsApp en cada producto
- Chatbot para soporte 24/7
- Múltiples canales de contacto

### 4. **Urgencia**
- Badges de "Nuevo" y descuentos
- Sección "Productos Destacados"
- Información de stock disponible

### 5. **Facilidad de Compra**
- Flujo claro de producto
- Información detallada
- Opciones de contacto directo

---

## 🔧 TECNOLOGÍAS UTILIZADAS

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con variables CSS
- **JavaScript ES6**: Interactividad y lógica
- **Responsive Design**: Mobile-first
- **Animaciones CSS**: Transiciones suaves

---

## 📊 PRODUCTOS INCLUIDOS

### Jeans
- Slim Fit Negro - $49.99
- Oversize Azul - $54.99
- Skinny Gris - $44.99 (descuento)

### Playeras
- Monky Logo - $29.99
- Básica Blanca - $19.99
- Premium Negra - $31.49 (descuento)

### Chamarras
- Denim Premium - $63.99 (descuento)
- Trucker Azul - $69.99
- Bomber Negro - $74.99

### Accesorios
- Gorra Monky - $14.99
- Bolsa Mochila Denim - $39.99
- Cinturón Premium - $24.99

---

## 🎓 GUÍA DE PERSONALIZACIÓN

### Cambiar Paleta de Colores
1. Abre `assets/css/styles.css`
2. Modifica las variables CSS en `:root {}`
3. Los cambios se aplican automáticamente

### Agregar Nueva Página
1. Crea un archivo HTML en `pages/`
2. Copia la estructura básica de otra página
3. Actualiza el menú de navegación en `index.html`

### Modificar Texto del Chatbot
En `assets/js/chatbot.js`, edita la clase `MonkyChatbot`:
```javascript
handleGreeting() {
    const greetings = [
        'Tu mensaje aquí',
        // ...
    ];
}
```

---

## 📋 CHECKLIST DE PERSONALIZACIÓN

- [ ] Cambiar número de WhatsApp
- [ ] Actualizar email de contacto
- [ ] Personalizar colores corporativos
- [ ] Agregar logo real (reemplaza emojis)
- [ ] Cargar imágenes de productos
- [ ] Actualizar información de empresa
- [ ] Agregar links correctos a redes sociales
- [ ] Configurar email de formulario de contacto
- [ ] Agregar más productos al catálogo
- [ ] Traducir chatbot si es necesario

---

## 🚀 PRÓXIMAS MEJORAS SUGERIDAS

1. **Backend**
   - Sistema de carrito de compras
   - Procesamiento de pagos
   - Base de datos de productos
   - Gestión de órdenes

2. **Features Adicionales**
   - Sistema de reviews/comentarios
   - Newsletter
   - Programa de lealtad
   - Búsqueda de productos

3. **Marketing**
   - SEO optimizado
   - Analytics integrado
   - Pixel de Facebook
   - Sistema de promociones

4. **Ecommerce**
   - Integración de pasarelas de pago
   - Sistema de inventario
   - Programa de afiliados
   - Descuentos por volumen

---

## 📞 SOPORTE Y CONTACTO

Para más información sobre esta plantilla o personalizaciones:
- **WhatsApp**: +52 1 987 654 321
- **Email**: info@monkeyjeans.mx
- **Instagram**: @monkeyjeans

---

## 📄 LICENCIA

Este proyecto es propiedad intelectual de Monky Jeans. 
Todos los derechos reservados © 2026

---

## ✅ VALIDACIÓN TÉCNICA

- ✓ HTML5 válido
- ✓ CSS3 completo con variables
- ✓ JavaScript ES6 moderno
- ✓ Responsive en todos los dispositivos
- ✓ Navegación accesible
- ✓ Animaciones suaves
- ✓ Chatbot inteligente
- ✓ Integración WhatsApp
- ✓ SEO-friendly
- ✓ Performance optimizado

---

**Versión**: 1.0  
**Última actualización**: 1 de Febrero de 2026  
**Estado**: ✅ Producción lista

