// import * as utils from './utils.js';

class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector('.card-popup__figure');
        
        this._popupOverlay = document.querySelector('.overlay');
        // this._popupElement = document.querySelector(popupSelector);
        this._popupElement = document.querySelector('.modal');
        this.handleEscClose = this._handleEscClose.bind(this);
    }
        open() {
            this._popupElement.classList.add('modal_visible');
            this._popupOverlay.classList.add('overlay_visible');
            this._popupSelector.classList.add('card-popup__figure_visible');

            document.addEventListener('keyup', this._handleEscClose);
        }

        close() {
            this._popupElement.classList.remove('modal_visible');
            this._popupOverlay.classList.remove('overlay_visible');
            this._popupSelector.classList.remove('card-popup__figure_visible');
        
            document.removeEventListener('keyup', this._handleEscClose);
        }

        _handleEscClose(evt) {
            if(evt.which == 27) {
                this.close();
            }
        }

        setEventListeners() {
            this._popupElement.addEventListener('click', (evt) => {
                if(evt.target.classList.contains('modal__close')) {
                    this.close();
                    evt.stopPropagation();
                    // evt.preventDefault();
                }
            });

        }
}

export default Popup;