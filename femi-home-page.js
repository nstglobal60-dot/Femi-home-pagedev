// Fade in animation on load
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".text");
    heroText.style.opacity = 0;
    heroText.style.transition = "1.5s";

    setTimeout(() => {
        heroText.style.opacity = 1;
    }, 300);
});

// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 150) {
            section.classList.add("visible");
        }
    });
});
