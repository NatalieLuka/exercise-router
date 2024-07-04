import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Movies } from "./Movie";
import { Actors } from "./Actors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "movies", element: <Movies /> },
      { path: "actors", element: <Actors /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
