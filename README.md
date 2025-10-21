# Proyecto Tilapia Piscicultura - README

## Introducción
Bienvenidos al proyecto "Tilapia Piscicultura", un sitio web desarrollado por un equipo de desarrolladores. Este README detalla las responsabilidades de cada grupo, las tareas pendientes, las fechas de entrega, y las instrucciones para colaborar usando Git y GitHub. El objetivo es avanzar en las interfaces para la clase y cumplir con las expectativas del cliente y el profesor.

Cumplir con las fechas estimuladas de entrega de cada uno de los grupos de desarrolladores para así mismo entregar avances al cliente y profesor.

## Estructura del Equipo
- **Grupo 1: Header con Video (Yobany - Clareth)**  
  Rama: `grupo1-header`

- **Grupo 2: Menú de Navegación Funcional (Juan David - Zarhy Peña)**  
  Rama: `grupo2-menu`

- **Grupo 3: Sección "Nosotros" (Juan Manuel - Santiago Gonzales)**  
  Rama: `grupo3-nosotos`

- **Grupo 4: Sección "Nuestros Peces" y Galería (Yoinner - Rafael)**  
  Rama: `grupo4-peces`

- **Grupo 5: Sección "Contacto" y Footer de las demás Secciones (Julian Mendez - Diego Lozano)**  
  Rama: `grupo5-contacto`

## Tareas y Avances

### 1. Sección "Inicio"
**Descripción:** Modificar la descripción de "Bienvenido" agregando una imagen a su derecha, añadir imágenes con descripciones como abrebocas para el usuario, y aplicar los colores de Figma. (Julian Suaza) se encargará de esta sección.

**Pasos para subir a GitHub:**
- Abre tu editor (VS Code) en la carpeta del proyecto.
- Abre la terminal (Ctrl + `).
- Escribe `git pull origin main` para traer actualizaciones de main.
- Escribe `git checkout nombre de la rama` para cambiar a tu rama.
- Si hay cambios nuevos en main, escribe `git merge main` para juntarlos (arregla choques si aparecen abriendo archivos y eligiendo qué guardar).
- Edita los archivos (HTML, CSS) con los cambios.
- Escribe `git add .` para guardar tus cambios.
- Escribe `git commit -m "Añadí imágenes y descripción en Inicio"` para etiquetar.
- Escribe `git push origin nombre de la rama` para subir. Si falla, haz `git pull origin nombre de la rama` y arregla choques antes de push.
- Descarga Live Server (Extensiones > Live Server > Install) y prueba clic derecho en `index.html` > Open with Live Server.

**Nota:** Al terminar cada seccion, se añadio un script de JavaScript. Este script se encarga de traer el nav y el video de otros archivos (nav.html, video.html) y pone un color verde en el menú para mostrar dónde estás. Los siguientes script son:

- Para el archivo nav.html se usa:
  <script>
      fetch('nav.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('nav-placeholder').innerHTML = data;
              const currentPage = window.location.pathname.split('/').pop();
              const links = document.querySelectorAll('.nav-menu a');
              links.forEach(link => {
                  const linkPage = link.getAttribute('href');
                  if (linkPage === currentPage) {
                      link.classList.add('active');
                  }
              });
          })
          .catch(error => console.error('Error cargando nav:', error));
  </script>
  ```
- Para el archivo video.html se usa:
  ```html
  <script>
      fetch('video.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('video-placeholder').innerHTML = data;
          })
          .catch(error => console.error('Error cargando video:', error));
  </script>
  ```
- **Cuidado:** No toquen ni modifiquen estos scripts. Solo se modificara con permisos de (Julian Suaza) por posibles conflictos al compilar el código , solo de esa forma se ajustaran. Si los cambian, pueden romper el nav/video no aparecerán. Déjenlos como están y trabajen solo en HTML y CSS.


---

### 2. Sección "Nosotros"
**Descripción:** Modificar los colores según Figma, añadir visión, misión, valores, descripción de servicios con imagen, imágenes de productos con descripciones pequeñas, e historia de la empresa (información proporcionada por el Julian Suaza). Sin animaciones en JavaScript por ahora.

**Pasos para subir a GitHub:**
- Abre tu editor en la carpeta del proyecto.
- Abre la terminal.
- Escribe `git pull origin main` para actualizar.
- Escribe `git checkout grupo3-nosotos` para entrar a tu rama.
- Si hay cambios en main, escribe `git merge main` (arregla choques si aparecen).
- Edita `nosotros.html` y `style.css` con los cambios.
- Escribe `git add .` para guardar.
- Escribe `git commit -m "Añadí visión, misión y productos en Nosotros"` para etiquetar.
- Escribe `git push origin grupo3-nosotos` para subir. Si falla, haz `git pull origin grupo3-nosotos` y arregla antes.
- Descarga Live Server y prueba clic derecho en `nosotros.html` > Open with Live Server.

**Nota:** Al final de su sección hay un script de JavaScript (igual que en Inicio) para traer el nav y video. No lo toquen, solo se ajusta con permisos. Trabajen en HTML y CSS.

**Fecha de entrega:** Miércoles 22 de octubre.

---

### 3. Sección "Contacto"
**Descripción:** Añadir descripción sobre qué encuentra al contactar, imagen a la derecha, mejorar el formulario (moderno, enlazado a un correo), cambiar colores según Figma, y estructurar el footer como en Figma.

**Pasos para subir a GitHub:**
- Abre tu editor en la carpeta.
- Abre la terminal.
- Escribe `git pull origin main` para actualizar.
- Escribe `git checkout grupo5-contacto` para entrar.
- Si hay cambios, escribe `git merge main` (arregla choques si aparecen).
- Edita `contacto.html` y CSS.
- Escribe `git add .` para guardar.
- Escribe `git commit -m "Mejoré formulario y footer en Contacto"` para etiquetar.
- Escribe `git push origin grupo5-contacto` para subir. Si falla, haz `git pull` y arregla.
- Descarga Live Server y prueba clic derecho en `contacto.html` > Open with Live Server.

**Nota:**Al final de su sección hay un script de JavaScript al final. No lo toquen, solo se modifica con permisos. Trabajen en HTML y CSS.

**Fecha de entrega:** Viernes 24 de octubre.

---

### 4. Menú de Navegación
**Descripción:** Modificar estructura en `nav.html` y `nav.css` según Figma, agregar bordes redondeados, dimensiones, e integrarlo encima del header.

**Pasos para subir a GitHub:**
- Abre tu editor en la carpeta.
- Abre la terminal.
- Escribe `git pull origin main` para actualizar.
- Escribe `git checkout grupo2-menu` para entrar.
- Si hay cambios, escribe `git merge main` (arregla choques si aparecen).
- Edita `nav.html` y `nav.css`.
- Escribe `git add .` para guardar.
- Escribe `git commit -m "Ajusté nav según Figma"` para etiquetar.
- Escribe `git push origin grupo2-menu` para subir. Si falla, haz `git pull` y arregla.
- Descarga Live Server y prueba clic derecho en `index.html` > Open with Live Server.

**Nota:** Si al momento de revisar los cambios n el navegador no aparecen, no duden en contactar a Julian suaza ya que podria ser problemas del scritp.

**Fecha de entrega:** Jueves 23 de octubre.

---

### 5. Header con Video
**Descripción:** Integrar nuevo video (proporcionado por Julian Suaza), mejorar el título, y estar atentos a recomendaciones del cliente/profesor (posible cambio a galería).

**Pasos para subir a GitHub:**
- Abre tu editor en la carpeta.
- Abre la terminal.
- Escribe `git pull origin main` para actualizar.
- Escribe `git checkout grupo1-header` para entrar.
- Si hay cambios, escribe `git merge main` (arregla choques si aparecen).
- Edita `video.html` y `video.css`.
- Escribe `git add .` para guardar.
- Escribe `git commit -m "Añadí nuevo video y título"` para etiquetar.
- Escribe `git push origin grupo1-header` para subir. Si falla, haz `git pull` y arregla.
- Descarga Live Server y prueba clic derecho en `index.html` > Open with Live Server.

**Nota del líder:** Si al momento de revisar los cambios en el navegador no aparecen, no duden en contactar a Julian suaza ya que podria ser problemas del scritp.

**Fecha de entrega:** Domingo 26 de octubre.

---

### 6. Sección "Nuestros Peces"
**Descripción:** Poner al día la sección (subir lo pendiente). Asi Julian Suaza ajustará tras aprobación y dará nuevas tareas.

**Pasos para subir a GitHub:**
- Abre tu editor en la carpeta.
- Abre la terminal.
- Escribe `git pull origin main` para actualizar.
- Escribe `git checkout grupo4-peces` para entrar.
- Si hay cambios, escribe `git merge main` (arregla choques si aparecen).
- Edita `peces.html` y CSS.
- Escribe `git add .` para guardar.
- Escribe `git commit -m "Subí sección Peces"` para etiquetar.
- Escribe `git push origin grupo4-peces` para subir. Si falla, haz `git pull` y arregla.
- Descarga Live Server y prueba clic derecho en `peces.html` > Open with Live Server.

**Nota:** Al final de su sección hay un script de JavaScript al final. No lo toquen, solo se modifica con permisos. Trabajen en HTML y CSS.

**Fecha de entrega:** Domingo 26 de octubre.

---

## Notas Importantes
- **Fechas del 26 de octubre:** Las entregas del domingo 26 reflejan el compromiso asumido con los grupos 1 y 4, a quienes se le informo al profesor sobre retrasos.
- **Reuniones:** Cada grupo se reunirá conmigo (Julian Suaza) la noche de su fecha de entrega para mostrar avances y discutir cambios.
- **Soporte:** Si tienen problemas o dudas, contáctenme directamente.
- **Recursos útiles:** https://getbootstrap.com/ (para estilos y ejemplos).
- **Live Server:** Descárguenlo en VS Code (Extensiones > Live Server > Install) para visualizar haciendo clic derecho en los archivos HTML.



