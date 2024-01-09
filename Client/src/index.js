import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
//import Dialog from "./components/Dialog";
//import Categories from './pages/Categories'
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./pages/Categories";
import Aboutus from "./pages/Aboutus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Categories",
    element: <Categories />,
  },
  {
    path: "Aboutus",
    element: <Aboutus />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
