import type { Cat } from "../ContentSection/ContentSection";
import favorite from '/favorite.svg';
import favoriteBorder from '/favorite_border.svg';
import './Card.scss';
import { addFavoriteCat, removeFavoriteCat } from "../../store/favoriteCatsSlice";
import { useAppDispatch } from "../../hook";

interface CardProps {
    content: Cat;
    favoriteCats: Cat[];
}

export default function Card({ content, favoriteCats }: CardProps) {
    const dispatch = useAppDispatch();

    const favoriteCat: Cat | undefined = favoriteCats.find(cat => cat.id === content.id);

    function changeFavoriteCats() {
        if (!favoriteCat) {
            dispatch(addFavoriteCat({ cat: content }));
        } else {
            dispatch(removeFavoriteCat({ cat: content }));
        }
    }

    return(
        <div className="card">
            <img className="card__image" src={content.url} alt="картинка кошки" />
            <div className="card__wrapper">
                <button className="card__button" onClick={changeFavoriteCats}>
                    <img src={favoriteCat ? `${favorite}` : `${favoriteBorder}`} alt="картинка лайка" />
                </button>
            </div>
        </div>
    )
}