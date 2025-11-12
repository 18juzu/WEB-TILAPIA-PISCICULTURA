/**
 * About Section Scroll Animations
 * Adds scroll-triggered reveal animations for about content
 * Works on: index.html (.about-section) and nosotros.html (multiple sections)
 * Fallback: Uses IntersectionObserver with CSS classes
 */

(function() {
  'use strict';

  /**
   * Safe GSAP integration - loads ScrollTrigger if available
   * Falls back to IntersectionObserver if GSAP not loaded
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
      }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

      document.querySelectorAll(selector).forEach((el) => observer.observe(el));
      return observer;
    },
  };

  /**
   * Initialize about section animations
   * Uses GSAP ScrollTrigger if available, falls back to IntersectionObserver
   */
  function initAboutAnimations() {
    // Try GSAP first
    if (window.gsap && window.gsap.registerPlugin) {
      initGSAPAnimations();
    } else {
      // Fallback to IntersectionObserver
      initIntersectionAnimations();
    }
  }

  /**
   * GSAP-based animations with ScrollTrigger
   */
  function initGSAPAnimations() {
    try {
      const gsap = window.gsap;

      // About section main reveal (index + nosotros)
      const aboutSection = document.querySelector('.about-section');
      if (aboutSection) {
        gsap.fromTo(
          aboutSection,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: aboutSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Species section (index) - 3 especies con iconos
      const speciesSection = document.querySelector('.species-section');
      if (speciesSection) {
        const speciesCards = speciesSection.querySelectorAll('.species-card');
        
        // Animar las cards principales
        gsap.fromTo(
          speciesCards,
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
              trigger: speciesSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Animar nombres de especies (species-name)
        const speciesNames = speciesSection.querySelectorAll('.species-name');
        if (speciesNames.length > 0) {
          gsap.fromTo(
            speciesNames,
            {
              opacity: 0,
              y: 10,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.12,
              scrollTrigger: {
                trigger: speciesSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // Animar DESCRIPCIONES de especies (IMPORTANTE: .species-description)
        const speciesDescriptions = speciesSection.querySelectorAll('.species-description');
        if (speciesDescriptions.length > 0) {
          gsap.fromTo(
            speciesDescriptions,
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.12,
              scrollTrigger: {
                trigger: speciesSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // Hover effect on species cards
        speciesCards.forEach((card) => {
          card.addEventListener('mouseenter', function() {
            gsap.to(this, {
              scale: 1.08,
              y: -10,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', function() {
            gsap.to(this, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }

      // Values intro section (index) - imagen + texto
      const valuesIntroSection = document.querySelector('.values-intro-section');
      if (valuesIntroSection) {
        gsap.fromTo(
          valuesIntroSection,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
                scrollTrigger: {
                trigger: valuesIntroSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
          }
        );

        // Animar imagen
        const valuesImg = valuesIntroSection.querySelector('.values-intro-img');
        if (valuesImg) {
          gsap.fromTo(
            valuesImg,
            {
              opacity: 0,
              x: -50,
              scale: 0.95,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
                scrollTrigger: {
                trigger: valuesIntroSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // Animar texto y lista de valores
        const valuesList = valuesIntroSection.querySelectorAll('.values-list li');
        if (valuesList.length > 0) {
          gsap.fromTo(
            valuesList,
            {
              opacity: 0,
              x: 30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              scrollTrigger: {
                trigger: valuesIntroSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }

      // Mission/Vision sections
      const missionVision = document.querySelector('.mission-vision');
      if (missionVision) {
        const cards = missionVision.querySelectorAll('.vision-card, .mission-card');
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            x: (i) => (i % 2 === 0 ? -30 : 30),
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
              scrollTrigger: {
              trigger: missionVision,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Values section
      const valuesSection = document.querySelector('.values-section');
      if (valuesSection) {
        const valueCards = valuesSection.querySelectorAll('.value-card');
        gsap.fromTo(
          valueCards,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: valuesSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Add hover effect to value cards
        valueCards.forEach((card) => {
          card.addEventListener('mouseenter', function() {
            gsap.to(this, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', function() {
            gsap.to(this, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }

      // Services section
      const servicesSection = document.querySelector('.services-banner');
      if (servicesSection) {
        const serviceItems = servicesSection.querySelectorAll('[class*="service"]');
        gsap.fromTo(
          serviceItems,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: servicesSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Timeline animation
      const timelineSection = document.querySelector('.timeline-section');
      if (timelineSection) {
        const timelineItems = timelineSection.querySelectorAll('[class*="timeline-item"], .timeline li');
        gsap.fromTo(
          timelineItems,
          {
            opacity: 0,
            x: (i) => (i % 2 === 0 ? -30 : 30),
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: timelineSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    } catch (error) {
      console.warn('GSAP animation error, falling back to IntersectionObserver:', error);
      initIntersectionAnimations();
    }
  }

  /**
   * IntersectionObserver fallback animations
   * Applies .is-visible class when element enters viewport
   */
  function initIntersectionAnimations() {
    // Observe about sections for reveal animation
    animUtils.observe('.about-section', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      }
    });

    // Observe mission/vision cards
    const missionVision = document.querySelector('.mission-vision');
    if (missionVision) {
      animUtils.observe('.vision-card, .mission-card', (entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
      });
    }

    // Observe species cards (index) - fallback
    animUtils.observe('.species-card', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';

        // Asegurar que nombres y descripciones también sean visibles
        const name = entry.target.querySelector('.species-name');
        const description = entry.target.querySelector('.species-description');
        
        if (name) {
          name.style.opacity = '1';
          name.style.animation = 'fadeInUp 0.5s ease-out forwards';
        }
        
        if (description) {
          description.style.opacity = '1';
          description.style.animation = 'fadeInUp 0.5s ease-out 0.1s forwards';
        }

        // hover fallback
        entry.target.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px) scale(1.05)';
          this.style.transition = 'transform 0.25s ease-out';
        });
        entry.target.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
          this.style.transition = 'transform 0.25s ease-out';
        });
      }
    });

    // Observe value cards with hover support
    animUtils.observe('.value-card', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';

        // Add hover animation
        entry.target.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05)';
          this.style.transition = 'transform 0.3s ease-out';
        });

        entry.target.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
          this.style.transition = 'transform 0.3s ease-out';
        });
      }
    });

    // Observe values intro section (image + text)
    animUtils.observe('.values-intro-section', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      }
    });

    // Observe products section
    animUtils.observe('.products-section', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      }
    });

    // Observe service items
    animUtils.observe('[class*="service"]', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      }
    });

    // Observe timeline items
    animUtils.observe('[class*="timeline-item"], .timeline li', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      }
    });
  }

  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initAboutAnimations, 500);
    });
  } else {
    setTimeout(initAboutAnimations, 500);
  }
})();
