import React from "react"
import Button from "../Button/Button"
import "./Header.css"

const Header = () => {

    return (
        <div className="header">
                <Button name="Home" destiny="/" />
                <Button name="Searches" destiny="/searches" />
                <Button name="Login" destiny="/login" />
                <Button name="Register" destiny="/register" />
                <Button name="RentList" destiny="/rentList" />
                <Button name="TotalRentList" destiny="/totalRentList" />
        </div>
    )
}

export default Header