 function openLightbox(item) {
      const imgSrc = item.querySelector('img').getAttribute('src');
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
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