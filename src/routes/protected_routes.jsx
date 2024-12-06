import { Navigate } from "react-router-dom";
import { getStorage } from "../utils/storage";
import Layout from "../components/Layout";

export const ProtectRoutes = ({ children, showSidebar }) => {
  const loggedIn = getStorage("logged-in");
  if (loggedIn === null) {
    return <Navigate to={"/login"} />;
  }
  return <Layout showSidebar={showSidebar}>{children}</Layout>;
};
