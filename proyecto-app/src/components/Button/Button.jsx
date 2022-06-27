import React from "react"
import { useNavigate } from "react-router-dom"
import "./button.css"

const Button = (props) => {

    let navigator = useNavigate()

    const screen = () => {
        
        navigator(props.destiny)
    }

    return (
        <div className="buttonDesing">
                <div className="buttons" onClick={()=>screen()}>{props.name}</div>
        </div>
    )
}

export default Button