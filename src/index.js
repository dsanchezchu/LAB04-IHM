import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const feather = require("feather-icons");
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from "./single";
import Basic from "./layoult/basic";
import Main from "./main";
import Aside from "./aside";
import { Row } from "react-bootstrap";
setTimeout(() => {
  feather.replace();
}, 1000);

const router = createBrowserRouter([
  {

    path: "/",
    element: <Basic />,
    children: [
      {
        path: '',
        element: <>
          <div className="col-md-8">
            <Main></Main>
          </div>
          <div className="col-md-4">
            <Aside></Aside>
          </div>
        </>
      },
      {
        path: "detalle/:slug",
        element: <Single />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);