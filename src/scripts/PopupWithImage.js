import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }


    open({ link, name }) {
        const modalImageLink = this._popupElement.querySelector('.modal__input_image-link');
        // const modalImageLink = this._popupElement.querySelector('.grid__photos-image');

        modalImageLink.src = link;
        modalImageLink.alt = name;
        this._popupElement.querySelector('.modal__input_caption').textContent = name;
        // this._popupElement.querySelector('.grid__photos-caption').textContent = name;

        super.open();
    }
}