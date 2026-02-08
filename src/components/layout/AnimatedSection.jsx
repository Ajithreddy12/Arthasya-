import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks';
import { fadeInUp } from '../../utils/animations';

const AnimatedSection = ({ children, className = '', animation = fadeInUp }) => {
  const { ref, controls } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;