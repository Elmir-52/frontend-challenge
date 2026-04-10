import CardList from "../CardList/CardList";
import './ContentSection.scss';

interface Breed {
    weight:{
        imperial: string;
        metric: string;
    },
    id: string;
    name: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    life_span: string;
    wikipedia_url: string;
}

interface Category {
    id: number;
    name: string;
}

export interface Cat {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds?: Breed[];
    categories?: Category[];
}

interface ContentSectionProps {
    cats: Cat[];
}

export default function ContentSection({ cats }: ContentSectionProps) {
    return(
        <>
            <section className="content">
                <CardList content={cats} />
            </section>
        </>
    );
}