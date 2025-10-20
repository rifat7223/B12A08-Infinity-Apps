

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import App from "../App";
import Apps from "../Pages/Apps/Apps";
import Instilation from "../Pages/Instilation/Instilation";
import Error from "../Pages/Error/Error";
 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
{
    index:true,
    path:"/",
    Component:Home
  },
  {
    path:"/Apps",
    Component:Apps
  },
  {
    path:"/install",
    Component:Instilation
  }
    ]
  },
  
]);

