import { useEffect } from "react";
import CartTotal from "../components/CartTotal";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  removeFromCart,
} from "../components/redux/slices/cartSlice";
import Loader from "../components/Loader";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="flex flex-col lg:px-32 md:px-32 px-3 mt-32 w-full space-y-20">
      <div>
        <div className="flex items-center gap-3 pb-8 border-b border-slate-200">
          <h1 className="font-semibold text-[20px]">YOUR CART</h1>
          <span className="bg-black w-20 h-[3px]"></span>
        </div>

        {items.length > 0 ? (
          <div>
            {items.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex items-center justify-between py-5 border-b border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.productImage} alt="image" className="w-16" />

                    <div className="space-y-2">
                      <h1 className="font-semibold opacity-70 text-[14px]">
                        {item.name}
                      </h1>
                      <div className="flex items-center gap-3">
                        <h2 className="opacity-70 font-semibold text-[14px]">
                          ${item.price}
                        </h2>
                        <span className="py-1 px-3 bg-slate-200 font-semibold opacity-90 text-[13px]">
                          {item.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="opacity-80">Qty: {item.quantity}</p>

                  <MdDeleteOutline
                    className="cursor-pointer text-[20px] lg:mr-10 md:mr-10 mr-0"
                    onClick={() => handleDelete(item._id)}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className="pt-10 text-[17px]">Cart is empty!</h1>
        )}
      </div>

      <div className="flex lg:justify-end md:justify-end">
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;