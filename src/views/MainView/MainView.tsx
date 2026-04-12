import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import CardsList from "../../components/CardList/CardList";
import type { Cat } from "../../types/cat.types";

const catApiKey: string = import.meta.env.VITE_CAT_API_KEY;

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
                "x-api-key": catApiKey,
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

                setCats(prev => [...prev, ...data]);
                setLoading(false);
            } catch(e) {
                console.error(e);
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
            <div style={{ textAlign: 'center', marginBottom: '40px' }} ref={loaderRef}>...загружаем котиков...</div>
        </>
    )
}