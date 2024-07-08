import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.page";
import Login from "../pages/Login.page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
            path: '/login',
            element: <Login />
        }
      ],
    },
  ]);

  export default router