export const initialCards = [{
  name: "Домбай, Россия",
  link: "./images/dombay.jpg",
}, {
  name: "Айбзее, Германия",
  link: "./images/eibsee.jpg",
}, {
  name: "Эльбрус, Россия",
  link: "./images/elbrus.jpg",
}, {
  name: "Карачаевск, Россия",
  link: "./images/karachaevsk.jpg",
}, {
  name: "Плитвицкие озёра, Хорватия",
  link: "./images/plitvice.jpg",
}, {
  name: "Озеро Тринити, США",
  link: "./images/trinity.jpg",
}, ];
export const config = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputError: 'popup__input_type_error',
  errorContainer: 'popup__input-error',
};
export const popupProfile = document.querySelector(".popup_profile");
export const popupPhoto = document.querySelector(".popup_photo");
export const popupFullPhoto = document.querySelector(".popup_image");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__status");
export const cardTemplate = document.querySelector("#element__template");
export const cardsContainer = document.querySelector(".elements__list");
export const profileForm = document.querySelector('form[name="popupuser"]');
export const cardForm = document.querySelector('form[name="popupcard"]');
export const profileNameInput = document.querySelector(".popup__input_name");
export const profileJobInput = document.querySelector(".popup__input_info");
export const cardNameInput = document.querySelector("#place-input");
export const cardLinkInput = document.querySelector("#url-input");
export const profileEditButton = document.querySelector(".profile__edit");
export const cardAddButton = document.querySelector(".profile__button");