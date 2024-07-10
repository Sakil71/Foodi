import React, { useContext, useState } from 'react';
import { FoodiContext } from '../../contexts/FoodiProvider';
import { ImCross } from "react-icons/im";

const Login = () => {
    const { setShowLogin, currState, setCurrState } = useContext(FoodiContext);

    return (
        <div className='absolute top-24 left-0 md:translate-x-[50%] lg:translate-x-[50%] bg-black w-full md:w-[50%] lg:w-[50%] h-[80%] text-white p-10 z-20 rounded'>
            <form>
                <div className='flex justify-between items-center mb-5'>
                    <h1 className='text-xl font-medium text-[#ec2d01]'>{currState}</h1>
                    <ImCross className='cursor-pointer' onClick={() => setShowLogin(false)}></ImCross>
                </div>
                <div className='grid grid-cols-1 gap-4 mb-5'>
                    {
                        currState === "Login" ? <></> : <input className='bg-white border border-[#ec2d01] outline-none px-4 py-2 rounded text-black' type="text" name="" id="" placeholder='Your name' required />
                    }
                    <input className='bg-white border border-[#ec2d01] outline-none px-4 py-2 rounded text-black' type="email" name="" id="" placeholder='Your email' />
                    <input className='bg-white border border-[#ec2d01] outline-none px-4 py-2 rounded text-black' type="password" name="" id="" placeholder='Your password' />
                </div>
                <button className='bg-[#ec2d01] px-5 py-2 rounded text-xs mb-4 w-full'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

                <div className='flex items-center mb-5 gap-2'>
                    <input type="checkbox" name="" id="" required />
                    <p className='text-xs'>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
                <div>
                    {
                        currState === "Login" ?
                            <p>Create a new account? <span className='link' onClick={() => setCurrState("Sign Up")}>click here</span></p>
                            :
                            <p>Already have an account? <span className='link' onClick={() => setCurrState("Login")}>Login here</span></p>
                    }
                </div>
            </form>
        </div>
    );
};

export default Login;