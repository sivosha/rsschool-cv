const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const sliderWrapper = document.querySelector('.slider-wrapper');
let scrollPosition = 0;

// Scroll Left
leftArrow.addEventListener('click', () => {
  scrollPosition -= 300; // Slide by one slide's width
  if (scrollPosition < 0) scrollPosition = 0; // Prevent over-scrolling
  sliderWrapper.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

// Scroll Right
rightArrow.addEventListener('click', () => {
  scrollPosition += 300; // Slide by one slide's width
  if (scrollPosition > sliderWrapper.scrollWidth - sliderWrapper.clientWidth) {
    scrollPosition = sliderWrapper.scrollWidth - sliderWrapper.clientWidth; // Prevent over-scrolling
  }
  sliderWrapper.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});
