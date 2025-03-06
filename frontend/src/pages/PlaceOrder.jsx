import { useState } from "react";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const handleInput = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value})
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-32 gap-10 pb-10 lg:px-32 md:px-32 px-3 mt-32 w-full">
      <div>
        <div className="flex items-center gap-3">
            <h1 className="font-semibold text-[20px]">DELIVERY INFORMATION</h1>
            <span className="bg-black w-20 h-[3px]"></span>
        </div>

        <form className="pt-10 space-y-5">
            <div className="flex items-center justify-between gap-5">
                <input type="text" placeholder="First name" className="outline-none border px-3 py-2 rounded-md w-full" name="firstName" onChange={handleInput} />
                <input type="text" placeholder="Last name" className="outline-none border px-3 py-2 rounded-md w-full" name="lastName" onChange={handleInput} />
            </div>
            <input type="email" placeholder="Email address" className="outline-none border px-3 py-2 rounded-md w-full" name="email" onChange={handleInput} />
            <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="City" className="outline-none border px-3 py-2 rounded-md w-full" name="city" onChange={handleInput} />
                <input type="text" placeholder="Street" className="outline-none border px-3 py-2 rounded-md w-full" name="street" onChange={handleInput} />
                <input type="text" placeholder="Zipcode" className="outline-none border px-3 py-2 rounded-md w-full" name="zipcode" onChange={handleInput} />
                <input type="text" placeholder="Country" className="outline-none border px-3 py-2 rounded-md w-full" name="country" onChange={handleInput} />
            </div>
            <input type="text" placeholder="Phone" className="outline-none border px-3 py-2 rounded-md w-full" name="phone" onChange={handleInput} />
        </form>
      </div>

      <div className="flex justify-end pt-10">
        <CartTotal setInputData={setInputData} inputData={inputData} />
      </div>
    </div>
  )
}

export default PlaceOrder;