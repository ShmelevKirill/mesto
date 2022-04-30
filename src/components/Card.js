export default class Card {
  constructor(data, cardTemplate, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardTemplate = cardTemplate;
      this._handleCardClick = handleCardClick;
  }
  _getTemplate = () => {
      return this._cardTemplate.querySelector(".element").cloneNode(true);
  };
  _setEventListeners() {
      this._cardImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));
      this._cardLike = this._cardElement.querySelector(".element__container-like").addEventListener("click", () => this._likePhoto());
      this._cardDelete = this._cardElement.querySelector(".element__trash").addEventListener("click", () => this._deletePhoto());
  }
  _likePhoto() {
      this._cardElement.querySelector(".element__container-like").classList.toggle("element__container-like_active");
  }
  _deletePhoto() {
      this._cardElement.remove();
      this._cardElement = null;
  }
  generateCard = () => {
      this._cardElement = this._getTemplate();
      this._cardImage = this._cardElement.querySelector(".element__image");
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._cardElement.querySelector(".element__container-title").textContent = this._name;
      this._setEventListeners();
      return this._cardElement;
  };
}