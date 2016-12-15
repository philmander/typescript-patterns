import InputControlFactory from './input-control-factory';
import OnlineText from '../products/online-text';
import OnlineCheckbox from '../products/online-checkbox';
import OnlinePassword from '../products/online-password';

export default class OnlineInputControlFactory extends InputControlFactory {

    createText(question: string) {
        return new OnlineText(question);
    }

    createCheckbox(question: string) {
        return new OnlineCheckbox(question);
    }

    createPassword(question: string) {
        return new OnlinePassword(question);
    }
}