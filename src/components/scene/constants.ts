import { EulerTuple, Vector2Tuple, Vector3Tuple } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

type DEFAULT_MESH_PROPS = {
  args: Vector3Tuple;
  rotation: EulerTuple;
  position: Vector3Tuple;
};

export const DEFAULT_SUBJECT_ROTATION = {
  x: degToRad(25),
  y: degToRad(45),
  z: 0,
};
export const DEFAULT_SUBJECT_PROPS: Pick<DEFAULT_MESH_PROPS, 'rotation'> = {
  rotation: [
    DEFAULT_SUBJECT_ROTATION.x,
    DEFAULT_SUBJECT_ROTATION.y,
    DEFAULT_SUBJECT_ROTATION.z,
  ],
};

const cubeSize: Vector3Tuple = [1, 1, 1];
export const DEFAULT_CUBE_PROPS: DEFAULT_MESH_PROPS & {
  radius: number;
} = {
  args: cubeSize,
  radius: 0.05,
  rotation: DEFAULT_SUBJECT_PROPS.rotation,
  position: [0, 0.5, 0],
};

export const DEFAULT_FLOOR_PROPS: Omit<DEFAULT_MESH_PROPS, 'args'> & {
  args: Vector2Tuple;
} = {
  args: [2, 2],
  rotation: [degToRad(-65), 0, degToRad(45)],
  position: [0, 0, 0],
};
