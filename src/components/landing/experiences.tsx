import { Tabs } from '../tabs';

export const Experiences = () => {
  return (
    <div className="h-full-content flex flex-col justify-center">
      <div>Experiences</div>
      <Tabs
        defaultTab={0}
        tabs={[
          {
            label: 'Tab1sdsad',
            value: 'tab-1',
            content: { header: 'Tab 1 Header', body: <div>Tab 1 Content</div> },
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
