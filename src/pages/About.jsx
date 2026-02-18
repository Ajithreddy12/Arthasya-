import { PageWrapper } from "../components/layout";
import {
  AboutHero,
  AboutKnowUs,
  AboutTeam,
} from "../components/sections/about";
import SEO from "../components/element/SEO";

const About = () => {
  return (
    <PageWrapper>
      <SEO
        title="About Us - Binge Watch Digital | Our Story & Vision"
        description="At BW Digital, we combine creativity with technology to deliver exceptional digital solutions. Learn about our mission, vision, and the team behind innovative digital experiences."
        keywords="about binge watch digital, digital agency team, web design experts, creative studio, company profile, digital solutions"
        url="/about"
      />
      <AboutHero />
      <AboutKnowUs />
      <AboutTeam />
    </PageWrapper>
  );
};

export default About;
