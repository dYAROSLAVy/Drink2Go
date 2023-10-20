const rangeSlider = document.querySelector('.price-range__slider');
const inputMin = document.querySelector('.price-range__value--min');
const inputMax = document.querySelector('.price-range__value--max');

const inputs = [inputMin, inputMax];

const initRangeSlider = () => {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    range: {
      'min': [0],
      'max': [1000]
    },
    step: 1,
  });

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([null, this.value]);
  });
}

export { initRangeSlider };
