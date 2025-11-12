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

  /**
   * Tipea texto letra por letra de forma limpia
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

      let currentText = '';
      let charIndex = 0;

      const type = () => {
        if (charIndex < fullText.length) {
          currentText += fullText[charIndex];
          element.innerText = currentText;
          charIndex++;
          setTimeout(type, speed);
        } else {
          // Animación final de brillo
          if (window.gsap) {
            window.gsap.to(element, {
              textShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
              duration: 0.5,
              ease: 'power2.out',
              onComplete: () => {
                element.style.textShadow = 'none';
                resolve();
              },
            });
          } else {
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
            // Small delay to ensure DOM is fully rendered
            setTimeout(initTypingAnimation, 200);
          }
        });
      });

      observer.observe(document.body, { attributes: true });

      // Fallback timeout (2.5s) in case observer doesn't trigger
      setTimeout(() => {
        observer.disconnect();
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
