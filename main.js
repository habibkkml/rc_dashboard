import "./style.scss";
// Import our custom CSS

// Menu Trigger for Normal Menu
let menuItem = document.getElementById("menuItem");
let menuTriggerBtn = document.getElementById("menuTriggerBtn");
function menuTrigger() {
  menuItem.classList.toggle("menu-active");
}
menuTriggerBtn.addEventListener("click", menuTrigger);

// Header sticky
var header = document.getElementById("header");

window.onscroll = function () {
  if (window.scrollY > 70) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// Sidebar Trigger
// Menu Trigger for Normal Menu
let sideMenu = document.getElementById("sidebar");
let sideMenuBtn = document.getElementById("mobile-menu");
let body = document.getElementsByTagName("body")[0];
function sideMenuTrigger() {
  body.classList.toggle("sidebar-shadow");
  sideMenu.classList.toggle("sidebar-active");
}
sideMenuBtn.addEventListener("click", sideMenuTrigger);
