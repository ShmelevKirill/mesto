import './index.css';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import {
	initialCards,
	popupProfile,
	popupPhoto,
	popupFullPhoto,
	profileName,
	profileJob,
	cardTemplate,
	cardsContainer,
	profileForm,
	cardForm,
	profileNameInput,
	profileJobInput,
	cardNameInput,
	cardLinkInput,
	profileEditButton,
	cardAddButton,
	config,
	formAvatar,
    editAvatar,
    profilePhoto,
    linkNewAvatar,
    popupAvatar,
    popupDelete
}
from '../utils/constants.js';

const formAvatarValidator = new FormValidator(formAvatar, config)
const formEditValidator = new FormValidator(profileForm, config);
const photoAddValidator = new FormValidator(cardForm, config);
const openPopupImage = new PopupWithImage(popupFullPhoto);
const userInfo = new UserInfo({
	nameSelector: profileName,
	descriptionSelector: profileJob
});
const handleCardClick = (name, link) => {
	openPopupImage.open(name, link);
};

const popupAvatarForm = new PopupWithForm(popupAvatar, {
	handleFormSubmit: () => {
		profilePhoto.src = linkNewAvatar.value;
	},
});

const popupDelCard = new PopupWithForm(popupDelete, {
	handleFormSubmit: () => {},
});

const createCard = (data) => {
	const card = new Card(data, cardTemplate, handleCardClick);
	return card.generateCard();
};
const cardSection = new Section({
	items: initialCards,
	renderer: (data) => {
		const card = createCard(data);
		cardSection.addItem(card);
	},
}, cardsContainer);
const popupEditForm = new PopupWithForm(popupProfile, {
	handleFormSubmit: () => {
		userInfo.setUserInfo({
			name: profileNameInput.value,
			description: profileJobInput.value
		});
	},
});
const openPopupEditForm = () => {
	const userData = userInfo.getUserInfo();
	popupEditForm.open();
	profileNameInput.value = userData.name;
	profileJobInput.value = userData.description;
	formEditValidator.resetValidationState();
};
const popupAddForm = new PopupWithForm(popupPhoto, {
	handleFormSubmit: () => {
		const newCard = createCard({
			name: cardNameInput.value,
			link: cardLinkInput.value
		});
		cardSection.addItem(newCard);
	},
});
cardSection.renderItems();
profileEditButton.addEventListener('click', () => {
	openPopupEditForm();
	formEditValidator.disableSubmitButton();
});
cardAddButton.addEventListener('click', () => {
	popupAddForm.open();
	photoAddValidator.resetValidationState();
});

editAvatar.addEventListener('click', () => {
	popupAvatarForm.open();
	formAvatarValidator.resetValidationState();
});

formEditValidator.enableValidation();
photoAddValidator.enableValidation();

formAvatarValidator.enableValidation();

openPopupImage.setEventListeners();
popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
popupAvatarForm.setEventListeners();
popupDelCard.setEventListeners();