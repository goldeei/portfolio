import { useCubeState } from '@/context/cubeStateProvider';
import { useR3fState } from '@/context/r3fProvider';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/Addons.js';

import { Cube } from './cube';
import { Environment } from './environment';
import { Floor } from './floor';

export const Scene = () => {
  const [r3fState] = useR3fState();
  const [cubeState] = useCubeState();

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitControlsRef = useRef(null);

  useEffect(() => {
    if (orbitControlsRef.current && !r3fState.isOrbitControlEnabled) {
      (orbitControlsRef.current as ThreeOrbitControls).reset();
    }
  }, [r3fState.isOrbitControlEnabled]);

  const position = useMemo(() => {
    const { landingPositions, currentLandingPosition } = cubeState;
    if (containerRef.current && landingPositions[currentLandingPosition]) {
      const { x, y } = landingPositions[currentLandingPosition];
      const { width, height } = containerRef.current.getBoundingClientRect();
      const getPos = (coord: number, dimension: number, offset: number = 0) =>
        coord - dimension / 2 + offset;
      const left = getPos(x, width),
        top = getPos(y, height, -0);

      return { left, top };
    } else {
      return { left: 0, top: 0 };
    }
  }, [cubeState]);
  const [isLoaded, setIsLoaded] = useState(false);
  const animate = isLoaded
    ? {
        x: 300, // Move to the right position
        y: [100, 0, 100], // Bounce up to y=-100, then return to 0
      }
    : { x: 100, y: 0 };

  useEffect(() => {
    console.log(isLoaded);
  }, [isLoaded]);
  return (
    <div
      className={clsx(
        'absolute inset-0 h-screen w-full',
        r3fState.isCanvasOnTop ? 'z-20' : 'z-0',
      )}
    >
      <motion.div
        initial={{ x: 100, y: 0 }}
        animate={animate}
        transition={{
          duration: 1, // You can adjust the duration of the bounce
        }}
        ref={containerRef}
        className="size-32 border"
      >
        <Canvas
          orthographic
          camera={{ zoom: 50, position: [0, 0, 20] }}
          shadows
          onCreated={() => setIsLoaded(true)}
        >
          <Environment />
          <Floor />
          <Cube />
          {r3fState.isOrbitControlEnabled && (
            <OrbitControls ref={orbitControlsRef} />
          )}
        </Canvas>
      </motion.div>
    </div>
  );
};
