import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../layout";
import Logo from "./Logo";
import { Twitter, Instagram, Facebook, MessageCircle, Check, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="bg-[#140412] pt-20 pb-10 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo */}
          <div className="space-y-6">
            <Link to="/" className="relative z-[110]">
              <Logo />
            </Link>
          </div>

          {/* Column 2: Links 1 */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors">HOME</Link>
            <Link to="/about" className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors">OUR CREATIVE STUDIO</Link>
            <Link to="/services" className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors">SERVICES</Link>

          </div>

          {/* Column 3: Links 2 */}
          <div className="flex flex-col space-y-4">
            <Link to="/about" className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors">ABOUT US</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors">TALK TO US</Link>

            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors">TERMS & CONDITIONS</Link>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wide mb-4">STAY CONNECTED</h4>
            <p className="text-gray-400 text-sm mb-6">Get the latest design trends, tips & updates.</p>

            {isSubscribed ? (
              <div className="flex items-center gap-3 text-white bg-white/5 border border-white/10 rounded-full px-5 py-3 animate-in fade-in zoom-in duration-500">
                <div className="w-8 h-8 rounded-full bg-[#ec4899] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/5 text-white border border-white/10 rounded-full px-5 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#ec4899]/50 transition-all outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#ec4899] to-[#be185d] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden flex items-center justify-center gap-2 min-w-[120px]"
                >
                  <span className={`flex items-center gap-2 ${isSubmitting ? "opacity-0" : "opacity-100"}`}>
                    Subscribe
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              </form>
            )}
            <p className="text-gray-500 text-xs mt-3">We respect your privacy — no spam, ever.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-10" />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[Facebook, Instagram, Twitter, MessageCircle].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#ec4899] hover:text-white hover:border-[#ec4899] transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">© Copyright {new Date().getFullYear()} Binge Watch Digital. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
