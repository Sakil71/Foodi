import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { FoodiContext } from '../../contexts/FoodiProvider';

const FoodItem = ({ item }) => {
    const { _id, name, image, price, description } = item;
    const { cartItems, addToCart, removeToCart } = useContext(FoodiContext);

    return (
        <div className='relative'>
            {/* Card */}
            <div className="card lg:card-side bg-base-100 shadow-xl border mt-5 hover:bg-[#e5dcda] transition duration-0 hover:duration-700">
                <div>
                    <img className='rounded-l h-64 md:h-full lg:h-full w-full md:w-60' src={image} alt={name} />
                </div>
                <div className="card-body w-full">
                    <h2 className="card-title">{name}</h2>
                    <img className='w-16' src={assets?.rating_starts} alt="" />
                    <p className='text-[#ec2d01]'>৳ {price}</p>
                    <p className='opacity-70'>{description.slice(0, 38)}<Link className='text-xs'>...see more</Link></p>

                </div>
            </div>

            {/* Counter */}
            <div className='absolute bottom-2 right-2'>
                {
                    !cartItems[_id] ?
                        <img className='w-5 h-5 border border-[#ec2d01] rounded-full cursor-pointer' onClick={() => addToCart(_id)} src={assets?.add_icon_white} alt="" />
                        :
                        <div className='flex items-center gap-2 bg-slate-200 rounded-full px-1'>
                            <img onClick={() => removeToCart(_id)} className='w-5 h-5 cursor-pointer' src={assets?.remove_icon_red} alt="" />

                            <p className='font-medium text-sm'>{cartItems[_id]}</p>

                            <img onClick={() => addToCart(_id)} className='w-5 h-5 cursor-pointer' src={assets?.add_icon_green} alt="" />
                        </div>
                }
            </div>
        </div>
    );
};

export default FoodItem;