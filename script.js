const titles = ["Web Developerr", "Full-Stack Developerr", "Discord.js Developerr"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const rotatingTitle = document.querySelector(".rotating-title");

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        rotatingTitle.textContent = currentTitle.substring(0, charIndex--);
    } else {
        rotatingTitle.textContent = currentTitle.substring(0, charIndex++);
    }

    let delay = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentTitle.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        delay = 500;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

let isPlaying = false;

function toggleMusic() {
    const youtubePlayer = document.getElementById("youtube-player");
    const musicButton = document.querySelector(".play-music");

    if (!isPlaying) {
        youtubePlayer.src = "https://www.youtube.com/embed/8sQaDy8r5g4?autoplay=1&loop=1&playlist=8sQaDy8r5g4";
        document.getElementById("music-container").style.display = "block";
        musicButton.textContent = "Pause Music 🎵";
        isPlaying = true;
    } else {
        youtubePlayer.src = "";
        document.getElementById("music-container").style.display = "none";
        musicButton.textContent = "Play Music 🎵";
        isPlaying = false;
    }
}
