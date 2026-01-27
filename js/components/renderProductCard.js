// Функция отображение всех карточек с товаром
export const renderProductCard = (Arr, list) => {
  const catalogList = document.querySelector(list);
  catalogList.innerHTML = "";
  Arr.forEach((element) => {
    catalogList.append(element.getElement());
  });
};
