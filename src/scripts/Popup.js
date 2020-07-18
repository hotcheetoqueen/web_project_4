import popClose from './utils';

export default class Popup {
    constructor(popupSelector, popupOverlay) {
        this._popupSelector = popupSelector;
        this._popupOverlay = popupOverlay;
        this._popupElement = document.querySelector(popupSelector);
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

        _handleEscClose() {
            if(event.key === '27') {
                this.close();
            }
        }

        setEventListeners() {
            this._popupElement.addEventListener('click', (evt) => {
                if(evt.target.classList.contains(popClose)) {

                    this.close();
                }
            })
        }
}