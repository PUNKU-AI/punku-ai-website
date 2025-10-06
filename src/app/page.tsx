"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BomberIntro from '../components/BomberIntro';

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isAnnualPricing, setIsAnnualPricing] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModernPage, setShowModernPage] = useState(true);
  const [isIntroMounted, setIntroMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { q: "What makes PUNKU.AI different from other AI platforms?", a: "PUNKU.AI combines the power of LangFlow with an intuitive visual interface, allowing you to build complex AI workflows without writing code. Our platform supports multiple AI models, has built-in RAG capabilities, and provides real-time collaboration features." },
    { q: "Do I need coding experience to use PUNKU.AI?", a: "No! PUNKU.AI is designed for both technical and non-technical users. Our drag-and-drop interface makes it easy for anyone to create AI agents, while advanced users can extend functionality with custom Python components." },
    { q: "What AI models does PUNKU.AI support?", a: "PUNKU.AI supports all major AI models including OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), Google (PaLM, Gemini), open-source models via HuggingFace, and local models. You can easily switch between models or use multiple models in the same workflow." },
    { q: "How secure is my data on PUNKU.AI?", a: "Your data security is our top priority. All data is encrypted in transit and at rest. We're SOC 2 compliant and GDPR compliant. You can also self-host PUNKU.AI for complete control over your data." },
    { q: "What kind of support do you offer?", a: "Free users get community support via Discord and documentation. Pro users receive priority email support with 24-hour response times. Enterprise users get dedicated support, custom training, and a dedicated success manager." }
  ];

  return (
    <>
      {isIntroMounted && (
        <BomberIntro onAnimationEnd={() => setIntroMounted(false)} />
      )}

      <div className={`transition-opacity duration-2000 ${showModernPage ? 'opacity-100' : 'opacity-0'}`}>
        <div className="min-h-screen bg-white">
          {/* Navigation Bar */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
            <div className="container-custom">
              <div className="flex items-center justify-between py-4">
                <div>
                  <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <a href="#features" className="text-dark-400 hover:text-primary-700 font-medium">Features</a>
                  <a href="#pricing" className="text-dark-400 hover:text-primary-700 font-medium">Pricing</a>
                  <a href="#faq" className="text-dark-400 hover:text-primary-700 font-medium">FAQ</a>
                  <a href="https://github.com/logspace-ai/langflow" target="_blank" rel="noopener noreferrer" className="btn-primary">Get Started</a>
                </div>
                <button className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <i className="fas fa-bars h-6 w-6 text-primary-900"></i>
                </button>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200">
                <a href="#features" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">Features</a>
                <a href="#pricing" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">Pricing</a>
                <a href="#faq" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">FAQ</a>
                <div className="p-4">
                  <a href="https://github.com/logspace-ai/langflow" target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">Get Started</a>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section className="bg-white min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-primary-900 mb-6">
                    Build <span id="typing-element" className="text-primary-500"></span>
                  </h1>
                  <p className="text-xl text-dark-400 mb-8 leading-relaxed">
                    The visual AI workflow builder that transforms how you create intelligent applications.
                    Drag, drop, and deploy powerful AI agents in minutes, not months.
                  </p>
                  <a href="https://github.com/logspace-ai/langflow" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mb-6">
                    Start building now
                  </a>
                </div>
                <div className="relative">
                  <div className="bg-dark-25 rounded-2xl p-4 sm:p-8 shadow-2xl">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-dark-400 ml-2">PUNKU.AI Workflow</span>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-dark-100 rounded"></div>
                        <div className="h-4 bg-dark-100 rounded w-3/4"></div>
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <i className="fas fa-wand-magic-sparkles h-4 w-4 text-primary-600"></i>
                            <span className="text-sm font-semibold text-primary-800">AI Agent Ready</span>
                          </div>
                          <p className="text-xs text-primary-700">Your RAG chatbot is ready to deploy with 99.2% accuracy</p>
                          <div className="flex gap-2 mt-2">
                            <button className="bg-primary-600 text-white px-3 py-1 rounded text-xs">Deploy Now</button>
                            <button className="bg-dark-100 text-dark-700 px-3 py-1 rounded text-xs">Test First</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-16 w-full">
                <p className="text-dark-400 text-lg font-medium mb-8">
                  Trusted by <strong>10,000+</strong> developers and companies worldwide
                </p>
                <div className="flex justify-center items-center gap-6 sm:gap-12 flex-wrap opacity-70 hover:opacity-90 transition-opacity">
                  <img src="/Airbnb_bw.png" alt="Airbnb" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src="/Brex_logo.png" alt="Brex" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src="/Slack_logo.png" alt="Slack" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src="/Stripe.png" alt="Stripe" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src="/Figma-Logo.png" alt="Figma" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          </section>

          {/* Problem/Solution Section */}
          <section id="features" className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-40 h-40 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-code text-red-600" style={{fontSize: '5rem'}}></i>
                  </div>
                  <h3 className="text-red-600 mb-4">The Challenge</h3>
                  <p className="text-dark-400">Building AI applications requires deep technical knowledge, complex integrations, and weeks of development time.</p>
                </div>
                <div className="text-center">
                  <div className="w-40 h-40 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-rocket text-orange-600" style={{fontSize: '5rem'}}></i>
                  </div>
                  <h3 className="text-orange-600 mb-4">Why It Matters</h3>
                  <p className="text-dark-400">Organizations miss opportunities and lose competitive advantage waiting months to deploy AI solutions that could be built in days.</p>
                </div>
                <div className="text-center">
                  <div className="w-40 h-40 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-bolt text-primary-600" style={{fontSize: '5rem'}}></i>
                  </div>
                  <h3 className="text-primary-900 mb-4">Our Solution</h3>
                  <p className="text-dark-400">PUNKU.AI's visual workflow builder lets anyone create sophisticated AI agents with drag-and-drop simplicity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Timeline */}
          <section className="section-padding bg-dark-25">
            <div className="container-custom">
              <h2 className="text-center mb-4">Build Production-Ready AI Agents in 3 Simple Steps</h2>
              <p className="text-center text-2xl font-bold text-primary-900 mb-16">No coding required</p>

              <div className="max-w-4xl mx-auto relative">
                <div className="hidden md:block absolute left-20 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 rounded-full"></div>

                <div className="relative flex items-start mb-16 timeline-step">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-40 h-40 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-palette text-white" style={{fontSize: '5rem'}}></i>
                    </div>
                  </div>
                  <div className="ml-8 flex-grow">
                    <div className="bg-primary-100 text-primary-700 px-4 py-1 rounded-full inline-block font-bold text-sm mb-3">STEP 1</div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Design Your Workflow</h3>
                    <p className="text-dark-400 mb-4">
                      Drag and drop pre-built components to create your AI workflow. Connect LLMs, vector databases, APIs, and custom logic visually.
                    </p>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-600">
                      <p className="text-sm font-semibold text-primary-700 mb-1">Example:</p>
                      <p className="text-sm text-dark-600">Build a customer support chatbot by connecting GPT-4 to your knowledge base in under 5 minutes</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start mb-16 timeline-step">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-40 h-40 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-flask text-white" style={{fontSize: '5rem'}}></i>
                    </div>
                  </div>
                  <div className="ml-8 flex-grow">
                    <div className="bg-primary-100 text-primary-700 px-4 py-1 rounded-full inline-block font-bold text-sm mb-3">STEP 2</div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Test & Iterate</h3>
                    <p className="text-dark-400 mb-4">
                      Test your workflow in real-time with our built-in playground. See exactly how your AI agent responds and fine-tune instantly.
                    </p>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-500">
                      <p className="text-sm font-semibold text-primary-700 mb-1">Example:</p>
                      <p className="text-sm text-dark-600">Chat with your agent, adjust parameters, and see changes instantly without redeployment</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start timeline-step">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-40 h-40 bg-primary-400 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-rocket text-white" style={{fontSize: '5rem'}}></i>
                    </div>
                  </div>
                  <div className="ml-8 flex-grow">
                    <div className="bg-primary-100 text-primary-700 px-4 py-1 rounded-full inline-block font-bold text-sm mb-3">STEP 3</div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Deploy Anywhere</h3>
                    <p className="text-dark-400 mb-4">
                      Export as API, embed in your app, or share with your team. Deploy to cloud or self-host for complete control.
                    </p>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-400">
                      <p className="text-sm font-semibold text-primary-700 mb-1">Result:</p>
                      <p className="text-sm text-dark-600"><strong>Production-ready AI agents</strong> in hours instead of weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="section-padding bg-dark-25">
            <div className="container-custom">
              <h2 className="text-center mb-4">Recommended Pricing Structure</h2>
              <p className="text-center text-lg text-dark-400 mb-12">Start with a 14-Day Trial (Full Growth Tier access)</p>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Starter */}
                <div className="card flex flex-col">
                  <h3 className="mb-4">Starter</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-900">$99</span>
                    <span className="text-dark-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {["1 department", "5 agents", "10K actions/month", "Email support", "Basic analytics"].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                          <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://github.com/logspace-ai/langflow" target="_blank" rel="noopener noreferrer" className="w-full btn-secondary text-center">Start 14-Day Trial</a>
                </div>
                {/* Growth */}
                <div className="card border-4 border-primary-600 relative flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                  <h3 className="mb-4">Growth</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-900">$299</span>
                    <span className="text-dark-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {["Unlimited departments", "Unlimited agents", "100K actions/month", "Priority support", "Advanced analytics", "API access"].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                          <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://github.com/logspace-ai/langflow" target="_blank" rel="noopener noreferrer" className="w-full btn-primary text-center">Start 14-Day Trial</a>
                </div>
                {/* Business */}
                <div className="card flex flex-col">
                  <h3 className="mb-4">Business</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-900">Custom</span>
                  </div>
                  <p className="text-dark-400 mb-8">Custom pricing based on your needs</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {["Custom actions limit", "Dedicated support", "SLA guarantees", "Self-hosted option", "Training & onboarding"].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                          <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:contact@punku.ai" className="w-full btn-secondary text-center">Contact Sales</a>
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
          <section className="gradient-cta section-padding text-center">
            <div className="container-custom">
              <h2 className="text-white mb-6">Ready to Build Your First AI Agent?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of developers building the future with PUNKU.AI. Start free, upgrade when you need more.</p>
              <a href="https://github.com/logspace-ai/langflow" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary-900 hover:bg-dark-25 inline-block">Start Building Now</a>
              <div className="flex items-center justify-center gap-2 mt-4">
                <i className="fas fa-shield-halved h-5 w-5 text-white/70"></i>
                <span className="text-white/70 text-sm">Open Source • SOC 2 Certified • GDPR Compliant</span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-dark-25 py-12 border-t border-dark-200">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-6 md:mb-0">
                  <div className="mb-2">
                    <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
                  </div>
                  <div className="flex gap-6 text-sm justify-center">
                    <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors">Privacy</a>
                    <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors">Terms</a>
                    <a href="#" className="text-dark-400 hover:text-primary-900 transition-colors">Contact</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/soc2-badge.svg" alt="SOC 2 Certified" className="h-10 object-contain" />
                  <img src="/gdpr-badge.svg" alt="GDPR Compliant" className="h-10 object-contain" />
                </div>
              </div>
              <div className="border-t border-dark-200 mt-8 pt-6 text-center">
                <p className="text-dark-400 text-sm">© 2025 PUNKU.AI. All Rights Reserved. Built with ❤️ for the AI community.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
