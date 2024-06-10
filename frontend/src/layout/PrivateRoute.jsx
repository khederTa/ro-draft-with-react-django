/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/auth";

const PrivateRoute = ({ children }) => {
  const loggedIn = useAuth((state) => state.isLoggedIn)();
  return loggedIn ? <>{children}</> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
