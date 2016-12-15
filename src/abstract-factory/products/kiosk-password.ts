import SingleValueInputControl from './single-value-input-control';

declare const document: Document;

export default class KioskPassword implements SingleValueInputControl<string> {

    private el: HTMLElement;

    constructor(question: string) {
        const html = `<label>${question} <input type=password></label>`;
        const el = document.createElement('div');
        el.classList.add('form-item', 'kiosk-form-item', 'kiosk-password');
        el.innerHTML = html;
        this.el = el;
    }

    public getValue() {
        return this.el.querySelector('input').value;
    }

    public getElement() {
        return this.el;
    }
}