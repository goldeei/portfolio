import { useState } from 'react';

import { CubeMesh } from './cube-mesh';
import { IntersectGroup } from './intersect-group';
import { IntersectedFaces } from './types';

export const Cube = () => {
  const [intersectedFaces, setIntersectedFaces] = useState<IntersectedFaces>({
    top: false,
    left: false,
    right: false,
  });

  const handleFaceIntersectChange = (intersectedFaces: IntersectedFaces) =>
    setIntersectedFaces(intersectedFaces);

  return (
    <group position={[0, 0, 0]}>
      <IntersectGroup
        intersectedFaces={intersectedFaces}
        onFaceIntersect={handleFaceIntersectChange}
      />
      <CubeMesh intersectedFaces={intersectedFaces} />
    </group>
  );
};
