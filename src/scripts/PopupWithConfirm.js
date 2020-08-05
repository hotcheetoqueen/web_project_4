import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleFormSubmit, openDeleteModal) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._openDeleteModal = openDeleteModal;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', () => {
            this._handleFormSubmit(this._cardId, this._card);
        });
    }

    open() {
        super.open();
    }
}