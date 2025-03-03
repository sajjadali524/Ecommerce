import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const RelatedProducts = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/product/product-detail/${id}`
        );
        setRelatedProduct(response.data.relatedProduct);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRelatedProducts();
  }, [id]);

  return (
    <div className="lg:my-28 md:my-20 my-10 lg:px-32 md:px-32 px-3">
      <div className="lg:text-center md:text-center text-left space-y-2">
        <div className="flex items-center lg:justify-center md:justify-center justify-start gap-3">
          <h1 className="font-semibold lg:text-[30px] md:text-[30px] text-[20px]">
            RELATED PRODUCTS
          </h1>
          <span className="bg-black w-20 h-[3px]"></span>
        </div>
      </div>

      {relatedProduct.length > 0 ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 pt-10">
          {relatedProduct.map((item, index) => {
            return (
              <Link
                to={`/product-detail/${item._id}`}
                key={index}
                className="cursor-pointer shadow-md pb-1"
              >
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
              </Link>
            );
          })}
        </div>
      ) : (
        <h1>No Related Product Found</h1>
      )}
    </div>
  );
};

export default RelatedProducts;