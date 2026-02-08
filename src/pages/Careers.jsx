import { PageWrapper } from "../components/layout";
import { CareersHero, CareersForm } from "../components/sections/careers";
import SEO from "../components/element/SEO";

const Careers = () => {
  return (
    <PageWrapper>
      <SEO
        title="Careers - Join Arthasya Communications | Job Opportunities"
        description="Explore exciting career opportunities at Arthasya Communications. Join our dynamic team in Jaipur and be part of innovative communication and marketing projects. Apply now for available positions."
        keywords="arthasya careers, job opportunities, communication jobs, marketing jobs Jaipur, brand strategy careers, work with us, join our team"
        url="/careers"
      />
      <CareersHero />
      <CareersForm />
    </PageWrapper>
  );
};

export default Careers;
