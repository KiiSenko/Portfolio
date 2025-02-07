const dynamicText = document.querySelector(".hero-title span");
const words = ["DEVELOPER", "PROGRAMMER", "CYBER SECURITY SPECIALIST"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);  // Ottieni l'ID del target
      const targetElement = document.getElementById(targetId);

      let offset = 0;

      // Applica l'offset solo alla sezione "about"
      if (targetId === 'about') {
          offset = 50;  // Aggiungi 50px di spazio sopra per "about"
      }

      window.scrollTo({
          top: targetElement.offsetTop - offset,  // Usa l'offset calcolato
          behavior: 'smooth'  // Abilita lo scrolling fluido
      });
  });
});

