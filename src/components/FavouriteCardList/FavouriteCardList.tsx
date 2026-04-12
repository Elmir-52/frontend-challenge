import { useFavorites } from "../../hooks/useFavorites";
import Card from "../Card/Card";

export default function FavoriteCardsList() {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    return(
        <div className="card-list">
            {favorites.map(cat =>
                <Card 
                    key={cat.id} 
                    cat={cat} 
                    isFavorite={true} 
                    onAdd={addFavorite}
                    onRemove={removeFavorite}
                />
            )}
        </div>
    )
}