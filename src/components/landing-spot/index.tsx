import { useCubeState } from '@/context/cubeStateProvider';
import { useEffect, useRef } from 'react';
import { degToRad } from 'three/src/math/MathUtils.js';

import { DEFAULT_SUBJECT_ROTATION } from '../scene/constants';
import { Diamond } from './diamond';

type LandingSpotProps = {
  name: string;
};
export const LandingSpot = ({ ...props }: LandingSpotProps) => {
  const { name } = props;

  const diamondRef = useRef<HTMLDivElement>(null);

  const [_, dispatch] = useCubeState();

  useEffect(() => {
    const e = diamondRef.current;
    if (e) {
      const handlePositionChange = () => {
        const { x, y } = e.getBoundingClientRect();
        dispatch({
          type: 'SET_LANDING_POSITION',
          payload: { name, position: { x, y } },
        });
      };

      handlePositionChange();

      window.addEventListener('resize', handlePositionChange);
      window.addEventListener('scroll', handlePositionChange);

      return () => {
        window.removeEventListener('resize', handlePositionChange);
        window.removeEventListener('scroll', handlePositionChange);
      };
    }
  }, [dispatch, name]);

  return (
    <div className="relative h-1 w-full rounded bg-accent shadow-inner">
      <div className="absolute right-24 top-1/2 -translate-y-1/2">
        <Diamond
          ref={diamondRef}
          className="size-36 bg-accent shadow-inner"
          style={{
            transform: `rotateX(${degToRad(90) - DEFAULT_SUBJECT_ROTATION.x}rad)`,
          }}
        />
      </div>
    </div>
  );
};
