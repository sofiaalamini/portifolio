const navItems = [
  { id: 'home', label: 'Inicio', href: '#home' },
  { id: 'about', label: 'Sobre', href: '#about' },
  { id: 'skills', label: 'Stack', href: '#skills' },
  { id: 'projects', label: 'Projetos', href: '#projects' },
  { id: 'contact', label: 'Contato', href: '#contact' },
];

const skills = [
  { name: 'HTML5', icon: 'fab fa-html5', category: 'frontend' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', category: 'frontend' },
  { name: 'JavaScript', icon: 'fab fa-js', category: 'frontend' },
  { name: 'TypeScript', icon: 'fab fa-js', category: 'frontend' },
  { name: 'React', icon: 'fab fa-react', category: 'frontend' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'fas fa-wind', category: 'frontend' },
  { name: 'C', icon: 'fas fa-code', category: 'backend' },
  { name: 'Java', icon: 'fab fa-java', category: 'backend' },
  { name: 'Node.js', icon: 'fab fa-node', category: 'backend' },
  { name: 'Python', icon: 'fab fa-python', category: 'backend' },
  { name: 'MySQL', icon: 'fas fa-database', category: 'backend' },
  { name: 'Git', icon: 'fab fa-git-alt', category: 'tools' },
  { name: 'Figma', icon: 'fab fa-figma', category: 'tools' },
  { name: 'VS Code', icon: 'fas fa-code', category: 'tools' },
];

const projects = [
  {
    id: 2,
    title: 'SFP Hub',
    description: 'Plataforma centralizada para gestão e organização de recursos, pensada para reduzir atrito em tarefas recorrentes.',
    category: 'fullstack',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://sfp-hub.vercel.app',
    githubUrl: 'https://github.com/sofiaalaminis/sfp-hub',
    scope: 'Produto',
    year: '2026',
    signal: 'Hub centralizado para organizar recursos e rotinas com mais clareza.',
  },
  {
    id: 3,
    title: 'Izes',
    description: 'Aplicação web com interface responsiva, estrutura moderna e atenção à experiência de uso.',
    category: 'fullstack',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://izes.vercel.app',
    githubUrl: 'https://github.com/sofiaalaminis/izes',
    scope: 'Web app',
    year: '2026',
    signal: 'Interface moderna, fluxo direto e comportamento responsivo.',
  },
  {
    id: 4,
    title: 'Petfy',
    description: 'Sistema para gestão de pets, com funcionalidades de organização, acompanhamento e apoio à adoção responsável.',
    category: 'frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://petfy-topaz.vercel.app',
    githubUrl: 'https://github.com/sofiaalaminis/petfy',
    scope: 'Impacto social',
    year: '2026',
    signal: 'Experiência voltada a cuidado, adoção e organização.',
  },
];

const skillGroups = {
  frontend: {
    title: 'Interface',
    intro: 'HTML, CSS, JavaScript, TypeScript e frameworks para construir interfaces usáveis, responsivas e bem estruturadas.',
  },
  backend: {
    title: 'Lógica',
    intro: 'Base em C, Java, Python, Node.js e MySQL para pensar dados, regras e estruturas com mais precisão.',
  },
  tools: {
    title: 'Entrega',
    intro: 'Ferramentas de prototipação, versionamento e edição para transformar ideia em projeto com organização.',
  },
};

const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/sofiaalamini' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/sofiaalamini/' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/sofia.alamini/' },
];

const filterOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'frontend', label: 'Front-end' },
  { value: 'fullstack', label: 'Full-stack' },
  { value: 'backend', label: 'Back-end' },
];

let activeFilter = 'all';
let submitTimer = null;

const bySelector = (selector) => document.querySelector(selector);

function scrollToSection(href) {
  const section = bySelector(href);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  closeMenu();
}

function renderNavigation() {
  const desktopNav = bySelector('[data-nav]');
  const mobileNav = bySelector('[data-mobile-nav]');
  const markup = navItems
    .map((item) => `<button type="button" data-scroll="${item.href}">${item.label}</button>`)
    .join('');

  desktopNav.innerHTML = markup;
  mobileNav.innerHTML = markup;
}

function renderSkills() {
  const target = bySelector('[data-skills]');
  const grouped = skills.reduce(
    (acc, skill) => {
      acc[skill.category].push(skill);
      return acc;
    },
    { frontend: [], backend: [], tools: [] }
  );

  target.innerHTML = Object.keys(grouped)
    .map((category) => {
      const group = skillGroups[category];
      const tags = grouped[category]
        .map((skill) => `<span><i class="${skill.icon}" aria-hidden="true"></i>${skill.name}</span>`)
        .join('');

      return `
        <article class="skill-cluster reveal">
          <div class="cluster-heading">
            <h3>${group.title}</h3>
            <span>${String(grouped[category].length).padStart(2, '0')}</span>
          </div>
          <p>${group.intro}</p>
          <div class="skill-tags">${tags}</div>
        </article>
      `;
    })
    .join('');
}

function renderFilters() {
  const target = bySelector('[data-filters]');
  target.innerHTML = filterOptions
    .map(
      (option) => `
        <button
          type="button"
          class="${activeFilter === option.value ? 'is-active' : ''}"
          aria-pressed="${activeFilter === option.value}"
          data-filter="${option.value}"
        >
          ${option.label}
        </button>
      `
    )
    .join('');
}

function renderProjects() {
  const target = bySelector('[data-projects]');
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  target.innerHTML = filteredProjects
    .map((project, index) => {
      const tech = project.technologies.map((item) => `<span>${item}</span>`).join('');

      return `
        <article class="project-row reveal">
          <div class="project-index">${String(index + 1).padStart(2, '0')}</div>
          <div class="project-copy">
            <div class="project-meta">
              <span>${project.scope}</span>
              <span>${project.year}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="project-signal">${project.signal}</p>
            <div class="tech-stack">${tech}</div>
          </div>
          <div class="project-preview" aria-label="Previa de ${project.title}">
            <div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span></div>
            <iframe
              title="Previa do projeto ${project.title}"
              src="${project.liveUrl}"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            ></iframe>
          </div>
          <div class="project-actions">
            <a href="${project.liveUrl}" target="_blank" rel="noreferrer">
              <span>Live</span>
              <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noreferrer">
              <span>Código</span>
              <i class="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      `;
    })
    .join('');

  initReveal();
}

function renderSocials() {
  const target = bySelector('[data-socials]');
  target.innerHTML = socialLinks
    .map(
      (social) => `
        <a href="${social.url}" target="_blank" rel="noreferrer" aria-label="${social.name}">
          <i class="${social.icon}" aria-hidden="true"></i>
        </a>
      `
    )
    .join('');
}

function setMenu(open) {
  const button = bySelector('[data-menu-button]');
  const menu = bySelector('[data-mobile-menu]');

  button.classList.toggle('is-open', open);
  menu.classList.toggle('is-open', open);
  button.setAttribute('aria-expanded', String(open));
}

function closeMenu() {
  setMenu(false);
}

function initScrollState() {
  const header = bySelector('[data-header]');

  function update() {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;

    document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    header.classList.toggle('is-scrolled', window.scrollY > 28);
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initPointerEffects() {
  const cursorHalo = bySelector('[data-cursor-halo]');
  const profilePanel = bySelector('.profile-panel');

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return;
  }

  window.addEventListener('pointermove', (event) => {
    document.body.classList.add('has-pointer');
    document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);

    if (cursorHalo) {
      cursorHalo.style.setProperty('--cursor-x', `${event.clientX}px`);
      cursorHalo.style.setProperty('--cursor-y', `${event.clientY}px`);
    }
  }, { passive: true });

  if (profilePanel) {
    profilePanel.addEventListener('pointermove', (event) => {
      const rect = profilePanel.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      profilePanel.style.setProperty('--tilt-x', `${x * 2.4}deg`);
      profilePanel.style.setProperty('--tilt-y', `${y * -2.4}deg`);
    });

    profilePanel.addEventListener('pointerleave', () => {
      profilePanel.style.setProperty('--tilt-x', '0deg');
      profilePanel.style.setProperty('--tilt-y', '0deg');
    });
  }

  document.addEventListener('pointermove', (event) => {
    const row = event.target.closest('.project-row');

    if (!row) {
      return;
    }

    const rect = row.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    row.style.setProperty('--spotlight-x', `${x}%`);
    row.style.setProperty('--spotlight-y', `${y}%`);
  }, { passive: true });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal:not(.is-visible)');

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.16 }
  );

  items.forEach((item, index) => {
    item.style.setProperty('--reveal-delay', `${Math.min(index * 28, 160)}ms`);
    observer.observe(item);
  });
}

function setFieldError(name, message) {
  const field = bySelector(`[name="${name}"]`);
  const error = bySelector(`[data-error-for="${name}"]`);

  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  error.textContent = message;
}

function validateForm(form) {
  const data = new FormData(form);
  const values = {
    name: String(data.get('name') || '').trim(),
    email: String(data.get('email') || '').trim(),
    message: String(data.get('message') || '').trim(),
  };

  const errors = {};

  if (!values.name) {
    errors.name = 'Informe seu nome.';
  }

  if (!values.email) {
    errors.email = 'Informe seu email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Use um email válido.';
  }

  if (!values.message) {
    errors.message = 'Conte um pouco sobre a oportunidade.';
  }

  return errors;
}

function initForm() {
  const form = bySelector('[data-contact-form]');
  const status = bySelector('[data-form-status]');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('input', (event) => {
    if (event.target.name) {
      setFieldError(event.target.name, '');
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const errors = validateForm(form);
    ['name', 'email', 'message'].forEach((name) => setFieldError(name, errors[name] || ''));

    status.className = 'form-status';

    if (Object.keys(errors).length > 0) {
      status.classList.add('error');
      status.textContent = 'Revise os campos marcados antes de enviar.';
      return;
    }

    if (submitTimer) {
      window.clearTimeout(submitTimer);
    }

    button.disabled = true;
    button.firstChild.textContent = 'Enviando...';
    status.textContent = 'Preparando sua mensagem...';

    submitTimer = window.setTimeout(() => {
      button.disabled = false;
      button.firstChild.textContent = 'Enviar mensagem';
      status.classList.add('success');
      status.textContent = 'Mensagem pronta. Sofia retorna assim que possível.';
      form.reset();
    }, 900);
  });
}

function initEvents() {
  document.addEventListener('click', (event) => {
    const scrollTarget = event.target.closest('[data-scroll]');
    const filterTarget = event.target.closest('[data-filter]');

    if (scrollTarget) {
      scrollToSection(scrollTarget.dataset.scroll);
    }

    if (filterTarget) {
      activeFilter = filterTarget.dataset.filter;
      renderFilters();
      renderProjects();
    }
  });

  bySelector('[data-menu-button]').addEventListener('click', () => {
    const isOpen = bySelector('[data-menu-button]').classList.contains('is-open');
    setMenu(!isOpen);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

renderNavigation();
renderSkills();
renderFilters();
renderProjects();
renderSocials();
initScrollState();
initReveal();
initForm();
initEvents();
initPointerEffects();
