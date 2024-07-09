import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-between items-center mb-10 p-5 bg-black text-white">
            <h1 className="text-4xl font-bold text-[#f53535]">foodi</h1>

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
                    <FaCartShopping className="text-2xl"></FaCartShopping>
                    <div className="absolute top-[-8px] right-[-5px]">
                        <p className="w-2 h-2 bg-[#ec2d01] rounded-full"></p>
                    </div>
                </div>
                <div>
                    <button className="text-xs px-4 py-2 hover:border hover:border-[#ec2d01] hover:bg-black rounded bg-[#ec2d01] hover:text-white">Sign Up</button>
                </div>
            </div>

            <div onClick={() => setOpen(!open)} className="cursor-pointer lg:hidden md:hidden">
                {
                    open ?
                        <ImCross></ImCross>
                        :
                        <FaBars></FaBars>
                }
            </div>
        </div>
    );
};

export default Navbar;