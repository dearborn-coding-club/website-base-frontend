import { Link } from "react-router-dom"
import "../css/Register.css"
import useRegisterForm, { passwordRequirements } from "../hooks/useRegisterForm"

export default function Register() {
    const { errorMessage, isSubmitting, registerOnSubmit, password, setPassword } = useRegisterForm()

    return (
        <main className="Register">
            <div className="register-card">
                <h1>Create your account</h1>
                <p>Join Dearborn Coding Club online.</p>
                <form onSubmit={registerOnSubmit} aria-busy={isSubmitting}>
                    <fieldset disabled={isSubmitting}>
                        <label htmlFor="register-username">Username</label>
                        <input id="register-username" name="username" autoComplete="username" maxLength={150} required />
                        <label htmlFor="register-email">Email address</label>
                        <input id="register-email" name="email" type="email" autoComplete="email" maxLength={254} required />
                        <label htmlFor="register-password">Password</label>
                        <input id="register-password" name="password" type="password" autoComplete="new-password"
                            aria-describedby="register-password-rules" onChange={(event) => setPassword(event.target.value)} required />
                        <ul id="register-password-rules" className="register-password-rules" aria-label="Password requirements">
                            {passwordRequirements.map(({ label, matches }) => (
                                <li key={label} data-met={matches(password)}>
                                    <span aria-hidden="true">{matches(password) ? "✓" : "○"}</span> {label}
                                </li>
                            ))}
                        </ul>
                        <label htmlFor="register-confirm-password">Confirm password</label>
                        <input id="register-confirm-password" name="confirm-password" type="password" autoComplete="new-password" required />
                        {errorMessage && <p className="register-error" role="alert">{errorMessage}</p>}
                        <button type="submit">{isSubmitting ? "Creating account…" : "Create account"}</button>
                    </fieldset>
                </form>
                <p className="register-sign-in">Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </main>
    )
}
