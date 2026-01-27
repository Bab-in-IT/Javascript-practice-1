import ProductCard from "./ProductCard.js";

export default class SliderProductCard extends ProductCard {
  constructor(id, name, newPrice, oldPrice, img, availability, type, rating, goodsOfDay) {
    super(id, name, newPrice, oldPrice, img, availability, type, rating, goodsOfDay);
  }

  getElement() {
    const dayItem = super.getElement();

    this.catalogItem.classList.remove("catalog__item");
    this.catalogItem.classList.add("day-products__item", "swiper-slide");

    this.productCard.classList.add("product-card--small");

    return dayItem;
  }
}
