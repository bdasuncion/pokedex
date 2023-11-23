import React from "react"
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

/*function handleClick() {
    const navigate = useNavigate()
    navigate('/details', {replace:true})
}*/

export function PokemonSummaryDataView(props) {
    const id = convertId(props.pid)
        
    var image
    try {
        image = require("../images/" + id + ".png")
    } catch {
        return (<span></span>)
    }

    return (
        <span>
             <Link to="/details" state={  {pname: props.pname, pid: props.pid, ptype:props.pname} }>
            <div>
                <img src={ image } alt={props.pname} width="64" height="64"/>
            </div>
            <div>
                Name: {props.pname}
            </div>
            <div>
                Type: {props.ptype}
            </div>
           </Link>
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