'use client';
import React, { createContext, use, useState } from 'react';

export interface R3fState {
  isCanvasBehindHTML: boolean;
  isOrbitControlEnabled: boolean;
}

const defaultState = {
  isCanvasBehindHTML: false,
  isOrbitControlEnabled: false,
};

const R3fContext = createContext<
  readonly [R3fState, React.Dispatch<React.SetStateAction<R3fState>>]
>([defaultState, () => {}]);

export function R3fProvider({ children }: { children: React.ReactNode }) {
  const [r3fState, setR3fState] = useState(defaultState);

  return <R3fContext value={[r3fState, setR3fState]}>{children}</R3fContext>;
}

export const useR3fState = () => use(R3fContext);
