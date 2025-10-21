"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
                Solutions
              </button>
            </div>
            <Link href="/pricing" className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
                Resources
              </button>
            </div>
            <a href="https://app.punku.ai" className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all">
              Get Started
            </a>
          </div>

          <button
            className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a href="#solutions" className="block py-3 px-6 text-primary-900 hover:bg-primary-50">Solutions</a>
          <Link href="/pricing" className="block py-3 px-6 text-primary-900 hover:bg-primary-50">Pricing</Link>
          <div className="p-4 space-y-2">
            <a href="https://app.punku.ai" className="block text-center py-2 text-primary-900">Log in</a>
            <a href="https://app.punku.ai" className="block text-center py-2 text-white bg-primary-600 rounded-lg hover:bg-primary-700">Try for free</a>
          </div>
        </div>
      )}
    </nav>
  );
}
