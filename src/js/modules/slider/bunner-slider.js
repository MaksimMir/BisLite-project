import Slider from './slider';

export default class BunnerSlider extends Slider{
    constructor(page, dots, prev, next) {
        super(page, dots, prev, next);
    
    }

    init() {
        let width = window.getComputedStyle(this.page.parentNode).width;
        for (const key of this.slides) {
            key.style.width = width;
        }
        let pos = 0;
        this.page.style.width = 100 * this.slides.length + '%';

        this.prev.addEventListener('click', (evt) => {
            evt.preventDefault();
    
            if(this.slideIndex < this.slides.length - 1) this.slideIndex++;                       
            this.slideShow(width, pos);
            this.classToggle();
        });

        this.next.addEventListener('click', (evt) => {
            evt.preventDefault();
                     
            if(this.slideIndex > 0) this.slideIndex--;             
            this.slideShow(width, pos);
            this.classToggle();
        })
        
        this.dot.forEach(dot => {
            dot.addEventListener('click', () => {
                this.slideIndex = dot.getAttribute('data-id');

                this.slideShow(width, pos)
                this.classToggle();
            });
        });   
        
    }

    slideShow(width, pos) {
        pos = width.replace(/px/g, '') * this.slideIndex;  
        this.page.style.marginLeft = -pos + 'px';
    }

    classToggle() {
        this.dot.forEach(dot => {
            dot.classList.remove(this.activeClass);
        });
        this.dot[this.slideIndex].classList.add(this.activeClass);
    }
}