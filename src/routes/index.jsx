import { Navigate } from "react-router-dom";
import { getStorage } from "../utils/storage";
import { routerList } from "./route_list";
import { PublicRoutes } from "./public_routes";
import { ProtectRoutes } from "./protected_routes";

const loggedIn = getStorage('logged-in')

let list = routerList.map((route) => ({
  ...route,
  element: route.private ? <ProtectRoutes showSidebar={route?.sidebar ?? 1}><route.element /></ProtectRoutes> :
    <PublicRoutes><route.element /></PublicRoutes>
}))

const routes = [
  {
    path: "/",
    element: (
      <Navigate to={loggedIn ? '/home' : "/login"} />
    ),
  },
  ...list, // render public and private route
  {
    path: "*",
    element: (
      <Navigate to={loggedIn ? '/home' : "/login"} />
    ),
  },
];

export default routes;
