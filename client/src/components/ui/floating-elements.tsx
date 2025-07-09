import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export function FloatingElements({ count = 6, className = '' }: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      {elements.map((i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-r from-neon-pink/30 to-neon-cyan/30 rounded-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
}

interface FloatingIconProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingIcon({ icon, className = '', delay = 0 }: FloatingIconProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0, rotate: 0, opacity: 0.7 }}
      animate={{ 
        y: [-10, 10, -10], 
        rotate: [0, 5, -5, 0],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {icon}
    </motion.div>
  );
}

export function NeonGlow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 blur-lg rounded-lg" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
