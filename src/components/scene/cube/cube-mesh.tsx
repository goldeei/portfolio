import { jump, showCubeFace } from '@/animations/r3f';
import { useSvgAsExtrudeGeometry } from '@/hooks/useSvgAsExtrudeGeometry';
import { hslVarToHex } from '@/lib/utils';
import { animated, useSpring, useSprings } from '@react-spring/three';
import { RoundedBox, useHelper } from '@react-three/drei';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  EulerTuple,
  Mesh,
  PointLight,
  SpotLightHelper,
  Vector3Tuple,
} from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

import { DEFAULT_CUBE_PROPS } from '../constants';
import {
  ICON_URL,
  INIT_ANIMATION_PROPS,
  INIT_ANIMATION_STATE,
  INTERSECT_OPTION,
  SIDES,
} from './constants';
import { IntersectedFaces, IntersectOption } from './types';
import { getHoveredFace, rotateFaceTowardsMouse } from './utils';

export const url = `/logo.svg`;

interface CubeMeshProps {
  intersectedFaces: IntersectedFaces;
}
export const CubeMesh = ({ ...props }: CubeMeshProps) => {
  const { intersectedFaces } = props;
  const [hoveredFace, setHoveredFace] = useState<IntersectOption>('none');

  const ref = useRef<Mesh>(null);
  const cubeRef = useRef<Mesh>(null!);
  const icon12Ref = useRef<Mesh>(null!);

  const { rotation } = DEFAULT_CUBE_PROPS;

  const [jumpSpring, jumpSpringApi] = useSpring<{
    position: Vector3Tuple;
  }>(() => ({
    position: [0, 0, 0],
  }));

  const [showCubeFaceSpring, showCubeFaceSpringApi] = useSpring<{
    rotation: EulerTuple;
    lightIntensity: number;
    emissiveIntensity: number;
  }>(() => ({
    rotation: [0, 0, 0],
    lightIntensity: 0.1,
    emissiveIntensity: 0.1,
  }));
  const handleShowCubeFace = useCallback(() => {
    setHoveredFace(getHoveredFace(intersectedFaces));
    showCubeFace(
      showCubeFaceSpringApi,
      rotateFaceTowardsMouse(intersectedFaces),
    );
  }, [intersectedFaces, showCubeFaceSpringApi]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleShowCubeFace();
    }, 50);

    return () => clearTimeout(timeout);
  }, [handleShowCubeFace]);

  const icon1 = useSvgAsExtrudeGeometry(ICON_URL.Contact, 2, true);
  const icon1_2 = useSvgAsExtrudeGeometry(ICON_URL.Home, 2, false);

  const pointLightRef = useRef<PointLight>(null!);
  useHelper(pointLightRef, SpotLightHelper, 1);

  const [springs, api] = useSprings(SIDES.length, (i) => ({
    from: { ...INIT_ANIMATION_STATE[SIDES[i]] },
    config: {
      duration: 1000,
    },
  }));

  const spotLightRef = useRef(null!);
  useHelper(spotLightRef, SpotLightHelper, 1);

  useEffect(() => {
    const hoveredIdx = [...INTERSECT_OPTION].indexOf(hoveredFace);
    api.start((i) =>
      i === hoveredIdx
        ? { scale: 0.2, emissive: 1 }
        : { ...INIT_ANIMATION_PROPS },
    );
  }, [api, hoveredFace]);

  const handleCubeClick = () => {
    if (hoveredFace === 'right') {
      alert('Home clicked!');
    } else if (hoveredFace === 'left') {
      alert('Contact clicked!');
    }
  };

  return (
    <animated.mesh
      ref={ref}
      position={jumpSpring.position.to((x, y) => [x, y, 0])}
      // @ts-expect-error: Spring type is EulerTuple Type (Typescript returns error on rotation)
      rotation={showCubeFaceSpring.rotation.to((x, y, z) => [x, y, z])}
      // onClick={handleJump}
    >
      <group rotation={rotation}>
        <RoundedBox
          ref={cubeRef}
          smoothness={3}
          bevelSegments={6}
          creaseAngle={0.25}
          castShadow
          onClick={handleCubeClick}
        >
          <meshStandardMaterial
            color={hslVarToHex('--primary')}
            roughness={0.5}
            metalness={0.5}
          />
        </RoundedBox>
        <animated.mesh
          ref={icon12Ref}
          geometry={icon1_2}
          position={[0, 0.5, 0]}
          rotation={[degToRad(90), 0, degToRad(45)]}
          scale={0.35}
        >
          <animated.meshStandardMaterial
            roughness={1}
            color={hslVarToHex('--accent')}
            transparent
            emissive={hslVarToHex('--secondary')}
            emissiveIntensity={springs[0].emissive}
            opacity={0.75}
          />
        </animated.mesh>
        <animated.mesh
          ref={icon12Ref}
          geometry={icon1}
          position={[-0.5, 0, 0]}
          rotation={[0, degToRad(90), degToRad(-180)]}
          scale={0.35}
        >
          <animated.meshStandardMaterial
            roughness={1}
            color={hslVarToHex('--accent')}
            transparent
            emissive={hslVarToHex('--secondary')}
            emissiveIntensity={springs[1].emissive}
            opacity={0.75}
          />
        </animated.mesh>
      </group>
    </animated.mesh>
  );
};
