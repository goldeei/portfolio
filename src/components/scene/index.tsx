import { hslVarToHex } from "@/lib/utils";
import { animated, useSpring } from "@react-spring/three";
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

  const [spring, api] = useSpring(() => ({
    position: [0, 0, 0],
    config: { tension: 500, friction: 50 },
  }));

  const jump = () => {
    api.start({
      to: async (next) => {
        await next({ position: [0, 1.5, 0] });
        await next({ position: [0, 0, 0] });
      },
    });
  };

  return (
    <>
      <Environment preset="sunset" />
      <pointLight
        ref={pointLightRef}
        position={[0, 5, 0]}
        rotation={[0, 0, 0]}
        intensity={50}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group rotation={[degToRad(15), degToRad(45), 0]} position={[0, 0, 0]}>
        <animated.mesh
          position={spring.position.to((x, y) => [x, y, 0])}
          onClick={jump}
        >
          <RoundedBox
            ref={cubeRef}
            args={cubeSize}
            radius={0.05}
            smoothness={3}
            bevelSegments={2}
            creaseAngle={0.25}
            // position={spring.position.to((x, y) => [x, y, 0])}
            castShadow
            onClick={jump}
          >
            <meshStandardMaterial
              color={cubeColor}
              roughness={0.5}
              metalness={0.5}
            />
          </RoundedBox>
        </animated.mesh>
        <Box
          args={[3, 0.15, 3]}
          position={[0, -(cubeSize[1] / 2 + 0.085), 0]}
          receiveShadow
        >
          <meshStandardMaterial
            roughness={1}
            metalness={0}
            color={hslVarToHex("--accent")}
          />
        </Box>
      </group>
      {/* <OrbitControls /> */}
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
