
/* ==========================================
   1. MOBILE NAVIGATION
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});


/* ==========================================
   2. CLOSE MOBILE MENU AFTER CLICK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==========================================
   3. DARK MODE / LIGHT MODE
========================================== */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = themeToggle.querySelector("i");


// Load saved theme

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

}


// Update theme icon

function updateThemeIcon() {

    if (document.body.classList.contains("light-theme")) {

        themeIcon.className = "fas fa-sun";

    } else {

        themeIcon.className = "fas fa-moon";

    }

}


// Set initial icon

updateThemeIcon();


// Change theme when button is clicked

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const currentTheme =
        document.body.classList.contains("light-theme")
            ? "light"
            : "dark";


    // Save selected theme

    localStorage.setItem("portfolio-theme", currentTheme);


    // Change icon

    updateThemeIcon();

});


/* ==========================================
   4. TYPING ANIMATION
========================================== */

const words = [

    "CS Student",
    "Web Developer",
    "Programmer",
    "Tech Enthusiast"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typingElement = document.getElementById("typing");


function typeEffect() {

    const currentWord = words[wordIndex];


    // Add or remove characters

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }


    // Display text

    typingElement.textContent =
        currentWord.substring(0, charIndex);


    let speed = deleting ? 60 : 100;


    // When word is completed

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;

        speed = 1200;

    }


    // When word is deleted

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }


    // Repeat typing animation

    setTimeout(typeEffect, speed);

}


// Start typing animation

typeEffect();
