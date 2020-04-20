export default class Form{
    constructor(form) {
        try {
            this.form = document.querySelector(form);
            this.inputs = this.form.querySelectorAll('input');
        } catch (error) {}       
        this.message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся.',
            fealure: 'Что-то пошло не так...'
        };
        this.path = './question.php';
    }

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
        this.form.querySelector('textarea').value = '';
    }

    checkMailInputs() {
        try {
            this.form.querySelector('[name=email]').addEventListener('keypress', (evt) => {
                if(evt.key.match(/[^a-z 0-9 @ \.]/gi)) {
                    evt.preventDefault();
                }
            });
        } catch (error) {}
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    init() {
        this.checkMailInputs();

        try {
            this.form.addEventListener('submit', (evt) => {
                evt.preventDefault();
    
                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `;
                this.form.append(statusMessage);
    
                statusMessage.textContent = this.message.loading;
    
                let formData = new FormData(this.form);
    
                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = this.message.fealure;
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
            });
        } catch (error) {}
    }
}