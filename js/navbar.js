const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
let limitY = window.innerHeight * 2/3;

window.addEventListener('scroll', () => {
const currentScrollY = window.scrollY;

// Add opaque background when past hero (e.g., 100px)
if (currentScrollY > limitY + 100) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}

// Hide when scrolling down, show when scrolling up
if (currentScrollY > lastScrollY && currentScrollY > limitY) {
    navbar.classList.add('hide');
} else {
    navbar.classList.remove('hide');
}

lastScrollY = currentScrollY;
});