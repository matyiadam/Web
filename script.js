document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navOverlay = document.getElementById('navOverlay');

    if (menuBtn && navOverlay) {
        menuBtn.addEventListener('click', () => {
            navOverlay.classList.toggle('active');
            
            const icon = menuBtn.querySelector('i');
            const span = menuBtn.querySelector('span');

            if (navOverlay.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                span.textContent = 'Bezár';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                span.textContent = 'Menü';
            }
        });
    }
    // Lightbox Galéria kezelés
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

let currentIndex = 0;

if (galleryImages.length > 0 && lightbox) {
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
            lightbox.style.display = 'flex';
        });
    });

    function showImage(index) {
        lightboxImg.src = galleryImages[index].src;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}
});