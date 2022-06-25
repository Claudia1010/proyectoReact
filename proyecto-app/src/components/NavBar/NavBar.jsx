import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = props => {
    return(
        <div>
            <ul>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/">Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/login">Login</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/register">Register</NavLink>
            </ul>
        </div>
    )

}

export default NavBar
