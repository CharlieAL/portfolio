export const experiences = [
  {
    title: 'Software Engineer',
    company: 'NOGSON',
    period: 'August 2024 - September 2025',
    description: [
      'Built cross-platform mobile applications using React Native (Expo), transforming Figma designs into scalable user interfaces.',
      'Developed backend services with Node.js (TypeScript) and GraphQL, integrating MongoDB for data persistence.',
      'Leveraged React Query (TanStack Query) for state management and data caching, improving performance and user experience.',
      'Implemented secure authentication with OTP, using Redis for token management and email delivery of verification codes.',
      'Applied best practices in architecture, testing (TDD), and CI/CD pipelines to ensure scalability and maintainability.',
    ],
    technologies: [
      'React',
      'React Native (Expo)',
      'Next.js',
      'Vite.js',
      'Tailwind CSS',
      'Figma',
      'React Query (TanStack Query)',
      'GraphQL',
      'Node.js',
      'Test Driven Development (TDD)',
      'GitHub Actions',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'UNDER APPS',
    period: 'August 2023 -  July 2024',
    description: [
      'I designed and developed full-stack solutions with React (Vite.js), Next js, and tRPC, implementing prefetching and strategic caching with TanStack Query to reduce latency.',
      'Implemented testing with Jest and React Testing Library, following Test-Driven Development (TDD) practices to ensure code quality, reliability, and maintainability.',
      'I created API RESTful and type-safe APIs with Node.js, Express, and tRPC, integrating validation with Zod and Drizzle, Prisma ORM for secure queries to PostgreSQL, MongoDB, and MySQL.',
      'I contributed to the development of microservices.',
      'I led the development of a web/desktop application, starting with UI/UX design in Figma where I prototyped interactive interfaces.',
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'React.js',
      'Expo',
      'Figma',
      'Test Driven Development (TDD)',
      'Vitest',
      'Jest',
      'React Testing Library',
      'Zod',
      'Drizzle ORM',
      'Prisma ORM',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'NOGSON',
    period: '2019 - 2020',
    description: [
      'I led the design and implementation of a web application using Next.js to optimize file management within the company.',
      'I identified issues related to file management and worked closely with internal teams to understand their specific requirements and challenges.',
      'I designed and implemented functionalities that enabled efficient and secure file management, including uploading, storing, organizing and searching documents.',
      'The implementation resulted in significant improvement in operational efficiency, reducing time spent on file management and improving accessibility and version control.',
      'I provided training and ongoing support to end users to ensure a smooth transition and maximize the benefits of the new tool.',
    ],
    // TypeScript - NodeJS - REST API - React js - Next js - Figma - Mongo DB - Cloudify - tRPC - Zod
    technologies: [
      'TypeScript',
      'Node.js',
      'React.js',
      'Next.js',
      'Figma',
      'MongoDB',
      'Cloudinary',
      'tRPC',
      'Zod',
    ],
  },
];

export const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'SaaS platform for digital sellers with custom subdomains, Stripe Connect payments, and isolated store data.Includes shopping libraries, reviews, and real-time metrics dashboards. Features strategic caching for large catalogs and role-based admin and merchant dashboards.',

    technologies: [
      'TypeScript',
      'NodeJS',
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Stripe',
    ],
    github: 'https://github.com/CharlieAL/multitenant-ecommerce',
  },
  {
    title: 'TICKETS APP',
    description:
      'A web-based platform enabling users to create events, manage ticket sales, and generate QR-coded tickets for attendees, streamlining the event management and ticket distribution process, hexagonal architecture.',

    technologies: [
      'Kotlin',
      'Spring Boot',
      'PostgreSQL',
      'MongoDB',
      'Tailwind CSS',
      'Docker',
      'Docker Compose',
    ],
    github: 'https://github.com/CharlieAL/tickets',
  },
  {
    title: 'YT-CLONE',
    description:
      'A web-based video platform featuring adaptive streaming with Mux integration, cross-device viewing history, and real-time social interactions, empowering creators with a powerful studio for content management and live analytics.',

    technologies: [
      'TypeScript',
      'NodeJS',
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Mux',
    ],
    github: 'https://github.com/CharlieAL/yt-clone',
  },
];

type Skill = {
  name: string;
  details: string[];
};

export const technicalSkills: Skill[] = [
  { name: 'language', details: ['JavaScript', 'TypeScript', 'Kotlin'] },
  {
    name: 'frontend',
    details: [
      'React js',
      'Next js',
      'React Native (Expo)',
      'Astro',
      'Html',
      'CSS',
      'Tailwind CSS',
    ],
  },
  { name: 'backend', details: ['Node js', 'Spring Boot'] },
  {
    name: 'testing',
    details: [
      'TDD',
      'Jest',
      'React Testing Library',
      'Vitest',
      'playwright (e2e)',
    ],
  },
  {
    name: 'devops',
    details: ['CI/CD: GitHub Actions', 'Docker', 'Docker Compose'],
  },
  { name: 'best practices', details: ['Clean Code', 'SOLID principles'] },
];
