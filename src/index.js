import "./index.css";

import { createCard, deleteCard, likeCard } from "./components/card";

import { initialCards } from "./cards";
import { openPopup, closePopup } from "./components/modal";

const cardsList = document.querySelector(".places__list");

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

const editProfileButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const allPopups = document.querySelectorAll(".popup");

function openImagePopup(card) {
  popupImage.src = card.link;
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

editProfileButton.addEventListener("click", () => {
  editFormNameInput.value = profileTitle.textContent;
  editFormDescriptionInput.value = profileDescription.textContent;
  openPopup(editProfilePopup);
});

addButton.addEventListener("click", () => {
  openPopup(newCardPopup);
});

newCardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  cardsList.prepend(
    createCard(
      { name: newCardNameInput.value, link: newCardLinkInput.value },
      deleteCard,
      likeCard,
      openImagePopup
    )
  );

  newCardForm.reset();
  closePopup(newCardPopup);
});

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  profileTitle.textContent = editFormNameInput.value;
  profileDescription.textContent = editFormDescriptionInput.value;

  closePopup(editProfilePopup);
});

initialCards.forEach((card) =>
  cardsList.append(createCard(card, deleteCard, likeCard, openImagePopup))
);
