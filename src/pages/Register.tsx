import React from "react"
import "../css/Register.css"
import useRegisterForm from "../hooks/useRegisterForm"

const Register: React.FC = () => {

    const { errorMessage, registerOnSubmit } = useRegisterForm()

    return(
        <div className="Register">
            <form className="register-form-wrapper" onSubmit={registerOnSubmit}>
                <input className="" type="text" name="username" placeholder="Username"/>
                <input className="" type="password" name="password" placeholder="Password"/>
                <input className="" type="password" name="confirm-password" placeholder="Confirm Password"/>
                <input className="" value="Register" type="submit"/>
                <label className="errorMessage">{errorMessage}</label>
            </form>
        </div>
    )
}

export default Register