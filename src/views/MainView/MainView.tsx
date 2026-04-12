import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import CardsList from "../../components/CardList/CardList";
import type { Cat } from "../../types/cat.types";

const CAT_API_KEY: string = import.meta.env.VITE_CAT_API_KEY;
const LIMIT = 15;

export default function MainView() {
    const [cats, setCats] = useState<Cat[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    const loaderRef = useRef<HTMLDivElement | null>(null)
        
    useEffect(() => {
        async function getCats() {
            if (loading) return;

            setLoading(true);

            const headers = new Headers({
                "Content-Type": "application/json",
                "x-api-key": CAT_API_KEY,
            });
    
            const requestOptions = {
                method: 'GET',
                headers: headers,
            };
    
            const url = `https://api.thecatapi.com/v1/images/search?limit=${LIMIT}`
    
            try {
                const response = await fetch(url, requestOptions);
                
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                setCats(prev => [...prev, ...data]);
            } catch(e) {
                console.error(e);
            } finally {
                setLoading(false);  
            }
    
        }

        getCats();

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                getCats();
            }
        });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return(
        <>
            <Header />
            <CardsList cats={cats} />
            <div className="loader" ref={loaderRef}>...загружаем котиков...</div>
        </>
    )
}