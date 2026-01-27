import fetchData from "./fetchData.js";
import ProductCard from "./ProductCard.js";

// Функция создания массива объектов товара основанного на классе
export const getNewProductCards = async () => {
  let array = await fetchData();
  const newProductCardsArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const newProductCard = new ProductCard(
      element.id,
      element.name,
      element.price.new,
      element.price.old,
      element.image,
      element.availability,
      element.type,
      element.rating,
      element.goodsOfDay
    );
    newProductCardsArr.push(newProductCard);
  }

  return newProductCardsArr;
};
