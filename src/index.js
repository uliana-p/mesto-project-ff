import "./index.css";

import { createCard, deleteCard, likeCard } from "./components/card";

import { initialCards } from "./cards";
import { createPopup } from "./components/modal";

const cardList = document.querySelector(".places__list");

const editProfileForm = document.forms.edit_profile;
const newCardForm = document.forms["new-place"];

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const popups = [
  {
    triggerSelector: ".profile__edit-button",
    popupSelector: ".popup_type_edit",
    setup: (options) => {
      const { closePopup } = options;

      const name = editProfileForm.elements.name;
      const description = editProfileForm.elements.description;

      name.value = profileTitle.textContent;
      description.value = profileDescription.textContent;

      editProfileForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        profileTitle.textContent = name.value;
        profileDescription.textContent = description.value;
        closePopup();
      });
    },
  },

  {
    triggerSelector: ".profile__add-button",
    popupSelector: ".popup_type_new-card",
    beforeClose: () => {
      newCardForm.reset();
    },
    setup: (options) => {
      const { closePopup } = options;

      newCardForm.addEventListener("submit", function (evt) {
        evt.preventDefault();

        const name = newCardForm.elements["place-name"].value;
        const link = newCardForm.elements.link.value;

        cardList.prepend(createCard({ name, link }, deleteCard, likeCard));

        newCardForm.reset();
        closePopup();
      });
    },
  },
];

initialCards.forEach((card) =>
  cardList.append(createCard(card, deleteCard, likeCard))
);

popups.forEach(createPopup);
