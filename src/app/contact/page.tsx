"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agentDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you! One of our co-founders will reach out shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/tour-workers" className="text-dark-400 hover:text-primary-700 font-medium">AI Workers</Link>
              <Link href="/meta-agent" className="text-dark-400 hover:text-primary-700 font-medium">Meta-Agent</Link>
              <Link href="/#pricing" className="text-dark-400 hover:text-primary-700 font-medium">Pricing</Link>
              <Link href="/use-cases" className="text-dark-400 hover:text-primary-700 font-medium">Use Cases</Link>
              <Link href="/#trial" className="btn-primary">Try Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-32 pb-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold text-sm">✨ Talk to a Co-Founder</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black !text-white mb-6 leading-tight">
            See PUNKU.AI in Action
          </h1>
          <p className="text-xl md:text-2xl !text-white mb-8 leading-relaxed">
            Fill in your details and one of the co-founders will reach out shortly to arrange a personalized demo.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-dark-25 -mt-12 relative z-20">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: What to Expect - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">Here's what to expect:</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">No-commitment product walkthrough</h3>
                      <p className="text-dark-600 leading-relaxed">See how PUNKU.AI works with real examples from tour operators like you</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">Built for your priorities</h3>
                      <p className="text-dark-600 leading-relaxed">We'll focus on the automations that will have the biggest impact on your business</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">Your questions, answered</h3>
                      <p className="text-dark-600 leading-relaxed">Get expert advice on automating your tour operations from founders who built the platform</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-dark-100">
                <div className="mb-8 pb-6 border-b-2 border-dark-100">
                  <h2 className="text-3xl font-bold text-primary-900 mb-2">Request Your Demo</h2>
                  <p className="text-dark-600">Let's build something amazing together</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-primary-900 mb-3">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      className="w-full px-5 py-4 border-2 border-dark-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none text-dark-900 placeholder-dark-300 text-lg transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-primary-900 mb-3">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@awesome.com"
                      required
                      className="w-full px-5 py-4 border-2 border-dark-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none text-dark-900 placeholder-dark-300 text-lg transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="agentDescription" className="block text-sm font-bold text-primary-900 mb-3">
                      What kind of AI Agent would you like to build? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="agentDescription"
                      name="agentDescription"
                      value={formData.agentDescription}
                      onChange={handleChange}
                      placeholder="I want an AI agent that can..."
                      rows={6}
                      required
                      className="w-full px-5 py-4 border-2 border-dark-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none text-dark-900 placeholder-dark-300 text-lg resize-none transition-all"
                    />
                    <p className="text-xs text-dark-400 mt-2">
                      Examples: "Send confirmation emails", "Handle cancellations", "Respond to FAQs"
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-xl py-5 text-center font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                  >
                    Request Demo →
                  </button>

                  <div className="bg-primary-50 rounded-xl p-4 text-center border border-primary-200">
                    <p className="text-sm text-primary-900 font-semibold">
                      🚀 We typically respond within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-dark-25">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Join 200+ Tour Operators
          </h2>
          <p className="text-xl text-dark-600 mb-8">
            Our customers have automated <strong>10,000+ bookings</strong> and saved countless hours with PUNKU.AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/use-cases" className="btn-secondary inline-block px-8 py-3">
              See Use Cases
            </Link>
            <Link href="/tour-workers" className="btn-secondary inline-block px-8 py-3">
              Browse AI Workers
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-25 py-12 border-t border-dark-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            {/* Logo Section */}
            <div>
              <div className="mb-4">
                <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
              </div>
              <div className="mt-6">
                <Image src="/gdpr_compliant-1024x429.png" alt="GDPR Compliant" width={100} height={42} className="object-contain" />
              </div>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-sm font-bold text-primary-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Home</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-sm font-bold text-primary-900 mb-4">Follow Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">LinkedIn</Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-sm font-bold text-primary-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">T&C</Link>
                </li>
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Privacy</Link>
                </li>
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Imprint</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-dark-200 pt-6 text-center">
            <p className="text-dark-400 text-sm">© 2025 PUNKU.AI. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
