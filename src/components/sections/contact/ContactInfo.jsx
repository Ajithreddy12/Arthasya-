import { CONTACT_INFO } from "../../../data";
import { Container, AnimatedSection } from "../../layout";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
                    <AnimatedSection>
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    Get In Touch
                                </h2>
                                <div className="w-16 h-1.5 bg-[#ec4899] rounded-full mb-8" />
                                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                    We are always open to discussing new projects, creative ideas or
                                    opportunities to be part of your visions. Reach out to us through
                                    any of these channels.
                                </p>
                            </div>

                            <div className="space-y-10">
                                {/* Email */}
                                <div className="flex items-center space-x-6 group">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-indigo-500 shadow-sm transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Email Us</h3>
                                        <a
                                            href={`mailto:${CONTACT_INFO.email}`}
                                            className="text-lg md:text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors block break-all"
                                        >
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center space-x-6 group">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-pink-500 shadow-sm transition-all duration-300 group-hover:bg-[#ec4899] group-hover:text-white group-hover:scale-110">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Call Us</h3>
                                        {CONTACT_INFO.phone.map((number) => (
                                            <a
                                                key={number}
                                                href={`tel:${number}`}
                                                className="text-lg md:text-xl font-bold text-gray-900 hover:text-[#ec4899] transition-colors block"
                                            >
                                                {number}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-center space-x-6 group">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-rose-500 shadow-sm transition-all duration-300 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Visit Us</h3>
                                        <p className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
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
                                className="h-full w-full border-0 transition-all duration-700 contrast-110"
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
