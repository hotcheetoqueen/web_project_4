import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({ link, name }) {
        const modalImageLink = this._popupElement.querySelector('.modal__input_image-link');

        modalImageLink.src = link;
        modalImageLink.alt = alt;
        this._popupElement.querySelector('.modal__input_caption').textContent = name;

        super.open();
    }
}

export default PopupWithImage;