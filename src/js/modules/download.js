export default class Download{
    constructor(btn) {
        this.btn = document.querySelector(btn);
        this.path = 'image/img-10.png';
    }

    downloadItem(path) {
        let elem = document.createElement('a');
        elem.setAttribute('href', path);
        elem.setAttribute('download', 'picture');

        elem.style.display = 'none';
        document.body.append(elem);

        elem.click();

        document.body.removeChild(elem);
    }

    init() {
        try {
            this.btn.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        } catch (error) {}

    }
}