import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }


    open({ link, name }) {
        const modalImageLink = this._popupElement.querySelector('.card-popup__image');
        const modalImageCaption = this._popupElement.querySelector('.card-popup__caption');

        modalImageLink.src = link;
        modalImageLink.alt = name;
        modalImageCaption.textContent = name;

        super.open();
    }
}