import { useEffect, useRef, useState } from "react";
import TeamMemberCard from "../../element/TeamMemberCard";

const InfiniteScrollRow = ({ items, speed = "normal" }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      const duration =
        speed === "fast" ? "20s" : speed === "slow" ? "60s" : "40s";
      containerRef.current.style.setProperty("--animation-duration", duration);
      setStart(true);
    }
  }, [speed]);

  return (
    <div ref={containerRef} className="relative overflow-visible">
      <ul
        ref={scrollerRef}
        className={`flex w-max shrink-0 gap-4 flex-nowrap ${
          start ? "animate-scroll" : ""
        } hover:[animation-play-state:paused]`}
      >
        {items.map((column, idx) => (
          <li
            key={idx}
            className="flex flex-col gap-4 flex-shrink-0 odd:translate-y-6 even:-translate-y-6"
          >
            <TeamMemberCard member={column.top} />
            <TeamMemberCard member={column.bottom} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScrollRow;
