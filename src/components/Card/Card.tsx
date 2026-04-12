import type { Cat } from "../../types/cat.types";
import favorite from '/favorite.svg';
import favoriteBorder from '/favorite_border.svg';
import './Card.scss';
import { memo } from "react";

interface CardProps {
    cat: Cat;
    isFavorite: boolean;
    onAdd: (cat: Cat) => void;
    onRemove: (catId: string) => void;
}

function Card({ cat, isFavorite, onAdd, onRemove }: CardProps) {
    function changeFavoriteCats() {
        if (isFavorite) {
            onRemove(cat.id);
        } else {
            onAdd(cat);
        }
    }

    return(
        <div className="card">
            <img loading="lazy" className="card__image" src={cat.url} alt="картинка кошки" />
            <div className="card__wrapper">
                <button className="card__button" onClick={changeFavoriteCats}>
                    <img src={isFavorite ? `${favorite}` : `${favoriteBorder}`} alt="картинка лайка" />
                </button>
            </div>
        </div>
    )
}

export default memo(Card);