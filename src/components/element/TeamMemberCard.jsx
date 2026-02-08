const TeamMemberCard = ({ member }) => {
  return (
    <div className="relative group flex-shrink-0">
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden bg-gray-200 relative">
        <img
          src={member.image}
          alt={member.fullName}
          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
            {member.fullName}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;