const lightbox = document.getElementById("lightbox");

const lightboxImg =  document.getElementById("lightboxImg");

function openLightbox(src) {
    
    lightbox.style.display = "flex";

    lightboxImg.src = src;

}

function closeLightbox() {
    
    lightbox.style.display = "none";
}
