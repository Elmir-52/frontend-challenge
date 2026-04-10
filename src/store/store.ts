import { configureStore } from "@reduxjs/toolkit";
import favoriteCatsReducer from "./FavoriteCatsSlice";

const store = configureStore({
    reducer: {
        favoriteCats: favoriteCatsReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;