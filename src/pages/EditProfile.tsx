import FormCircleLoading from "../components/FormCircleLoading"
import "../css/EditProfile.css"
import useEditPage from "../hooks/useEditPage"

const EditProfile: React.FC = () => {

    const stateObject = useEditPage()

    return (
        <div className="Editprofile">
            <div className="wrapper">

                <div className="heading"> 
                    Edit Profile
                </div>
                
                <form className="edit-form" ref={stateObject.formRef} onSubmit={stateObject.onSubmitSave}>

                    <div>
                        <label>Username*:</label>
                        <div>
                            <input name="username" type="text" onChange={stateObject.onChangeUsername}/>
                            <div><FormCircleLoading result={stateObject.usernameLoading}/></div>
                        </div>
                        <span className="error">{stateObject.usernameError}</span>
                    </div>

                    <div>
                        <label>Password*:</label>
                        <div>
                            <input name="password" type="password" onChange={stateObject.onChangePassword}/>
                            <div><FormCircleLoading result={stateObject.passwordLoading}/></div>
                        </div>
                        <span className="error">{stateObject.passwordError}</span>
                    </div>

                    <div>
                        <label>Email:</label>
                        <div>
                            <input name="email" type="text" onChange={stateObject.onChangeEmail}/>
                            <div><FormCircleLoading result={stateObject.emailLoading}/></div>
                        </div>
                        <span className="error">{stateObject.emailError}</span>
                    </div>

                    <div>
                        <label>Current role:</label>
                        <input name="role" type="text"/>
                    </div>

                    <div>
                        <label>Phone:</label>
                        <div>
                            <input name="phone" type="text" onChange={stateObject.onChangePhone}/>
                            <div><FormCircleLoading result={stateObject.phoneLoading}/></div>
                        </div>
                        <span className="error">{stateObject.phoneError}</span>
                    </div>

                    <div>
                        <label>Leetcode Username:</label>
                        <div>
                            <input name="leetcode" type="text" onChange={stateObject.onChangeLeetcode}/>
                            <div><FormCircleLoading result={stateObject.leetcodeLoading}/></div>
                        </div>
                        <span className="error">{stateObject.leetcodeError}</span>
                    </div>

                    <div className="address-section">
                        <div>Address</div>

                        <div>
                            <label>Street Address:</label>
                            <input name="street" type="text" />
                        </div>

                        <div>
                        <label>City:</label>
                        <input name="city" type="text" />
                        </div>

                        <div>
                        <label>State:</label>
                        <input name="state" type="text" />
                        </div>

                        <div>
                        <label>Zipcode:</label>
                        <input name="zipcode" type="text" />
                        </div>
                    </div>

                    <div className="about-me">
                        <label>About me:</label>
                        <textarea name="about-me" rows={5} />
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile