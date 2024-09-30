// SHOW MENU

const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close') 
        
// menu show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// same but green
const navMenuGreen = document.getElementById('nav-menu-green');
const navToggleGreen = document.getElementById('nav-toggle-green');
const navCloseGreen = document.getElementById('nav-close-green');

// Show menu on hamburger click
if(navToggleGreen) {
    navToggleGreen.addEventListener('click', () => {
        navMenuGreen.classList.add('show-menu-green');
    });
}

// Hide menu on 'x' click
if(navCloseGreen) {
    navCloseGreen.addEventListener('click', () => {
        navMenuGreen.classList.remove('show-menu-green');
    });
}



// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




// ADD BLUR TO HEADER

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50   ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)





// SLIDE SHOW IMAGES CAROSEL
let slideIndex = []; // Array to track slide indices for each carousel
const slideshows = document.getElementsByClassName("slideshow-container"); // Get all slideshow containers

// Initialize slide indices for each slideshow
for (let i = 0; i < slideshows.length; i++) {
    slideIndex[i] = 1; // Start with the first slide for each slideshow
    showSlides(slideIndex[i], i); // Show the first slide of each slideshow
}

// Function to show slides
function showSlides(n, no) {
    const slides = slideshows[no].getElementsByClassName("mySlides"); // Get slides for the specific slideshow
    if (n > slides.length) { slideIndex[no] = 1 } // Wrap around if exceeding the number of slides
    if (n < 1) { slideIndex[no] = slides.length } // Wrap around if below 1
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex[no] - 1].style.display = "block"; // Show the current slide
}

// Function to change slides
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no); // Update the slide index and show slides
}

// Function to set the current slide
function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no); // Set the current slide index and show slides
}

// Optional: Add click event listeners to navigation buttons if you want to handle clicks
const prevButtons = document.querySelectorAll(".prev");
const nextButtons = document.querySelectorAll(".next");
const dotButtons = document.querySelectorAll(".dot");

prevButtons.forEach((button, index) => {
    button.addEventListener("click", () => plusSlides(-1, index));
});

nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => plusSlides(1, index));
});

// Add event listeners for dot navigation if you have them
dotButtons.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index + 1, Math.floor(index / slideshows[0].getElementsByClassName("dot").length)));
});



// FORM

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".form__input").forEach(function(input) {
      input.addEventListener("input", function() {
        input.className = input.className.replace(/form__input--error ?/, "");
      });
    });
  });
  