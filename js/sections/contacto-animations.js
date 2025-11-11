/**
 * Contact Section Animations
 * Adds scroll-triggered reveals and interactive form animations
 * Works on: contacto.html (form fields, info section, buttons)
 * Features: Form field focus effects, submit button hover, info section reveal
 */

(function() {
  'use strict';

  /**
   * Safe utility for animations
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
   * Initialize contact animations
   */
  function initContactAnimations() {
    if (window.gsap && window.gsap.registerPlugin) {
      initGSAPContactAnimations();
    } else {
      initIntersectionContactAnimations();
    }
  }

  /**
   * GSAP ScrollTrigger animations for contact
   */
  function initGSAPContactAnimations() {
    try {
      const gsap = window.gsap;

      // Info section reveal
      const infoSection = document.querySelector('.info-section, [class*="info"]');
      if (infoSection) {
        gsap.fromTo(
          infoSection,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: infoSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // About section (form) reveal
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
            duration: 0.7,
            scrollTrigger: {
              trigger: aboutSection,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Form fields staggered animation
      const formFields = document.querySelectorAll('input, textarea, select, .form-group, .form-field');
      if (formFields.length > 0) {
        gsap.fromTo(
          formFields,
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
              trigger: aboutSection || formFields[0],
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Add focus animation to form inputs
        formFields.forEach((field) => {
          if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA' || field.tagName === 'SELECT') {
            field.addEventListener('focus', function() {
              gsap.to(this, {
                duration: 0.2,
                boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.2)',
                ease: 'power2.out',
              });
            });

            field.addEventListener('blur', function() {
              gsap.to(this, {
                duration: 0.2,
                boxShadow: '0 0 0 0px rgba(76, 175, 80, 0)',
                ease: 'power2.out',
              });
            });
          }
        });
      }

      // Submit button animation
      const submitButton = document.querySelector('button[type="submit"], .submit-btn, [class*="submit"]');
      if (submitButton) {
        submitButton.addEventListener('mouseenter', function() {
          gsap.to(this, {
            scale: 1.05,
            duration: 0.2,
            ease: 'power2.out',
          });
        });

        submitButton.addEventListener('mouseleave', function() {
          gsap.to(this, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out',
          });
        });

        // Click ripple effect
        submitButton.addEventListener('click', function(e) {
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const ripple = document.createElement('span');
          ripple.style.position = 'absolute';
          ripple.style.left = x + 'px';
          ripple.style.top = y + 'px';
          ripple.style.width = '0';
          ripple.style.height = '0';
          ripple.style.borderRadius = '50%';
          ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          ripple.style.pointerEvents = 'none';

          this.style.position = 'relative';
          this.style.overflow = 'hidden';
          this.appendChild(ripple);

          gsap.to(ripple, {
            width: '200px',
            height: '200px',
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => ripple.remove(),
          });
        });
      }

      // Contact info cards (phone, email, etc.)
      const contactCards = document.querySelectorAll('[class*="contact-card"], [class*="info-card"]');
      if (contactCards.length > 0) {
        gsap.fromTo(
          contactCards,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: infoSection || contactCards[0],
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Hover effect for contact cards
        contactCards.forEach((card) => {
          card.addEventListener('mouseenter', function() {
            gsap.to(this, {
              y: -5,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              duration: 0.3,
            });
          });

          card.addEventListener('mouseleave', function() {
            gsap.to(this, {
              y: 0,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              duration: 0.3,
            });
          });
        });
      }
    } catch (error) {
      console.warn('GSAP contact animation error:', error);
      initIntersectionContactAnimations();
    }
  }

  /**
   * IntersectionObserver fallback for contact animations
   */
  function initIntersectionContactAnimations() {
    // Observe info section
    animUtils.observe('.info-section, [class*="info"]', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.7s ease-out forwards';
      }
    });

    // Observe form section
    animUtils.observe('.about-section', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.7s ease-out forwards';
      }
    });

    // Observe form fields with stagger
    const formFields = document.querySelectorAll('input, textarea, select, .form-group, .form-field');
    const fieldObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * 0.08;
            entry.target.style.animation = `fadeInLeft 0.5s ease-out ${delay}s forwards`;
            entry.target.style.animationFillMode = 'both';

            // Add focus effect via CSS
            if (entry.target.tagName === 'INPUT' || entry.target.tagName === 'TEXTAREA') {
              entry.target.addEventListener('focus', function() {
                this.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.2)';
                this.style.transition = 'box-shadow 0.2s ease-out';
              });

              entry.target.addEventListener('blur', function() {
                this.style.boxShadow = 'none';
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    formFields.forEach((field) => fieldObserver.observe(field));

    // Observe contact cards
    animUtils.observe('[class*="contact-card"], [class*="info-card"]', (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';

        // Add hover effect
        entry.target.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
          this.style.transition = 'all 0.3s ease-out';
          this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });

        entry.target.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
      }
    });

    // Submit button effects
    const submitButton = document.querySelector('button[type="submit"], .submit-btn, [class*="submit"]');
    if (submitButton) {
      submitButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease-out';
      });

      submitButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    }
  }

  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initContactAnimations, 500);
    });
  } else {
    setTimeout(initContactAnimations, 500);
  }
})();
