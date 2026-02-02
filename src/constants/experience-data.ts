import { ExperienceItem } from '@/components/experience';

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'CompoSecure',
    title: 'Senior Frontend Engineer',
    description: [
      'Architected a TypeScript monorepo with Turborepo that eliminated infrastructure duplication across all internal manufacturing apps. Teams now ship features faster with shared auth, validation, and API clients built once and reused everywhere.',
      'Built a type-safe data layer with 80+ Zod schemas and finite state machines for complex production workflows. Transformed unreliable API responses into validated, indexed structures before they reach components.',
    ],
    startDate: '01/2026',
    endDate: 'Present',
    skills: [
      { label: 'React', iconKey: 'react' },
      { label: 'TypeScript', iconKey: 'typescript' },
      { label: 'Turborepo', iconKey: 'turborepo' },
      { label: 'Tailwind CSS', iconKey: 'tailwind' },
      { label: 'Vite', iconKey: 'vite' },
    ],
  },
  {
    company: 'CompoSecure',
    title: 'Frontend Engineer',
    description: [
      'Built a production floor management system used daily by 700+ manufacturing employees across 80+ touchscreen kiosks and desktop stations. Designed accessible touch interfaces and forms with real-time validation to prevent costly inventory and labor reporting errors.',
      'Created a component library published to npm with full Storybook documentation and visual regression testing. Collaborated with manufacturing ops and backend teams to deliver features that directly improved shop floor efficiency.',
    ],
    startDate: '04/2023',
    endDate: '01/2026',
    skills: [
      { label: 'React', iconKey: 'react' },
      { label: 'TypeScript', iconKey: 'typescript' },
      { label: 'Tailwind CSS', iconKey: 'tailwind' },
    ],
  },
  {
    company: 'Rutgers University',
    title: 'Web Developer/Special Projects Manager',
    description: [
      'Developed responsive inventory management and ticketing dashboards with full cross-browser and mobile support. Translated stakeholder requirements into technical specifications and created mockups to secure project approval.',
    ],
    startDate: '09/2021',
    endDate: '04/2023',
    skills: [],
  },
];
