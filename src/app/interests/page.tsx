'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { interests } from '@/modules/interests/data/interests';
import { InterestWheel } from '@/modules/interests/ui/components/wheel';
import { InterestSections } from '@/modules/interests/ui/components/sections';

export default function InterestsPage() {
  const [currentInterestId, setCurrentInterestId] = useState(0);
  const currentInterest = interests[currentInterestId];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Wheel */}
      <section className="w-full min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-6xl px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              What Drives Me
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
              My passions and interests shape everything I do
            </p>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
              Spin the wheel to explore — or use arrow keys to navigate
            </p>
          </div>

          {/* Wheel Component */}
          <InterestWheel
            currentInterest={currentInterest}
            onInterestChange={setCurrentInterestId}
          />
        </div>
      </section>

      {/* Interest Content Sections */}
      <InterestSections currentInterest={currentInterest} />

      {/* Footer Section */}
      <section className="w-full bg-gray-50 dark:bg-gray-950 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you share one of these interests or have a unique project in mind, I&apos;d love to hear from you. 
            Let&apos;s collaborate and build something incredible together.
          </p>
          <Link
            href="/#Contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
