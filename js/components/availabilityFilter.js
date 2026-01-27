import { getNewProductCards } from "./getNewProductCards.js";
import { pagination } from "./pagination.js";

//Функция отображения товара по наличию
const renderingInstock = (arr) => {
  const instockProductCardsArr = [];
  arr.forEach((productCard) => {
    const values = Object.values(productCard.availability);
    const sum = values.reduce((accum, value) => {
      return accum + value;
    }, 0);
    if (sum > 0) {
      instockProductCardsArr.push(productCard);
    }
  });

  pagination(instockProductCardsArr);
};

//Функция отображения всего товара илипо наличию
export const availabilityFilter = async () => {
  const newProductCardsArr = await getNewProductCards();
  const statusCheckbox = Array.from(document.querySelectorAll('[name="status"]'));
  statusCheckbox.forEach((status) => {
    status.addEventListener("click", function (e) {
      if (status.checked) {
        if (status.value == "instock") {
          renderingInstock(newProductCardsArr);
        }
        if (status.value == "all-item") {
          pagination(newProductCardsArr);
        }
      }
    });
  });
};
