export const tippyActiveFn = () => {
  // Всплывающие подсказки с использованием mouseover и mouseout
  const arr = [...document.querySelectorAll(".tooltip__btn")];

  arr.forEach((elem) => {
    elem.addEventListener("mouseover", function () {
      elem.nextElementSibling.style.display = "block";
    });
    elem.addEventListener("mouseout", function () {
      elem.nextElementSibling.style.display = "none";
    });
  });
  //___________________________________________________________________
  // Всплывающие подсказки с использованием библиотеки Tippy.js

  // tippy(".tooltip__btn", {
  //   theme: "lightwhite",
  //   arrow: false,
  //   content(buttonEl) {
  //     const id = buttonEl.dataset.tippy;
  //     const content = document.getElementById(id);
  //     return content.innerHTML;
  //   },
  //   allowHTML: true,
  // });
};
