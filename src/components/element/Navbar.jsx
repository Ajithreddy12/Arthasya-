import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { Container } from "../layout";
import Button from "./Button";
import Logo from "./Logo";
import { navigationItems } from "../../data";

// Extracted hook for mobile menu logic
const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return { isOpen, toggleMenu, closeMenu };
};

const Navbar = () => {
    const { pathname } = useLocation();
    const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

    return (
        <LayoutGroup id="navbar-animation">
            <nav className="fixed inset-x-0 top-0 z-50 bg-[#140412]/90 backdrop-blur-md border-b border-white/5 shadow-lg transition-all duration-300">
                <Container>
                    <div className="flex h-20 items-center justify-between">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="relative z-[110]"
                        >
                            <Logo />
                        </Link>

                        {/* Desktop Navigation */}
                        <motion.div
                            layoutRoot
                            className="hidden items-center gap-8 lg:flex"
                        >
                            <div className="flex items-center gap-1 rounded-full bg-white/5 p-1 border border-white/10">
                                {navigationItems.map((item) => {
                                    const isActive = pathname === item.path;
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 rounded-full bg-[#ec4899]"
                                                    transition={{
                                                        type: "spring",
                                                        bounce: 0.2,
                                                        duration: 0.6,
                                                    }}
                                                />
                                            )}
                                            <span className="relative z-10">{item.label}</span>
                                        </Link>
                                    );
                                })}
                                <div className="pl-1">
                                    <Button
                                        variant="primary"
                                        className="h-9 px-4 bg-gradient-to-r from-[#ec4899] to-[#be185d] hover:from-[#be185d] hover:to-[#9d174d] text-white border-0 shadow-lg shadow-pink-500/20 text-sm flex flex-row items-center gap-2 rounded-full whitespace-nowrap flex-nowrap"
                                        onClick={() => window.location.href = 'tel:9958800754'}
                                    >
                                        <Phone className="h-4 w-4 shrink-0" />
                                        <span className="leading-none">Let's Talk</span>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-5 w-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-5 w-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </Container>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-md lg:hidden"
                            onClick={closeMenu}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed inset-y-0 right-0 z-[9999] w-full max-w-sm bg-[#140412] shadow-2xl lg:hidden border-l border-white/10 overflow-y-auto"
                        >
                            <div className="flex min-h-full flex-col p-6">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                    <button
                                        onClick={closeMenu}
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                            <ChevronRight className="h-5 w-5 rotate-180" />
                                        </div>
                                        <span className="font-medium">Back</span>
                                    </button>

                                    <button
                                        onClick={closeMenu}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ec4899]/10 text-[#ec4899] hover:bg-[#ec4899]/20 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                <nav className="flex flex-col space-y-2">
                                    {navigationItems.map((item, index) => {
                                        const isActive = pathname === item.path;
                                        return (
                                            <motion.div
                                                key={item.path}
                                                initial={{ x: 50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    to={item.path}
                                                    onClick={closeMenu}
                                                    className={`group flex items-center justify-between rounded-xl p-4 text-lg font-medium transition-all ${isActive
                                                        ? "bg-[#ec4899]/10 text-[#ec4899]"
                                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                                        }`}
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronRight
                                                        className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isActive ? "text-[#ec4899]" : "text-gray-600"
                                                            }`}
                                                    />
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </nav>

                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-auto"
                                >
                                    <div className="rounded-2xl bg-gradient-to-br from-[#ec4899]/20 to-[#a855f7]/20 p-6 border border-white/10">
                                        <h3 className="mb-2 text-lg font-bold text-white">
                                            Let's create something specific?
                                        </h3>
                                        <p className="mb-4 text-sm text-gray-400">
                                            We're ready to help bring your vision to life.
                                        </p>
                                        <Button
                                            className="w-full flex flex-row items-center justify-center gap-2 bg-[#ec4899] hover:bg-[#be185d] text-white border-0 h-12"
                                            onClick={() => window.location.href = 'tel:9958800754'}
                                        >
                                            <Phone className="h-5 w-5 shrink-0" />
                                            <span className="leading-none">Let's Talk</span>
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </LayoutGroup>
    );
};

export default Navbar;
