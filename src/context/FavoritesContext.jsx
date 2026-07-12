import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

const STORAGE_KEY = 'primehomes-favorites';

/**
 * FavoritesProvider
 * Tracks which property IDs the visitor has "saved" (heart icon on
 * PropertyCard). Persisted to localStorage so it survives page reloads.
 */
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  const isFavorite = (id) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
