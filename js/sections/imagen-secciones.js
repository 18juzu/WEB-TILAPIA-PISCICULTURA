/**
 * Animaciones Interactivas para Imágenes
 * Hover effects: Scale, Shadow, Brightness, Rotation
 * Aplicable a TODAS las imágenes de la página
 */

document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todas las imágenes relevantes en la página
  const images = document.querySelectorAll(
    '.info-img, ' +                    // Peces: info-section
    '.image, ' +                       // Peces: diferenciadores
    '.diferenciadores-img, ' +         // Peces: diferenciadores
    '.product-image, ' +               // Index/Peces: galería
    '.tarjeta img, ' +                 // Peces: tarjetas
    '.about-img, ' +                   // Index: bienvenido
    '.info-img, ' +                    // Contacto: info-section
    '.species-icon, ' +                // Index: species-section iconos
    '.values-intro-img, ' +             // Index: values-intro-section imagen
    'img[src*="assets"]'                // Cualquier imagen en assets
  );

  images.forEach((img, index) => {
    // ✨ ANIMACIÓN DE ENTRADA (ScrollTrigger)
    if (window.gsap && window.gsap.ScrollTrigger) {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top 85%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        delay: index * 0.05,
        ease: 'power2.out'
      });

      // Estado inicial (fuera de vista)
      gsap.set(img, { 
        opacity: 0, 
        y: 40,
        scale: 0.95
      });
    }

    // ==========================================
    // 🎯 HOVER EFFECTS CON GSAP
    // ==========================================

    img.style.cursor = 'pointer';

    img.addEventListener('mouseenter', function() {
      if (window.gsap) {
        // 1️⃣ Escala suave
        gsap.to(this, {
          duration: 0.4,
          scale: 1.08,
          ease: 'power2.out'
        });

        // 2️⃣ Sombra profunda
        gsap.to(this, {
          duration: 0.4,
          filter: 'drop-shadow(0 15px 40px rgba(30, 136, 229, 0.5)) brightness(1.1)',
          ease: 'power2.out'
        });

        // 3️⃣ Rotación suave (solo si la imagen es pequeña)
        if (this.offsetWidth < 400) {
          gsap.to(this, {
            duration: 0.6,
            rotation: 2,
            ease: 'elastic.out(1, 0.5)'
          });
        }
      }

      // Fallback sin GSAP
      this.style.transform = 'scale(1.08)';
      this.style.filter = 'drop-shadow(0 15px 40px rgba(30, 136, 229, 0.5)) brightness(1.1)';
    });

    img.addEventListener('mouseleave', function() {
      if (window.gsap) {
        // Reset escala
        gsap.to(this, {
          duration: 0.4,
          scale: 1,
          ease: 'power2.out'
        });

        // Reset filter
        gsap.to(this, {
          duration: 0.4,
          filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1)) brightness(1)',
          ease: 'power2.out'
        });

        // Reset rotación
        gsap.to(this, {
          duration: 0.6,
          rotation: 0,
          ease: 'elastic.out(1, 0.5)'
        });
      }

      // Fallback reset
      this.style.transform = 'scale(1)';
      this.style.filter = 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1)) brightness(1)';
    });

    // ==========================================
    // 🌟 EFECTO DE CLICK (Ripple pulse)
    // ==========================================

    img.addEventListener('click', function(e) {
      if (!window.gsap) return;

      // Crear pulso visual
      gsap.to(this, {
        duration: 0.6,
        boxShadow: '0 0 0 20px rgba(30, 136, 229, 0.2)',
        ease: 'power1.out'
      });

      gsap.to(this, {
        duration: 0.6,
        boxShadow: '0 0 0 0px rgba(30, 136, 229, 0)',
        delay: 0.3,
        ease: 'power1.out'
      });
    });
  });

  console.log(`✅ ${images.length} imágenes con animaciones interactivas activadas`);
});
