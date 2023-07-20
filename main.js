const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
  const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
  window.scrollTo(0, scrollPosition);
});

function toggleMenu() {
  if (menu && menu.classList.contains("translate-x-[100%]")) {
    menu.classList.remove("translate-x-[100%]");
    if (closeIcon) closeIcon.style.display = "flex";
    if (hamburger) hamburger.style.display = "none";const swiper = document.querySelector('.swiper').swiper;
  } else {
    menu && menu.classList.add("translate-x-[100%]");
    if (closeIcon) closeIcon.style.display = "none";
    if (hamburger) hamburger.style.display = "block";
  }
}
if (hamburger) {
  hamburger === null || hamburger === void 0
    ? void 0
    : hamburger.addEventListener("click", toggleMenu);
}
if (closeIcon) {
  closeIcon === null || closeIcon === void 0
    ? void 0
    : closeIcon.addEventListener("click", toggleMenu);
}

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
