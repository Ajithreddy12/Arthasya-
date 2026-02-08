import { motion } from "framer-motion";
import { Container, AnimatedSection } from "../../layout";
import { SectionHeading } from "../../element";
import { staggerContainer, fadeInUp } from "../../../utils/animations";

const AboutKnowUs = () => {
  const teamValues = [
    {
      title: "Innovation",
      desc: "We constantly push boundaries and explore new ways to communicate effectively.",
      icon: "💡",
    },
    {
      title: "Integrity",
      desc: "Transparency and honesty form the foundation of all our client relationships.",
      icon: "🤝",
    },
    {
      title: "Excellence",
      desc: "We strive for the highest quality in every project we undertake.",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      desc: "We believe in working together with our clients as true partners.",
      icon: "🤜🤛",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="VALUES"
            title="What drives us forward."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Know Us Better
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Binge Watch Digital, we don't just create campaigns—we
              build relationships. Our approach is rooted in understanding your
              unique challenges, goals, and aspirations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With a team of seasoned professionals from diverse backgrounds, we
              bring fresh perspectives and innovative solutions to every
              project. Our expertise spans web design, development, SEO, content
              marketing, and social media management.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What sets us apart is our commitment to excellence and our passion
              for helping our clients succeed. We measure our success by the
              success of our clients, and we're proud to have helped numerous
              businesses achieve their digital and branding goals.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-ivory p-6 rounded-lg"
              >
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutKnowUs;
