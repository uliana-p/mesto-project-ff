export function openPopup(element) {
  element.classList.add("popup_is-opened");
}
export function closePopup(element) {
  element.classList.remove("popup_is-opened");
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
});
