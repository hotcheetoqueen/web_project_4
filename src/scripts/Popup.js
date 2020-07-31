export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector);
        this._popupElementClass = `${popupSelector.split("_")[0]}`.slice(1);

        this._closeButton = this._popupElement.querySelector('.modal__close');
        this._handleEscClose = this._handleEscClose.bind(this);
    }

        open() {
            this._popupElement.classList.add(`${this._popupElementClass}_visible`);

            document.addEventListener('keyup', this._handleEscClose);
        }

        close() {
            this._popupElement.classList.remove(`${this._popupElementClass}_visible`);
        
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

            this._popupElement.addEventListener("click", (e) => {
              if(!e.target.closest('.modal__container')) {
                this.close();
              }
            });
        }
}