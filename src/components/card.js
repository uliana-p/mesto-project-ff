import { createPopup } from "./modal";

export function createCard(card, onDeleteClick, onLikeClick) {
  const cardTemplate = document.querySelector("#card-template").content;
  const contentTemplate = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const image = contentTemplate.querySelector(".card__image");
  image.src = card.link;
  image.alt = card.name;
  contentTemplate.querySelector(".card__title").textContent = card.name;
  contentTemplate
    .querySelector(".card__delete-button")
    .addEventListener("click", function () {
      onDeleteClick(contentTemplate);
    });

  const likeButton = contentTemplate.querySelector(".card__like-button");

  likeButton.addEventListener("click", function () {
    onLikeClick(contentTemplate);
  });

  createPopup({
    trigger: image,
    popupSelector: ".popup_type_image",
    beforeOpen: (trigger, popup) => {
      popup.querySelector(".popup__image").src = trigger.src;
    },
  });

  return contentTemplate;
}

export function deleteCard(contentTemplate) {
  contentTemplate.remove();
}

export function likeCard(contentTemplate) {
  contentTemplate
    .querySelector(".card__like-button")
    .classList.toggle("card__like-button_is-active");
}
