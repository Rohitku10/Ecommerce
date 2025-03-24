import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import './index.css'




const LoginForm = () =>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,submitError] = useState(false)
    const navigate = useNavigate();

    const onSubmitSuccess = jwt_token => {
        Cookies.set('jwt_token',jwt_token,{expires:30})
        navigate('/');
    };

    const onSubmitFailure = error_msg =>{
        submitError(true)
    }


    

    const submitForm = async(event) =>{
        event.preventDefault()
        const userDetails = {username,password};
        const url = 'https://apis.ccbp.in/login';
        const options={
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(userDetails),
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (response.ok === true) {
                this.onSubmitSuccess(data.jwt_token)
            } else {
                this.onSubmitFailure(data.error_msg)
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    }

    const renderUsernameField = () =>(
        <>
        <label className="input-label" htmlFor="username">
            Username 
        </label>
        <input
        type="text"
        id="username"
        className="username-input-field"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />
        </>
    )
    const renderPasswordField = () =>(
        <>
        <label className="input-label" htmlFor="password">
            Password 
        </label>
        <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        </>
    )

    return(
        <div className="login-form-container">
            <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-mobile-image"
            alt="website logo"
            />
            <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-image"
            alt="website login"
            />
            <form className="form-container" onSubmit={submitForm}>
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                className="login-website-logo-desktop-image"
                alt="website logo"
            />
            <div className="input-container">{renderUsernameField()}</div>
            <div className="input-container">{renderPasswordField()}</div>
            <button type="submit" className="login-button">
                Login
            </button>
            </form>
        </div>
    )
}

export default LoginForm