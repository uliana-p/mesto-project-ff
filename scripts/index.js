const cardTemplate = document.querySelector("#card-template").content;
function addCard(card, deleteCardClick) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardClick);

  return cardElement;
}
const deleteCard = (event) => {
  event.target.parentElement.remove();
};

initialCards.forEach((item) =>
  document.querySelector(".places__list").append(addCard(item, deleteCard))
);
