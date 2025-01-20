import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";

const AdminDashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = () => {
    document.getElementById("choose-image").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  return (
    <div className="lg:pt-5 pt-0 space-y-2 lg:w-full">
      <div className="space-y-3">
        <h1>Upload Image</h1>
        {selectedImage ? (
          <div className="border w-full p-5">
            <img
              src={selectedImage}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center  border w-full py-5 rounded-md cursor-pointer"
            onClick={selectImage}
          >
            <div className="space-x-2 flex flex-col items-center justify-center">
              <MdCloudUpload className="text-[40px]" />
              <p className="opacity-70">Click to Upload Image</p>
            </div>
          </div>
        )}
        <button
          className="bg-slate-700 text-white w-full rounded-md py-3"
          onClick={() => setSelectedImage(null)}
        >
          Upload
        </button>
        <input
          type="file"
          placeholder="Upload"
          className="hidden"
          id="choose-image"
          accept=".png, .jpg, .jpeg"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;