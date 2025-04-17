export function addCard(
  card,
  deleteCardClick,
  handlerImageClick,
  handlerLikeClick
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardClick);
  cardImage.addEventListener("click", () => handlerImageClick(card));
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", handlerLikeClick);
  return cardElement;
}

export const deleteCard = (event) => {
  event.target.parentElement.remove();
};
export const likeButton = (event) => {
  event.target.classList.toggle("card__like-button_is-active");
};
