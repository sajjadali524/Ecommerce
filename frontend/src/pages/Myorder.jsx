import { useEffect, useState } from "react";
import axios from "axios";

const Myorder = () => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const fetchMyOrders = async() => {
      const token = window.localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/order/get-order`,
          {
            headers: {
              "Authorization": `Bearer ${token}`
            },
            withCredentials: true
          }
        );
        setMyOrders(response.data.myOrders);
      } catch (error) {
        console.log(error)
      }
    } 
    fetchMyOrders();
  }, [myOrders]);

  return (
    <div className="flex flex-col lg:px-32 md:px-32 px-3 mt-32 w-full space-y-20">
      <div>
        <div className="flex items-center gap-3 pb-8 border-b border-slate-200">
          <h1 className="font-semibold text-[20px]">MY ORDER</h1>
          <span className="bg-black w-20 h-[3px]"></span>
        </div>
  
        {myOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="flex flex-col min-w-[600px]">
              {myOrders.map((order) => {
                return (
                  <div
                    key={order._id}
                    className="flex flex-col w-full gap-5"
                  >
                    {order.items.map((item, index) => {
                      return (
                        <div key={index} className="flex items-center justify-between gap-4 py-5 border-b border-slate-200">
                          <div className="flex gap-3 items-center">
                            <img src={item.image} alt="image" className="w-20" />
                            <div>
                              <h1 className="font-semibold opacity-70 text-[14px]">
                                {item.name}
                              </h1>
                              <div className="flex items-center gap-3">
                                <h2 className="opacity-70 font-semibold text-[14px]">
                                  ${item.price}
                                </h2>
                                <span className="opacity-70 font-semibold text-[14px]">
                                  Qty: {item.quantity}
                                </span>
                                <span className="opacity-70 font-semibold text-[14px]">
                                  Size: {item.size}
                                </span>
                              </div>
                              <p className="font-semibold opacity-70 text-[14px]">
                                Date: {new Date(order.createdAt).toLocaleDateString()}
                              </p>
                              <p className="font-semibold opacity-70 text-[14px]">
                                Method: <span className="uppercase">{order.paymentMethod}</span>
                              </p>
                            </div>
                          </div>
                          <p className="opacity-80 flex items-center gap-2">
                            <div className="bg-green-500 rounded-full w-2 h-2"></div>
                            {order.paymentStatus}
                          </p>
                          <button className="border px-3 py-1">Track order</button>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <h1 className="pt-10 text-[17px]">Order is empty!</h1>
        )}
      </div>
    </div>
  );
}  

export default Myorder;