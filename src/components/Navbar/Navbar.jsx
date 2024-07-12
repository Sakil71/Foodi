import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { FoodiContext } from "../../contexts/FoodiProvider";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { setShowLogin, currState, getTotalCartAmount, token, setToken } = useContext(FoodiContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className="flex justify-between items-center mb-10 p-5 bg-black text-white">
            <Link to={'/'}><h1 className="text-4xl font-bold text-[#f53535]">foodi</h1></Link>

            <div
                onClick={() => setOpen(false)}
                className={`${open ? 'bg-black text-white top-20' : 'left-[-500px] top-20'} 
                    absolute duration-700 left-0 lg:static flex flex-col md:flex-col lg:flex-row gap-4 md:gap-10 lg:gap-10 font-medium w-[50%] md:w-full lg:w-auto min-h-screen md:min-h-[50vh] lg:min-h-0 p-10 md:p-20 lg:p-0 z-30`}>

                <NavLink className={({ isActive }) => isActive ? "text-gray-400 font-semibold" : ""} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-gray-400 font-semibold" : ""} to={'/menu'}>Menu</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-gray-400 font-semibold" : ""} to={'/mobile-app'}>Mobile App</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-gray-400 font-semibold" : ""} to={'/contact'}>Contact Us</NavLink>
            </div>

            <div className="flex items-center gap-8">
                <div className="relative">
                    <NavLink to={'cart'} className={({ isActive }) => isActive ? "text-gray-400" : ""}>
                        <FaCartShopping className="text-2xl"></FaCartShopping>
                    </NavLink>
                    <div className={getTotalCartAmount() === 0 ? "hidden" : "absolute top-[-8px] right-[-5px]"}>
                        <p className="w-2 h-2 bg-[#ec2d01] rounded-full"></p>
                    </div>
                </div>
                <div>
                    {
                        !token ?
                            <button onClick={() => setShowLogin(true)} className="text-xs px-4 py-2 hover:border hover:border-[#ec2d01] hover:bg-black rounded bg-[#ec2d01] hover:text-white">{currState}</button>
                            :
                            <div className="dropdown dropdown-end dropdown-hover">
                                <div tabIndex={0} role="button" className="">
                                    <CgProfile className="text-3xl" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box z-[1] w-52 p-2 shadow mt-5">
                                    <li>
                                        <Link to={'/myorders'} className="flex items-center"><IoBagOutline className="text-xl"></IoBagOutline> Orders</Link>
                                    </li>
                                    <li onClick={logout}>
                                        <span className="flex items-center"><AiOutlineLogout className="text-xl text-red-700"></AiOutlineLogout> Logout</span>
                                    </li>
                                </ul>
                            </div>
                    }
                </div>
            </div>

            <div onClick={() => setOpen(!open)} className="cursor-pointer lg:hidden md:hidden p-2">
                {
                    open ?
                        <ImCross></ImCross>
                        :
                        <FaBars className="text-xl"></FaBars>
                }
            </div>
        </div>
    );
};

export default Navbar;