// Welcome Message
window.addEventListener("load", function () {
    alert("Welcome to My Portfolio!");
});

// Smooth Scroll for Navigation Links
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();
});

// Highlight Active Navigation Link
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});