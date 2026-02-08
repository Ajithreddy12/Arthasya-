import { PageWrapper } from "../components/layout";
import {
  ServicesHero,
  ServicesContent,
  ServicesCTA,
} from "../components/sections/services";
import SEO from "../components/element/SEO";

const Services = () => {
  return (
    <PageWrapper>
      <SEO
        title="Our Services - Binge Watch Digital | Creative & Digital Solutions"
        description="Complete range of creative and digital services to help your brand grow. SEO, content marketing, web design, development, social media management, and more."
        keywords="web design services, SEO services, content marketing, social media management, web development, digital branding, creative services"
        url="/services"
      />
      <ServicesHero />
      <ServicesContent />
      <ServicesCTA />
    </PageWrapper>
  );
};

export default Services;
