import {
  Environment as DreiEnvironment,
  SoftShadows,
  useHelper,
} from '@react-three/drei';
import { useRef } from 'react';
import { PointLight, PointLightHelper } from 'three';

export const Environment = () => {
  const pointLightRef = useRef<PointLight>(null!);
  useHelper(pointLightRef, PointLightHelper, 1);

  return (
    <>
      <SoftShadows />
      <directionalLight
        castShadow
        position={[0, 2, 0]}
        intensity={5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[-2, 0, 2]}
        intensity={5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[2, 0, 2]}
        intensity={5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
};
