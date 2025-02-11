import { LandingSpot } from '@/components/landing-spot';
import { useCubeState } from '@/context/cubeStateProvider';
import { LandingPosition } from '@/types/landingPosition';

export const Introduction = () => {
  const [cubeState] = useCubeState();

  return (
    <div className="h-full-content flex flex-col justify-center gap-2">
      <div>
        <h1 className="text-4xl font-medium text-primary">Jake Goldfarb</h1>
        <h2 className="text-2xl font-medium text-secondary">UI/UX Engineer</h2>
      </div>
      <LandingSpot
        name={LandingPosition.Initial}
        right={500}
        hasDiamond={
          cubeState.currentLandingPosition === LandingPosition.Introduction
        }
        hasDivider
      />
      <LandingSpot
        name={LandingPosition.Introduction}
        right={92}
        hasDiamond={
          cubeState.currentLandingPosition === LandingPosition.Introduction
        }
        hasDivider
      />
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
    </div>
  );
};
