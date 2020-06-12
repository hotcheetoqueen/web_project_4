const form = document.querySelector('.modal__form');
const input = document.querySelector('.modal__input');

// enabling validation by calling enableValidation()
// pass all the settings on call

// enableValidation({
//     formSelector: ".modal__form",
//     inputSelector: ".modal__input",
//     submitButtonSelector: ".modal__save-btn",
//     inactiveButtonClass: "modal__save-btn_disabled",
//     inputErrorClass: "modal__input_error",
//     errorClass: "modal__error_visible"
//   });


// Show, hide & check error functions
function showError(form, input, {errorClass, inputErrorClass, validationMessage, ...rest}) {
    const error = form.querySelector(`#${input.id}`);

    error.classList.add(rest.errorClass);
    input.classList.add(rest.inputErrorClass);
    error.textContent = input.validationMessage;
};

function hideError(form, input, rest) {
    const error = form.querySelector('#' + input.id + '-error');

    error.classList.remove(rest.errorClass);
    input.classList.remove(rest.inputErrorClass);
    error.textContent = "";
};

function checkValidation(form, input, rest) {
    if(input.validity.valid) {
        hideError(form, input, rest);
    } else {
        showError(form, input, rest);
    }
};

const button = document.querySelector('.modal__save-btn')

// Disable button
function disableButton(){
    if(input.value.length = 0) { 
        button.classList.add('modal__save-btn_disabled');
    }
}

function toggleButton(inputs, button, form, {inactiveButtonClass, ...rest}) {

    const isValid = () => {
        if (inputs.some(input)) {
        return !input.validity.valid;
    }
};

    if(isValid) {
        button.classList.remove(inactiveButtonClass);
    } else {
        button.classList.add(inactiveButtonClass);
    }
};

// Overall validation
function enableValidation(formSelector, inputSelector, ...rest) {
    const forms = Array.from(formSelector);
    const inputs = Array.from(inputSelector);

    // forms.forEach(form) {
    //     form.addEventListener('submit', (evt) => {
    //         evt.preventDefault();
    //     })
    // };

    // inputs.forEach(input) {
    //     input.addEventListener('input', () => {
    //         checkValidation(form, input, rest);
    //         toggleButton(inputs, form, rest);
    //     })
    // }
};

// Closing the Popup by Clicking on the overlay
// Closing the Popup by Clicking by pressing escape
// stopImmediatePropagation()