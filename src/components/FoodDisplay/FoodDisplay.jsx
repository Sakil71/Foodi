import React, { useContext } from 'react';
import { FoodiContext } from '../../contexts/FoodiProvider';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
    const { food_list, category } = useContext(FoodiContext);

    return (
        <div>
            <h1 className='text-2xl font-medium text-[#ec2d01]'>Top dishes near you</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    food_list.map((item, index) => {
                        if (category === 'All' || category === item.category) {
                            return <FoodItem key={index} item={item} ></FoodItem>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default FoodDisplay;