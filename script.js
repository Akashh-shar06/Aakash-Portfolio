const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

const themeToggle = document.getElementById("themeToggle");

const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

}


function updateThemeIcon() {

    if (document.body.classList.contains("light-theme")) {

        themeIcon.className = "fas fa-sun";

    } else {

        themeIcon.className = "fas fa-moon";

    }

}

updateThemeIcon();


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const currentTheme =
        document.body.classList.contains("light-theme")
            ? "light"
            : "dark";


    localStorage.setItem("portfolio-theme", currentTheme);


    updateThemeIcon();

});

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

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);


    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;

        speed = 1200;

    }


    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();
