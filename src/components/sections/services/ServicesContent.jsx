import { useState } from "react";
import { servicesData } from "../../../data";
import { Container, AnimatedSection } from "../../layout";
import { SectionHeading } from "../../element";
import ServiceModal from "../../element/ServiceModal";

const ServicesContent = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="EXPLORE"
            title="Our comprehensive solutions."
          />
        </AnimatedSection>

        <div className="space-y-24 mt-12">
          {servicesData.map((service, index) => {
            const isOdd = index % 2 === 1;
            const totalSections = service.pages ? service.pages.flatMap(page => page.sections).length : 0;
            const remainingServices = totalSections - 6;

            return (
              <AnimatedSection key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={isOdd ? "lg:order-2" : "lg:order-1"}>
                    <h2 className="text-4xl font-bold text-[#ec4899] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {service.pages && (
                      <div className="mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.pages.flatMap(page => page.sections).slice(0, 6).map((section, idx) => (
                            <div
                              key={idx}
                              className="flex items-start bg-gray-50 border border-gray-100 rounded-lg p-3 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                              onClick={() => setSelectedService(service)}
                            >
                              <span className="text-2xl mr-3 flex-shrink-0 text-[#ec4899]">{section.icon}</span>
                              <span className="text-gray-700 text-sm font-medium group-hover:text-primary transition-colors">
                                {section.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex items-center gap-3">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="px-6 py-3 bg-[#ec4899] hover:bg-[#d946ef] text-white rounded-lg font-medium transition-all hover:scale-105"
                      >
                        View Details
                      </button>
                      {remainingServices > 0 && (
                        <span className="text-gray-500 text-sm font-medium">
                          +{remainingServices} more services
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={isOdd ? "lg:order-1" : "lg:order-2"}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
};

export default ServicesContent;