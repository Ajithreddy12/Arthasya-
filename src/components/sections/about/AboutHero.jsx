import { Container, AnimatedSection } from "../../layout";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 sm:pt-10 pb-20 bg-ivory overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block sm:mt-10 lg:mt-0 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">
                  Who We Are
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-charcoal mb-6 leading-tight">
                About <span className="text-primary">BW Digital</span>
              </h1>
              <div className="w-20 h-1 bg-accent mb-8" />
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At BW Digital, we combine creativity with technology to deliver
                exceptional digital solutions. Our mission is to help businesses
                thrive in the digital landscape through innovative design,
                strategic marketing, and cutting-edge development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From bold branding to seamless web solutions, we craft powerful,
                purpose-driven designs that connect, convert, and elevate your
                brand across every screen.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3" />
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team brainstorming"
                  className="rounded-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Projects Delivered</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
