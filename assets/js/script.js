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

// add to favorite button toggle

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]") ;

$toggleBtns.forEach($toggleBtns =>{
   $toggleBtns.addEventListener("click", () => {
      $toggleBtns.classList.toggle("active");
   });
});

// add Number counting animation

let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
    let startvalue = 0;
    let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
    console.log(endvalue);
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval (function () {
        startvalue += 1 ;
        valueDisplay.textContent = startvalue ;
        if ( startvalue == endvalue) {
            clearInterval(counter) ;
        }

    }, duration);
});
