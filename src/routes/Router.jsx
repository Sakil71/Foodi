import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import AppDownload from "../components/AppDownload/AppDownload";

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
            }
        ]
    }
])