import React, { useState } from 'react'

const Pokemon:React.FC = () => {
    const [pokeResults, setPokeResults] = useState<[]>([])
    
    const FetchPoke = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    console.log(response)
                    setPokeResults(
                        response["results"]
                    );
                })
                .catch(err => {
                    console.log(err);
                });
    }

    return (
        <div>
            <button className="get-poke" onClick = {FetchPoke}>Fetch Poke</button>
        
            <ul id="PokeList">
                {pokeResults.map((value, i)=> (
                    <li key ={i}>{value["name"]}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Pokemon
