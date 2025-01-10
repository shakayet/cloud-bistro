import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "../Layout/Main";
import { Children } from "react";
import Home from "../Pages/Home/Home";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ],
  },
]);

export default Router;