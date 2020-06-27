const popUp = document.querySelector('.card-popup__figure');
const overlay = document.querySelector('.overlay');

function togglePopHandler(e) {

    if (overlay.classList.contains('overlay_visible') && !popUp.classList.contains('card-popup__figure_visible')) {
        e.preventDefault();
    } else {
        overlay.classList.toggle('overlay_visible');
        popUp.classList.toggle('card-popup__figure_visible');
    }
};

const popTemp = document.querySelector('.grid__card-template');
const popClose = document.querySelector('.card-popup__close');

popTemp.addEventListener('click', togglePopHandler);
popClose.addEventListener('click', togglePopHandler);


function popUpCreator(link, name, e) {
    const popImage = document.querySelector('.card-popup__image');
    const popTitle = document.querySelector('.card-popup__caption');

        popImage.src = `${link}`;
        popTitle.textContent = name;
        togglePopHandler();
        e.stopPropagation();
};

export { popUp, overlay, togglePopHandler, popUpCreator};