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
    } from './utils.js';


// Form modals
const editPopup = new PopupWithForm('.modal__form_profile', toggleHandler);
const addPopup = new PopupWithForm('.modal__form_image', toggleImgHandler);
editPopup.setEventListeners();
addPopup.setEventListeners();

// Image expand
const popupImage = new PopupWithImage('.card-popup__figure', togglePopHandler);
popupImage.setEventListeners();


const togglePopHandler = ({ name, link }) => {
    popupImage.open(name, link);
};

const popTemp = document.querySelector('.grid__card-template');

popTemp.addEventListener('click', (evt) => {
    const popImage = document.querySelector('.card-popup__image');
    const popTitle = document.querySelector('.card-popup__caption');

        popImage.src = `${link}`;
        popTitle.textContent = name;
        togglePopHandler(ev);
        evt.stopPropagation();
});


// Validation
const profileFormValidation = new FormValidator(defaultConfig, profileModal);
const imageFormValidation = new FormValidator(defaultConfig, imageModal);
profileFormValidation.enableValidation();
imageFormValidation.enableValidation();


// UserInfo instance
const userInfo = new UserInfo({ 
    name: userName,
    job: userJob 
});

// New instances
const cardTemplateSelector = '.grid__card-template';
const listWrapper = document.querySelector('.grid__photos');


// Edit handler
const toggleHandler = (e) => {
    editPopup.open(userInfo.getUserInfo());

    e.stopImmediatePropagation();
};

profileFormOpen.addEventListener('click', (evt) => {
    evt.preventDefault();

    toggleHandler(evt);
});

profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    userInfo.setUserInfo(nameInput.value, jobInput.value);

    editPopup.close();
});


// Photos form handler
const toggleImgHandler = (e) => {
    addPopup.open();

    e.stopImmediatePropagation();
};

imageFormOpen.addEventListener('click', (evt) => {
    evt.preventDefault();

    toggleImgHandler(evt);
});


// Image modal listener for new card info
imageModal.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const cardInfo = {
        name: captionInput.value,
        link: imageInput.value,
    };

    let newCard = new Card(cardInfo, cardTemplateSelector);
    newCard = newCard.getCard();
    cards.push(newCard);
    cardList.renderer();

    addPopup.close();    
});


// New instances of card placement
const cards = [];
for (const card of defaultCards) {
    let newCard = new Card(card, cardTemplateSelector, togglePopHandler);
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

// function handleCardClick({ name, link }) {
//     popupImage.open(name, link);
// }
