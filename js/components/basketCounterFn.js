export const basketCounterFn = () => {
  const counter = document.querySelector(".header__user-count");

  document.addEventListener("click", function () {
    const selectedProducts = Array.from(document.querySelectorAll(".basket__counter"));
    let result = 0;

    for (let i = 0; i < selectedProducts.length; i++) {
      result += +selectedProducts[i].textContent;
    }
    counter.textContent = result;
  });
};
