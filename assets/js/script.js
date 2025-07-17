'use strict';
/**
 * add event listener on multiple elements
 */

const addEventElements = function ( elements , eventType , callback) {
        for (let i = 0 , len = elements.length ; i < len ; i++ ) {
                elements[i].addEventListener(eventType , callback );
        }
}



/**
 * mobile nav
 */

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function (){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
}

addEventElements( navbarTogglers , "click" , togglerNav );

const closeNav = function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active"); 
}

addEventElements( navbarLinks , "click" , closeNav);




/**
 * header & back to top btn
 */


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");



window.addEventListener("scroll", function() {
header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
backTopBtn.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

    