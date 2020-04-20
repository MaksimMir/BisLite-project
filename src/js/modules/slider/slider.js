export default class Slider {
    constructor({
            page = null,
            dots = null, 
            next = null, 
            prev = null,
            activeClass = '',
            count = 1,
            autoplay} = {}) {
        try {
            this.page = document.querySelector(page);
            this.slides = this.page.children;
        } catch (error) {};       
        this.dot = document.querySelectorAll(dots);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.count = count;
        this.autoplay = autoplay;
        this.slideIndex = 0;

    }
}