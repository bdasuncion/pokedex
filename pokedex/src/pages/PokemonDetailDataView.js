import React from "react"
import { useLocation } from 'react-router-dom'

export function PokemonDetailDataView(props) {

    const location = useLocation()

    console.log(location)
    
    const id = convertId(location.state.pid)
        
    var image
    try {
        image = require("../images/" + id + ".png")
    } catch {
        return (<span></span>)
    }

    return (
        <span>
            <div>
                <img src={ image } alt={location.state.pname} width="256" height="256"/>
            </div>
            <div>
                Name: {location.state.pname}
            </div>
            <div>
                Type: {location.state.ptype}
            </div>
        </span>
    )

    function convertId(id) {
        const maxLengthString = 3
        var rawId = id.toString()
        var returnString = ""
        const PAD = maxLengthString - rawId.length
        for (var i = 0; i < PAD; ++i) {
            returnString += "0"
        }

        return returnString + rawId 
    }
} 