import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cat } from "../components/ContentSection/ContentSection";

interface AddFavoriteCatActionPayload {
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
        addFavoriteCat(state, action: PayloadAction<AddFavoriteCatActionPayload>) {
            state.favorites.push(action.payload.cat);
        }
    },
});

export const { addFavoriteCat } = favoriteCatsSlice.actions;

const favoriteCatsReducer = favoriteCatsSlice.reducer;
export default favoriteCatsReducer;