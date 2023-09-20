import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import SignUp from "../Pages/Registration/SignUp";
import Blog from "../Pages/Blog/Blog";
import Authinthicate from "../Layout/Authinthication/Authinthicate";
import Login from "../Pages/Login/Login";


import Alltoys from "../Pages/All-Toys/Alltoys";
import MyToyes from "../Pages/My-Toyes/MyToyes";
import AddToyes from "../Pages/Add-Toyes/AddToyes";
import Truck from "../Pages/Home/ShopCategory/Truck/Truck";
import SportsCars from "../Pages/Home/ShopCategory/SportsCars/SportsCars";
import Sedans from "../Pages/Home/ShopCategory/Sedans/Sedans";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/DetailsPage/Details";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import UpdateData from "../Pages/My-Toyes/UpdateData/UpdateData";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'blog',
            element:<Blog></Blog>
        },
        {
            path:'all-toyes',
            element:<Alltoys></Alltoys>
        },
        {
            path:'my-toyes',
            element:<PrivateRoute><MyToyes></MyToyes></PrivateRoute>
        },
        {
            path:'add-toyes',
            element:<PrivateRoute><AddToyes></AddToyes></PrivateRoute>
        },
        {
            path:'update/:id',
            element:<UpdateData></UpdateData>,
            loader:({params}) => fetch(`https://toy-server-rose.vercel.app/allData/${params.id}`)
        },
        {
            path:'details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=> fetch(`https://toy-server-rose.vercel.app/allData/${params.id}`)
        },
      
       
    ],
  
    },
    {
        path:'/',
        element:<Authinthicate></Authinthicate>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'truck',
                element:<Truck></Truck>
            },
            {
                path:'sports-cars',
                element:<SportsCars></SportsCars>
            },
            {
                path:'sedans',
                element:<Sedans></Sedans>
            },
        
        ]
    },
    
  ]);