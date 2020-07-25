import "../pages/index.css";

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import {         
        overlay, 
        defaultCards, 
        defaultConfig, 
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


// Form modals
const editPopup = new PopupWithForm(profileForm, toggleHandler);
const addPopup = new PopupWithForm(imageForm, toggleImgHandler);
editPopup.setEventListeners();
addPopup.setEventListeners();


// Validation
const profileFormValidation = new FormValidator(defaultConfig, profileModal);
const imageFormValidation = new FormValidator(defaultConfig, imageModal);
profileFormValidation.enableValidation();
imageFormValidation.enableValidation();


// Image expand
const popupImage = new PopupWithImage('.card-popup__figure');
popupImage.setEventListeners();


// User info instance
// const userData = new UserInfo(name, job);


// Handlers
const toggleHandler = (e) => {
    editPopup.open();

    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;

    e.stopImmediatePropagation();
};

profileFormOpen.addEventListener('click', (evt) => {
    evt.preventDefault();

    toggleHandler(evt);
});

profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // userData.setUserInfo(inputValues);

    userName.textContent = nameInput.value; 
    userJob.textContent = jobInput.value; 

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

    // const cardInfo = {
    //     name: captionInput.value,
    //     link: imageInput.value
    // };

    // setCard(cardInfo);

    let newCard = new Card(cardInfo, cardTemplateSelector);
    // , handleCardClick
    newCard = newCard.getCard();
    cards.push(newCard);
    cardList.renderer();

    addPopup.close();    
});


// Create new card from image modal
// window.addEventListener('keydown', () => {
//     if (event.key === 'Escape') {
//         editPopup.close();
//         addPopup.close(); 
//     }
// });


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

// function handleCardClick(name, link) {
//     popupImage.open(name, link);
// }