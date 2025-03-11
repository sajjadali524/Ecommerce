import { useEffect, useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";
import axios from "axios";
import Loader from "./Loader";

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((nextIndex) =>
        nextIndex === allImages.length - 1 ? 0 : nextIndex + 1
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, allImages.length, allImages]);

  useEffect(() => {
    const fetchHeaderImages = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/header/images"
        );
        setAllImages(response.data.headerImages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };

    fetchHeaderImages();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === allImages.length - 1 ? 0 : nextIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[650px] flex items-center justify-center overflow-hidden pt-10">
      <button
        className="absolute left-4 z-10 px-3 py-3 rounded-full bg-gray-800/30 hover:bg-gray-800/50 text-white"
        onClick={handlePrev}
      >
        <MdOutlineExpandLess className="transform -rotate-90 font-bold text-[25px]" />
      </button>

      {loading ? <Loader /> : allImages.length > 0 && (
        <div className="w-full h-full transition-all">
          <img
            src={allImages[currentIndex]?.selectedImage}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <button
        className="absolute right-4 z-10 px-3 py-3 rounded-full bg-gray-800/30 hover:bg-gray-800/50 text-white"
        onClick={handleNext}
      >
        <MdOutlineExpandLess className="transform rotate-90 font-bold text-[25px]" />
      </button>
    </div>
  );
};

export default HomeHero;