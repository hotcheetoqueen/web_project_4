export default class Popup {
    constructor(popupSelector) {
        this._popupSelect = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
    }
        open() {
            this._popupElement.classList.add('modal_visible');
            this._popupOverlay.classList.add('overlay_visible');
            
            document.addEventListener('keyup', this._handleEscClose);
        }

        close() {
            this._popupElement.classList.remove('modal_visible');
            this._popupOverlay.classList.remove('overlay_visible');

            document.addEventListener('keyup', this._handleEscClose);
        }

        _handleEscClose() {
            if(event.key === 'Escape') {
                this.close();
            }
        }

        setEventListeners() {
            this._popupElement.addEventListener('click', (evt) => {
                if(evt.target.classList.contains('modal__close')) {
                    this.close();
                }
            })
        }
}