import { useNavigate } from "react-router-dom";
import { Container, AnimatedSection } from "../../layout";
import { Button } from "../../element";

const AboutTeam = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We're always looking for talented individuals who share our passion
            for excellence and innovation. Whether you're seeking a full-time
            career or freelance opportunities, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className="px-8 py-4 text-lg"
              onClick={() => navigate("/careers")}
            >
              View Career Opportunities
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 text-lg"
              onClick={() => navigate("/freelancer")}
            >
              Freelance With Us
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default AboutTeam;
