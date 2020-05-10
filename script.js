let formModal = document.querySelector('.modal');
const formOpen = document.querySelector('.profile__edit-button');
const formClose = document.querySelector('.modal__close');
let formSave = document.querySelector('.modal__save-btn');

function formOpenHandler() {
    formModal.style.display="block";
}

formOpen.addEventListener('click', formOpenHandler);

function formCloseHandler() {
    formModal.style.display="none";
}

formClose.addEventListener('click', formCloseHandler);

// function formSubmitHandler(evt) {
//     evt.preventDefault();

//     let nameInput = document.querySelector('.modal__name');
//     let jobInput = document.querySelector('.modal__description');

//     // Get the values of each field from the corresponding value property
//     if (nameInput.length > 0) {
//         nameInput.setAttribute('nameInput', '');
//     } else {
//         formElement.setat
//     }

//     // Select elements where the field values will be entered

//     // Insert new values using the textContent property of the querySelector() method
//     let profileName = document.querySelector('profile__name').textContent;
//     let profileJob = document.querySelector('profile__description').textContent;

//     nameInput.value = "";
//     jobInput.value = "";

//     renderAdded();
// }

// formSave.addEventListener('submit', formSubmitHandler);

// renderAdded();