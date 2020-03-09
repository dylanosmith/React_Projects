import React, { useState } from 'react'
import axios from 'axios';

const Pokemon:React.FC = () => {
    const [pokeResults, setPokeResults] = useState<[]>([])
    
    // const FetchPoke = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //             .then(response => {
    //                 return response.json();
    //             })
    //             .then(response => {
    //                 console.log(response)
    //                 setPokeResults(
    //                     response["results"]
    //                 );
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    // }
    const FetchPoke = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response =>{
            return response;
        }).then(response =>{
            console.log(response);
            setPokeResults(
                response["data"]["results"]
            )
        }).catch(err =>{console.log(err)})

    }

    const GetImage = async (id:number) => {
        
       const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
       return result.data['sprites']['front_default']
    }

    return (
        <div>
            <button className="get-poke" onClick = {FetchPoke}>Fetch Poke</button>
        
            <ul id="PokeList">
                {pokeResults.map((value, i)=> (
                    <li key ={i}>
                        {value["name"]}
                        <img src= {`${GetImage(i+1).then(function(result){})}`} alt="poke"/>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Pokemon
