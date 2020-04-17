export default class Slider {
    constructor({
            page = null,
            dots = null, 
            next = null, 
            prev = null,
            activeClass = '',
            autoplay} = {}) {
        this.page = document.querySelector(page);
        try {
            this.slides = this.page.children;
        } catch (error) {};       
        this.dot = document.querySelectorAll(dots);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.slideIndex = 0;
    }
}