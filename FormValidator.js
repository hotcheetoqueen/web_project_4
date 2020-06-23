class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;

        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass= config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

// Call functions as methods within the class
    _showInputError(input, errorMessage) {
        const error = this._formElement.querySelector(`#${input.id}-error`);

        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
        error.textContent = errorMessage;
    }

    _hideInputError(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);

        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
        error.textContent = "";
    }

    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showInputError(input, input.validationMessage);
          } else {
            this._hideInputError(input);
          }
    }

    _isInvalid(inputList) {
        return inputList.some((input) => {
            return !input.validity.valid;
          });
    }

    _toggleButtonElem(inputList, buttonElem) {
        if (this._isInvalid(inputList)) {
            buttonElem.classList.add(this._inactiveButtonClass);
            buttonElem.disabled = true;
          } else {
            buttonElem.classList.remove(this._inactiveButtonClass);
            buttonElem.disabled = false;
          }
    }

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElem = this._formElement.querySelector(this._submitButtonSelector);

        this._toggleButtonElem(inputList, buttonElem);

        inputList.forEach((input) => {
            input.addEventListener('input',  () => {
                this._checkInputValidity(input);
                this._toggleButtonElem(inputList, buttonElem);
            });
        });
    }

// Not private
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }
}

export default FormValidator;