import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

    open({ link, name }) {
        const modalImageLink = this._popupElement.querySelector('.modal__input_image-link');

        modalImageLink.src = link;
        modalImageLink.alt = alt;
        this._popupElement.querySelector('.modal__input_caption').textContent = name;

        super.open();
    }
}