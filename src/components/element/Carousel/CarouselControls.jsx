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
    <div className={`flex justify-center items-center mt-10 md:mt-12 ${className}`}>
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full p-2 flex items-center gap-2 shadow-2xl">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        {showIndicators && items.length > 1 && (
          <div className="flex items-center gap-2 px-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => onIndicatorClick(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                    ? "w-8 bg-[#ec4899]"
                    : "w-6 bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? "true" : "false"}
              />
            ))}
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselControls;
