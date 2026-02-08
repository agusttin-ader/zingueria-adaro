"use client";

import { useEffect } from 'react';

export default function UnregisterSW() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((r) => r.unregister()))
        .catch(() => {
          /* ignore errors */
        });
    }
  }, []);

  return null;
}
