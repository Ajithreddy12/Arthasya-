import { Container, AnimatedSection } from "../../layout";
import { motion } from "framer-motion";
import { Layers, Megaphone, TrendingUp, Star } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 sm:pt-20 pb-20 bg-ivory overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#2F6F73 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Our <span className="text-primary">Services</span>
              </h1>

              <div className="w-20 h-1 bg-accent mb-8" />

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We offer a complete range of creative and digital services to
                help your brand grow and stand out in the digital space. From
                SEO and content marketing to web design, development, and social
                media management.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Layers, label: "Strategy" },
                  { icon: Megaphone, label: "Branding" },
                  { icon: TrendingUp, label: "Growth" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg border border-gray-100"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-charcoal text-sm">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl" />
              <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full" />

              <div className="relative w-full flex justify-center lg:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Strategic planning session"
                  className="rounded-2xl shadow-2xl relative z-10 w-full max-w-md lg:max-w-xl object-cover aspect-[4/3]"
                />

                <div className="absolute -bottom-8 -right-4 sm:right-10 lg:-left-12 z-20 bg-white p-5 rounded-xl shadow-xl border-l-4 border-primary max-w-[220px]">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-charcoal">
                    "Exceptional delivery and strategic insight."
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;
