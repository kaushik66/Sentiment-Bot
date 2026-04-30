import React, { useState, useEffect } from 'react';

const CHARACTERS = "#@%&X09OYZ1*!";

export function CryptoScramble({ text, duration = 400, className, ...props }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    // If text changes, trigger the scramble
    let iterations = 0;
    const updateInterval = 30; // ms per tick
    const maxIterations = duration / updateInterval;
    
    // Store original string to map correctly
    const originalString = String(text);
    
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        originalString
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            // Scramble characters based on mapping proportion
            if (index < (iterations / maxIterations) * originalString.length) {
              return originalString[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(originalString);
      }
      
      iterations += 1;
    }, updateInterval);

    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <span className={className} {...props}>
      {displayText}
    </span>
  );
}
