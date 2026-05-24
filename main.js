// ─── HEADER SCROLL ─────────────────────────────────────────
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ─── MOBILE NAV ─────────────────────────────────────────────
  function openMobileNav() {
    document.getElementById('mobileNav').classList.add('open');
    document.getElementById('mobileOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    document.getElementById('mobileNav').classList.remove('open');
    document.getElementById('mobileOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ─── SCROLL REVEAL ──────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));

  // ─── FORM SUBMIT ────────────────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    const btn = form.querySelector('.form-submit');

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      success.classList.add('show');
    }, 1200);
  }

  // ─── ACTIVE NAV LINK ─────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a:not(.nav-cta)');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.style.color = '');
        const active = document.querySelector(`nav a[href="#${e.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));