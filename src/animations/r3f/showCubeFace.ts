import { SpringRef } from 'react-spring';
import { EulerTuple } from 'three';

export const showCubeFace = (
  api: SpringRef<{
    rotation: EulerTuple;
    lightIntensity: number;
    emissiveIntensity: number;
  }>,
  rotation: EulerTuple,
) => {
  api.start({
    to: async (next) => {
      await next({
        rotation: rotation,
        lightIntensity: 20,
        emissiveIntensity: 10,
        config: {},
      });
    },
  });
};
