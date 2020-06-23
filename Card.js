// TO DO
// All code in Card class and only creates a card with text & image link
    // It takes card data — text and a link to the image — and a template element selector as parameters into the constructor.
    // It has private methods for working with markup and adding event listeners.
    // It has private methods for each event handler.
    // It has one public method that returns a fully functional card element populated with data.
    // Create a Card class instance for each card.
// Export to index.js as module



// Image pop up
const popUp = document.querySelector('.card-popup__figure');
const popImage = document.querySelector('.card-popup__image');
const popTitle = document.querySelector('.card-popup__caption');
const overlay = document.querySelector('.overlay');
const popTemp = document.querySelector('.grid__card-template');
const popClose = document.querySelector('.card-popup__close');


const togglePopHandler = (e) => {
    if (overlay.classList.contains('overlay_visible') && !popUp.classList.contains('card-popup__figure_visible')) {
        e.preventDefault();
    } else {
        overlay.classList.toggle('overlay_visible');
        popUp.classList.toggle('card-popup__figure_visible');
    }
};

popTemp.addEventListener('click', togglePopHandler);
popClose.addEventListener('click', togglePopHandler);

class Card {
    constructor(data, cardTemp) {
        this._name = data.name;
        this._link = data.link;

        this._cardTemp = cardTemp;
    }

    _createCard() {
        const cardTemplate = document
        .querySelector(this._cardTemp)
        .content
        .querySelector('.grid__photos-item')
        .cloneNode(true);

        return cardTemplate;
    }

    _setEventListeners() {
        this._card.querySelector('.grid__photos-liker').addEventListener('click', (e) => {
            e.target.classList.toggle('grid__photos-liker_on');
        });
    
        this._card.querySelector('.grid__photos-delete').addEventListener('click', () => {
            this._card.remove();
        });
    
        this._card.querySelector('.grid__photos-image').addEventListener('click', (e) => {
                popImage.src = `${this._link}`;
                popTitle.textContent = this._name;
                togglePopHandler();
                e.stopPropagation();
          });
    
    }

    getCard() {
        this._card = this._createCard();

        this._card.querySelector('.grid__photos-image').style.backgroundImage = `url('${this._link}')`;
        this._card.querySelector('.grid__photos-caption').textContent = this._name;

        this._setEventListeners();

        return this._card;
        }
    }

export default Card;