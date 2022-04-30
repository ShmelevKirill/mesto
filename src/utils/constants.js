import dombayImage from "../images/dombay.jpg"
import eibseeImage from "../images/eibsee.jpg"
import elbrusImage from "../images/elbrus.jpg"
import karachaevskImage from "../images/karachaevsk.jpg"
import plitviceImage from "../images/plitvice.jpg"
import trinityImage from "../images/trinity.jpg"

export const initialCards = [{
  name: "Домбай, Россия",
  link: dombayImage,
}, {
  name: "Айбзее, Германия",
  link: eibseeImage,
}, {
  name: "Эльбрус, Россия",
  link: elbrusImage,
}, {
  name: "Карачаевск, Россия",
  link: karachaevskImage,
}, {
  name: "Плитвицкие озёра, Хорватия",
  link: plitviceImage,
}, {
  name: "Озеро Тринити, США",
  link: trinityImage,
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