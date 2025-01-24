import { jump, showCubeFace } from '@/animations/r3f';
import { useSvgAsExtrudeGeometry } from '@/hooks/useSvgAsExtrudeGeometry';
import { hslVarToHex } from '@/lib/utils';
import { animated, useSpring, useSpringValue } from '@react-spring/three';
import { RoundedBox, useHelper } from '@react-three/drei';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  BackSide,
  EulerTuple,
  FrontSide,
  Mesh,
  PointLight,
  PointLightHelper,
  SpotLightHelper,
  Vector3Tuple,
} from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';

import { DEFAULT_CUBE_PROPS } from '../constants';
import { Face, IntersectedFaces } from './types';
import { getHoveredFace, rotateFaceTowardsMouse } from './utils';

export const url = `/logo.svg`;

interface CubeMeshProps {
  intersectedFaces: IntersectedFaces;
}
export const CubeMesh = ({ ...props }: CubeMeshProps) => {
  const { intersectedFaces } = props;
  const [cubeColor, setCubeColor] = useState({
    base: hslVarToHex('--primary'),
    icons: hslVarToHex('--accent'),
    glow: hslVarToHex('--secondary'),
  });
  const [hoveredFace, setHoveredFace] = useState<Face | 'none'>('none');

  const ref = useRef<Mesh>(null);
  const cubeRef = useRef<Mesh>(null!);
  const icon12Ref = useRef<Mesh>(null!);

  const { rotation } = DEFAULT_CUBE_PROPS;

  const [jumpSpring, jumpSpringApi] = useSpring<{
    position: Vector3Tuple;
  }>(() => ({
    position: [0, 0, 0],
  }));
  const handleJump = () => jump(jumpSpringApi, 1.5);

  const [showCubeFaceSpring, showCubeFaceSpringApi] = useSpring<{
    rotation: EulerTuple;
    lightIntensity: number;
    emissiveIntensity: number;
    color: string;
  }>(() => ({
    rotation: [0, 0, 0],
    lightIntensity: 0.1,
    emissiveIntensity: 0.1,
    color: '#000',
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

  const icon1 = useSvgAsExtrudeGeometry('/logo.svg', 5);
  const icon1_2 = useSvgAsExtrudeGeometry('/logo.svg', 0);

  const pointLightRef = useRef<PointLight>(null!);
  // useHelper(pointLightRef, SpotLightHelper, 1);

  const light = showCubeFaceSpring.lightIntensity;

  const [emissiveIntensity, emissiveIntensityApi] = useSpring(() => ({
    emissiveIntensity: 0,
    lightIntensity: 0,
  }));

  // useEffect(() => {
  //   if (pointLightRef.current) {
  //     console.log(emissiveIntensity.lightIntensity.get());
  //     pointLightRef.current.intensity = emissiveIntensity.lightIntensity.get();
  //   }
  // }, [emissiveIntensity.lightIntensity.get()]);

  const opacity = useSpringValue(0, {
    config: {
      duration: 500,
    },
  });

  useEffect(() => {
    console.log(opacity.get());
  }, [opacity.get()]);

  const [springs, api] = useSpring(() => ({
    scale: 0.1,
    color: cubeColor.icons,
    config: (key) => {
      switch (key) {
        case 'scale':
          return {
            duration: 500,
          };
        default:
          return {};
      }
    },
  }));

  useEffect(() => {
    if (hoveredFace === 'right') {
      api.start({ scale: 1.5 });
    }
  }, [api, hoveredFace]);

  return (
    <animated.mesh
      ref={ref}
      position={jumpSpring.position.to((x, y) => [x, y, 0])}
      // @ts-expect-error: Spring type is EulerTuple Type (Typescript returns error on rotation)
      rotation={showCubeFaceSpring.rotation.to((x, y, z) => [x, y, z])}
      onClick={handleJump}
    >
      <group rotation={rotation}>
        <RoundedBox
          ref={cubeRef}
          smoothness={3}
          bevelSegments={6}
          creaseAngle={0.25}
          castShadow
        >
          <meshStandardMaterial
            color={cubeColor.base}
            roughness={0.5}
            metalness={0.5}
          />
        </RoundedBox>
        <group position={[0, 0, 0.49]} scale={0.8}>
          <animated.mesh
            ref={icon12Ref}
            geometry={icon1_2}
            position={[0, 0, 0.02]}
            scale={springs.scale}
            rotation={[0, degToRad(180), degToRad(180)]}
          >
            <animated.meshStandardMaterial
              depthWrite={true}
              color={cubeColor.icons}
              transparent
              // emissive={'white'}
              // emissiveIntensity={hoveredFace === 'right' ? 5 : 0}
            />
          </animated.mesh>
          {/* <spotLight
            ref={pointLightRef}
            position={[0, 0, 2]}
            // intensity={emissiveIntensity.lightIntensity.get()}
            rotation={[degToRad(0), degToRad(90), degToRad(0)]}
            distance={1.95}
            angle={degToRad(20)}
            penumbra={1}
            args={['blue', emissiveIntensity.lightIntensity.get()]}
          /> */}
          {/* <mesh
            geometry={icon1}
            position={[0, 0, 0]}
            scale={0.1}
            rotation={[0, degToRad(180), degToRad(180)]}
          >
            <animated.meshStandardMaterial
              color={cubeColor.icons}
              depthTest={true}
              roughness={1}
              metalness={0}
              transparent
              opacity={1}
              emissive={cubeColor.glow}
              emissiveIntensity={emissiveIntensity.emissiveIntensity}
            />
          </mesh> */}
        </group>
      </group>
    </animated.mesh>
  );
};
