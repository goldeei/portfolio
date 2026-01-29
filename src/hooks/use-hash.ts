'use client';

import { useEffect, useState } from 'react';

export function useHash() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    // Set initial hash
    const updateHash = () => {
      setHash(window.location.hash.slice(1)); // Remove the '#'
    };

    updateHash();

    // Listen for hash changes
    window.addEventListener('hashchange', updateHash);
    
    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  return hash;
}
