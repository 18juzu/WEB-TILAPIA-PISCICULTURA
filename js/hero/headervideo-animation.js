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
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');

    if (!title && !subtitle) return;

    try {
      // Obtener el texto original
      const titleText = title ? title.innerText : '';
      const subtitleText = subtitle ? subtitle.innerText : '';

      // Escribir título
      if (title && titleText.length > 0) {
        await typeText(title, titleText, 50); // 50ms por letra
        await new Promise((resolve) => setTimeout(resolve, 500)); // Pausa entre título y subtítulo
      }

      // Escribir subtítulo
      if (subtitle && subtitleText.length > 0) {
        await typeText(subtitle, subtitleText, 45); // 45ms por letra
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
