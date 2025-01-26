import { EulerTuple } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

import { IntersectedFaces, IntersectOption } from './types';

const leftRightAmount = 40;

export const getHoveredFace = (
  intersectedFaces: IntersectedFaces,
): IntersectOption => {
  if (Object.values(intersectedFaces).every((f) => f === false)) return 'none';
  if (intersectedFaces.top === true) return 'top';
  if (intersectedFaces.right === true) return 'right';
  return 'left';
};

const rotation: Record<string, EulerTuple> = {
  top: [degToRad(45), 0, 0],
  left: [degToRad(-25), degToRad(leftRightAmount), degToRad(25)],
  right: [degToRad(-25), degToRad(-leftRightAmount), degToRad(-25)],
  none: [0, 0, 0],
};

export const rotateFaceTowardsMouse = (
  intersectedFaces: IntersectedFaces,
): EulerTuple => {
  const face = getHoveredFace(intersectedFaces);

  return rotation[face];
};
