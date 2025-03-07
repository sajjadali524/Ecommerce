import { useState, useEffect } from "react";
import { BsBox } from "react-icons/bs";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const fetchAllOrders = async () => {
      const token = window.localStorage.getItem("admin");
      try {
        const response = await axios.get("http://localhost:8000/api/v1/order/get-all-order", 
          {
            headers: {
              "Authorization": `Bearer ${token}`
            },
            withCredentials: true
          }
        );
        setAllOrders(response.data.order);
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllOrders();
  }, [allOrders]);

  const updatePaymentStatus = async (e, id) => {
    const token = window.localStorage.getItem("admin");
    const newStatus = e.target.value;
  
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/order/update-order/${id}`,
        { paymentStatus: newStatus },
        {
          headers: {
            "Authorization": `Bearer ${token}`
          },
          withCredentials: true
        }
      );

      // setAllOrders(response.data.updateOrder)
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="lg:pt-5 pt-0 space-y-2 overflow-x-auto w-full">
      <h1>Order Page</h1>

      {
        allOrders.map((order) => {
          return(
            <div key={order._id} className="grid lg:grid-cols-2 grid-cols-1 border p-5 overflow-x-auto w-full lg:space-y-0 space-y-5">
        <div className="flex lg:space-x-0 space-x-20">
          <BsBox className="text-[35px] border" />

          <div className="space-y-2 space-x-5">
            {
              order.items.map((item, index) => {
                return (
                  <div key={index} className={`${index === 0 && "pl-5"}`}>
              <p className="text-[13px]">{item.name}</p>
            </div>
                )
              })
            }
            <div>
            <h1 className="text-[13px] pb-3">{order.shippingAddress.firstName} {order.shippingAddress.lastName},</h1>
              <p className="text-[13px]">{order.shippingAddress.country} {order.shippingAddress.city},</p>
              <p className="text-[13px]">{order.shippingAddress.street},</p>
              <p className="text-[13px]">{order.shippingAddress.zipcode},</p>
              <p className="text-[13px]">{order.shippingAddress.phone}</p>
            </div>
          </div>
          <div>
            <p>Total: ${order.totalPrice}</p>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="space-y-2">
            <p>Qty: {order.totalQuantity}</p>
            <div>
              <p className="text-[14px]">Method: <span className="text-[14px] uppercase">{order.paymentMethod}</span></p>
              <p className="text-[14px]">Payment: {`${order.paymentStatus === "Delivered" ? "Completed" : "Pending"}`}</p>
              <p className="text-[14px]">Date: {status}</p>
            </div>
          </div>

          <div>
            <select className="outline-none border py-1 px-2" disabled = {order.paymentStatus === "Delivered"}  value={order.paymentStatus} onChange={(e) => updatePaymentStatus(e, order._id)}>
              <option value="Order Placed">Order Placed</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      </div>
          )
        })
      }
    </div>
  );
};

export default Orders;