let touchCount = 0;
    const maxNames = 30;

    document.addEventListener("touchstart", function (e) {
      if (touchCount < maxNames) {
        const name = document.createElement("div");
        name.className = "name-stamp";
        name.style.left = `${e.touches[0].clientX - 40}px`;
        name.style.top = `${e.touches[0].clientY - 40}px`;
        name.textContent = "Ratul ❤ Orpa";
        document.body.appendChild(name);

        touchCount++;
        setTimeout(() => name.remove(), 3000);
      }
    });

    function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.animation = `float ${3 + Math.random() * 3}s infinite`;
      heart.innerHTML = "💖";
      document.body.appendChild(heart);
    }

    for (let i = 0; i < 15; i++) {
      setTimeout(createHeart, i * 300);
    }

    var typed = new Typed("#typing-text", {
      strings: [
        "One Month of Wonderful Moments",
        "I LOVE YOU",
        "My sweet heart",
        "Our Journey Just Began...",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    });

    // Ensure only one video plays at a time
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.addEventListener("play", () => {
        videos.forEach((v) => {
          if (v !== video) v.pause();
        });
      });
    });