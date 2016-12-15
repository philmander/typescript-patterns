import InputControlFactory from './input-control-factory';
import KioskText from '../products/kiosk-text';
import KioskCheckbox from '../products/kiosk-checkbox';
import KioskPassword from '../products/kiosk-password';

export default class KioskInputControlFactory extends InputControlFactory {

    createText(question: string) {
        return new KioskText(question);
    }

    createCheckbox(question: string) {
        return new KioskCheckbox(question);
    }

    createPassword(question: string) {
        return new KioskPassword(question);
    }
}