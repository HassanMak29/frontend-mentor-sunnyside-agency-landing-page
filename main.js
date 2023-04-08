const burgerMenu = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".nav-section > nav > ul");

burgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});
