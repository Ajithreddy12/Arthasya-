import { Container, AnimatedSection } from "../../layout";
import { motion } from "framer-motion";
import { Palette, PenTool, Megaphone } from "lucide-react";

const FreelancerHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 sm:pt-20 pb-20 bg-[#0d0208] overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920"
          alt="Freelance Background"
          className="w-full h-full object-cover"
        />
        {/* Lighter overlay to reveal photos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e0b28]/80 via-[#581c4e]/50 to-[#140412]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140412]/30 via-transparent to-[#140412]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block sm:mt-10 lg:mt-0 px-4 py-2 bg-[#ec4899]/10 rounded-full mb-6 border border-[#ec4899]/20">
                <span className="text-sm font-semibold text-[#ec4899]">
                  Join Our Network
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Freelance with <span className="text-[#ec4899]">Purpose</span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-r from-[#ec4899] to-[#a855f7] mb-8" />

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Are you a talented professional looking for exciting projects?
                Join our ecosystem of creatives and collaborate on challenging,
                rewarding assignments without the hassle of client management.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-md backdrop-blur-sm">
                  <Palette className="w-4 h-4 text-[#ec4899]" />
                  <span className="text-sm font-medium text-white">
                    Designers
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-md backdrop-blur-sm">
                  <PenTool className="w-4 h-4 text-[#ec4899]" />
                  <span className="text-sm font-medium text-white">
                    Writers
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-md backdrop-blur-sm">
                  <Megaphone className="w-4 h-4 text-[#ec4899]" />
                  <span className="text-sm font-medium text-white">
                    Marketers
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-4 right-4 lg:right-0 w-full lg:w-full max-w-md lg:max-w-xl h-full border-2 border-primary/20 rounded-2xl" />
              <div className="absolute -top-4 -right-4 lg:-right-8 w-full lg:w-full max-w-md lg:max-w-xl h-full border-2 border-accent/20 rounded-2xl" />

              <div className="relative w-full flex justify-center lg:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Freelancer working remotely"
                  className="rounded-2xl shadow-xl relative z-10 w-full max-w-md lg:max-w-xl object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default FreelancerHero;