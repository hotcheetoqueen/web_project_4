// Popup helpers
export const popUp = document.querySelector('.card-popup__figure');
export const overlay = document.querySelector('.overlay');

// Modal forms
export const profileModal = document.querySelector('.modal_profile');
export const imageModal = document.querySelector('.modal_image');

// Modal triggers
export const profileForm = document.querySelector('.modal__form_profile');

export const profileFormOpen = document.querySelector('.profile__edit-button');
export const profileFormClose = document.querySelector('.modal__close_profile');

export const imageFormOpen = document.querySelector('.profile__add-button');
export const imageFormClose = document.querySelector('.modal__close_image');


// Profile form data
export const userName = document.querySelector('.profile__info_name');
export const nameInput = document.querySelector('.modal__input_name');

export const userJob = document.querySelector('.profile__info_description');
export const jobInput = document.querySelector('.modal__input_description');

// Photos form data
export const captionInput = document.querySelector('.modal__input_caption');
export const imageInput = document.querySelector('.modal__input_image-link');


// Poopup functions
export function togglePopHandler(e) {

    if (overlay.classList.contains('overlay_visible') && !popUp.classList.contains('card-popup__figure_visible')) {
        e.preventDefault();
    } else {
        overlay.classList.toggle('overlay_visible');
        popUp.classList.toggle('card-popup__figure_visible');
    }
};

export const popTemp = document.querySelector('.grid__card-template');
export const popClose = document.querySelector('.card-popup__close');

popTemp.addEventListener('click', togglePopHandler);
popClose.addEventListener('click', togglePopHandler);


export function popUpCreator(link, name, e) {
    const popImage = document.querySelector('.card-popup__image');
    const popTitle = document.querySelector('.card-popup__caption');

        popImage.src = `${link}`;
        popTitle.textContent = name;
        togglePopHandler();
        e.stopPropagation();
};

// Arguments
export const defaultConfig = {
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__save-btn',
    invalidInputClass: 'modal__input_disabled',
    inactiveButtonClass: 'modal__save-btn_disabled',
    inputErrorClass: 'modal__input_error',
    errorClass: 'modal__input_error_active'
};

// Initial images
export const defaultCards = [
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