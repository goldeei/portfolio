import { jump, showCubeFace } from '@/animations/r3f';
import { hslVarToHex } from '@/lib/utils';
import { animated, useSpring } from '@react-spring/three';
import { RoundedBox } from '@react-three/drei';
import { useCallback, useEffect, useRef, useState } from 'react';
import { EulerTuple, Mesh, Vector3Tuple } from 'three';

import { DEFAULT_CUBE_PROPS } from '../constants';
import { IntersectedFaces } from './types';
import { rotateFaceTowardsMouse } from './utils';

interface CubeMeshProps {
  intersectedFaces: IntersectedFaces;
}
export const CubeMesh = ({ ...props }: CubeMeshProps) => {
  const { intersectedFaces } = props;
  const [cubeColor, setCubeColor] = useState(hslVarToHex('--primary'));
  const ref = useRef<Mesh>(null);
  const { rotation } = DEFAULT_CUBE_PROPS;

  const [jumpSpring, jumpSpringApi] = useSpring<{
    position: Vector3Tuple;
  }>(() => ({
    position: [0, 0, 0],
  }));
  const handleJump = () => jump(jumpSpringApi, 1.5);

  const [showCubeFaceSpring, showCubeFaceSpringApi] = useSpring<{
    rotation: EulerTuple;
  }>(() => ({
    rotation: [0, 0, 0],
  }));
  const handleShowCubeFace = useCallback(
    () =>
      showCubeFace(
        showCubeFaceSpringApi,
        rotateFaceTowardsMouse(intersectedFaces),
      ),
    [intersectedFaces, showCubeFaceSpringApi],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleShowCubeFace();
    }, 50);

    return () => clearTimeout(timeout);
  }, [handleShowCubeFace, intersectedFaces]);

  useEffect(() => {
    setCubeColor('--primary');
  }, []);

  return (
    <animated.mesh
      ref={ref}
      position={jumpSpring.position.to((x, y) => [x, y, 0])}
      // @ts-expect-error: Spring type is EulerTuple Type (Typescript returns error on rotation)
      rotation={showCubeFaceSpring.rotation.to((x, y, z) => [x, y, z])}
      onClick={handleJump}
    >
      <RoundedBox
        {...DEFAULT_CUBE_PROPS}
        rotation={rotation}
        smoothness={3}
        bevelSegments={6}
        creaseAngle={0.25}
        castShadow
      >
        <meshStandardMaterial
          color={cubeColor}
          roughness={0.5}
          metalness={0.5}
        />
      </RoundedBox>
    </animated.mesh>
  );
};
