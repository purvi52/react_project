import { Link } from "react-router-dom"
import "./login.scss"

export default function Login() {
    return(
        <div className="background-img">
            <div className="login">
                <img src="/assets/posters/bingeboxlogo.svg" className="logo" />
                
                <div className="login_credential">
                    <h1>Login</h1>
                    <input className='login_entry' name='email' type="text" placeholder='Email ID' />
                    <Link to='/Forgot' className="link_to"><p className="forgot-pass">Forgot Password?</p></Link>
                </div> 
                <div className="login_credential">
                    <input type="password" placeholder="Password" className="login_entry"/>
                    <br />
                    <div className="checkbox">
                    <input type="checkbox" name="remember" id="remember" className="check_box"/>
                    <label className="label-check" htmlFor="remember">Remember Me</label>
                    </div>
                </div>
                <Link to='/Watching'><button className="login-btn">Login</button></Link>
                <div className="no-acc">
                    <p>Doesn't Have An Account? <Link to='/SignUp' className="link_to"><span className="span">Sign Up</span></Link> </p>
                </div>
                <div className="signin-opt">
                    <div  className="left-border"></div>
                    <div className="content">Or Login With</div>
                    <div className="right-border"></div>
                </div>
                <div className="byGoogle">
                    <button>
                        <img src='/assets/posters/g.png'/>Google
                    </button>
                    <button>
                        <img src='/assets/posters/Vector.png'/>Apple
                    </button>
                </div>
            </div>
        </div>
    )
}