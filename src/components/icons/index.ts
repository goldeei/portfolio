import { ReactIcon } from './react';
import { TailwindIcon } from './tailwind';
import { TurborepoIcon } from './turborepo';
import { TypeScriptIcon } from './typescript';
import { ViteIcon } from './vite';

export const skillIcon = {
  react: ReactIcon,
  tailwind: TailwindIcon,
  turborepo: TurborepoIcon,
  typescript: TypeScriptIcon,
  vite: ViteIcon,
};
export type SkillIcon = keyof typeof skillIcon;
