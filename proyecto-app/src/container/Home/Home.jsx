import React from "react"
import "./Home.css"
import img from "../../public/img/portada.jpeg"

const Home = () => {
    return(
        <div className="homeStyles">
            <img className="portada" src={img} alt="portada" />
        </div>
    )  
}

export default Home