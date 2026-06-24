document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a, button').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          navLinks.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  document.querySelectorAll('.nav-item').forEach((item) => {
    const button = item.querySelector('button');
    const menu = item.querySelector('.drop-menu');
    if (!button || !menu) return;

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      document.querySelectorAll('.nav-item.open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
        }
      });
      item.classList.toggle('open');
    });

    menu.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });

  document.querySelectorAll('.service-carousel').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
    const prevButton = carousel.querySelector('[data-dir="prev"]');
    const nextButton = carousel.querySelector('[data-dir="next"]');

    if (!slides.length) return;

    let activeIndex = 0;

    const updateCarousel = () => {
      slides.forEach((slide, index) => slide.classList.toggle('active', index === activeIndex));
      dots.forEach((dot, index) => dot.classList.toggle('active', index === activeIndex));
    };

    prevButton?.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    nextButton?.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % slides.length;
      updateCarousel();
    });

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        activeIndex = Number(dot.dataset.slide || 0);
        updateCarousel();
      });
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.open').forEach((item) => {
      item.classList.remove('open');
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
