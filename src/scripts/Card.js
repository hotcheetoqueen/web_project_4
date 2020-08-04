export default class Card {
    constructor({ name, link, id }, likes, cardTemplateSelector, handleCardClick, handleDeleteClick, 
        userId, cardId, ownerId, handleLikeClick, likeCounter) {

            console.log(likes);

        this._name = name;
        this._link = link;
        this._id = id;

        this._ownerId = ownerId;
        this._userId = userId;
        this._admin = this._ownerId === this._userId;
        this._cardId = cardId;

        this._handleDeleteClick = handleDeleteClick;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;

        this._likes = likes;
        this._likeCounter = likeCounter;
        this._handleLikeClick = handleLikeClick;
        this._likeCount = likes.length;
    }

    _createCard() {
        const cardTemplate = document
        .querySelector(this._cardTemplateSelector)
        .content
        .querySelector('.grid__photos-item')
        .cloneNode(true);
        
        this._imagePop = cardTemplate.querySelector('.grid__photos-image');
        this._imageCaption = cardTemplate.querySelector('.grid__photos-caption')

        this._liker = cardTemplate.querySelector('.grid__photos-liker');
        this._likeCounter = cardTemplate.querySelector('.grid__photos-like-counter');
        this._deleteButton = cardTemplate.querySelector('.grid__photos-delete');

        return cardTemplate;
    }


    id() {
        return this._id;
    }

    _likedByUser() {
        for (let i = 0; i < this._likes.length; i++) {
            if (this._likes[i].id === this._userId) {
              return true;
            }
          }
          return false;
    }

    _removeCard() {
        this._card.remove();
        this._card = null;
    }

    _setEventListeners() {
        this._card.querySelector('.grid__photos-liker').addEventListener('click', (e) => {
            e.target.classList.toggle('grid__photos-liker_on');
            
        if (this._likedByUser()) {
            this._likeCounter.textContent = parseInt(--this._likes.length);
            } else {
            this._likeCounter.textContent = parseInt(++this._likes.length);
            }

            this._handleLikeClick(this, this._id, this._likedByUser());
        });
    
        this._card.querySelector('.grid__photos-delete').addEventListener('click', () => 
            this._handleDeleteClick(this._id));

        this._card.querySelector('.grid__photos-image').addEventListener('click', () => {
            this._handleCardClick({
                name: this._name,
                link: this._link,
            });
        });
    }

    getCard() {
        this._card = this._createCard();
        if (!this._admin) {
            this._card.classList.remove('grid__photos-delete');
        }

        this._card.querySelector('.grid__photos-image').style.backgroundImage = `url('${this._link}')`;
        this._card.querySelector('.grid__photos-caption').textContent = this._name;
        this._card.querySelector('.grid__photos-like-counter').textContent = this._likeCount;
            if (this._likedByUser()) {
                this._liker.classList.add('grid__photos-liker_on');
            }

        this._setEventListeners();

        return this._card;
        }
    }