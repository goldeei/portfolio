"use client";
import { CubeIcon, DownloadSolid, Logo } from "@/assets/icons";
import { Button } from "@/components/button";
import { Scene } from "@/components/scene";
import { Switch } from "@/components/switch";
import { hslVarToHex } from "@/lib/utils";
import { Environment, OrbitControls, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { cx } from "class-variance-authority";
import clsx from "clsx";
import { Raleway } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { Mesh, PerspectiveCamera } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const [is3dOnTop, setIs3dOnTop] = useState(false);

  return (
    <div
      className={cx(
        "relative flex h-screen flex-col px-36 py-8",
        raleway.className,
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 h-screen w-full",
          is3dOnTop ? "z-10" : "-z-10",
        )}
      >
        <Canvas
          orthographic
          camera={{ zoom: 50, position: [0, 20, 100] }}
          shadows
        >
          <Scene />
        </Canvas>
      </div>
      <nav className="z-50 flex items-center justify-between">
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
          <Switch
            icon={<CubeIcon />}
            onToggle={(isToggled: boolean) => setIs3dOnTop(isToggled)}
            defaultIsChecked
            hasOnOffLabel
          />
        </div>
      </nav>
      <main className="flex flex-1 flex-col place-content-center items-center justify-center text-center">
        <div className="text-primary">Test Theme Primary</div>
        <div className="text-secondary">Test Theme Secondary</div>
      </main>
    </div>
  );
}
