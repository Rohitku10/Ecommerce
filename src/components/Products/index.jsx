import Header from "../Header";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";

const Products = () => {
  const jwtToken = Cookies.get("jwt_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwtToken) {
      navigate("/login");
    }
  }, [jwtToken, navigate]);
  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-img"
        />
      </div>
    </>
  );
};

export default Products;
