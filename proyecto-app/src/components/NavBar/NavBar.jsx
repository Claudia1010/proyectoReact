import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = props => {

    return(
        <div>
            <ul>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/" >Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/Login" >Login</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/Register" >Register</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/*" ></NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/RentList" >RentList</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/TotalRentList" >TotalRent</NavLink>
            </ul>
        </div>
    )
}

export default NavBar
