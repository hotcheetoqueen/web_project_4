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
    constructor(data, cardTemplateSelector) {
        this._name = data.name;
        this._link = data.link;

        this._cardTemplateSelector = cardTemplateSelector;
    }

    _createCard() {
        const cardTemplate = document
        .querySelector(this._cardTemplateSelector)
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