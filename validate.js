const validateObject = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-btn',
  invalidInputClass: 'modal__input_disabled',
  inactivebuttonElemClass: 'modal__save-btn_disabled',
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
const togglebuttonElem = (inputList, buttonElem) => {
  if (isInvalid(inputList)) {
    buttonElem.classList.add(validateObject.inactivebuttonElemClass);
    buttonElem.disabled = true;
  } else {
    buttonElem.classList.remove(validateObject.inactivebuttonElemClass);
    buttonElem.disabled = false;
  }
};

// Validation listeners
function setEventListeners(formElement) {
  const inputList = Array.from(document.querySelectorAll(validateObject.inputSelector));
  const buttonElem = document.querySelectorAll(validateObject.submitButtonSelector);

  // togglebuttonElem(inputList, buttonElem);

  inputList.forEach((input) => {
      input.addEventListener('input',  () => {
        checkInputValidity(formElement, input);
        togglebuttonElem(inputList, buttonElem);
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

//         const fieldsetList = Array.from(formElement.querySelectorAll(".form__fields"));
//         fieldsetList.forEach((fieldset) => {
//           setEventListeners(fieldset);
//         });
//       });
// };

enableValidation(validateObject);