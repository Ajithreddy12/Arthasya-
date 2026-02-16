import { SectionHeading } from "../../element";
import InfiniteScrollRow from "./InfiniteScrollRow";
import { teamMembers } from "../../../data";

const TeamInfiniteScrollSection = () => {
  const createColumns = (members) => {
    const columns = [];
    for (let i = 0; i < members.length; i += 2) {
      columns.push({
        top: members[i],
        bottom: members[i + 1] || members[0],
      });
    }
    return columns;
  };

  const columns = createColumns(teamMembers);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          backgroundText="TEAM"
          title="The Creative Powerhouse Behind Our Success"
          ctaText="Join Our Team"
          onCtaClick={() => console.log("Navigate to careers")}
        />
      </div>

      <InfiniteScrollRow items={columns} speed="normal" />

      <style>{`
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .animate-scroll {
          animation: scrollRight var(--animation-duration, 50s) linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TeamInfiniteScrollSection;
