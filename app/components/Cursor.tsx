"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.closest('[data-hover]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const variants = {
    dot: {
      default: {
        x: mousePosition.x - 2.5,
        y: mousePosition.y - 2.5,
        scale: 1
      },
      hover: {
        scale: 0
      }
    },
    outline: {
      default: {
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
        scale: 1
      },
      hover: {
        scale: 1.5
      }
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={isHovering ? "hover" : "default"}
        variants={variants.dot}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      <motion.div
        className="cursor-outline"
        animate={isHovering ? "hover" : "default"}
        variants={variants.outline}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
    </>
  );
} 