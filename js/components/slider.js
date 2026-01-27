import fetchData from "./fetchData.js";
import SliderProductCard from "./SliderProductCard.js";

// Функция массива карточек товара основанного на классе
const getNewSliderCard = async () => {
  let array = await fetchData();
  const newSliderCardsArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const newSliderCard = new SliderProductCard(
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
    newSliderCardsArr.push(newSliderCard);
  }

  return newSliderCardsArr.filter((card) => card.goodsOfDay === true);
};

// Функция инициализации слайдера с помощью библиотеки Swiper.js.
const initializationSwiper = () => {
  const swiper = new window.Swiper(".swiper", {
    // Настройки слайдера
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,

    // Настройки пагинации
    pagination: {
      el: ".swiper-pagination",
    },

    // Настройка кнопок навигации
    navigation: {
      nextEl: ".day-products__navigation-btn--next",
      prevEl: ".day-products__navigation-btn--prev",
    },

    // Скроллбар
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  return swiper;
};

export { getNewSliderCard, initializationSwiper };
