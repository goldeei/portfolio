import { Tabs } from '../../tabs';
import { Experience } from './experience';
import { ExperienceProps } from './types';

const composecure: ExperienceProps = {
  startDate: new Date('04/23/2023'),
  endDate: 'Present',
  summary:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium itaque doloribus repellendus! Aperiam placeat aspernatur cum quam, enim obcaecati, corrupti impedit doloribus exercitationem dignissimos reprehenderit laudantium, quod molestias assumenda! Ipsam.',
  achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
  projects: ['project 1', 'project 2', 'project 3'],
};

export const Experiences = () => {
  return (
    <div className="flex h-screen flex-col justify-center gap-6">
      <h1 className="text-4xl font-medium text-primary">Experiences</h1>
      <Tabs
        defaultTab={0}
        tabs={[
          {
            label: 'composecure',
            value: 'composecure',
            content: {
              header: 'Composecure',
              body: <Experience {...composecure} />,
            },
          },
          {
            label: 'Tab 2',
            value: 'tab-2',
            content: { header: 'Tab 2 Header', body: <div>Tab 2 Content</div> },
          },
          {
            label: 'Tab 3',
            value: 'tab-3',
            content: { header: 'Tab 3 Header', body: <div>Tab 3 Content</div> },
          },
        ]}
      />
    </div>
  );
};
