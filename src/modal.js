export function openPopup(element) {
  element.classList.add("popup_is-opened");
  window.addEventListener("keydown", handleEscapeKey);
}
export function closePopup(element) {
  element.classList.remove("popup_is-opened");
  window.removeEventListener("keydown", handleEscapeKey);
}

function handleEscapeKey(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

export const addCloseEventListeners = (popup) => {
  const closeButton = popup.querySelector(".popup__close");

  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });

  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
};
