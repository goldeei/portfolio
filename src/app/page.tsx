'use client';

import { Scene } from "@/components/scene";
import { useR3fState } from "@/context/r3fProvider";
import clsx from "clsx";

import Landing from "./(landing)/page";

export default function Home() {
  const [r3fState] = useR3fState();

  return (
    <main>
      <Landing />
      <div
        className={clsx(
          'absolute inset-0 h-screen w-full',
          r3fState.isCanvasOnTop ? 'z-20' : 'z-0',
        )}
      >
        <Scene />
      </div>
    </main>
  );
}
