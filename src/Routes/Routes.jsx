import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from '../Pages/Shared/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Dashboard from '../Layout/Dashboard'
import BookParcel from "../Pages/Dashboard/BookParcel/BookParcel";
import MyParcel from "../Pages/Dashboard/MyParcel/MyParcel";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import AllParcel from "../Pages/Dashboard/AllParcel/AllParcel";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AllDeliveryMan from "../Pages/Dashboard/AllDeliveryMan/AllDeliveryMan";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },

    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'allParcel',
          element:<AllParcel></AllParcel>
        },
        {
          path:'allUser',
          element:<AllUser></AllUser>
        }
        ,
        {
          path:'allDeliveryMan',
          element:<AllDeliveryMan></AllDeliveryMan>
        },
        {
          path:'bookParcel',
          element:<BookParcel></BookParcel>
        },
        {
          path:'myParcel',
          element:<MyParcel></MyParcel>
        },
        {
          path:'myProfile',
          element:<MyProfile></MyProfile>
        }
        ,
        
        
      ]
    }
  ]);