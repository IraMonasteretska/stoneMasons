// start burger menu
let burger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let header = document.querySelector(".header");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");
});
// end burger menu

if (document.querySelector(".main-black-bg")) {
  header.classList.add("main-black-bg-head");
}
// start hide header

scrollPrev = 0;
window.addEventListener("scroll", () => {
  let scrolled = document.documentElement.scrollTop;
  if (scrolled > 600 && scrolled > scrollPrev) {
    if (window.matchMedia("(min-width: 1023px)").matches) {
      header.classList.add("active");
    }
    if (document.querySelector(".main-black-bg")) {
      header.classList.add("active-dark");
    }
  } else if (scrolled < 600) {
    header.classList.remove("active");
    header.classList.remove("active-dark");
  }
  scrollPrev = scrolled;
});
// end hide header
