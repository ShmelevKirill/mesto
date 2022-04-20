export default class Card {
    constructor(data, cardTemplate, handleClickCard) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = cardTemplate;
        this._handleClickCard = handleClickCard;
    }

    _getTemplate = () => {
        return this._cardTemplate.querySelector('.element').cloneNode(true);
    }

    _setEventListeners = () => {
        this._cardImage.addEventListener('click', () => this._handleClickCard(this._name, this._link));
        this._cardElement.querySelector('.element__container-like').addEventListener('click', this._likePhoto);
        this._cardElement.querySelector('.element__trash').addEventListener('click', this._deletePhoto);
    }

    _likePhoto = (event) => {
        event.target.classList.toggle('element__container-like_active');
    }

    _deletePhoto = (event) => {
        event.target.closest('.element').remove();
        this._cardElement = null;
    }
    
    generateCard = () => {
        this._cardElement = this._getTemplate();
        this._cardImage = this._cardElement.querySelector('.element__image');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardElement.querySelector('.element__container-title').textContent = this._name;
        this._setEventListeners();

        return this._cardElement;
    }
}
