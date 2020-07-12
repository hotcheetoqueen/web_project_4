import "../pages/index.css";

import Card from './Card.js';
import FormValidator from './FormValidator.js';
// import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import { 
        popUp, 
        overlay, 
        togglePopHandler, 
        popUpCreator, 
        popTemp, 
        popClose, 
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


const popupImage = new PopupWithImage('.modal_image');
popupImage.setEventListeners();

// Validation
const profileFormValidation = new FormValidator(defaultConfig, profileModal);
const imageFormValidation = new FormValidator(defaultConfig, imageModal);
profileFormValidation.enableValidation();
imageFormValidation.enableValidation();

// Profile form handler
const editPopup = new PopupWithForm(".modal__form_profile", toggleHandler);
const addPopup = new PopupWithForm(".modal__form_image", toggleImgHandler);
editPopup.setEventListeners();
addPopup.setEventListeners();

  
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

profileFormOpen.addEventListener('click', () => {
    editPopup.open()
});

profileFormOpen.addEventListener('click', toggleHandler);
profileFormClose.addEventListener('click', toggleHandler);

    // const userData = new UserInfo({
    //     nameSelector: userName,
    //     jobSelector: userJob,
    //   });

profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

            // userData.setUserInfo(values);
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    toggleHandler();
});


// Photos form handler
const toggleImgHandler = (e) => {
    if (profileModal.classList.contains('modal_visible') || popUp.classList.contains('card-popup__figure_visible')) {
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
    // close();
        overlay.classList.remove('overlay_visible');
        profileModal.classList.remove('modal_visible');
        imageModal.classList.remove('modal_visible');
        popUp.classList.remove('card-popup__figure_visible');
});
    

// window.addEventListener('keydown', (event) => {
//     // close();
//     // if (event.key === 'Escape') {
//     //     overlay.classList.remove('overlay_visible');
//     //     profileModal.classList.remove('modal_visible');
//     //     imageModal.classList.remove('modal_visible');
//     //     popUp.classList.remove('card-popup__figure_visible');
//     // }
//   });


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

    const cardInfo = {
        name: captionInput.value,
        link: imageInput.value
    };

    setCard(cardInfo);
    toggleImgHandler();
});

// New instances
const cards = [];
for (const card of initialCards) {
  let newCard = new Card(card.name, card.link, cardSelector, handleCardClick);
  newCard = newCard.generateCard();
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

cardList.renderItems();

// // Modal handling
// export function handleCardClick(name, link) {
//     popupImage.open(name, link);
//   }
