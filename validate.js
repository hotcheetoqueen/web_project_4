const validateObject = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-btn',
  invalidInputClass: 'modal__input_disabled',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__input_error',
  errorClass: 'modal__input_error_active'
};

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
    if(input.validity.valid) {
      hideInputError(formElement, input);
    } else {
      showInputError(formElement, input, input.validationMessage);
    }
}
  
  const isInvalid = inputList.some((input) => {
    return !input.validity.valid;
  })

// Disable button
  function toggleButton(inputList, button) {
    if (isInvalid(inputList)) {
      button.classList.add(validateObject.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(validateObject.inactiveButtonClass);
      button.disabled = false;
    }
  };

  // Validation listeners
  function setEventListeners(formElement) {
  const button = Array.from(document.querySelectorAll(formElement.submitButtonSelector));
  const inputList = Array.from(document.querySelectorAll(formElement.inputSelector));
  
    inputList.forEach((input) => {
        input.addEventListener('input',  () => {
          checkInputValidity(formElement, input);
          toggleButton(inputList, button);
        });
      });
    };

// Overall validation
function enableValidation(form) {
    const formList = Array.from(document.querySelectorAll(form.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formElement);
      })
};

enableValidation(validateObject);