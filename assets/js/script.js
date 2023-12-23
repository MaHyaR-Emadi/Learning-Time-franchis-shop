`use strict` ;


/**
 * navbar toggle in mobile 
 */

const $navbar = document.querySelector("[data-navbar]");
const $navtoggler =document.querySelector("[data-nav-toggler]");

$navtoggler.addEventListener("click", () =>$navbar.classList.toggle("active"));

/**
 * header scroll state
 */

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});