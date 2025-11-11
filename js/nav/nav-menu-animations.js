/**
 * Navigation Hover Animations
 * Adds smooth, interactive hover effects to nav links
 * Works with both desktop and mobile navigation
 * Non-breaking: Only adds JavaScript enhancements, preserves existing CSS
 */

(function() {
  'use strict';

  /**
   * Initialize nav hover animations after nav is injected
   * Uses MutationObserver to detect when nav.html is loaded
   */
  function initNavHoverAnimations() {
    // Desktop nav links
    const desktopLinks = document.querySelectorAll('.nav-link');
    // Mobile nav links
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    /**
     * Apply hover animation to link
     * @param {HTMLElement} link - The nav link element
     */
    function setupHoverAnimation(link) {
      if (!link) return;

      // Store original styles (don't modify CSS, just add effect via JS)
      const originalTransform = link.style.transform;

      link.addEventListener('mouseenter', function() {
        // Scale up slightly + subtle shadow
        this.style.transform = 'scale(1.08)';
        this.style.transition = 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)';
      });

      link.addEventListener('mouseleave', function() {
        // Return to normal
        this.style.transform = originalTransform || 'scale(1)';
        this.style.transition = 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)';
      });

      // Touch support for mobile (on touch, add the hover effect)
      link.addEventListener('touchstart', function(e) {
        if (!this.classList.contains('active')) {
          this.style.transform = 'scale(1.08)';
          this.style.transition = 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)';
        }
      });

      link.addEventListener('touchend', function(e) {
        if (!this.classList.contains('active')) {
          this.style.transform = originalTransform || 'scale(1)';
          this.style.transition = 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)';
        }
      });
    }

    /**
     * Enhanced color transition for active link
     * Keeps existing active styling, just enhances it
     */
    function enhanceActiveLink(link) {
      if (!link || !link.classList.contains('active')) return;

      link.style.transition = 'all 300ms ease-in-out';
      // Let CSS handle the color, but add smooth transition
      link.addEventListener('mouseenter', function() {
        if (this.classList.contains('active')) {
          this.style.transform = 'scale(1.12)';
        }
      });

      link.addEventListener('mouseleave', function() {
        if (this.classList.contains('active')) {
          this.style.transform = 'scale(1)';
        }
      });
    }

    // Apply to all desktop links
    desktopLinks.forEach((link) => {
      setupHoverAnimation(link);
      enhanceActiveLink(link);
    });

    // Apply to all mobile links
    mobileLinks.forEach((link) => {
      setupHoverAnimation(link);
      enhanceActiveLink(link);
    });
  }

  /**
   * Wait for nav to be injected, then initialize
   * Uses MutationObserver to detect nav placeholder population
   */
  function waitForNav() {
    const navPlaceholder = document.getElementById('nav-placeholder');

    if (!navPlaceholder) {
      // Retry after a delay
      setTimeout(waitForNav, 100);
      return;
    }

    // Check if nav is already loaded
    if (navPlaceholder.innerHTML.trim().length > 0) {
      initNavHoverAnimations();
    } else {
      // Observe for nav injection
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && navPlaceholder.innerHTML.trim().length > 0) {
            observer.disconnect();
            // Small delay to ensure nav links are interactive
            setTimeout(initNavHoverAnimations, 100);
          }
        });
      });

      observer.observe(navPlaceholder, { childList: true });

      // Fallback timeout (3s)
      setTimeout(() => {
        observer.disconnect();
        initNavHoverAnimations();
      }, 3000);
    }
  }

  // Start waiting for nav when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForNav);
  } else {
    waitForNav();
  }
})();
