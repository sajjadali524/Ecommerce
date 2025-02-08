import { MdOutlineDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const ListItems = () => {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get("http://localhost:8000/api/v1/product/admin/get-product", {withCredentials:true});
      setAllProduct(response.data.fetchProduct)
    };
    getAllProducts();
  }, []);

  console.log(allProduct)

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/product/delete-product/${id}`, {withCredentials: true});
      setAllProduct(allProduct.filter(product => product._id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="lg:pt-5 pt-0 overflow-x-auto space-y-2 lg:w-full">
      {allProduct.length > 0 && <h1>All Products List</h1> }

      {allProduct.length > 0 ? <table className="w-full border-collapse border border-gray-200 text-left">
        {/* Table Header */}
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2 lg:w-[300px]">Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {allProduct.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={product.productImage}
                  alt={product.name}
                  className="w-10 h-10 object-cover"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{product.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">{product.price}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded ml-2 hover:bg-red-400" onClick={() => deleteProduct(product._id)}>
                  <MdOutlineDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> : <h1>No Product Found</h1> }
    </div>
  )
}

export default ListItems;