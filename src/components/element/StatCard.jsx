import { motion } from 'framer-motion';

const StatCard = ({ value, label }) => {
  return (
    <motion.div
      className="bg-white border border-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl font-bold text-[#ec4899] mb-2">{value}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

export default StatCard;