import { getRoundedBoxMaxY } from '@/lib/3d-utils';
import { EulerTuple, Vector3Tuple } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

type DEFAULT_MESH_PROPS = {
  args: Vector3Tuple;
  rotation: EulerTuple;
  position: Vector3Tuple;
};
export const DEFAULT_SUBJECT_PROPS: Pick<DEFAULT_MESH_PROPS, 'rotation'> = {
  rotation: [degToRad(25), degToRad(45), 0],
};

const cubeSize = Array(3).fill(1) as Vector3Tuple;
export const DEFAULT_CUBE_PROPS: Omit<DEFAULT_MESH_PROPS, 'position'> & {
  radius: number;
} = {
  args: cubeSize,
  radius: 0.05,
  rotation: DEFAULT_SUBJECT_PROPS.rotation,
};

const floorThickness = 0.15;
export const DEFAULT_FLOOR_PROPS: DEFAULT_MESH_PROPS = {
  args: [3, 0.15, 3],
  rotation: DEFAULT_SUBJECT_PROPS.rotation,
  position: [
    0,
    getRoundedBoxMaxY(cubeSize[0], 'bottom', floorThickness) - 0.3,
    0,
  ],
};
