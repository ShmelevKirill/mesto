//Load Photo
const initialCards = [
  {
    name: 'Домбай, Россия',
    link: './images/dombay.jpg'
  },
  {
    name: 'Айбзее, Германия',
    link: './images/eibsee.jpg'
  },
  {
    name: 'Эльбрус, Россия',
    link: './images/elbrus.jpg'
  },
  {
    name: 'Карачаевск, Россия',
    link: './images/karachaevsk.jpg'
  },
  {
    name: 'Плитвицкие озёра, Хорватия',
    link: './images/plitvice.jpg'
  },
  {
    name: 'Озеро Тринити, США',
    link: './images/trinity.jpg'
  }
];

const popupProfile = document.querySelector('.popup_profile');
const profileOpen = document.querySelector('.profile__edit');
const profileClose = popupProfile.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__status');
const formElement = document.querySelector('.popup__container-form');
const nameInput = formElement.querySelector('.popup__input_name');
const jobInput = formElement.querySelector('.popup__input_info');
const popup = document.querySelector('.popup');

const popupPhoto = document.querySelector('.popup_photo');
const popupPhotoOpen = document.querySelector('.profile__button');
const popupPhotoClose = popupPhoto.querySelector('.popup__close');
const photoTitle = popupPhoto.querySelector('.popup__input_place');
const photoLink = popupPhoto.querySelector('.popup__input_url');

const fullPhotoPopup = document.querySelector('.popup_image');
const fullPhotoOpen = fullPhotoPopup.querySelector('.popup__img');
const fullPhotoClose = fullPhotoPopup.querySelector('.popup__close');

const elementTemplate = document.querySelector('#element__template').content;
const elements = document.querySelector('.elements__list');
const imagePopup = document.querySelector('.popup__img');
const imagePopupTitle = document.querySelector('.popup__title')


//Profile Popup

const togglePopup = function (popup) {
  popup.classList.toggle('popup_opened');
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

profileOpen.addEventListener('click', function () {
  togglePopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

profileClose.addEventListener('click', function () {
  togglePopup(popupProfile);
});

popupProfile.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    togglePopup(popupProfile);
  };
});


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
      const popupActive = document.querySelector(".popup_opened");
      closePopup(popupActive);
      closePopup(popupProfile);
      closePopup(popupPhoto);
      closePopup(fullPhotoPopup);
  }
});

function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popupProfile)
}

formElement.addEventListener('submit', submitFormHandler);


//Add Photo Popup

popupPhotoOpen.addEventListener('click', function () {
    togglePopup(popupPhoto);
});

popupPhotoClose.addEventListener('click', function () {
  togglePopup(popupPhoto);
});

popupPhoto.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    togglePopup(popupPhoto);
  }
});


// Full Photo Popup

fullPhotoOpen.addEventListener('click', function () {
  togglePopup(fullPhotoPopup);
});

fullPhotoClose.addEventListener('click', function () {
  togglePopup(fullPhotoPopup);
});

fullPhotoPopup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    togglePopup(fullPhotoPopup);
  }
});

function openPhoto(titleValue, imageValue) {
  imagePopup.src = imageValue;
  imagePopupTitle.textContent = titleValue;
  imagePopup.alt = titleValue;
  togglePopup(fullPhotoPopup);
}


//Add Elements
  
function addElement(titleValue, imageValue) {
    const elementCreate = elementTemplate.cloneNode(true);
    elementCreate.querySelector('.element__container-title').textContent = titleValue;
    elementCreate
      .querySelector('.element__container-like')
      .addEventListener('click', function (event) {
        event.target.classList.toggle('element__container-like_active');
      });
      elementCreate
      .querySelector('.element__trash')
      .addEventListener('click', function (event) {
        event.target.closest('.element').remove();
      });
    const elementImage = elementCreate.querySelector('.element__image');
    elementImage.src = imageValue;
    elementImage.alt = titleValue;
    elementImage.addEventListener('click', () =>
      openPhoto(titleValue, imageValue)
      );
      return elementCreate;
}

initialCards.forEach((item) =>
elements.append(addElement(item.name, item.link))
);

function submitPhotoFormHandler(evt) {
  evt.preventDefault();
  const title = photoTitle.value;
  const link = photoLink.value;
  elements.prepend(addElement(title, link));
  togglePopup(popupPhoto);
}
const formPhotoElement = document.querySelector('.popup__photo-form');
formPhotoElement.addEventListener('submit', submitPhotoFormHandler);






