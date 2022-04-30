export default class FormValidator {
  constructor(formElement, validationConfig) {
      this._formElement = formElement;
      this._inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
      this._buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
      this._inputError = validationConfig.inputError;
      this._errorContainer = validationConfig.errorContainer;
      this._inactiveButtonClass = validationConfig.inactiveButtonClass;
  }
  _showInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputError);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorContainer);
  }
  _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputError);
      errorElement.classList.remove(this._errorContainer);
      errorElement.textContent = '';
  }
  _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
      } else {
          this._hideInputError(inputElement);
      }
  }
  _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
      });
  }
  disableSubmitButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
  }
  _enableSubmitButton() {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
  }
  _toggleButtonState() {
      if (this._hasInvalidInput()) {
          this.disableSubmitButton();
      } else {
          this._enableSubmitButton();
      }
  };
  _setEventListeners() {
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
              this._checkInputValidity(inputElement);
              this._toggleButtonState();
          });
      });
  }
  resetValidationState() {
      this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
      });
      this._toggleButtonState();
  }
  enableValidation() {
      this._setEventListeners();
  }
}