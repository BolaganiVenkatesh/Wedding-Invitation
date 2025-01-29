document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    const playButton = document.getElementById("play-music-btn");
    const navbarLinks = document.querySelectorAll(".navbar a");

    // Check if autoplay was previously allowed
    if (sessionStorage.getItem("autoplayAllowed")) {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
        if (playButton) playButton.style.display = "none"; // Hide button if present
    }

    // Play music on button click
    if (playButton) {
        playButton.addEventListener("click", () => {
            audio.play().then(() => {
                playButton.style.display = "none"; // Hide button
                sessionStorage.setItem("autoplayAllowed", "true"); // Store permission
            }).catch(error => console.log("Playback error:", error));
        });
    }

    // Play music when any navbar link is clicked
    navbarLinks.forEach(link => {
        link.addEventListener("click", () => {
            audio.play().catch(error => console.log("Autoplay blocked:", error));
        });
    });
});



    // Countdown timer functionality (optional)
    const countdownDate = new Date("Feb 6, 2025 10:30:00").getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("reminder-clock").innerHTML = "<h1>The big day is here!</h1>";
            return;
        }

        document.querySelector(".days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.querySelector(".hours").textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.querySelector(".minutes").textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.querySelector(".seconds").textContent = Math.floor((distance % (1000 * 60)) / 1000);
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

