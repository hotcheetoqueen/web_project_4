// import * as utils from './utils.js';

class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector('.modal');
        this._popupOverlay = document.querySelector('.overlay');
        // this._popupSelector = popupSelector;
        // this._popupElement = popupSelector;

        this._closeButton = document.querySelector('.modal__close');
        this._handleEscClose = this._handleEscClose.bind(this);
    }

        open() {
            this._popupElement.classList.add('modal_visible');
            this._popupOverlay.classList.add('overlay_visible');

            document.addEventListener('keyup', this._handleEscClose);
        }

        close() {
            this._popupElement.classList.remove('modal_visible');
            this._popupOverlay.classList.remove('overlay_visible');
        
            document.removeEventListener('keyup', this._handleEscClose);
        }

        _handleEscClose(evt) {
            if(evt.which == 27) {
                this.close();
            }
        }

        setEventListeners() {
            this._closeButton.addEventListener("click", () => {
              this.close();
            });

        //     this._popupElement.addEventListener('click', (evt) => {
//         if(evt.target.classList.contains('modal__close')) {
//             this.close(evt);
//             evt.stopPropagation();
//         }
        //     });

        //     this._popupOverlay.addEventListener("click", () => {
        //       this.close();
        //     });

        //     this._handleEscClose();
          }
}

export default Popup;