import { Tabs } from '../../tabs';
import { composecure, dcs, oit } from './data';
import { Experience } from './experience';

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
            label: 'Rutgers - dcs',
            value: 'dcs',
            content: {
              header: 'Rutgers - Digital Classroom Services',
              body: <Experience {...dcs} />,
            },
          },
          {
            label: 'Rutgers - OIT',
            value: 'oit',
            content: {
              header: 'Rutgers - Office of Information Technology',
              body: <Experience {...oit} />,
            },
          },
        ]}
      />
    </div>
  );
};
