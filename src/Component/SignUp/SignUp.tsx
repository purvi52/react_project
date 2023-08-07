import { Link } from "react-router-dom"
import "./signup.scss"

export default function SignUp() {
    return(
        <div className="backImage">
            <div className="foreImage">
                <div className="signup-page">
                    <div>
                        <img className="app-logo" src='/assets/posters/bingeboxlogo.svg'/>
                    </div>
                    <div>
                        <h3 className="Signup-heading">Sign Up</h3>
                    </div>
                    <form className="signup_form">
                        <input type="text" placeholder="Name" className="signup-input"/>
                        <input type="text" placeholder="Email ID" className="signup-input"/>
                        <input type="text" placeholder="Mobile no." className="signup-input"/>
                        <input type="password" placeholder="Create Password" className="signup-input"/>
                        <input type="password" placeholder="Confirm Password" className="signup-input"/>
                        <div className="signup-check">
                            <input type="checkbox" id="privacy" className="privacy-check"/>
                            <label className="privacy-policy" htmlFor="privacy">By signing up, you agree to our <a href="">privacy policy</a></label>
                        </div>
                        

                        <Link to='/Subscription'><button className="signup-btn">Sign Up</button></Link>
                    </form>
                </div>
                <div className="tags">
                    <div className="display-lines">
                        <div className="display-line1">
                            <h1>
                                <div className="dl1">Lights, Camera,</div>
                                Sign Up
                            </h1>
                            <p>Begin Your Epic Movie Streaming Now!</p>
                        </div>

                        <div className="display-line2">
                            <h1>
                                Join 
                                <div className="dl1">the Movie Streaming Revolution</div>
                            </h1>
                            <p>Sign Up and Dive into a World of Cinematic Delights!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}