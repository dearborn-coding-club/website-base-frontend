import FormCircleLoading from "../components/FormCircleLoading"
import "../css/EditProfile.css"
import useEditPage from "../hooks/useEditPage"

const EditProfile: React.FC = () => {
  const s = useEditPage()

  return (
    <div className="Editprofile page">
      <header className="page-head">
        <h1>Edit profile</h1>
        <p>
          What other members see on the community page. Fields marked required
          are checked as you type.
        </p>
      </header>

      <form className="edit-form" ref={s.formRef} onSubmit={s.onSubmitSave}>
        <fieldset className="form-section">
          <legend>Account</legend>

          <div className="field">
            <label htmlFor="username">Username (required)</label>
            <div className="field-row">
              <input
                id="username"
                className="input"
                name="username"
                type="text"
                autoComplete="username"
                onChange={s.onChangeUsername}
              />
              <FormCircleLoading result={s.usernameLoading} />
            </div>
            <span className="field-error">{s.usernameError}</span>
          </div>

          <div className="field">
            <label htmlFor="password">Password (required)</label>
            <div className="field-row">
              <input
                id="password"
                className="input"
                name="password"
                type="password"
                autoComplete="new-password"
                onChange={s.onChangePassword}
              />
              <FormCircleLoading result={s.passwordLoading} />
            </div>
            <span className="field-error">{s.passwordError}</span>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <div className="field-row">
              <input
                id="email"
                className="input"
                name="email"
                type="text"
                autoComplete="email"
                onChange={s.onChangeEmail}
              />
              <FormCircleLoading result={s.emailLoading} />
            </div>
            <span className="field-error">{s.emailError}</span>
          </div>

          <div className="field">
            <label htmlFor="phone">Phone</label>
            <div className="field-row">
              <input
                id="phone"
                className="input"
                name="phone"
                type="text"
                autoComplete="tel"
                onChange={s.onChangePhone}
              />
              <FormCircleLoading result={s.phoneLoading} />
            </div>
            <span className="field-error">{s.phoneError}</span>
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Profile</legend>

          <div className="field">
            <label htmlFor="role">Current role</label>
            <input id="role" className="input" name="role" type="text" />
          </div>

          <div className="field">
            <label htmlFor="leetcode">LeetCode username</label>
            <div className="field-row">
              <input
                id="leetcode"
                className="input"
                name="leetcode"
                type="text"
                onChange={s.onChangeLeetcode}
              />
              <FormCircleLoading result={s.leetcodeLoading} />
            </div>
            <span className="field-error">{s.leetcodeError}</span>
          </div>

          <div className="field field-full">
            <label htmlFor="about-me">About me</label>
            <textarea id="about-me" className="input" name="about-me" rows={5} />
            <span className="field-hint">
              A few lines about what you are working on or want to learn.
            </span>
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Address</legend>

          <div className="field field-full">
            <label htmlFor="street">Street address</label>
            <input
              id="street"
              className="input"
              name="street"
              type="text"
              autoComplete="street-address"
            />
          </div>

          <div className="field">
            <label htmlFor="city">City</label>
            <input id="city" className="input" name="city" type="text" autoComplete="address-level2" />
          </div>

          <div className="field">
            <label htmlFor="state">State</label>
            <input id="state" className="input" name="state" type="text" autoComplete="address-level1" />
          </div>

          <div className="field">
            <label htmlFor="zipcode">ZIP code</label>
            <input id="zipcode" className="input" name="zipcode" type="text" autoComplete="postal-code" />
          </div>
        </fieldset>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
