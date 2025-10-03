# Proyecto Web: Tilapia Piscicultura Proyecto

¡Bienvenidos al repositorio del equipo! Somos 10 personas desarrollando la página web para "Tilapia Piscicultura" (crianza sostenible de tilapia y trucha). El objetivo es una página funcional, basada en el mockup de Figma (ver imagen adjunta si la subes).

## Estructura del Proyecto
- **Corte 1:** Maqueta en Figma (ya aprobada).
- **Corte 2:** Avance de la página (presentamos este sábado). Enfocamos en header con video, menú funcional, secciones (Nosotros, Nuestros Peces, Contacto), colores representativos (azules para agua, verdes para naturaleza), y estructura general (párrafos, títulos, imágenes).
- **Corte 3:** Página final funcional (próximas semanas).

Archivos iniciales: `index.html` (HTML base) y `styles.css` (CSS base), compartidos por el profe.

## División de Tareas y Grupos
Dividí en subproyectos pequeños para evitar choques. Cada grupo trabaja en partes específicas en su propia rama (creadas por mí). Enfócate en HTML para estructura + un poco de CSS para estilos básicos (colores, tamaños). Usa etiquetas HTML como `<header>`, `<nav>`, `<section>`, `<h2>`, `<p>`, `<img>`, `<video>`, `<a>`. En CSS, usa clases o IDs (ej: `.header { background: blue; }`).

- **Grupo 1: Header con Video (Yobany - Clareth)**
  - Qué hacer: Reemplaza la foto del header por un video (usa `<video src="video.mp4" autoplay loop muted></video>`). Agrega título "Tilapia Piscicultura" y slogan. En CSS, usa colores azules/verdes y hazlo responsive (`width: 100%;`).
  - Paso a paso:
    1. Git: `git clone https://github.com/18juzu/WEB-TILAPIA-PISCICULTURA.git` (solo la primera vez).
    2. Git: `git pull`.
    3. Git: `git checkout grupo1-header` (entra a tu rama).
    4. Edita `index.html`: En `<header>`, borra lo viejo y agrega `<video>` + texto.
    5. Edita `styles.css`: Agrega `header { background-color: #1e88e5; }` (azul).
    6. Prueba en navegador.
    7. Git: `git add .`, `git commit -m "Header con video"`, `git push origin grupo1-header`.
  - Consideraciones: Video corto (busca uno libre mientras tienes el original). No edites otras secciones. Coordina: ej, Yobany hace video, Clareth hace CSS. Plazo: Viernes 11:00 de la noche.

- **Grupo 2: Menú de Navegación Funcional (Juan David - Zarhy Peña)**
  - Qué hacer: Haz que el menú funcione (links a secciones con `<a href="#seccion">`). Agrega items: Inicio, Nosotros, Nuestros Peces, Contacto. En CSS, usa colores azules y hover.
  - Paso a paso:
    1. Git: `git clone https://github.com/18juzu/WEB-TILAPIA-PISCICULTURA.git` (solo la primera vez).
    2. Git: `git pull`
    3. Git: `git checkout grupo2-menu` (entra a tu rama).
    4. Git: `git pull origin main`
    5. Edita `index.html`: En `<nav>`, agrega IDs a secciones (ej: `<section id="nosotros">`).
    6. Edita `styles.css`: `nav { background: #1565c0; }`, hover como en base.
    7. Prueba clicks.
    8. Git: `git add .`, `git commit -m "Menú funcional"`, `git push origin grupo2-menu`.
  - Consideraciones: Links internos (#id). No toques header. Coordina: ej, Juan David hace links, Zarhy hace CSS. Plazo: Viernes 11:00 de la noche.

- **Grupo 3: Sección "Nosotros" (Juan Manuel - Santiago Gonzales)**
  - Qué hacer: Agrega sección con título, párrafos sobre la empresa, imágenes (`<img src="imagen.jpg" alt="Descripción">`). Colores verdes en CSS.
  - Paso a paso:
    1. Git: `git clone https://github.com/18juzu/WEB-TILAPIA-PISCICULTURA.git` (solo la primera vez).
    2. Git: `git pull`
    3. Git: `git checkout grupo3-nosotros` (entra a tu rama).
    4. Git: `git pull origin main`
    5. Edita `index.html`: Agrega `<section id="nosotros"><h2>Nosotros</h2><p>Texto...</p><img>...</section>`.
    6. Edita `styles.css`: `.nosotros { color: green; }`.
    7. Prueba.
    8. Git: `git add .`, `git commit -m "Sección Nosotros"`, `git push origin grupo3-nosotros`.
  - Consideraciones: Texto real de la empresa. Sube imágenes al repo. Coordina: ej, Juan Manuel hace texto, Santiago imágenes. Plazo: Jueves 5:00 pm.

- **Grupo 4: Sección "Nuestros Peces" y Galería (Yoinner - Rafael)**
  - Qué hacer: Expande la galería con más imágenes de peces/estanques y descripciones. CSS para responsive (flexbox como en base).
  - Paso a paso:
    1. Git: `git clone https://github.com/18juzu/WEB-TILAPIA-PISCICULTURA.git` (solo la primera vez).
    2. Git: `git pull`
    3. Git: `git checkout grupo4-peces` (entra a tu rama).
    4. Git: `git pull origin main`
    5. Edita `index.html`: En `<section id="peces">`, agrega más `<img>` en `.galeria`.
    6. Edita `styles.css`: Ajusta tamaños/colores.
    7. Prueba.
    8. Git: `git add .`, `git commit -m "Galería Peces"`, `git push origin grupo4-peces`.
  - Consideraciones: Imágenes libres relacionadas con la empresa. No edites menú. Coordina: ej, Yoinner hace imágenes, Rafael CSS. Plazo: Jueves 5:00 pm.

- **Grupo 5: Sección "Contacto" y Footer de las demas Secciones (Julian Mendez - Diego Lozano)**
  - Qué hacer: Agrega formulario simple (`<form><input type="text" placeholder="Nombre"> <button>Enviar</button></form>`). Footer con copyright y colores.
  - Paso a paso:
    1. Git: `git clone https://github.com/18juzu/WEB-TILAPIA-PISCICULTURA.git` (solo la primera vez).
    2. Git: `git pull`
    3. Git: `git checkout grupo5-contacto` (entra a tu rama).
    4. Git: `git pull origin main`
    5. Edita `index.html`: `<section id="contacto"><h2>Contacto</h2><form>...</form></section>`. Actualiza footer.
    6. Edita `styles.css`: Estilos para form (ej: `input { border: 1px solid blue; }`).
    7. Prueba.
    8. Git: `git add .`, `git commit -m "Sección Contacto y Footer"`, `git push origin grupo5-contacto`.
  - Consideraciones: Form no envía real (por ahora). Coordina: ej, Julian Mendez hace form, Diego hace footer. Plazo: Jueves media noche.

## Instrucciones Generales para Todos
- **Git Paso a Paso (Siempre):**
  1. Abre terminal en Visual Studio Code (Ctrl+`).
  2. `git clone https://github.com/18juzu/WEB-TILAPIA-PISCICULTURA.git` (solo la primera vez para copiar el repo).
  3. `git pull` (actualiza antes de empezar).
  4. `git checkout nombre-de-tu-ramita` (entra a tu rama asignada, ej: grupo1-header).
  5. Edita solo TU parte (evita conflictos).
  6. Guarda el archivo o los cambios constantemente (Ctrl+S).
  7. `git add .`
  8. `git commit -m "Tu mensaje claro"`.
  9. `git push origin nombre-de-tu-ramita`.
  - Si hay error: Haz `git pull` de nuevo o arregla conflictos (Git muestra qué líneas chocan; elige la buena con ayuda si necesitas).

- **Qué Considerar:**
  - Trabaja en tu copia local. Prueba en navegador antes de push para verificar que funcione.
  - Usa etiquetas HTML semánticas (`<header>`, `<main>`, etc.) para estructura.
  - CSS: Agrega clases (ej: `class="mi-clase"`) para estilos específicos.
  - No instales nada extra; usa HTML/CSS puro.
  - Comunica en grupo (WhatsApp): Avisa con "Hice pull, voy a editar" y "Hice push" el día que te toque.
  - Coordina con tu compañero: Trabajen en horarios diferentes o dividan subtareas (ej: uno hace HTML, otro CSS). Esto evita errores al subir al repo (les recomiendo trabajen en horarios diferentes).
- **Plazo General:** Todo listo para sábado. Yo (Julian Suaza) reviso cada noche y uniré las ramas. Por favor Cumple las fechas
- **Problemas?** Pregúntame (Julian Suaza). ¡Trabajemos en equipo para un gran avance!

Actualizado por Julian Suaza.