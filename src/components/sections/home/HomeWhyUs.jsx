import { motion } from 'framer-motion';
import { statsData } from '../../../data';
import {Container, AnimatedSection} from '../../layout';
import {SectionHeading, StatCard} from '../../element';
import { staggerContainer, fadeInUp } from '../../../utils/animations';
import { useNavigate } from 'react-router-dom';

const HomeWhyUs = () => {
    const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading 
            backgroundText="WHY US"
            title="Excellence in every aspect"
            ctaText="About Us"
            onCtaClick={() => navigate('/about')}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Strategic Approach",
                  desc: "Data-driven strategies that align with your business goals"
                },
                {
                  icon: "🏆",
                  title: "Creative Excellence",
                  desc: "Award-winning creative team with proven track record"
                },
                {
                  icon: "📊",
                  title: "Measurable Results",
                  desc: "ROI-focused campaigns with transparent reporting"
                },
                {
                  icon: "💼",
                  title: "Industry Expertise",
                  desc: "Deep understanding of diverse sectors and markets"
                },
                {
                  icon: "⚡",
                  title: "Agile Execution",
                  desc: "Fast turnaround without compromising quality"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-ivory rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {statsData.map((stat, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <StatCard value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default HomeWhyUs;