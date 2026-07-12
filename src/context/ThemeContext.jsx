import { createContext, useContext, useEffect, useState } from 'react';

/**
 * ThemeContext
 * Provides global dark/light mode state to the entire app.
 * Persists user preference in localStorage and respects the
 * OS-level `prefers-color-scheme` on first visit.
 */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('primehomes-theme');
    if (saved) return saved;
    const prefersDark = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('primehomes-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
