export class PokemonResource {
    static find() {
        let pokemonObjs = require("./pokedex.json")
        return pokemonObjs
    }
}