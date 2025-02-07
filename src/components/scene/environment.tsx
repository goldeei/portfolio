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
      <DreiEnvironment preset="warehouse" />
      <directionalLight
        castShadow
        position={[0, 2, 0]}
        intensity={0.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
};
