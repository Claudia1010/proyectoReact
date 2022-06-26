import React from "react"
import "./FilmCard.css"

const FilmCard = props => {
    
    return (
        <div className="filmCard">
            <p id="ciudad">{props.data.name}</p>
            <p>{props.data.stateSky.description}</p>
            <p>Temperatura máxima: {props.data.temperatures.max}</p>
            <p>Temperatura mínima: {props.data.temperatures.min}</p>
        </div>
    )
}

export default FilmCard