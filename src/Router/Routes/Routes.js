import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import AddCoffee from "../../Pages/AddCoffee/AddCoffee";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyCart from "../../Pages/MyCart/MyCart";

const router = createBrowserRouter([
    {
      path: '/',
      element:  <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
           
        },
        // {
        //   path:'/services',
        //   element:<Services></Services>,
        //   loader:({params}) => fetch('http://localhost:5000/services')
        // },
        {
          path:'/addcoffee',
          element:<AddCoffee></AddCoffee>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/mycart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
           
        }
      ]
    },
    
  ])

  export default router;

