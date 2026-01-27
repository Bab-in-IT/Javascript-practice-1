import { getSpanEl, getDivEl, getButtonEl, getIconEl } from "./getElements.js";

export const submittingFormFn = () => {
  const formSubmit = document.querySelector(".questions__form");

  // Отправка формы на сервер
  const submittingForm = async () => {
    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          email: "babinas@icloud.com",
        },

        body: new FormData(formSubmit),
      });
      if (response.ok) {
        modalWindow();
      }
    } catch (error) {
      modalWindow(error);
      console.error(error);
    }
  };

  // Отображение модального окна
  const modalWindow = (error) => {
    const questionsBlock = document.querySelector(".questions");

    const overlay = getDivEl("modal-window");
    const modalContent = getDivEl("modal-window__content");
    const modalText = getSpanEl("modal-window__content-text");
    if (error) {
      modalText.textContent = "Не удалось отправить обращение";
    } else {
      modalText.textContent = "Благодарим за обращение!";
    }

    const closeModalBtn = getButtonEl("modal-window__btn", "button", "Кнопка закрыть окно");
    closeModalBtn.addEventListener("click", function () {
      overlay.remove();
    });
    const closeModalIcon = getIconEl("images/sprite.svg#icon-close", "30", "30");
    closeModalBtn.append(closeModalIcon);

    modalContent.append(modalText, closeModalBtn);
    overlay.append(modalContent);
    questionsBlock.append(overlay);
  };

  // Слушатель на кнопку
  formSubmit.addEventListener("submit", function (e) {
    e.preventDefault();
    submittingForm();
    formSubmit.reset();
  });
};
