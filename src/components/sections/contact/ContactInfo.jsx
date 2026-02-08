import { CONTACT_INFO } from "../../../data";
import { Container, AnimatedSection } from "../../layout";
import { SectionHeading } from "../../element";

const ContactInfo = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
                    <AnimatedSection>
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    Get In Touch
                                </h2>
                                <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We are always open to discussing new projects, creative ideas or
                                    opportunities to be part of your visions. Reach out to us through
                                    any of these channels.
                                </p>
                            </div>

                            <div className="space-y-10">
                                {/* Email */}
                                <div className="flex items-start space-x-6">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-2xl shadow-sm">
                                        📧
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</h3>
                                        <a
                                            href={`mailto:${CONTACT_INFO.email}`}
                                            className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors block"
                                        >
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-6">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-2xl shadow-sm">
                                        📞
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</h3>
                                        {CONTACT_INFO.phone.map((number) => (
                                            <a
                                                key={number}
                                                href={`tel:${number}`}
                                                className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors block"
                                            >
                                                {number}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-6">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-2xl shadow-sm">
                                        📍
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</h3>
                                        <p className="text-xl font-semibold text-gray-900 leading-snug">
                                            {CONTACT_INFO.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <iframe
                                src={CONTACT_INFO.mapEmbedUrl}
                                className="h-full w-full border-0 grayscale hover:grayscale-0 transition-all duration-700 contrast-110"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                                allowFullScreen
                            />
                            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-3xl" />
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default ContactInfo;
