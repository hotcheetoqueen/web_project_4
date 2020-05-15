const formModal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');
const formOpen = document.querySelector('.profile__edit-button');
const formClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');

const userName = document.querySelector('.profile__info_name');
const userJob = document.querySelector('.profile__info_description');
const nameInput = document.querySelector('.modal__input_name');
const jobInput = document.querySelector('.modal__input_description');


function formOpenHandler() {
    overlay.style.opacity = ".5";

    if (formModal.style.display === "block") {
        formCloseHandler();
      } else {
        formModal.style.display = "block";
      }

    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;

} formOpen.addEventListener('click', formOpenHandler);


function formCloseHandler() {
    formModal.style.display="none";
    overlay.style.opacity = "1";
} formClose.addEventListener('click', formCloseHandler);


form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    formCloseHandler();
});