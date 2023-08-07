import { Link } from 'react-router-dom'
import './resetpass.scss'

export default function ResetPass() {
    return(
        <div className="reset-background">
            <div className="reset-logo-form">
                <img className="reset-logo" src='/assets/posters/bingeboxlogo.svg'/>
                <div className="reset-card">
                    <div className="back-text">
                        <Link to='/RequestOTP'><button>
                            <img src="/assets/posters/arrow-right-s-line.png"/>Back
                        </button></Link>
                        <h3>Reset Password</h3>
                    </div>
                    <p>Enter Your New Password</p>
                    <div className='reset-inputs'>
                            <input type="password" placeholder='New Password'/>
                            <input type="password" placeholder='Confirm Password'/>
                    </div>
                    <Link to='/Login' className='renders-to'><button className="reset-verify">Reset Password</button></Link>
                </div>
            </div>
        </div>
    )
}