"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('scrollRestoration' in window.history) {
      const previous = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';

       // Ensure we start at the top on initial render
       window.scrollTo(0, 0);

      return () => {
        window.history.scrollRestoration = previous;
      };
    }
    // Fallback: if scrollRestoration is not supported, still force scroll to top
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // On client-side route change, always start at the top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
