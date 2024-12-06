import { Navigate } from "react-router-dom";
import { getStorage } from "../utils/storage";

export const PublicRoutes = ({ children }) => {
  const loggedIn = getStorage('logged-in')
  if (loggedIn !== null) {
    return <Navigate to={"/home"} />;
  }
  return children;
};
