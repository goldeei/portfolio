import { SiteSections } from '@/constants';
import { ExperienceBody } from '../experience/experience-body';
import { ExperienceHeader } from '../experience/experience-header';
import { ExperienceItem } from '../experience/types';
import { Section } from '../section';

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'CompoSecure',
    title: 'Senior Frontend Engineer',
    description: `Architected a TypeScript monorepo using Turborepo, packaging shared auth, validation, and client utilities that became the foundation for all internal manufacturing apps. When new projects start, the authentication layer, API clients, and validation schemas are already there - teams build features instead of rebuilding infrastructure.
Designed a Zod schema library with 80+ schemas for production data, giving the frontend complete type safety from API response to render. Built data pipelines that validate and transform responses before they reach components, catching bad data before it becomes a problem.
Created material verification schemas as a finite state machine with full test coverage on state transitions and real-time event handling. Built transaction aggregation that normalizes nested API data into indexed structures for fast lookups and cleaner rendering.
Set up a React and Vite playground for testing packages in isolation - mock data generation, state machine simulation, and auth flow testing without touching production systems.`,
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
    description: `Built a React and TypeScript dashboard application for production floor labor tracking and employee management, used daily by 700+ manufacturing employees across 80+ kiosk and desktop stations. The apps handle financial transactions, inventory counts, and employee data - unreliable software created real problems.
Designed the UI for 40+ touchscreen kiosks using React Aria Components and Tailwind CSS, prioritizing touch targets and accessibility for factory floor conditions. Created a design system in Figma and shipped it as a React component library to npm with Storybook documentation and Chromatic visual testing.
Worked with the backend team on API contracts and joined bi-monthly scoping sessions with manufacturing ops to gather requirements and translate them into functional interfaces. Implemented live transaction updates over SignalR with reconnection logic so job status stays current across all floor stations.
Built transaction forms using react-hook-form and Zod validation to prevent user errors that directly impact inventory counts and labor cost reporting. Set up frontend state with Jotai and TanStack Query to handle optimistic updates and caching across high-traffic kiosk sessions.
`,
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
    description:
      'Built responsive inventory management and ticketing dashboards with cross-browser and mobile support. Created product mockups in Visio and Adobe Creative Suite to communicate technical requirements and secure stakeholder buy-in. Advised stakeholders on technical feasibility and translated business needs into project specifications.',
    startDate: '09/2021',
    endDate: '04/2023',
    skills: [],
  },
] as const;

export const Experience = () => {
  return (
    <Section id={SiteSections.EXPERIENCE} header="Experience" className="flex flex-col gap-8">
      {EXPERIENCE_ITEMS.map((item) => (
        <div
          key={`${item.company.toLowerCase().replaceAll(' ', '-')}-${item.title.toLowerCase().replaceAll(' ', '-')}`}
        >
          <ExperienceHeader {...item} />
          <ExperienceBody description={item.description} />
        </div>
      ))}
    </Section>
  );
};
