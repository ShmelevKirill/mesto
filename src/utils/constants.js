const dombayImage = new URL("../images/dombay.jpg",
	import.meta.url);
const eibseeImage = new URL("../images/eibsee.jpg",
	import.meta.url);
const elbrusImage = new URL("../images/elbrus.jpg",
	import.meta.url);
const karachaevskImage = new URL("../images/karachaevsk.jpg",
	import.meta.url);
const plitviceImage = new URL("../images/plitvice.jpg",
	import.meta.url);
const trinityImage = new URL("../images/trinity.jpg",
	import.meta.url);
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
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error',
};
export const popupProfile = ".popup_profile";
export const popupPhoto = ".popup_photo";
export const popupFullPhoto = ".popup_image";
export const profileName = ".profile__name";
export const profileJob = ".profile__status";
export const cardTemplate = ".element__template";
export const cardsContainer = ".elements__list";
export const profileForm = document.querySelector('.popup__profile-form');
export const cardForm = document.querySelector('.popup__photo-form');
export const profileNameInput = document.querySelector('.popup__input_name');
export const profileJobInput = document.querySelector('.popup__input_info');
export const cardNameInput = document.querySelector('.popup__input_place');
export const cardLinkInput = document.querySelector('.popup__input_url');
export const profileEditButton = document.querySelector('.profile__edit');
export const cardAddButton = document.querySelector('.profile__button');