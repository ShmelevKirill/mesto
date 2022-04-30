export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }
    open() {
        this._popup.classlist.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this._popup.classlist.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayAndCloseButton = (evt) => {
        if (evt.target.classlist.contains('popup_opened') || evt.target.classlist.contains(popup__close)) this.close();
    }
    setEventListeners() {
        this._popup.addEventListener('mousedown, this._handleOverlayAndCloseButton');
    }
    _removeEventLIsteners() {
        this._popup.removeEventListener('mousedown', this._handleOverlayAndCloseButton);
    }
}