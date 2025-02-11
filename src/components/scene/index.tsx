import { useR3fState } from '@/context/r3fProvider';
import { useLandingPositions } from '@/hooks/useLandingPositions';
import { getElementCenterPosition } from '@/lib/getElementCenterPosition';
import { LandingPosition } from '@/types/landingPosition';
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

  const [containerElement, setContainerElement] =
    useState<HTMLDivElement | null>(null);
  const orbitControlsRef = useRef(null);

  useEffect(() => {
    if (orbitControlsRef.current && !r3fState.isOrbitControlEnabled) {
      (orbitControlsRef.current as ThreeOrbitControls).reset();
    }
  }, [r3fState.isOrbitControlEnabled]);

  const [isCanvasCreated, setIsCanvasCreated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const initialPositionRef = useRef<{
    left: number;
    top: number;
  } | null>(null);
  const landingPositions = useLandingPositions(containerElement, [
    { name: LandingPosition.Initial },
    { name: LandingPosition.Introduction1 },
    { name: LandingPosition.Introduction2 },
  ]);

  useEffect(() => {
    if (!initialPositionRef.current && landingPositions[0] && isCanvasCreated) {
      initialPositionRef.current = landingPositions[0];
      setIsLoaded(true);
    }
  }, [isCanvasCreated, landingPositions]);
  const initialPosition = useMemo(() => {
    if (!landingPositions[0]) return { left: 0, top: 0 };
    return getElementCenterPosition(
      { x: landingPositions[0].left, y: landingPositions[0].top },
      0,
      0,
    );
  }, [landingPositions]);

  return (
    <div
      className={clsx(
        'absolute inset-0 h-screen w-full',
        r3fState.isCanvasOnTop ? 'z-20' : 'z-0',
      )}
    >
      <motion.div
        ref={setContainerElement}
        className="absolute size-64 border"
        style={{ x: initialPosition.left, y: initialPosition.top }}
      >
        {!isLoaded && (
          <div className="center-absolute text-secondary">Loading...</div>
        )}
        <Canvas
          orthographic
          camera={{ zoom: 50, position: [0, 0, 20] }}
          shadows
          onCreated={() => setIsCanvasCreated(true)}
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
