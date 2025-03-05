import { useEffect, useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";

const AdminDashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const fetchHeaderImages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/header/images");
        setAllImages(response.data.headerImages)
      } catch (error) {
        console.log(error)
      }
    };
    fetchHeaderImages();
  }, [allImages]);

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

  const uploadImage = async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("choose-image").files[0];

    if(!fileInput) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("selectedImage", fileInput)

    try {
      await axios.post("http://localhost:8000/api/v1/header/upload-background", formData, 
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setSelectedImage(null)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteHeaderImage = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/header/delete-image/${id}`, {withCredentials: true});
      setAllImages(allImages.filter(image => image._id !== id))
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="lg:pt-5 pt-0 space-y-2 lg:w-full">
      <div className="space-y-3">
        <h1>Upload Image</h1>
        {selectedImage ? (
          <div className="border w-full p-1">
            <img
              src={selectedImage}
              alt="image"
              className="w-full max-h-48 object-fill "
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
          onClick={uploadImage}
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

      {/* preview images */}
      <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        {
          allImages.map((item) => {
            return(
              <div key={item._id} className="border w-full h-full relative">
                <img src={item.selectedImage} alt="images" className="object-fill" />
                <MdOutlineDeleteOutline className="absolute bottom-2 right-2 text-[18px] cursor-pointer" onClick={() => deleteHeaderImage(item._id)} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default AdminDashboard;