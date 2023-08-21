import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { PortfolioHomePage } from "./screens/PortfolioHomePage/PortfolioHomePage";
import { LicvrPage } from "./screens/LicvrPage/LicvrPage";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PortfolioHomePage/>
    },
     {
       path: "/LIC",
       element: <LicvrPage />,
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
