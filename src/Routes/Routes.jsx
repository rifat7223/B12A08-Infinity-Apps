

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";

import Apps from "../Pages/Apps/Apps";
import Instilation from "../Pages/Instilation/Instilation";
import Error from "../Pages/Error/Error";
import BookDtails from "../Pages/BookDtails/BookDtails";
 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
{
    index:true,
     loader:()=>fetch("/ai.json"),
    path:"/",
   
    Component:Home
  },
  {
     loader:()=>fetch("/app.json"),
    path:"/Apps",
    Component:Apps
  },
  {
    path:"/install",
    loader:()=>fetch("/app.json"),
    Component:Instilation
  },
  {
    path:"/bookdetails/:id",
    loader:()=>fetch("/app.json"),
    Component:BookDtails
  }
    ]
  },
  
]);

