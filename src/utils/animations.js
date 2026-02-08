export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const slideInFromLeft = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const slideInFromRight = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const slideInFromBottom = {
  hidden: { y: '100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -90 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const bounceIn = {
  hidden: { opacity: 0, y: -200 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

export const flipInY = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { 
    opacity: 1, 
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const flipInX = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: { 
    opacity: 1, 
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const rollIn = {
  hidden: { opacity: 0, x: -100, rotate: -120 },
  visible: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const slideAndFadeIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const hoverPulse = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { yoyo: Infinity, duration: 0.3 }
  }
};

export const tapShrink = {
  rest: { scale: 1 },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const dragBounce = {
  drag: { 
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 }
  },
  rest: { 
    scale: 1,
    transition: { type: "spring", stiffness: 300 }
  }
};

export const hoverRotate = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 10,
    transition: { yoyo: Infinity, duration: 0.2 }
  }
};

export const tapRotate = {
  rest: { rotate: 0 },
  tap: { 
    rotate: -10,
    transition: { duration: 0.1 }
  }
};

export const dragScale = {
  drag: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 200 }
  },
  rest: { 
    scale: 1,
    transition: { type: "spring", stiffness: 200 }
  }
};

export const hoverShadow = {
  rest: { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
    transition: { yoyo: Infinity, duration: 0.3 }
  }
};

export const tapShadow = {
  rest: { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  tap: { 
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
    transition: { duration: 0.1 }
  }
};

export const dragShadow = {
  drag: { 
    boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
    transition: { type: "spring", stiffness: 300 }
  },
  rest: { 
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    transition: { type: "spring", stiffness: 300 }
  }
};