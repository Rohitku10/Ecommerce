import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Cookies from "js-cookie";
import "./index.css";
import ProductsHeader from "../ProductsHeader";

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const AllProductsSection = () => {
  const [productsList, setProductsList] = useState([]);
  const [activeOptionId, setActiveOptionId] = useState(sortbyOptions[0].optionId);

  useEffect(() => {
    const getProducts = async () => {
      // const apiUrl = "https://apis.ccbp.in/products";
      const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`;
      const jwtToken = Cookies.get("jwt_token");
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };
      try {
        const response = await fetch(apiUrl, options);
        console.log("response",response)
        if (response.ok) {
          const fetchedData = await response.json();
          console.log("fetchedData",fetchedData)
          const updatedData = fetchedData.products.map((product) => ({
            title: product.title,
            brand: product.brand,
            price: product.price,
            id: product.id,
            imageUrl: product.image_url,
            rating: product.rating,
          }));
          setProductsList(updatedData);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, [activeOptionId]);

const updateActiveOptionId = optionId =>{
  setActiveOptionId(optionId);
}

  return (
    <div className="productContainer">
      {/* <h1 className="products-list-heading">All Products</h1> */}
      <ProductsHeader 
        activeOptionId={activeOptionId}
        sortbyOptions={sortbyOptions}
        updateActiveOptionId={updateActiveOptionId}
      />
      <ul className="products-list">
        {productsList.map((product) => (
          <ProductCard productData={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default AllProductsSection;
