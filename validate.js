// const formElement = document.querySelector('.modal__form');
// const inputElement = document.querySelector('.modal__input');


const validateObject = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-btn',
  invalidInputClass: 'modal__input_disabled',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__input-error',
  errorClass: 'modal__input-error_active'
};

// Show, hide & check error functions
function showInputError(inputElement, formElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.classList.add(validateObject.errorClass);
    inputElement.classList.add(validateObject.invalidInputClass);
    errorElement.textContent = errorMessage;
}

function hideInputError(inputElement, formElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.classList.remove(validateObject.errorClass);
    inputElement.classList.remove(validateObject.invalidInputClass);
    errorElement.textContent = '';
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function checkInputValidity(formElement, inputElement, validateObject) {
    if(!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validateObject);
    } else {
      hideInputError(formElement, inputElement, validateObject);
    }
};

// formElement.addEventListener('submit', function (evt) {
//     evt.preventDefault();
//   });
  
  // inputElement.addEventListener('input', function () {
  //   checkInputValidity();
  // });
  

// Disable button
  function toggleButton(inputList, buttonElement, validateObject) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validateObject.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(validateObject.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  // || (input.value.length = 0)
  
  const inputList = Array.from(formElement.querySelectorAll(validateObject.inputSelector));


  function setEventListeners(formElement, inputList, buttonElement, validateObject) {
    const buttonElement = formElement.querySelector(validateObject.submitButtonSelector);
    
    // toggleButton(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
          checkInputValidity(formElement, inputElement, buttonElement, validateObject);
          
          toggleButton(inputList, buttonElement, validateObject);
        });
      });
    };


// Overall validation
function enableValidation() {

    const formList = Array.from(document.querySelectorAll(formElement.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
      });

    const fieldsetList = Array.from(formElement.querySelectorAll('.modal__fieldset'));
    fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
      });
    };

enableValidation(validateObject);