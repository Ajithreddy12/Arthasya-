import { CONTACT_INFO } from "../../../data";
import { Container, AnimatedSection } from "../../layout";
import { SectionHeading } from "../../element";

const ContactInfo = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="REACH US"
            title="Let's start a conversation"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-stretch">
          <AnimatedSection>
            <div className="h-full overflow-hidden rounded-lg bg-gray-200 min-h-0">
              <iframe
                src={CONTACT_INFO.mapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                allowFullScreen
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="h-full flex flex-col justify-start">
              <h2 className="mb-6 text-3xl font-bold text-charcoal">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <span className="text-xl text-white">📧</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-1 font-semibold text-charcoal">Email</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-primary hover:underline break-all max-w-full"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                    <span className="text-xl text-white">📞</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-charcoal">Phone</h3>
                    <div className="flex flex-col gap-1">
                      {CONTACT_INFO.phone.map((number) => (
                        <a
                          key={number}
                          href={`tel:${number}`}
                          className="text-primary hover:underline"
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sage">
                    <span className="text-xl text-white">📍</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-charcoal">
                      Address
                    </h3>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <span className="text-xl text-white">🕒</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-charcoal">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;
