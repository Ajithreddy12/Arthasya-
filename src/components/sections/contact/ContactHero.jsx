import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, AnimatedSection } from '../../layout';

const ContactHero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-white">
            <Container className="relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Connect With Us</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight"
                    >
                        Let's Create Your <span className="text-primary italic">Success Story.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
                    >
                        Whether you have a specific project in mind or just want to explore the possibilities,
                        we're here to help you navigate the digital landscape.
                    </motion.p>
                </div>
            </Container>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default ContactHero;
