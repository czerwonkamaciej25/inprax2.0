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
  spaceBetween: 110,
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
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          coverflowEffect: {
            rotate: 2,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          },
        },
        // when window width is >= 480px
        
        480: {
          slidesPerView: 1,
          spaceBetween: 50,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          },
          
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 50,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          },
          
        },
        // when window width is >= 640px
        850: {
          slidesPerView: 3,
          spaceBetween: 60,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
          },
          
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 100,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 30,
            modifier: 1,
            slideShadows: false,
          },
          
        }
      }
});
