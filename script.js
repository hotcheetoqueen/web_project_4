const formModal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');
const formOpen = document.querySelector('.profile__edit-button');
const formClose = document.querySelector('.modal__close');
// const formSave = document.querySelector('.modal__save-btn');

let userName = document.querySelector('.profile__info_name');
let userJob = document.querySelector('.profile__info_description');
let nameInput = document.querySelector('.modal__input_name');
let jobInput = document.querySelector('.modal__input_description');


function formOpenHandler() {
    formModal.style.display="block";

    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}
formOpen.addEventListener('click', formOpenHandler);

function formCloseHandler() {
    formModal.style.display="none";
}
formClose.addEventListener('click', formCloseHandler);


form.addEventListener('submit', (evt) => {
    evt.preventDefault();

// userName.textContent = 

//     info.insertHTML('beforeend', `
//     <div class="profile__info">
//         <h1 class="profile__info_name">${userName.value}</h1>
//         <p class="profile__info_description">${userJOob.value}</p>
//     </div>
// `);

    // userName.value = "";
    // userJob.value = "";

//     renderAdded();
    formCloseHandler();
})

// make modal background opaque & fixed


// formSave.addEventListener('submit', formSubmitHandler);