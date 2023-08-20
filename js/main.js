//Hamburger Menu JS
const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainMenu.classList.remove("active");
  })
);

//Counter Js
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 50,
    time: 500,
  });
});
