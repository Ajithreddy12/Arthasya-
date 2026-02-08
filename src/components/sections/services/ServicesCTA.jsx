import { useNavigate } from "react-router-dom";
import { Container, AnimatedSection } from "../../layout";
import { Button } from "../../element";

const ServicesCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto p-12 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-600">
            Let's discuss how our services can help you achieve your business
            goals. Contact us today for a free consultation.
          </p>
          <Button onClick={() => window.location.href = 'tel:+919929017095'}>
            Call Us Now
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default ServicesCTA;
