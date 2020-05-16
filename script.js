const formModal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');
const formOpen = document.querySelector('.profile__edit-button');
const formClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');

const userName = document.querySelector('.profile__info_name');
const userJob = document.querySelector('.profile__info_description');
const nameInput = document.querySelector('.modal__input_name');
const jobInput = document.querySelector('.modal__input_description');


const toggleHandler = () => {
    overlay.classList.toggle('overlay_visible');
    formModal.classList.toggle('modal_visible');

    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

formOpen.addEventListener('click', toggleHandler);
formClose.addEventListener('click', toggleHandler);


form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    toggleHandler();
});