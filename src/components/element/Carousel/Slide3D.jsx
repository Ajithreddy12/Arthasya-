import { useRef } from "react";

const Slide3D = ({
  index,
  isActive,
  onClick,
  children,
  className = "",
  enable3D = true,
}) => {
  const slideRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!isActive || !slideRef.current || !enable3D) return;
    const r = slideRef.current.getBoundingClientRect();
    const x = event.clientX - (r.left + r.width / 2);
    const y = event.clientY - (r.top + r.height / 2);
    slideRef.current.style.setProperty("--x", `${x}px`);
    slideRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!slideRef.current) return;
    slideRef.current.style.setProperty("--x", `0px`);
    slideRef.current.style.setProperty("--y", `0px`);
  };

  return (
    <li
      ref={slideRef}
      className={`flex-shrink-0 w-[85vw] h-[85vw] sm:w-[70vw] sm:h-[70vw] md:w-[50vmin] md:h-[50vmin] mx-[2vmin] sm:mx-[3vmin] cursor-pointer ${
        enable3D ? "[perspective:1200px] [transform-style:preserve-3d]" : ""
      } ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: !isActive ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transform: isActive && enable3D
            ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
            : "none",
        }}
      >
        {children}
      </div>
    </li>
  );
};

export default Slide3D;
