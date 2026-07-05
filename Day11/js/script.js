// Background music toggle
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicToggle.innerText = "🔊 Music On";
  } else {
    music.pause();
    musicToggle.innerText = "🔇 Music Off";
  }
}

// Optional: start with lower volume
 music.volume = 7;

const volume = document.getElementById("volume");

volume.addEventListener("input", (e) => {
  const value = +e.volume.value
})


