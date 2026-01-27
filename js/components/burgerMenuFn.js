// Функция отображения бургерного меню
export default function burgerMenuFn() {
  const getBurgerCatalog = document.querySelector(".main-menu");

  const getBurgerBtn = document.querySelector(".header__catalog-btn");
  getBurgerBtn.addEventListener("click", function () {
    if (getBurgerCatalog.classList.contains("main-menu") == true) {
      getBurgerCatalog.classList.add("main-menu--active");
    }
  });

  const closeBurgerBtn = document.querySelector(".main-menu__close");

  closeBurgerBtn.addEventListener("click", function () {
    if (getBurgerCatalog.classList.contains("main-menu--active") == true) {
      getBurgerCatalog.classList.remove("main-menu--active");
    }
  });
}
