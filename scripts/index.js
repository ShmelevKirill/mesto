const openProfile = document.querySelector('.profile__info_edit');
const closeProfile = document.querySelector('.popup_close');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__info_name');
const profileJob = document.querySelector('.profile__info_status');
const formElement = document.querySelector('.popup__container_form');
const nameInput = document.querySelector('.popup__form_input-name');
const jobInput = document.querySelector('.popup__form_input-info');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

openProfile.addEventListener ('click', openPopup);
closeProfile.addEventListener ('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);