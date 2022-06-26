import React from "react"
import "./FilmCard.css"

const FilmCard = props => {
    
    return (
        <div className="filmCard">
            <p>Ciudad: {props.data.name}</p>
            <p>Descripción: {props.data.stateSky.description}</p>
            <p>Temperatura: <br /> 
                <span>max: {props.data.temperatures.max}</span>
                <span>min: {props.data.temperatures.min}</span>
            </p>
        </div>
    )
}

export default FilmCard