import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRouter from "./AdminRouter";
import AdminLogin from "../components/AdminLogin";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrderPage/></PrivateRoute>
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
            
            ,
            {
                path: "/cart",
                element: <CartPage/>
            }
            ,
            {
                path: "/checkout",
                element: <PrivateRoute><CheckoutPage/></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
            }
            
                
        
        ]
    },
    {
        path: "/admin",
        element: <AdminLogin/>
    },

    {
        path: "/dashboard",
        element: <AdminRouter><div>Admin Dashboard</div></AdminRouter>,
        children:[
            {
                path: "",
                element: <AdminRouter><div>Admin Dashboard</div></AdminRouter>,

            },
            {
                path: "add-new-book",
                element: <AdminRouter><div>Add New Book</div></AdminRouter>,
    
            },
            {
                path: "edit-book/:id",
                element: <AdminRouter><div>Edit Book</div></AdminRouter>,

            },
            {
                path: "manage-books",
                element: <AdminRouter><div>Manage Book</div></AdminRouter>,

            }
        ]
    }
]);

export default router;