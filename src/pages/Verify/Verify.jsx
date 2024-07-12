import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { FoodiContext } from '../../contexts/FoodiProvider';
import axios from 'axios';

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(FoodiContext);

    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify", { success, orderId });
        if (response.data.success) {
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    }, [])

    return (
        <div>
            <h1>Verify</h1>
        </div>
    );
};

export default Verify;