export default class Section {
    constructor({ items, renderer }, cardContainer) {
        this._array = items;
        this._renderer = renderer;
        this._container = document.querySelector(cardContainer);
    }

    renderer() {
        this._array.forEach((item) => {
            this._renderer(item);
        });
    }
                
    addItem(element) {
        this._container.prepend(element);
    }
}