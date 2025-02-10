import { useCubeState } from '@/context/cubeStateProvider';
import { LandingPosition } from '@/types/landingPosition';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { degToRad } from 'three/src/math/MathUtils.js';

import { DEFAULT_SUBJECT_ROTATION } from '../scene/constants';
import { Diamond } from './diamond';

type OffsetValue = number;
type LandingSpotProps = {
  /** Name for accessing position in cube state */
  name: LandingPosition;
  isVisible?: boolean;
  hasDivider?: boolean;
} & (
  | {
      /**  Offset in px */
      left: OffsetValue;
      right?: never;
    }
  | {
      /**  Offset in px */
      right: number;
      left?: never;
    }
);
export const LandingSpot = ({ ...props }: LandingSpotProps) => {
  const {
    name,
    left = undefined,
    right = undefined,
    isVisible = true,
    hasDivider = false,
  } = props;

  const diamondRef = useRef<HTMLDivElement>(null);

  const [_, dispatch] = useCubeState();

  useEffect(() => {
    const e = diamondRef.current;
    if (e) {
      const handlePositionChange = () => {
        const { left, top, width, height } = e.getBoundingClientRect();

        const getCenter = (coord: number, dimension: number) =>
          coord + dimension / 2;

        const x = getCenter(left, width),
          y = getCenter(top, height);

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
    <div
      className={clsx(
        'relative w-full',
        hasDivider && 'h-1 rounded bg-accent shadow-inner',
        !isVisible && 'opacity-0',
      )}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ left: `${left}px`, right: `${right}px` }}
      >
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
