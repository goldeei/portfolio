import { EulerTuple } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

import { Face, IntersectedFaces } from './types';

const leftRightAmount = 40;

export const getHoveredFace = (
  intersectedFaces: IntersectedFaces,
): Face | 'none' => {
  if (Object.values(intersectedFaces).every((f) => f === false)) return 'none';
  if (intersectedFaces.top === true) return 'top';
  if (intersectedFaces.right === true) return 'right';
  return 'left';
};

const rotation: Record<string, EulerTuple> = {
  top: [degToRad(45), 0, 0],
  left: [0, degToRad(leftRightAmount), 0],
  right: [0, degToRad(-leftRightAmount), 0],
  none: [0, 0, 0],
};

export const rotateFaceTowardsMouse = (
  intersectedFaces: IntersectedFaces,
): EulerTuple => {
  const face = getHoveredFace(intersectedFaces);

  return rotation[face];
};
