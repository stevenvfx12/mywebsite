// Tekst Rotatie
const titles = [  "Web Developer", "Full-Stack Developer"];
let titleIndex = 0;

function rotateTitle() {
    const rotatingTitle = document.querySelector(".rotating-title");
    rotatingTitle.textContent = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}

setInterval(rotateTitle, 5000);

// Back to Top button functionaliteit
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

// Muziek afspelen/pauzeren met YouTube
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
