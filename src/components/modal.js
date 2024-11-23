export function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByEsc);
}

export function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByEsc);
}

export function startPopupProgress(popupElement) {
  const submitButton = popupElement.querySelector(".popup__button");
  const initialText = submitButton.textContent;
  submitButton.textContent = "Сохранение";

  return () => {
    submitButton.textContent = initialText;
  };
}

function closePopupByEsc(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}
