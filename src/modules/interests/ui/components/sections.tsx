'use client';

import { motion } from 'framer-motion';
import { Interest } from '../../data/interests';

interface InterestSectionsProps {
  currentInterest: Interest;
}

export function InterestSections({ currentInterest }: InterestSectionsProps) {
  return (
    <motion.section
      key={currentInterest.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`w-full min-h-screen bg-gradient-to-br ${currentInterest.bgGradient} text-white py-16 md:py-24`}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl mb-6"
          >
            {currentInterest.emoji}
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {currentInterest.name}
          </h1>
          <p className="text-lg md:text-2xl opacity-90 mb-8">
            {currentInterest.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {currentInterest.details.map((detail: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-30 flex items-center justify-center mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-base md:text-lg leading-relaxed">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Placeholder / Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[0, 1, 2].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="aspect-square bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {currentInterest.emoji}
                </div>
                <p className="text-sm opacity-70">Image #{index + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Want to collaborate on something related to {currentInterest.name.toLowerCase()}?
          </p>
          <button className="px-8 py-3 bg-white text-current font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:shadow-xl transform hover:scale-105 active:scale-95">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
