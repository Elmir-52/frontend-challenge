import { useEffect, useState } from "react";
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

export default function ContentSection() {
    const [cats, setCats] = useState<Cat[] | undefined>();

    
    useEffect(() => {
        async function getCats() {
            const headers = new Headers({
                "Content-Type": "application/json",
                "x-api-key": "live_fAieJgMDieBPF8dOzALWr9YUzk4RgBnzbtgoWg4oYqBNHc3btHHTsEIJ6e2ZKFN3"
            });
    
            const requestOptions = {
                method: 'GET',
                headers: headers,
            };
    
            const limit = 15;
            const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    
            try {
                const response = await fetch(url, requestOptions);
                
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                setCats(data);
            } catch(e) {
                console.error(e);
            }
    
        }

        getCats();
    }, []);

    if (!cats) {
        // добавить надпись загрузки
        return '';
    }

    return(
        <>
            <section className="content">
                <CardList content={cats} />
            </section>
        </>
    );
}