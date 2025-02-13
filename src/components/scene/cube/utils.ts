import { EulerTuple } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

import { DEFAULT_SUBJECT_ROTATION } from '../constants';
import { IntersectedFaces, IntersectOption } from './types';

const horizontalRotationOffset = 40;

export const getHoveredFace = (
  intersectedFaces: IntersectedFaces,
): IntersectOption => {
  if (intersectedFaces.top === true) return 'top';
  if (intersectedFaces.right === true) return 'right';
  if (intersectedFaces.left === true) return 'left';
  return 'none';
};

const rotation: Record<string, EulerTuple> = {
  top: [DEFAULT_SUBJECT_ROTATION.y, 0, 0],
  left: [
    -DEFAULT_SUBJECT_ROTATION.x,
    degToRad(horizontalRotationOffset),
    DEFAULT_SUBJECT_ROTATION.x,
  ],
  right: [
    -DEFAULT_SUBJECT_ROTATION.x,
    degToRad(-horizontalRotationOffset),
    -DEFAULT_SUBJECT_ROTATION.x,
  ],
  none: [0, 0, 0],
};

export const rotateFaceTowardsMouse = (
  intersectedFaces: IntersectedFaces,
): EulerTuple => {
  const face = getHoveredFace(intersectedFaces);

  return rotation[face];
};
