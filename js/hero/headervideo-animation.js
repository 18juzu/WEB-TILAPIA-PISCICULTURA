/**
 * Hero Typing Animation - LIMPIO Y SIMPLE
 * Escribe letra por letra sin errores
 * Features:
 *  - Escritura simple y clara
 *  - Sin confusión de textos
 *  - Velocidad constante
 *  - Efecto final de brillo
 */

(function() {
  'use strict';
  // Flag para evitar ejecuciones múltiples
  let __heroTypingHasRun = false;

  /**
   * Tipea texto letra por letra de forma limpia
   * Con contorno visible durante la escritura y permanente al final
   * @param {HTMLElement} element - Elemento a escribir
   * @param {string} fullText - Texto completo a escribir
   * @param {number} speed - Velocidad en ms por letra
   * @returns {Promise}
   */
  function typeText(element, fullText, speed = 50) {
    return new Promise((resolve) => {
      if (!element || !fullText) {
        resolve();
        return;
      }

      // Limpiar completamente el elemento
      element.innerText = '';
      element.style.whiteSpace = 'normal';
      element.style.wordWrap = 'break-word';
      element.style.maxWidth = '90%';
      // Aplicar el glow desde el inicio y mantenerlo todo el tiempo
      element.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.4)';

      let currentText = '';
      let charIndex = 0;

      const type = () => {
        if (charIndex < fullText.length) {
          currentText += fullText[charIndex];
          element.innerText = currentText;
          charIndex++;
          setTimeout(type, speed);
        } else {
          // Al completar, intensificar el glow y dejarlo permanente
          if (window.gsap) {
            window.gsap.to(element, {
              textShadow: '0 0 25px rgba(255, 255, 255, 0.7)',
              duration: 0.4,
              ease: 'power2.out',
              onComplete: () => {
                // Mantener un glow persistente pero suave
                element.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
                resolve();
              },
            });
          } else {
            // Fallback sin GSAP: mantener el glow que ya está aplicado
            element.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
            resolve();
          }
        }
      };

      type();
    });
  }

  /**
   * Inicializa la animación de typing
   * Ejecuta: título → pausa → subtítulo
   */
  async function initTypingAnimation() {
    if (__heroTypingHasRun) return; // no ejecutar más de una vez
    // Buscar cualquier encabezado dentro del hero (.hero-content o .hero)
    const heroRoot = document.querySelector('.hero-content') || document.querySelector('.hero') || document.body;

    // Selección flexible: mantiene compatibilidad con las clases antiguas
    // y además acepta h1..h6 dentro del hero.
    const nodes = heroRoot.querySelectorAll('.hero-title, .hero-subtitle, h1, h2, h3, h4, h5, h6');

    if (!nodes || nodes.length === 0) return;

    try {
      // Animar en el orden del DOM los encabezados encontrados
      for (let i = 0; i < nodes.length; i++) {
        const el = nodes[i];
        // Guardar texto actual (respetando texto sin HTML interno)
        const txt = el.innerText || el.textContent || '';
        if (!txt || txt.trim().length === 0) continue;

        // Velocidad: primera linea un poco más lenta para enfoque, el resto ligeramente más rápido
        const speed = i === 0 ? 50 : 45;

        // Esperar a que cada linea termine antes de la siguiente
        await typeText(el, txt, speed);

        // Pequeña pausa entre líneas
        if (i === 0 && nodes.length > 1) await new Promise((resolve) => setTimeout(resolve, 400));
      }
    } catch (error) {
      console.warn('Error en typing animation:', error);
    }

    __heroTypingHasRun = true;
  }

  /**
   * Start animation when DOM is ready
   * Waits for video to load or timeout (approximately 1.5-2s)
   */
  function initWhenReady() {
    // Check if body already has video-ready class or loading removed
    if (!document.body.classList.contains('loading')) {
      // Video already loaded, start immediately
      initTypingAnimation();
    } else {
      // Wait for loading class to be removed (video loads or timeout fires)
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'class' &&
            !document.body.classList.contains('loading')
          ) {
            observer.disconnect();
            // cancelar fallback
            if (fallbackTimeout) clearTimeout(fallbackTimeout);
            // Small delay to ensure DOM is fully rendered
            setTimeout(initTypingAnimation, 200);
          }
        });
      });

      observer.observe(document.body, { attributes: true });

      // Fallback timeout (2.5s) in case observer doesn't trigger
      const fallbackTimeout = setTimeout(() => {
        try { observer.disconnect(); } catch(e){}
        initTypingAnimation();
      }, 2500);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhenReady);
  } else {
    initWhenReady();
  }
})();
