import { useState } from "react";
import { homeHerobg1, homeHerobg2, homeHerobg3 } from "../constants/images.js";
import { MdOutlineExpandLess } from "react-icons/md";

const HomeHero = () => {
  const bgImages = [homeHerobg1, homeHerobg2, homeHerobg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? bgImages.length - 1 : prevIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex((nextIndex) => nextIndex === bgImages.length - 1 ? 0 : nextIndex + 1)
  }

  return (
    <div className="relative w-full h-[650px] flex items-center justify-center overflow-hidden pt-10">
      <button
        className="absolute left-4 z-10 px-3 py-3 rounded-full bg-gray-800/30 hover:bg-gray-800/50 text-white"
        onClick={handlePrev}
      >
        <MdOutlineExpandLess className="transform -rotate-90 font-bold text-[25px]" />
      </button>
     
      <div className="w-full h-full transition-all">
        <img
          src={bgImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

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
