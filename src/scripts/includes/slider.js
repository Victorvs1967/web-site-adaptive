export const slider = () => {

  const sliderLine = document.querySelector('.slider-line'),
        images = document.querySelectorAll('.slider__image'),
        btnPrev = document.querySelector('.slider__controls__btn_prev'),
        btnNext = document.querySelector('.slider__controls__btn_next');
  
  let count = 0;
  let width;

  const init = () => {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = `${width * images.length}px`;
    images.forEach(image => image.style.width = `${width}px`);
    rollSlider();
  };
  
  btnNext.addEventListener('click', () => {
    console.log(images.length);
    count += 1;
    if (count >= images.length) count = 0;
    rollSlider();
  }); 

  btnPrev.addEventListener('click', () => {
    count -= 1;
    if (count < 0) count = images.length - 1;
    rollSlider();
  }); 

  const rollSlider = () => {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
  };

  window.addEventListener('resize', () => init());
  init();

};