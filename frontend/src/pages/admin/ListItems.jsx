import { product } from "../../constants/images";
import { RiEditBoxLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ListItems = () => {
  const products = [
    {
      id: 1,
      image: product,
      name: "Product 1",
      category: "Men",
      price: "$25",
    },
    {
      id: 2,
      image: product,
      name: "Product 2",
      category: "Women",
      price: "$30",
    },
    {
      id: 3,
      image: product,
      name: "Product 3",
      category: "Kids",
      price: "$20",
    },
  ];

  return (
    <div className="lg:pt-5 pt-0 overflow-x-auto space-y-2 lg:w-full">
      <h1>All Products List</h1>

      <table className="w-full border-collapse border border-gray-200 text-left">
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
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={product.image}
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
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400">
                  <RiEditBoxLine />
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded ml-2 hover:bg-red-400">
                  <MdOutlineDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListItems;