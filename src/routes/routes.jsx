import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.page";
import Login from "../pages/Login.page";
import Profile from "../pages/Profile.page";
import WithNav from "../layouts/WithNav.layout";
import { element } from "prop-types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <WithNav />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
