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
function showInputError(form, input, validationMessage) {
    const error = form.querySelector(`#${input.id}-error`);

    error.classList.add(validateObject.errorClass);
    input.classList.add(validateObject.inputErrorClass);
    error.textContent = input.validationMessage;
}

function hideInputError(input, form) {
  const error = form.querySelector(`#${input.id}-error`);

    error.classList.remove(validateObject.errorClass);
    input.classList.remove(validateObject.invalidInputClass);
    error.textContent = "";
}

// Check input validity
function checkInputValidity(form, input, rest) {
    if(input.validity.valid) {
      hideInputError(form, input, rest);
    } else {
      showInputError(form, input, input.validationMessage);
    }
}
  
  const isValid = inputList.some((input) => {
    return !input.validity.valid;
  })

// Disable button
  function toggleButton(inputList, button, {inactiveButtonClass, ...rest}) {
    if (isValid) {
      button.classList.remove(validateObject.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(validateObject.inactiveButtonClass);
      button.disabled = true;
    }
  };

  const button = Array.from(document.querySelectorAll(form.submitButtonSelector));
  const inputList = Array.from(document.querySelectorAll(form.inputSelector));

  // Validation listeners
  function setEventListeners(form, rest) {
    inputList.forEach((input) => {
        input.addEventListener('input',  () => {
          checkInputValidity(form, input, rest);
          toggleButton(inputList, form, rest);
        })
      })
    };

// Overall validation
function enableValidation(form) {
    const formList = Array.from(document.querySelectorAll(form.formSelector));
    formList.forEach(() => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(form, rest);
      })
};

enableValidation(validateObject);