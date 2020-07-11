import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);

        this._handleFormSubmit = handleFormSubmit;

    }

    _getInputValues() {
        this._values = {};
        this._inputList.forEach((input) => {
            this._values[input.name] = input.value;
        });
        
        return this._values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        this._form.reset();
        super.close();
      }
}