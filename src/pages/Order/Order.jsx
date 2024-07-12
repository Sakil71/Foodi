import React, { useContext, useEffect, useState } from 'react';
import { FoodiContext } from '../../contexts/FoodiProvider';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Order = () => {
    const { getTotalCartAmount, token, food_list, url, cartItems } = useContext(FoodiContext);
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "Bangladesh",
        phone: "",
    })

    const onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 60
        }
        let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
        if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
        }
        else {
            alert("Error");
        }
    }

    useEffect(() => {
        if (!token) {
            navigate("/cart");
        }
        else if(getTotalCartAmount() === 0){
            navigate("/cart");
        }
    }, [token])
    return (
        <div >
            <form onSubmit={placeOrder} className='min-h-screen md:flex lg:flex justify-between gap-10'>
                <div className='w-full md:w-[50%] lg:w-[50%] mb-5'>
                    <h1 className='text-xl font-bold text-[#ec2d01] mb-4'>Delivery Information</h1>
                    <div action="">
                        <div className='flex gap-4'>
                            <input required onChange={onChangeHandler} value={data.firstName} name="firstName" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='First Name' id="" />
                            <input required onChange={onChangeHandler} value={data.lastName} name="lastName" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='Last Name' id="" />
                        </div>
                        <input required onChange={onChangeHandler} value={data.email} name="email" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="email" placeholder='Email Address' id="" />
                        <input required onChange={onChangeHandler} value={data.street} name="street" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='Street Address' id="" />

                        <div className='flex gap-4'>
                            <input required onChange={onChangeHandler} value={data.city} name="city" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='City' id="" />
                            <input required onChange={onChangeHandler} value={data.state} name="state" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='State' id="" />
                        </div>
                        <div className='flex gap-4'>
                            <input required onChange={onChangeHandler} value={data.zipcode} name="zipcode" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='Zip code' id="" />
                            <input required onChange={onChangeHandler} value={data.country} name="country" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" readOnly id="" />
                        </div>
                        <input required onChange={onChangeHandler} value={data.phone} name="phone" className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="number" placeholder='Phone Number' />
                    </div>
                </div>

                {/* Cart */}
                <div className='w-full md:w-[40%] lg:w-[40%]'>
                    <div className='mb-10'>
                        <h1 className='text-xl font-medium text-[#ec2d01] mb-4'>Cart Totals</h1>

                        <div className='flex justify-between mb-4 font-medium'>
                            <p>Subtotal</p>
                            <p>৳{getTotalCartAmount()}</p>
                        </div>
                        <div className='flex justify-between mb-4 font-medium'>
                            <p>Delivery Fee</p>
                            <p>৳{getTotalCartAmount() === 0 ? 0 : 60}</p>
                        </div>
                        <div className='flex justify-between mb-4 font-medium'>
                            <p>Total</p>
                            <p>৳{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 60}</p>
                        </div>
                    </div>
                    <button type='submit' className='text-xs px-4 py-2 hover:bg-base rounded bg-[#ec2d01] text-white hover:scale-105 duration-300 w-full mb-8'>PROCEED TO PAYMENT</button>
                </div>
            </form>
        </div>
    );
};

export default Order;