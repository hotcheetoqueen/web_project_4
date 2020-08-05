import "../pages/index.css";

import Api from "./Api";
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithConfirm from './PopupWithConfirm.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import {         
        defaultConfig, 
        imageModal, 
        profileModal, 
        profileFormOpen,
        imageFormOpen, 
        userName,
        userJob,
        userAvatar,
        avatarContainer,
        captionInput,
        imageInput,
    } from './utils.js';

const api = new Api({
    server: "https://around.nomoreparties.co/v1/group-2",
    headers: {
        authorization: "7c532e9d-132b-43e0-b1d4-55c21c0fd902",
        "Content-Type": "application/json"
    }
});

// Image cards
const cardTemplateSelector = '.grid__card-template';
const listWrapper = document.querySelector('.grid__photos');


// App info collected
api.getAppInfo()
    .then(([cardList, userInfo]) => {
    api
        .getCardList()
        .then((serverCards) => {
            const cards = [];
            for (const card of serverCards) {
                let newCard = new Card(card, card.likes, cardTemplateSelector, () => {
                    popupImage.open(card);
                }, openDeleteModal, handleLikeClick);
                newCard = newCard.getCard();
                cards.push(newCard);
            } 
            return cards;
        })
        .then(res => {
            const cardBatch = new Section(
                {
                items: res,
                renderer: (element) => {
                    cardBatch.addItem(element);
                },
                }, listWrapper
            );
            cardBatch.renderer();
            return cardBatch;

        })

        // Image expand
        const popupImage = new PopupWithImage('.modal_photo');

        popupImage.setEventListeners();

        const togglePopHandler = ({ name, link }) => {
            popupImage.open({ name, link });
        };

        const popTemp = document.querySelector('.grid__card-template');

        popTemp.addEventListener('click', (evt) => {
            const popImage = document.querySelector('.modal_photo__image');
            const popTitle = document.querySelector('.modal_photo__caption');

            popImage.src = link;
            popTitle.textContent = name;

            togglePopHandler(evt);
            evt.stopPropagation();
        });

        // Add new cards
        const addPopup = new PopupWithForm('.modal_image', (data) => {
            api
                .addCard({ name: captionInput.value, link: imageInput.value })
                .then(res => {
                    const newCard = new Card((card) => {
                        popupImage.open(card)
                    }, cardTemplateSelector, openDeleteModal, handleLikeClick);
                    cardList.addItem(newCard.getCard());
                }).then(() => {
                    addPopup.buttonSaveSuccess();
                })            
                .catch(() => console.log('Error with add image modal api'));
            });

        addPopup.setEventListeners();
        
        imageFormOpen.addEventListener('click', (evt) => {
            evt.preventDefault();
        
            addPopup.open();
        });
    })

// UserInfo data
const userInfo = new UserInfo({ 
    name: userName,
    job: userJob,
    avatar: userAvatar,
});

api
    .getUserInfo()
    .then((data) => {
        userInfo.setUserInfo(data);
    })


// User info updates
const editPopup = new PopupWithForm('.modal_profile', (data, e) => {
    e.preventDefault();

    api
        .updateUserInfo(data)
        .then((values) => {
            userInfo.setUserInfo(values);
        })
        .then(() => {
            editPopup.close();
        })
        .then(() => {
            editPopup.buttonSaveSuccess();
        })
})

editPopup.setEventListeners();

profileFormOpen.addEventListener('click', (evt) => {
    evt.preventDefault();

    editPopup.open();
});


// Profile image updates
const avatarPopup = new PopupWithForm('.modal_avatar', {    
    handleFormSubmit: (avatar) => {
    api
    .setUserAvatar(inputValues.avatar)
        .then(({ avatar }) => {
            // userInfo.setUserAvatar(data.avatar);
            // userInfo.setUserInfo();
            userAvatar.src = avatar;
            avatarPopup.close();
      })
      .then(() => {
        avatarPopup.buttonSaveSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
    }
    });

  avatarPopup.setEventListeners();

  avatarContainer.addEventListener('click', () => {
    avatarPopup.open();
  });



// Validation
const profileFormValidation = new FormValidator(defaultConfig, profileModal);
const imageFormValidation = new FormValidator(defaultConfig, imageModal);
profileFormValidation.enableValidation();
imageFormValidation.enableValidation();


// Delete cards
const deletePopup = new PopupWithConfirm('.modal_delete', deleteSubmit);

function openDeleteModal(card, cardId) {
    deletePopup.open(card, cardId);
}

function deleteSubmit(card, cardId) {
    api.removeCard(cardId)
    .then(() => {
        deletePopup.close();
        card.remove();
        card = null;
    })
}

deletePopup.setEventListeners();


// Liker tool
function handleLikeClick(card, cardId, isLiked) {
    api.toggleLike(cardId, isLiked).then((data) => {
      card._likes = data.likes;
    })
    .catch((err) => {
      console.log(err);
    });
  }


