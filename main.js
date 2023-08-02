const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const heartIcon = document.querySelector(".heart-btn")
const heartBtn = document.querySelectorAll(".heart-btn");


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


// heartBtn.forEach(btn => {
//   btn.addEventListener("click", () => {
//     if(btn.classList.contains("text-white")){
//       btn.classList.remove("text-white") 
//       btn.classList.add("text-red-600")
//       return;
//     } 
//     btn.classList.remove("text-red-600") 
//     btn.classList.add("text-white")
//     }
//   )
// });


  const svgElements = document.querySelectorAll('.heart-icon');

  const svgArray = Array.from(svgElements);

  svgArray.forEach((svgElement) => {
    svgElement.addEventListener('click', function () {
      svgElement.classList.add('scale-150');

      setTimeout(() => {
        svgElement.classList.remove('scale-150');
      }, 300);

      svgElement.getAttribute('fill') === 'white' ?
      svgElement.setAttribute('fill', 'red') :
      svgElement.setAttribute('fill', 'white')

      const path = svgElement.querySelector(".heart")

      path.getAttribute('stroke-width') === '1' ?
      path.setAttribute('stroke-width', '0') :
      path.setAttribute('stroke-width', '1')
    });
  });

