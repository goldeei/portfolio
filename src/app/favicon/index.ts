import dark16 from './dark/16x16.ico';
import dark32 from './dark/32x32.ico';
import dark48 from './dark/48x48.ico';
import light16 from './light/16x16.ico';
import light32 from './light/32x32.ico';
import light48 from './light/48x48.ico';

const icons = {
  dark: {
    '16x16': dark16.src,
    '32x32': dark32.src,
    '48x48': dark48.src,
  },
  light: {
    '16x16': light16.src,
    '32x32': light32.src,
    '48x48': light48.src,
  },
} as const;

const favicons = Object.entries(icons).flatMap(([mode, sizes]) => {
  return Object.entries(sizes).map(([size, url]) => {
    return {
      rel: 'icon',
      type: 'image/x-icon',
      sizes: size,
      url,
      media: `(prefers-color-scheme: ${mode})`,
    };
  });
});

export default favicons;
