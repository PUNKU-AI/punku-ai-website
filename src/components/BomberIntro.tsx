"use client";

import React, { useEffect, useState } from 'react';

interface BomberIntroProps {
  onAnimationEnd: () => void;
}

export default function BomberIntro({ onAnimationEnd }: BomberIntroProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    const endTimer = setTimeout(() => {
      onAnimationEnd();
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse-subtle">
          <span className="text-white">PUNKU</span>
          <span className="text-primary-200">.AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 animate-fade-in-up">
          Build AI Agents Visually
        </p>
      </div>
    </div>
  );
}
