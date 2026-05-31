// Portfolio content data powers the dynamic card sections.
const skills = [
  { name: 'Java', icon: 'fa-brands fa-java', level: 88, type: 'Programming foundation and application logic' },
  { name: 'Object-Oriented Programming', icon: 'fa-solid fa-cubes', level: 86, type: 'Reusable, maintainable class-based architecture' },
  { name: 'Data Structures & Algorithms', icon: 'fa-solid fa-diagram-project', level: 82, type: 'Efficient problem solving and complexity analysis' },
  { name: 'SQL', icon: 'fa-solid fa-database', level: 80, type: 'Database querying, schema design, and data handling' },
  { name: 'HTML5', icon: 'fa-brands fa-html5', level: 92, type: 'Semantic, accessible document structure' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', level: 90, type: 'Responsive layouts, animations, and modern UI systems' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', level: 84, type: 'Interactive frontend behavior with vanilla JavaScript' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github', level: 78, type: 'Version control, collaboration, and project workflows' },
  { name: 'Responsive Web Design', icon: 'fa-solid fa-mobile-screen-button', level: 91, type: 'Mobile-first interfaces for every viewport' },
  { name: 'Communication', icon: 'fa-solid fa-comments', level: 87, type: 'Clear technical communication and collaboration' },
  { name: 'Leadership', icon: 'fa-solid fa-people-group', level: 83, type: 'Team ownership, initiative, and coordination' },
  { name: 'Critical Thinking', icon: 'fa-solid fa-brain', level: 85, type: 'Analytical decisions and structured debugging' },
];

const projects = [
  {
    title: 'Online Music Collaboration Platform',
    category: 'web',
    icon: 'fa-solid fa-music',
    description: 'A modern web-based platform that enables musicians, composers, and content creators to collaborate remotely on music projects. Users can upload audio tracks, share files, communicate with team members, and manage collaborative workflows efficiently through a centralized environment.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Web Audio API'],
  },
  {
    title: 'AI Visualization Dashboard',
    category: 'web',
    icon: 'fa-solid fa-chart-line',
    description: 'An interactive visualization platform designed to simplify complex Artificial Intelligence and Machine Learning concepts through dynamic charts, graphs, animations, and real-time data representation.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'AI APIs'],
  },
  {
    title: 'Java Banking Application',
    category: 'java',
    icon: 'fa-solid fa-building-columns',
    description: 'A secure banking management system developed using Java that allows users to create accounts, perform deposits and withdrawals, view account balances, and maintain transaction histories.',
    tech: ['Java', 'OOP', 'Collections Framework', 'File Handling'],
  },
  {
    title: 'Future Project Placeholder',
    category: 'future',
    icon: 'fa-solid fa-rocket',
    description: 'A dedicated section reserved for upcoming innovative projects involving modern web technologies, software engineering, artificial intelligence, cloud computing, and full-stack development.',
    tech: ['Coming Soon'],
  },
];

const certifications = [
  { name: 'Java Programming', issuer: 'Technical Learning Program', date: '2026', category: 'programming', icon: 'fa-brands fa-java' },
  { name: 'Data Structures & Algorithms', issuer: 'Computer Science Track', date: '2026', category: 'programming', icon: 'fa-solid fa-code-branch' },
  { name: 'Web Development', issuer: 'Frontend Development Program', date: '2026', category: 'web', icon: 'fa-solid fa-globe' },
  { name: 'Database Management Systems', issuer: 'Database Fundamentals', date: '2026', category: 'programming', icon: 'fa-solid fa-database' },
  { name: 'Git & GitHub', issuer: 'Developer Tools Program', date: '2026', category: 'tools', icon: 'fa-brands fa-github' },
  { name: 'Frontend Development', issuer: 'Modern UI Engineering', date: '2026', category: 'web', icon: 'fa-solid fa-laptop-code' },
];

const typingPhrases = ['responsive web apps.', 'clean user interfaces.', 'scalable frontend experiences.', 'accessible digital products.'];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const select = (selector, parent = document) => parent.querySelector(selector);
const selectAll = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// Lightweight typing animation for the hero tagline.
function typeText() {
  const typingText = select('#typingText');
  if (!typingText) return;

  const currentPhrase = typingPhrases[phraseIndex];
  typingText.textContent = currentPhrase.slice(0, letterIndex);

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex += 1;
  } else if (isDeleting && letterIndex > 0) {
    letterIndex -= 1;
  } else if (!isDeleting) {
    isDeleting = true;
    setTimeout(typeText, 1400);
    return;
  } else {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typingPhrases.length;
  }

  setTimeout(typeText, isDeleting ? 45 : 85);
}

function renderSkills() {
  const skillsGrid = select('#skillsGrid');
  skillsGrid.innerHTML = skills.map((skill) => `
    <article class="skill-card card reveal" style="--level: ${skill.level / 100}">
      <div class="skill-card__top">
        <i class="skill-card__icon ${skill.icon}" aria-hidden="true"></i>
        <h3>${skill.name}</h3>
        <span class="skill-card__level">${skill.level}%</span>
      </div>
      <p>${skill.type}</p>
      <div class="progress" aria-label="${skill.name} proficiency ${skill.level} percent"><span></span></div>
    </article>
  `).join('');
}

function renderProjects() {
  const projectsGrid = select('#projectsGrid');
  projectsGrid.innerHTML = projects.map((project) => `
    <article class="project-card card reveal" data-category="${project.category}">
      <div class="project-card__image" role="img" aria-label="${project.title} image placeholder">
        <i class="${project.icon}" aria-hidden="true"></i>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tech.map((tech) => `<span class="tag">${tech}</span>`).join('')}</div>
      <div class="card-actions">
        <a class="btn btn--glass" href="https://github.com/" target="_blank" rel="noopener"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>
        <a class="btn btn--outline" href="#home"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Demo</a>
      </div>
    </article>
  `).join('');
}

function renderCertifications() {
  const certificationsGrid = select('#certificationsGrid');
  certificationsGrid.innerHTML = certifications.map((certification) => `
    <article class="cert-card card reveal" data-category="${certification.category}">
      <div class="cert-card__image" role="img" aria-label="${certification.name} certificate placeholder">
        <i class="${certification.icon}" aria-hidden="true"></i>
      </div>
      <h3>${certification.name}</h3>
      <p><strong>${certification.issuer}</strong><br />Completed: ${certification.date}</p>
      <a class="btn btn--glass" href="#certifications"><i class="fa-regular fa-eye" aria-hidden="true"></i> View Certificate</a>
    </article>
  `).join('');
}

// IntersectionObserver keeps animations smooth and performance-friendly.
function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  selectAll('.reveal').forEach((element) => observer.observe(element));
}

function setupNavigation() {
  const navToggle = select('#navToggle');
  const navMenu = select('#navMenu');
  const navLinks = selectAll('.nav-link');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = selectAll('main section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
}

function setupThemeToggle() {
  const themeToggle = select('#themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.dataset.theme = savedTheme;
  updateThemeButton(savedTheme);

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
    updateThemeButton(nextTheme);
  });
}

function updateThemeButton(theme) {
  const themeToggle = select('#themeToggle');
  const icon = select('i', themeToggle);
  const isDark = theme === 'dark';
  icon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function setupFilters(buttonSelector, cardSelector) {
  selectAll(buttonSelector).forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      selectAll(buttonSelector).forEach((item) => item.classList.toggle('active', item === button));
      selectAll(cardSelector).forEach((card) => {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
      });
    });
  });
}

// Client-side validation provides accessible feedback before a real backend is connected.
function setupContactForm() {
  const form = select('#contactForm');
  const status = select('#formStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    selectAll('.form-row', form).forEach((row) => {
      const field = row.querySelector('input, textarea');
      const error = row.querySelector('.error-message');
      const value = field.value.trim();
      let message = '';

      if (!value) {
        message = `${field.previousElementSibling.textContent} is required.`;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = 'Please enter a valid email address.';
      }

      row.classList.toggle('invalid', Boolean(message));
      error.textContent = message;
      if (message) isValid = false;
    });

    if (!isValid) {
      status.className = 'form-status';
      status.textContent = 'Please fix the highlighted fields and try again.';
      return;
    }

    status.className = 'form-status success';
    status.textContent = 'Thanks! Your message has been validated successfully.';
    form.reset();
  });
}

function setupScrollEffects() {
  const header = select('#siteHeader');
  const progress = select('#scrollProgress');
  const backToTop = select('#backToTop');

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressValue = documentHeight > 0 ? scrollTop / documentHeight : 0;

    header.classList.toggle('scrolled', scrollTop > 20);
    progress.style.transform = `scaleX(${progressValue})`;
    backToTop.classList.toggle('visible', scrollTop > 520);
  };

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
}

window.addEventListener('load', () => {
  setTimeout(() => document.body.classList.add('loaded'), 350);
});

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderCertifications();
  setupRevealAnimations();
  setupNavigation();
  setupThemeToggle();
  setupFilters('.filter-btn', '.project-card');
  setupFilters('.cert-filter', '.cert-card');
  setupContactForm();
  setupScrollEffects();
  typeText();
});
