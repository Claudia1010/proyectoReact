import React, { useState, useEffect } from "react"
import "./Login.css"

const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handlerForm = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const loginFunction = async () => {

    }

    return (
        
        <div className="loginStyles">

            {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}

            <div>
                <input className="email" type="text" label="Email" name="email" placeholder="E-mail " onChange={(event) => {handlerForm(event)}} />
            </div>
            
            <div>
                <input className="password" type="text" label="Password" name="password" placeholder="Password " onChange={(event) => {handlerForm(event)}} />
            </div>
            
            <div>
                <button className="loginButtom" type="submit" target="_self" onClick={() => loginFunction()}>Log in</button>
            </div>
        </div>

    )

}

export default Login