/**
 * Animaciones para Sección "Sobre Tilapia Piscicultura"
 * Scroll reveal animation para info-section y diferenciadores
 */

document.addEventListener('DOMContentLoaded', function() {
  const infoSections = document.querySelectorAll('.info-section, .diferenciadores-section');

  infoSections.forEach((section, index) => {
    const textContent = section.querySelector('.texto, .texto2');
    const imageContent = section.querySelector('.image, .diferenciadores-img');

    if (!window.gsap || !window.gsap.ScrollTrigger) {
      console.log('⚠️ GSAP no disponible para peces-animations');
      return;
    }
    
    // ==========================================
    // 📦 Parent section reveal (primera .info-section)
    // Animamos el contenedor completo para dar el efecto de "bajar" al aparecer.
    // Complementa las animaciones de texto e imagen sin sustituirlas.
    // Solo se aplica a la primera .info-section.
    // ==========================================
    try {
      const firstInfo = document.querySelector('.info-section');
      if (firstInfo && window.gsap && window.gsap.ScrollTrigger) {
        gsap.fromTo(
          firstInfo,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: firstInfo,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    } catch (err) {
      console.warn('Peces: parent reveal error', err);
    }

    // ==========================================
    // 📝 ANIMACIÓN DEL TEXTO
    // ==========================================
    if (textContent) {
      // Estado inicial
      gsap.set(textContent, {
        opacity: 0,
        x: -50,
        y: 30
      });

      // Animación al scroll
      gsap.to(textContent, {
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.9,
        opacity: 1,
        x: 0,
        y: 0,
        ease: 'power2.out',
        delay: 0.1
      });

      // Animar elementos internos del texto
      const heading = textContent.querySelector('h2');
      const paragraph = textContent.querySelector('p');

      if (heading) {
        gsap.set(heading, { opacity: 0, y: 20 });
        gsap.to(heading, {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      }

      if (paragraph) {
        gsap.set(paragraph, { opacity: 0, y: 20 });
        gsap.to(paragraph, {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2
        });
      }
    }

    // ==========================================
    // 🖼️ ANIMACIÓN DE LA IMAGEN
    // ==========================================
    if (imageContent) {
      // Estado inicial
      gsap.set(imageContent, {
        opacity: 0,
        x: 50,
        y: 30,
        scale: 0.9
      });

      // Animación al scroll
      gsap.to(imageContent, {
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.9,
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        ease: 'power2.out',
        delay: 0.15
      });

      // Efecto de sombra durante scroll
      gsap.fromTo(
        imageContent,
        {
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%'
          },
          boxShadow: '0 15px 40px rgba(30, 136, 229, 0.3)',
          duration: 0.8,
          ease: 'power2.out'
        }
      );
    }
  });

  console.log('✅ Animaciones de sección Peces activadas');
});
