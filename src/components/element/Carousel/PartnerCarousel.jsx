import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import PartnerSlide from "./PartnerSlide";

const PartnerCarousel = ({ items, className = "" }) => {
  const navigate = useNavigate();

  const handlePartnerClick = (partner) => {
    const partnerId = partner.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    navigate(`/partners/${partnerId}`);
  };

  return (
    <Carousel
      items={items}
      className={className}
      renderSlide={(props) => (
        <PartnerSlide {...props} onPartnerClick={handlePartnerClick} />
      )}
    />
  );
};

export default PartnerCarousel;
