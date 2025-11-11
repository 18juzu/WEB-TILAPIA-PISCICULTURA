/**
 * Animaciones Interactivas para Tarjetas de Misión y Visión
 * Hover effects: Scale, Shadow, Color, Icon Animation
 */

document.addEventListener('DOMContentLoaded', function() {
  const mvCards = document.querySelectorAll('.mv-card');

  mvCards.forEach((card, index) => {
    // ✨ ANIMACIÓN DE ENTRADA (ScrollTrigger)
    if (window.gsap && window.gsap.ScrollTrigger) {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        delay: index * 0.15,
        ease: 'power2.out'
      });

      // Estado inicial
      gsap.set(card, { opacity: 0, y: 30 });
    }

    // ==========================================
    // 🎯 HOVER EFFECTS CON GSAP
    // ==========================================

    card.addEventListener('mouseenter', function() {
      const cardTitle = this.querySelector('h3');
      const cardIcon = this.querySelector('.mv-icon');
      const cardText = this.querySelector('p');

      // 1️⃣ Escala y Sombra Principal
      if (window.gsap) {
        gsap.to(this, {
          duration: 0.4,
          scale: 1.08,
          boxShadow: '0 20px 50px rgba(30, 136, 229, 0.4)',
          ease: 'power2.out'
        });

        // 2️⃣ Animar el Ícono (Rotación + Escala)
        if (cardIcon) {
          gsap.to(cardIcon, {
            duration: 0.5,
            rotation: 15,
            scale: 1.2,
            textShadow: '0 0 20px rgba(30, 136, 229, 0.6)',
            ease: 'elastic.out(1, 0.5)'
          });
        }

        // 3️⃣ Color del Título (Brillo extra)
        if (cardTitle) {
          gsap.to(cardTitle, {
            duration: 0.4,
            color: '#1e88e5',
            textShadow: '0 0 15px rgba(30, 136, 229, 0.5)',
            ease: 'power2.out'
          });
        }

        // 4️⃣ Texto se desliza suavemente
        if (cardText) {
          gsap.to(cardText, {
            duration: 0.4,
            x: 5,
            opacity: 0.95,
            ease: 'power2.out'
          });
        }
      }

      // Fallback sin GSAP (CSS)
      this.style.transform = 'scale(1.08)';
      this.style.boxShadow = '0 20px 50px rgba(30, 136, 229, 0.4)';
    });

    card.addEventListener('mouseleave', function() {
      const cardTitle = this.querySelector('h3');
      const cardIcon = this.querySelector('.mv-icon');
      const cardText = this.querySelector('p');

      if (window.gsap) {
        // Reset escala y sombra
        gsap.to(this, {
          duration: 0.4,
          scale: 1,
          boxShadow: '0 5px 20px rgba(44, 6, 6, 0.3)',
          ease: 'power2.out'
        });

        // Reset ícono
        if (cardIcon) {
          gsap.to(cardIcon, {
            duration: 0.5,
            rotation: 0,
            scale: 1,
            textShadow: 'none',
            ease: 'elastic.out(1, 0.5)'
          });
        }

        // Reset título
        if (cardTitle) {
          gsap.to(cardTitle, {
            duration: 0.4,
            color: '#1e88e5',
            textShadow: 'none',
            ease: 'power2.out'
          });
        }

        // Reset texto
        if (cardText) {
          gsap.to(cardText, {
            duration: 0.4,
            x: 0,
            opacity: 1,
            ease: 'power2.out'
          });
        }
      }

      // Fallback reset
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 5px 20px rgba(44, 6, 6, 0.3)';
    });
  });

  // ==========================================
  // 🌟 EFECTO DE BRILLO EN FONDO (Hover global)
  // ==========================================

  const mvSection = document.querySelector('.mission-vision');
  if (mvSection) {
    mvSection.addEventListener('mouseenter', function() {
      if (window.gsap) {
        gsap.to(this, {
          duration: 0.6,
          backgroundColor: '#f5f5f5',
          ease: 'power2.out'
        });
      }
    });

    mvSection.addEventListener('mouseleave', function() {
      if (window.gsap) {
        gsap.to(this, {
          duration: 0.6,
          backgroundColor: '#ffffff',
          ease: 'power2.out'
        });
      }
    });
  }
});
