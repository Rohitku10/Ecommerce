import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ProductCard from "../ProductCard";
import "./index.css";
import { ClipLoader } from "react-spinners";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const PrimeDealsSection = () => {
  const [primeDeals, setPrimeDeals] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  useEffect(() => {
    const getPrimeDeals = async () => {
      setApiStatus(apiStatusConstants.inProgress);
      const jwtToken = Cookies.get("jwt_token");
      const apiUrl = "https://apis.ccbp.in/prime-deals";

      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };

      try{
        const response = await fetch(apiUrl, options);
        if (response.ok == true) {
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
          setApiStatus(apiStatusConstants.success);
        }else {
          setApiStatus(apiStatusConstants.failure);
        }
      }catch (error) {
        // If fetch fails (network error, etc.)
        console.error("Fetch error:", error);
        setApiStatus(apiStatusConstants.failure);
      }
    };
    getPrimeDeals();
  }, []);

  const primeDealsFailureView = () => {
    return(
      <img
        src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
        alt="Register Prime"
        className="register-prime-image"
      />
    )
  };

  const isLoadingView = () => {
    return (
      <div>
        <ClipLoader color="0b69ff" loading={true} size={50} aria-label="Loading Spinner" />
      </div>
    );
  };

  const primeDealsSuccessView = () => {
    return(
    <div className="products-list-container">
      <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
      <ul className="primedeals-list">
        {primeDeals.map((product) => (
          <ProductCard productData={product} key={product.id} />
        ))}
      </ul>
    </div>
    )
  };

  const renderPrimeDeals = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return primeDealsSuccessView();
      case apiStatusConstants.failure:
        return primeDealsFailureView();
      case apiStatusConstants.inProgress:
        return isLoadingView();
      default:
        return null;
    }
  };

  return <>{renderPrimeDeals()}</>;
};

export default PrimeDealsSection;
