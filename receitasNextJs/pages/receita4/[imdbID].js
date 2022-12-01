import useSWR from 'swr'

import {useRouter} from 'next/router'

export default function Movies(){
    const router = useRouter();
    const {imdbID} = router.query;

    const {data, error} = useSWR("http://www.omdbapi.com/?apikey=7e82baf&i=" + imdbID, fetcher); 

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            <div>
                 Nome:{data.Title} | Data de lançamento:{data.Year}<br/>
                <img src={data.Poster}></img>
            </div>
            <a href='quest1/'>Página inicial</a>
        </div>
    )    
}



async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}