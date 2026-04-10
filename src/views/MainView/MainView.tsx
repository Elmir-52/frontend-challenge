import { useEffect, useState } from "react";
import ContentSection, { type Cat } from "../../components/ContentSection/ContentSection";
import Header from "../../components/Header/Header";

export default function MainView() {
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

    return(
        <>
            <Header />
            {cats ? <ContentSection cats={cats} /> : ''}
        </>
    )
}