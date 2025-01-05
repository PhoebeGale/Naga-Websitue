const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSliderPosition() {
    const offset = -currentIndex * 100;  // Use 100% to slide one full image at a time
    sliderTrack.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;  // Loop back to the first slide after the last
    updateSliderPosition();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  // Loop back to the last slide before the first
    updateSliderPosition();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);



