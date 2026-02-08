import { useNavigate } from "react-router-dom";
import { servicesData } from "../../../data";
import { Container, AnimatedSection } from "../../layout";
import { ServiceCarousel, SectionHeading } from "../../element";

const HomeServices = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="SERVICES"
            title="Comprehensive solutions for growth"
            ctaText="Know More"
            onCtaClick={() => navigate("/services")}
          />
          <ServiceCarousel items={servicesData} />
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default HomeServices;
