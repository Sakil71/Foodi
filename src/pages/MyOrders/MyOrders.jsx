import React, { useContext, useEffect, useState } from 'react';
import { FoodiContext } from '../../contexts/FoodiProvider';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const { url, token } = useContext(FoodiContext);

    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='min-h-[80vh]'>
            <h1 className='text-xl font-bold mb-5'>My Orders</h1>
            <div>
                {
                    data.reverse().map((order, index) => {
                        return (
                            <div className={`${order.payment === false ? "hidden" : "flex flex-col md:flex-row lg:flex-row gap-2 justify-between items-center border px-5 py-2 mb-5 rounded"}`} key={index}>
                                <img className='w-10 hidden md:block lg:block' src={assets.parcel_icon} alt="" />
                                <div className='font-medium w-56'>
                                    {
                                        order.items.map((item, index) => {
                                            if (index === order.items.length - 1) {
                                                return item.name + " x " + item.quantity
                                            }
                                            else {
                                                return item.name + " x " + item.quantity + ", "
                                            }
                                        })
                                    }
                                </div>
                                <p className='text-[#ec2d01] font-medium'>৳{order.amount}.00</p>
                                <p>Items: {order.items.length}</p>
                                <p>{order.date.slice(0, 10)}</p>
                                <p className='text-sm'><span className='text-[#ec2d01]'>&#x25cf;</span> <span>{order.status}</span></p>
                                <button onClick={fetchOrders} className='cursor-pointer border text-xs px-5 py-2 rounded bg-[#e0d8d6] hover:bg-[#c54d2c] hover:text-white font-medium'>Track Order</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyOrders;