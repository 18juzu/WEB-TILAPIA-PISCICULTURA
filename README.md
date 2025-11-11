# 🌊 Tilapia Piscicultura - Documentación Completa de Animaciones

## 📋 Tabla de Contenidos
1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Sistema de Transiciones (Fondo Negro)](#sistema-de-transiciones-fondo-negro)
4. [Animaciones Interactivas](#animaciones-interactivas)
5. [Cómo Extender las Animaciones](#cómo-extender-las-animaciones)
6. [Solución de Problemas](#solución-de-problemas)
7. [Referencias Técnicas](#referencias-técnicas)

---

## 🎯 Descripción General

Este documento describe el **sistema completo de animaciones y transiciones** implementado en el sitio web de Tilapia Piscicultura. 

### 🎬 Características Principales:
- ✅ **Transiciones suave entre páginas** (sin flashazos blancos)
- ✅ **Animaciones de tipeo** en el héroe (letra por letra)
- ✅ **Efectos hover interactivos** en la navegación
- ✅ **Reveal animations** al desplazarse (scroll-triggered)
- ✅ **Fallback automático** sin dependencias externas
- ✅ **Organización modular** (archivos por sección)

### 🛠️ Stack Técnico:
- **GSAP 3.12.2** + ScrollTrigger (CDN, opcional)
- **IntersectionObserver** (fallback, sin dependencias)
- **CSS3 Animations** (keyframes reutilizables)
- **Vanilla JavaScript** (sin frameworks)

---

## 📁 Estructura del Proyecto

```
WEB-TILAPIA-PISCICULTURA/
│
├── 📄 HTML Pages (con scripts integrados)
│   ├── index.html                 # Página de inicio
│   ├── nosotros.html              # Página "Sobre Nosotros"
│   ├── contacto.html              # Página de contacto
│   └── peces.html                 # Página de productos/peces
│
├── 🎨 CSS (estilos + transiciones)
│   ├── style.css                  # Estilos inicio
│   ├── nosotros.css               # Estilos nosotros
│   ├── contacto.css               # Estilos contacto
│   ├── peces.css                  # Estilos peces
│   ├── nav.css                    # Estilos navegación
│   ├── video.css                  # Estilos héroe/video
│   └── animations/
│       └── keyframes.css           # Keyframes centralizados
│
├── 📜 HTML Components (cargados vía fetch)
│   ├── nav.html                   # Componente navegación
│   └── video.html                 # Componente héroe
│
├── 🎭 Animaciones JavaScript (NUEVO)
│   └── js/
│       ├── hero/
│       │   └── typing-animation.js          # Efecto de tipeo (h1, p)
│       ├── nav/
│       │   └── nav-hover-animations.js      # Hover en nav links
│       └── sections/
│           ├── about-animations.js          # Reveal de secciones "Sobre"
│           ├── products-animations.js       # Reveal + hover de productos
│           └── contact-animations.js        # Reveal + focus en formulario
│
├── 📁 assets/
│   └── img/                       # Imágenes del proyecto
│
└── 📖 README.md                   # Este archivo

```

---

## 🎨 Sistema de Transiciones (Fondo Negro)

### 🔄 Cómo Funciona

El sistema utiliza **transiciones de opacidad** para crear una experiencia de navegación sin flashazos blancos.

---

## 🎭 Animaciones Interactivas

### 1. 📝 Animación de Tipeo (Hero)

**Archivo:** `js/hero/typing-animation.js`

Anima el texto del héroe letra por letra.

**Selectores:** `.hero-title`, `.hero-subtitle`

---

### 2. 🖱️ Animaciones Hover en Navegación

**Archivo:** `js/nav/nav-hover-animations.js`

Efecto `scale(1.08)` en links.

**Selectores:** `.nav-link`, `.mobile-links a`

---

### 3. 📊 Animación de Secciones "Sobre"

**Archivo:** `js/sections/about-animations.js`

Reveal con fadeInUp, stagger, hover scale.

**Selectores:** `.about-section`, `.mission-vision`, `.values-section`, `.timeline-section`

---

### 4. 🎁 Animación de Productos/Galería

**Archivo:** `js/sections/products-animations.js`

Reveal stagger, hover zoom, info slide.

**Selectores:** `.product-card`, `.products-grid`

---

### 5. 📝 Animación de Formulario

**Archivo:** `js/sections/contact-animations.js`

Reveal, focus effect, ripple button.

**Selectores:** `input`, `textarea`, `button[type="submit"]`

---

## 🔧 Cómo Extender las Animaciones

### Paso 1: Crear archivo nuevo

```javascript
/**
 * Mi Nueva Sección - Animaciones
 */
(function() {
  'use strict';

  function initMiSecccionAnimations() {
    if (window.gsap && window.gsap.registerPlugin) {
      initGSAPAnimations();
    } else {
      initIntersectionAnimations();
    }
  }

  function initGSAPAnimations() {
    // Tu lógica GSAP
  }

  function initIntersectionAnimations() {
    // Tu lógica fallback
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initMiSecccionAnimations, 500);
    });
  } else {
    setTimeout(initMiSecccionAnimations, 500);
  }
})();
```

### Paso 2: Agregar a HTML

```html
<script src="js/sections/mi-nueva-seccion-animations.js"></script>
```

### Paso 3: Usar GSAP ScrollTrigger

```javascript
gsap.fromTo(
  '.mi-elemento',
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.mi-elemento',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  }
);
```

---

## ⚠️ Solución de Problemas

### ❌ "No veo la animación de tipeo"

Verificar que existan los elementos y scripts en orden correcto.

### ❌ "Veo un flashazo blanco al cambiar de página"

Verificar `html { background: #000; }` en todos los CSS.

### ❌ "Las animaciones son muy rápidas/lentas"

Ajustar el parámetro `duration` en los scripts.

### ❌ "GSAP no está definido"

Verificar que la CDN de GSAP esté ANTES de los scripts de animación.

---

## 📖 Referencias Técnicas

### GSAP ScrollTrigger

```javascript
scrollTrigger: {
  trigger: '.elemento',           
  start: 'top 80%',               
  end: 'bottom 20%',              
  scrub: true,                    
  markers: false,                 
  toggleActions: 'play none none reverse',
}
```

### CSS Keyframes Disponibles

- `fadeIn`, `fadeInUp`, `fadeInLeft`, `slideInRight`
- `zoom`, `pulse`, `bounce`

### IntersectionObserver

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});
```

---

## 🚀 Integración Resumen

### Scripts en Orden (En </body>):

```html
<!-- 1. Cargar GSAP primero -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- 2. Luego nuestros scripts -->
<script src="js/hero/typing-animation.js"></script>
<script src="js/nav/nav-hover-animations.js"></script>
<script src="js/sections/about-animations.js"></script>
<script src="js/sections/products-animations.js"></script>
<script src="js/sections/contact-animations.js"></script>

<!-- 3. Scripts originales de nav/video -->
<script>
  fetch('nav.html')...
  fetch('video.html')...
</script>
```

---

## 📝 Resumen de Cambios Realizados

| Elemento | Acción | Archivo(s) |
|----------|--------|-----------|
| 🎯 Hero Tipeo | Crear | `js/hero/typing-animation.js` |
| 🖱️ Nav Hover | Crear | `js/nav/nav-hover-animations.js` |
| 📊 About Reveal | Crear | `js/sections/about-animations.js` |
| 🎁 Products Reveal | Crear | `js/sections/products-animations.js` |
| 📝 Contact Form | Crear | `js/sections/contact-animations.js` |
| 🔑 Keyframes | Crear | `animations/keyframes.css` |
| 🌐 HTML (4 páginas) | Actualizar | Todas las páginas HTML |
| 📖 Documentación | Crear | `README.md` (este archivo) |

---

## ✅ Conclusión

El sistema está **completamente organizado, modular y mantenible**:

✅ Cada sección tiene su archivo aislado  
✅ Los scripts se cargan en orden correcto  
✅ Fallback automático sin GSAP  
✅ Transiciones negras sin flashazos  
✅ Documentación completa  

¡Listo para extender! 🚀

---

**Última actualización:** 2024  
**Versión:** 2.0 - Modular con Organización de Carpetas  
**Entrega al profesor:** **SÁBADO 8 DE NOVIEMBRE – 7:00 AM **  

---

## Introducción
Bienvenidos al proyecto **Tilapia Piscicultura**, un sitio web desarrollado por un equipo de 11 personas. Este README detalla las responsabilidades de cada grupo, las tareas pendientes, las fechas de entrega y las instrucciones para colaborar usando **Git y GitHub**.

**Objetivo:**  
- Avanzar en las interfaces según **Figma** y los **nuevos requerimientos del cliente**  
- Cumplir con las expectativas del profesor  
- Presentar una **adelanto de la pagina funcional** el sábado  

> **Cumplir con la fecha es obligatorio** para no afectar la nota grupal.

---

## Estructura del Equipo

| Grupo | Integrantes | Rama Git |
|-------|-------------|----------|
| **Grupo 1** | Yobany Fierro – Clareth | `grupo1-header` |
| **Grupo 2** | Juan Garzón – Zhary Peña | `grupo2-menu` |
| **Grupo 3** | Juan Manuel Marín – Santiago González | `grupo3-nosotros` |
| **Grupo 4** | Yhoinner – Santiago Salazar | `grupo4-peces` |
| **Grupo 5** | Julián Méndez – Diego Lozano | `grupo5-contacto` |

---

## Tareas y Requerimientos

### 1. Grupo 1 – Header con Video  
**Yobany Fierro – Clareth**  
**Rama:** `grupo1-header`  

**Tarea:**  
- **Ya finalizaron su trabajo con éxito**  
- **Esperar nuevos requerimientos** → **No hacer nada por ahora**  

**Fecha de entrega:** **VIERNES 7 NOV – 11:59 PM** (solo espera)

---

### 2. Grupo 2 – Menú de Navegación  
**Juan Garzón – Zhary Peña**  
**Rama:** `grupo2-menu`  

**Requerimientos:**  
1. Ubicar el **menú dentro del header** de forma **estática en todas las secciones**  
2. Cambiar el **color del menú** según **Figma** (verde marino `#006400`, azul marino `#000080`)  
3. **Resaltar la sección actual** (ej: color verde cuando estés en “Nosotros”)  

> **Modelo a seguir:** https://www.voicemod.net/en/voice-changer/ (menú fijo arriba)

**Fecha de entrega:** **VIERNES 7 NOV – 11:59 PM**

---

### 3. Grupo 3 – Sección "Nosotros"  
**Juan Manuel Marín – Santiago González**  
**Rama:** `grupo3-nosotros`  

**Requerimientos:**  
- **Alimentar toda la sección** con la información del **documento Word** que Julian Suaza proporciono  
- Incluir:  
  - ¿Quiénes Somos?  
  - Visión y Misión  
  - Nuestros Valores  
  - Nuestros Servicios (con botón a Contacto)  
  - Nuestra Historia (línea de tiempo)  
  - **Transparencia** (nueva mini-sección con texto y video)  

> **No toquen el `<script>` al final** (carga nav/video). Solo yo lo ajusto.

**Fecha de entrega:** **VIERNES 7 NOV – 11:59 PM**

---

### 4. Grupo 4 – Sección "Peces"  
**Yhoinner – Santiago Salazar**  
**Rama:** `grupo4-peces`  

**Requerimientos:**  
1. **Galería en la mitad de la seccion (centrada)** → Convertir en **carrusel de máximo 5 elementos**  
2. **Incluir 1 video en el carrusel** (mismo tamaño que las fotos)  
3. **Cada elemento con descripción pequeña**  
4. **En total serian 3 contenedores dentro de la misma seccion**  
   - **1ra:** Texto sobre tipo de tilapia + **imagen a la derecha**  
   - **2da:** Carrusel (galería)  
5. **Opcional:** En el último contenedor, agregar un recordatorio: *“¿Por qué elegirnos?”* 

> Julian Suaza les proporcionara las **imagenes, texto y video.**

**Fecha de entrega:** **VIERNES 7 NOV – 11:59 PM**

---

### 5. Grupo 5 – Sección "Contacto" + Footer  
**Julián Méndez – Diego Lozano**  
**Rama:** `grupo5-contacto`  

**Requerimientos:**  
1. **Alinear descripción + formulario + imagen** (grid, ordenado)  
2. **Centrar formulario** con **color llamativo** (azul #003464ff)  
3. **Botón WhatsApp flotante** (vínculo directo a número)  
4. **Añadir footer completo** en **TODAS las secciones**  

> Julian Suaza Proporcionara el **número de WhatsApp**.

**Fecha de entrega:** **VIERNES 7 NOV – 11:59 PM**

---

## Comandos Git (usar todos los días)

```bash
# 1. Actualizar todo
git pull origin main

# 2. Ir a tu rama
git checkout grupoX-tu-nombre

# 3. Juntar cambios de main (si hay)
git merge main

# 4. Guardar cambios
git add .
git commit -m "Descripción clara de lo que hice"

# 5. Subir
git push origin grupoX-tu-nombre

**NOTA:**

No toquen los <script> al final de cada página → Solo yo (Julián Suaza) los ajusto

**Usen el Servidor en vivo:** Descárguenlo en VS Code → clic derecho en HTML → Abrir con Live Server

**Reuniones de apoyo:**

Julian Suaza Estara haciendo salas por meet para guiarlos en lo que no entiendan
Horario: Jueves y Viernes – 8:40 PM 
Enlace: Se envía por WhatsApp


**Soporte:** Escribir a Julian Suaza por WhatsApp si presentan dudas o problemas.

**Suerte Ingenieros !!! :)**