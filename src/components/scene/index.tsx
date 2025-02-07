import { useCubeState } from '@/context/cubeStateProvider';
import { useR3fState } from '@/context/r3fProvider';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import { useEffect, useMemo, useRef } from 'react';
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
    }
  }, [cubeState]);

  return (
    <div
      className={clsx(
        'absolute inset-0 h-screen w-full',
        r3fState.isCanvasOnTop ? 'z-20' : 'z-0',
      )}
    >
      <div ref={containerRef} className="absolute size-64" style={position}>
        <Canvas
          orthographic
          camera={{ zoom: 50, position: [0, 0, 20] }}
          shadows
        >
          <Environment />
          <Floor />
          <Cube />
          {r3fState.isOrbitControlEnabled && (
            <OrbitControls ref={orbitControlsRef} />
          )}
        </Canvas>
      </div>
    </div>
  );
};
