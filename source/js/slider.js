const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider__prev-button');
const nextButton = document.querySelector('.slider__next-button');
const slides = Array.from(slider.querySelectorAll('.slide'));
const paginationWrapper = slider.querySelector('.slider__buttons-wrapper');
const paginationButtons = Array.from(slider.querySelectorAll('.slider__button'));

let slideIndex = 0;

const checkSlides = () => {
  if (slideIndex === 0) {
    prevButton.disabled = true;
  } else prevButton.disabled = false;

  if (slideIndex === slides.length - 1) {
    nextButton.disabled = true;
  } else nextButton.disabled = false;
};

function onPrevButtonClick() {
  slideIndex -= 1;
  updateSlider();
}

function onNextButtonClick() {
  slideIndex += 1;
  updateSlider();
}

function setActivePaginationItem(currentSlideIndex) {
  document.querySelector('.slider__button--active').classList.remove('slider__button--active');

  const activePaginationItem = paginationWrapper.children[currentSlideIndex];

  if (activePaginationItem) {
    activePaginationItem.classList.add('slider__button--active');
  }
}

function initPagination() {
  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      slideIndex = index
      updateSlider()
    })
  })
}

function updateSlider() {
  checkSlides();

  setActivePaginationItem(slideIndex);

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

const initSlider = () => {
  prevButton.addEventListener('click', onPrevButtonClick);
  nextButton.addEventListener('click', onNextButtonClick);

  initPagination()

  updateSlider()
}

export { initSlider };
