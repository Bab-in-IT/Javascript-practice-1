import burgerMenuFn from "./components/burgerMenuFn.js";
import choiceLocation from "./components/choiceLocation.js";
import { getNewProductCards } from "./components/getNewProductCards.js";
import { renderProductCard } from "./components/renderProductCard.js";
import { counterProductType } from "./components/counterProductType.js";
import { availabilityFilter } from "./components/availabilityFilter.js";
import { filterOfType } from "./components/filterOfType.js";
import { sortSelectFn } from "./components/sortSelectFn.js";
import { basketToggleFn } from "./components/basketToggleFn.js";
import { basketCounterFn } from "./components/basketCounterFn.js";
import { accordionFn } from "./components/accordionFn.js";
import { getNewSliderCard, initializationSwiper } from "./components/slider.js";
import { justValidate } from "./components/justValidate.js";
import { submittingFormFn } from "./components/submittingFormFn.js";
import { tippyActiveFn } from "./components/tippyActiveFn.js";
import { pagination } from "./components/pagination.js";

// Запуск
window.addEventListener("DOMContentLoaded", async () => {
  burgerMenuFn(); // Открытие/закрытие бургерного меню каталога сайта.

  choiceLocation(); //Открытие/закрытие выпадающего меню для выбора города

  pagination(await getNewProductCards()); //Отображение всех карточек с товаром с пагинацией

  counterProductType(); //Отображение количества товаров в соответствующей категории

  availabilityFilter(); //Фильтрация товара по наличию

  filterOfType(); //Фильтрация товара по типу

  sortSelectFn(); //Сортировка товара по типу

  basketToggleFn(); //Отображение корзины в шапке сайта

  basketCounterFn(); //Обновление счётчика товаров в корзине

  accordionFn(); //Функция аккордеона

  renderProductCard(await getNewSliderCard(), ".swiper-wrapper"); //Отображение товаров в блоке "Товар дня"
  initializationSwiper(); // Инициализации слайдера

  justValidate(); // Функция валидации формы

  submittingFormFn(); // Отправка формы на сервер

  tippyActiveFn(); // Всплывающие подсказки с использованием библиотеки Tippy.js
});
