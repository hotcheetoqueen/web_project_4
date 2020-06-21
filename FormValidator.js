// TO DO
// All code in FormValidator class and only sets settings for validating form fields
  // Its constructor has two parameters. The first parameter is a settings object that stores selectors and form classes, and the second one takes a form element to be validated.
  // It has private methods for processing the form, which include: checking the field's validity, changing the state of the Submit button, and adding all the needed handlers.
  // It has one public method enableValidation(), which enables form validation.
// Export to index.js as module

const validateObject = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-btn',
  invalidInputClass: 'modal__input_disabled',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__input_error',
  errorClass: 'modal__input_error_active'
};

// const formElement = document.querySelector(validateObject.formSelector);
// const input = formElement.querySelector(validateObject.inputSelector);

// Show & hide errors
function showInputError(formElement, input, errorMessage) {
    const error = formElement.querySelector(`#${input.id}-error`);

    error.classList.add(validateObject.errorClass);
    input.classList.add(validateObject.inputErrorClass);
    error.textContent = errorMessage;
}

function hideInputError(formElement, input) {
  const error = formElement.querySelector(`#${input.id}-error`);

    error.classList.remove(validateObject.errorClass);
    input.classList.remove(validateObject.inputErrorClass);
    error.textContent = "";
}

// Check input validity
function checkInputValidity(formElement, input) {
    if (!input.validity.valid) {
      showInputError(formElement, input, input.validationMessage);
    } else {
      hideInputError(formElement, input);
    }
}
 
const isInvalid = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

// Disable buttonElem
const toggleButtonElem = (inputList, buttonElem) => {
  if (isInvalid(inputList)) {
    buttonElem.classList.add(validateObject.inactiveButtonClass);
    buttonElem.disabled = true;
  } else {
    buttonElem.classList.remove(validateObject.inactiveButtonClass);
    buttonElem.disabled = false;
  }
};

// Validation listeners
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validateObject.inputSelector));
  const buttonElem = formElement.querySelector(validateObject.submitButtonSelector);

  toggleButtonElem(inputList, buttonElem);

  inputList.forEach((input) => {
      input.addEventListener('input',  () => {
        checkInputValidity(formElement, input);
        toggleButtonElem(inputList, buttonElem);
      });
    });
  };

// Overall validation
function enableValidation(form) {
    const formList = Array.from(document.querySelectorAll(form.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
      });
}

enableValidation(validateObject);