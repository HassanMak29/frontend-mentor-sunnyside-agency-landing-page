const burgerMenu = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".nav-section > nav > ul");

burgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

document.querySelector("body").addEventListener("click", (e) => {
  if (
    mobileNav.classList.contains("open") &&
    e.target !== mobileNav &&
    e.target !== burgerMenu
  ) {
    mobileNav.classList.remove("open");
  }
});
