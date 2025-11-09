"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

// Array of items to cycle through
const items = ["Developer", "Artist", "Video Editor"];

export function AnimatedSelfCarousel() {
  // State to track which item is currently being displayed (index in the items array)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval that runs every 3.5 seconds (1.2s entry + 2s wait + 0.3s exit)
    const interval = setInterval(() => {
      // Move to the next item, or wrap back to 0 if we've reached the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 200); // Total cycle time: 2 seconds per item

    // Cleanup function: clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="w-full h-12 flex items-center justify-center overflow-hidden">
      {/* AnimatePresence allows exit animations when elements are removed from the tree */}
      {/* mode="wait" ensures the exit animation completes before the next item enters */}
      <AnimatePresence mode="wait">
        {/* Render only the current item based on currentIndex */}
        <motion.div
          // Unique key for React and AnimatePresence to track element identity
          key={items[currentIndex]}
          // Initial state: item starts 30px below and fully transparent
          initial={{ y: 30, opacity: 0 }}
          // Animate state: rubberband effect - overshoots up, bounces back, then settles
          // keyframes create the oscillating motion: up → down a bit → settle
          animate={{ 
            y: [30, -5, 2, 0], // Starts at 30, overshoots to -5, bounces to 2, settles at 0
            opacity: [0, 1, 1, 1] // Fades in quickly at the start
          }}
          // Exit state: pull back like an arrow (move down), then shoot up and fade out
          exit={{ 
            y: [0, 13, -50], // Pull back to 5px, then shoot up to -50px
            opacity: [1, 1, 0] // Stay visible during pullback, fade out during launch
          }}
          // Entry animation takes 1.2s with custom easing for smooth rubberband effect
          // Item stays visible for 2s (handled by the interval timing)
          // Exit animation takes 0.3s for quick, snappy arrow launch
          transition={{ 
            duration: 1, // Entry animation duration
            delay: 0.2 // Wait 2 seconds after entry animation completes before exiting
            ,
            ease: "easeOut" // Smooth easing for natural motion
          }}
        >
          {/* Display the current item text */}
          <span className="text-2xl font-semibold">{items[currentIndex]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}