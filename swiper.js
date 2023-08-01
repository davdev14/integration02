const swiper = new Swiper(".mySwiper", {    
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiper2;

function initSwiper() {
  const windowWidth = window.innerWidth;

  let slidesPerView = 1;
  if (windowWidth >= 768 && windowWidth < 1440) {
    slidesPerView = 2;
  } else if (windowWidth >= 1440) {
    slidesPerView = 3;
  }

  if (swiper2) {
    swiper2.destroy();
  }

  swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

initSwiper();

window.addEventListener("resize", () => {
  initSwiper();
});
