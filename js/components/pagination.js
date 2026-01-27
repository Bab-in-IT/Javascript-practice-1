import { getButtonEl, getLiEl } from "./getElements.js";

// Основная функция запуска отображение всех карточек с товаром
export const pagination = (Arr) => {
  const cardCount = 6;
  const currentPage = 1;

  const catalogList = document.querySelector(".catalog__list");

  renderCards(Arr, catalogList, cardCount, currentPage);
  renderPagination(Arr, cardCount);
  ubdatePagination(Arr, catalogList, cardCount);
};

// Функция отображение всех карточек с товаром
const renderCards = (arr, container, numberOfCards, page) => {
  container.innerHTML = "";

  const ferstCardsInd = numberOfCards * page - numberOfCards;

  const lastCardsInd = ferstCardsInd + numberOfCards;

  const cardsOnPage = arr.slice(ferstCardsInd, lastCardsInd);

  cardsOnPage.forEach((element) => {
    container.append(element.getElement());
  });
};

// Функция пагинатора, страницы товара
const renderPagination = (arr, numberOfCards) => {
  const pagesCoount = Math.ceil(arr.length / numberOfCards);

  const catalogPagination = document.querySelector(".catalog__pagination");
  catalogPagination.innerHTML = "";

  for (let i = 1; i <= pagesCoount; i++) {
    if (pagesCoount === 1) {
      return;
    } else {
      const liEl = renderPaginationItem(i);
      catalogPagination.append(liEl);
      catalogPagination.classList.remove("visually-hidden");
    }
  }
};

// Рабочая функция по созданию эелементов пагинатора
const renderPaginationItem = (page) => {
  const liEl = getLiEl("catalog__pagination-item");
  const btnEl = getButtonEl("catalog__pagination-link", "button", "Кнопка переключения стриницы товаров");
  btnEl.textContent = page;

  liEl.append(btnEl);
  return liEl;
};

// Функция переключения на другую страницу товаров
const ubdatePagination = (arr, container, cardCount) => {
  const paginationLink = [...document.querySelectorAll(".catalog__pagination-link")];

  paginationLink.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentPage = e.target.textContent;
      renderCards(arr, container, cardCount, currentPage);
    });
  });
};

// ТОЖЕ РАБОЧАЯ ФУНКЦИЯ
// const ubdatePagination = (arr, container, cardCount) => {
//   const catalogPagination = document.querySelector(".catalog__pagination");
//   catalogPagination.addEventListener("click", (e) => {
//     if (!e.target.closest(".catalog__pagination-link")) {
//       return;
//     } else {
//       const currentPage = e.target.textContent;

//       renderCards(arr, container, cardCount, currentPage);
//     }
//   });
// };
