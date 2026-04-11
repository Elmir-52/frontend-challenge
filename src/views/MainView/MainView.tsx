import { useEffect, useRef, useState } from "react";
import ContentSection, { type Cat } from "../../components/ContentSection/ContentSection";
import Header from "../../components/Header/Header";

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
                console.log(entries);
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
            <ContentSection cats={cats} />
            <div style={{ textAlign: 'center', marginBottom: '40px' }} ref={loaderRef}>...загружаем котиков...</div>
        </>
    )
}