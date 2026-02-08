import { useState, useEffect } from "react";
import Slide3D from "./Slide3D";

const PartnerSlide = ({ item, index, isActive, handleSlideClick, onPartnerClick }) => {
  const [translateY, setTranslateY] = useState(0);

  const handleClick = () => {
    if (isActive && onPartnerClick) {
      onPartnerClick(item);
    } else {
      handleSlideClick(index);
    }
  };

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setTranslateY(-15), 100);
      return () => clearTimeout(timer);
    } else {
      setTranslateY(0);
    }
  }, [isActive]);

  return (
    <Slide3D index={index} isActive={isActive} onClick={handleClick}>
      <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-150 ease-out h-full">
        <div
          className={`h-full transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-60"
          }`}
        >
          <div className="bg-white rounded-lg flex flex-col h-full overflow-hidden">
            <div
              className="flex flex-col h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(${translateY}%)` }}
            >
              <div className="h-full w-full flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-shrink-0 bg-white">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide3D>
  );
};

export default PartnerSlide;
