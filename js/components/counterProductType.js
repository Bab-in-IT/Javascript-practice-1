import { getNewProductCards } from "./getNewProductCards.js";

//Функция поиска типа товара в карточках товара
const getTypeProductCard = async (checkboxType) => {
  const newProductCardsArr = await getNewProductCards();
  let count = 0;
  for (let i = 0; i < newProductCardsArr.length; i++) {
    const productCard = newProductCardsArr[i];
    if (productCard.type.includes(checkboxType) == true) {
      count++;
    }
  }
  return count;
};
//Функция поиска индекса custom-checkbox__count
const countCheckbox = (index) => {
  const checkboxCountArr = Array.from(document.querySelectorAll(".custom-checkbox__count"));
  for (const key in checkboxCountArr) {
    if (key == index) {
      const checkboxCount = checkboxCountArr[key];
      return checkboxCount;
    }
  }
};

//Отображение количества товаров в соответствующей категории
export const counterProductType = async () => {
  const typeCheckboxArr = Array.from(document.querySelectorAll('[name="type"]'));
  for (let i = 0; i < typeCheckboxArr.length; i++) {
    const type = typeCheckboxArr[i];
    const countOfType = await getTypeProductCard(type.value);
    const indexCount = countCheckbox(i);
    if (countOfType > 0) {
      indexCount.textContent = countOfType;
    } else {
      indexCount.textContent = 0;
    }
  }
};
