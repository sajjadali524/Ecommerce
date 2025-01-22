import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import axios from "axios";

const AddItems = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    type: "",
    productImage: null,
    productSizes: [],
    bestSeller: false,
  });

  const handleSelectFile = () => {
    document.getElementById("select-image").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      setFormData({ ...formData, productImage: event.target.files[0] });
    }
  };

  const handleSizeToggle = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(updatedSizes);
    setFormData({ ...formData, productSizes: updatedSizes });
  };

  const handleUserInput = (e) => {
    const { name, value, type, checked } = e.target;
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  
  const handleRemoveImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
      setSelectedImage(null);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });
    try {
      await axios.post(
        "http://localhost:8000/api/v1/product/add-product",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.href = "/add-items";
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <form className="lg:pt-5 p-0 lg:w-1/2 w-full space-y-4" onSubmit={addProduct}>
      <div className="space-y-2">
        <h1>Upload Image</h1>
        {selectedImage ? (
          <div className="relative w-20 h-20 overflow-hidden flex items-center justify-center border">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="bg-red-500 px-2 py-1 rounded-full absolute top-1 right-1 text-[12px]"
            >
              X
            </button>
          </div>
        ) : (
          <div className="w-20 flex items-center justify-center bg-slate-100 border py-4 px-3">
            <MdCloudUpload
              className="text-[30px] cursor-pointer"
              onClick={handleSelectFile}
            />
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              id="select-image"
              name="productImage"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>

      {/* Other form fields */}
      <div className="space-y-5">
        <div className="flex flex-col space-y-1">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="outline-none border px-2 py-1"
            onChange={handleUserInput}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            className="border outline-none px-2 py-1"
            name="description"
            placeholder="Write content here"
            onChange={handleUserInput}
          />
        </div>
      </div>

      <div className="flex items-center lg:gap-8 gap-3">
        {/* Category, Type, Price */}
        <div className="flex flex-col space-y-1 w-1/2">
          <label htmlFor="category">Category</label>
          <select
            className="border outline-none px-2 py-1 opacity-50"
            name="category"
            value={formData.category}
            onChange={handleUserInput}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="type">Type</label>
          <select
            className="border outline-none px-2 py-1 opacity-50"
            name="type"
            value={formData.type}
            onChange={handleUserInput}
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="TopWear">TopWear</option>
            <option value="BottomWear">BottomWear</option>
            <option value="WinterWear">WinterWear</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            className="opacity-70 px-2 py-1 outline-none border lg:w-1/2 w-full"
            onChange={handleUserInput}
          />
        </div>
      </div>

      {/* Sizes and Best Seller */}
      <div className="space-y-1">
        <h2 className="text-[15px]">Product Sizes</h2>
        <div className="flex gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              type="button"
              name="productSizes"
              onClick={() => handleSizeToggle(size)}
              className={`py-2 px-4 font-semibold text-[13px] rounded border ${
                selectedSizes.includes(size)
                  ? "bg-slate-700 text-white"
                  : "bg-slate-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-3">
          <input
            type="checkbox"
            name="bestSeller"
            onChange={handleUserInput}
          />
          <span>Add to best seller</span>
        </div>

        <div className="pt-3">
          <button
            className="bg-slate-700 px-5 py-2 text-white hover:bg-slate-500"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddItems;