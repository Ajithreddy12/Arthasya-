const TeamMemberCard = ({ member }) => {
  return (
    <div className="relative group flex-shrink-0">
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden bg-gray-200 relative">
        <img
          src={member.image}
          alt={member.fullName}
          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
        {/* Details removed as per request */}
      </div>
    </div>
  );
};

export default TeamMemberCard;