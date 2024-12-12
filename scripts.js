const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; 
    carouselImages.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : totalImages - 1;
    updateCarousel();
});

