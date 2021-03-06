import SingleValueInputControl from './single-value-input-control';

declare const document: Document;

export default class KioskText implements SingleValueInputControl<string> {

    private el: HTMLElement;

    constructor(question: string) {
        const html = `<label>${question} <input type=text></label>`;
        const el = document.createElement('div');
        el.classList.add('form-item','kiosk-form-item', 'kiosk-text');
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