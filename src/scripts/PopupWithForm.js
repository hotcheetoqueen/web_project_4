import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);

        this._handleFormSubmit = handleFormSubmit;
        this._form = document.querySelector('.modal__form');
        this._inputList = this._form.querySelectorAll('.modal__input');
        [this._name, this._job] = this._inputList;

        this._saveButton = document.querySelector('.modal__save-btn');
        this._buttonCopy = this._saveButton.textContent;
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

    open(inputValues) {
        super.open();
        if (inputValues) {
            this._name.textContent = inputValues.name;
            this._job.textContent = inputValues.job;
        }
    }

    close() {
        super.close();

        this._form.reset();
      }

    buttonSaving() {
        this._saveButton.textContent = 'Saving...';
    }

    buttonSaveSuccess() {
        this._saveButton.textContent = this._buttonCopy;
    }
}