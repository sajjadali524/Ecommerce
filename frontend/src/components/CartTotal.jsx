import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import { clearCart } from "./redux/slices/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "./Loader";
import { toast } from "react-toastify";

const stripePromise = loadStripe("pk_test_51R0gj1BI9SfWy7peDuM4qWl71ctzJ5rhFDRHUFE879Uu2S7J9lMF46XbdoXXluPXjHj1larRjQ7kW1bquOynFvQR00RCirhr9Q")

const CartTotal = ({inputData}) => {
      const { items } = useSelector((state) => state.cart);
    const [userInput, setUserInput] = useState({
        ...inputData,
        payment: "",
        items: items
    });
    const shippingFee = 10;
    const dispatch = useDispatch();
    const isPlaceOrder = useLocation();
    const { totalPrice } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (inputData) {
          setUserInput((prev) => ({ ...prev, ...inputData }));
        }
      }, [inputData]);
      

    const handleInput = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value});
    };

    const orderPlaced = async () => {
        const token = window.localStorage.getItem("token");
        setLoading(true)
        try {
            if (userInput.payment === "cod") {
                const response = await axios.post(
                    "http://localhost:8000/api/v1/order/place-order",
                    userInput,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        },
                        withCredentials: true
                    }
                );
    
                if (response.status === 200) {
                    dispatch(clearCart());
                    toast.success("Products Order Successfully")
                    navigate("/my-order");
                }
            } else if (userInput.payment === "stripe") {
                const response = await axios.post(
                    "http://localhost:8000/api/v1/order/payment",
                    userInput,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        },
                        withCredentials: true
                    }
                );
                console.log(response.data)
    
                    const stripe = await stripePromise;
                    await stripe.redirectToCheckout({ sessionId: response.data.sessionId });
            }
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
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
            <span className="font-[600] opacity-70">${userInput.payment === "cod" ? shippingFee : "00"}</span>
        </div>

        <div className="flex items-center justify-between py-2">
            <h1 className="font-[600] opacity-90">Total</h1>
            <span className="font-[600] opacity-90">${userInput.payment === "cod" ? totalPrice + shippingFee : totalPrice + 0}.00</span>
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
            <button className="py-3 px-8 hover:bg-slate-400 bg-slate-700 text-white text-[13px] font-semibold" onClick={orderPlaced}>{loading ? <Loader /> : "PLACE ORDER"}</button>
        </div> : <div className="float-right pt-5">
            <Link to="/place-order" className={`py-3 px-8 hover:bg-slate-400 bg-slate-700 text-white text-[13px] font-semibold ${totalPrice === 0 ? "pointer-events-none opacity-50" : ""}`}>PROCEED TO CHECKOUT</Link>
        </div> }
    </div>
  )
};

CartTotal.propTypes = {
    inputData: PropTypes.object.isRequired
};

export default CartTotal;
