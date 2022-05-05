export default class Card {
	constructor(data, cardSelector, handleCardClick) {
		this._name = data.name;
		this._link = data.link;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
	}
	_getTemplate() {
		return document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
	}
	_switchLikeBtn() {
		this._cardLikeBtn.classList.toggle('element__container-like_active');
	}
	_deleteCard() {
		this._cardDeleteBtn.closest('.element').remove();
	}
	_setEventListeners() {
		this._cardLikeBtn.addEventListener('click', () => {
			this._switchLikeBtn();
		});
		this._cardDeleteBtn.addEventListener('click', () => {
			this._deleteCard();
		});
		this._cardImage.addEventListener('click', () => {
			this._handleCardClick(this._name, this._link);
		});
	}
	generateCard() {
		this._element = this._getTemplate();
		this._cardImage = this._element.querySelector('.element__image');
		this._cardImage.src = this._link;
		this._cardImage.alt = this._name;
		this._element.querySelector('.element__container-title').textContent = this._name;
		this._cardLikeBtn = this._element.querySelector('.element__container-like');
		this._cardDeleteBtn = this._element.querySelector('.element__trash');
		this._setEventListeners();
		return this._element;
	}
}