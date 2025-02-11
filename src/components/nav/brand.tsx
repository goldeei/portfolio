import { Logo } from '@/assets/icons';
import { useCubeState } from '@/context/cubeStateProvider';
import { LandingPosition } from '@/types/landingPosition';

import { Button } from '../button';
import { LandingSpot } from '../landing-spot';

export const Brand = () => {
  const [cubeState] = useCubeState();

  return (
    <div className="relative flex size-fit items-center justify-center">
      <LandingSpot
        className="top-12 -z-50"
        position="absolute"
        name={LandingPosition.Initial}
        left={-40}
        debug
        isVisible={cubeState.currentLandingPosition === LandingPosition.Initial}
      />
      <Button
        variant="link"
        className="z-10 size-16 border-none p-0 shadow-inner transition-transform hover:-translate-y-0.5 [&_svg]:size-full"
      >
        <Logo />
      </Button>
    </div>
  );
};
