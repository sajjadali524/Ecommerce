import { Link, useLocation } from "react-router-dom";

const CartTotal = () => {
    const isPlaceOrder = useLocation();
  return (
    <div className={`${isPlaceOrder.pathname == "/place-order" ? "w-full" : "lg:w-1/3 md:w-1/2 w-full"}`}>
        <div className="flex items-center gap-3 pb-5">
            <h1 className="font-semibold text-[18px]">CART TOTALS</h1>
            <span className="bg-black w-20 h-[3px]"></span>
        </div>

        <div className="flex items-center justify-between py-2 border-b">
            <h1 className="font-[600] opacity-70">Subtotal</h1>
            <span className="font-[600] opacity-70">$294.00</span>
        </div>

        <div className="flex items-center justify-between py-2 border-b">
            <h1 className="font-[600] opacity-70">Shipping Fee</h1>
            <span className="font-[600] opacity-70">$10.00</span>
        </div>

        <div className="flex items-center justify-between py-2">
            <h1 className="font-[600] opacity-90">Total</h1>
            <span className="font-[600] opacity-90">$304.00</span>
        </div>

        {isPlaceOrder.pathname == "/place-order" && <div className="pt-10">
            <div className="flex items-center gap-3 pb-5">
                <h1 className="font-semibold text-[18px]">PAYMENT METHOD</h1>
                <span className="bg-black w-20 h-[3px]"></span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3 border py-2 px-4 ">
                    <input type="radio" value="payment" name="payment" />
                    <span className="text-purple-700 font-bold">Stripe</span>
                </div>
                <div className="flex items-center gap-3 border py-2 px-4 ">
                    <input type="radio" value="payment" name="payment" />
                    <span className="font-bold opacity-70 text-[14px]">CASH ON DELIVERY</span>
                </div>
            </div>
        </div>}

        {isPlaceOrder.pathname == "/place-order" ? <div className="float-right pt-10">
            <Link to="/place-order" className="py-3 px-8 hover:bg-slate-400 bg-slate-700 text-white text-[13px] font-semibold">PLACE ORDER</Link>
        </div> : <div className="float-right pt-5">
            <Link to="/place-order" className="py-3 px-8 hover:bg-slate-400 bg-slate-700 text-white text-[13px] font-semibold">PROCEED TO CHECKOUT</Link>
        </div> }
    </div>
  )
}

export default CartTotal;
