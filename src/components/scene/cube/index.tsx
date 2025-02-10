import { useState } from 'react';

import { DEFAULT_CUBE_PROPS } from '../constants';
import { CubeMesh } from './cube-mesh';
import { IntersectGroup } from './intersect-group';
import { IntersectedFaces } from './types';

export const Cube = () => {
  // TODO Fix missing "none"
  const [intersectedFaces, setIntersectedFaces] = useState<IntersectedFaces>({
    top: false,
    left: false,
    right: false,
  });

  const handleFaceIntersectChange = (intersectedFaces: IntersectedFaces) =>
    setIntersectedFaces(intersectedFaces);
  const { position } = DEFAULT_CUBE_PROPS;
  return (
    <group position={position} castShadow>
      <IntersectGroup
        intersectedFaces={intersectedFaces}
        onFaceIntersect={handleFaceIntersectChange}
      />
      <CubeMesh intersectedFaces={intersectedFaces} />
    </group>
  );
};
