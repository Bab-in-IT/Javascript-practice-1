import { getNewProductCards } from "./getNewProductCards.js";
import { pagination } from "./pagination.js";

//Функция фильтрации всех карточке по выбранным чекбоксам
const getTypeArr = async (checkboxType) => {
  const newProductCardsArr = await getNewProductCards();
  let resultArr = [];
  if (!checkboxType || !checkboxType.length) {
    pagination(newProductCardsArr);
  } else {
    newProductCardsArr.forEach((productCard) => {
      productCard.type.filter((type) => {
        if (checkboxType.includes(type) == true) {
          resultArr.push(productCard);
        }
      });
    });
    const filtredCards = resultArr.filter((obj, idx, arr) => idx === arr.findIndex((t) => t.id === obj.id));
    pagination(filtredCards);
  }
};

//Функция получения масива чекбоксов соо значением и слушатель на клик чекокса
export const filterOfType = () => {
  const checkboxTypeArr = Array.from(document.querySelectorAll('[name="type"]'));

  checkboxTypeArr.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      let selectedTypes = checkboxTypeArr.filter((checkbox) => checkbox.checked).map((item) => item.value);
      getTypeArr(selectedTypes);
    });
  });
};
