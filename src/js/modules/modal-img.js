export default class Modal{
    constructor(modalWindow, close, img) {
        this.modal = document.querySelector(modalWindow);
        this.close = document.querySelector(close);
        this.img = document.querySelectorAll(img);
    }

    render() {
        let scroll = this.calcScroll();
        this.img.forEach(img => {
            img.addEventListener('click', () => {
                let attr = img.firstElementChild.getAttribute('src');
                this.createContent(attr);
                
                this.modal.parentNode.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        try {
            this.close.addEventListener('click', () => {
                this.closeModal();
            });
            this.modal.parentNode.addEventListener('click', (evt) => {
                if (evt.target.classList.contains('modal')) {
                    this.closeModal();
                }
            });
        } catch (error) {}
    }

    createContent(attr) {
        let image = document.createElement('img');
        image.setAttribute('src', attr);
        image.style.cssText = `
            width: 400px;
            heigth: 250px;
        `;
        this.modal.append(image);
    }

    closeModal() {
        this.modal.parentNode.style.display = 'none';
        document.body.style.overflow = ''; 
        document.body.style.marginRight = '0px';
        try {
            this.modal.querySelector('img').remove();
        } catch (error) {}           
    }

    calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);
        let scroll = div.offsetWidth - div.clientWidth;
        div.remove();

        return scroll;
    }
}