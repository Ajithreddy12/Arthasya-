import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import useInView from './useInView';

const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView(threshold);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); 
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

export default useScrollAnimation;