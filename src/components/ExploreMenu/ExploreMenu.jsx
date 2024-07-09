import { useContext } from "react";
import { menu_list } from "../../assets/assets";
import { FoodiContext } from "../../contexts/FoodiProvider";
import FoodDisplay from "../FoodDisplay/FoodDisplay";

const ExploreMenu = () => {
    const { category, setCategory } = useContext(FoodiContext);


    return (
        <div className="mb-32">
            <div className="mb-5">
                <h1 className="text-2xl font-medium text-[#ec2d01]">Explore our menu</h1>
                <p className="w-full md:w-[70%] lg:w-[70%] opacity-70">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div className="flex gap-10 overflow-x-scroll no-scrollbar mt-10">
                    {
                        menu_list.map((item, index) => <div
                            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
                            className="flex flex-col items-center cursor-pointer" key={index}>
                            <img className={`${category === item.menu_name ? 'border-2 border-[#ec2d01] p-[1px] opacity-70' : ''} h-[50px] w-[50px] md:w-16 md:h16 lg:w-16 lg:h-16 rounded-full hover:opacity-80 transition duration-500`} src={item.menu_image} alt="" />
                            <p className="mt-2 opacity-75">{item.menu_name}</p>
                        </div>)
                    }
                </div>
                <div className="flex justify-center">
                    <hr className="w-[70%] h-[1.5px] md:mt-10 lg:mt-10 bg-gray-300" />
                </div>
            </div>

            <FoodDisplay></FoodDisplay>
        </div>
    );
};

export default ExploreMenu;