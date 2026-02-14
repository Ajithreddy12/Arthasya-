import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  as = "button",
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary: "bg-accent text-white hover:bg-accent-dark focus:ring-accent",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const MotionComponent = as === "a" ? motion.a : motion.button;

  return (
    <MotionComponent
      type={as === "button" ? type : undefined}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
