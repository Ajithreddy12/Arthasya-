const NewsMarquee = ({ newsItems = [], speed = 30 }) => {
  if (!newsItems || newsItems.length === 0) return null;

  const duplicatedNews = [...newsItems, ...newsItems];

  return (
    <div className="bg-primary text-white py-3 overflow-hidden relative">
      <div className="flex">
        <div
          className="flex animate-scroll whitespace-nowrap"
          style={{ "--animation-duration": `${speed}s` }}
        >
          {duplicatedNews.map((item, index) => (
            <div key={index} className="flex items-center px-8">
              <span className="text-accent mr-3 text-lg">★</span>
              <span className="text-sm md:text-base font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
