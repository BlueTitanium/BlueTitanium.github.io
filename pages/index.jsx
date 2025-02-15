import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { PortfolioHomePage } from "./screens/PortfolioHomePage/PortfolioHomePage";
import { LicvrPage } from "./screens/LicvrPage/LicvrPage";
import { CondemnedPage } from "./screens/CondemnedPage/CondemnedPage";
import { DentalPage } from "./screens/DentalPage/DentalPage";
import { AirlinePage } from "./screens/AirlinePage/AirlinePage";
import { Page } from "./screens/VK-00M3Page/Page";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { element } from "prop-types";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PortfolioHomePage/>
    },
     {
       path: "/LIC",
       element: <LicvrPage />,
    },
    {
      path: "/Condemned",
      element: <CondemnedPage/>,
    },
    {
      path: "/Dental",
      element: <DentalPage/>,
    },
    {
      path: "/Airline",
      element: <AirlinePage/>,
    },
    {
      path: "/VK-00M3",
      element: <Page/>,
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
