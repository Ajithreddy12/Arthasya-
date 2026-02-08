import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, CONTACT_INFO, navigationItems } from "../../data";
import { servicesData } from "../../data";
import { Container } from "../layout";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const ICON_MAP = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-charcoal pt-16 pb-8 text-white">
      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="
          absolute -top-6 left-1/2 z-10
          flex h-12 w-12 -translate-x-1/2 items-center justify-center
          rounded-full bg-accent text-white shadow-lg
          transition-colors duration-300
          hover:bg-accent-dark
          focus:outline-none focus:ring-2 focus:ring-white
        "
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      <Container>
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/arthasya.png"
                alt="Arthasya Logo"
                className="h-30 w-30 object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Strategic communications and branding partner helping businesses
              connect, collaborate, and convert.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="
                      inline-block text-sm text-gray-300
                      transition-all duration-300
                      hover:text-accent hover:translate-x-1
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-accent">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {servicesData.map((service) => (
                <li
                  key={service.title}
                  className="cursor-pointer transition-colors duration-300 hover:text-accent"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-accent">
              Contact Us
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 min-w-0">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 transition-colors hover:text-accent break-all max-w-full"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.phone.map((number) => (
                    <a
                      key={number}
                      href={`tel:${number}`}
                      className="text-gray-300 transition-colors hover:text-accent"
                    >
                      {number}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">{CONTACT_INFO.address}</span>
              </li>
            </ul>

            <div className="mt-4 flex gap-3">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                const Icon = ICON_MAP[platform];
                return (
                  <a
                    key={platform}
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full bg-primary
                      transition-all duration-300
                      hover:scale-110 hover:bg-accent
                    "
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-6 text-sm sm:flex-row">
          <p className="text-gray-400">
            © 2025 Arthasya Communications Private Limited. All rights reserved.
          </p>
          <p className="text-gray-400">
            Built with <span className="text-accent">❤</span> by Preet Taparia
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
