// Registers GSAP ScrollTrigger plugin safely and sets small defaults.
// This file should be loaded immediately after GSAP & ScrollTrigger CDN scripts.
(function() {
  try {
    if (window.gsap && window.ScrollTrigger) {
      // Register plugin once
      if (!gsap.__registeredScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.__registeredScrollTrigger = true;
      }

      // Optional sensible defaults (non-invasive)
      gsap.defaults({ duration: 0.6, ease: 'power2.out' });
    }
  } catch (e) {
    // Don't break page if registration fails
    console.warn('GSAP register plugin failed:', e);
  }
})();
