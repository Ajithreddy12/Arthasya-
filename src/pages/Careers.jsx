import { PageWrapper } from "../components/layout";
import { CareersHero, CareersForm } from "../components/sections/careers";
import SEO from "../components/element/SEO";

const Careers = () => {
  return (
    <PageWrapper>
      <SEO
        title="Careers - Join Binge Watch Digital | Job Opportunities"
        description="Explore exciting career opportunities at Binge Watch Digital. Join our dynamic team and be part of innovative design and marketing projects. Apply now for available positions."
        keywords="binge watch digital careers, job opportunities, design jobs, marketing jobs Jaipur, brand strategy careers, work with us, join our team"
        url="/careers"
      />
      <CareersHero />
      <CareersForm />
    </PageWrapper>
  );
};

export default Careers;
