import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";

const AddItems = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSelectFile = () => {
    document.getElementById("select-image").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  return (
    <form className="lg:pt-5 p-0 lg:w-1/2 w-full space-y-4">
      <div className="space-y-2">
        <h1>Upload Image</h1>
        {selectedImage ? (
          <div className="relative w-20 h-20 overflow-hidden flex items-center justify-center border">
            <img
              src={selectedImage}
              alt="image"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setSelectedImage(null)}
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
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>

      <div className="space-y-5">
        <div className="flex flex-col space-y-1">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            name="productName"
            placeholder="Type here"
            className="outline-none border px-2 py-1"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            className="border outline-none px-2 py-1"
            name="productDescription"
            placeholder="Write content here"
          />
        </div>
      </div>

      <div className="flex items-center lg:gap-8 gap-3">
        <div className="flex flex-col space-y-1 w-1/2">
          <label htmlFor="category">Category</label>
          <select className="border outline-none px-2 py-1 opacity-50">
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="category">Type</label>
          <select className="border outline-none px-2 py-1 opacity-50">
            <option>TopWear</option>
            <option>BottomWear</option>
            <option>WinterWear</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="category">Price</label>
          <input
            type="text"
            placeholder="25"
            className="opacity-70 px-2 py-1 outline-none border lg:w-1/2 w-full"
          />
        </div>
      </div>

      <div className="space-y-1">
        <h2 className="text-[15px]">Product Sizes</h2>
        <div className="flex gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              type="button"
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

        <div className="pt-3">
          <button
            className="bg-slate-700 px-5 py-2 text-white hover:bg-slate-500"
            onClick={(e) => {
              e.preventDefault();
              console.log("Selected Sizes:", selectedSizes);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddItems;