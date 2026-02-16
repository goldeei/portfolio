'use client';

import { useIsMobile } from '@/hooks';
import { getScrollContainer } from '@/lib/scroll-utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Background = () => {
  const isMobile = useIsMobile();
  const scrollContainer = useRef<HTMLElement>(getScrollContainer(isMobile));

  const { scrollY } = useScroll({
    container: scrollContainer,
  });
  const y = useTransform(scrollY, (y) => y * -0.1);

  return (
    <motion.div
      style={{
        background: 'var(--gradient-bg)',
        y,
        top: '-25vh',
        bottom: '-25vh',
      }}
      className="fixed right-0 left-0 -z-10"
    />
  );
};
