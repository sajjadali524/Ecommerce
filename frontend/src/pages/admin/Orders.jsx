import { BsBox } from "react-icons/bs";

const Orders = () => {
  return (
    <div className="lg:pt-5 pt-0 space-y-2 overflow-x-auto">
      <h1>Order Page</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 border p-5 overflow-x-auto w-full lg:space-y-0 space-y-5">
        <div className="flex space-x-20">
        <BsBox className="text-[35px] border" />

<div className="space-y-2">
  <div>
    <p className="text-[13px]">T-Shirt Product</p>
    <p className="text-[13px]">T-Shirt Product</p>
    <p className="text-[13px]">T-Shirt Product</p>
  </div>
  <h1 className="text-[13px]">Sajjad Ali</h1>
  <div>
    <p className="text-[13px]">Main Street</p>
    <p className="text-[13px]">Main Street</p>
    <p className="text-[13px]">Main Street</p>
  </div>
</div>
<div>
          <p>$120</p>
        </div>
        </div>

        <div className="flex justify-between w-full">
        <div className="space-y-2">
          <p>Items 3</p>
          <div>
            <p className="text-[14px]">Method: COD</p>
            <p className="text-[14px]">Payment: Pending</p>
            <p className="text-[14px]">Date: 19/01/2025</p>
          </div>
        </div>

        <div>
          <select className="outline-none border py-1 px-2">
            <option>Order Placed</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Out for Delivery</option>
            <option>Delivered</option>
          </select>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Orders;
