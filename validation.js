const formElement = document.querySelector('.modal__form');
const inputElement = document.querySelector('.modal__input');
const errorElement = form.querySelector(`#${input.id}error`);

// Show, hide & check error functions
function showError(input, validationMessage) {
    errorElement.classList.add('modal__error_active');
    inputElement.classList.add('modal__error');
    errorElement.textContent = validationMessage;
};

function hideError(input) {
    errorElement.classList.remove('modal__error');
    inputElement.classList.remove('modal__error_active');
    errorElement.textContent = '';
};

const checkValidation = () => {
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
    return inputList.some((input) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleButton = (inputList, button) => {
    console.log(invalidInput(inputList));
    if (invalidInput(inputList) || (input.value.length = 0)) {
      buttonElement.classList.add('modal__save-btn_disabled');
    } else {
      buttonElement.classList.remove('modal__save-btn_disabled');
    }
  };
  
  const setEventListeners = (form) => {
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const buttonElement = form.querySelector(submitButtonSelector);
    
    toggleButton(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
        input.addEventListener('input', function () {
          checkValidation(formElement, inputElement);
          
          toggleButton(inputList, buttonElement);
        });
      });
    };


// Overall validation
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.modal'));

    formList.forEach((form) => {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
        });

    const inputList = Array.from(form.querySelectorAll(inputSelector));

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkValidation(formElement, inputElement);

            toggleButton(inputList, buttonElement);
        });
    });
};


enableValidation({
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-btn',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__error',
  errorClass: 'modal__error_active'
});


enableValidation();