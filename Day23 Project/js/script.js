// Links navigation
const links = document.querySelectorAll("link");
links.addEventListener("click", () => {
    links.classList.add("active-link");
    // alert("I am texting")
})

function openLightbox(item) {
    const imgSrc = item.querySelector('img').getAttribute('src');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById("cap1");
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Optional: close lightbox when clicked outside image  
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
});




// Music toggle
const music = document.getElementById("bg-music1");
const musicToggle  = document.getElementById('music-Toggle1');
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicToggle.innerText = "🎶"
        musicToggle.classList.add("active-for-music")
        musicToggle.classList.add("active-for-color")
    }else {
        music.pause();
        musicToggle.innerText = "🔇"
        musicToggle.classList.remove("active-for-color");
        musicToggle.classList.remove("active-for-music")
    }
}

