"use client";

import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  /**
   * Preferencia guardada del usuario. "system" significa que no hay override
   * y se sigue el modo del sistema operativo.
   */
  theme: Theme;
  /**
   * Tema efectivo que se está usando en pantalla (light/dark).
   */
  resolvedTheme: 'light' | 'dark';
  /**
   * Cambia la preferencia del usuario y fuerza el modo claro u oscuro.
   */
  setThemePreference: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = window.localStorage.getItem('theme-preference');

    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
      setResolvedTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
      return;
    }

    // Sin preferencia guardada: seguir el sistema sin setear data-theme.
    setTheme('system');

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setResolvedTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const setThemePreference = (nextTheme: 'light' | 'dark') => {
    setTheme(nextTheme);
    setResolvedTheme(nextTheme);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme-preference', nextTheme);
    }

    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return ctx;
}
