import { product } from "../constants/images";

const CollectionsProductsCard = () => {
  return (
    <div className="w-full lg:py-0 md:py-0 py-10 lg:mt-28 md:mt-28 mt-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold lg:text-[18px] md:text-[18px] text-[14px]">
            ALL COLLECTIONS
          </h1>
          <span className="lg:flex md:flex hidden bg-black w-20 h-[3px]"></span>
        </div>

        <div>
          <select className="outline-none border border-slate-600 p-2 text-[14px] font-medium cursor-pointer">
            <option className="text-[10px]">Sort by: Relevant</option>
            <option className="text-[10px]">Sort by: Low to High</option>
            <option className="text-[10px]">Sort by: High to Low</option>
          </select>
        </div>
      </div>

      {/* products  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-5 pt-10">
        <div className="cursor-pointer shadow-md pb-1">
          <div className="overflow-hidden transition-all">
            <img src={product} alt="image" className="hover:scale-110" />
          </div>
          <div className="flex flex-col px-1 py-3 space-y-1">
            <span className="text-[15px]">T-Shirt Product</span>
            <span className="font-semibold">$130</span>
          </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1">
          <div className="overflow-hidden transition-all">
            <img src={product} alt="image" className="hover:scale-110" />
          </div>
          <div className="flex flex-col px-1 py-3 space-y-1">
            <span className="text-[15px]">T-Shirt Product</span>
            <span className="font-semibold">$130</span>
          </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1">
          <div className="overflow-hidden transition-all">
            <img src={product} alt="image" className="hover:scale-110" />
          </div>
          <div className="flex flex-col px-1 py-3 space-y-1">
            <span className="text-[15px]">T-Shirt Product</span>
            <span className="font-semibold">$130</span>
          </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1">
          <div className="overflow-hidden transition-all">
            <img src={product} alt="image" className="hover:scale-110" />
          </div>
          <div className="flex flex-col px-1 py-3 space-y-1">
            <span className="text-[15px]">T-Shirt Product</span>
            <span className="font-semibold">$130</span>
          </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1">
          <div className="overflow-hidden transition-all">
            <img src={product} alt="image" className="hover:scale-110" />
          </div>
          <div className="flex flex-col px-1 py-3 space-y-1">
            <span className="text-[15px]">T-Shirt Product</span>
            <span className="font-semibold">$130</span>
          </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1">
          <div className="overflow-hidden transition-all">
            <img src={product} alt="image" className="hover:scale-110" />
          </div>
          <div className="flex flex-col px-1 py-3 space-y-1">
            <span className="text-[15px]">T-Shirt Product</span>
            <span className="font-semibold">$130</span>
          </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1">
          <div className="overflow-hidden transition-all">
            <img src={product} alt="image" className="hover:scale-110" />
          </div>
          <div className="flex flex-col px-1 py-3 space-y-1">
            <span className="text-[15px]">T-Shirt Product</span>
            <span className="font-semibold">$130</span>
          </div>
        </div>
        <div className="cursor-pointer shadow-md pb-1">
          <div className="overflow-hidden transition-all">
            <img src={product} alt="image" className="hover:scale-110" />
          </div>
          <div className="flex flex-col px-1 py-3 space-y-1">
            <span className="text-[15px]">T-Shirt Product</span>
            <span className="font-semibold">$130</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsProductsCard;