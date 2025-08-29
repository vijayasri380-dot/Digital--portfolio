// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Simple contact form validation
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "red";
    } else {
        formStatus.textContent = "Form submitted successfully!";
        formStatus.style.color = "green";
        contactForm.reset();
    }
});