import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Container } from "../../layout";
import { Button } from "../../element";

const slides = [
  {
    id: 1,
    title: "Binge Watch Digital",
    subtitle: "Design • Create • Grow",
    description:
      "We Design Digital Experiences that spark the growth. From bold branding to seamless web solutions, we craft powerful, purpose-driven designs.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=60&w=1920",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=10&w=50",
    cta: "Lets Connect",
    link: "/contact",
  },
  {
    id: 2,
    title: "Creative Excellence",
    subtitle: "Connect • Convert • Elevate",
    description:
      "We craft powerful, purpose-driven designs that connect, convert, and elevate your brand across every screen.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=60&w=1920",
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=10&w=50",
    cta: "Explore Services",
    link: "/services",
  },
  {
    id: 3,
    title: "Digital Innovation",
    subtitle: "Strategy • Storytelling • Design",
    description:
      "High-impact digital experiences that combine strategy, storytelling, and design—helping businesses build their presence and achieve real results.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=60&w=1920",
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=10&w=50",
    cta: "Learn More",
    link: "/about",
  },
];
const loadedImages = new Set();

const ProgressiveImage = ({ src, placeholder, alt }) => {
  const [isLoaded, setIsLoaded] = useState(loadedImages.has(src));
  const imgRef = useRef(null);

  useEffect(() => {
    if (loadedImages.has(src)) {
      setIsLoaded(true);
      return;
    }
    if (imgRef.current?.complete) {
      loadedImages.add(src);
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3] blur-2xl scale-110"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => {
          loadedImages.add(src);
          setIsLoaded(true);
        }}
        className={`w-full h-full object-cover brightness-[0.3] transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      />
    </div>
  );
};

const HomeHero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const slideDuration = 6000;

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + slides.length) % slides.length);
    resetTimer();
  };

  const renderTitle = (title, slideId) => {
    if (slideId === 1 && title.includes("Digital")) {
      const parts = title.split("Digital");
      return (
        <>
          {parts[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#a855f7] inline-block font-extrabold">Digital</span>
        </>
      );
    }
    return title;
  };

  return (
    <section
      className="relative h-[95vh] w-full bg-[#140412] overflow-hidden shadow-2xl"
      style={{ isolation: "isolate" }}
    >
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 2, ease: [0.2, 0, 0.2, 1] },
            }}
            className="absolute inset-0 h-full w-full"
          >
            <ProgressiveImage
              src={slides[index].image}
              placeholder={slides[index].thumbnail}
              alt={slides[index].title}
            />
            {/* Very light overlay to barely tint the photos, maximizing visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2e0b28]/60 via-[#581c4e]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#140412]/70" />
            <div className="absolute inset-0 bg-[#ec4899]/10 mix-blend-overlay" />
          </motion.div>
        </AnimatePresence>
      </div>

      <Container className="relative z-10 h-full flex items-center justify-start overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full pt-12 md:pt-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start max-w-full">
              <div className="lg:col-span-8 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-4 md:mb-6"
                >
                  <span className="h-[2px] w-6 md:w-10 bg-[#ec4899] rounded-full block" />
                  <span className="text-[#ec4899] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">
                    {slides[index].subtitle}
                  </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[85px] xl:text-[100px] font-bold text-white leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-0 break-words drop-shadow-lg">
                  {renderTitle(slides[index].title, slides[index].id)}
                </h1>
              </div>

              <div className="lg:col-span-4 lg:pt-8 flex flex-col items-start max-w-full">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm md:text-lg text-gray-200 leading-relaxed mb-8 md:mb-10 max-w-md md:border-l-2 border-[#ec4899]/40 md:pl-6"
                >
                  {slides[index].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-4 w-full sm:w-auto"
                >
                  <Button
                    onClick={() => navigate(slides[index].link)}
                    className="bg-gradient-to-r from-[#ec4899] to-[#be185d] hover:from-[#be185d] hover:to-[#9d174d] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 group transition-all text-xs md:text-sm uppercase font-bold tracking-wider shadow-lg shadow-pink-500/20"
                  >
                    <span>{slides[index].cta}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>


                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center px-4">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-full p-2 flex items-center gap-2 shadow-2xl">
          <button
            onClick={() => paginate(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2 px-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                  resetTimer();
                }}
                className="relative h-1.5 w-6 sm:w-8 bg-white/20 rounded-full overflow-hidden shrink-0"
              >
                {i === index && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      duration: slideDuration / 1000,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-[#ec4899]"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
