import SingleValueInputControl from './single-value-input-control';

declare const document: Document;

export default class KioskCheckbox implements SingleValueInputControl<boolean> {

    private el: HTMLElement;

    constructor(question: string) {
        const html = `<label>${question} <input type=checkbox></label>`;
        const el = document.createElement('div');
        el.classList.add('form-item', 'kiosk-form-item', 'kiosk-checkbox');
        el.innerHTML = html;
        this.el = el;
    }

    public getValue() {
        return this.el.querySelector('input').checked;
    }

    public getElement() {
        return this.el;
    }
}