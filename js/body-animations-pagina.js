/**
 * Body Full Page Animations Activator
 * Ensures ALL body elements and sections are animated and interactive
 * Particularly important for pages like nosotros.html with multiple sections
 * 
 * This file should be loaded AFTER all section-specific animation files
 * to ensure global body-level animations work alongside section animations
 */

(function() {
  'use strict';

  /**
   * Activate full-page body animations
   * Ensures all content is visible and interactive
   */
  function initBodyAnimations() {
    if (window.gsap && window.gsap.registerPlugin) {
      initGSAPBodyAnimations();
    } else {
      initIntersectionBodyAnimations();
    }
  }

  /**
   * GSAP-based full body animations
   */
  function initGSAPBodyAnimations() {
    try {
      const gsap = window.gsap;

      // Ensure body is visible
      document.body.style.opacity = '1';

      // Animate all main sections that might be missed
      const allSections = document.querySelectorAll(
        'section, [class*="section"], [class*="container"]'
      );

      if (allSections.length > 0) {
        allSections.forEach((section, index) => {
          // Skip if already animated
          if (section.style.animation || section.classList.contains('animated')) {
            return;
          }

          // Check if section is in viewport
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

          if (isVisible && section.offsetParent !== null) {
            // Already visible, skip animation
            section.style.opacity = '1';
          } else {
            // Apply scroll trigger animation
            if (!section.getAttribute('data-animated')) {
              gsap.fromTo(
                section,
                {
                  opacity: 0,
                  y: 20,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    onEnter: () => section.setAttribute('data-animated', 'true'),
                  },
                }
              );
            }
          }
        });
      }

      // Ensure all images are visible and animated
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('data-animated')) {
          gsap.fromTo(
            img,
            {
              opacity: 0,
              scale: 0.95,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                toggleActions: 'play none none none',
                onEnter: () => img.setAttribute('data-animated', 'true'),
              },
            }
          );
        }
      });

      // Activate all headings
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.hasAttribute('data-animated')) {
          gsap.fromTo(
            heading,
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                toggleActions: 'play none none none',
                onEnter: () => heading.setAttribute('data-animated', 'true'),
              },
            }
          );
        }
      });

      // Animate all paragraphs
      const paragraphs = document.querySelectorAll('p');
      paragraphs.forEach((para) => {
        if (!para.hasAttribute('data-animated') && !para.parentElement.classList.contains('animated')) {
          gsap.fromTo(
            para,
            {
              opacity: 0,
              y: 10,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: para,
                start: 'top 85%',
                toggleActions: 'play none none none',
                onEnter: () => para.setAttribute('data-animated', 'true'),
              },
            }
          );
        }
      });

      // Activate all lists and list items
      const listItems = document.querySelectorAll('li, ul, ol');
      listItems.forEach((item, index) => {
        if (!item.hasAttribute('data-animated')) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: -15,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none',
                onEnter: () => item.setAttribute('data-animated', 'true'),
              },
            }
          );
        }
      });

      // Ensure all buttons are interactive
      const buttons = document.querySelectorAll('button, .btn, [class*="btn"]');
      buttons.forEach((btn) => {
        btn.addEventListener('mouseenter', function() {
          gsap.to(this, {
            scale: 1.05,
            duration: 0.2,
          });
        });

        btn.addEventListener('mouseleave', function() {
          gsap.to(this, {
            scale: 1,
            duration: 0.2,
          });
        });
      });

      console.log('✅ Body animations activated successfully');
    } catch (error) {
      console.warn('GSAP body animation error:', error);
      initIntersectionBodyAnimations();
    }
  }

  /**
   * IntersectionObserver fallback for body animations
   */
  function initIntersectionBodyAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all sections
    document.querySelectorAll('section, [class*="section"]').forEach((el) => {
      observer.observe(el);
    });

    // Observe all major content elements
    document.querySelectorAll('h1, h2, h3, img, p').forEach((el) => {
      observer.observe(el);
    });
  }

  // Initialize when DOM is fully ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initBodyAnimations, 1000); // Dar tiempo para otros scripts
    });
  } else {
    setTimeout(initBodyAnimations, 1000);
  }
})();
