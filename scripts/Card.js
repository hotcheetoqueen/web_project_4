import { popUp, overlay, togglePopHandler, popUpCreator} from './utils.js';

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

        this._imagePop = cardTemplate
        .querySelector('.grid__photos-image');

        return cardTemplate;
    }

    _setEventListeners() {
//add event listener for popUp
        this._card.querySelector('.grid__photos-liker').addEventListener('click', (e) => {
            e.target.classList.toggle('grid__photos-liker_on');
        });
    
        this._card.querySelector('.grid__photos-delete').addEventListener('click', () => {
            this._card.remove();
        });
            
        this._imagePop.addEventListener('click', (e) => {
            popUpCreator(this._link, this._name, e);
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