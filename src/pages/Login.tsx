import React from "react"
import "../css/Login.css"
import { Link, useLocation } from "react-router-dom"
import useLoginForm from "../hooks/useLoginForm"

const Login: React.FC = () => {

    const { errorMessage, loginOnSubmit } = useLoginForm()

    const { state } = useLocation()
    const registeredUsername = typeof state?.registeredUsername === "string" ? state.registeredUsername : ""

    return(
        <div className="Login">
            <form className="login-form-wrapper" onSubmit={loginOnSubmit}>
                {registeredUsername && <p role="status">Account created. Sign in to get started.</p>}
                <input type="text" name="username" placeholder="Username" aria-label="Username"
                    autoComplete="username" defaultValue={registeredUsername} required />
                <input type="password" name="password" placeholder="Password" aria-label="Password" autoComplete="current-password" required />
                <input value="Login" type="submit"/>
                <label>Don't Have an account? <Link to={'/register'}>Register!</Link></label>
                <Link to={'/'}>Forgot password!</Link>
                <label className="errorMessage">{errorMessage}</label>
            </form>
        </div>
    )
}

export default Login