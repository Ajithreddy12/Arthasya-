import { Link } from "react-router-dom";
import { Container } from "../layout";
import { Twitter, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-white shadow-sm">
                <span className="text-primary font-bold text-sm">BW</span>
              </div>
              <span className="font-bold text-gray-900 text-xl tracking-tight">Binge Watch Digital</span>
            </Link>
          </div>

          {/* Column 2: Links 1 */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-primary text-sm font-semibold uppercase tracking-wide transition-colors">HOME</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary text-sm font-semibold uppercase tracking-wide transition-colors">OUR CREATIVE STUDIO</Link>
            <Link to="/services" className="text-gray-600 hover:text-primary text-sm font-semibold uppercase tracking-wide transition-colors">SERVICES</Link>
            <Link to="/work" className="text-gray-600 hover:text-primary text-sm font-semibold uppercase tracking-wide transition-colors">FEATURED WORK</Link>
          </div>

          {/* Column 3: Links 2 */}
          <div className="flex flex-col space-y-4">
            <Link to="/about" className="text-gray-600 hover:text-primary text-sm font-semibold uppercase tracking-wide transition-colors">ABOUT US</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary text-sm font-semibold uppercase tracking-wide transition-colors">TALK TO US</Link>

            <Link to="/privacy" className="text-gray-600 hover:text-primary text-sm font-semibold uppercase tracking-wide transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary text-sm font-semibold uppercase tracking-wide transition-colors">TERMS & CONDITIONS</Link>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-wide mb-4">STAY CONNECTED</h4>
            <p className="text-gray-600 text-sm mb-6">Get the latest design trends, tips & updates.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 border border-gray-200 rounded px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="bg-primary text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-primary-dark transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">We respect your privacy — no spam, ever.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10" />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[Facebook, Instagram, Twitter, MessageCircle].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">© Copyright All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
