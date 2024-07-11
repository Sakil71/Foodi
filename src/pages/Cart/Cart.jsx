import React, { useContext } from 'react';
import { FoodiContext } from '../../contexts/FoodiProvider';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeToCart, getTotalCartAmount, url} = useContext(FoodiContext);

    const navigate = useNavigate();

    return (
        <div className='mb-20 flex flex-col-reverse md:flex-row lg:flex-row justify-between gap-4'>
            <div className="overflow-x-auto w-full mb-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            food_list.map((items, index) => {
                                if (cartItems[items._id] > 0) {
                                    return <tr key={index}>
                                        <td>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-12 h-12 md:w-16 lg:w-16 md:h-16 lg:h-16 rounded-full' src={url + "/images/" +items?.image} alt="" />
                                                <div>
                                                    <p className='font-bold'>{items?.name}</p>
                                                    <p className='text-[#ec2d01]'>৳{items?.price}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{cartItems[items._id]}</td>
                                        <td>৳{cartItems[items._id] * items.price}</td>
                                        <td>
                                            <p className='cursor-pointer border p-2 rounded-full w-8 h-8 flex justify-center items-center border-[#ec2d01] text-[#ec2d01] font-medium hover:bg-[#ec2d01] hover:text-white' onClick={() => removeToCart(items._id)}>X</p>
                                        </td>
                                    </tr>
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* cart */}
            <div className='md:w-[40%] lg:w-[40%] h-[30%] p-5 md:border lg:border rounded bg-[#f0eded] sticky top-20'>
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
                <button onClick={()=> navigate('/order')} className='text-xs px-4 py-2 hover:bg-base rounded bg-[#ec2d01] text-white hover:scale-105 duration-300 w-full mb-8'>PROCEED TO CHECKOUT</button>

                <div className=''>
                    <p className='text-xs mb-1'>If you have a promo code, enter it here</p>
                    <form className="flex w-full md:w-[80%] lg:w-[80%]">
                        <input type="text" className="bg-white outline-none px-4 border border-[#ec2d01] rounded-l w-full" placeholder="Enter promo code (optional)" required />
                        <button className="bg-[#cb6652] text-white text-xs px-2 rounded-r" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cart;