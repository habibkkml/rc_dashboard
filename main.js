import "./style.scss";

// Menu Trigger for Normal Menu
let menuItem = document.getElementById("menuItem");
let menuTriggerBtn = document.getElementById("menuTriggerBtn");
function menuTrigger() {
  menuItem.classList.toggle("menu-active");
}
menuTriggerBtn.addEventListener("click", menuTrigger);

// End Menu Trigger for normal menu

// Header sticky
var header = document.getElementById("header");

// Add an event listener to the window object to listen for scroll events
window.onscroll = function () {
  // Check if the user has scrolled down by at least 100 pixels
  if (window.scrollY > 100) {
    // Add the "fixed" class to the header
    header.classList.add("sticky");
  } else {
    // Remove the "fixed" class from the header
    header.classList.remove("sticky");
  }
};
