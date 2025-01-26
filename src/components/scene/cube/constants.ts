export const SIDES = ['top', 'left', 'right'] as const;
export const INTERSECT_OPTION = [...SIDES, 'none'] as const;

export const INIT_ANIMATION_PROPS = {
  scale: 0.1,
  emissive: 0,
};

export const INIT_ANIMATION_STATE = {
  top: INIT_ANIMATION_PROPS,
  left: INIT_ANIMATION_PROPS,
  right: INIT_ANIMATION_PROPS,
};

const dir = '/cube-menu-icons';
export enum ICON_URL {
  Home = `${dir}/home.svg`,
  Contact = `${dir}/contact.svg`,
  Menu = `${dir}/menu.svg`,
}
