<<<<<<< HEAD
export class PokemonResource {
    static find() {
        let pokemonObjs = require("./pokedex.json")
        return new Promise((resolve) => {
            resolve(pokemonObjs)
        })
    }
=======
export class PokemonResource {
    static find() {
        let pokemonObjs = require("./pokedex.json")
        return pokemonObjs
    }
>>>>>>> refs/remotes/origin/main
}