import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className="w-[90%] mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;