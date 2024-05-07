// Hamburger Menu
const hamburger = document.querySelector("#hamburger-btn");
const mobileNav = document.querySelector("#mobile-nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  mobileNav.classList.toggle("-translate-y-60");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }
};
