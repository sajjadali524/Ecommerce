import CartTotal from "../components/CartTotal";
import { product } from "../constants/images";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  return (
    <div className="flex flex-col lg:px-32 md:px-32 px-3 mt-32 w-full space-y-20">
      <div>
        <div className="flex items-center gap-3 pb-8 border-b border-slate-200">
          <h1 className="font-semibold text-[20px]">YOUR CART</h1>
          <span className="bg-black w-20 h-[3px]"></span>
        </div>

        <div className="flex items-center justify-between py-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <img src={product} alt="image" className="w-16" />

            <div className="space-y-2">
              <h1 className="font-semibold opacity-70 text-[14px]">
                T-Shirt Girls Fashion
              </h1>
              <div className="flex items-center gap-3">
                <h2 className="opacity-70 font-semibold text-[14px]">$80</h2>
                <span className="py-1 px-3 bg-slate-200 font-semibold opacity-90 text-[13px]">
                  L
                </span>
              </div>
            </div>
          </div>

          <input
            type="number"
            min="1"
            placeholder="1"
            className="w-10 outline-none border"
          />

          <MdDeleteOutline className="cursor-pointer text-[20px] lg:mr-10 md:mr-10 mr-0" />
        </div>
        
      </div>

      <div className="flex lg:justify-end md:justify-end">
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;