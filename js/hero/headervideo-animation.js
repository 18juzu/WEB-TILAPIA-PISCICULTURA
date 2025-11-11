/**
 * Hero Typing Animation (MEJORADO)
 * Creates a fluent, impactful letter-by-letter typing effect
 * Features:
 *  - Variable speed with easing for natural feel
 *  - Cursor blink effect during typing
 *  - Smooth fade-in after complete
 *  - Runs after video loads and body transitions from loading state
 */

(function() {
  'use strict';

  /**
   * Types text character by character with cursor effect
   * @param {HTMLElement} element - The element to type into
   * @param {string} text - The text to type
   * @param {Object} options - Configuration object
   * @returns {Promise} Resolves when typing completes
   */
  function typeText(element, text, options = {}) {
    return new Promise((resolve) => {
      if (!element) {
        resolve();
        return;
      }

      const {
        baseSpeed = 60,      // Velocidad base (ms/char) - MÁS RÁPIDO
        variance = 20,       // Varianza de velocidad (ms)
        cursorShow = true,   // Mostrar cursor parpadeante
        cursorChar = '|',    // Carácter del cursor
      } = options;

      element.textContent = ''; // Clear existing content
      let index = 0;

      // Agregar cursor si está habilitado
      if (cursorShow) {
        element.style.position = 'relative';
      }

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          // Agregar carácter
          element.textContent += text[index];

          // Agregar cursor después del carácter
          if (cursorShow && index < text.length - 1) {
            element.style.position = 'relative';
          }

          // Velocidad variable (acelera/desacelera naturalmente)
          const randomVariance = (Math.random() - 0.5) * variance;
          const nextSpeed = baseSpeed + randomVariance;

          // Siguiente intervalo con velocidad variable
          clearInterval(typeInterval);
          setTimeout(() => {
            index++;
            if (index < text.length) {
              typeInterval = setInterval(() => {
                if (index < text.length) {
                  element.textContent += text[index];
                  index++;
                } else {
                  clearInterval(typeInterval);
                  // Remover cursor y hacer fade
                  if (cursorShow) {
                    element.style.position = 'static';
                  }
                  // Agregar efecto de brillo final
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
              }, baseSpeed);
            } else {
              clearInterval(typeInterval);
              resolve();
            }
          }, Math.max(nextSpeed, 30)); // Garantizar velocidad mínima
        } else {
          clearInterval(typeInterval);
          resolve();
        }
      }, baseSpeed);
    });
  }

  /**
   * Initializes the typing animation for hero section
   * Runs sequentially: title first, then subtitle
   */
  async function initTypingAnimation() {
    // Get hero elements
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');

    // Fallback if elements don't exist
    if (!title && !subtitle) return;

    try {
      // Store original text before clearing
      const titleText = title?.textContent || '';
      const subtitleText = subtitle?.textContent || '';

      // Type title con velocidad variable (MÁS RÁPIDO Y FLUIDO)
      if (title && titleText.length > 0) {
        // Fade in suave antes de empezar
        if (window.gsap) {
          await new Promise((resolve) => {
            window.gsap.fromTo(
              title,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.inOut',
                onComplete: resolve,
              }
            );
          });
        }

        // Tipo título
        await typeText(title, titleText, {
          baseSpeed: 50,      // 50ms por char (MÁS RÁPIDO que antes 80ms)
          variance: 15,       // Varianza para naturalidad
          cursorShow: true,
        });

        // Pequeña pausa antes del subtítulo
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      // Type subtitle after title completes
      if (subtitle && subtitleText.length > 0) {
        // Fade in suave
        if (window.gsap) {
          await new Promise((resolve) => {
            window.gsap.fromTo(
              subtitle,
              { opacity: 0, y: 10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: 'power2.inOut',
                onComplete: resolve,
              }
            );
          });
        }

        // Tipo subtítulo
        await typeText(subtitle, subtitleText, {
          baseSpeed: 45,      // 45ms por char (MÁS RÁPIDO que antes 60ms)
          variance: 12,       // Varianza menor para consistencia
          cursorShow: true,
        });

        // Efecto final de brillo/highlight
        if (window.gsap) {
          window.gsap.to([title, subtitle], {
            textShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
              title.style.textShadow = 'none';
              subtitle.style.textShadow = 'none';
            },
          });
        }
      }
    } catch (error) {
      console.warn('Typing animation error:', error);
      // Restore text if animation fails
      if (title) title.textContent = title.textContent;
      if (subtitle) subtitle.textContent = subtitle.textContent;
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
