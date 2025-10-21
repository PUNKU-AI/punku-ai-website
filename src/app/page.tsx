"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BomberIntro from '../components/BomberIntro';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIntroMounted, setIntroMounted] = useState(false);
  const [isMetaAgentVisible, setIsMetaAgentVisible] = useState(false);
  const [isHeroChatVisible, setIsHeroChatVisible] = useState(false);

  useEffect(() => {
    // Trigger hero chat animation immediately
    const timer = setTimeout(() => {
      setIsHeroChatVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for Meta-Agent section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isMetaAgentVisible) {
            setIsMetaAgentVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const metaAgentSection = document.getElementById('meta-agent-demo');
    if (metaAgentSection) {
      observer.observe(metaAgentSection);
    }

    return () => {
      if (metaAgentSection) {
        observer.unobserve(metaAgentSection);
      }
    };
  }, [isMetaAgentVisible]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.onload = () => {
      // @ts-expect-error - Typed.js is loaded dynamically
      if (window.Typed) {
        // @ts-expect-error - Typed.js is loaded dynamically
        const typed = new window.Typed('#typing-element', {
          strings: [
            'complex AI workflows visually.',
            'intelligent chatbots in minutes.',
            'custom AI agents without code.',
            'RAG systems with drag & drop.',
            'any AI automation you imagine.'
          ],
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 2500,
          startDelay: 500,
          loop: true,
          smartBackspace: true
        });

        return () => {
          typed.destroy();
        };
      }
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    { q: "What makes PUNKU.AI different from other AI platforms?", a: "PUNKU.AI is specifically built for tour operators. Unlike generic automation tools, our AI workers understand the tours industry - from bookings and cancellations to weather delays and customer communications. Pick from 50+ pre-built workers or describe your workflow and our meta-agent builds it for you in minutes." },
    { q: "Do I need technical knowledge to use PUNKU.AI?", a: "No! That's the point. Simply describe what you want in plain English. For example: 'When someone books a tour, send confirmation and add to calendar.' Our meta-agent handles the technical setup. No coding, no complex workflows to build." },
    { q: "How long does it take to get started?", a: "Most tour operators deploy their first AI worker in under 30 minutes. Pick a pre-built worker, connect your booking system, and you're live. Custom workflows built by the meta-agent typically take 2-5 minutes to create." },
    { q: "How secure is my data on PUNKU.AI?", a: "Your data security is our top priority. All data is encrypted in transit and at rest. We're GDPR compliant and hosted on SOC 2 Type 2 compliant servers. All infrastructure is hosted on AWS, meeting the highest security standards for enterprise applications." },
    { q: "What happens if something goes wrong?", a: "AI workers have built-in safeguards and error handling. If something fails, you get notified immediately. Our support team (included in all paid plans) can help troubleshoot. Plus, you can always pause or modify any worker with one click." },
    { q: "Can I try it before committing?", a: "Yes! Start with a 14-day free trial - no credit card required. You get full access to the Growth tier, so you can test the meta-agent and deploy multiple workers. Cancel anytime, no questions asked." }
  ];

  return (
    <>
      {isIntroMounted && (
        <BomberIntro onAnimationEnd={() => setIntroMounted(false)} />
      )}

      <div className="min-h-screen bg-white">
          {/* Navigation Bar */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
            <div className="container-custom">
              <div className="flex items-center justify-between py-4">
                <div>
                  <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <a href="/tour-workers" className="text-dark-400 hover:text-primary-700 font-medium">AI Workers</a>
                  <a href="/meta-agent" className="text-dark-400 hover:text-primary-700 font-medium">Meta-Agent</a>
                  <a href="#pricing" className="text-dark-400 hover:text-primary-700 font-medium">Pricing</a>
                  <a href="/use-cases" className="text-dark-400 hover:text-primary-700 font-medium">Use Cases</a>
                  <a href="https://app.punku.ai" className="btn-primary">Try Now</a>
                </div>
                <button className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <i className="fas fa-bars h-6 w-6 text-primary-900"></i>
                </button>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200">
                <a href="/tour-workers" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">AI Workers</a>
                <a href="/meta-agent" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">Meta-Agent</a>
                <a href="#pricing" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">Pricing</a>
                <a href="/use-cases" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">Use Cases</a>
                <div className="p-4">
                  <a href="https://app.punku.ai" className="btn-primary w-full block text-center">Try Now</a>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section className="bg-white min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Left: Content */}
                <div className="text-center lg:text-left">
                  <h1 className="text-primary-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                    AI Workers That Actually Work.<br />
                    <span className="text-primary-500">Pick One or Let Our Meta-Agent Build One for You.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-dark-400 mb-8 leading-relaxed">
                    Choose from 50+ ready-to-go AI workers designed for tour operators and attractions. Or describe your workflow, and our meta-agent builds a custom worker in minutes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                    <a href="https://app.punku.ai" className="btn-primary inline-block px-8 py-4 text-lg">
                      Browse AI Workers
                    </a>
                    <a href="https://app.punku.ai" className="btn-secondary inline-block px-8 py-4 text-lg">
                      Build Your Own →
                    </a>
                  </div>
                  <div className="text-dark-600 text-lg space-y-1">
                    <p>Trusted by <strong>200+ tour operators</strong></p>
                    <p><strong>10,000+ bookings</strong> automated</p>
                  </div>
                </div>

                {/* Right: Animated Chat Demo */}
                <div className="relative hidden lg:block">
                  <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 shadow-2xl border-2 border-primary-100">
                    {/* Browser-like header */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-dark-25">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-dark-600 ml-2">
                          <span className="font-bold text-primary-600">PUNKU.AI</span> Meta-Agent
                        </span>
                      </div>

                      {/* Chat conversation */}
                      <div className="p-6 space-y-3 min-h-[450px] overflow-hidden">
                        {/* Meta-Agent Message 1 - Initial Greeting */}
                        <div className={`flex justify-start transition-all duration-500 ${isHeroChatVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '0.5s' }}>
                          <div className="bg-dark-50 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                            <p className="text-xs font-semibold mb-1 text-primary-700">Meta-Agent</p>
                            <p className="text-xs text-dark-700 leading-relaxed">
                              👋 Hi! I just scraped all your company info and added it to my memory. <strong>What should we automate first?</strong>
                            </p>
                          </div>
                        </div>

                        {/* User Message 1 */}
                        <div className={`flex justify-end transition-all duration-500 ${isHeroChatVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '1.5s' }}>
                          <div className="bg-primary-600 text-white rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                            <p className="text-xs font-semibold mb-1">You</p>
                            <p className="text-xs">Respond to FAQs that come to info@mytours.com</p>
                          </div>
                        </div>

                        {/* Meta-Agent Message 2 */}
                        <div className={`flex justify-start transition-all duration-500 ${isHeroChatVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '2.5s' }}>
                          <div className="bg-dark-50 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                            <p className="text-xs font-semibold mb-1 text-primary-700">Meta-Agent</p>
                            <p className="text-xs text-dark-700">
                              Great! Should I draft responses for approval or send automatically?
                            </p>
                          </div>
                        </div>

                        {/* User Message 2 */}
                        <div className={`flex justify-end transition-all duration-500 ${isHeroChatVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '3.5s' }}>
                          <div className="bg-primary-600 text-white rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                            <p className="text-xs font-semibold mb-1">You</p>
                            <p className="text-xs">Auto-send for simple questions, draft complex ones</p>
                          </div>
                        </div>

                        {/* Meta-Agent Message 3 - Success */}
                        <div className={`flex justify-start transition-all duration-500 ${isHeroChatVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '4.5s' }}>
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                            <p className="text-xs font-semibold mb-1 text-green-800">Meta-Agent</p>
                            <p className="text-sm text-dark-700 mb-2">
                              ✓ Done! Your AI worker is live
                            </p>
                            <div className="bg-white rounded-lg p-3 text-xs">
                              <p className="font-semibold text-dark-900 mb-1">📧 FAQ Responder</p>
                              <p className="text-dark-600">
                                • Monitors info@mytours.com<br/>
                                • Auto-replies to common questions<br/>
                                • Drafts complex responses for review<br/>
                                • Running 24/7
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Success indicator */}
                        <div className={`flex items-center justify-center gap-2 text-green-700 text-xs font-semibold transition-opacity duration-500 ${isHeroChatVisible ? 'opacity-100' : 'opacity-0'} mt-4`} style={{ transitionDelay: '5.5s' }}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Built in 52 seconds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50">
            <div className="container-custom max-w-4xl">
              <h2 className="text-center mb-4 text-4xl md:text-5xl font-bold text-primary-900">The Simplest Way to Automate Your Tour Business</h2>
              <p className="text-center text-xl text-dark-400 mb-16">Three simple steps to transform your operations</p>

              {/* Vertical Timeline */}
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-[39px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600 hidden md:block"></div>

                {/* Step 1 */}
                <div className="relative flex gap-8 mb-16">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform">
                      <span className="text-white text-3xl font-bold">1</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-grow bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-primary-100">
                    <h3 className="text-3xl font-bold text-primary-900 mb-4">Pick an AI Worker</h3>
                    <p className="text-lg text-dark-400 mb-6">Choose from our library of pre-built workers designed specifically for tour operators</p>
                    <div className="bg-primary-50 rounded-xl p-6 mb-4">
                      <p className="text-primary-700 font-semibold text-lg mb-3">Popular Workers:</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-dark-600 font-medium">&quot;Booking Confirmer&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-dark-600 font-medium">&quot;Review Responder&quot;</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-dark-600 font-medium">&quot;Availability Checker&quot;</span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Deploy in one click
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-8 mb-16">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform">
                      <span className="text-white text-3xl font-bold">2</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-grow bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-primary-100">
                    <h3 className="text-3xl font-bold text-primary-900 mb-4">Or Describe What You Want</h3>
                    <p className="text-lg text-dark-400 mb-6">Can&apos;t find the perfect worker? Simply describe your workflow in plain English</p>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-4 border-l-4 border-primary-600">
                      <p className="text-dark-700 italic text-lg leading-relaxed">
                        &quot;When someone books a tour, send confirmation, add to calendar, and text reminder day before&quot;
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                      Meta-agent builds it in minutes
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-8">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform">
                      <span className="text-white text-3xl font-bold">3</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-grow bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-primary-100">
                    <h3 className="text-3xl font-bold text-primary-900 mb-4">It Runs 24/7</h3>
                    <p className="text-lg text-dark-400 mb-6">Once deployed, your AI workers handle everything automatically</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-dark-900 mb-1">Always Working</p>
                            <p className="text-sm text-dark-600">Handles tasks day and night</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-dark-900 mb-1">Zero Maintenance</p>
                            <p className="text-sm text-dark-600">No updates or troubleshooting</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 border border-purple-200">
                      <p className="text-dark-700 font-medium text-center text-lg">
                        You focus on delivering amazing experiences ✨
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Meta-Agent Demo Section */}
          <section id="meta-agent-demo" className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-center mb-4 text-4xl md:text-5xl font-bold text-primary-900">See the Meta-Agent in Action</h2>
              <p className="text-center text-xl text-dark-400 mb-12 max-w-3xl mx-auto">
                Just describe what you want. The meta-agent asks clarifying questions and builds your AI worker.
              </p>

              <div className="max-w-5xl mx-auto">
                {/* Browser Frame */}
                <div className="bg-dark-100 rounded-t-xl p-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-grow bg-white rounded px-4 py-1 ml-4 text-sm text-dark-400">
                    app.punku.ai/meta-agent
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="bg-white border-2 border-dark-200 rounded-b-xl p-8 shadow-2xl">
                  {/* User Message 1 */}
                  <div className={`flex justify-end mb-6 transition-all duration-500 ${isMetaAgentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.5s' }}>
                    <div className="bg-primary-600 text-white rounded-2xl rounded-tr-sm px-6 py-4 max-w-2xl">
                      <p className="text-sm font-semibold mb-1">You</p>
                      <p>I need to send confirmation emails when someone books a tour</p>
                    </div>
                  </div>

                  {/* Meta-Agent Response 1 */}
                  <div className={`flex justify-start mb-6 transition-all duration-500 ${isMetaAgentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '1.5s' }}>
                    <div className="bg-dark-50 rounded-2xl rounded-tl-sm px-6 py-4 max-w-2xl">
                      <p className="text-sm font-semibold mb-1 text-primary-700">Meta-Agent</p>
                      <p className="text-dark-600 mb-3">Great! I can help you set that up. A few questions:</p>
                      <p className="text-dark-600">1. Do you use bookingKit as your reservation management software?</p>
                      <p className="text-dark-600 mt-2">2. What information should the confirmation email include?</p>
                    </div>
                  </div>

                  {/* User Message 2 */}
                  <div className={`flex justify-end mb-6 transition-all duration-500 ${isMetaAgentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '2.5s' }}>
                    <div className="bg-primary-600 text-white rounded-2xl rounded-tr-sm px-6 py-4 max-w-2xl">
                      <p className="text-sm font-semibold mb-1">You</p>
                      <p>Yes, I use bookingKit. Include tour name, date, time, meeting point, and what to bring.</p>
                    </div>
                  </div>

                  {/* Meta-Agent Response 2 */}
                  <div className={`flex justify-start mb-6 transition-all duration-500 ${isMetaAgentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '3.5s' }}>
                    <div className="bg-dark-50 rounded-2xl rounded-tl-sm px-6 py-4 max-w-2xl">
                      <p className="text-sm font-semibold mb-1 text-primary-700">Meta-Agent</p>
                      <p className="text-dark-600">Perfect! One more thing: Should I send a reminder before the tour?</p>
                    </div>
                  </div>

                  {/* User Message 3 */}
                  <div className={`flex justify-end mb-6 transition-all duration-500 ${isMetaAgentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '4.5s' }}>
                    <div className="bg-primary-600 text-white rounded-2xl rounded-tr-sm px-6 py-4 max-w-2xl">
                      <p className="text-sm font-semibold mb-1">You</p>
                      <p>Yes, send a text reminder the day before at 5 PM</p>
                    </div>
                  </div>

                  {/* Meta-Agent Final Response with Workflow */}
                  <div className={`flex justify-start transition-all duration-500 ${isMetaAgentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '5.5s' }}>
                    <div className="bg-dark-50 rounded-2xl rounded-tl-sm px-6 py-4 max-w-2xl w-full">
                      <p className="text-sm font-semibold mb-3 text-primary-700">Meta-Agent</p>
                      <p className="text-dark-600 mb-4">✓ Got it! Here&apos;s your AI worker:</p>

                      {/* Workflow Visualization */}
                      <div className="bg-white border-2 border-primary-200 rounded-lg p-6 mt-4">
                        <h4 className="font-bold text-primary-900 mb-4 text-center">Booking Confirmation Worker</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-green-700 font-bold">1</span>
                            </div>
                            <div className="flex-grow">
                              <p className="text-sm font-semibold text-dark-900">New booking detected</p>
                              <p className="text-xs text-dark-500">Trigger: bookingKit webhook</p>
                            </div>
                          </div>
                          <div className="ml-5 border-l-2 border-primary-300 h-4"></div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-700 font-bold">2</span>
                            </div>
                            <div className="flex-grow">
                              <p className="text-sm font-semibold text-dark-900">Send confirmation email</p>
                              <p className="text-xs text-dark-500">Includes: Tour details, meeting point, what to bring</p>
                            </div>
                          </div>
                          <div className="ml-5 border-l-2 border-primary-300 h-4"></div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-purple-700 font-bold">3</span>
                            </div>
                            <div className="flex-grow">
                              <p className="text-sm font-semibold text-dark-900">Add to Google Calendar</p>
                              <p className="text-xs text-dark-500">Auto-syncs with your calendar</p>
                            </div>
                          </div>
                          <div className="ml-5 border-l-2 border-primary-300 h-4"></div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-orange-700 font-bold">4</span>
                            </div>
                            <div className="flex-grow">
                              <p className="text-sm font-semibold text-dark-900">Send SMS reminder</p>
                              <p className="text-xs text-dark-500">Day before at 5 PM</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                          <a href="https://app.punku.ai" className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors text-center">
                            Deploy Now
                          </a>
                          <a href="https://app.punku.ai" className="px-6 py-3 border-2 border-dark-200 rounded-lg font-semibold hover:bg-dark-50 transition-colors text-center">
                            Customize
                          </a>
                        </div>
                      </div>

                      <p className="text-sm text-green-700 font-semibold mt-4">⏱️ Built in 2 minutes, 34 seconds</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <a href="https://app.punku.ai" className="btn-primary inline-block px-10 py-4 text-lg">
                  Try the Meta-Agent
                </a>
              </div>
            </div>
          </section>

          {/* Comparisons Section */}
          <section className="section-padding bg-dark-25">
            <div className="container-custom">
              <h2 className="text-center mb-16 text-4xl md:text-5xl font-bold text-primary-900">Why Tour Operators Choose PUNKU.AI</h2>

              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">vs. Zapier/Make/n8n</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>Steep learning curve - takes weeks to master</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>Build and maintain complex flows</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>Breaks when APIs change</span>
                    </li>
                  </ul>
                  <p className="flex items-start gap-3 text-green-600 font-semibold">
                    <span className="text-xl">✓</span>
                    <span>PUNKU.AI: Describe in English, deploy in minutes</span>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">vs. Automation Agency</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>$10,000+ for basic automation</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>Endless discovery meetings</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>You&apos;re forever dependent on them for any changes</span>
                    </li>
                  </ul>
                  <p className="flex items-start gap-3 text-green-600 font-semibold">
                    <span className="text-xl">✓</span>
                    <span>PUNKU.AI: €99/month and our meta-agent is ready 24/7</span>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">vs. ChatGPT/Claude</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>Copy-paste everything manually</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>No shared memory </span>
                    </li>
                    <li className="flex items-start gap-3 text-red-600">
                      <span className="text-xl">✗</span>
                      <span>Can&apos;t check bookings or send emails</span>
                    </li>
                  </ul>
                  <p className="flex items-start gap-3 text-green-600 font-semibold">
                    <span className="text-xl">✓</span>
                    <span>PUNKU.AI: Workers proactively take actions</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-center mb-4 text-4xl md:text-5xl font-bold text-primary-900">Simple, Transparent Pricing</h2>

              <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
                {/* Solo */}
                <div className="card flex flex-col bg-white border-2 border-dark-200">
                  <h3 className="mb-4 text-xl font-bold">Solo</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-900">€39</span>
                    <span className="text-dark-400 text-lg">/month</span>
                  </div>
                  <ul className="space-y-2 mb-8 flex-grow text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>2,000 credits per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>5 AI Agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>20 AI Models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>1GB Custom memory</span>
                    </li>
                  </ul>
                  <a href="https://app.punku.ai" className="w-full btn-secondary text-center text-sm py-2">Subscribe</a>
                </div>

                {/* Pro */}
                <div className="border-4 border-primary-500 rounded-xl p-8 relative flex flex-col bg-white shadow-xl transform scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold">Most Popular</div>
                  <h3 className="mb-4 text-xl font-bold">Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-900">€99</span>
                    <span className="text-dark-400 text-lg">/month</span>
                  </div>
                  <ul className="space-y-2 mb-8 flex-grow text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>5,000 credits per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Build your AI Workforce</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>12+ AI Agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>100+ AI Models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>5GB Custom memory</span>
                    </li>
                  </ul>
                  <a href="https://app.punku.ai" className="w-full btn-primary text-center text-sm py-2">Subscribe</a>
                </div>

                {/* Growth */}
                <div className="card flex flex-col bg-white border-2 border-dark-200">
                  <h3 className="mb-4 text-xl font-bold">Growth</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-900">€199</span>
                    <span className="text-dark-400 text-lg">/month</span>
                  </div>
                  <ul className="space-y-2 mb-8 flex-grow text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>10,000 credits per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Build your AI Workforce</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>200+ AI Models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>1:1 support via Slack/email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>20GB Custom memory</span>
                    </li>
                  </ul>
                  <a href="https://app.punku.ai" className="w-full btn-secondary text-center text-sm py-2">Subscribe</a>
                </div>

                {/* Enterprise */}
                <div className="card flex flex-col bg-white border-2 border-dark-200">
                  <h3 className="mb-4 text-xl font-bold">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-900">€€€</span>
                    <span className="text-dark-400 text-lg">/month</span>
                  </div>
                  <ul className="space-y-2 mb-8 flex-grow text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Unlimited priority AI usage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>AI Model Finetuning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Dedicated cloud infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Multi-organization management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>SLA guarantees</span>
                    </li>
                  </ul>
                  <a href="mailto:sales@punku.ai" className="w-full btn-secondary text-center text-sm py-2">Contact Sales</a>
                </div>
              </div>

              <p className="text-center text-dark-600 mt-12 text-lg">
                All plans include <strong>14-day free trial</strong> • No setup fees • Cancel anytime
              </p>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-center mb-4 text-4xl md:text-5xl font-bold text-primary-900">
                Seamless Integrations
              </h2>
              <p className="text-center text-xl text-dark-400 mb-16 max-w-3xl mx-auto">
                Connect with 2,800+ tools and services
              </p>

              <div className="max-w-6xl mx-auto">
                {/* Featured Integrations */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Google Workspace */}
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <Image src="/Gsuite-logo.png" alt="Google Workspace" width={200} height={60} className="h-12 w-auto object-contain" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-3 text-center">Google Workspace</h3>
                    <p className="text-dark-400 text-center">Gmail, Calendar, Drive, Sheets & more</p>
                  </div>

                  {/* bookingKit */}
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-primary-100 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <Image src="/bookingkit_Logo_02.png" alt="bookingKit" width={200} height={60} className="h-12 w-auto object-contain" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-3 text-center">bookingKit</h3>
                    <p className="text-dark-400 text-center">Native integration with your booking system</p>
                  </div>
                </div>

                {/* 2800+ Integrations Badge */}
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-12 text-center border-2 border-primary-100">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-6xl font-black text-primary-900">2,800+</div>
                  </div>
                  <p className="text-2xl font-bold text-primary-900 mb-3">Total Integrations Available</p>
                  <p className="text-dark-400 text-lg mb-6 max-w-3xl mx-auto">
                    Connect to virtually any tool or service. <strong className="text-primary-900">Our meta-agent creates custom tools to work with any API and MCP server</strong> — no coding required.
                  </p>
                  <a href="mailto:integrations@punku.ai" className="btn-primary inline-block">
                    Request Integration
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
              <h2 className="text-center mb-16">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-dark-200 rounded-lg">
                    <button onClick={() => toggleFaq(index)} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-dark-25 transition-colors">
                      <span className="font-semibold text-primary-900">{faq.q}</span>
                      <i className={`fas fa-chevron-down h-5 w-5 text-dark-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}></i>
                    </button>
                    {expandedFaq === index && <div className="px-6 pb-4 text-dark-400">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="trial" className="section-padding text-center relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900">
            <div className="container-custom relative z-10">
              <h2 className="!text-white mb-6 text-4xl md:text-5xl font-black">Join 200+ Tour Operators Automating with PUNKU.AI</h2>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-bold">Stop drowning in repetitive tasks. Let AI workers handle the boring stuff while you create amazing experiences.</p>
              <a href="https://app.punku.ai" className="btn-primary bg-white text-primary-900 hover:bg-gray-100 inline-block px-10 py-4 text-xl font-bold shadow-2xl">Start 14-Day Free Trial</a>
              <p className="text-white text-sm mt-4 font-bold">No credit card required • Set up in minutes • Cancel anytime</p>
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
                      <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Home</a>
                    </li>
                    <li>
                      <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">About</a>
                    </li>
                    <li>
                      <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Contact</a>
                    </li>
                  </ul>
                </div>

                {/* Follow Us Section */}
                <div>
                  <h3 className="text-sm font-bold text-primary-900 mb-4">Follow Us</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">LinkedIn</a>
                    </li>
                  </ul>
                </div>

                {/* Legal Section */}
                <div>
                  <h3 className="text-sm font-bold text-primary-900 mb-4">Legal</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">T&C</a>
                    </li>
                    <li>
                      <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Privacy</a>
                    </li>
                    <li>
                      <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Imprint</a>
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
    </>
  );
}
