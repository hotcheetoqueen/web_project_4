import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

    open({ link, name }) {
        const modalImageLink = this._popupElement.querySelector('.modal_photo__image');
        const modalImageCaption = this._popupElement.querySelector('.modal_photo__caption');

        modalImageLink.src = link;
        modalImageLink.alt = name;
        modalImageCaption.textContent = name;

        super.open();
    }
}