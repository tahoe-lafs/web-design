// Mobile menu

const menuTrigger = document.querySelector(".trigger");
const menu = document.querySelector("nav");
const mobileQuery = getComputedStyle(document.body).getPropertyValue(
  "--phoneWidth"
);

const isMobile = () => window.matchMedia(mobileQuery).matches;
const isMobileMenu = () => {
  menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
};

isMobileMenu();

menuTrigger &&
  menuTrigger.addEventListener(
    "click",
    () => menu && menu.classList.toggle("hidden")
  );

window.addEventListener("resize", isMobileMenu);
