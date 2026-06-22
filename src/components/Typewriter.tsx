"use client";

import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function Typewriter({
  text,
  className,
  delay = 0,
  duration = 1.4,
}: TypewriterProps) {
  return (
    <div className={`typewriter-wrap${className ? ` ${className}` : ""}`}>
      <motion.span
        className="typewriter-text"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration, delay, ease: "linear" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="typewriter-cursor"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay }}
      />
    </div>
  );
}
