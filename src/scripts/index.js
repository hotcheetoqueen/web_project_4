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
        defaultCards, 
        defaultConfig, 
        imageModal, 
        profileModal, 
        profileFormOpen,
        imageFormOpen, 
        userName,
        userJob,
        userAvatar,
        captionInput,
        imageInput,
    } from './utils.js';
import { pitch } from "file-loader";

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

api.getAppInfo()
    .then(([cardList, userInfo]) => {
    api
        .getCardList()
        .then((defaultCards) => {
            const cards = [];
            for (let card of defaultCards) {
                let newCard = new Card(card, cardTemplateSelector, () => {
                    popupImage.open(card);
                });
                newCard = newCard.getCard();
                cards.push(newCard);
            } 
            return cards;
        })
        .then(res => {
            const cardList = new Section(
                {
                items: res,
                renderer: (element) => {
                    cardList.addItem(element);
                },
                }, listWrapper
            );
            cardList.renderer();
            return cardList;
        })
        // .catch(console.log);

    const addPopup = new PopupWithForm('.modal_image', (data) => {
        api
            .addCard({ name: captionInput.value, link: imageInput.value })
            .then(res => {
                let newCard = new Card(data => {
                    popupImage.open(data)
                });
                cardList.addItem(newCard.getCard());
            })
            // .catch(() => console.log('Error with add image modal api'));
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
    // .catch((err) => {
    //     console.log(err);
    // });


// Form modals
const editPopup = new PopupWithForm('.modal_profile', (data) => {
    // e.preventDefault();

    api
        .updateUserInfo(data)
        .then((data) => {
            userInfo.setUserInfo(data);
        })
        .then(() => {
            editPopup.close();
        })
        .then(() => {
            editPopup.buttonSaveSuccess();
        })
        .catch((err) => {
            console.log(err);
        });
})

editPopup.setEventListeners();


// Form open event listeners
profileFormOpen.addEventListener('click', (evt) => {
    evt.preventDefault();

    editPopup.open();
});


// Validation
const profileFormValidation = new FormValidator(defaultConfig, profileModal);
const imageFormValidation = new FormValidator(defaultConfig, imageModal);
profileFormValidation.enableValidation();
imageFormValidation.enableValidation();


// Delete cards
// const deletePopup = new PopupWithConfirm('.modal_delete');

// function openDeleteModal(card, cardId) {
//     deletePopup.open(card, cardId);
// }

// function deleteSubmit(card, cardId) {
//     api.deleteCard(cardId);
//     deletePopup.close();
//     card.remove();
//     card = null;
// }

// deletePopup.setEventListeners();



// Liking tools
// Like handler
// if (!card.isLiked()) {
//     api.addLike(cardID)
//         .then((res) => {
//             card.setLiked(res.likes.some((user) => user._id === me));
//             card.setLikes(res.likes);
//             card.render();
//         }).catch(console.log);
//     } else {
//         api.removeLike(cardId)
//         .then((res) => )
//     }
// function handleLikeClick(card, cardId, isLiked) {
//     api.updateLikes(cardId, isLiked).then((data) => {
//       card._likes = data.likes;
//     })
// }


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

    popImage.src = `${link}`;
    popTitle.textContent = name;

    togglePopHandler(evt);
    evt.stopPropagation();
});

