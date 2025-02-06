// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Configuration de l'Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  // Fonction de callback pour l'observation
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".gallery-item");

        items.forEach((item, index) => {
          // Délai progressif pour chaque élément
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, index * 100); // 100ms d'intervalle entre chaque élément
        });

        observer.unobserve(entry.target);
      }
    });
  };

  // Création de l'Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Application sur chaque rangée
  document.querySelectorAll(".gallery-row").forEach((row) => {
    // Reset des propriétés CSS pour l'animation initiale
    row.querySelectorAll(".gallery-item").forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
      item.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    });

    observer.observe(row);
  });
});

// JavaScript pour l'interactivité avancée
document.querySelectorAll(".planet").forEach((planet) => {
  planet.addEventListener("mouseenter", () => {
    planet.style.animationPlayState = "paused";
    planet.querySelector("img").style.transform = "scale(1.1)";
  });

  planet.addEventListener("mouseleave", () => {
    planet.style.animationPlayState = "running";
    planet.querySelector("img").style.transform = "scale(1)";
  });

  planet.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "fullscreen-overlay";
    overlay.innerHTML = `
        <img src="${planet.querySelector("img").src}" class="zoomed-photo">
        <button class="close-btn">×</button>
      `;

    document.body.appendChild(overlay);

    overlay.querySelector(".close-btn").addEventListener("click", () => {
      overlay.remove();
    });
  });
});

// JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const wheel = document.querySelector(".rotating-wheel");
  const photos = document.querySelectorAll(".photo-item");
  const speedButtons = document.querySelectorAll(".speed-btn");
  const playPauseButton = document.querySelector(".play-pause");
  let isPlaying = true;

  // Définir le nombre total d'éléments
  photos.forEach((photo) => {
    photo.style.setProperty("--total-items", photos.length);
  });

  // Contrôle de vitesse
  speedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const speed = parseFloat(button.dataset.speed);
      wheel.style.animationDuration = `${40 / speed}s`;
    });
  });

  // Play/Pause
  playPauseButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    wheel.style.animationPlayState = isPlaying ? "running" : "paused";
    playPauseButton.textContent = isPlaying ? "⏸" : "▶";
  });

  // Interaction au survol
  photos.forEach((photo) => {
    photo.addEventListener("mouseenter", () => {
      photo.style.transform = photo.style.transform + " scale(1.2)";
    });

    photo.addEventListener("mouseleave", () => {
      photo.style.transform = photo.style.transform.replace(" scale(1.2)", "");
    });
  });
});


// Animation pour les trois sections de l'écosystème créatif
ScrollReveal().reveal('#service-1', {
  origin: 'left', // L'élément vient de la gauche
  distance: '100px', // Distance de déplacement
  duration: 1000, // Durée de l'animation en ms
  delay: 300, // Délai avant le début de l'animation
  easing: 'ease-in-out', // Type d'animation
});

ScrollReveal().reveal('#service-2', {
  origin: 'bottom', // L'élément vient du bas
  distance: '100px',
  duration: 1000,
  delay: 500, // Délai légèrement plus long pour un effet en cascade
  easing: 'ease-in-out',
});

ScrollReveal().reveal('#service-3', {
  origin: 'right', // L'élément vient de la droite
  distance: '100px',
  duration: 1000,
  delay: 700, // Délai encore plus long pour un effet en cascade
  easing: 'ease-in-out',
});