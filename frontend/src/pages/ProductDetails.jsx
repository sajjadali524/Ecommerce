import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/product/product-detail/${id}`
        );
        setProductDetail(response.data.product)
        console.log(response.data.product)
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetail();
  }, [id]);

  const handleSelectedSize = (size) => {
    setSelectedSize(size)
    console.log(selectedSize)
  };

  return (
    <>
      <div className="lg:flex block gap-10 lg:px-32 md:px-32 px-3 mt-32">
        {
          productDetail ? <>
            <div>
          <img src={productDetail.productImage} alt="product-image" />
        </div>

        <div className="lg:w-1/2 w-full space-y-3 py-3">
          <h1 className="text-20 font-semibold">{productDetail.name}</h1>
          <h3 className="text-20 font-semibold">{productDetail.price}</h3>
          <p className="opacity-70">{productDetail.description}</p>
          <h2 className="font-semibold text-[15px]">Select Size</h2>
          <div className="flex gap-2">
            {
              productDetail.productSizes?.map((size, index) => {
                return(
                    <button key={index} onClick={() => handleSelectedSize(size)} className={`py-2 px-4 bg-slate-200 font-semibold opacity-90 text-[13px] ${selectedSize === size && "bg-slate-700 text-white"}`}>{size}
                    </button>
                )
              })
            }
          </div>

          <button className="bg-slate-700 px-5 py-2 text-white hover:bg-slate-500">
            Add To Cart
          </button>

          <div className="opacity-70 space-y-2">
            <p className="text-[13px]">100% Origional product</p>
            <p className="text-[13px]">
              Cash on delivery is available in this product
            </p>
            <p className="text-[13px]">
              Every return and exchange policy within 7 days
            </p>
          </div>
        </div>
          </> : <h1>Loading...</h1>
        }
      </div>

      <RelatedProducts />
    </>
  );
};

export default ProductDetails;