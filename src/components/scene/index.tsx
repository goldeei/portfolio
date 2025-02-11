import { useR3fState } from '@/context/r3fProvider';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/Addons.js';

import { Cube } from './cube';
import { Environment } from './environment';
import { Floor } from './floor';

export const Scene = () => {
  const [r3fState] = useR3fState();

  const [_, setContainerRef] = useState<HTMLDivElement | null>(null);
  const orbitControlsRef = useRef(null);

  useEffect(() => {
    if (orbitControlsRef.current && !r3fState.isOrbitControlEnabled) {
      (orbitControlsRef.current as ThreeOrbitControls).reset();
    }
  }, [r3fState.isOrbitControlEnabled]);

  const [isLoaded, setIsLoaded] = useState(false);
  const animate = isLoaded
    ? {
        x: [300, 600], // Move to the right position
        y: [100, 0, 100], // Bounce up to y=-100, then return to 0
      }
    : { x: 100, y: 0 };

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
        ref={setContainerRef}
        className="size-64 border"
      >
        {!isLoaded && <div className="text-secondary">Loading...</div>}
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
