import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from "../Layouts/Root";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Verify from "../Pages/Verify/Verify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/estatesData.json"),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/verify",
        element: <Verify />,
      },
    ],
  },
]);

export default router;
