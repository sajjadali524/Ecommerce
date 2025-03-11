import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const BestSellersProducts = () => {
    const [bestSeller, setBestSeller] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLatestCollections = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/product/get-bestseller-product"
        );
        setBestSeller(response.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };
    getLatestCollections();
  }, []);

  return (
    <div className={`${loading ? "lg:pt-20 md:pt-20 pt-10" : "lg:py-20 md:py-20 py-10"} lg:px-32 md:px-32 px-3`}>
      <div className="lg:text-center md:text-center text-left space-y-2">
        <div className="flex items-center lg:justify-center md:justify-center justify-start gap-3">
            <h1 className="font-semibold lg:text-[30px] md:text-[30px] text-[20px]">BEST SELLERS</h1>
            <span className="bg-black w-20 h-[3px]"></span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, hic.</p>
      </div>

      {loading ? <div className="flex items-center justify-center"><Loader /></div> : <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 pt-10">
      {bestSeller.map((item, index) => {
          return (
            <Link to={`/product-detail/${item._id}`} key={index} className="cursor-pointer shadow-md pb-1">
              <div className="overflow-hidden transition-all">
                <img
                  src={item.productImage}
                  alt="image"
                  className="hover:scale-110"
                />
              </div>
              <div className="flex flex-col px-1 py-3 space-y-1">
                <span className="text-[15px]">{item.name}</span>
                <span className="font-semibold">${item.price}</span>
              </div>
            </Link>
          );
        })}
        
      </div>}
    </div>
  )
}

export default BestSellersProducts;