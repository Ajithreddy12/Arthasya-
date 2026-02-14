import { PageWrapper, Container } from "../components/layout";
import { SEO } from "../components/element";

const Privacy = () => {
    return (
        <PageWrapper>
            <SEO title="Privacy Policy | Binge Watch Digital" />
            <section className="py-24 bg-[#140412]">
                <Container>
                    <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                        <div className="space-y-6 text-gray-300">
                            <p>Last updated: February 13, 2026</p>

                            <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>
                            <p>We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us.</p>

                            <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Your Information</h2>
                            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new products and services.</p>

                            <h2 className="text-2xl font-bold text-white mt-8">3. Information Sharing</h2>
                            <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>

                            <h2 className="text-2xl font-bold text-white mt-8">4. Security</h2>
                            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>

                            <h2 className="text-2xl font-bold text-white mt-8">5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at hello@bingewatch.digital</p>
                        </div>
                    </div>
                </Container>
            </section>
        </PageWrapper>
    );
};

export default Privacy;
