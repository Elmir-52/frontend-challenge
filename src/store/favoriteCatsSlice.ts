import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cat } from "../components/ContentSection/ContentSection";

interface FavoriteCatActionPayload {
    cat: Cat;
}

interface FavoriteCatsState {
    favorites: Cat[];
}

const initialState: FavoriteCatsState = {
    favorites: [],
}

const favoriteCatsSlice = createSlice({
    name: 'favoriteCats',
    initialState,
    reducers: {
        addFavoriteCat(state, action: PayloadAction<FavoriteCatActionPayload>) {
            state.favorites.push(action.payload.cat);
        },

        removeFavoriteCat(state, action: PayloadAction<FavoriteCatActionPayload>) {
            state.favorites = state.favorites.filter(cat => cat.id !== action.payload.cat.id);
        }
    },
});

export const { addFavoriteCat, removeFavoriteCat } = favoriteCatsSlice.actions;

const favoriteCatsReducer = favoriteCatsSlice.reducer;
export default favoriteCatsReducer;