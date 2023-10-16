const effectLevelSlider = document.querySelector('.price-range__slider');
const inputMin = document.querySelector('.price-range__value--min');
const inputMax = document.querySelector('.price-range__value--max');

const inputs = [inputMin, inputMax];

const initRangeSlider = () => {
  noUiSlider.create(effectLevelSlider, {
    start: [0, 900],
    connect: true,
    range: {
      'min': [0],
      'max': [1000]
    },
    step: 1,
  });

  effectLevelSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () {
    effectLevelSlider.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    effectLevelSlider.noUiSlider.set([null, this.value]);
  });
}

export { initRangeSlider };
