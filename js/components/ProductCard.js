import {
  getSpanEl,
  getDivEl,
  getButtonEl,
  getH2El,
  getLiEl,
  getImgEl,
  getLinkEl,
  getIconEl,
  getUlEl,
} from "./getElements.js";

export default class ProductCard {
  _availabilityMosc = 0;
  _availabilityOren = 0;
  _availabilitySaint = 0;
  _addCount = 0;
  _priceCount = 0;

  constructor(id, name, newPrice, oldPrice, img, availability, type, rating, goodsOfDay) {
    this.id = id;
    this.name = name;
    this.newPrice = newPrice;
    this.oldPrice = oldPrice;
    this.img = img;
    this.availability = availability;
    this.type = type;
    this.rating = rating;
    this.goodsOfDay = goodsOfDay;
  }

  // Функция отображения карточки
  getElement() {
    this.catalogItem = getLiEl("catalog__item");
    this.productCard = getDivEl("product-card");

    this.productCardVisual = getDivEl("product-card__visual");
    this.imgEl = getImgEl(this.img, "290", "436", "Изображение товара");
    this.imgEl.classList.add("product-card__img");

    this.productCardMore = getDivEl("product-card__more");

    this.basketLink = this.getBasketLinkBtn();

    this.detailsLink = this.getdetailsLinkBtn();

    this.productCardMore.append(this.basketLink, this.detailsLink);
    this.productCardVisual.append(this.imgEl, this.productCardMore);

    this.productCardInfo = getDivEl("product-card__info");

    this.productCardTitle = getH2El("product-card__title", this.name);

    this.productCardOld = getSpanEl("product-card__old");
    this.productCardOldNumber = getSpanEl("product-card__old-number", this.oldPrice);
    this.productCardOldAdd = getSpanEl("product-card__old-add", "₽");
    this.productCardOld.append(this.productCardOldNumber, this.productCardOldAdd);

    this.productCardPrice = getSpanEl("product-card__price");
    this.productCardPriceNumber = getSpanEl("product-card__price-number", this.newPrice);
    this.productCardPriceAdd = getSpanEl("product-card__price-add", "₽");

    this.productCardPrice.append(this.productCardPriceNumber, this.productCardPriceAdd);

    this.tooltip = getDivEl("product-card__tooltip");
    this.tooltip.classList.add("tooltip");

    this.tooltipBtn = getButtonEl("tooltip__btn", "button", "Показать подсказку");
    this.tooltipBtn.dataset.tippy = this.id 
    this.tooltipBtn.ariaLabel = "Показать подсказку";
    this.bascketSvg = getIconEl("images/sprite.svg#icon-i", "5", "10");

    this.tooltipBtn.append(this.bascketSvg);

    this.tooltipContent = getDivEl("tooltip__content");
    this.tooltipContent.id = this.id
    this.tooltipTextUnite = getSpanEl("tooltip__text", "Наличие товара по городам:");

    this.tooltipList = this.getTooltipList();

    this.tooltipContent.append(this.tooltipTextUnite, this.tooltipList);

    this.tooltip.append(this.tooltipBtn, this.tooltipContent);

    this.productCardInfo.append(this.productCardTitle, this.productCardOld, this.productCardPrice, this.tooltip);

    this.productCard.append(this.productCardVisual, this.productCardInfo);

    this.catalogItem.append(this.productCard);

    return this.catalogItem;
  }
  // Функция создания кнопки "положить к корзину"
  getBasketLinkBtn() {
    this.basketLinkBtn = getLinkEl("product-card__link", "#", "Положить в корзину");
    this.basketLinkBtn.classList.add("btn", "btn--icon");

    // Функция кнопки "положить к корзину"
    this.basketLinkBtn.addEventListener("click", () => {
      if (document.querySelector(`[data-id="${this.id}"]`)) {
        this.addCount = ++this._addCount;
        this.priceCount = this._priceCount + this.newPrice;
      } else {
        this.addCount = ++this._addCount;
        this.priceCount = this._priceCount + this.newPrice;
        this.renderInBasket();
      }
    });

    const basketLinkBtnText = getSpanEl("btn__text", "В корзину");
    const basketLinkBtnSvg = getIconEl("images/sprite.svg#icon-basket", "24", "24");
    this.basketLinkBtn.append(basketLinkBtnText, basketLinkBtnSvg);
    return this.basketLinkBtn;
  }

  // Функция отрисовки товара в корзине
  renderInBasket() {
    const basketList = document.querySelector(".basket__list");

    this.basketItem = getLiEl("basket__item");
    this.basketItem.dataset.id = this.id;

    const basketImg = getDivEl("basket__img");
    const imgEl = getImgEl(this.img, "60", "60", "Фотография товара");
    basketImg.append(imgEl);

    const basketName = getSpanEl("basket__name", this.name);

    // Кнопка минус
    this.basketMinusBtn = getButtonEl("basket__minus", "button", "Убрать товар");
    this.basketMinusBtn.classList.add("btn", "btn--figure");
    this.basketMinusBtn.textContent = "-";
    this.basketMinusBtn.addEventListener("click", () => {
      this.addCount--;
      this.priceCount -= this.newPrice;
    });

    this.basketCounter = getSpanEl("basket__counter", this.addCount);

    // Кнопка плюс
    this.basketPlusBtn = getButtonEl("basket__plus", "button", "Добавить товар");
    this.basketPlusBtn.classList.add("btn", "btn--figure");
    this.basketPlusBtn.textContent = "+";
    this.basketPlusBtn.addEventListener("click", () => {
      this.addCount++;
      this.priceCount += this.newPrice;
    });

    this.basketPrice = getSpanEl("basket__price", this.priceCount);

    const basketItemClose = getButtonEl("basket__close", "button", "Удалить товар");
    basketItemClose.addEventListener("click", () => {
      this.basketItem.remove();
      this.addCount = 0;
      this.priceCount = 0;
    });

    const basketCloseIcon = getIconEl("images/sprite.svg#icon-close", "24", "24");
    basketItemClose.append(basketCloseIcon);

    this.basketItem.append(
      basketImg,
      basketName,
      this.basketMinusBtn,
      this.basketCounter,
      this.basketPlusBtn,
      this.basketPrice,
      basketItemClose
    );
    basketList.append(this.basketItem);
  }

  // Функция создания кнопки "Узнать подробней"
  getdetailsLinkBtn() {
    const detailsLink = getLinkEl("product-card__link", "#", "Узнать подробней");
    detailsLink.classList.add("btn", "btn--secondary");
    const detailsLinkText = getSpanEl("btn__text", "Подробнее");
    detailsLink.append(detailsLinkText);
    return detailsLink;
  }

  // Функция отображения всплывающей подсказки - tooltip
  getTooltipList() {
    // Функция проверки и получения значения наличия товара по городам
    for (const key in this.availability) {
      if (key == "moscow") {
        this._availabilityMosc = this.availability[key];
      }
      if (key == "orenburg") {
        this._availabilityOren = this.availability[key];
      }
      if (key == "saintPetersburg") {
        this._availabilitySaint = this.availability[key];
      }
    }

    const tooltipList = getUlEl("tooltip__list");

    const tooltipItemMosc = getLiEl("tooltip__item");
    const tooltipTextMosc = getSpanEl("tooltip__text", "Москва: ");
    const tooltipCountMosc = getSpanEl("tooltip__count", this._availabilityMosc);
    tooltipTextMosc.append(tooltipCountMosc);
    tooltipItemMosc.append(tooltipTextMosc);

    const tooltipItemOren = getLiEl("tooltip__item");
    const tooltipTextOren = getSpanEl("tooltip__text", "Оренбург: ");
    const tooltipCountOren = getSpanEl("tooltip__count", this._availabilityOren);
    tooltipTextOren.append(tooltipCountOren);
    tooltipItemOren.append(tooltipTextOren);

    const tooltipItemSaint = getLiEl("tooltip__item");
    const tooltipTextSaint = getSpanEl("tooltip__text", "Санкт-Петербург: ");
    const tooltipCountSaint = getSpanEl("tooltip__count", this._availabilitySaint);
    tooltipTextSaint.append(tooltipCountSaint);
    tooltipItemSaint.append(tooltipTextSaint);

    tooltipList.append(tooltipItemMosc, tooltipItemOren, tooltipItemSaint);

    return tooltipList;
  }

  //_______________________Сеттеры и геттеры______________________________________
  // Сеттер цены торва
  set priceCount(value) {
    this._priceCount = value;

    if (this.basketItem) {
      if (this._priceCount > 0) {
        this.basketPrice.textContent = this._priceCount;
      } else {
        this.basketPrice.textContent = 0;
      }
    }
  }
  // Геттер цены торва
  get priceCount() {
    return this._priceCount;
  }

  // Сеттер количества торва
  set addCount(value) {
    this._addCount = value;

    if (this.basketItem) {
      if (this._addCount > 0) {
        this.basketCounter.textContent = this._addCount;
      } else {
        this.basketCounter.textContent = 0;
        this.basketItem.remove();
      }
    }
  }
  // Геттер количества торва
  get addCount() {
    return this._addCount;
  }
}
