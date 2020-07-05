import FormValidator from './FormValidator.js';
import Card from './Card.js';
// import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import { popUp, overlay, togglePopHandler, popUpCreator } from './utils.js';
import "../pages/index.css";

const defaultConfig = {
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__save-btn',
    invalidInputClass: 'modal__input_disabled',
    inactiveButtonClass: 'modal__save-btn_disabled',
    inputErrorClass: 'modal__input_error',
    errorClass: 'modal__input_error_active'
};

// Modal forms
const profileModal = document.querySelector('.modal_profile');
const imageModal = document.querySelector('.modal_image');

const profileFormValidation = new FormValidator(defaultConfig, profileModal);
const imageFormValidation = new FormValidator(defaultConfig, imageModal);

profileFormValidation.enableValidation();
imageFormValidation.enableValidation();

// Initial images
const defaultCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

// Modal triggers
const profileForm = document.querySelector('.modal__form_profile');

const profileFormOpen = document.querySelector('.profile__edit-button');
const profileFormClose = document.querySelector('.modal__close_profile');

const imageFormOpen = document.querySelector('.profile__add-button');
const imageFormClose = document.querySelector('.modal__close_image');


// Profile form data
const userName = document.querySelector('.profile__info_name');
const nameInput = document.querySelector('.modal__input_name');

const userJob = document.querySelector('.profile__info_description');
const jobInput = document.querySelector('.modal__input_description');

// Photos form data
const captionInput = document.querySelector('.modal__input_caption');
const imageInput = document.querySelector('.modal__input_image-link');

// const popUp = document.querySelector('.card-popup__figure');
// const overlay = document.querySelector('.overlay');

const imagePopup = new PopupWithImage('.modal_image');

// Profile form handler
const toggleHandler = (e) => {
    if (imageModal.classList.contains('modal_visible') || popUp.classList.contains('card-popup__figure_visible')) {
        e.preventDefault();
    } else {
        overlay.classList.toggle('overlay_visible');
        profileModal.classList.toggle('modal_visible');

        nameInput.value = userName.textContent;
        jobInput.value = userJob.textContent;
    }
    e.stopImmediatePropagation();
};

profileFormOpen.addEventListener('click', toggleHandler);
profileFormClose.addEventListener('click', toggleHandler);

profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    toggleHandler();
});


// Photos form handler
const toggleImgHandler = (e) => {
    if (profileModal.classList.contains('modal_visible') || popUp.classList.contains('card-popup__figure_visible')) {
        e.preventDefault();
    } else {
        overlay.classList.toggle('overlay_visible');
        imageModal.classList.toggle('modal_visible');
    }
    e.stopImmediatePropagation();
};

imageFormOpen.addEventListener('click', toggleImgHandler);
imageFormClose.addEventListener('click', toggleImgHandler);

// Initial function to create gallery
const cardTemplateSelector = '.grid__card-template';
const listWrapper = document.querySelector('.grid__photos');

overlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_visible');
        profileModal.classList.remove('modal_visible');
        imageModal.classList.remove('modal_visible');
        popUp.classList.remove('card-popup__figure_visible');
});
    

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        overlay.classList.remove('overlay_visible');
        profileModal.classList.remove('modal_visible');
        imageModal.classList.remove('modal_visible');
        popUp.classList.remove('card-popup__figure_visible');
    }
  });


function setCard(data) {
    const card = new Card(data, cardTemplateSelector, () => {
        imagePopup.open({link, name});
    })

    listWrapper.prepend(card.getCard());
};

defaultCards.forEach((card) => {
    setCard(card);
});


// Create new card from image modal
imageModal.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const newCard = {
        name: captionInput.value,
        link: imageInput.value
    };

    setCard(newCard);
    toggleImgHandler();
});
