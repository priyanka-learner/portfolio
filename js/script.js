/* ============================================================
   PORTFOLIO – script.js
   Author : Priyanka Awachar
   Stack  : HTML5 · CSS3 · JavaScript
   ============================================================ */

'use strict';

/* ============================================================
   1. UTILITY HELPERS
============================================================ */

/** Safely query a single element; logs a warning if not found. */
function qs(selector, context = document) {
  const el = context.querySelector(selector);
  if (!el) console.warn(`[portfolio] Element not found: "${selector}"`);
  return el;
}

/** Safely query all elements; returns empty NodeList if none. */
function qsa(selector, context = document) {
  return context.querySelectorAll(selector);
}

/* ============================================================
   2. HEADER — SCROLL SHADOW
============================================================ */
(function initHeaderScroll() {
  const header = qs('#site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ============================================================
   3. MOBILE NAVIGATION TOGGLE
============================================================ */
(function initMobileNav() {
  const toggle   = qs('.menu-toggle');
  const navLinks = qs('.nav-links');
  if (!toggle || !navLinks) return;

  function setMenuOpen(open) {
    navLinks.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = open
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars"  aria-hidden="true"></i>';
  }

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    setMenuOpen(!isOpen);
  });

  qsa('.nav-links a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('click', e => {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      setMenuOpen(false);
      toggle.focus();
    }
  });
})();

/* ============================================================
   4. ACTIVE NAV HIGHLIGHT ON SCROLL
============================================================ */
(function initNavHighlight() {
  const navAnchors = qsa('.nav-links a');
  const sections   = qsa('main section[id]');
  if (!navAnchors.length || !sections.length) return;

  function setActive(id) {
    navAnchors.forEach(a => {
      const matches = a.getAttribute('href') === `#${id}`;
      a.classList.toggle('active', matches);
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, {
    rootMargin: '-35% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(s => observer.observe(s));
})();

/* ============================================================
   5. SKILLS — INTERACTIVE DETAIL PANEL
============================================================ */
(function initSkills() {
  const skillData = {
    html: {
      icon:        'fa-brands fa-html5',
      title:       'HTML5',
      description: 'HTML5 is used to create the semantic structure of web pages using meaningful elements such as header, nav, main, section, article and footer. It forms the backbone of every web page.'
    },
    css: {
      icon:        'fa-brands fa-css3-alt',
      title:       'CSS3',
      description: 'CSS3 styles web pages with layouts, colours, typography, spacing, Flexbox, Grid, responsive design and interactive states. I use it to build clean, professional UIs from scratch.'
    },
    javascript: {
      icon:        'fa-brands fa-js',
      title:       'JavaScript',
      description: 'JavaScript adds interactivity to websites — dynamic content, form handling, navigation behaviour, DOM manipulation and user interactions — all without any framework.'
    },
    python: {
      icon:        'fa-brands fa-python',
      title:       'Python',
      description: 'Python is a versatile programming language I use for learning programming concepts, problem solving, scripting and building practical applications.'
    },
    java: {
      icon:        'fa-brands fa-java',
      title:       'Java',
      description: 'Java is an object-oriented language I am learning for programming fundamentals, application development and strengthening problem-solving skills.'
    },
    cpp: {
      icon:        'fa-solid fa-code',
      title:       'C / C++',
      description: 'C and C++ strengthen programming fundamentals, data structures, memory management and algorithm problem-solving skills at a low level.'
    },
    mysql: {
      icon:        'fa-solid fa-database',
      title:       'MySQL',
      description: 'MySQL is a relational database system used to store, organise and retrieve structured application data using SQL queries and schema design.'
    },
    mongodb: {
      icon:        'fa-solid fa-leaf',
      title:       'MongoDB',
      description: 'MongoDB is a NoSQL database that stores data in flexible, document-oriented collections — useful for modern web applications and JSON-based APIs.'
    },
    github: {
      icon:        'fa-brands fa-github',
      title:       'Git & GitHub',
      description: 'Git and GitHub help me track code changes, manage branches, collaborate with others and maintain professional version-controlled project repositories.'
    }
  };

  const cards      = qsa('.skill-card');
  const panelIcon  = qs('#skill-icon');
  const panelTitle = qs('#skill-title');
  const panelDesc  = qs('#skill-description');
  if (!cards.length || !panelIcon || !panelTitle || !panelDesc) return;

  function showSkill(key) {
    const data = skillData[key];
    if (!data) return;

    panelIcon.className    = data.icon;
    panelTitle.textContent = data.title;
    panelDesc.textContent  = data.description;

    cards.forEach(c => {
      const isActive = c.dataset.skill === key;
      c.classList.toggle('active', isActive);
      c.setAttribute('aria-pressed', String(isActive));
    });
  }

  cards.forEach(card => {
    card.addEventListener('click', () => showSkill(card.dataset.skill));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showSkill(card.dataset.skill);
      }
    });
  });

  const defaultCard = qs('.skill-card.active');
  if (defaultCard) showSkill(defaultCard.dataset.skill);
})();

/* ============================================================
   6. PROJECTS — VIEW / HIDE DETAILS ACCORDION
============================================================ */
(function initProjectAccordion() {
  const toggleButtons = qsa('.project-toggle');
  if (!toggleButtons.length) return;

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded  = btn.getAttribute('aria-expanded') === 'true';
      const detailsId = btn.getAttribute('aria-controls');
      const detailsEl = detailsId ? qs(`#${detailsId}`) : btn.nextElementSibling;
      const iconEl    = btn.querySelector('.toggle-icon');

      if (!detailsEl) return;

      const nowOpen = !expanded;
      btn.setAttribute('aria-expanded', String(nowOpen));
      detailsEl.hidden = !nowOpen;

      btn.firstChild.textContent = nowOpen ? 'Hide Details ' : 'View Details ';

      if (iconEl) iconEl.setAttribute('aria-label', nowOpen ? 'collapse' : 'expand');
    });
  });
})();

/* ============================================================
   7. CONTACT FORM — VALIDATION + SUCCESS MESSAGE
============================================================ */
(function initContactForm() {
  const form          = qs('#contact-form');
  const successBanner = qs('#form-success');
  if (!form) return;

  const nameInput    = qs('#name',    form);
  const emailInput   = qs('#email',   form);
  const messageInput = qs('#message', form);
  const nameError    = qs('#name-error',    form);
  const emailError   = qs('#email-error',   form);
  const messageError = qs('#message-error', form);

  function setError(input, errorEl, message) {
    if (!input || !errorEl) return;
    input.classList.add('input-error');
    errorEl.textContent = message;
  }

  function clearError(input, errorEl) {
    if (!input || !errorEl) return;
    input.classList.remove('input-error');
    errorEl.textContent = '';
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  [nameInput, emailInput, messageInput].forEach((input, i) => {
    const errorEl = [nameError, emailError, messageError][i];
    if (input) input.addEventListener('input', () => clearError(input, errorEl));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    if (!nameInput || nameInput.value.trim().length < 2) {
      setError(nameInput, nameError, 'Please enter your full name (at least 2 characters).');
      valid = false;
    } else { clearError(nameInput, nameError); }

    if (!emailInput || !isValidEmail(emailInput.value)) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
      valid = false;
    } else { clearError(emailInput, emailError); }

    if (!messageInput || messageInput.value.trim().length < 10) {
      setError(messageInput, messageError, 'Please enter a message (at least 10 characters).');
      valid = false;
    } else { clearError(messageInput, messageError); }

    if (!valid) return;

    form.hidden = true;
    if (successBanner) {
      successBanner.hidden = false;
      successBanner.focus();
    }

    setTimeout(() => {
      form.reset();
      form.hidden = false;
      if (successBanner) successBanner.hidden = true;
    }, 8000);
  });
})();

/* ============================================================
   8. FOOTER — DYNAMIC COPYRIGHT YEAR
============================================================ */
(function initFooterYear() {
  const yearEl = qs('#footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* ============================================================
   9. TYPEWRITER EFFECT  (new)
============================================================ */
(function initTypewriter() {
  const el = qs('.typewriter');
  if (!el) return;

  let roles;
  try {
    roles = JSON.parse(el.dataset.roles || '[]');
  } catch (e) {
    roles = ['Web Developer'];
  }
  if (!roles.length) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPING_SPEED   = 90;   // ms per character while typing
  const DELETING_SPEED = 50;   // ms per character while deleting
  const PAUSE_END      = 1800; // ms pause after full word
  const PAUSE_START    = 350;  // ms pause before typing next word

  function tick() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = currentRole.slice(0, charIndex);
    } else {
      charIndex++;
      el.textContent = currentRole.slice(0, charIndex);
    }

    let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    if (!isDeleting && charIndex === currentRole.length) {
      // Finished typing — pause then start deleting
      delay = PAUSE_END;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting — move to next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = PAUSE_START;
    }

    setTimeout(tick, delay);
  }

  // Small initial delay so the page finishes rendering first
  setTimeout(tick, 600);
})();

/* ============================================================
   10. SCROLL REVEAL  (new)
============================================================ */
(function initScrollReveal() {
  const elements = qsa('[data-reveal]');
  if (!elements.length) return;

  // Use IntersectionObserver if available
  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // trigger only once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

/* ============================================================
   11. BACK-TO-TOP BUTTON  (new)
============================================================ */
(function initBackToTop() {
  const btn = qs('#back-to-top');
  if (!btn) return;

  // Show/hide on scroll
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // Scroll to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
