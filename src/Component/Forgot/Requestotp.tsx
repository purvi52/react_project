import { Link } from 'react-router-dom'
import './requestotp.scss'

export default function RequestOTP() {
    return(
        <div className="otp-background">
            <div className="otp-logo-form">
                <img className="otp-logo" src='/assets/posters/bingeboxlogo.svg'/>
                <div className="otp-card">
                    <div className="back-button">
                        <Link to='/Forgot'><button>
                            <img src="/assets/posters/arrow-right-s-line.png"/>Back
                        </button></Link>
                        <h3>Verification</h3>
                    </div>
                    <p>Enter The OTP</p>
                    <div className='otp-inputs'>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                    </div>
                    <Link to='/ResetPass' className='render-to'><button className="otp-verify">Verify</button></Link>
                    <div className='resend-text'>
                        <p className='resend'>Resend</p>
                        <p className='resend-time'>0:29</p>
                    </div>
                </div>
            </div>
        </div>
    )
}