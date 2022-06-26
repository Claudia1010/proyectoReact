import React, { useState, useEffect } from "react"
import axios from "axios"
import FilmCard from "../../components/FilmCard/FilmCard"
import "./Searches.css"

const Searches = props => {

    let [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get("https://www.el-tiempo.net/api/json/v1/provincias")

            .then(show => {
                setWeather(show.data)
            })

    }, [])

    return (
        <div className="searchesStyles">
            {
                weather.map((city) => (
                    <FilmCard data={city} />
                ))
            }
        </div>
    )
}

export default Searches