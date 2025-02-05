import React from "react"
import "../css/Login.css"
import { Link } from "react-router-dom"
import useLoginForm from "../hooks/useLoginForm"

const Login: React.FC = () => {

    const { errorMessage, loginOnSubmit } = useLoginForm()

    return(
        <div className="Login">
            <form className="login-form-wrapper" onSubmit={loginOnSubmit}>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
                <input value="Login" type="submit"/>
                <label>Don't Have an account? <Link to={'/register'}>Register!</Link></label>
                <Link to={'/'}>Forgot password!</Link>
                <label className="errorMessage">{errorMessage}</label>
            </form>
        </div>
    )
}

export default Login