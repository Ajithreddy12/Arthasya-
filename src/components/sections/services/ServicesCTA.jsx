import { useNavigate } from "react-router-dom";
import { Container, AnimatedSection } from "../../layout";
import { Button } from "../../element";

const ServicesCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Let's discuss how our services can help you achieve your business
            goals. Contact us today for a free consultation.
          </p>
          <Button variant="secondary" onClick={() => navigate("/contact")}>
            Contact Us Now
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default ServicesCTA;
