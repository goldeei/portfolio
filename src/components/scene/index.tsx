import { hslVarToHex } from "@/lib/utils";
import {
  Box,
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  RoundedBox,
  useHelper,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Mesh, PointLight, PointLightHelper } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

export const Scene = () => {
  const [cubeColor, setCubeColor] = useState(hslVarToHex("--primary"));
  const pointLightRef = useRef<PointLight>(null!);
  useHelper(pointLightRef, PointLightHelper, 1);

  const cubeRef = useRef<Mesh>(null);
  useEffect(() => {
    setCubeColor(hslVarToHex("--primary"));
  }, []);

  const cubeSize = [1, 1, 1];

  return (
    <>
      <Environment preset="sunset" />
      <pointLight
        ref={pointLightRef}
        position={[0, 0, -5]}
        rotation={[degToRad(20), 0, 0]}
        intensity={8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <RoundedBox
        ref={cubeRef}
        args={cubeSize}
        radius={0.05}
        smoothness={3}
        bevelSegments={2}
        creaseAngle={0.25}
        rotation={[degToRad(190), degToRad(45), 0]}
        position={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial
          color={cubeColor}
          roughness={0.5}
          metalness={0.5}
        />
      </RoundedBox>
      <Box
        args={[5, 0.15, 5]}
        position={[0, -(cubeSize[1] / 2 + 0.15), 0]}
        rotation={[degToRad(10), degToRad(45), 0]}
        receiveShadow
      >
        <meshStandardMaterial
          roughness={1}
          metalness={0}
          color={hslVarToHex("--accent")}
        />
      </Box>
      <OrbitControls />
      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
        {/* alternative: <GizmoViewcube /> */}
      </GizmoHelper>
    </>
  );
};
