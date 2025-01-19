import { SpringRef } from 'react-spring';
import { EulerTuple } from 'three';

export const showCubeFace = (
  api: SpringRef<{ rotation: EulerTuple }>,
  rotation: EulerTuple,
) => {
  api.start({
    to: async (next) => {
      await next({
        rotation: rotation,
        config: {},
      });
    },
  });
};
