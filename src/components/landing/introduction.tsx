import { LandingSpot } from '@/components/landing-spot';
import { LandingPosition } from '@/types/landingPosition';

export const Introduction = () => {
  return (
    <div className="h-full-content flex flex-col justify-center gap-2">
      <div>
        <h1 className="text-primary text-4xl font-medium">Jake Goldfarb</h1>
        <h2 className="text-secondary text-2xl font-medium">UI/UX Engineer</h2>
      </div>
      <LandingSpot name={LandingPosition.Introduction} right={100} hasDivider />
      {/* TODO change this text */}
      <p className="text-secondary w-[500px] max-w-full">
        I’m a{' '}
        <span className="text-primary font-bold">
          web application developer with 5+ years
        </span>{' '}
        specializing in creating dashboards for presenting, interacting with,
        and managing complex data. I like exploring unique ways to make data
        digestible and experimenting with new web design methods.
      </p>
    </div>
  );
};
