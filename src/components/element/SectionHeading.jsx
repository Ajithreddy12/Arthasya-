import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { ArrowRight } from "lucide-react";

const SectionHeading = ({ backgroundText, title, ctaText, onCtaClick, className = "" }) => {
  return (
    <motion.div
      className={`relative mb-12 md:mb-20 ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {backgroundText && (
        <h2
          className="
            absolute top-0 left-0
            text-[3.2rem] md:text-[6rem] lg:text-[8rem]
            font-extrabold uppercase
            tracking-wider
            opacity-10 
            select-none pointer-events-none
            leading-none
            w-full overflow-hidden whitespace-nowrap
            text-white/20
          "
        >
          {backgroundText}
        </h2>
      )}

      <div className="relative pt-10 pl-4 md:pt-16 md:pl-16 z-10 flex flex-col md:block">
        <h3 className="text-2xl md:text-5xl font-bold text-inherit leading-tight max-w-3xl">
          {title}
        </h3>

        {ctaText && (
          <button
            onClick={onCtaClick}
            className="mt-4 w-fit md:mt-0 md:absolute md:top-8 md:right-0 group flex items-center gap-2 text-[#ec4899] font-semibold cursor-pointer transition-all duration-300 hover:text-[#ec4899]/80"
          >
            <span className="text-sm md:text-base">{ctaText}</span>

            <ArrowRight
              className=" w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeading;
