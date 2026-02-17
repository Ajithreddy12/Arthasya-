import { useNavigate } from "react-router-dom";
import { clientLogos } from "../../../data";
import { Container, AnimatedSection } from "../../layout";
import { SectionHeading } from "../../element";

const ClientCardWrapper = ({ client }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const clientId = client.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    navigate(`/clients/${clientId}`);
  };

  return (
    <div
      className="flex-shrink-0 group w-48 text-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-32 flex items-center justify-center transition-all duration-300 bg-gray-50 rounded-lg p-4 border border-gray-100 group-hover:bg-white group-hover:shadow-md transition-all">
        <img
          src={client.img}
          alt={client.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <p className="mt-2 text-xs font-medium text-gray-600 leading-tight group-hover:text-primary transition-colors">
        {client.title}
      </p>
    </div>
  );
};

const HomeClients = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="CLIENTS"
            title="Trusted by leading brands"
          />

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {clientLogos.map((client) => (
              <ClientCardWrapper key={client.title} client={client} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default HomeClients;
