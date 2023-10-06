import React from "react"

import { PokemonSummaryDataView } from "./PokemonSummaryDataView"

export class PokemonGridView extends React.Component {
    render() {
        const grid_container =  {
            "display": "grid",
            "grid-template-columns": "auto auto auto auto",
            "justifyContent": "space-evenly",
        }
        const pokemonObjs = this.props.pokemons
        return (
            <div style={grid_container}> 
            {
                pokemonObjs.map((o, i) => {
                  return <PokemonSummaryDataView pid={o.id} pname={o.name.english} ptype={o.type.toString()} key={i}></PokemonSummaryDataView>
                })
            }
            </div>
        )
    }
}