import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { addCard, deleteCard, likeButton } from "./card.js";
import { openPopup, closePopup, addCloseEventListeners } from "./modal.js";
const cardTemplate = document.querySelector("#card-template").content;
const cardElement = cardTemplate.querySelector(".places__item");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupClose = document.querySelectorAll(".popup__close");
const popups = document.querySelectorAll(".popup");
const popupImage = document.querySelector(".popup_type_image");
const imageInPopup = popupImage.querySelector(".popup__image");
const captionInPopup = popupImage.querySelector(".popup__caption");
const formElementEdit = document.querySelector('form[name="edit-profile"]');
const nameInput = formElementEdit.querySelector(".popup__input_type_name");
const jobInput = formElementEdit.querySelector(
  ".popup__input_type_description"
);
const nameDisplay = document.querySelector(".profile__title");
const jobDisplay = document.querySelector(".profile__description");
const formElementPlace = document.querySelector('form[name="new-place"]');
const nameCard = formElementPlace.querySelector(".popup__input_type_card-name");
const urlCard = formElementPlace.querySelector(".popup__input_type_url");
initialCards.forEach((item) =>
  document
    .querySelector(".places__list")
    .append(addCard(item, deleteCard, handlerImageClick, likeButton))
);
popups.forEach((popup) => addCloseEventListeners(popup));
popupClose.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

editButton.addEventListener("click", (e) => {
  e.stopPropagation();
  nameInput.value = nameDisplay.textContent;
  jobInput.value = jobDisplay.textContent;
  openPopup(popupEdit);
});
addButton.addEventListener("click", (e) => {
  e.stopPropagation();
  openPopup(popupNewCard);
});

function handlerImageClick(card) {
  imageInPopup.src = card.link;
  imageInPopup.alt = card.name;
  captionInPopup.textContent = card.name;
  openPopup(popupTypeImage);
}
function handleFormTitleSubmit(evt) {
  evt.preventDefault();
  nameDisplay.textContent = nameInput.value;
  jobDisplay.textContent = jobInput.value;
  // formElementEdit.reset();

  closePopup(popupEdit);
}
formElementEdit.addEventListener("submit", handleFormTitleSubmit);

formElementPlace.addEventListener("submit", handleFormCardSubmit);

function handleFormCardSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    name: nameCard.value,
    link: urlCard.value,
  };
  const placesList = document.querySelector(".places__list");
  placesList.prepend(
    addCard(newCard, deleteCard, handlerImageClick, likeButton)
  );
  formElementPlace.reset();
  closePopup(popupNewCard);
}
