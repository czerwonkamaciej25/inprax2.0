// import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

var swiper = new Swiper(".mySwiper", {
  
  
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,

  effect: "coverflow",
  spaceBetween: 100,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 2,
        stretch: 0,
        depth: 70,
        modifier: 1,
        slideShadows: false,
      },
});
