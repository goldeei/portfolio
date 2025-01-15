import { Environment as DreiEnvironment, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLight, PointLightHelper } from "three";

export const Environment = () => {
  const pointLightRef = useRef<PointLight>(null!);
  useHelper(pointLightRef, PointLightHelper, 1);

  return (
    <>
      <DreiEnvironment preset="sunset" />
      <pointLight
        ref={pointLightRef}
        position={[0, 5, 0]}
        rotation={[0, 0, 0]}
        intensity={50}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
};
