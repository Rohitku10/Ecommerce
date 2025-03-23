import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import './index.css'




const LoginForm = () =>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const onSubmitSuccess = () => {
    navigate('/');
    };


    

    const submitForm = async(event) =>{
        event.preventDefault()
        const userDetails = {username,password};
        const url = 'https://apis.ccbp.in/login';
        const options={
            method:"POST",
            body:JSON.stringify(userDetails)
        }
        const response = await fetch(url,options)
        if(response.ok){
            onSubmitSuccess();
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
        className="username-input-filed"
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
        className="password-input-filed"
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