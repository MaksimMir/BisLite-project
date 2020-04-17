import BunnerSlider from './modules/slider/bunner-slider';

window.addEventListener('DOMContentLoaded', () => {
    new BunnerSlider({
        page: '.bunner-carousel-slides',
        dots: '.bunner-dots .dot',
        prev: '.bunner-carousel-prev',
        next: '.bunner-carousel-next',
        activeClass: 'active'
    }).init();
});