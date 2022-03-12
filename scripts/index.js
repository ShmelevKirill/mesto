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


//Profile Popup
const openProfile = document.querySelector('.profile__edit');
      closeProfile = document.querySelector('.popup__close');
      popupProfile = document.querySelector('.popup_profile');
      profileName = document.querySelector('.profile__name');
      profileJob = document.querySelector('.profile__status');
      formElement = document.querySelector('.popup__container-form');
      nameInput = document.querySelector('.popup__input_name');
      jobInput = document.querySelector('.popup__input_info');

function togglePopup() {
    popupProfile.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

popupProfile.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    togglePopup();
  }
});

openProfile.addEventListener('click', togglePopup);
closeProfile.addEventListener('click', togglePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup()
}

formElement.addEventListener('submit', formSubmitHandler);


//Add Photo Popup
const popupPhoto = document.querySelector('.popup_photo');
      popupPhotoOpen = document.querySelector('.profile__button');
      popupPhotoClose = popupPhoto.querySelector('.popup__close');
      photoTitle = popupPhoto.querySelector('.popup__input_place');
      photoLink = popupPhoto.querySelector('.popup__input_url');

function togglePopupPhoto() {
    popupPhoto.classList.toggle('popup_opened');
}

popupPhoto.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    togglePopupPhoto();
  }
});

popupPhotoOpen.addEventListener('click', togglePopupPhoto);
popupPhotoClose.addEventListener('click', togglePopupPhoto);


// Full Photo Popup
const fullPhotoPopup = document.querySelector('.popup_image');
      fullPhotoOpen = document.querySelector('.popup__img');
      fullPhotoClose = fullPhotoPopup.querySelector('.popup__close');
      

function toggleFullPhoto() {
    fullPhotoPopup.classList.toggle('popup_opened');
}

fullPhotoPopup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    toggleFullPhoto();
  }
});

fullPhotoOpen.addEventListener('click', toggleFullPhoto);
fullPhotoClose.addEventListener('click', toggleFullPhoto);

function openPhoto(titleValue, imageValue) {
  imagePopup.src = imageValue;
  imagePopupTitle.textContent = titleValue;
  toggleFullPhoto ();
}


//Add Elements
  const elementTemplate = document.querySelector('#element__template').content;
  const elements = document.querySelector('.elements__list');
  const imagePopup = document.querySelector('.popup__img');
  const imagePopupTitle = document.querySelector('.popup__title')
  
  
function addElement(titleValue, imageValue) {
    const createElement = elementTemplate.cloneNode(true);
    createElement.querySelector('.element__container-title').textContent = titleValue;
    createElement
      .querySelector('.element__container-like')
      .addEventListener('click', function (event) {
        event.target.classList.toggle('element__container-like_active');
      });
      createElement
      .querySelector('.element__trash')
      .addEventListener('click', function (event) {
        event.target.closest('.element').remove();
      });
    const elementImage = createElement.querySelector('.element__image');
    elementImage.src = imageValue;
    elementImage.alt = titleValue;
    elementImage.addEventListener('click', () =>
      openPhoto(titleValue, imageValue)
      );
      return createElement;
}

initialCards.forEach((item) =>
elements.append(addElement(item.name, item.link))
);

function formPhotoSubmitHandler(evt) {
  evt.preventDefault();
  const title = photoTitle.value;
  const link = photoLink.value;
  elements.prepend(addElement(title, link));
  togglePopupPhoto();
}
const formPhotoElement = document.querySelector('.popup__photo-form');
formPhotoElement.addEventListener('submit', formPhotoSubmitHandler);






