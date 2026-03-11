import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  words: string[];
}

export const TypingEffect: React.FC<Props> = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <div className="h-10 md:h-12 overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl text-foreground font-bold opacity-90"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
