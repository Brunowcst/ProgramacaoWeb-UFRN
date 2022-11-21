export default function Movies({data}){
    return (    
        <div>    
            <div>  
                {data.Search.map((m) => <div> Nome: {m.Title} | Ano de produção: {m.Year} <br></br> <img src={m.Poster}></img></div>)}                   
            </div>    
        </div>    
    )    
}

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=7e82baf&s=bagdad`)
  
    const data = await res.json()  
        return {
            props: {  
                data
            }
        }  
}
