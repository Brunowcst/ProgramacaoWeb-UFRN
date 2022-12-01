import useSWR from 'swr'

import {useRouter} from 'next/router'

export default function quest2(){
    const router = useRouter();
    const { imdbID } = router.query;

    const {data, error} = useSWR("https://extreme-ip-lookup.com/json/?key=0ZtsgPq9FY4GYlan496m", fetcher); 

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
                {Object.keys(data).map(m => (
                    <div>
                        <p><b>{m}:</b>{data[m]}</p>
                    </div>
                ))}
        </div>
    )    
}



async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}