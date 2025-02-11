import { showCubeFace } from '@/animations/r3f';
import { useCubeState } from '@/context/cubeStateProvider';
import { useSvgAsExtrudeGeometry } from '@/hooks/useSvgAsExtrudeGeometry';
import { hslVarToHex } from '@/lib/utils';
import { animated, useSpring, useSprings } from '@react-spring/three';
import { RoundedBox, useHelper } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { motion as motion3d } from 'framer-motion-3d';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { EulerTuple, Mesh, PointLight, SpotLightHelper } from 'three';
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
  const [cubeState] = useCubeState();

  const ref = useRef<Mesh>(null);
  const cubeRef = useRef<Mesh>(null!);
  const icon12Ref = useRef<Mesh>(null!);

  const { rotation } = DEFAULT_CUBE_PROPS;

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
        ? { scale: 0.2, emissive: 5 }
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

  const state: 'falling' | 'static' = 'static';

  const animationState = {
    idle: {
      rotation: [0, 0, 0],
      lightIntensity: 20,
      emissiveIntensity: 10,
    },
    falling: {
      rotation: [Math.PI / 2, Math.PI / 2, 0],
      loop: { reverse: true },
    },
  };

  const springStates = useSpring({
    ...animationState[cubeState.animationState],
    duration: 2000,
    loop: { reverse: true },
  });
  const { clock } = useThree();
  const duration = 2; // duration of the fall in seconds
  const frameRate = 60; // assuming 60 frames per second
  const totalFrames = duration * frameRate;
  const totalRotation = 360; // total rotation needed in degrees
  const rotationPerFrame = totalRotation / totalFrames;

  let currentRotation = 0;

  useFrame(() => {
    const delta = clock.getDelta();
    const currentFps = 1 / delta;
    if (ref.current) {
      const totalRotation = degToRad(360); // total rotation needed
      const rotationPerSecond = totalRotation / duration;
      currentRotation = rotationPerSecond; // rotation per second
      if (cubeState.animationState === 'falling') {
        ref.current.rotation.x += rotationPerSecond * delta * 100;
        // ref.current.rotation.y += 0.025; // if needed
      } else {
        ref.current.rotation.x = 0; // ensure it lands perfectly at 0
        // ref.current.rotation.y = 0; // if you want to reset y as well
      }
      console.log(ref.current.rotation.x);
    }
  });
  const x = useMotionValue(0);
  const scaleZ = useTransform(x, (v) => v / 100);
  return (
    <motion.mesh
    // ref={ref}
    // @ts-expect-error: Spring type is EulerTuple Type (Typescript returns error on rotation)

    // scale={[1, 1, scaleZ]}
    // rotation={springStates.rotation}
    // onClick={handleJump}
    >
      <motion.group rotation={rotation} castShadow>
        <RoundedBox
          ref={cubeRef}
          smoothness={3}
          bevelSegments={6}
          creaseAngle={0.25}
          castShadow
          onClick={handleCubeClick}
        >
          <meshStandardMaterial
            roughness={0.5}
            metalness={0.4}
            color={hslVarToHex('--primary')}
          />
          {/* <meshDistanceMaterial near={1} far={10} /> */}
        </RoundedBox>
        <motion.mesh
          ref={icon12Ref}
          geometry={icon1_2}
          position={[0, 0.5, 0]}
          rotation={[degToRad(90), 0, degToRad(45)]}
          scale={0.35}
        >
          <motion.meshStandardMaterial
            roughness={0}
            metalness={1}
            color={hslVarToHex('--accent')}
            transparent
            emissive={hslVarToHex('--secondary')}
            // emissiveIntensity={springs[0].emissive}
            opacity={0.75}
          />
        </motion.mesh>
        <motion.mesh
          ref={icon12Ref}
          geometry={icon1}
          position={[-0.5, 0, 0]}
          rotation={[0, degToRad(90), degToRad(-180)]}
          scale={0.35}
        >
          <motion.meshStandardMaterial
            roughness={1}
            color={hslVarToHex('--accent')}
            transparent
            emissive={hslVarToHex('--secondary')}
            // emissiveIntensity={springs[1].emissive}
            opacity={0.75}
          />
        </motion.mesh>
      </motion.group>
    </motion.mesh>
  );
};
