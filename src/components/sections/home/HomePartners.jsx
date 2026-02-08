import { partnersData } from "../../../data";
import { Container, AnimatedSection } from "../../layout";
import { PartnerCarousel, SectionHeading } from "../../element";

const HomePartners = () => {
  return (
    <section className="py-20 bg-ivory">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="PARTNERS"
            title="Building success together"
          />
          <PartnerCarousel items={partnersData} />
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default HomePartners;
