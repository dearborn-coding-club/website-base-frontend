import FormCircleLoading from "../components/FormCircleLoading"
import "../css/EditProfile.css"

const EditProfile: React.FC = () => {

    


    return (
        <div className="Editprofile">
            <div className="wrapper">

                <div className="heading"> 
                    Edit Profile
                </div>
                
                <form className="edit-form">

                    <div>
                        <label>Username*:</label>
                        <div>
                            <input type="text"/>
                            <div><FormCircleLoading result="success"/></div>
                        </div>
                        <text className="error"></text>
                    </div>

                    <div>
                        <label>Password*:</label>
                        <div>
                            <input type="password"/>
                            <div><FormCircleLoading result="fail"/></div>
                        </div>
                        <text className="error"></text>
                    </div>

                    <div>
                        <label>Email:</label>
                        <div>
                            <input type="email"/>
                            <div><FormCircleLoading result="fail"/></div>
                        </div>
                        <text className="error"></text>
                    </div>

                    <div>
                        <label>Current role:</label>
                        <input type="text"/>
                    </div>

                    <div>
                        <label>Phone:</label>
                        <div>
                            <input type="text"/>
                            <div><FormCircleLoading result="fail"/></div>
                        </div>
                        <text className="error"></text>
                    </div>

                    <div>
                        <label>Leetcode Username:</label>
                        <div>
                            <input type="text"/>
                            <div><FormCircleLoading result="fail"/></div>
                        </div>
                        <text className="error"></text>
                    </div>

                    <div className="address-section">
                        <div>Address</div>

                        <div>
                            <label>Street Address:</label>
                            <input type="text"/>
                        </div>

                        <div>
                        <label>City:</label>
                        <input type="text"/>
                        </div>

                        <div>
                        <label>State:</label>
                        <input type="text"/>
                        </div>

                        <div>
                        <label>Zipcode:</label>
                        <input type="text"/>
                        </div>
                    </div>

                    <div className="about-me">
                        <label>About me:</label>
                        <textarea rows={5}/>
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile