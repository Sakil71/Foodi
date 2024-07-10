import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const FoodiContext = createContext();


const FoodiProvider = ({ children }) => {
    const [category, setCategory] = useState('All');
    const [cartItems, setCartItems] = useState({});
    const [showLogin, setShowLogin] = useState(false);
    const [currState, setCurrState] = useState("Sign Up");

    const addToCart = itemId => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeToCart = itemId => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product)=> product._id === item);
                totalAmount += itemInfo?.price * cartItems[item];
            }
        }
        return totalAmount;
    }


    // Context value
    const value = {
        category, setCategory, food_list, cartItems, setCartItems, addToCart, removeToCart, showLogin, setShowLogin, currState, setCurrState, getTotalCartAmount
    }

    return (
        <FoodiContext.Provider value={value}>
            {children}
        </FoodiContext.Provider>
    );
};

export default FoodiProvider;