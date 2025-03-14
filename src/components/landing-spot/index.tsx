'use client';

import { useCubeState } from '@/context/cubeStateProvider';
import { LandingPosition } from '@/types/landingPosition';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { degToRad } from 'three/src/math/MathUtils.js';

import { DEFAULT_SUBJECT_ROTATION } from '../scene/constants';
import { Diamond } from './diamond';
import { getLandingPosition } from './getLandingPosition';

type OffsetValue = number;
type LandingSpotProps = {
  /** Name for accessing position in cube state */
  name: LandingPosition;
  position?: 'absolute' | 'relative';
  className?: string;
  isVisible?: boolean;
  hasDivider?: boolean;
  hasDiamond?: boolean;
  debug?: boolean;
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
    position = 'relative',
    className,
    left = undefined,
    right = undefined,
    isVisible = true,
    hasDivider = false,
    hasDiamond = true,
    debug = false,
  } = props;

  const diamondRef = useRef<HTMLDivElement>(null);

  const [_, dispatch] = useCubeState();

  useEffect(() => {
    const element = diamondRef.current;

    const updateLandingPosition = () => {
      if (!element) return;

      dispatch({
        type: 'SET_LANDING_POSITION',
        payload: {
          name,
          position: getLandingPosition(element.getBoundingClientRect()),
        },
      });
    };

    updateLandingPosition();

    window.addEventListener('resize', updateLandingPosition);
    window.addEventListener('scroll', updateLandingPosition);

    return () => {
      window.removeEventListener('resize', updateLandingPosition);
      window.removeEventListener('scroll', updateLandingPosition);
    };
  }, [dispatch, name]);

  return (
    <div
      className={clsx(
        'w-full',
        position,
        hasDivider && 'bg-accent h-1 rounded inset-shadow-sm',
        !hasDivider && 'h-0',
        !isVisible && 'opacity-0',
        className,
      )}
    >
      <div
        className={clsx('absolute top-1/2 -translate-y-1/2')}
        style={{ left: `${left}px`, right: `${right}px` }}
      >
        <Diamond
          ref={diamondRef}
          className={clsx('size-36', hasDiamond && 'bg-accent inset-shadow-sm')}
          style={{
            transform: `rotateX(${degToRad(90) - DEFAULT_SUBJECT_ROTATION.x}rad)`,
          }}
        />
        {debug && (
          <div className="bg-secondary/50 absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border">
            <div className="text-secondary absolute top-full left-1/2 -translate-x-1/2 text-center text-xs font-bold">
              {name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
