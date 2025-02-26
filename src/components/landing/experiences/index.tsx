import { Tabs } from '../../tabs';
import { composecure, dcs, oit } from './data';
import { Experience } from './experience';

export const Experiences = () => {
  return (
    <div className="flex h-screen flex-col justify-center gap-6">
      <h1 className="text-primary text-4xl font-medium">Experiences</h1>
      <div className="h-full max-h-3/5">
        <Tabs
          defaultTab={0}
          tabs={[
            {
              label: 'composecure',
              subLabel: composecure.date,
              value: 'composecure',
              content: {
                header: 'UI/UX Engineer',
                body: <Experience {...composecure} />,
              },
            },
            {
              label: 'Rutgers - dcs',
              subLabel: dcs.date,
              value: 'dcs',
              content: {
                header: 'Special Project Manager/Web Developer',
                body: <Experience {...dcs} />,
              },
            },
            {
              label: 'Rutgers - OIT',
              subLabel: oit.date,
              value: 'oit',
              content: {
                header: 'Multimedia Specialist',
                body: <Experience {...oit} />,
              },
            },
          ]}
        />
      </div>
    </div>
  );
};
