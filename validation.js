const formElement = document.querySelector('.modal__form');
const inputElement = document.querySelector('.modal__input');


const validateObject = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-btn',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__error',
  errorClass: 'modal__error_active'
};

// Show, hide & check error functions
function showError(inputElement, formElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}error`);

    errorElement.classList.add(validateObject.errorClass);
    inputElement.classList.add(validateObject.inputErrorClass);
    errorElement.textContent = errorMessage;
};

function hideError(inputElement, formElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}error`);

    errorElement.classList.remove(validateObject.errorClass);
    inputElement.classList.remove(validateObject.inputErrorClass);
    errorElement.textContent = '';
};

const checkValidation = (formElement, inputElement) => {
    if(inputElement.validity.valid) {
        hideError(formElement, inputElement);
    } else {
        showError(formElement, inputElement, inputElement.validationMessage);
    }
};

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  
  inputElement.addEventListener('input', function () {
    checkValidation();
  });
  

// Disable button
const invalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleButton = (inputList, buttonElement) => {
    console.log(invalidInput(inputList));
    if (invalidInput(inputList)) {
      buttonElement.classList.add(validateObject.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(validateObject.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };
  // || (input.value.length = 0)
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validateObject.inputSelector));
    const buttonElement = formElement.querySelector(validateObject.submitButtonSelector);
    
    toggleButton(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
          checkValidation(formElement, inputElement);
          
          toggleButton(inputList, buttonElement);
        });
      });
    };


// Overall validation
const enableValidation = (form) => {
    const formList = Array.from(document.querySelectorAll(form.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        // setEventListeners(formElement);
        // });

  //       //Check if need fieldset instead of inputlist
  //   const inputList = Array.from(form.querySelectorAll(inputSelector));

  //   inputList.forEach((inputElement) => {
  //       inputElement.addEventListener('input', () => {
  //           checkValidation(formElement, inputElement);

  //           toggleButton(inputList, buttonElement);
  // });

    const fieldsetList = Array.from(formElement.querySelectorAll('.modal__fieldset'));
    fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
      });
    });
};


enableValidation(validateObject);