import SingleValueInputControl from "../products/single-value-input-control";

abstract class InputControlFactory {

    abstract createText(question: string): SingleValueInputControl<string>;

    abstract createCheckbox(question: string): SingleValueInputControl<boolean>;

    abstract createPassword(question: string): SingleValueInputControl<string>;
}

export default InputControlFactory;
