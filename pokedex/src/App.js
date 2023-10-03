//import logo from './logo.svg';
import './App.css';

import { PokemonGridView } from './PokmeonGridView';
function App() {
  let pokemonObjs = require("./pokedex.json")
  return (
    <div className="App">
        {
            <PokemonGridView pokemons={pokemonObjs} ></PokemonGridView>
        }
    </div>
  );
}

export default App;
