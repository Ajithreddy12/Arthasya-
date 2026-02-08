import { useNavigate } from "react-router-dom";
import { Container, AnimatedSection } from "../../layout";
import { SectionHeading } from "../../element";

const HomeAbout = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pink-50 rounded-full blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-50 rounded-full blur-[100px] pointer-events-none opacity-60" />

      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="ABOUT US"
            title="Building Digital Excellence Since Day One"
            ctaText="Learn More"
            onCtaClick={() => navigate("/about")}
          />

          <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2 mt-12">
            <div className="relative px-4 sm:px-0 order-2 lg:order-1">
              <div className="absolute -left-4 -top-4 md:-left-6 md:-top-6 h-16 w-16 md:h-24 md:w-24 rounded-full bg-pink-100 z-0 blur-xl" />
              <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 h-20 w-20 md:h-32 md:w-32 rounded-full bg-purple-100 z-0 blur-xl" />
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl shadow-pink-500/5 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            <div className="max-w-full order-1 lg:order-2">
              <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-600">
                At BW Digital, we combine creativity with technology to deliver
                exceptional digital solutions. Our mission is to help businesses
                thrive in the digital landscape through innovative design,
                strategic marketing, and cutting-edge development.
              </p>

              <div className="space-y-6">
                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 md:p-6 transition-transform hover:scale-[1.02] duration-300 shadow-sm">
                  <h3 className="mb-3 flex items-center text-lg md:text-xl font-bold text-gray-900">
                    <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#ec4899] shadow-[0_0_10px_#ec4899]" />
                    Our Mission
                  </h3>
                  <p className="md:pl-6 text-sm md:text-base text-gray-600 leading-relaxed">
                    We're on a mission to craft high-impact digital experiences
                    that combine strategy, storytelling, and design—helping
                    businesses build their presence, engage their audience, and
                    achieve real results.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 md:p-6 transition-transform hover:scale-[1.02] duration-300 shadow-sm">
                  <h3 className="mb-3 flex items-center text-lg md:text-xl font-bold text-gray-900">
                    <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#ec4899] shadow-[0_0_10px_#ec4899]" />
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
