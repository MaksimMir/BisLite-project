import Slider from './slider';

export default class MiniSlider extends Slider{
    constructor(page, prev, next, count) {
        super(page, prev, next, count);    
    }

    init() {
        try {
            let width = window.getComputedStyle(this.slides[0]).width.replace(/px/g, '');    
            let pos = 0;
            
            this.next.addEventListener('click', (evt) => {
                evt.preventDefault();
    
                if(this.slideIndex < this.slides.length - 4) this.slideIndex++;
                
                this.slideShow(width, pos);
            });
    
            this.prev.addEventListener('click', (evt) => {
                evt.preventDefault();
    
                if(this.slideIndex > 0) this.slideIndex--;
    
                this.slideShow(width, pos);
            });
        } catch (error) {}

    }

    slideShow(width, pos) {
        pos = width * this.slideIndex; 
        this.page.style.marginLeft = -pos + 'px';
    }
}