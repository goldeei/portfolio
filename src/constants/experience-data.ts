import { ExperienceItem } from '@/components/experience';

const react = { label: 'React', iconKey: 'react' } as const;
const typescript = { label: 'TypeScript', iconKey: 'typescript' } as const;
const tailwind = { label: 'Tailwind CSS', iconKey: 'tailwind' } as const;
const vite = { label: 'Vite', iconKey: 'vite' } as const;
const figma = { label: 'Figma', iconKey: 'figma' } as const;

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'CompoSecure',
    title: 'Senior Frontend Engineer',
    description: [
      'Architected a TypeScript monorepo with Turborepo that eliminated infrastructure duplication across all internal manufacturing apps. Teams now ship features faster with shared auth, validation, and API clients built once and reused everywhere.',
      'Built a type-safe data layer with 80+ Zod schemas and finite state machines for complex production workflows. Transformed unreliable API responses into validated, indexed structures before they reach components.',
    ],
    startDate: 'Jan 2026',
    endDate: 'Present',
    skills: [react, typescript, tailwind, vite, figma, { iconKey: 'turborepo', label: 'Turborepo' }],
  },
  {
    company: 'CompoSecure',
    title: 'Frontend Engineer',
    description: [
      'Built a production floor management system used daily by 700+ manufacturing employees across 80+ touchscreen kiosks and desktop stations. Designed accessible touch interfaces and forms with real-time validation to prevent costly inventory and labor reporting errors.',
      'Created a component library published to npm with full Storybook documentation and visual regression testing. Collaborated with manufacturing ops and backend teams to deliver features that directly improved shop floor efficiency.',
    ],
    startDate: 'Apr 2023',
    endDate: 'Jan 2026',
    skills: [react, typescript, tailwind, vite, figma, { iconKey: 'storybook', label: 'Storybook' }],
  },
  {
    company: 'Rutgers University',
    title: 'Web Developer',
    description: [
      'Developed responsive inventory management and ticketing dashboards with full cross-browser and mobile support. Translated stakeholder requirements into technical specifications and created mockups to secure project approval.',
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
