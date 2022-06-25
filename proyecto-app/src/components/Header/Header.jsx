import React from "react"
import {NavLink} from "react-router-dom"
import "./Header.css"

const Header = () => {

    return(
        <div>
            <ul className="links">
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/" >Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/Login" >Login</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/Register" >Register</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/RentList" >RentList</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/TotalRentList" >TotalRent</NavLink>
            </ul>
        </div>
    )
}

export default Header