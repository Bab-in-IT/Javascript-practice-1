//Функция создания li элемента
const getLiEl = (classN) => {
  const liEl = document.createElement("li");
  liEl.classList.add(classN);
  return liEl;
};
//Функция создания div элемента
const getDivEl = (classN) => {
  const divEl = document.createElement("div");
  divEl.classList.add(classN);
  return divEl;
};
//Функция создания span элемента
const getSpanEl = (classN, text) => {
  const spanEl = document.createElement("span");
  spanEl.classList.add(classN);
  spanEl.textContent = text;
  return spanEl;
};
//Функция создания button элемента
const getButtonEl = (classN, type, ariaLabel) => {
  const buttonEl = document.createElement("button");
  buttonEl.classList.add(classN);
  buttonEl.type = type;
  buttonEl.ariaLabel = ariaLabel;
  return buttonEl;
};
//Функция создания h2 элемента
const getH2El = (classN, text) => {
  const h2El = document.createElement("h2");
  h2El.classList.add(classN);
  h2El.textContent = text;
  return h2El;
};
//Функция создания img элемента
const getImgEl = (scr, width, height, alt) => {
  const imgEl = document.createElement("img");

  imgEl.src = scr;
  imgEl.width = width;
  imgEl.height = height;
  imgEl.alt = alt;
  return imgEl;
};
//Функция создания ссылки
const getLinkEl = (classN, href, ariaLabel) => {
  const linkEl = document.createElement("a");
  linkEl.classList.add(classN);
  linkEl.href = href;
  linkEl.ariaLabel = ariaLabel;
  return linkEl;
};
//Функция создания иконки (svg и use)
const getIconEl = (xlink, width, height) => {
  const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgEl.style.width = width;
  svgEl.style.height = height;
  svgEl.ariaHidden = "true";

  const useEl = document.createElementNS("http://www.w3.org/2000/svg", "use");

  useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", xlink);

  svgEl.appendChild(useEl);
  return svgEl;
};
//Функция создания ul элемента
const getUlEl = (classN) => {
  const ulEl = document.createElement("ul");
  ulEl.classList.add(classN);
  return ulEl;
};

export { getSpanEl, getDivEl, getButtonEl, getH2El, getLiEl, getImgEl, getLinkEl, getIconEl, getUlEl };
