import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListenter('submit', () => {
            this._handleFormSubmit(this._card, this._cardId);
        });
    }

    open(card, cardId) {
        this._cardId = cardId;
        this._card = card;
        super.open();
    }
}