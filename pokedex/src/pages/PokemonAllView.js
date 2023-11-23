import  React  from "react";
import { PokemonResource } from './PokemonResource';
import { PokemonGridView } from './PokmeonGridView';

import { useState, useEffect } from "react";
//import { PokemonDetailDataView } from './PokemonDetailDataView';

export function PokemonAllView(props) {
    const [pokemonObjs, setPokemons] = useState([]) 
    const [nameSearch, setNameSearch] = useState("")
    
    useEffect(() => {
        PokemonResource.find()
        .then((pokemons) => {
        setPokemons(pokemons)
        })
    }, []);
        
    return (
    <div className="App">
        <input placeholder="Enter Name or Type" value={ nameSearch } onChange={ onSearch }></input>
        {
            <PokemonGridView pokemons={ pokemonObjs } filter={ nameSearch } ></PokemonGridView>
        }
    </div>);

    function onSearch(event) {
     setNameSearch(event.target.value)
    }
}