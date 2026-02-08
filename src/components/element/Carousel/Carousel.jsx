import { useState, useId } from "react";
import CarouselControls from "./CarouselControls";

const Carousel = ({
  items = [],
  renderSlide,
  onSlideChange,
  initialSlide = 0,
  className = "",
  showControls = true,
  showIndicators = true,
  slideConfig = {
    width: "85vw sm:70vw md:50vmin",
    height: "85vw sm:70vw md:50vmin",
    gap: "2vmin sm:3vmin",
  },
  children,
}) => {
  const [current, setCurrent] = useState(initialSlide);
  const id = useId();

  const handlePrevious = () => {
    const previous = current - 1;
    const newIndex = previous < 0 ? items.length - 1 : previous;
    setCurrent(newIndex);
    onSlideChange?.(newIndex);
  };

  const handleNext = () => {
    const next = current + 1;
    const newIndex = next === items.length ? 0 : next;
    setCurrent(newIndex);
    onSlideChange?.(newIndex);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
      onSlideChange?.(index);
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      aria-labelledby={`carousel-heading-${id}`}
    >
      <div className="relative w-[85vw] h-[85vw] sm:w-[70vw] sm:h-[70vw] md:w-[50vmin] md:h-[50vmin] mx-auto">
        <ul
          className="absolute flex mx-[-2vmin] sm:mx-[-3vmin] transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / items.length)}%)`,
          }}
        >
          {items.map((item, index) =>
            renderSlide({
              item,
              index,
              current,
              isActive: current === index,
              handleSlideClick,
            })
          )}
        </ul>
      </div>

      {showControls && (
        <CarouselControls
          onPrevious={handlePrevious}
          onNext={handleNext}
          showIndicators={showIndicators}
          items={items}
          current={current}
          onIndicatorClick={setCurrent}
        />
      )}

      {children?.({ current, setCurrent, items })}
    </div>
  );
};

export default Carousel;
