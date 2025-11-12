/**
 * Products/Gallery Scroll Animations - OPTIMIZADO
 * Adds scroll-triggered reveal and hover effects for product cards ONLY
 * Secciones permanecen estáticas, sin animación
 * Works on: index.html (.products-section) and peces.html (.productos)
 * Features: Staggered reveal cards, hover SIN ZOOM (como especies), interactive effects
 */

(function() {
  'use strict';

  /**
   * Safe utility for animations with GSAP fallback
   */
  const animUtils = window.animUtils || {
    observe: (selector, callback) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            callback?.(entry);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll(selector).forEach((el) => observer.observe(el));
      return observer;
    },
  };

  /**
   * Initialize product animations
   */
  function initProductAnimations() {
    if (window.gsap && window.gsap.registerPlugin) {
      initGSAPProductAnimations();
    } else {
      initIntersectionProductAnimations();
    }
  }

  /**
   * GSAP ScrollTrigger animations for products
   */
  function initGSAPProductAnimations() {
    try {
      const gsap = window.gsap;

      // ==========================================
      // IMPORTANTE: Las secciones NO se animan
      // Solo las tarjetas individuales se animan
      // ==========================================

      // Product cards staggered reveal (TARJETAS SOLO)
      // Para index.html
      const productCards = document.querySelectorAll('.product-card');
      if (productCards.length > 0) {
        const productsSection = document.querySelector('.products-section');
        
        gsap.fromTo(
          productCards,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: {
              trigger: productsSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Hover effect SIN ZOOM - Solo lift/sombra (como especies)
        productCards.forEach((card) => {
          card.addEventListener('mouseenter', function() {
            gsap.to(this, {
              y: -8,
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', function() {
            gsap.to(this, {
              y: 0,
              boxShadow: '0 5px 20px rgba(6, 6, 6, 0.151)',
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }

      // Tarjetas para peces.html (.tarjeta)
      const tarjetas = document.querySelectorAll('.tarjeta');
      if (tarjetas.length > 0) {
        const productosSection = document.querySelector('.productos');

        gsap.fromTo(
          tarjetas,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: {
              trigger: productosSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Hover effect SIN ZOOM - Solo lift/sombra
        tarjetas.forEach((tarjeta) => {
          tarjeta.addEventListener('mouseenter', function() {
            gsap.to(this, {
              y: -8,
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          tarjeta.addEventListener('mouseleave', function() {
            gsap.to(this, {
              y: 0,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }

      // Animate product info/description on scroll (si existen)
      const productInfos = document.querySelectorAll('.product-info');
      if (productInfos.length > 0) {
        gsap.fromTo(
          productInfos,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
              trigger: document.querySelector('.products-section'),
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Animate CTA buttons (todos los que tengan clase .cta-button)
      const ctaButtons = document.querySelectorAll('.cta-button');
      if (ctaButtons.length > 0) {
        ctaButtons.forEach((btn) => {
          gsap.fromTo(
            btn,
            {
              opacity: 0,
              y: 20,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: 0.2,
              scrollTrigger: {
                trigger: btn.closest('section') || btn,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          );

          // Hover effect en botones
          btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
              duration: 0.3,
              y: -3,
              boxShadow: '0 12px 30px rgba(30, 136, 229, 0.5)',
              ease: 'power2.out',
            });
          });

          btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
              duration: 0.3,
              y: 0,
              boxShadow: '0 8px 20px rgba(30, 136, 229, 0.3)',
              ease: 'power2.out',
            });
          });
        });
      }
    } catch (error) {
      console.warn('GSAP product animation error:', error);
      initIntersectionProductAnimations();
    }
  }

  /**
   * IntersectionObserver fallback for product animations
   */
  function initIntersectionProductAnimations() {
    // Observe SOLO las tarjetas (.product-card y .tarjeta)
    // NO las secciones

    // Product cards (index.html)
    const productCards = document.querySelectorAll('.product-card');
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            const delay = index * 0.12;
            entry.target.style.animation = `fadeInUp 0.6s ease-out ${delay}s forwards`;

            // Hover fallback SIN ZOOM
            entry.target.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-8px)';
              this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
              this.style.transition = 'all 0.3s ease-out';
            });

            entry.target.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0)';
              this.style.boxShadow = '0 5px 20px rgba(6, 6, 6, 0.151)';
              this.style.transition = 'all 0.3s ease-out';
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    productCards.forEach((card) => cardObserver.observe(card));

    // Tarjetas (peces.html)
    const tarjetas = document.querySelectorAll('.tarjeta');
    const tarjetaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            const delay = index * 0.12;
            entry.target.style.animation = `fadeInUp 0.6s ease-out ${delay}s forwards`;

            // Hover fallback SIN ZOOM
            entry.target.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-8px)';
              this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
              this.style.transition = 'all 0.3s ease-out';
            });

            entry.target.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0)';
              this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
              this.style.transition = 'all 0.3s ease-out';
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    tarjetas.forEach((tarjeta) => tarjetaObserver.observe(tarjeta));

    // Observe product info/description
    animUtils.observe('.product-info', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';
      }
    });

    // Observe CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    const buttonObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.style.animation = 'fadeInUp 0.6s ease-out 0.2s forwards';

            // Hover fallback
            entry.target.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-3px)';
              this.style.boxShadow = '0 12px 30px rgba(30, 136, 229, 0.5)';
              this.style.transition = 'all 0.3s ease-out';
            });

            entry.target.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0)';
              this.style.boxShadow = '0 8px 20px rgba(30, 136, 229, 0.3)';
              this.style.transition = 'all 0.3s ease-out';
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    ctaButtons.forEach((btn) => buttonObserver.observe(btn));
  }

  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initProductAnimations, 500);
    });
  } else {
    setTimeout(initProductAnimations, 500);
  }
})();
