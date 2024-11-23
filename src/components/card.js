import {
  userId,
  deleteCard as apiDeleteCard,
  addLike,
  deleteLike,
} from "./api";

const isCardLikedByUser = (card) =>
  card.likes?.some((like) => like._id === userId);

export function createCard(card, onDeleteClick, onLikeClick, onImageClick) {
  const cardTemplate = document.querySelector("#card-template").content;
  const contentTemplate = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const image = contentTemplate.querySelector(".card__image");
  image.src = card.link;
  image.alt = card.name;
  image.addEventListener("click", () => {
    onImageClick(card);
  });

  contentTemplate.querySelector(".card__likes-counter").textContent =
    card.likes?.length ?? 0;

  contentTemplate.querySelector(".card__title").textContent = card.name;
  const deleteButton = contentTemplate.querySelector(".card__delete-button");

  if (card.owner._id !== userId) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener("click", () => {
      onDeleteClick(contentTemplate, card);
    });
  }

  const likeButton = contentTemplate.querySelector(".card__like-button");
  likeButton.classList.toggle(
    "card__like-button_is-active",
    isCardLikedByUser(card),
  );
  likeButton.addEventListener("click", () => {
    onLikeClick(contentTemplate, likeButton, card);
  });

  return contentTemplate;
}

export function deleteCard(contentTemplate, card) {
  apiDeleteCard(card._id)
    .then(() => {
      contentTemplate.remove();
    })
    .catch(console.error);
}

export async function likeCard(contentTemplate, likeButton, card) {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  try {
    let updatedCard;
    if (isLiked) {
      updatedCard = await deleteLike(card._id);
      likeButton.classList.remove("card__like-button_is-active");
    } else {
      updatedCard = await addLike(card._id);
      likeButton.classList.add("card__like-button_is-active");
    }

    contentTemplate.querySelector(".card__likes-counter").textContent =
      updatedCard.likes?.length ?? 0;
  } catch (err) {
    console.error(err);
  }
}
