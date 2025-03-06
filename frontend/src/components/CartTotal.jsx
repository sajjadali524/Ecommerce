import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { clearCart } from "./redux/slices/cartSlice";

const CartTotal = ({inputData}) => {
    const [userInput, setUserInput] = useState({
        ...inputData,
        payment: ""
    });
    const dispatch = useDispatch();
    const isPlaceOrder = useLocation();
    const { totalPrice } = useSelector((state) => state.cart);

    const handleInput = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value});
    };

    const orderPlaced = async () => {
        const token = window.localStorage.getItem("token");
        try {
            const response = await axios.post("http://localhost:8000/api/v1/order/place-order", userInput, 
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                dispatch(clearCart());
                console.log("Order placed successfully:", response.data);
            }
        } catch (error) {
            console.log(error)
        }
    };


  return (
    <div className={`${isPlaceOrder.pathname == "/place-order" ? "w-full" : "lg:w-1/3 md:w-1/2 w-full"}`}>
        <div className="flex items-center gap-3 pb-5">
            <h1 className="font-semibold text-[18px]">CART TOTALS</h1>
            <span className="bg-black w-20 h-[3px]"></span>
        </div>

        <div className="flex items-center justify-between py-2 border-b">
            <h1 className="font-[600] opacity-70">Subtotal</h1>
            <span className="font-[600] opacity-70">${totalPrice}</span>
        </div>

        <div className="flex items-center justify-between py-2 border-b">
            <h1 className="font-[600] opacity-70">Shipping Fee</h1>
            <span className="font-[600] opacity-70">$10.00</span>
        </div>

        <div className="flex items-center justify-between py-2">
            <h1 className="font-[600] opacity-90">Total</h1>
            <span className="font-[600] opacity-90">${totalPrice + 10}.00</span>
        </div>

        {isPlaceOrder.pathname == "/place-order" && <div className="pt-10">
            <div className="flex items-center gap-3 pb-5">
                <h1 className="font-semibold text-[18px]">PAYMENT METHOD</h1>
                <span className="bg-black w-20 h-[3px]"></span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3 border py-2 px-4 ">
                    <input type="radio" value="stripe" name="payment" onChange={handleInput} />
                    <span className="text-purple-700 font-bold">Stripe</span>
                </div>
                <div className="flex items-center gap-3 border py-2 px-4 ">
                    <input type="radio" value="cod" name="payment" onChange={handleInput}/>
                    <span className="font-bold opacity-70 text-[14px]">CASH ON DELIVERY</span>
                </div>
            </div>
        </div>}

        {isPlaceOrder.pathname == "/place-order" ? <div className="float-right pt-10">
            <button className="py-3 px-8 hover:bg-slate-400 bg-slate-700 text-white text-[13px] font-semibold" onClick={orderPlaced}>PLACE ORDER</button>
        </div> : <div className="float-right pt-5">
            <Link to="/place-order" className="py-3 px-8 hover:bg-slate-400 bg-slate-700 text-white text-[13px] font-semibold">PROCEED TO CHECKOUT</Link>
        </div> }
    </div>
  )
};

CartTotal.propTypes = {
    inputData: PropTypes.object.isRequired
};

export default CartTotal;
