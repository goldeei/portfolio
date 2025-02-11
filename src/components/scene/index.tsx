import { useCubeState } from '@/context/cubeStateProvider';
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
  const [cubeState] = useCubeState();

  const [isLoaded, setIsLoaded] = useState(false);

  const orbitControlsRef = useRef(null);

  useEffect(() => {
    if (orbitControlsRef.current && !r3fState.isOrbitControlEnabled) {
      (orbitControlsRef.current as ThreeOrbitControls).reset();
    }
  }, [r3fState.isOrbitControlEnabled]);

  return (
    <div
      className={clsx(
        'absolute inset-0 h-screen w-full',
        r3fState.isCanvasOnTop ? 'z-20' : 'z-0',
      )}
    >
      <motion.div
        style={cubeState.cubePositions.initial}
        className="absolute size-[var(--canvas-size)] border"
      >
        {!isLoaded && (
          <div className="center-absolute text-secondary">Loading...</div>
        )}
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
