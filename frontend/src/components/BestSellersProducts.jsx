import { useEffect, useState } from "react";
import axios from "axios";

const BestSellersProducts = () => {
    const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const getLatestCollections = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/product/get-bestseller-product"
        );
        setBestSeller(response.data.products);
        console.log(bestSeller)
      } catch (error) {
        console.log(error);
      }
    };
    getLatestCollections();
  }, [bestSeller]);
  return (
    <div className="py-10 lg:px-32 md:px-32 px-3">
      <div className="lg:text-center md:text-center text-left space-y-2">
        <div className="flex items-center lg:justify-center md:justify-center justify-start gap-3">
            <h1 className="font-semibold lg:text-[30px] md:text-[30px] text-[20px]">BEST SELLERS</h1>
            <span className="bg-black w-20 h-[3px]"></span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, hic.</p>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 pt-10">
      {bestSeller.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer shadow-md pb-1">
              <div className="overflow-hidden transition-all">
                <img
                  src={item.productImage}
                  alt="image"
                  className="hover:scale-110"
                />
              </div>
              <div className="flex flex-col px-1 py-3 space-y-1">
                <span className="text-[15px]">{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  )
}

export default BestSellersProducts;