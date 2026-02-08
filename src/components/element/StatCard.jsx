import { motion } from 'framer-motion';

const StatCard = ({ value, label }) => {
  return (
    <motion.div
      className="bg-ivory p-6 rounded-lg text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

export default StatCard;