import "./index.css";

import { createCard, deleteCard, likeCard } from "./components/card";

import { openPopup, closePopup, startPopupProgress } from "./components/modal";
import { clearValidation, enableValidation } from "./components/validation";
import {
  addCard,
  getCards,
  getMe,
  updateAvatar,
  updateProfile,
} from "./components/api";

let userId;

const cardsList = document.querySelector(".places__list");

const avatarImage = document.querySelector(".profile__image");

const updateAvatarPopup = document.querySelector(".popup_type_update-avatar");
const updateAvatarForm = document.forms.update_avatar;
const avatarFormUrlInput = updateAvatarForm.querySelector(
  ".popup__input_type_url"
);

const editProfileForm = document.forms.edit_profile;
const editFormNameInput = editProfileForm.elements.name;
const editFormDescriptionInput = editProfileForm.elements.description;

const newCardForm = document.forms["new-place"];
const newCardNameInput = newCardForm.elements["place-name"];
const newCardLinkInput = newCardForm.elements.link;

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const editProfilePopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const cardImagePopup = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

const editProfileButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const allPopups = document.querySelectorAll(".popup");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function openImagePopup(card) {
  popupImage.src = card.link;
  popupCaption.textContent = card.name;
  openPopup(cardImagePopup);
}

allPopups.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close");
  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });

  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});

avatarImage.addEventListener("click", () => {
  avatarFormUrlInput.value = "";
  clearValidation(updateAvatarForm, validationConfig);
  openPopup(updateAvatarPopup);
});

updateAvatarForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const stop = startPopupProgress(updateAvatarPopup);
  updateAvatar(avatarFormUrlInput.value)
    .then((res) => {
      avatarImage.style = `background-image: url("${res.avatar}")`;
      closePopup(updateAvatarPopup);
    })
    .catch(console.error)
    .finally(stop);
});

editProfileButton.addEventListener("click", () => {
  editFormNameInput.value = profileTitle.textContent;
  editFormDescriptionInput.value = profileDescription.textContent;
  clearValidation(editProfileForm, validationConfig);
  openPopup(editProfilePopup);
});

addButton.addEventListener("click", () => {
  newCardNameInput.value = "";
  newCardLinkInput.value = "";
  clearValidation(newCardForm, validationConfig);
  openPopup(newCardPopup);
});

newCardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const newCard = {
    name: newCardNameInput.value,
    link: newCardLinkInput.value,
  };

  const stop = startPopupProgress(newCardPopup);

  addCard(newCard)
    .then((createdCard) => {
      cardsList.prepend(
        createCard(createdCard, deleteCard, likeCard, openImagePopup, userId)
      );
      newCardForm.reset();
      closePopup(newCardPopup);
    })
    .catch(console.error)
    .finally(stop);
});

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const stop = startPopupProgress(editProfilePopup);

  updateProfile({
    name: editFormNameInput.value,
    about: editFormDescriptionInput.value,
  })
    .then(() => {
      profileTitle.textContent = editFormNameInput.value;
      profileDescription.textContent = editFormDescriptionInput.value;
      closePopup(editProfilePopup);
    })
    .catch(console.error)
    .finally(stop);
});

enableValidation(validationConfig);

Promise.all([getCards(), getMe()]).then(([cards, me]) => {
  userId = me._id;

  profileTitle.textContent = me.name;
  profileDescription.textContent = me.about;
  avatarImage.style = `background-image: url("${me.avatar}")`;

  for (const card of cards) {
    cardsList.append(
      createCard(card, deleteCard, likeCard, openImagePopup, userId)
    );
  }
});
