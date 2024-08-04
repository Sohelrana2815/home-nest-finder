import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from "../Layouts/Root";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";

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
        path: "/property/:id",
        element: <PropertyDetails />,
        loader: () => fetch("/estatesData.json"),
      },
    ],
  },
]);

export default router;
