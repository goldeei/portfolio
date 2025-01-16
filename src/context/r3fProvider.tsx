'use client';
import React, { createContext, use, useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export interface R3fState {
  isCanvasOnTop: boolean;
  isOrbitControlEnabled: boolean;
}

const defaultState = {
  isCanvasOnTop: false,
  isOrbitControlEnabled: false,
};

const R3fContext = createContext<
  readonly [R3fState, (v: boolean, key: keyof R3fState) => void]
>([defaultState, () => {}]);

export function R3fProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [state, setState] = useLocalStorage('r3f-settings', defaultState, {
    initializeWithValue: false,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { isCanvasOnTop, isOrbitControlEnabled } = state;
  const updateState = useCallback(
    (v: boolean, key: keyof R3fState) => {
      if (v && key === 'isOrbitControlEnabled' && !isCanvasOnTop)
        return setState({
          ...state,
          isCanvasOnTop: true,
          isOrbitControlEnabled: true,
        });

      if (!v && key === 'isCanvasOnTop' && isOrbitControlEnabled)
        return setState({
          ...state,
          isCanvasOnTop: false,
          isOrbitControlEnabled: false,
        });

      return setState({ ...state, [key]: v });
    },
    [isCanvasOnTop, isOrbitControlEnabled, setState, state],
  );

  if (!isMounted) {
    return null;
  }

  return <R3fContext value={[state, updateState]}>{children}</R3fContext>;
}

export const useR3fState = () => use(R3fContext);
