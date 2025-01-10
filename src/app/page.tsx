"use client";
import { CubeIcon, DownloadSolid, Logo } from "@/assets/icons";
import { Button } from "@/components/button";
import { Switch } from "@/components/switch";
import { hslVarToHex } from "@/lib/utils";
import { Environment, RoundedBox } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { cx } from "class-variance-authority";
import { Raleway } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const [cubeColor, setCubeColor] = useState(hslVarToHex("--primary"));
  const cubeRef = useRef<Mesh>(null);
  useEffect(() => {
    setCubeColor(hslVarToHex("--primary"));
  }, []);

  return (
    <div className={cx("flex h-dvh flex-col px-36 py-8", raleway.className)}>
      <nav className="flex items-center justify-between">
        <div className="relative flex size-fit items-center justify-center">
          <Button
            variant="link"
            className="h-16 border-none p-0 shadow-inner transition-transform hover:-translate-y-0.5 [&_svg]:size-full"
          >
            <Logo />
          </Button>
        </div>
        <div className="flex gap-3">
          <Button variant="link">Tech I Use</Button>
          <Button variant="link">Experiences</Button>
          <Button variant="link">Projects</Button>
          <Button icon={<DownloadSolid />}>Resume</Button>
          {/* <Switch icon={<MoonSolid />} icon2={<SunSolid />} /> */}
          <Switch icon={<CubeIcon />} defaultIsChecked hasOnOffLabel />
        </div>
      </nav>
      <main className="flex flex-1 flex-col place-content-center items-center justify-center text-center">
        <div className="text-primary">Test Theme Primary</div>
        <div className="text-secondary">Test Theme Secondary</div>
        <Canvas className="size-14">
          <Environment preset="studio" />
          <RoundedBox
            ref={cubeRef}
            args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
            radius={0.05} // Radius of the rounded corners. Default is 0.05
            smoothness={4} // The number of curve segments. Default is 4
            bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
            creaseAngle={0.4} // All THREE.Mesh props are valid
            rotation={[degToRad(11.25), degToRad(45), 0]}
          >
            <meshStandardMaterial
              color={cubeColor}
              roughness={0.5}
              metalness={0.5}
            />
          </RoundedBox>
          {/* <OrbitControls  /> */}
        </Canvas>
      </main>
    </div>
  );
}
