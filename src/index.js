import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Aboutus from "./components/Aboutus";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
