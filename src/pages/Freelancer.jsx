import { PageWrapper } from "../components/layout";
import {
  FreelancerHero,
  FreelancerForm,
} from "../components/sections/freelancer";
import SEO from "../components/element/SEO";

const Freelancer = () => {
  return (
    <PageWrapper>
      <SEO
        title="Freelancer Portal - Arthasya Communications | Collaborate With Us"
        description="Join our network of talented freelancers. Collaborate with Arthasya Communications on exciting projects. Apply for freelance opportunities in content creation, design, marketing, and more."
        keywords="freelance opportunities, freelancer portal, content creator jobs, freelance marketing, design freelance, collaborate with arthasya"
        url="/freelancer"
      />
      <FreelancerHero />
      <FreelancerForm />
    </PageWrapper>
  );
};

export default Freelancer;
