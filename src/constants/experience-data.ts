import { ExperienceItem } from '@/components/experience';

const react = { label: 'React', iconKey: 'react' } as const;
const typescript = { label: 'TypeScript', iconKey: 'typescript' } as const;
const tailwind = { label: 'Tailwind CSS', iconKey: 'tailwind' } as const;
const vite = { label: 'Vite', iconKey: 'vite' } as const;
const figma = { label: 'Figma', iconKey: 'figma' } as const;
const python = { label: 'Python', iconKey: 'python' } as const;
const django = { label: 'Django', iconKey: 'django' } as const;

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'Clever Real Estate',
    title: 'Senior Engineer',
    description: [
      'Re-architected the core deal management form onto TanStack Form, collapsing three drifting state systems into a single source of truth and turning field updates from a multi-system headache into a simple local edit. Shifted the platform to trunk-based deployment with GitHub-native CI/CD and required checks, letting QA validate on live branch previews instead of blocked staging queues. Leveraged Claude to rapidly ramp up on Python and Django while engineering an event-sourced queue system for agent matching.',
    ],
    startDate: 'March 2026',
    endDate: 'Aug 2026',
    skills: [react, typescript, tailwind, python, django],
  },
  {
    company: 'CompoSecure',
    title: 'Senior Frontend Engineer',
    description: [
      'Architected a TypeScript monorepo with Turborepo to eliminate rebuilding auth, validation, and API logic in every internal app. Built shared packages for authentication, API clients, and a type-safe data layer with Zod schemas where raw responses get validated and transformed before hitting components. Bad data gets caught before it breaks anything, and patterns get imported instead of rewritten.',
    ],
    startDate: 'Jan 2026',
    endDate: 'March 2026',
    skills: [react, typescript, tailwind, vite, figma, { iconKey: 'turborepo', label: 'Turborepo' }],
  },
  {
    company: 'CompoSecure',
    title: 'Frontend Engineer',
    description: [
      'Built a production floor management system for 700+ manufacturing employees across kiosk and desktop stations, using context-aware validation to catch errors before they affect downstream inventory counts, finances, and labor reporting.',
      'Created a component library for the production floor interfaces with touch-friendly designs built for factory floor conditions. Shipped with Storybook documentation and visual regression testing. Published to npm for use across internal apps.',
    ],
    startDate: 'Apr 2023',
    endDate: 'Jan 2026',
    skills: [react, typescript, tailwind, vite, figma, { iconKey: 'storybook', label: 'Storybook' }],
  },
  {
    company: 'Rutgers University',
    title: 'Web Developer',
    description: [
      'Built responsive inventory management and ticketing dashboards with cross-browser and mobile support. Created mockups and translated stakeholder requirements into technical specifications to move projects forward.',
    ],
    startDate: 'Sep 2021',
    endDate: 'Apr 2023',
    skills: [
      { iconKey: 'html', label: 'HTML' },
      { iconKey: 'django', label: 'Django' },
      { iconKey: 'visio', label: 'Visio' },
      { iconKey: 'javascript', label: 'JavaScript' },
      { iconKey: 'python', label: 'Python' },
      { iconKey: 'adobe', label: 'Adobe' },
      { iconKey: 'scss', label: 'SCSS' },
    ],
  },
];
