import { Container, AnimatedSection } from "../../layout";
import { motion } from "framer-motion";
import { Layers, Megaphone, TrendingUp, Star } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 sm:pt-20 pb-20 bg-[#0d0208] overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Very light overlay to barely tint the photos, maximizing visibility like HomeHero */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e0b28]/80 via-[#581c4e]/50 to-[#140412]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140412]/30 via-transparent to-[#140412]" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ec4899]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a855f7]/10 rounded-full blur-[100px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Our <span className="text-[#ec4899]">Services</span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-r from-[#ec4899] to-[#a855f7] mb-8" />

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
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
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 shadow-lg shadow-pink-500/5 rounded-lg border border-white/10 backdrop-blur-sm"
                  >
                    <item.icon className="w-5 h-5 text-[#ec4899]" />
                    <span className="font-semibold text-white text-sm">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ec4899]/5 rounded-full blur-3xl" />
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#a855f7]/10 rounded-full" />

              <div className="relative w-full flex justify-center lg:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Strategic planning session"
                  className="rounded-2xl shadow-2xl shadow-pink-500/10 relative z-10 w-full max-w-md lg:max-w-xl object-cover aspect-[4/3] border border-white/10"
                />

                <div className="absolute -bottom-8 -right-4 sm:right-10 lg:-left-12 z-20 bg-[#1a0a14] p-5 rounded-xl shadow-xl border border-white/10 border-l-4 border-l-[#ec4899] max-w-[220px]">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-[#ec4899] fill-[#ec4899]"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-white">
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
