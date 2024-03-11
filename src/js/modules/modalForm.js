const ACTIVE_CLASS = "active";
const OPEN_CLASS = "open";

export const initModalForm = () => {
  const allBtn = Array.from(document.querySelectorAll("button"));
  const modalCross = document.querySelector(".modalForm__cross-item");
  const modalForm = document.querySelector(".modalForm");
  const burgerMenu = document.querySelector(".navList__wrap-item");

  modalCross.addEventListener("click", () => {
    modalForm.classList.toggle(ACTIVE_CLASS);
    document.body.classList.remove(OPEN_CLASS);
  });

  allBtn.forEach((item) => {
    if (item.dataset.application) {
      item.addEventListener("click", () => {
        modalForm.classList.toggle(ACTIVE_CLASS);
        burgerMenu.classList.toggle(ACTIVE_CLASS);
        document.body.classList.toggle(OPEN_CLASS);
      });
    }
  });
};
