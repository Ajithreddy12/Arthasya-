import { useNavigate } from "react-router-dom";
import { Container, AnimatedSection } from "../../layout";
import { SectionHeading } from "../../element";

const HomeAbout = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="ABOUT US"
            title="Building Digital Excellence Since Day One"
            ctaText="Learn More"
            onCtaClick={() => navigate("/about")}
          />

          <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
            <div className="relative px-4 sm:px-0">
              <div className="absolute -left-4 -top-4 md:-left-6 md:-top-6 h-16 w-16 md:h-24 md:w-24 rounded-full bg-accent/70 z-0" />
              <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 h-20 w-20 md:h-32 md:w-32 rounded-full bg-primary/80 z-0" />
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
                />
              </div>
            </div>

            <div className="max-w-full">
              <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-600">
                At BW Digital, we combine creativity with technology to deliver
                exceptional digital solutions. Our mission is to help businesses
                thrive in the digital landscape through innovative design,
                strategic marketing, and cutting-edge development.
              </p>

              <div className="space-y-6">
                <div className="rounded-2xl bg-ivory p-5 md:p-6 transition-transform hover:scale-[1.02] duration-300 shadow-sm">
                  <h3 className="mb-3 flex items-center text-lg md:text-xl font-bold text-primary">
                    <span className="mr-3 h-2.5 w-2.5 rounded-full bg-accent" />
                    Our Mission
                  </h3>
                  <p className="md:pl-6 text-sm md:text-base text-gray-600 leading-relaxed">
                    We're on a mission to craft high-impact digital experiences
                    that combine strategy, storytelling, and design—helping
                    businesses build their presence, engage their audience, and
                    achieve real results.
                  </p>
                </div>

                <div className="rounded-2xl bg-ivory p-5 md:p-6 transition-transform hover:scale-[1.02] duration-300 shadow-sm">
                  <h3 className="mb-3 flex items-center text-lg md:text-xl font-bold text-primary">
                    <span className="mr-3 h-2.5 w-2.5 rounded-full bg-accent" />
                    Our Vision
                  </h3>
                  <p className="md:pl-6 text-sm md:text-base text-gray-600 leading-relaxed">
                    To be a trusted creative partner for businesses
                    worldwide—empowering them with innovative, purpose-driven
                    digital solutions that inspire connections, spark growth,
                    and stand the test of time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default HomeAbout;
