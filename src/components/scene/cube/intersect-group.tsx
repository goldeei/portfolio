import { getRoundedBoxMaxY } from '@/lib/3d-utils';
import { useCallback, useMemo } from 'react';
import { degToRad } from 'three/src/math/MathUtils.js';

import { DEFAULT_CUBE_PROPS } from '../constants';
import { PlaneIntersect } from '../plane-intersect';
import { IntersectedFaces, IntersectOption } from './types';

interface IntersectGroupProps {
  intersectedFaces: IntersectedFaces;
  onFaceIntersect: (intersectedFaces: IntersectedFaces) => void;
}

export const IntersectGroup = ({ ...props }: IntersectGroupProps) => {
  const { intersectedFaces, onFaceIntersect } = props;
  const { rotation, args, radius } = DEFAULT_CUBE_PROPS;

  const cornerOffset = useMemo(
    () => (args[0] * Math.sqrt(3)) / 3 - radius,
    [args, radius],
  );

  const handleIntersect = useCallback(
    (name: IntersectOption, isIntersected: boolean) => {
      const face = name;
      if (intersectedFaces[face] !== isIntersected) {
        return onFaceIntersect({
          ...intersectedFaces,
          [face]: isIntersected,
        });
      }
    },
    [intersectedFaces, onFaceIntersect],
  );

  return (
    <group>
      <PlaneIntersect
        name="left"
        onIntersectChange={handleIntersect}
        size={[args[0], args[1]]}
        position={[-cornerOffset, 0, 0]}
        rotation={[rotation[0], 0, 0]}
      />
      <PlaneIntersect
        name="right"
        onIntersectChange={handleIntersect}
        size={[args[0], args[1]]}
        position={[cornerOffset, 0, 0]}
        rotation={[rotation[0], 0, 0]}
      />
      <PlaneIntersect
        name="top"
        onIntersectChange={handleIntersect}
        rotation={[-degToRad(90) + rotation[0], 0, -rotation[1]]}
        size={[args[0], args[0]]}
        position={[0, getRoundedBoxMaxY(args[1], 'top', 0), 0.15]}
      />
    </group>
  );
};
