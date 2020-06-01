// Modal triggers
const profileFormOpen = document.querySelector('.profile__edit-button');
const imageFormOpen = document.querySelector('.profile__add-button');
const profileFormClose = document.querySelector('.modal__close_profile');
const imageFormClose = document.querySelector('.modal__close_image');
const overlay = document.querySelector('.overlay');

// Modal forms
const profileModal = document.querySelector('.modal_profile');
const imageModal = document.querySelector('.modal_image');
const form = document.querySelector('.modal__form');
const profileForm = document.querySelector('.modal__form_profile');
const imageForm = document.querySelector('.modal__form_image');

// Profile form data
const userName = document.querySelector('.profile__info_name');
const userJob = document.querySelector('.profile__info_description');
const nameInput = document.querySelector('.modal__input_name');
const jobInput = document.querySelector('.modal__input_description');

// Photos form data
const placeCaption = document.querySelector('grid__photos-caption');
const placeImage = document.querySelector('grid__photos-image');
const captionInput = document.querySelector('.modal__input_caption');
const imageInput = document.querySelector('.modal__input_image-link');


// Profile form handler
const toggleHandler = () => {
    overlay.classList.toggle('overlay_visible');
    profileModal.classList.toggle('modal_visible');

    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

profileFormOpen.addEventListener('click', toggleHandler);
profileFormClose.addEventListener('click', toggleHandler);


profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    toggleHandler();
});


// Photos form handler
const toggleImgHandler = () => {
    overlay.classList.toggle('overlay_visible');
    imageModal.classList.toggle('modal_visible');

    captionInput.value = placeCaption.textContent;
    imageInput.value = placeImage.textContent;
}

imageFormOpen.addEventListener('click', toggleImgHandler);
imageFormClose.addEventListener('click', toggleImgHandler);


// Cards handler
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
]

// Initial function to create gallery
const cardTemplate = document.querySelector('.grid__card-template').content.querySelector('.grid__photos-item');
const listWrapper = document.querySelector('.grid__photos');

function setCard(card) {
    listWrapper.prepend(card);
}

defaultCards.forEach((card) => {
    setCard(createCard(card));
});

// Image pop up
const popOpen = document.querySelector('.grid__photos-image');
const popUp = document.querySelector('.grid__card-popup')
const popClose = document.querySelector('.grid__card-popup-close');

const togglePopHandler = () => {
    overlay.classList.toggle('overlay_visible');
    popUp.classList.toggle('grid__card-popup_visible');
}

popOpen.addEventListener('click', togglePopHandler);
popClose.addEventListener('click', togglePopHandler);

// const cardPopup = document.querySelector('.grid__card-popup').content.querySelector('.grid__photos-image_fig');

// function cardPop(card) {
//     cardPopup.classList.toggle('grid__card-popup_visible');
// }

// Create new user generated cards
function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardItem = cardElement.querySelector('.grid__card-item');
    const cardImage = cardElement.querySelector('.grid__photos-image');
    const cardTitle = cardElement.querySelector('.grid__photos-caption');
    const cardLikeButton = cardElement.querySelector('.grid__photos-liker');
    const cardDeleteButton = cardElement.querySelector('.grid__photos-delete');

    cardTitle.textContent = card.name;
    cardImage.style.backgroundImage = 'url(' + card.link + ')';

    cardLikeButton.addEventListener('click', () => {
        cardLikeButton.classList.toggle('grid__photos-liker_on');
    });

    cardDeleteButton.addEventListener('click', () => {
        cardElement.remove();
    });

    // cardElement.addEventListener('click', () => {
    //     cardImage.classList.toggle('grid__photos-item_popped');
    //     overlay.classList.toggle('overlay_visible');
    // });

    return cardElement;
};


const createBtn = document.querySelector ('.modal__save-btn_create')

createBtn.addEventListener('submit', (evt) => {
    evt.preventDefault();

    placeCaption.textContent = captionInput.value;
    placeImage.textContent = imageInput.value;

    createCard();;
    toggleImgHandler();
});

// defaultCards.map(function (card) {

//     return cardElement;
// }
//     elementList.prepend(cardElement);
// )