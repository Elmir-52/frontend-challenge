import type { Cat } from "../ContentSection/ContentSection";
import favorite from '/favorite.svg';
import favoriteBorder from '/favorite_border.svg';
import './Card.scss';

interface CardProps {
    content: Cat;
}

export default function Card({ content }: CardProps) {
    return(
        <div className="card">
            <img className="card__image" src={content.url} alt="картинка кошки" />
            <div className="card__wrapper">
                <button className="card__button">
                    <img src={favoriteBorder} alt="картинка лайка" />
                </button>
            </div>
        </div>
    )
}