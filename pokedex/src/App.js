//import logo from './logo.svg';
import './App.css';
//import { useState, useEffect } from "react";
//import { PokemonResource } from './pages/PokemonResource';

//import { PokemonGridView } from './pages/PokmeonGridView';
import { PokemonDetailDataView } from './pages/PokemonDetailDataView';
import { PokemonAllView } from './pages/PokemonAllView';

import { Routes, Route } from 'react-router-dom';

function App() {

  /*let [pokemonObjs, setPokemons] = useState([]) 

  useEffect(() => {
    PokemonResource.find()
    .then((pokemons) => {
      setPokemons(pokemons)
    })
  }, []);*/

  //const [nameSearch, setNameSearch] = useState("")

  /*let filtered = pokemonObjs.filter((pokemon) => {
    if (nameSearch === '') {
      return true
    } else if (pokemon.name.english.toLowerCase().includes(nameSearch.toLowerCase()) ||
               pokemon.type.toString().toLowerCase().includes(nameSearch.toLowerCase())) {
      return true
    }
    return false
  })*/
    
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<PokemonAllView />} /> 
          <Route path="/details" element={<PokemonDetailDataView />} />
      </Routes>
    </div>
  );

  /*function onSearch(event) {
    setNameSearch(event.target.value)
  }*/
}


export default App;
