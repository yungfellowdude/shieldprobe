/* ===== ShieldProbe Website Scripts ===== */

document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });

  // Close mobile menu on link click
  nav?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle?.classList.remove('active');
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const setActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', setActiveLink, { passive: true });

  // Contact form
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !company || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate successful submission
    form.reset();
    showToast();
  });

  function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Smooth reveal on scroll (simple intersection observer)
  const revealEls = document.querySelectorAll(
    '.service-card, .phase, .price-card, .info-card, .highlight-card'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
