//import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { PokemonResource } from './PokemonResource';

import { PokemonGridView } from './PokmeonGridView';
function App() {
  const pokemonObjs = PokemonResource.find()
  const [nameSearch, setNameSearch] = useState("")

  let filtered = pokemonObjs.filter((pokemon) => {
    if (nameSearch === '') {
      return true
    } else if (pokemon.name.english.toLowerCase().includes(nameSearch.toLowerCase()) ||
               pokemon.type.toString().toLowerCase().includes(nameSearch.toLowerCase())) {
      return true
    }
    return false
  })
    
  return (
    <div className="App">
        <input placeholder="Enter Name or Type" value={ nameSearch } onChange={ onSearch }></input>
        {
          <PokemonGridView pokemons={filtered} ></PokemonGridView>
        }
    </div>
  );

  function onSearch(event) {
    setNameSearch(event.target.value)
  }
}


export default App;
