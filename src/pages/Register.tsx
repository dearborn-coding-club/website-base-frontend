import React from "react"
import "../css/Register.css"
import { registerOnSubmit }   from "../hooks/registerOnSubmit"

const Register: React.FC = () => {


    return(
        <div className="Register">
            <form className="register-form-wrapper" onSubmit={registerOnSubmit}>
                <input className="" type="text" name="username" placeholder="Username"/>
                <input className="" type="password" name="password" placeholder="Password"/>
                <input className="" type="password" name="confirm-password" placeholder="Confirm Password"/>
                <input className="" value="Register" type="submit"/>     
            </form>
        </div>
    )
}

export default Register