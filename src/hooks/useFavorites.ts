import { useState, useCallback } from 'react';
import type { Cat } from '../types/cat.types';

const STORAGE_KEY = 'FAVORITE_CATS';

function readFavorites(): Cat[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

export function useFavorites() {
    const [favorites, setFavorites] = useState<Cat[]>(readFavorites);

    const addFavorite = useCallback((cat: Cat) => {
        const currentFavorites = readFavorites();
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...currentFavorites, cat]));
        setFavorites(readFavorites());
    }, []);

    const removeFavorite = useCallback((catId: string) => {
        const currentFavorites = readFavorites();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentFavorites.filter(favoriteCat => favoriteCat.id !== catId)));
        setFavorites(readFavorites());
    }, []);

    function isFavorite(catId: string) {
        return favorites.some(favoriteCat => favoriteCat.id === catId);
    }

    return { favorites, addFavorite, removeFavorite, isFavorite };
}

