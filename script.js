document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });

    // Add fade-in effect for project cards
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.style.opacity = 1;
    });
});
