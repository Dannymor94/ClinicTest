import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

export const initSwiper = () => {
  new Swiper(".product__slider", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: ".product__slider-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".product__slider-button-next",
      prevEl: ".product__slider-button-prev",
    },
  });
};
