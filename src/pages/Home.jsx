import { PageWrapper } from "../components/layout";
import {
  HomeHero,
  HomeAbout,
  HomeServices,
  HomeClients,
  HomePartners,
  HomeWhyUs,
} from "../components/sections/home";
import { NewsMarquee } from "../components/element";
import { newsItems } from "../data";
import SEO from "../components/element/SEO";

const Home = () => {
  return (
    <PageWrapper>
      <SEO
        title="Binge Watch Digital | Digital Design & Creative Agency"
        description="We design digital experiences that spark growth. From bold branding to seamless web solutions, we craft powerful, purpose-driven designs that connect, convert, and elevate your brand."
        keywords="digital agency, web design, branding, SEO, content marketing, social media management, creative agency, web development, digital solutions"
        url="/"
      />
      <HomeHero />
      <HomeAbout />
      <NewsMarquee newsItems={newsItems} speed={35} />
      <HomeServices />
      <HomeClients />
      <HomePartners />
      <HomeWhyUs />
    </PageWrapper>
  );
};

export default Home;
