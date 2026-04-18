"use client";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ children, className }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
