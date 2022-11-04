export default function Home(){
    return ( 
       <div>
          <h2>
            Viva Santana! 
          </h2> 

          <h3>Origem:</h3>
          <p>
          Reza a lenda popular que 
          um sertanejo, em meio a uma grande 
          seca que pairava sobre o povoado onde 
          viria a ser a cidade de Caicó, procurava 
          água para seu rebanho quando se deparou com um 
          touro bravo. Desesperado, ele fez uma prece à 
          Sant'Ana para que o animal não o atacasse.
          </p>
          <ChamarComponentes teste = "BRUNO"/>
       </div> 
    )
}

export function ChamarComponentes ({teste}) {
    return (
        <div>{teste}</div>
    )
}