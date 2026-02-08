import { useParams, useNavigate } from "react-router-dom";
import { PageWrapper, Container, AnimatedSection } from "../components/layout";
import { SectionHeading, StatCard } from "../components/element";
import { partnersData } from "../data";
import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "../components/element/SEO";
import {
  Building2,
  Globe,
  Calendar,
  TrendingUp,
  Target,
  Award,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInFromLeft,
} from "../utils/animations";

const PartnerDetail = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();

  const partner = partnersData.find(
    (p) =>
      p.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") === partnerId
  );

  useEffect(() => {
    if (!partner) {
      navigate("/404");
    }
  }, [partner, navigate]);

  if (!partner) return null;

  const allPartners = partnersData.filter((p) => p.title !== partner.title);

  return (
    <PageWrapper>
      <SEO
        title={`${partner.title} - Strategic Partner | Arthasya Communications`}
        description={
          partner.description ||
          `Explore our strategic partnership with ${partner.title}. Learn about our collaboration, services, and the impact we've created together in ${partner.category}.`
        }
        keywords={`${partner.title}, strategic partnership, ${
          partner.category
        }, business collaboration, ${partner.location || "global partnership"}`}
        url={`/partners/${partnerId}`}
      />
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary/5 via-ivory to-accent/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-sage/20 rounded-full blur-3xl"
            animate={{
              x: [-100, 100, -100],
              y: [-50, 50, -50],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <Container>
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={() => navigate("/")}
              className="my-8 group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-5 h-5 text-primary transition-transform group-hover:-translate-x-1" />
              <span className="font-semibold text-charcoal">Back to Home</span>
            </button>
          </motion.div>

          <AnimatedSection>
            <motion.div
              className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-primary/10"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="relative h-72 md:h-96 bg-gradient-to-br from-primary/10 via-ivory to-accent/10 flex items-center justify-center p-8 md:p-16 overflow-hidden"
                variants={scaleUp}
              >
                <motion.div
                  className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                <motion.img
                  src={partner.img}
                  alt={`${partner.title} - Strategic Partner`}
                  className="relative z-10 max-w-full max-h-full object-contain filter drop-shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <div className="p-6 md:p-12 lg:p-16">
                <motion.div
                  className="flex flex-wrap items-center gap-3 mb-6"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.span
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-primary-dark to-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    {partner.category}
                  </motion.span>
                  {partner.website && partner.website !== "#" && (
                    <motion.a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-full text-sm font-semibold transition-all duration-300 border-2 border-accent/30 hover:border-accent shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-charcoal via-primary to-charcoal bg-clip-text text-transparent"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                >
                  {partner.title}
                </motion.h1>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {partner.founded && (
                    <motion.div
                      className="group relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                      <div className="relative flex items-center gap-4">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                          <Calendar className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-charcoal/60 uppercase tracking-wider font-semibold mb-1">
                            Founded
                          </p>
                          <p className="text-xl font-bold text-charcoal">
                            {partner.founded}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {partner.location && (
                    <motion.div
                      className="group relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                      <div className="relative flex items-center gap-4">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                          <Globe className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-charcoal/60 uppercase tracking-wider font-semibold mb-1">
                            Location
                          </p>
                          <p className="text-xl font-bold text-charcoal">
                            {partner.location}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <motion.div
                    className="group relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-sage/20 rounded-full blur-2xl group-hover:bg-sage/30 transition-colors"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <Building2 className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-charcoal/60 uppercase tracking-wider font-semibold mb-1">
                          Partnership
                        </p>
                        <p className="text-xl font-bold text-charcoal">
                          Strategic
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative bg-gradient-to-r from-ivory/50 to-transparent rounded-2xl p-8 mb-12 border-l-4 border-primary"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
                    {partner.description}
                  </p>
                </motion.div>

                {partner.keyStats && partner.keyStats.length > 0 && (
                  <AnimatedSection delay={100}>
                    <SectionHeading
                      backgroundText="IMPACT"
                      title="Key Statistics & Achievements"
                    />
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {partner.keyStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.03 }}
                        >
                          <StatCard
                            icon={<TrendingUp className="w-8 h-8" />}
                            value={stat.value}
                            label={stat.label}
                            trend="up"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatedSection>
                )}

                {partner.services && partner.services.length > 0 && (
                  <AnimatedSection delay={200}>
                    <SectionHeading
                      backgroundText="SERVICES"
                      title="Services & Expertise"
                    />
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {partner.services.map((service, index) => (
                        <motion.div
                          key={index}
                          className="group flex items-center gap-4 bg-white rounded-xl p-5 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-lg"
                          variants={fadeInUp}
                          whileHover={{ scale: 1.02, x: 8 }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-accent group-hover:to-accent-dark transition-all">
                            <CheckCircle2 className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-charcoal font-semibold group-hover:text-primary transition-colors">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatedSection>
                )}

                {partner.partnershipHighlight && (
                  <AnimatedSection delay={250}>
                    <motion.div
                      className="relative mb-16 from-sage/30 via-sage-light/40 to-sage/20 rounded-3xl p-10 md:p-12 border-2 border-sage overflow-hidden"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                            <Award className="w-7 h-7 text-white" />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                            Partnership Highlight
                          </h2>
                        </div>
                        <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
                          {partner.partnershipHighlight}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                )}

                {partner.impactAreas && partner.impactAreas.length > 0 && (
                  <AnimatedSection delay={300}>
                    <motion.div
                      className="mb-16"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal">
                          Impact Areas
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {partner.impactAreas.map((area, index) => (
                          <motion.span
                            key={index}
                            className="group relative bg-gradient-to-r from-white to-ivory px-6 py-3 rounded-full text-sm font-bold text-primary border-2 border-primary/30 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-xl cursor-default overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, y: -4 }}
                          >
                            <span className="relative z-10">{area}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatedSection>
                )}

                {partner.testimonial && (
                  <AnimatedSection delay={350}>
                    <motion.div
                      className="relative bg-gradient-to-br from-sage/30 via-sage-light/40 to-sage/20 rounded-3xl p-10 md:p-12 border-2 border-sage overflow-hidden"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className="absolute top-0 right-0 w-40 h-40 bg-sage/20 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                      <div className="relative flex items-start gap-6">
                        <div className="text-6xl md:text-7xl text-primary/30 font-serif leading-none flex-shrink-0">
                          "
                        </div>
                        <div className="flex-1">
                          <p className="text-lg md:text-xl text-charcoal/90 italic mb-6 leading-relaxed font-medium">
                            {partner.testimonial.quote}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-1 h-12 bg-primary rounded-full"></div>
                            <p className="text-sm font-bold text-primary">
                              {partner.testimonial.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                )}
              </div>
            </motion.div>
          </AnimatedSection>

          {allPartners.length > 0 && (
            <AnimatedSection delay={400}>
              <div className="mt-24">
                <SectionHeading
                  backgroundText="PARTNERS"
                  title="Explore Other Strategic Partners"
                  ctaText="View All Partners"
                  onCtaClick={() => navigate("/partners")}
                />
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {allPartners.slice(0, 3).map((p) => {
                    const urlId = p.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "");
                    return (
                      <motion.button
                        key={p.title}
                        onClick={() => navigate(`/partners/${urlId}`)}
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/20"
                        variants={fadeInUp}
                        whileHover={{ y: -12, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View ${p.title} partnership details`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 z-10 pointer-events-none"></div>
                        <div className="relative h-64 bg-gradient-to-br from-primary/5 via-ivory to-accent/5 flex items-center justify-center p-8 overflow-hidden">
                          <motion.div
                            className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                            animate={{
                              x: [0, 30, 0],
                              y: [0, -20, 0],
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                          />
                          <img
                            src={p.img}
                            alt={`${p.title} logo`}
                            className="relative z-10 max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="relative p-6 text-left">
                          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/20 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-3 border border-accent/30">
                            <Sparkles className="w-3 h-3" />
                            {p.category}
                          </span>
                          <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors leading-tight">
                            {p.title}
                          </h3>
                          <p className="text-sm text-charcoal/60 line-clamp-2 leading-relaxed mb-4">
                            {p.description}
                          </p>
                          <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                            <span>Explore Partnership</span>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </div>
            </AnimatedSection>
          )}
        </Container>
      </section>
    </PageWrapper>
  );
};

export default PartnerDetail;
