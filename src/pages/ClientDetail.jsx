import { useParams, useNavigate } from "react-router-dom";
import { PageWrapper, Container, AnimatedSection } from "../components/layout";
import { clientLogos } from "../data";
import { useEffect } from "react";
import SEO from "../components/element/SEO";

const ClientDetail = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const client = clientLogos.find(
    (c) =>
      c.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") === clientId
  );

  useEffect(() => {
    if (!client) {
      navigate("/404");
    }
  }, [client, navigate]);

  if (!client) return null;

  const allClients = clientLogos.filter((c) => c.title !== client.title);

  return (
    <PageWrapper>
      <SEO
        title={`${client.title} - Client Success Story | Binge Watch Digital`}
        description={client.description || `Learn about our successful partnership with ${client.title}. Discover how Binge Watch Digital delivered exceptional communication and branding solutions driving meaningful impact.`}
        keywords={`${client.title}, client success story, case study, brand partnership, marketing results, ${client.title} collaboration`}
        url={`/clients/${clientId}`}
      />
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => navigate(-1)}
                className="my-4 flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center p-12">
                  <img
                    src={client.img}
                    alt={`${client.title} logo - Arthasya Communications client`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {client.title}
                  </h1>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="text-lg leading-relaxed mb-8">
                      {client.description || `We're proud to collaborate with ${client.title}, delivering exceptional communication and branding solutions that drive meaningful impact.`}
                    </p>

                    {client.stats && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {Object.entries(client.stats).map(([key, value]) => (
                          <div key={key} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold text-primary mb-1">{value}</p>
                            <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-primary mb-3">
                          Services Provided
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          {client.services?.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{service}</span>
                            </li>
                          )) || (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-accent mt-1">•</span>
                                  <span>Brand Strategy & Development</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-accent mt-1">•</span>
                                  <span>Communication & Marketing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-accent mt-1">•</span>
                                  <span>Digital & Social Media</span>
                                </li>
                              </>
                            )}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-primary mb-3">
                          Impact & Results
                        </h3>
                        <p className="text-gray-700">
                          {client.impact || 'Through strategic collaboration and innovative solutions, we\'ve helped achieve remarkable results and establish a strong market presence.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {allClients.length > 0 && (
            <AnimatedSection delay={200}>
              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                  Other Clients
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {allClients.slice(0, 6).map((c) => {
                    const urlId = c.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "");
                    return (
                      <button
                        key={c.title}
                        onClick={() => navigate(`/clients/${urlId}`)}
                        className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        aria-label={`View ${c.title} case study`}
                      >
                        <div className="h-24 flex items-center justify-center mb-3">
                          <img
                            src={c.img}
                            alt={`${c.title} logo`}
                            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <p className="text-xs text-gray-700 text-center line-clamp-2">
                          {c.title}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          )}
        </Container>
      </section>
    </PageWrapper>
  );
};

export default ClientDetail;