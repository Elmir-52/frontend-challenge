import { Route, Routes, type RouteObject } from "react-router";
import MainView from "../views/MainView/MainView";
import FavoritesView from "../views/FavoritesView/FavoritesView";

export default function AppRoutes() {
    const navigationRoutes: RouteObject[] = [
        {path: '/', element: <MainView />},
        {path: '/favorites', element: <FavoritesView />},
    ];

    return(
        <Routes>
            {navigationRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
    )
}