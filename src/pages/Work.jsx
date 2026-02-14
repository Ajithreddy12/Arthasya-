import { motion } from "framer-motion";
import { PageWrapper, Container } from "../components/layout";
import { SectionHeading, SEO } from "../components/element";
import clients from "../data/clients";

const Work = () => {
    return (
        <PageWrapper>
            <SEO
                title="Featured Work | Binge Watch Digital"
                description="Explore our portfolio of successful projects and client collaborations. We deliver impactful digital experiences and creative solutions."
            />
            <section className="py-24 bg-[#140412]">
                <Container>
                    <SectionHeading
                        title="Featured Work"
                        subtitle="Our Projects"
                        description="A showcase of our most impactful collaborations and creative solutions."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#ec4899]/50 transition-all duration-300"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={client.img}
                                        alt={client.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ec4899] transition-colors">
                                        {client.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                        {client.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {client.services?.slice(0, 3).map((service, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[10px] uppercase tracking-wider font-bold text-[#ec4899] px-2 py-1 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </PageWrapper>
    );
};

export default Work;
