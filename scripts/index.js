import { initialCards } from '../scripts/initialCards.js';
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import config from '../scripts/constants.js';

const cardTemplate = document.querySelector('#element__template').content;
const cardContainer = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__status');
const profileNameInput = document.querySelector('.popup__input_name');
const profileJobInput = document.querySelector('.popup__input_info');
const profileForm = document.querySelector('form[name="popupuser"]');
const cardForm = document.querySelector('form[name="popupcard"]');
const cardNameInput = document.querySelector('#place-input');
const cardLinkInput = document.querySelector('#url-input');
const profileEditButton = document.querySelector('.profile__edit');
const cardAddButton = document.querySelector('.profile__button');
const popupProfile = document.querySelector('.popup_profile');
const popupPhoto = document.querySelector('.popup_photo');
const popupFullPhoto = document.querySelector('.popup_image');
const cardImage = popupFullPhoto.querySelector('.popup__img');
const cardTitle = popupFullPhoto.querySelector('.popup__title');

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

function createCard(item) {
  const card = new Card(item, cardTemplate, openFullPhoto);
  const cardItem = card.generateCard();
  return cardItem;
}

function addCard(card, position) {
  if (position === 'begin') {
cardContainer.prepend(card);
} else {
  cardContainer.append(card);
}
}

function renderCards() {
  initialCards.forEach((item) => {
    const card = createCard(item);
    addCard(card);
  });
}


function settingProfile(name, job) {
profileName.textContent = name;
profileJob.textContent = job;
}

function editProfile(name, job) {
profileNameInput.value = name;
profileJobInput.value = job;
}

function openProfile() {
  profileForm.reset()
  editProfile(profileName.textContent, profileJob.textContent);
  formValidators[profileForm.getAttribute('name')].resetValidation();
  openPopup(popupProfile)
}

function openCard() {
  cardForm.reset();
  formValidators[cardForm.getAttribute('name')].resetValidation();
  openPopup(popupPhoto);
}

function openFullPhoto(name, link) {
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  openPopup(popupFullPhoto);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closeEscKey);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closeEscKey);
}

function closeEscKey(event) {
  event.preventDefault();
  if (event.key === 'Escape') {
      const activePopup = document.querySelector('.popup_opened');
      closePopup(activePopup);
  }
}

function submitFormHandler(event) {
  const form = event.currentTarget;
  settingProfile(profileNameInput.value, profileJobInput.value);
  closePopup(popupProfile);
  formValidators[profileForm.getAttribute('name')].resetValidation();
  form.reset();
}

function submitPhotoFormHandler(event) {
  const form = event.currentTarget;
  const card = createCard({ name: cardNameInput.value, link: cardLinkInput.value });
  addCard(card, 'begin');
  closePopup(popupPhoto);
  formValidators[cardForm.getAttribute('name')].resetValidation();
  form.reset();
}

function addPopupCloseListeners() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup_opened') ||
      event.target.classList.contains('popup__close')) {
        closePopup(popup);
      }
    });
  });
}

enableValidation(config);
renderCards();
addPopupCloseListeners();


profileForm.addEventListener('submit', submitFormHandler);
cardForm.addEventListener('submit', submitPhotoFormHandler);
profileEditButton.addEventListener('click', openProfile);
cardAddButton.addEventListener('click', openCard);