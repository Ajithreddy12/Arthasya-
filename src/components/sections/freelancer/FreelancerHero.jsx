import { Container, AnimatedSection } from "../../layout";
import { motion } from "framer-motion";
import { Palette, PenTool, Megaphone } from "lucide-react"; 

const FreelancerHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 sm:pt-20 pb-20 bg-ivory overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2B2B2B 1px, transparent 1px), linear-gradient(to right, #2B2B2B 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block sm:mt-10 lg:mt-0 px-4 py-2 bg-charcoal/5 rounded-full mb-6">
                <span className="text-sm font-semibold text-charcoal">
                  Join Our Network
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Freelance with <span className="text-primary">Purpose</span>
              </h1>

              <div className="w-20 h-1 bg-accent mb-8" />

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Are you a talented professional looking for exciting projects?
                Join our ecosystem of creatives and collaborate on challenging,
                rewarding assignments without the hassle of client management.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md">
                  <Palette className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-gray-700">
                    Designers
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md">
                  <PenTool className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-gray-700">
                    Writers
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md">
                  <Megaphone className="w-4 h-4 text-rose-500" />
                  <span className="text-sm font-medium text-gray-700">
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