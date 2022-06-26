import React from "react"
import "./FilmCard.css"

const FilmCard = props => {
    
    return (
        <div className="filmCard">
            <p className="comunidadAutonoma">Comunidad autónoma: {props.data.COMUNIDAD_CIUDAD_AUTONOMA}</p>
            <p>Provincia: {props.data.NOMBRE_PROVINCIA}</p>
            <p>Cápital de provincia: {props.data.CAPITAL_PROVINCIA}</p>
        </div>
    )
}

export default FilmCard