import { easings, SpringRef } from 'react-spring';
import { Vector3Tuple } from 'three';

/**
 * Animates a jump motion using a SpringRef.
 *
 * This function animates an object to jump to a specified height and then return to the original position.
 * It uses different durations and easing functions for the upward and downward motions.
 * For use with a react-spring/three `WithAnimation` typed element.
 *
 * @param api - The SpringRef controlling the animation.
 * @param jumpHeight - The height to which the object should jump.
 * @param durationUp - The duration of the upward motion (default is 300ms).
 * @param durationDown - The duration of the downward motion (default is 200ms).
 */
export const jump = (
  api: SpringRef<{ position: Vector3Tuple }>,
  jumpHeight: number,
  durationUp: number = 300,
  durationDown: number = 200,
) => {
  api.start({
    to: async (next) => {
      await next({
        position: [0, jumpHeight, 0],
        config: { duration: durationUp, easing: easings.easeOutQuad },
      });
      await next({
        position: [0, 0, 0],
        config: { duration: durationDown, easing: easings.easeInQuad },
      });
    },
  });
};
