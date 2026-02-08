import Slide3D from "./Slide3D";

const ServiceSlide = ({
  item,
  index,
  isActive,
  handleSlideClick,
  onServiceClick,
}) => {
  const handleClick = () => {
    if (isActive && onServiceClick) {
      onServiceClick(item);
    } else {
      handleSlideClick(index);
    }
  };

  return (
    <Slide3D index={index} isActive={isActive} onClick={handleClick}>
      <div className="rounded-lg overflow-hidden shadow-xl transition-all duration-150 ease-out h-full">
        <img
          src={item.image}
          alt={item.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500`}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-60"
          }`}
        />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col justify-end transition-all duration-500">
          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-md">
            {item.title}
          </h3>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isActive
                ? "max-h-[200px] opacity-100 mt-2"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed line-clamp-4">
              {item.description}
            </p>
            {isActive && (
              <button className="mt-3 px-4 py-2 bg-white/90 hover:bg-white text-primary rounded-lg text-sm font-medium transition-all hover:scale-105">
                View Details
              </button>
            )}
          </div>
        </div>

        {!isActive && (
          <div className="absolute inset-0 bg-black/20 transition-all duration-500" />
        )}
      </div>
    </Slide3D>
  );
};

export default ServiceSlide;
