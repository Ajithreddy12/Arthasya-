import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useMobileMenu } from "../../hooks";
import { navigationItems } from "../../data";
import { Container } from "../layout";

const Navbar = () => {
  const { pathname } = useLocation();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <LayoutGroup id="navbar-animation">
      <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <img
                src="/arthasya.png"
                alt="Arthasya Logo"
                className="h-20 w-20 object-contain"
              />
              <h1 className="font-bold text-charcoal leading-none text-lg sm:text-xl md:text-2xl">
                Arthasya <span className="text-primary">Communications</span>
              </h1>
            </Link>

            <motion.div
              layoutRoot
              className="hidden items-center gap-1 lg:flex"
            >
              {navigationItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      relative rounded-lg px-4 py-2 text-sm md:text-base font-semibold transition-all duration-300
                      ${
                        isActive
                          ? "text-primary"
                          : "text-charcoal hover:text-primary"
                      }
                    `}
                  >
                    {item.label}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </motion.div>

            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="
                rounded-md p-2 lg:hidden
                hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-primary
              "
            >
              <div className="flex h-5 w-6 flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full rounded-full bg-charcoal"
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-0.5 w-full rounded-full bg-charcoal"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block h-0.5 w-full rounded-full bg-charcoal"
                  animate={
                    isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                />
              </div>
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/50 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              <motion.div
                className="
                  fixed right-0 top-20 bottom-0 z-50 w-64
                  overflow-y-auto bg-white shadow-lg md:hidden
                "
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="flex flex-col gap-2 p-6">
                  {navigationItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMenu}
                        className={`
                          rounded-lg px-4 py-3 text-base font-semibold sm:text-lg transition-all duration-300
                          ${
                            isActive
                              ? "bg-primary text-white"
                              : "text-charcoal hover:bg-ivory"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </LayoutGroup>
  );
};

export default Navbar;
