import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__container-form');
    }
    setHandleFormSubmit(action) {
        this._handleFormSubmitAction = action;
    }
    setEventListeners() {
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmitAction();
        });
        super.setEventListeners();
    }
}