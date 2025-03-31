import AllProductsSection from "../AllProductsSection";

import Header from "../Header";
import PrimeDealsSection from "../PrimeDealsSection";

import "./index.css";

const Products = () => (
  <>
    <Header />
    <PrimeDealsSection/>
    <div className="product-sections">
      <AllProductsSection />
    </div>
  </>
);

export default Products;