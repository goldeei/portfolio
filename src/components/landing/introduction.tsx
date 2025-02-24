import { LandingSpot } from '@/components/landing-spot';
import { LandingPosition } from '@/types/landingPosition';
import { Tabs } from '../tabs';

export const Introduction = () => {
  return (
    <div className="h-full-content flex flex-col justify-center gap-2">
      <div>
        <h1 className="text-4xl font-medium text-primary">Jake Goldfarb</h1>
        <h2 className="text-2xl font-medium text-secondary">UI/UX Engineer</h2>
      </div>
      <LandingSpot name={LandingPosition.Introduction} right={100} hasDivider />
      {/* TODO change this text */}
      <p className="w-[500px] text-secondary">
        I’m a{' '}
        <span className="font-bold text-primary">
          web application developer with 5+ years
        </span>{' '}
        specializing in creating dashboards for presenting, interacting with,
        and managing complex data. I like exploring unique ways to make data
        digestible and experimenting with new web design methods.
      </p>
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
