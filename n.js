// Add a smooth scroll effect to the navigation links
const navLinks = document.querySelectorAll('nav a');
for (const navLink of navLinks) {
  navLink.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(navLink.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
}

