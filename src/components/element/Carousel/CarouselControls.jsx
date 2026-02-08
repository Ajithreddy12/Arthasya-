const CarouselControls = ({
  onPrevious,
  onNext,
  showIndicators = true,
  items = [],
  current = 0,
  onIndicatorClick,
  className = "",
}) => {
  return (
    <div className={`flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8 ${className}`}>
      <button
        onClick={onPrevious}
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white border-2 border-transparent rounded-full focus:border-primary focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white rotate-180"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {showIndicators && items.length > 1 && (
        <div className="flex justify-center gap-2 sm:gap-2.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => onIndicatorClick(i)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 sm:w-10 bg-primary"
                  : "w-2 sm:w-2.5 bg-sage hover:bg-primary-light"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : "false"}
            />
          ))}
        </div>
      )}

      <button
        onClick={onNext}
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white border-2 border-transparent rounded-full focus:border-primary focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls;
