const getErrorElementSelector = (input) => `[data-input="${input.name}"]`;

const showErrorMessage = (input, form, config) => {
  input.classList.add(config.inputErrorClass);

  const errorElement = form.querySelector(getErrorElementSelector(input));
  errorElement.textContent = input.validationMessage;
};

const hideErrorMessage = (input, form, config) => {
  input.classList.remove(config.inputErrorClass);

  const errorElement = form.querySelector(getErrorElementSelector(input));
  errorElement.textContent = "";
};

const isFormValid = (form, config) => {
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  return inputs.every((input) => input.validity.valid);
};

const validateInput = (input) => {
  if (input.validity.patternMismatch) {
    input.setCustomValidity(input.dataset.errorMessage);
  } else {
    input.setCustomValidity("");
  }

  return input.validity.valid;
};

const updateSubmitButton = (form, config) => {
  const submitButton = form.querySelector(config.submitButtonSelector);
  const isFormInvalid = !isFormValid(form, config);
  submitButton.classList.toggle(config.inactiveButtonClass, isFormInvalid);
  submitButton.disabled = isFormInvalid;
};

const onInput = (event, form, config) => {
  const input = event.currentTarget;

  const isInputValid = validateInput(input);

  if (isInputValid) {
    hideErrorMessage(input, form, config);
  } else {
    showErrorMessage(input, form, config);
  }

  updateSubmitButton(form, config);
};

const addValidationToForm = (form, config) => {
  const inputs = form.querySelectorAll(config.inputSelector);

  for (const input of inputs) {
    input.addEventListener("input", (event) => onInput(event, form, config));
  }
};

export const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);

  for (const form of forms) {
    addValidationToForm(form, config);
  }
};

export const clearValidation = (form, config) => {
  const inputs = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  for (const input of inputs) {
    hideErrorMessage(input, form, config);
    submitButton.classList.remove(config.inactiveButtonClass);
    submitButton.disabled = true;
  }
};
