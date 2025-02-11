import { LandingPosition } from '@/types/landingPosition';
import { Transition, useAnimation } from 'motion/react';
import { useEffect, useState } from 'react';

interface AnimationParams {
  positions: { x: number | number[]; y: number | number[] };
  config?: Transition;
}

export const useAnimateToPosition = (
  animationParams: AnimationParams,
  startAnimation: boolean = true,
  animatingTo: LandingPosition | null,
) => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  // Start animation
  useEffect(() => {
    if (startAnimation) {
      setIsAnimating(true);
      controls
        .start({
          x: animationParams.positions.x,
          y: animationParams.positions.y,
          transition: {
            x: animationParams.positions.x,
            y: animationParams.positions.y,
          },
        })
        .then(() => setIsAnimating(false));
    }
  }, [
    animatingTo,
    animationParams.positions.x,
    animationParams.positions.y,
    controls,
    startAnimation,
  ]);

  // Interrupt and transition to different animation if an animation triggers when another is playing
  useEffect(() => {
    if (animatingTo && isAnimating) {
      controls.stop();
      controls.start({
        x: animationParams.positions.x,
        y: animationParams.positions.y,
      });
    }
  }, [
    animatingTo,
    animationParams.positions.x,
    animationParams.positions.y,
    controls,
    isAnimating,
  ]);

  return controls;
};
