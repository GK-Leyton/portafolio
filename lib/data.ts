export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  type: string;
  bullets: string[];
  stack: string[];
};

export type ProjectItem = {
  title: string;
  tag: string;
  year: string;
  desc: string;
  stack: string[];
  role: string;
  link: string | null;
};

export type StackGroup = {
  cat: string;
  items: string[];
};

export type EducationItem = {
  title: string;
  org: string;
  year: string;
  status: string;
};

export const DATA = {
  name: 'Heider Sait Leyton Montiel',
  shortName: 'Heider Leyton',
  initials: 'HL',
  role: 'Full Stack Developer',
  location: 'Bogotá, Colombia',
  email: 'heiderleyton22@gmail.com',
  github: 'https://github.com/GK-Leyton',
  linkedin: 'https://linkedin.com/in/heider-sait-leyton-montiel',
  pitch:
    'Desarrollador Full Stack con experiencia en arquitectura de sistemas escalables. Especializado en Laravel, Next.js, Flutter y APIs REST. Comprometido con código de calidad y aprendizaje continuo.',
  stats: [
    { v: '5+', l: 'Proyectos enviados' },
    { v: '2', l: 'Años escribiendo código' },
    { v: '15+', l: 'Tecnologías en stack' },
  ],
  about: [
    'Soy desarrollador Full Stack con base en Bogotá. Disfruto las piezas del software que la mayoría no ve: la forma de una API, cómo escala una base de datos, qué tan invisible se siente una autenticación bien hecha.',
    'Actualmente lidero la reestructuración del sistema de producción interno en Pulpa Fruit, donde diseño la arquitectura, implemento autenticación de doble factor con dispositivos de confianza y construyo vistas dinámicas que crecen con el negocio.',
    'Mi objetivo es simple: enviar software que se sienta sólido. Aprender continuamente y dejar cada base de código mejor de como la encontré.',
  ],
  experience: [
    {
      company: 'Pulpa Fruit',
      role: 'Desarrollador Jr Full Stack',
      period: 'Ene 2025 — Presente',
      type: 'Tiempo completo',
      bullets: [
        'Reestructuración completa del sistema de producción interno.',
        'Implementación de 2FA y gestión de dispositivos de confianza.',
        'Diseño de vistas dinámicas escalables sobre Laravel + SQL Server.',
      ],
      stack: ['Laravel', 'SQL Server', 'Tailwind', 'Flutter', 'Python'],
    },
    {
      company: 'TCS Solution Center',
      role: 'Pasante Desarrollo de Software',
      period: 'Feb 2025 — Ago 2025',
      type: 'Pasantía · 6 meses',
      bullets: [
        'Desarrollo de APIs REST para el sector banca.',
        'Vistas en Angular conectadas a microservicios en Spring Boot.',
        'Documentación con Swagger y trabajo en flujos Git Flow.',
      ],
      stack: ['Spring Boot', 'Angular', 'Java', 'Swagger'],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: 'Sistema de Producción · Pulpa Fruit',
      tag: 'Empresarial',
      year: '2025',
      desc:
        'Reestructuración del sistema interno con módulos de autenticación avanzada, vistas dinámicas y reportes en tiempo real.',
      stack: ['Laravel', 'SQL Server', 'Tailwind', 'Flutter'],
      role: 'Líder técnico',
      link: null,
    },
    {
      title: 'Verificador de Pensum Universitario',
      tag: 'Proyecto de grado',
      year: '2025',
      desc:
        'Software de análisis de pensum académico. Detecta inconsistencias y sugirió una reestructuración real adoptada por la universidad.',
      stack: ['Next.js', 'Node.js', 'Sequelize', 'PostgreSQL'],
      role: 'Full Stack',
      link: 'https://github.com/GK-Leyton',
    },
    {
      title: 'AdministradosHD',
      tag: 'Personal',
      year: '2024',
      desc:
        'Gestor integral de deudas para prestamistas. Web en PHP/MySQL más versión móvil en Flutter con sincronización.',
      stack: ['PHP', 'MySQL', 'Bootstrap', 'Flutter'],
      role: 'Solo developer',
      link: 'https://github.com/GK-Leyton',
    },
    {
      title: 'Gnosis',
      tag: 'Académico',
      year: '2024',
      desc:
        'Gestor de documentos técnicos con trazabilidad sobre Android. Backend en PHP y un WebServer embebido para entornos sin red.',
      stack: ['Kotlin', 'PHP', 'Android WebServer'],
      role: 'Proyecto final',
      link: 'https://github.com/GK-Leyton',
    },
    {
      title: 'Barcraft',
      tag: 'Personal',
      year: '2024',
      desc:
        'App móvil de exploración de cócteles. Búsqueda por ingrediente, favoritos y consumo de APIs REST públicas.',
      stack: ['Flutter', 'Dart', 'APIs REST'],
      role: 'Solo developer',
      link: 'https://github.com/GK-Leyton',
    },
  ] as ProjectItem[],
  stack: [
    {
      cat: 'Backend',
      items: ['Laravel', 'Spring Boot', 'Node.js', 'PHP', 'REST APIs'],
    },
    {
      cat: 'Frontend',
      items: ['Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
    {
      cat: 'Mobile',
      items: ['Flutter', 'Kotlin', 'Java', 'Dart'],
    },
    {
      cat: 'Bases de datos',
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Sequelize'],
    },
    {
      cat: 'Herramientas',
      items: ['Git', 'GitHub', 'Swagger', 'Docker', 'Python', 'Inno Setup'],
    },
  ] as StackGroup[],
  education: [
    {
      title: 'Tecnólogo en Sistematización de Datos',
      org: 'Universidad Distrital',
      year: '2025',
      status: 'Certificado',
    },
    {
      title: 'Ingeniería en Telemática',
      org: 'Universidad Distrital',
      year: '2026',
      status: 'En curso',
    },
    {
      title: 'Curso completo de Flutter y Dart',
      org: 'Udemy · 21h',
      year: 'Oct 2025',
      status: 'Certificado',
    },
    {
      title: 'Cursos de IA y LLMs',
      org: 'Anthropic',
      year: '2025',
      status: 'En progreso',
    },
  ] as EducationItem[],
};
