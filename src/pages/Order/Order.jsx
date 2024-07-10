import React, { useContext } from 'react';
import { FoodiContext } from '../../contexts/FoodiProvider';

const Order = () => {
    const { getTotalCartAmount } = useContext(FoodiContext);

    return (
        <div className='min-h-screen md:flex lg:flex justify-between gap-10'>
            <div className='w-full md:w-[50%] lg:w-[50%] mb-5'>
                <h1 className='text-xl font-bold text-[#ec2d01] mb-4'>Delivery Information</h1>
                <form action="">
                    <div className='flex gap-4'>
                        <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='First Name' name="" id="" />
                        <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='Last Name' name="" id="" />
                    </div>
                    <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="email" placeholder='Email Address' name="" id="" />
                    <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='Street Address' name="" id="" />

                    <div className='flex gap-4'>
                        <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='City' name="" id="" />
                        <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='State' name="" id="" />
                    </div>
                    <div className='flex gap-4'>
                        <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" placeholder='Zip code' name="" id="" />
                        <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="text" value={"Bangladesh"} readOnly name="" id="" />
                    </div>
                    <input className='bg-white w-full outline-none px-4 py-2 rounded text-black border border-[#ec2d01] mb-5' type="number" placeholder='Phone Number' />
                </form>
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
                <button className='text-xs px-4 py-2 hover:bg-base rounded bg-[#ec2d01] text-white hover:scale-105 duration-300 w-full mb-8'>PROCEED TO PAYMENT</button>
            </div>
        </div>
    );
};

export default Order;