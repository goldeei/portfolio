import { CubeIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { Switch } from '@/components/switch';
import { useR3fState } from '@/context/r3fProvider';
import { DownloadSolid } from '@mynaui/icons-react';
import { ReactNode } from 'react';

export type NavItem = {
  key: string;
  label: string;
  icon?: ReactNode;
  component: ReactNode;
  isControl?: boolean;
};

export const useNavItems = () => {
  const [r3fState, updateR3fState] = useR3fState();
  const { isCanvasOnTop, isOrbitControlEnabled } = r3fState;

  // Links for main navigation
  const navLinks: NavItem[] = [
    {
      key: 'tech',
      label: 'Tech I Use',
      component: <Button variant="link">Tech I Use</Button>,
    },
    {
      key: 'experiences',
      label: 'Experiences',
      component: <Button variant="link">Experiences</Button>,
    },
    {
      key: 'projects',
      label: 'Projects',
      component: <Button variant="link">Projects</Button>,
    },
  ];

  // Settings controls
  const controls: NavItem[] = [
    {
      key: 'resume',
      label: 'Resume',
      icon: <DownloadSolid />,
      isControl: true,
      component: <Button icon={<DownloadSolid />}>Resume</Button>,
    },
    {
      key: 'canvas',
      label: 'Canvas Overlay',
      icon: <CubeIcon />,
      isControl: true,
      component: (
        <Switch
          icon={<CubeIcon />}
          onToggle={(v) => updateR3fState(v, 'isCanvasOnTop')}
          defaultIsChecked={isCanvasOnTop}
          hasOnOffLabel
        />
      ),
    },
    {
      key: 'orbitControls',
      label: 'Orbit Controls',
      icon: 'OC',
      isControl: true,
      component: (
        <Switch
          icon={'OC'}
          onToggle={(v) => updateR3fState(v, 'isOrbitControlEnabled')}
          defaultIsChecked={isOrbitControlEnabled}
          hasOnOffLabel
        />
      ),
    },
  ];

  return { navLinks, controls, allItems: [...navLinks, ...controls] };
};
