let btnExpand = document.querySelector(".slider__btn-expand");
let sliderIcons = document.querySelector(".slide__icons");

btnExpand.addEventListener("click", function () {
  sliderIcons.classList.toggle("click");
  this.classList.toggle("click");

  if (this.classList.contains("click")) {
    this.textContent = "Скрыть";
  } else {
    this.textContent = "Показать все";
  }
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    sliderIcons.style.transform = "";
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  width: 720,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
