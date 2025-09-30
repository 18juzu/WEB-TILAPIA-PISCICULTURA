# WEB-TILAPIA-PISCICULTURA
Web Colaborativa

Objetivo: coordinar trabajo en equipo. 

Mantener el README con: cómo clonar, ramas, paleta, y reglas.

# 1) Header con video (Hero owner) Yobani - Clareth

Objetivo: hacer el header más bajo y con video. 

Pasos Crear assets/video/hero.mp4 y hero.webm (clip 10–20 s, 720p o menos). Comprimir con HandBrake (CRF 24–28). Reemplazar el <header> por el bloque Hero en todas las páginas. Ajustar alturas en .hero (48vh) y revisar responsive. Subir assets optimizados. PR feat/hero-video.

# 2) Navegación + Footer (Layout owner) Juan David - Zarhy Liceth

Objetivo: unificar menú y pie. 

Pasos Copiar el bloque <nav> del apartado 2 a todas las páginas. Estilizar con las reglas de nav del CSS. Footer con &copy; 2025 Tilapia Piscicultura (revisar año automático no aplica sin JS).

# 3) Home / index.html (Secciones y galería) Julián Mendez - Diego Lozano

Objetivo: armar el contenido de bienvenida y galería según Figma. 

Pasos En index.html, debajo del <nav>, envolver todo en <main class="container">. Crear sección Bienvenido con <h2 class="h2"> y párrafo. Crear sección Nuestros Peces con la galería (.galeria) usando 4–8 imágenes reales.

# Crear Sección Tipo de Peces / peces.html

Objetivo: grilla de tarjetas de especies. 

Pasos Crear una grilla 2–3 columnas con display:grid; gap:16px. Tarjeta: imagen arriba, nombre, breve descripción (2–3 líneas). Reusar estilos de galería y botones.

# 4) Sección Nosotros (página + bloque M/V) Santiago Gonzales - Juan Manuel Marin 

Objetivo: maquetar nosotros.html con texto, fotos y botones Misión/Visión. 

Pasos Crear estructura estándar (Hero + Nav + <main class="container">). Sección "Sobre nosotros" con 1 foto a la izquierda y texto a la derecha (puedes usar un display:flex sencillo). Incluir botones .btn--chip de Misión y Visión.

# Página Misión (detalle)

Pasos Crear mision.html (Hero + Nav + <main class="container">). Título Misión, párrafo de 120–180 palabras y 2 fotos relacionadas. Botón .btn--outline para volver a Visión y otro a Inicio.

# Página Visión (detalle) 

Pasos Crear vision.html similar a Misión. Título Visión, texto de 120–180 palabras y 2 fotos. Botones de navegación cruzada.

# 5) Contacto + WhatsApp (Contact owner) Yhoinner - Rafael

Objetivo: página con datos + botón flotante de WhatsApp funcional. 

Pasos Crear contacto.html con dirección, horario y un formulario estático con action="mailto:correo@dominio.com" (sin JS): campos Nombre, Email, Mensaje. Añadir el enlace de WhatsApp flotante (bloque del apartado 2) con el número real.
Validar que el ícono no tape el footer en móvil (ajustar bottom si hace falta).
