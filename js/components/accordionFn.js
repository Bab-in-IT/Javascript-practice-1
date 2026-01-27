export const accordionFn = () => {
  const allAccordionBtn = [...document.querySelectorAll(".accordion__btn")];

  for (let i = 0; i < allAccordionBtn.length; i++) {
    allAccordionBtn[i].addEventListener("click", function (e) {
      e.preventDefault();
      let setClasses = !this.classList.contains("accordion__btn--active");

      allAccordionBtn.forEach((element) => {
        element.classList.remove("accordion__btn--active");
      });

      if (setClasses) {
        this.classList.toggle("accordion__btn--active");
      }
    });
  }
};
