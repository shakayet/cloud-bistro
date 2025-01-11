import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "../Layout/Main";
import { Children } from "react";
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Home/Menu/Menu';
import Order from '../Pages/Home/Order/Order';
import Login from '../Login/Login';
import About from '../Pages/Home/About/About';



const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/about',
          element: <About></About>
        }
    ],
  },
]);

export default Router;