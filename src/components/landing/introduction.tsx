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
        defaultValue="tab-1"
        tabs={[
          { label: 'Tab 1', value: 'tab-1', content: <div>Tab 1 Content</div> },
          { label: 'Tab 2', value: 'tab-2', content: <div>Tab 2 Content</div> },
          { label: 'Tab 3', value: 'tab-3', content: <div>Tab 3 Content</div> },
          { label: 'Tab 4', value: 'tab-4', content: <div>Tab 4 Content</div> },
          { label: 'Tab 5', value: 'tab-5', content: <div>Tab 5 Content</div> },
          { label: 'Tab 6', value: 'tab-6', content: <div>Tab 6 Content</div> },
        ]}
      />
    </div>
  );
};
