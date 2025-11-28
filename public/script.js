// Toggle mobile navigation menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
}

// Close menu when clicking any link
document.addEventListener("click", (e) => {
    const navLinks = document.getElementById("navLinks");

    if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
    }
});

// Close menu when clicking outside the menu area
window.addEventListener("click", (e) => {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    // If clicked outside both hamburger & menu, close it
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("open");
    }
});