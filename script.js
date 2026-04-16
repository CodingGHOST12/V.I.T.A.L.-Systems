// 1. Initialize Icons via Lucide CDN
lucide.createIcons();

// 2. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-vital-border', 'py-4');
    navbar.classList.remove('bg-transparent', 'py-6');
  } else {
    navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-vital-border', 'py-4');
    navbar.classList.add('bg-transparent', 'py-6');
  }
});

// 3. Intersection Observer for Smooth Reveal Animations
const observerOptions = {
  root: null,
  rootMargin: '-50px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Unobserve to animate only once
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    // Reveal all sections once loaded
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});
