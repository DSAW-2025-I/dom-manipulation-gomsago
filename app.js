const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelectorAll('.carousel-item');
let index = 0;

function updateCarousel() {
    images.forEach((img, i) => img.style.display = i === index ? 'block' : 'none');
    prevButton.disabled = index === 0;
    nextButton.disabled = index === images.length - 1;
    prevButton.style.background = prevButton.disabled ? 'red' : 'green';
    nextButton.style.background = nextButton.disabled ? 'red' : 'green';
}

nextButton.onclick = () => { if (index < images.length - 1) index++; updateCarousel(); };
prevButton.onclick = () => { if (index > 0) index--; updateCarousel(); };

updateCarousel();
