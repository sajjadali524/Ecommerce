import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-32 gap-10 pb-10 lg:px-32 md:px-32 px-3 mt-32 w-full">
      <div>
        <div className="flex items-center gap-3">
            <h1 className="font-semibold text-[20px]">DELIVERY INFORMATION</h1>
            <span className="bg-black w-20 h-[3px]"></span>
        </div>

        <form className="pt-10 space-y-5">
            <div className="flex items-center justify-between gap-5">
                <input type="text" placeholder="First name" className="outline-none border px-3 py-2 rounded-md w-full" />
                <input type="text" placeholder="Last name" className="outline-none border px-3 py-2 rounded-md w-full" />
            </div>
            <input type="email" placeholder="Email address" className="outline-none border px-3 py-2 rounded-md w-full" />
            <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="City" className="outline-none border px-3 py-2 rounded-md w-full" />
                <input type="text" placeholder="Street" className="outline-none border px-3 py-2 rounded-md w-full" />
                <input type="text" placeholder="Zipcode" className="outline-none border px-3 py-2 rounded-md w-full" />
                <input type="text" placeholder="Country" className="outline-none border px-3 py-2 rounded-md w-full" />
            </div>
            <input type="text" placeholder="Phone" className="outline-none border px-3 py-2 rounded-md w-full" />
        </form>
      </div>

      <div className="flex justify-end pt-10">
        <CartTotal />
      </div>
    </div>
  )
}

export default PlaceOrder;