import React from "react"

import { PokemonSummaryDataView } from "./PokemonSummaryDataView";

export function PokemonGridView(props) {
    const grid_container =  {
        "display": "grid",
        "grid-template-columns": "auto auto auto auto",
        "justifyContent": "space-evenly",
    }
    const pokemonObjs = props.pokemons

    let filtered = pokemonObjs.filter((pokemon) => {
        if (props.filter === '') {
            return true
        } else if (pokemon.name.english.toLowerCase().includes(props.filter.toLowerCase()) ||
                    pokemon.type.toString().toLowerCase().includes(props.filter.toLowerCase())) {
            return true
        }
        return false
    })

    return (
        <div style={grid_container}> 
        {
            filtered.map((o, i) => {
              return <PokemonSummaryDataView pid={o.id} pname={o.name.english} ptype={o.type.toString()} key={i}></PokemonSummaryDataView>
            })
        }
        </div>
    )
} 
