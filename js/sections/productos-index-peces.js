/**
 * Products/Gallery Scroll Animations
 * Adds scroll-triggered reveal and hover effects for product cards
 * Works on: index.html (.products-section) and peces.html (.productos)
 * Features: Staggered reveal, card hover zoom, interactive effects
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

      // Products section container reveal
      const productsSection = document.querySelector('.products-section, .productos, .diferenciadores-section');
      if (productsSection) {
        gsap.fromTo(
          productsSection,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: productsSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Product cards staggered reveal + hover
      const productCards = document.querySelectorAll(
        '.product-card, .products-grid > div, [class*="product"], [class*="card"]'
      );

      if (productCards.length > 0) {
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
            stagger: 0.1,
            scrollTrigger: {
              trigger: productsSection || productCards[0],
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Add hover zoom effect to each card
        productCards.forEach((card) => {
          card.addEventListener('mouseenter', function() {
            gsap.to(this, {
              scale: 1.08,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });

            // Animate shadow or overlay if exists
            const overlay = this.querySelector('[class*="overlay"], [class*="shadow"]');
            if (overlay) {
              gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
              });
            }
          });

          card.addEventListener('mouseleave', function() {
            gsap.to(this, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });

            const overlay = this.querySelector('[class*="overlay"], [class*="shadow"]');
            if (overlay) {
              gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
              });
            }
          });
        });
      }

      // Animate product info/description on scroll
      const productInfos = document.querySelectorAll('[class*="product-info"], [class*="description"]');
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
              trigger: productsSection || productInfos[0],
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
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
    // Observe products section
    const productsSection = document.querySelector('.products-section, .productos, .diferenciadores-section');
    if (productsSection) {
      animUtils.observe('.products-section, .productos, .diferenciadores-section', (entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
      });
    }

    // Observe product cards with stagger effect via CSS/JS
    const productCards = document.querySelectorAll(
      '.product-card, .products-grid > div, [class*="product"], [class*="card"]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Apply animation with stagger
            const delay = index * 0.1;
            entry.target.style.animation = `fadeInUp 0.6s ease-out ${delay}s forwards`;
            entry.target.style.animationFillMode = 'both';

            // Add hover effect
            entry.target.addEventListener('mouseenter', function() {
              this.style.transform = 'scale(1.08)';
              this.style.transition = 'transform 0.3s ease-out';
            });

            entry.target.addEventListener('mouseleave', function() {
              this.style.transform = 'scale(1)';
              this.style.transition = 'transform 0.3s ease-out';
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    productCards.forEach((card) => observer.observe(card));

    // Observe product info/description
    animUtils.observe('[class*="product-info"], [class*="description"]', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInLeft 0.5s ease-out forwards';
      }
    });
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
