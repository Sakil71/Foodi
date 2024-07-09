import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const FoodiContext = createContext();


const FoodiProvider = ({ children }) => {
    const [category, setCategory] = useState('All');
    const [cartItems, setCartItems] = useState({});

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

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])


    // Context value
    const value = {
        category, setCategory, food_list, cartItems, setCartItems, addToCart, removeToCart
    }

    return (
        <FoodiContext.Provider value={value}>
            {children}
        </FoodiContext.Provider>
    );
};

export default FoodiProvider;