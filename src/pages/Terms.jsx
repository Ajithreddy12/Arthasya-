import { PageWrapper, Container } from "../components/layout";
import { SEO } from "../components/element";

const Terms = () => {
    return (
        <PageWrapper>
            <SEO title="Terms & Conditions | Binge Watch Digital" />
            <section className="py-24 bg-[#140412]">
                <Container>
                    <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                        <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
                        <div className="space-y-6 text-gray-300">
                            <p>Last updated: February 13, 2026</p>

                            <p>By accessing Binge Watch Digital, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

                            <h2 className="text-2xl font-bold text-white mt-8">1. Use License</h2>
                            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Binge Watch Digital's website for personal, non-commercial transitory viewing only.</p>

                            <h2 className="text-2xl font-bold text-white mt-8">2. Disclaimer</h2>
                            <p>The materials on Binge Watch Digital's website are provided on an 'as is' basis. Binge Watch Digital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                            <h2 className="text-2xl font-bold text-white mt-8">3. Limitations</h2>
                            <p>In no event shall Binge Watch Digital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Binge Watch Digital's website.</p>

                            <h2 className="text-2xl font-bold text-white mt-8">4. Revisions and Errata</h2>
                            <p>The materials appearing on Binge Watch Digital's website could include technical, typographical, or photographic errors. Binge Watch Digital does not warrant that any of the materials on its website are accurate, complete or current.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </PageWrapper>
    );
};

export default Terms;
