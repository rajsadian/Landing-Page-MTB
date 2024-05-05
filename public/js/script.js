AOS.init();

// Hamburger Menu
const hamburger = document.querySelector("#hamburger-btn");
const mobileNav = document.querySelector("#mobile-nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  mobileNav.classList.toggle("-translate-y-60");
});
