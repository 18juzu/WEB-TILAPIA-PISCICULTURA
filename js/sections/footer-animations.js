/**
 * Footer Section Animations
 * Adds interactive reveal and hover effects for footer elements
 * Works on: All pages (footer is common)
 * Features: Staggered reveal, social icon hover, link interactions
 */

(function() {
  'use strict';

  /**
   * Initialize footer animations
   */
  function initFooterAnimations() {
    if (window.gsap && window.gsap.registerPlugin) {
      initGSAPFooterAnimations();
    } else {
      initIntersectionFooterAnimations();
    }
  }

  /**
   * GSAP ScrollTrigger animations for footer
   */
  function initGSAPFooterAnimations() {
    try {
      const gsap = window.gsap;

      // Footer container reveal
      const footer = document.querySelector('.footer');
      if (footer) {
        gsap.fromTo(
          footer,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: footer,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Footer sections staggered reveal
      const footerSections = document.querySelectorAll('.footer-section');
      if (footerSections.length > 0) {
        gsap.fromTo(
          footerSections,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: footer,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Footer logo animation
      const footerLogo = document.querySelector('.footer-logo');
      if (footerLogo) {
        footerLogo.addEventListener('mouseenter', function() {
          gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        footerLogo.addEventListener('mouseleave', function() {
          gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }

      // Social icons animation
      const socialLinks = document.querySelectorAll('.social-links a');
      if (socialLinks.length > 0) {
        socialLinks.forEach((link, index) => {
          link.addEventListener('mouseenter', function() {
            gsap.to(this, {
              scale: 1.25,
              color: '#27ae60',
              duration: 0.2,
              ease: 'back.out',
            });
          });

          link.addEventListener('mouseleave', function() {
            gsap.to(this, {
              scale: 1,
              color: '#999',
              duration: 0.2,
              ease: 'power2.out',
            });
          });
        });
      }

      // Footer links animation on scroll reveal
      const footerLinks = document.querySelectorAll('.footer-links a');
      if (footerLinks.length > 0) {
        gsap.fromTo(
          footerLinks,
          {
            opacity: 0,
            x: -15,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            scrollTrigger: {
              trigger: footer,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Hover effect on links
        footerLinks.forEach((link) => {
          link.addEventListener('mouseenter', function() {
            gsap.to(this, {
              x: 5,
              duration: 0.2,
            });
          });

          link.addEventListener('mouseleave', function() {
            gsap.to(this, {
              x: 0,
              duration: 0.2,
            });
          });
        });
      }

      // Subscribe button animation
      const subscribeBtn = document.querySelector('.footer-subscribe button');
      if (subscribeBtn) {
        subscribeBtn.addEventListener('mouseenter', function() {
          gsap.to(this, {
            scale: 1.1,
            duration: 0.2,
          });
        });

        subscribeBtn.addEventListener('mouseleave', function() {
          gsap.to(this, {
            scale: 1,
            duration: 0.2,
          });
        });

        // Click ripple effect
        subscribeBtn.addEventListener('click', function(e) {
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
            width: '150px',
            height: '150px',
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => ripple.remove(),
          });
        });
      }

      // Contact info animation
      const contactInfo = document.querySelectorAll('.contact-info p');
      if (contactInfo.length > 0) {
        gsap.fromTo(
          contactInfo,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: footer,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    } catch (error) {
      console.warn('GSAP footer animation error:', error);
      initIntersectionFooterAnimations();
    }
  }

  /**
   * IntersectionObserver fallback for footer animations
   */
  function initIntersectionFooterAnimations() {
    const footer = document.querySelector('.footer');

    if (!footer) return;

    // Observe footer for reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate footer container
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';

            // Animate footer sections with stagger
            const sections = entry.target.querySelectorAll('.footer-section');
            sections.forEach((section, index) => {
              section.style.animation = `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`;
              section.style.animationFillMode = 'both';
            });

            // Animate links
            const links = entry.target.querySelectorAll('.footer-links a');
            links.forEach((link, index) => {
              link.style.animation = `fadeInLeft 0.4s ease-out ${index * 0.08}s forwards`;
              link.style.animationFillMode = 'both';

              // Add hover effect
              link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'transform 0.2s ease-out';
              });

              link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
              });
            });

            // Add social icon animations
            const socialLinks = entry.target.querySelectorAll('.social-links a');
            socialLinks.forEach((link) => {
              link.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.25)';
                this.style.transition = 'all 0.2s ease-out';
              });

              link.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
              });
            });

            // Contact info stagger
            const contactInfo = entry.target.querySelectorAll('.contact-info p');
            contactInfo.forEach((p, index) => {
              p.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
              p.style.animationFillMode = 'both';
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(footer);
  }

  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initFooterAnimations, 500);
    });
  } else {
    setTimeout(initFooterAnimations, 500);
  }
})();
