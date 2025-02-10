'use client';

import { CubeIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { Switch } from '@/components/switch';
import { useR3fState } from '@/context/r3fProvider';
import { DownloadSolid } from '@mynaui/icons-react';

import { Brand } from './brand';

export const Nav = () => {
  const [r3fState, updateR3fState] = useR3fState();
  const { isCanvasOnTop, isOrbitControlEnabled } = r3fState;

  return (
    <nav className="flex h-[var(--navbar-height)] items-center justify-between">
      <Brand />
      <div className="flex gap-3">
        <Button variant="link">Tech I Use</Button>
        <Button variant="link">Experiences</Button>
        <Button variant="link">Projects</Button>
        <Button icon={<DownloadSolid />}>Resume</Button>
        <Switch
          icon={<CubeIcon />}
          onToggle={(v) => updateR3fState(v, 'isCanvasOnTop')}
          defaultIsChecked={isCanvasOnTop}
          hasOnOffLabel
        />
        <Switch
          icon={'OC'}
          onToggle={(v) => updateR3fState(v, 'isOrbitControlEnabled')}
          defaultIsChecked={isOrbitControlEnabled}
          hasOnOffLabel
        />
      </div>
    </nav>
  );
};
