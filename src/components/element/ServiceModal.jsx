import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const ServiceModal = ({ isOpen, onClose, service }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentPage(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const pages = service.pages || [];
  const totalPages = pages.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(currentPage + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(currentPage - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 bg-white/95 hover:bg-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-90 group"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
        </button>

        <div className="overflow-y-auto max-h-[92vh] scroll-smooth">
          <div className="relative h-56 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white text-center max-w-3xl leading-tight">
                {service.title}
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:p-12">
            {pages[currentPage] && (
              <div
                key={currentPage}
                className={`space-y-8 transition-all duration-300 ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-primary rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-4 italic">
                    {pages[currentPage].description}
                  </p>
                </div>

                <div className="grid gap-8">
                  {pages[currentPage].sections?.map((section, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-gradient-to-br from-ivory to-white p-6 rounded-2xl border border-sage/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl transition-colors duration-300">
                          <span className="text-2xl">{section.icon}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors duration-300">
                          {section.title}
                        </h3>
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors duration-200"
                          >
                            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-accent/20 rounded-full mt-0.5">
                              <span className="text-accent text-sm font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-gray-700 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="sticky bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-sm p-6 border-t border-sage/20">
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 0}
                  className="group flex items-center gap-2 p-3 bg-primary text-white rounded-xl hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:hover:scale-100"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                </button>

                <div className="flex items-center gap-2">
                  {pages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setCurrentPage(idx);
                          setTimeout(() => setIsAnimating(false), 300);
                        }
                      }}
                      className={`rounded-full transition-all duration-300 ${
                        idx === currentPage
                          ? "w-10 h-3 bg-primary shadow-md"
                          : "w-3 h-3 bg-sage/40 hover:bg-primary/50 hover:scale-110"
                      }`}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages - 1}
                  className="group flex items-center gap-2 p-3 bg-primary text-white rounded-xl hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:hover:scale-100"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
