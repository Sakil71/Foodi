import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FoodiContext } from "../contexts/FoodiProvider";
import { useContext } from "react";
import Login from "../components/Login.jsx/Login";

const MainLayout = () => {
    const { showLogin } = useContext(FoodiContext);
    return (
        <div className="bg-white text-black">
            {
                showLogin ? <Login></Login> : <></>
            }
            <div className="sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className="w-[90%] mx-auto">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;