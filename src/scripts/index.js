import "../pages/index.css";

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import {         
    popUp, 
    overlay, 
    defaultCards, 
    defaultConfig, 
    imageModal, 
    profileModal, 
    profileForm,
    profileFormOpen,
    profileFormClose,
    imageFormOpen, 
    imageFormClose,
        userName,
        nameInput,
        userJob,
        jobInput,
        captionInput,
        imageInput,
    } from './utils.js';

// Form modals
const editPopup = new PopupWithForm(".modal__form_profile", toggleHandler);
const addPopup = new PopupWithForm(".modal__form_image", toggleImgHandler);
editPopup.setEventListeners();
addPopup.setEventListeners();

// Validation
const profileFormValidation = new FormValidator(defaultConfig, profileModal);
const imageFormValidation = new FormValidator(defaultConfig, imageModal);
profileFormValidation.enableValidation();
imageFormValidation.enableValidation();


// Image expand
const popupImage = new PopupWithImage('.modal_image');
popupImage.setEventListeners();


// Handlers
const toggleHandler = (e) => {
    overlay.classList.toggle('overlay_visible');
    profileModal.classList.toggle('modal_visible');

    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;

    e.stopImmediatePropagation();
};

profileFormOpen.addEventListener('click', (evt) => {
    evt.preventDefault();

    toggleHandler(evt)
});

// profileFormOpen.addEventListener('click', toggleHandler);
// profileFormClose.addEventListener('click', toggleHandler);
    
profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    userName.textContent = nameInput.value; 
    userJob.textContent = jobInput.value; 

    // const userData = new UserInfo(name, job);
    // userData.setUserInfo();

    toggleHandler(evt);
});

// Photos form handler

const toggleImgHandler = (e) => {
    overlay.classList.toggle('overlay_visible');
    imageModal.classList.toggle('modal_visible');

    e.stopImmediatePropagation();
};

imageFormOpen.addEventListener('click', toggleImgHandler);
imageFormClose.addEventListener('click', toggleImgHandler);

// Image modal listener for new card info
imageModal.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const cardInfo = {
        name: captionInput.value,
        link: imageInput.value
    };

    setCard(cardInfo);

    toggleImgHandler();
});


// Create new card from image modal
overlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_visible');
        profileModal.classList.remove('modal_visible');
        imageModal.classList.remove('modal_visible');
        popUp.classList.remove('card-popup__figure_visible');
});

window.addEventListener('keydown', () => {
    // close();
    if (event.key === 'Escape') {
        overlay.classList.remove('overlay_visible');
        profileModal.classList.remove('modal_visible');
        imageModal.classList.remove('modal_visible');
        popUp.classList.remove('card-popup__figure_visible');
    }
});


// New instances
const cardTemplateSelector = '.grid__card-template';
const listWrapper = document.querySelector('.grid__photos');

function setCard(data) {
    const card = new Card(data, cardTemplateSelector, () => {
        addPopup.open({ link, name });
    })

    listWrapper.prepend(card.getCard());
};

defaultCards.forEach((card) => {
    setCard(card);
});


// New instances of card placement
const cards = [];
for (const card of defaultCards) {
  let newCard = new Card(card.data, cardTemplateSelector, handleCardClick);
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

function handleCardClick(name, link) {
    popupImage.open(name, link);
}