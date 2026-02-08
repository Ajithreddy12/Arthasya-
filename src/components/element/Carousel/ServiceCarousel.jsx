import { useState } from "react";
import Carousel from "./Carousel";
import ServiceSlide from "./ServiceSlide";
import ServiceModal from "../ServiceModal";

const ServiceCarousel = ({ items, className = "", onServiceSelect }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    onServiceSelect?.(service);
  };

  return (
    <>
      <Carousel
        items={items}
        className={className}
        renderSlide={(props) => (
          <ServiceSlide {...props} onServiceClick={handleServiceClick} />
        )}
      />
      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
};

export default ServiceCarousel;
