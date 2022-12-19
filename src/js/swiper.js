
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 25,
  loop: true,
  parallax: true,
  speed:2000,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 90,
    stretch:0,
  },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });