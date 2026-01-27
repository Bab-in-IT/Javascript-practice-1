export const basketToggleFn = () => {
  // Попап корзины с выбранным товаром
  const basketEl = document.querySelector(".basket");
  const basketBtn = document.getElementById("basket-btn");
  basketBtn.addEventListener("click", function () {
    basketEl.classList.toggle("basket--active");
  });

  // Скрытие и добавление блока "Корзина пока пуста" и кнопки "Перейти к оформлению"
  const basketsketEmptyBlock = document.querySelector(".basket__empty-block");
  const basketOrderLink = document.querySelector(".basket__link");

  const target = document.querySelector(".basket__list");
  const observer = new MutationObserver(() => {
    if (document.querySelector(".basket__item")) {
      basketsketEmptyBlock.classList.add("basket__empty-block--disabled");
      basketOrderLink.classList.add("basket__link--active");
    } else {
      basketsketEmptyBlock.classList.remove("basket__empty-block--disabled");
      basketOrderLink.classList.remove("basket__link--active");
    }
  });

  observer.observe(target, { childList: true });
};
