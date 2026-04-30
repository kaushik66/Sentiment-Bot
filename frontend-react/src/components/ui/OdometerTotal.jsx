import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AnimatedDigit({ digit }) {
  return (
    <div className="relative inline-flex flex-col overflow-hidden h-[1em] justify-start align-bottom" style={{ width: '0.6em' }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 15 }}
          className="absolute inset-0 flex items-center justify-center leading-none"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function OdometerTotal({ value, prefix = "$", ...props }) {
  // Pad decimals if it's a financial number
  const parts = Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).split('');

  return (
    <div className="flex font-mono items-center" {...props}>
      <span>{prefix}</span>
      {parts.map((char, i) => {
        // Commas and dots don't animate like digits
        if (isNaN(parseInt(char))) {
          return <span key={i} className="mx-px">{char}</span>;
        }
        return <AnimatedDigit key={i} digit={char} />;
      })}
    </div>
  );
}
