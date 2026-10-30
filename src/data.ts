export const navItems = [
  { id: 'home', label: 'Inicio', href: '#home' },
  { id: 'about', label: 'Sobre', href: '#about' },
  { id: 'skills', label: 'Stack', href: '#skills' },
  { id: 'projects', label: 'Projetos', href: '#projects' },
  { id: 'contact', label: 'Contato', href: '#contact' },
] as const;

export const skills = [
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
] as const;

export const projects = [
  {
    id: 1,
    title: 'Calangos',
    description: 'Plataforma centralizada para gestão e organização de recursos, pensada para reduzir atrito em tarefas recorrentes.',
    category: 'fullstack',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://calangos-ruddy.vercel.app',
    githubUrl: 'https://github.com/sofiaalamini/Calangos',
    scope: 'Produto',
    year: '2026',
    signal: 'Hub centralizado para organizar recursos e rotinas com mais clareza.',
  },
  {
    id: 2,
    title: 'Izes',
    description: 'Aplicação web com interface responsiva, estrutura moderna e atenção à experiência de uso.',
    category: 'frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://izes-site.vercel.app',
    githubUrl: 'https://github.com/sofiaalamini/izes-site',
    scope: 'Web app',
    year: '2026',
    signal: 'Interface moderna, fluxo direto e comportamento responsivo.',
  },
  {
    id: 3,
    title: 'Petfy',
    description: 'Sistema para gestão de pets, com funcionalidades de organização, acompanhamento e apoio à adoção responsável.',
    category: 'frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://petfy-topaz.vercel.app',
    githubUrl: 'https://github.com/sofiaalamini/petfy',
    scope: 'Impacto social',
    year: '2026',
    signal: 'Experiência voltada a cuidado, adoção e organização.',
  },
] as const;

export const skillGroups = {
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

export const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/sofiaalamini' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/sofiaalamini/' },
] as const;

export const filterOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'frontend', label: 'Front-end' },
  { value: 'fullstack', label: 'Full-stack' },
  { value: 'backend', label: 'Back-end' },
] as const;

