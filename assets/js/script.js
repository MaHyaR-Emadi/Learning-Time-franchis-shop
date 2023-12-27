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
    $header.classList[window.scrollY > 30 ? "add" : "remove"]("active");
});



// let valueDisplays = document.querySelectorAll(".num");
// let interval = 3000;
// valueDisplays.forEach((valueDisplay) => {
//     let startvalue = 0;
//     let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = math.floor(interval / endvalue);
//     let counter = setInterval (function () {
//         startvalue += 1 ;
//         valueDisplay.textContent = startvalue ;
//         if ( startvalue == endvalue) {
//             clearInterval(counter) ;
//         }

//     }, duration);
// });
