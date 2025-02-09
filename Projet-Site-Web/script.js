// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer configuration
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  // Callback function for the observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".gallery-item");

        items.forEach((item, index) => {
          // Progressive delay for each item
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, index * 100); // 100ms interval between each item
        });

        observer.unobserve(entry.target);
      }
    });
  };

  // Create the Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Apply to each row
  document.querySelectorAll(".gallery-row").forEach((row) => {
    // Reset CSS properties for initial animation
    row.querySelectorAll(".gallery-item").forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
      item.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    });

    observer.observe(row);
  });
});

// JavaScript for advanced interactivity
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

  // Set the total number of items
  photos.forEach((photo) => {
    photo.style.setProperty("--total-items", photos.length);
  });

  // Speed control
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

  // Hover interaction
  photos.forEach((photo) => {
    photo.addEventListener("mouseenter", () => {
      photo.style.transform = photo.style.transform + " scale(1.2)";
    });

    photo.addEventListener("mouseleave", () => {
      photo.style.transform = photo.style.transform.replace(" scale(1.2)", "");
    });
  });
});

// JavaScript to trigger animations
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".video-overlay, .content-section, .services-section, .cta-section"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          if (entry.target.classList.contains("video-overlay")) {
            entry.target.classList.add("animate-fadeInUp");
          } else if (entry.target.classList.contains("content-section")) {
            entry.target.classList.add("animate-fadeInLeft");
          } else if (entry.target.classList.contains("services-section")) {
            entry.target.classList.add("animate-fadeInRight");
          } else if (entry.target.classList.contains("cta-section")) {
            entry.target.classList.add("animate-fadeInUp");
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});