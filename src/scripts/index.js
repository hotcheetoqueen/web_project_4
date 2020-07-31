import "../pages/index.css";

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import {         
        defaultCards, 
        defaultConfig, 
        popUp,
        imageModal, 
        profileModal, 
        profileForm,
        profileFormOpen,
        imageForm,
        imageFormOpen, 
        userName,
        nameInput,
        userJob,
        jobInput,
        captionInput,
        imageInput,
    } from './utils.js';

// UserInfo instance
const userInfo = new UserInfo({ 
    name: userName,
    job: userJob 
});

// Form modals
const editPopup = new PopupWithForm('.modal_profile', (data) => {
    userInfo.setUserInfo(data);
});

const addPopup = new PopupWithForm('.modal_image', (data) => {
    const cardInfo = {
        name: captionInput.value,
        link: imageInput.value,
    };

    let newCard = new Card(cardInfo, cardTemplateSelector, (data) => {
        popupImage.open(data)
    });

    cardList.addItem(newCard.getCard());
});


// Image expand
const popupImage = new PopupWithImage('.modal_photo');

editPopup.setEventListeners();
addPopup.setEventListeners();

popupImage.setEventListeners();

const togglePopHandler = ({ name, link }) => {
    popupImage.open({ name, link });
};

const popTemp = document.querySelector('.grid__card-template');

popTemp.addEventListener('click', (evt) => {
    const popImage = document.querySelector('.card-popup__image');
    const popTitle = document.querySelector('.card-popup__caption');

    popImage.src = `${link}`;
    popTitle.textContent = name;

    togglePopHandler(evt);
    evt.stopPropagation();
});


// Validation
const profileFormValidation = new FormValidator(defaultConfig, profileModal);
const imageFormValidation = new FormValidator(defaultConfig, imageModal);
profileFormValidation.enableValidation();
imageFormValidation.enableValidation();


// New instances
const cardTemplateSelector = '.grid__card-template';
const listWrapper = document.querySelector('.grid__photos');


// Edit handler
profileFormOpen.addEventListener('click', (evt) => {
    evt.preventDefault();

    editPopup.open();
});


imageFormOpen.addEventListener('click', (evt) => {
    evt.preventDefault();

    addPopup.open();
});


// New instances of card placement
const cards = [];
for (const card of defaultCards) {
    let newCard = new Card(card, cardTemplateSelector, () => {
        popupImage.open(card);
    });
        newCard = newCard.getCard();
        cards.push(newCard);
}

const cardList = new Section(
  {
    items: cards,
    renderer: (element) => {
        cardList.addItem(element);
    },
  },
  listWrapper
);

cardList.renderer();