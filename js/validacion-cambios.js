/**
 * Script de Validación Rápida
 * Copia y pega en DevTools Console para validar que todo está funcionando
 */

console.log('%c🔍 VALIDACIÓN DE CAMBIOS - Especies y Hero Typing', 'color: #1e88e5; font-size: 16px; font-weight: bold;');

// 1. Validar hero typing
console.log('\n%c1️⃣ Hero Typing Animation:', 'color: #27ae60; font-weight: bold;');
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroTitle && heroSubtitle) {
  console.log('✅ Hero title y subtitle encontrados');
  console.log('   - Title:', heroTitle.innerText.substring(0, 50) + '...');
  console.log('   - Subtitle:', heroSubtitle.innerText);
  const glow = window.getComputedStyle(heroSubtitle).textShadow;
  if (glow && glow !== 'none') {
    console.log('✅ Glow/textShadow aplicado:', glow.substring(0, 50) + '...');
  } else {
    console.log('⚠️  No hay glow detectado (puede estar a punto de aplicarse)');
  }
} else {
  console.log('❌ Hero elements no encontrados');
}

// 2. Validar species section
console.log('\n%c2️⃣ Species Section Animations:', 'color: #27ae60; font-weight: bold;');
const speciesSection = document.querySelector('.species-section');
const speciesCards = document.querySelectorAll('.species-card');
const speciesNames = document.querySelectorAll('.species-name');
const speciesDescriptions = document.querySelectorAll('.species-description');

if (speciesSection) {
  console.log(`✅ Species section encontrada`);
  console.log(`   - Cards encontradas: ${speciesCards.length}`);
  console.log(`   - Names encontrados: ${speciesNames.length}`);
  console.log(`   - Descriptions encontradas: ${speciesDescriptions.length}`);
  
  if (speciesDescriptions.length > 0) {
    console.log('✅ Descripciones existen en el DOM');
    speciesDescriptions.forEach((desc, i) => {
      console.log(`   [${i+1}] "${desc.innerText.substring(0, 40)}..."`);
    });
  } else {
    console.log('❌ No se encontraron descripciones');
  }
} else {
  console.log('❌ Species section no encontrada');
}

// 3. Validar GSAP y ScrollTrigger
console.log('\n%c3️⃣ Librerías Cargadas:', 'color: #27ae60; font-weight: bold;');
if (window.gsap) {
  console.log('✅ GSAP cargado:', window.gsap.version);
} else {
  console.log('❌ GSAP NO cargado');
}

if (window.gsap && window.gsap.plugins.scrollTrigger) {
  console.log('✅ ScrollTrigger registrado');
} else {
  console.log('⚠️  ScrollTrigger no está registrado');
}

// 4. Validar keyframes en CSS
console.log('\n%c4️⃣ CSS Keyframes:', 'color: #27ae60; font-weight: bold;');
const stylesheets = document.styleSheets;
let fadeInUpFound = false;
try {
  for (let sheet of stylesheets) {
    try {
      const rules = sheet.cssRules || sheet.rules;
      for (let rule of rules) {
        if (rule.name === 'fadeInUp' || rule.name === 'fadeIn') {
          fadeInUpFound = true;
          console.log(`✅ Encontrado keyframe: @${rule.name}`);
        }
      }
    } catch(e) {}
  }
  if (!fadeInUpFound) {
    console.log('⚠️  Keyframes fadeInUp/fadeIn no visibles (pueden estar en archivo externo)');
  }
} catch(e) {
  console.log('⚠️  No se pudo verificar keyframes (CORS)', e.message);
}

// 5. Test de animación simulada
console.log('\n%c5️⃣ Simulación de Animación:', 'color: #27ae60; font-weight: bold;');
if (speciesDescriptions.length > 0) {
  const testDesc = speciesDescriptions[0];
  const originalOpacity = window.getComputedStyle(testDesc).opacity;
  console.log(`   Opacidad actual de descripción 1: ${originalOpacity}`);
  console.log('   (Baja la página lentamente para ver la animación de las descripciones)');
}

console.log('\n%c✨ Validación completada', 'color: #1e88e5; font-size: 14px; font-weight: bold;');
console.log('%cNext: Baja lentamente la página para ver las animaciones en acción', 'color: #666; font-style: italic;');
