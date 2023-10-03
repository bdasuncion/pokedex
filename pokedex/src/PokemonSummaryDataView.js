import React from "react"

export class PokemonSummaryDataView extends React.Component {
    render() {
        const id = this.convertId(this.props.pid)
        var image
        try {
            image = require("./images/" + id + ".png")
        } catch {
            return (<span></span>)
        }

        return (
            <span>
                <div>
                    <img src={ image } alt={this.props.pname} width="64" height="64"/>
                </div>
                <div>
                    name: {this.props.pname}
                </div>
                <div>
                    type: {this.props.ptype}
                </div>
            </span>
        )
    }

    convertId(id) {
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