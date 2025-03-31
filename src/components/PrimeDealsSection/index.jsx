import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ProductCard from "../ProductCard";
import "./index.css"

const PrimeDealsSection = () => {
  const [primeDeals, setPrimeDeals] = useState([]);

  useEffect(() => {
    const getPrimeDeals = async() =>{
        const jwtToken = Cookies.get("jwt_token");
        const apiUrl = "https://apis.ccbp.in/prime-deals";
    
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: "GET",
        };
    
        const response = await fetch(apiUrl, options);
        const fetchedData = await response.json();
        const updatedData = fetchedData.prime_deals.map((product) => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }));
    
        setPrimeDeals(updatedData);
    }
    getPrimeDeals();
  },[]);

  return(
    <div className="products-list-container">
      <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
      <ul className="primedeals-list">
        {primeDeals.map((product) => (
          <ProductCard productData={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default PrimeDealsSection;