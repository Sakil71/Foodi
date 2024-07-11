import React, { useContext, useState } from 'react';
import { FoodiContext } from '../../contexts/FoodiProvider';
import { ImCross } from "react-icons/im";
import axios from 'axios';

const Login = () => {
    const { setShowLogin, currState, setCurrState, url, setToken } = useContext(FoodiContext);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));

    }

    const submitHandler = async event => {
        event.preventDefault();
        let newUrl = url;
        if (currState === 'Login') {
            newUrl += "/api/user/login";
        }
        else {
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        }
        else {
            alert(response.data.message);
        }

    }

    return (
        <div className='absolute top-24 left-0 md:translate-x-[50%] lg:translate-x-[50%] bg-black w-full md:w-[50%] lg:w-[50%] h-[80%] text-white p-10 z-20 rounded'>
            <form onSubmit={submitHandler}>
                <div className='flex justify-between items-center mb-5'>
                    <h1 className='text-xl font-medium text-[#ec2d01]'>{currState}</h1>
                    <ImCross className='cursor-pointer' onClick={() => setShowLogin(false)}></ImCross>
                </div>
                <div className='grid grid-cols-1 gap-4 mb-5'>
                    {
                        currState === "Login" ? <></> : <input onChange={onChangeHandler} value={data.name} className='bg-white border border-[#ec2d01] outline-none px-4 py-2 rounded text-black' type="text" name="name" id="" placeholder='Your name' required />
                    }
                    <input onChange={onChangeHandler} value={data.email} className='bg-white border border-[#ec2d01] outline-none px-4 py-2 rounded text-black' type="email" name="email" id="" placeholder='Your email' />
                    <input onChange={onChangeHandler} value={data.password} className='bg-white border border-[#ec2d01] outline-none px-4 py-2 rounded text-black' type="password" name="password" id="" placeholder='Your password' />
                </div>
                <button type='submit' className='bg-[#ec2d01] px-5 py-2 rounded text-xs mb-4 w-full'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

                <div className={` flex items-center mb-5 gap-2`}>
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