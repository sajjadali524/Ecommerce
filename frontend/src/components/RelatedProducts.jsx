import { product } from "../constants/images";

const RelatedProducts = () => {
  return (
    <div className="lg:my-28 md:my-20 my-10 lg:px-32 md:px-32 px-3">
      <div className="lg:text-center md:text-center text-left space-y-2">
        <div className="flex items-center lg:justify-center md:justify-center justify-start gap-3">
            <h1 className="font-semibold lg:text-[30px] md:text-[30px] text-[20px]">RELATED PRODUCTS</h1>
            <span className="bg-black w-20 h-[3px]"></span>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 pt-10">
        <div className="cursor-pointer shadow-md pb-1">
            <div className="overflow-hidden transition-all">
                <img src={product} alt="image" className="hover:scale-110"/>
            </div>
            <div className="flex flex-col px-1 py-3 space-y-1">
                <span className="text-[15px]">T-Shirt Product</span>
                <span className="font-semibold">$130</span>
            </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1 overflow-hidden">
            <div className="overflow-hidden transition-all">
                <img src={product} alt="image" className="hover:scale-110"/>
            </div>
            <div className="flex flex-col px-1 py-3 space-y-1">
                <span className="text-[15px]">T-Shirt Product</span>
                <span className="font-semibold">$130</span>
            </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1 overflow-hidden">
            <div className="overflow-hidden transition-all">
                <img src={product} alt="image" className="hover:scale-110"/>
            </div>
            <div className="flex flex-col px-1 py-3 space-y-1">
                <span className="text-[15px]">T-Shirt Product</span>
                <span className="font-semibold">$130</span>
            </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1 overflow-hidden">
            <div className="overflow-hidden transition-all">
                <img src={product} alt="image" className="hover:scale-110"/>
            </div>
            <div className="flex flex-col px-1 py-3 space-y-1">
                <span className="text-[15px]">T-Shirt Product</span>
                <span className="font-semibold">$130</span>
            </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1 overflow-hidden">
            <div className="overflow-hidden transition-all">
                <img src={product} alt="image" className="hover:scale-110"/>
            </div>
            <div className="flex flex-col px-1 py-3 space-y-1">
                <span className="text-[15px]">T-Shirt Product</span>
                <span className="font-semibold">$130</span>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default RelatedProducts;