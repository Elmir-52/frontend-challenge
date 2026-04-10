import Card from "../Card/Card";
import type { Cat } from "../ContentSection/ContentSection";
import './CardList.scss';

interface CardListProps {
    content: Cat[];
}

export default function CardsList({ content }: CardListProps) {
    

    return(
        <div className="card-list">
            {content.map(contentItem => <Card key={contentItem.id} content={contentItem} />)}
        </div>
    )
}