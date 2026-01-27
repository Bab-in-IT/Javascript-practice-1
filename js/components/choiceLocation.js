// Функция PopUp локации
export default function choiceLocation() {
  const location = document.querySelector(".location__city-name");
  const locationBtn = document.querySelector(".location__city");

  locationBtn.addEventListener("click", function () {
    this.classList.toggle("location__city--active");
  });

  const locationArr = Array.from(document.querySelectorAll(".location__sublink"));

  locationArr.forEach((city) => {
    city.addEventListener("click", function () {
      location.textContent = this.textContent;
      locationBtn.classList.remove("location__city--active");
    });
  });

  document.addEventListener("click", (e) => {
    const withinBoundaries = e.composedPath().includes(locationBtn);

    if (!withinBoundaries) {
      locationBtn.classList.remove("location__city--active");
    }
  });
}
