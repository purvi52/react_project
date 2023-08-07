import { Link } from "react-router-dom"
import "./forgot.scss"

export default function Forgot_pass(){
    return(
        <div className="forgot-background">
            <div className="forgot-logoform">
                <img className="forgot-logo" src='/assets/posters/bingeboxlogo.svg'/>
                <div className="forgot-card">
                    <div className="back-btn">
                        <Link to='/Login' className="link-to"><button>
                            <img src="/assets/posters/arrow-right-s-line.png"/>Back
                        </button></Link>
                        <h3>Forgot Your Password?</h3>
                    </div>
                    <p>Enter Your Email Below</p>
                    <input type="text" placeholder="Email ID" />
                    <Link to='/RequestOTP' className="link-to"><button className="req-otp">Request OTP</button></Link>
                </div>
            </div>
        </div>
    )
}