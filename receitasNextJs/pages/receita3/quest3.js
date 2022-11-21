export default function Movies({data, pesquisa}){
    return (    
        <div>  
            <form method="GET" style={{marginBottom: "20px"}}>
                <input type="text" name="pesquisa" placeholder="Procurar filme:" defaultValue={pesquisa}></input>
                <input type="submit" value="&#128269;"></input>
            </form>

            <div>  
                {data.Search.map((m) => <div style={{marginBottom:"30px"}}> Nome: {m.Title} | Ano de produção: {m.Year} <br></br> <img src={m.Poster}></img></div>)}                   
            </div>    
        </div>    
    )    
}

export async function getServerSideProps(context){

    const {pesquisa} = context.query;
    const res = await fetch(`http://www.omdbapi.com/?apikey=7e82baf&s=` + pesquisa)
  
    const data = await res.json()  
        return {
            props: {  
                data
            }
        }  
}
