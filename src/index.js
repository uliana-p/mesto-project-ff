import "./index.css";
function createCard(card, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const contentTemplate = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  contentTemplate.querySelector(".card__image").src = card.link;
  contentTemplate.querySelector(".card__image").alt = card.name;
  contentTemplate.querySelector(".card__title").textContent = card.name;
  contentTemplate
    .querySelector(".card__delete-button")
    .addEventListener("click", function () {
      deleteCard(contentTemplate);
    });
  return contentTemplate;
}

function deleteCard(contentTemplate) {
  contentTemplate.remove();
}
import { initialCards } from "./cards";
const cardAdd = document.querySelector(".places__list");
for (let i = 0; i < initialCards.length; i++) {
  cardAdd.append(createCard(initialCards[i], deleteCard));
}

// // ПОПАПЫ все

const popup = [
  {
    trigger: ".profile__edit-button",
    popup: ".popup_type_edit",
    setup: (options) => {
      const { closePopup } = options;

      // jотправка данных формы
      const editProfile = document.forms.edit_profile;

      // достали форму
      const name = editProfile.elements.name;

      const description = editProfile.elements.description;

      // что менянется или куда сохранять достаем
      const nameTitle = document.querySelector(".profile__title");

      const descriptionTitle = document.querySelector(".profile__description");

      editProfile.addEventListener("submit", function (evt) {
        evt.preventDefault();
        nameTitle.textContent = name.value;
        descriptionTitle.textContent = description.value;
        closePopup();
      });
      name.value = nameTitle.textContent;
      description.value = descriptionTitle.textContent;
    },
  },

  { trigger: ".profile__add-button", popup: ".popup_type_new-card" },

  { trigger: ".card__image", popup: ".popup_type_image" },
];

function createPopup(trigger, popup, setup) {
  const triggerElem = document.querySelector(trigger);
  const popupElem = document.querySelector(popup);
  function openPopup() {
    popupElem.style.display = "flex";
    document.addEventListener("keydown", handleEscKey);
  }
  triggerElem.addEventListener("click", function (event) {
    openPopup();
  });
  const popupClose = popupElem.querySelectorAll(".popup__close");
  function closePopup() {
    popupElem.style.display = "none";
    document.removeEventListener("keydown", handleEscKey);
  }
  popupElem.addEventListener("click", function (event) {
    if (event.target === popupElem) {
      closePopup();
    }
  });
  popupClose.forEach(function (button) {
    button.addEventListener("click", function (event) {
      closePopup();
    });
  });
  function handleEscKey(event) {
    if (event.key === "Escape") {
      closePopup();
    }
  }

  if (setup) {
    const options = { openPopup, closePopup };
    setup(options);
  }
}

popup.forEach(({ trigger, popup, setup }) => {
  createPopup(trigger, popup, setup);
});
