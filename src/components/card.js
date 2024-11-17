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

  contentTemplate.querySelector(".card__title").textContent = card.name;
  contentTemplate
    .querySelector(".card__delete-button")
    .addEventListener("click", () => {
      onDeleteClick(contentTemplate);
    });

  const likeButton = contentTemplate.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    onLikeClick(likeButton);
  });

  return contentTemplate;
}

export function deleteCard(contentTemplate) {
  contentTemplate.remove();
}

export function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}
