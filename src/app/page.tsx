'use client';

import { Nav } from '@/components/nav';
import { Scene } from '@/components/scene';
import { useR3fState } from '@/context/r3fProvider';
import { cx } from 'class-variance-authority';
import clsx from 'clsx';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function Home() {
  const [r3fState] = useR3fState();

  return (
    <div
      className={cx(
        'relative flex h-screen flex-col px-36 py-8',
        raleway.className,
      )}
    >
      <Nav />
      <main className="pointer-events-none z-10 flex flex-1 flex-col place-content-center items-center justify-center text-center">
        <div className="text-primary">Test Theme Primary</div>
        <div className="text-secondary">Test Theme Secondary</div>
      </main>
      <div
        className={clsx(
          'absolute inset-0 h-screen w-full',
          r3fState.isCanvasOnTop ? 'z-20' : 'z-0',
        )}
      >
        <Scene />
      </div>
    </div>
  );
}
