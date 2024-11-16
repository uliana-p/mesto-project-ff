export function createPopup({
  trigger,
  triggerSelector,
  beforeClose,
  popupSelector,
  setup,
  beforeOpen,
}) {
  debugger;
  const triggerElements = trigger
    ? [trigger]
    : [...document.querySelectorAll(triggerSelector)];
  const popupElem = document.querySelector(popupSelector);

  triggerElements.forEach((trigger) =>
    trigger.addEventListener("click", function (event) {
      if (beforeOpen) {
        beforeOpen(trigger, popupElem);
      }

      openPopup(popupElem);
    })
  );

  const popupClose = popupElem.querySelector(".popup__close");

  popupElem.addEventListener("click", function (event) {
    if (event.target === popupElem) {
      closePopup(popupElem);
    }
  });

  popupClose.addEventListener("click", function (event) {
    if (beforeClose) {
      beforeClose();
    }
    closePopup(popupElem);
  });

  function handleEscKey(event) {
    if (event.key === "Escape") {
      if (beforeClose) {
        beforeClose();
      }
      closePopup(popupElem);
    }
  }

  document.addEventListener("keydown", handleEscKey);

  if (setup) {
    setup({
      openPopup: () => openPopup(popupElem),
      closePopup: () => closePopup(popupElem),
    });
  }
}

function closePopup(popupElem) {
  popupElem.classList.remove("popup_is-opened");
  popupElem.classList.add("popup_is-closed");
}

function openPopup(popupElem) {
  popupElem.classList.add("popup_is-opened");
  popupElem.classList.remove("popup_is-closed");
}
