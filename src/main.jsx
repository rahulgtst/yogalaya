import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Poses from "./pages/Poses.jsx";
import Classes from "./pages/Classes.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import { loader as poseLoader } from "./PoseLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: "true",
        element: <Home />,
        end: "true",
      },
      {
        path: "/poses",
        element: <Poses />,
        loader: poseLoader,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
