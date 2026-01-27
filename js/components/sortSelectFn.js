import { getNewProductCards } from "./getNewProductCards.js";
import { pagination } from "./pagination.js";

export const sortSelectFn = () => {
  const sortSelect = document.querySelector(".catalog__sort-select");

  sortSelect.addEventListener("click", function () {
    ratingSortFn(this.value);
  });
};

const ratingSortFn = async (typeSort) => {
  const cardsArr = await getNewProductCards();
  if (typeSort == "rating-max") {
    cardsArr.sort((a, b) => {
      return b.rating - a.rating;
    });
    pagination(cardsArr);
  }
  if (typeSort == "price-max") {
    cardsArr.sort((a, b) => {
      return b.newPrice - a.newPrice;
    });
    pagination(cardsArr);
  }
  if (typeSort == "price-min") {
    cardsArr.sort((a, b) => {
      return a.newPrice - b.newPrice;
    });
    pagination(cardsArr);
  }
};
