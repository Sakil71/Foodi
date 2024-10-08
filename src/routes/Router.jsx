import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import AppDownload from "../components/AppDownload/AppDownload";
import Cart from "../pages/Cart/Cart";
import Order from "../pages/Order/Order";
import Verify from "../pages/Verify/Verify";
import MyOrders from "../pages/MyOrders/MyOrders";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <ExploreMenu></ExploreMenu>
            },
            {
                path: '/mobile-app',
                element: <AppDownload></AppDownload>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/verify',
                element: <Verify></Verify>
            },
            {
                path: '/myorders',
                element: <MyOrders></MyOrders>
            },
        ]
    }
])