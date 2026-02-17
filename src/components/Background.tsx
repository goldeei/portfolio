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
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <motion.div
      style={{
        background: 'var(--gradient-bg)',
        y,
        top: '-50vh',
        bottom: '-50vh',
      }}
      className="fixed right-0 left-0 -z-10"
    />
  );
};
