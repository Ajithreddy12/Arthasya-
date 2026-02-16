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
            absolute -top-4 -left-4 md:-top-10 md:-left-8
            text-[4rem] md:text-[8rem] lg:text-[11rem]
            font-serif font-bold uppercase
            tracking-tighter
            text-gray-100
            select-none pointer-events-none
            leading-none
            z-0
            whitespace-nowrap
          "
        >
          {backgroundText}
        </h2>
      )}

      <div className="relative pt-6 pl-2 md:pt-12 md:pl-10 z-10 flex flex-col md:block">
        <h3 className="text-3xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl tracking-tight">
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
