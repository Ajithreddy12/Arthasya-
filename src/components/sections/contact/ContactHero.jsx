import { Container, AnimatedSection } from "../../layout";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 sm:pt-20 pb-20 bg-ivory overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block sm:mt-10 lg:mt-0 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent-dark">
                  Get in Touch
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Ready to build something <span className="text-primary">Amazing?</span>
              </h1>

              <div className="w-20 h-1 bg-primary mb-8" />

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Great ideas start with a simple conversation. Share your vision
                with us, and together we'll turn it into something remarkable.
                At BW Digital, we believe every great partnership begins with
                a simple conversation.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform -rotate-2" />

              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&h=400&fit=crop"
                  alt="Contact support team"
                  className="rounded-xl w-full object-cover aspect-[4/3]"
                />

                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl text-center min-w-[140px]">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm font-medium opacity-90">
                    Always Open
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
