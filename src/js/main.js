import BunnerSlider from './modules/slider/bunner-slider';
import MiniSlider from './modules/slider/mini-slider';
import Download from './modules/download';
import Form from './modules/form';
import init from './modules/map';
import Modal from './modules/modal-img';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    new BunnerSlider({
        page: '.bunner-carousel-slides',
        dots: '.bunner-dots .dot',
        prev: '.bunner-carousel-prev',
        next: '.bunner-carousel-next',
        activeClass: 'active'
    }).init();

    new MiniSlider({
        page: '.works-carousel-images',
        prev: '.works-button-prev',
        next: '.works-button-next',
        count: 2
    }).init();

    new Download('.clients-box .btn-download').init();

    new Form('.form .form-contact-us').init();

    try {
        ymaps.ready(init);
    } catch (error) {}

    new Modal('.modal-dialog', '.modal-close', '.portfolio-icons li').render();
    new Modal('.modal-dialog', '.modal-close', '.works-carousel-images li').render();
   
});