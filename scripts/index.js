function createCard(card, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const contentTemplate = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  contentTemplate.querySelector(".card__image").src = card.link;
  contentTemplate.querySelector(".card__title").textContent = card.name;
  contentTemplate
    .querySelector(".card__delete-button")
    .addEventListener("click", function () {
      contentTemplate.remove();

      deleteCard(contentTemplate);
    });
  return contentTemplate;
}

function deleteCard(contentTemplate) {
  contentTemplate.remove();
}

const cardAdd = document.querySelector(".places__list");
for (let i = 0; i < initialCards.length; i++) {
  cardAdd.append(createCard(initialCards[i], deleteCard));
}
