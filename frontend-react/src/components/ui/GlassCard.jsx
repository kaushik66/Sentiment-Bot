import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Utility to merge classnames cleanly */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function GlassCard({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        // Dimensions & Layout
        "relative rounded-xl overflow-hidden",
        // The "Glass Card" Recipe 
        "bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]",
        // Interaction
        hover && "transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
