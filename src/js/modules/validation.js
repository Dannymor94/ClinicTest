const ERROR_CLASS = "error";

const isNotEmpty = (str) => str !== "";
const validateEmail = (email) => {
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegExp.test(String(email).toLowerCase());
};

const validate = (validator, element, className) => {
  if (validator) {
    element.classList.remove(className);
    return true;
  }

  element.classList.add(className);
  return false;
};

export const initValidation = () => {
  const form = document.getElementById("form");
  const formInputs = Array.from(document.querySelectorAll(".js-input"));
  const inputEmail = document.querySelector(".js-input-email");
  const inputCheckbox = document.querySelector(".js-input-checkbox");

  form.addEventListener("submit", () => {
    const emailVal = inputEmail.value;

    const inputsAreFilled = formInputs.reduce((result, input) => {
      return result && validate(isNotEmpty(input.value), input, ERROR_CLASS);
    }, true);

    if (!inputsAreFilled) {
      return false;
    }

    const allAreValid =
      validate(validateEmail(emailVal), inputEmail, ERROR_CLASS) &&
      validate(inputCheckbox.checked, inputCheckbox, ERROR_CLASS);

    if (!allAreValid) {
      return false;
    }
  });
};
