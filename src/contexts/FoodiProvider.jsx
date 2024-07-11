import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FoodiContext = createContext();


const FoodiProvider = ({ children }) => {
    const [category, setCategory] = useState('All');
    const [cartItems, setCartItems] = useState({});
    const [showLogin, setShowLogin] = useState(false);
    const [currState, setCurrState] = useState("Sign Up");
    const [token, setToken] = useState("");
    const url = "http://localhost:4000";
    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }

        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeToCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo?.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) =>{
        const response = await axios.post(url + "/api/cart/get", {}, {headers : {token}});
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, [])


    // Context value
    const value = {
        category, setCategory, food_list, cartItems, setCartItems, addToCart, removeToCart, showLogin, setShowLogin, currState, setCurrState, getTotalCartAmount, url, token, setToken
    }

    return (
        <FoodiContext.Provider value={value}>
            {children}
        </FoodiContext.Provider>
    );
};

export default FoodiProvider;