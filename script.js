// =====================================
// 1. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});


// Close mobile menu after clicking a link

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});


// =====================================
// 2. ACTIVE NAVIGATION LINK
// =====================================

const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            navItems.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");
                }

            });

        }

    });

}, {
    threshold: 0.3
});

sections.forEach(section => {
    sectionObserver.observe(section);
});


// =====================================
// 3. SCROLL REVEAL ANIMATIONS
// =====================================

// Add animation styles dynamically

const animationStyle = document.createElement("style");

animationStyle.textContent = `

    .reveal {
        opacity: 0;
        transform: translateY(35px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .reveal.show {
        opacity: 1;
        transform: translateY(0);
    }

`;

document.head.appendChild(animationStyle);


// Select elements for animation

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .education-card, .skill-card, .project-card, .contact-container"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


// Observe elements while scrolling

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// =====================================
// 4. CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check empty fields

    if (!name || !email || !subject || !message) {

        alert("Please fill in all fields.");

        return;

    }


    // Validate email format

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    // Form validation successful

    alert(
        `Thank you, ${name}!\n\nYour form has been validated successfully.\n\nNote: Message sending will be enabled after connecting an email service.`
    );

    contactForm.reset();

});


// =====================================
// 5. DYNAMIC FOOTER YEAR
// =====================================

const copyright = document.querySelector(".copyright");

copyright.innerHTML = `© ${new Date().getFullYear()} Ravindra Singh. All Rights Reserved.`;


// =====================================
// 6. SMOOTH SCROLLING
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =====================================
// 7. CONSOLE MESSAGE
// =====================================

console.log("Ravindra's Portfolio Loaded Successfully!");