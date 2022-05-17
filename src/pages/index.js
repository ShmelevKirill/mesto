import './index.css';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";
import {
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
    profileEditButton,
    cardAddButton,
    config,
    formAvatar,
    editAvatar,
    profilePhoto,
    popupAvatar,
    popupDelete
} from '../utils/constants.js';

const formAvatarValidator = new FormValidator(formAvatar, config)
const formEditValidator = new FormValidator(profileForm, config);
const formPhotoAddValidator = new FormValidator(cardForm, config);
const openPopupImage = new PopupWithImage(popupFullPhoto);
const popupDeleteCard = new PopupWithConfirmation(popupDelete);
const userInfo = new UserInfo({
    nameSelector: profileName,
    descriptionSelector: profileJob,
    profilePhotoSelector: profilePhoto,
});
const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-41",
    headers: {
        authorization: "10672816-06e3-49fd-b34a-62a0815f6866",
        "Content-Type": "application/json",
    },
});
api.getAllData().then(([dataCards, dataUser]) => {
    userInfo.setUserInfo({
        name: dataUser.name,
        description: dataUser.about,
        avatar: dataUser.avatar,
        id: dataUser._id,
    });
    cardSection.renderItems(dataCards);
}).catch((err) => console.log(err));
const createCard = (cardData) => {
    const card = new Card({
        data: {...cardData,
            userId: userInfo._id
        },
        handleCardClick: (name, link) => {
            openPopupImage.open(name, link);
        },
        handleLikeClick: (card) => {
            if (card.isLiked()) {
                api.deleteLike(card.getId()).then((data) => {
                    card.setLikes(data);
                }).catch((err) => console.log(err));
            } else {
                api.setLike(card.getId()).then((data) => {
                    card.setLikes(data);
                }).catch((err) => console.log(err));
            }
        },
        handleDeleteIconClick: (card) => {
            popupDeleteCard.open();
            popupDeleteCard.setHandleFormSubmit(() => {
                api.deleteCard(card.getId()).then(() => {
                    card.deleteCard();
                    popupDeleteCard.close();
                }).catch((err) => console.log(err));
            });
        },
    }, cardTemplate);
    return card.generateCard();
};
const cardSection = new Section({
    renderer: (data) => {
        const card = createCard(data);
        cardSection.addItem(card);
    },
}, cardsContainer);
const popupEditForm = new PopupWithForm(popupProfile, {
    handleFormSubmit: (data) => {
        popupEditForm.renderLoading(true),
        api.setUserInfo({
            name: data.username,
            about: data.userabout,
        }).then((infoData) => {
            userInfo.setUserInfo({
                name: infoData.name,
                description: infoData.about,
                avatar: infoData.avatar,
                id: infoData._id,
            });
            popupEditForm.close();
        }).catch((err) => console.log(err)).finally(() => {
            popupEditForm.renderLoading(false);
        });
    },
});
const popupAvatarForm = new PopupWithForm(popupAvatar, {
    handleFormSubmit: (data) => {
        popupAvatarForm.renderLoading(true),
        api.setUserAvatar({
            avatar: data["linkavatar"],
        }).then((data) => {
            userInfo.setUserInfo({
                name: data.name,
                description: data.about,
                avatar: data.avatar,
                id: data._id,
            });
            popupAvatarForm.close();
        }).catch((err) => console.log(err)).finally(() => {
            popupAvatarForm.renderLoading(false);
        });
    },
});
const popupPhotoAddForm = new PopupWithForm(popupPhoto, {
    handleFormSubmit: (data) => {
        popupPhotoAddForm.renderLoading(true),
        api.addCard({
            name: data.phototitle,
            link: data.photolink,
        }).then((data) => {
            const newCard = createCard(data);
            cardSection.addItem(newCard);
            popupPhotoAddForm.close();
        }).catch((err) => console.log(err)).finally(() => {
            popupPhotoAddForm.renderLoading(false);
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
profileEditButton.addEventListener("click", () => {
    openPopupEditForm();
    formEditValidator.disableSubmitButton();
});
cardAddButton.addEventListener("click", () => {
    popupPhotoAddForm.open();
    formPhotoAddValidator.resetValidationState();
});
editAvatar.addEventListener("click", () => {
    popupAvatarForm.open();
    formAvatarValidator.resetValidationState();
});
formEditValidator.enableValidation();
formPhotoAddValidator.enableValidation();
formAvatarValidator.enableValidation();
openPopupImage.setEventListeners();
popupEditForm.setEventListeners();
popupPhotoAddForm.setEventListeners();
popupAvatarForm.setEventListeners();
popupDeleteCard.setEventListeners();