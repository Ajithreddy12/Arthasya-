const NewsMarquee = ({ newsItems = [], speed = 30 }) => {
  if (!newsItems || newsItems.length === 0) return null;

  const duplicatedNews = [...newsItems, ...newsItems];

  return (
    <div className="bg-gradient-to-r from-[#ec4899] via-[#be185d] to-[#ec4899] text-white py-5 overflow-hidden relative border-y border-white/10">
      <div className="flex">
        <div
          className="flex animate-scroll whitespace-nowrap"
          style={{ "--animation-duration": `${speed}s` }}
        >
          {duplicatedNews.map((item, index) => (
            <div key={index} className="flex items-center px-12">
              <span className="text-white/90 mr-4 text-xl">★</span>
              <span className="text-sm md:text-lg font-bold uppercase tracking-wider">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
