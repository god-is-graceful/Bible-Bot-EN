document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector("ul");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("show");
    menuIcon.classList.add("show");
  });

  navList.addEventListener("click", function () {
    navList.classList.remove("show");
    menuIcon.classList.remove("show");
  });

  window.addEventListener("scroll", function () {
    navList.classList.remove("show");
    menuIcon.classList.remove("show");
  });

  window.addEventListener("pagehide", function () {});
});
