import { Container, AnimatedSection } from "../../layout";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 sm:pt-10 pb-20 bg-[#0d0208] overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920"
          alt="About Background"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block sm:mt-10 lg:mt-0 px-4 py-2 bg-[#ec4899]/10 rounded-full mb-6 border border-[#ec4899]/20">
                <span className="text-sm font-semibold text-[#ec4899]">
                  Who We Are
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                About <span className="text-[#ec4899]">BW Digital</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#ec4899] to-[#a855f7] mb-8" />
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                At BW Digital, we combine creativity with technology to deliver
                exceptional digital solutions. Our mission is to help businesses
                thrive in the digital landscape through innovative design,
                strategic marketing, and cutting-edge development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From bold branding to seamless web solutions, we craft powerful,
                purpose-driven designs that connect, convert, and elevate your
                brand across every screen.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#ec4899]/10 rounded-2xl transform rotate-3" />
              <div className="relative bg-white/5 p-4 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team brainstorming"
                  className="rounded-xl w-full opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#ec4899] to-[#be185d] text-white p-6 rounded-xl shadow-xl border border-white/10">
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
