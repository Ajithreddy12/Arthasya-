import { PageWrapper } from "../components/layout";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
} from "../components/sections/contact";
import SEO from "../components/element/SEO";

const Contact = () => {
  return (
    <PageWrapper>
      <SEO
        title="Contact Us - Binge Watch Digital | Get In Touch"
        description="Ready to build something amazing? Get in touch with Binge Watch Digital for your web design, branding, and digital marketing needs. Let's start a conversation."
        keywords="contact binge watch digital, get in touch, digital agency contact, business inquiries, web design consultation"
        url="/contact"
      />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </PageWrapper>
  );
};

export default Contact;
