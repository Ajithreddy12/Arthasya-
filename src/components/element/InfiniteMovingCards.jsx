import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    getDirection();
    getSpeed();
    setStart(true);
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 gap-4 py-4 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={`original-${idx}`} className="flex-shrink-0">
            {item}
          </li>
        ))}

        {items.map((item, idx) => (
          <li key={`duplicate-${idx}`} className="flex-shrink-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InfiniteMovingCards;
