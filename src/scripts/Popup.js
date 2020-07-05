class Popup {
    constructor(popupSelector) {
        // this._popupSelect = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
    }
        open() {
            this._popupElement.classList.add('modal__open');
            document.addEventListener('keyup', this._handleEscClose);
        }

        close() {
            this._popupElement.classList.remove('modal__open');
            document.addEventListener('keyup', this._handleEscClose);
        }

        _handleEscClose() {
            if(event.key === 'Escape') {
                this.close();
            }
        }

        setEventListeners() {
            this._popupElement.addEventListener('click', (evt) => {
                if(evt.target.classList.contains('popup__close')) {
                    this.close();
                }
            })
        }
}

export default Popup;