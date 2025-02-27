import React from "react"
import "../css/Register.css"
import useRegisterForm from "../hooks/useRegisterForm"

const Register: React.FC = () => {
    const {
        errorMessage,
        registerOnSubmit,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword
    } = useRegisterForm();

    return (
        <div className="Register">
            <form className="register-form-wrapper" onSubmit={registerOnSubmit}>
                <input className="" type="text" name="username" placeholder="username"/>
                <input className="" type="email" name="email" placeholder="email"/>
                <input
                    className=""
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className=""
                    type="password"
                    name="confirm-password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input className="" value="Register" type="submit"/>
                <label className="errorMessage">{errorMessage}</label>
            </form>
            <div className="password-requirements">
                <h4>Password must contain:</h4>
                <ul>
                    <li className={password.length >= 8 ? "valid" : "invalid"}>At least 8 characters</li>
                    <li className={/[A-Z]/.test(password) ? "valid" : "invalid"}>At least one uppercase letter</li>
                    <li className={/[a-z]/.test(password) ? "valid" : "invalid"}>At least one lowercase letter</li>
                    <li className={/\d/.test(password) ? "valid" : "invalid"}>At least one number</li>
                    <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid" : "invalid"}>At least one special character</li>
                </ul>
            </div>
        </div>
    );
};

export default Register