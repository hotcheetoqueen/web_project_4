import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);

        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector('.modal__form');
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
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues(), evt);

            this.close();
        });
    }

    close() {
        super.close();

        this._form.reset();
      }
}

export default PopupWithForm;