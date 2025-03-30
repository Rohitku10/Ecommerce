import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element }) => {
  const jwtToken = Cookies.get("jwt_token");

  return jwtToken ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
