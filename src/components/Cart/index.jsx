import Header from "../Header";
import './index.css'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Cart = () =>{
    // const jwtToken = Cookies.get('jwt_token')
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     if(!jwtToken){
    //     navigate("/login");
    //     }
    // },[jwtToken, navigate]);
    return(
    <>
    <Header/>
    <div className="cart-container">
        <img 
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
        />
    </div>
    </>
)
}

export default Cart