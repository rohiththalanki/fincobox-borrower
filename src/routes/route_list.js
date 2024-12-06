import {
  Login,
  ResetPassword,
  Dashboard,
  Verification,
  Signup,
  InventoryFinancing,
  InvoiceDiscounting,
  ForgotPassword,
} from "../pages";

export const routerList = [
  {
    path: "/login",
    element: Login,
    private: 0,
  },
  {
    path: "/signup",
    element: Signup,
    private: 0,
  },
  {
    path: "/verification/:id",
    element: Verification,
    private: 0,
  },
  {
    path: "/forgot-password",
    element: ForgotPassword,
    private: 0,
  },
  {
    path: "/reset-password",
    element: ResetPassword,
    private: 0,
  },
  ///////////////////////////////////////////////
  {
    path: "/home",
    element: Dashboard,
    private: 1,
    sidebar: 0
  },
  {
    path: "/inventory-financing",
    element: InventoryFinancing,
    private: 1,
  },
  {
    path: "/inventory-discounting",
    element: InvoiceDiscounting,
    private: 1,
    sidebar: 0
  }
];
