'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { interests, Interest } from '../../data/interests';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InterestWheelProps {
  currentInterest: Interest;
  onInterestChange: (interestId: number) => void;
}

export function InterestWheel({ currentInterest, onInterestChange }: InterestWheelProps) {
  const currentIndex = currentInterest.id;
  const wheelRotation = currentIndex * -72; // 360 / 5 interests = 72 degrees per segment

  const handleNext = () => {
    const nextId = (currentIndex + 1) % interests.length;
    onInterestChange(nextId);
  };

  const handlePrev = () => {
    const prevId = (currentIndex - 1 + interests.length) % interests.length;
    onInterestChange(prevId);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      {/* Main Wheel Container */}
      <motion.div
        className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer Ring with Interest Options */}
        <motion.div
          className="absolute inset-0 rounded-full border-8 border-gray-200 dark:border-gray-700"
          animate={{ rotate: wheelRotation }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          {interests.map((interest: Interest, index: number) => {
            const angle = (index * 360) / interests.length;
            const Icon = interest.icon;

            return (
              <motion.button
                key={interest.id}
                className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${interest.bgGradient} shadow-lg flex items-center justify-center text-white cursor-pointer hover:shadow-xl transition-shadow`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px) rotate(${-angle}deg)`,
                }}
                onClick={() => onInterestChange(interest.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} className="md:w-8 md:h-8" />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Center Circle with Current Interest */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentInterest.bgGradient} shadow-2xl flex items-center justify-center`}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-center">
            <motion.div
              key={currentInterest.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              {<currentInterest.icon size={48} className="text-white md:w-16 md:h-16" />}
              <p className="text-white font-bold text-sm md:text-base">{currentInterest.name}</p>
              <p className="text-white text-xs md:text-sm opacity-90">{currentInterest.emoji}</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="flex gap-6 items-center">
        <motion.button
          onClick={handlePrev}
          className="p-2 md:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous interest"
        >
          <ChevronLeft size={24} />
        </motion.button>

        {/* Interest Dots */}
        <div className="flex gap-2">
          {interests.map((interest: Interest) => (
            <motion.button
              key={interest.id}
              onClick={() => onInterestChange(interest.id)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                interest.id === currentIndex
                  ? `bg-gradient-to-r ${interest.bgGradient} w-8 md:w-10`
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to ${interest.name}`}
            />
          ))}
        </div>

        <motion.button
          onClick={handleNext}
          className="p-2 md:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next interest"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Current Interest Description */}
      <motion.div
        key={currentInterest.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center max-w-md"
      >
        <p className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
          {currentInterest.description}
        </p>
      </motion.div>
    </div>
  );
}
