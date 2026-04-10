import type { Cat } from "../../components/ContentSection/ContentSection";
import ContentSection from "../../components/ContentSection/ContentSection";
import Header from "../../components/Header/Header";
import { useAppSelector } from "../../hook";

export default function FavoritesView() {
    const favoriteCats: Cat[] = useAppSelector(state => state.favoriteCats.favorites);

    return(
        <>
            <Header />
            { favoriteCats && <ContentSection cats={favoriteCats} /> }
        </>
    )
}